webpackJsonp([0xb1e288924b75],{403:function(n,s){n.exports={data:{markdownRemark:{html:'<blockquote>\n<p>今天在写一个通过 GitHub API 获取 README 的功能的时候, 由于返回值为 Base64 编码, 我在尝试用 js 转换为 UFT-8 的时候发现中文会导致乱码. 在这里总结一下相关的知识点吧.</p>\n</blockquote>\n<h2>首先, 为什么要编码？</h2>\n<p>由于一些网络通讯协议的限制, 又或者是出于信息加密的目的, 我们就需要将原信息转换为 base64 编码,然后才能进行传输.例如，发送某些含有 ASCII 码表中 0 到 31 之间的控制字符的数据。</p>\n<p>通常的方法是通过 <code>window.btoa()</code> 方法对源数据进行编码, 然后接收方使用 <code>window.atob()</code> 方法对其进行解码, 从而得到原数据.</p>\n<h2>window.btoa 与 window.atob 不支持中文</h2>\n<p>但是这种方法存在的问题是:<code>window.btoa()</code> 不支持中文, <code>window.atob()</code>转换含有中文的 base64编码的时候中文部分会变为乱码.详情如下:</p>\n<p>我们在 bash 终端下先得到『中文』这两个字的 base64 编码</p>\n<div class=\'highlight\'><pre class="editor editor-colors"><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>$&nbsp;echo&nbsp;中文&nbsp;|&nbsp;base64</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>5Lit5paHCg==</span></span></div></pre></div>\n<p>然后我们在 Chrome console 里面通过 <code>window.atob</code> 进行解码, 结果如下</p>\n<div class=\'highlight\'><pre class="editor editor-colors"><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&gt;&nbsp;window.atob(&#39;5Lit5paHCg==&#39;)</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&lt;&nbsp;&quot;ä¸­æ</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&quot;</span></span></div></pre></div>\n<p>继续在 Chrome console 里面执行 <code>window.btoa</code> 编码, 结果报错.</p>\n<div class=\'highlight\'><pre class="editor editor-colors"><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&gt;&nbsp;window.btoa(&#39;中文&#39;);</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&lt;&nbsp;Uncaught&nbsp;DOMException:&nbsp;Failed&nbsp;to&nbsp;execute&nbsp;&#39;btoa&#39;&nbsp;on&nbsp;&#39;Window&#39;:&nbsp;The&nbsp;string&nbsp;to&nbsp;be&nbsp;encoded&nbsp;contains&nbsp;characters&nbsp;outside&nbsp;of&nbsp;the&nbsp;Latin1&nbsp;range.</span></span></div></pre></div>\n<p>经查资料发现, <code>btoa</code> 方法仅支持 ASCII 编码.</p>\n<h2>借助 encodeURIComponent 和 decodeURIComponent 转义中文字符</h2>\n<p>由于 <code>btoa</code> 方法仅支持 ASCII 编码, 我们在转换中文的时候就需要先将中文转换为 ASCII 字符序列，再通过 btoa 进行 base64 编码, 从而实现『曲线救国』。</p>\n<p>转换 ASCII 字符序列的方法我们可以借助于 <code>encodeURIComponent</code> 和 <code>decodeURIComponent</code> 这两个方法完成.</p>\n<p>编码:</p>\n<div class=\'highlight\'><pre class="editor editor-colors"><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&gt;&nbsp;window.btoa(encodeURIComponent(&#39;中文&#39;))</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&lt;&nbsp;&quot;JUU0JUI4JUFEJUU2JTk2JTg3&quot;</span></span></div></pre></div>\n<p>解码:</p>\n<div class=\'highlight\'><pre class="editor editor-colors"><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&gt;&nbsp;decodeURIComponent(window.atob(&#39;JUU0JUI4JUFEJUU2JTk2JTg3&#39;))</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&lt;&nbsp;&quot;中文&quot;</span></span></div></pre></div>\n<h2>GitHub API 获取 README 的中文乱码问题</h2>\n<p>但是通过上面的解码方式解码 GitHub 的 README 数据的时候仍旧是乱码, 经过查找相关资料发现了 Base64 的编码与解码转的最优方案是下面这种:</p>\n<div class=\'highlight\'><pre class="editor editor-colors"><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>function&nbsp;utf8_to_b64(str)&nbsp;{</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;return&nbsp;window.btoa(unescape(encodeURIComponent(str)))</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>}</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>function&nbsp;b64_to_utf8(str)&nbsp;{</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;return&nbsp;decodeURIComponent(escape(window.atob(str)))</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>}</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>//&nbsp;Usage:</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>utf8_to_b64(&#39;✓&nbsp;à&nbsp;la&nbsp;mode&#39;);&nbsp;//&nbsp;JTI1dTI3MTMlMjUyMCUyNUUwJTI1MjBsYSUyNTIwbW9kZQ==</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>b64_to_utf8(&#39;JTI1dTI3MTMlMjUyMCUyNUUwJTI1MjBsYSUyNTIwbW9kZQ==&#39;);&nbsp;//&nbsp;&quot;✓&nbsp;à&nbsp;la&nbsp;mode&quot;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>utf8_to_b64(&#39;I&nbsp;\\u2661&nbsp;Unicode!&#39;);&nbsp;//&nbsp;SSUyNTIwJTI1dTI2NjElMjUyMFVuaWNvZGUlMjUyMQ==</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>b64_to_utf8(&#39;SSUyNTIwJTI1dTI2NjElMjUyMFVuaWNvZGUlMjUyMQ==&#39;);&nbsp;//&nbsp;&quot;I&nbsp;♡&nbsp;Unicode!&quot;</span></span></div></pre></div>\n<p>通过上面的这种方法去解析 GitHub 的数据的时候, 发现中文能够正常显示了. 显然 GitHub 也是采用了这种方案.</p>\n<h2>参考资料</h2>\n<ul>\n<li><a href="https://developer.mozilla.org/en/docs/Web/API/WindowBase64/Base64_encoding_and_decoding">https://developer.mozilla.org/en/docs/Web/API/WindowBase64/Base64<em>encoding</em>and_decoding</a></li>\n<li><a href="https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/btoa">https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/btoa</a></li>\n</ul>',frontmatter:{title:"解决 Javascript 中 atob 方法解码中文字符乱码问题",date:"2015-08-29",category:"技术",tags:null}},site:{siteMetadata:{defaultAuthor:"根号三",language:"zh-cmn-Hans",SEOTitle:"sqrtthree's blog | 根号三的博客",keyword:"前端 前端工程师 HTML5 CSS3 Javascript React Vue Node.js Go Docker",description:"web 开发者, 擅长各项前端技能，深入研究 web 端开发与前端性能, 并对 Nodejs 及 Go 服务端技术栈有深入了解。",donation:{status:!0,channel:{alipay:"http://7xl8me.com1.z0.glb.clouddn.com/alipay.JPG",wechat:"http://7xl8me.com1.z0.glb.clouddn.com/wechat_receive_money.JPG"}},share:!0}}},pathContext:{slug:"/utf8-to-b64/",title:"解决 Javascript 中 atob 方法解码中文字符乱码问题",prev:{fields:{slug:"/strict-mode-in-javascript/"},frontmatter:{title:"聊聊 JS 中的严格模式",category:"技术",tags:["JS"],cover:null,date:"2015-10-09"},excerpt:"什么是严格模式？ 严格模式  是 ECMAScript 5 中引入的一种将更好的错误检查引入代码中的方法，现在已经被大多浏览器实现。 顾名思义，这种模式使得Javascript…"},next:{fields:{slug:"/jade-01/"},frontmatter:{title:"前端开发模板引擎 -- Jade之开篇",category:"技术",tags:["jade"],cover:null,date:"2015-08-20"},excerpt:"随着 web 发展，前端应用变得越来越复杂，基于后端的  javascript(Node.js)  也开始崭露头角，此时   javascript  被寄予了更大的期望，与此同时  javascript MVC…"}}}}});
//# sourceMappingURL=path---utf-8-to-b-64-84a0b75dc9033ed9e993.js.map