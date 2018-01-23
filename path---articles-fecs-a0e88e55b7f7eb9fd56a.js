webpackJsonp([0xdd8db6e9292a],{383:function(s,a){s.exports={data:{markdownRemark:{html:'<blockquote>\n<p>All code in any code-base should look like a single person typed it, no matter how many people contributed. — idiomatic.js</p>\n<p>在任一个代码库中，不管是多少人协同开发，所有的代码都应该看起来像是一个人写的。- idiomatic.js</p>\n</blockquote>\n<p>This means strictly enforcing these agreed upon guidelines at all times.</p>\n<p>今天要讲的不是代码规范，关于代码规范网上已经有了非常好的实践和各大公司公开的实践指南，大家可自行查询。 例如: <a href="http://zoomzhao.github.io/code-guide/">code-guide chinese</a>.</p>\n<p>然而，有了规范是一回事，执行起来又是一回事。今天要介绍的就是一款按照指定风格检测代码是否符合规范的工具，通过工具的自动检测，以确保每一行代码都符合规范。</p>\n<h2>FECS 是什么？</h2>\n<p><a href="http://fecs.baidu.com/">fecs</a> 是以百度前端代码规范为目标的基于 Node.js 的前端代码风格检测工具，套件内包括了 <code>htmlcs、csshint、lesslint</code> 和 <code>jformatter</code> 等工具。</p>\n<p>因此，<code>fecs</code> 不仅能检查 <code>HTML/CSS/LESS/JavaScript</code> 代码的规范问题，而且还能修复代码的规范问题。</p>\n<h2>FECS 能干什么？</h2>\n<h3>fecs check</h3>\n<p>首先，主要功能就是代码格式的检查，当然了呢，因为是最初是供于百度内部使用的工具，自然就是以 <a href="https://github.com/ecomfe/spec/">百度前端代码规范</a> 为首要目标，好在该规范第一开源，第二还不错，因此可以直接使用。</p>\n<p>当然了，如果你不喜欢其中的某些规则，<code>FECS</code> 也是支持配置文件设置规则的方式的，具体的在下文说明。</p>\n<p>需要说明的是，<code>FECS</code> 目前只支持 <code>HTML/CSS/LESS/JavaScript</code> 四种文件和语法的检测。</p>\n<h4>Javascript</h4>\n<p><code>Javascript</code> 方面 <code>FECS</code> 采用了 <code>eslint</code> 检测引擎，因此你在自定义规则的时候可以参考 <a href="http://esling.org/">esling</a> 的文档进行相关配置。<code>FECS</code> 只是在 <code>eslint</code> 基础之上针对百度的代码规范作了新的规则实现或调整。详细内容见 <a href="https://github.com/ecomfe/fecs/wiki/FECSRules">FECS 自有规则</a></p>\n<h4>CSS/LESS/HTML</h4>\n<p>CSS 的 linter 是使用了内部优化过的 <code>csshint</code>。LESS 和 HTML 方面则分别使用了 <code>lesslint</code> 和 <code>htmlcs</code>。</p>\n<h2>FECS 的安装及其使用</h2>\n<h3>安装</h3>\n<p>安装 <code>FECS</code> 需要依赖 <code>node</code> <code>npm</code> 环境支持，执行以下命令即可安装:</p>\n<div class=\'highlight\'><pre class="editor editor-colors"><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>$&nbsp;[sudo]&nbsp;npm&nbsp;install&nbsp;fecs&nbsp;-g</span></span></div></pre></div>\n<h3>使用</h3>\n<p>使用方式可使用以下命令查看:</p>\n<div class=\'highlight\'><pre class="editor editor-colors"><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>$&nbsp;fecs&nbsp;--help</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>$&nbsp;fecs&nbsp;check&nbsp;--help</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>$&nbsp;fecs&nbsp;format&nbsp;--help</span></span></div></pre></div>\n<p>具体的命令参数？哎呀，官方已经写的够详细的了，还是看官方文档吧: <a href="https://github.com/ecomfe/fecs/wiki/CLI">FECS 命令参数</a></p>\n<h2>自定义配置</h2>\n<p><code>FECS</code> 支持通过配置文件的方式指定特定的规则。</p>\n<p>配置文件的支持来自 <code>manis</code>，支持使用 <code>.fecsrc</code> 或 <code>package.json</code>，但以第一个找到的为准。配置文件 <code>.fecsrc</code> 大体是这个样子的:</p>\n<div class=\'highlight\'><pre class="editor editor-colors"><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>{</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&quot;files&quot;:&nbsp;[],</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&quot;eslint&quot;:&nbsp;{...},</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&quot;csshint&quot;:&nbsp;{...},</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&quot;htmlcs&quot;:&nbsp;{...},</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&quot;csscomb&quot;:&nbsp;{...}</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;...</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>}</span></span></div></pre></div>\n<p>比如说他们的<a href="https://github.com/ecomfe/spec/blob/master/javascript-style-guide.md">JavaScript 编码规范</a> 中关于换行中有这样一条 <a href="https://github.com/ecomfe/spec/blob/master/javascript-style-guide.md#%E5%BB%BA%E8%AE%AE-%E5%AF%B9%E4%BA%8E-ifelsetrycatchfinally-%E7%AD%89%E8%AF%AD%E5%8F%A5%E6%8E%A8%E8%8D%90%E4%BD%BF%E7%94%A8%E5%9C%A8--%E5%8F%B7%E5%90%8E%E6%B7%BB%E5%8A%A0%E4%B8%80%E4%B8%AA%E6%8D%A2%E8%A1%8C-%E7%9A%84%E9%A3%8E%E6%A0%BC%E4%BD%BF%E4%BB%A3%E7%A0%81%E5%B1%82%E6%AC%A1%E7%BB%93%E6%9E%84%E6%9B%B4%E6%B8%85%E6%99%B0%E9%98%85%E8%AF%BB%E6%80%A7%E6%9B%B4%E5%A5%BD">对于 if...else...try...catch...finally 等语句，推荐使用在 } 号后添加一个换行的风格，使代码层次结构更清晰，阅读性更好</a>，这一条我就很不喜欢嘛，那我可以这样配置:</p>\n<div class=\'highlight\'><pre class="editor editor-colors"><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>{</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&quot;eslint&quot;:&nbsp;{</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&quot;rules&quot;:&nbsp;{</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;brace-style&quot;:&nbsp;[2,&nbsp;&quot;1tbs&quot;,&nbsp;{}]</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;}</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;}</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>}</span></span></div></pre></div>\n<p>这样配置之后再进行检测，就能愉快的按照下面这种写法愉快的 coding 了。</p>\n<div class=\'highlight\'><pre class="editor editor-colors"><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>if&nbsp;(condition)&nbsp;{</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;//&nbsp;some&nbsp;statements;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>}&nbsp;else&nbsp;{</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;//&nbsp;some&nbsp;statements;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>}</span></span></div></pre></div>\n<h2>多工具支持</h2>\n<p>详情支持列表请参考官方文档 <a href="https://github.com/ecomfe/fecs#%E5%B7%A5%E5%85%B7%E6%94%AF%E6%8C%81">工具支持</a>。</p>\n<p>嗯。文档依旧写的很完善，基本上已经没什么好补充的了。</p>\n<p>在这里我有一个小提示，就是工具对 <code>atom</code> 编辑器的支持相对于对 <code>sublime</code> 的支持来说要优秀很多， 包括检测速度呀，错误提示呀，<code>atom</code> 都略称一筹，这取决于 <code>atom</code> 优秀的插件机制。并且我在 <code>sublime</code>下面使用的时候发现了一个 bug，就是错误提示会显示为特殊编码导致无法以中文显示。解决方案呢，在这里<a href="https://github.com/leeight/Baidu-FE-Code-Style/issues/6">https://github.com/leeight/Baidu-FE-Code-Style/issues/6</a>，不过感觉略麻烦的样子。</p>\n<h2>Tips:</h2>\n<p><code>FECS</code> 的错误报告默认为英文格式，由各 linter 直接提供。<code>FECS</code> 根据百度前端代码规范，作了一次影射转换，通过指定 reporter 为 baidu 可以看到中文的报告输出效果，对于某些比较抽象的描述，会同时在括号内提供英文原文补充说明。</p>\n<p>例如，你可以这样用:</p>\n<div class=\'highlight\'><pre class="editor editor-colors"><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>fecs&nbsp;check&nbsp;--reporter=baidu</span></span></div></pre></div>\n<p>或者，更直接一点，直接添加一个 <code>alias</code>，使其在执行 <code>fecs check</code> 命令时默认为中文输出。</p>\n<div class=\'highlight\'><pre class="editor editor-colors"><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>alias&nbsp;fecs=&#39;fecs&nbsp;--reporter=baidu&#39;</span></span></div></pre></div>\n<h2>相关链接:</h2>\n<ul>\n<li><a href="http://fecs.baidu.com/">FECS 官网</a></li>\n<li><a href="http://github.com/ecomfe/fecs/wiki">FECS WIKI</a></li>\n<li><a href="http://github.com/ecomfe/fecs">FECS Github</a></li>\n</ul>',frontmatter:{title:"前端代码风格检查套件 FECS",date:"2015-12-25",category:"技术",tags:null,cover:null}},site:{siteMetadata:{url:"http://blog.sqrtthree.com/",thumbnail:"",defaultAuthor:"根号三",donation:{status:!0,channel:{alipay:"http://7xl8me.com1.z0.glb.clouddn.com/alipay.JPG",wechat:"http://7xl8me.com1.z0.glb.clouddn.com/wechat_receive_money.JPG"}},share:!0}}},pathContext:{slug:"/fecs/",title:"前端代码风格检查套件 FECS",excerpt:"All code in any code-base should look like a single person typed it, no matter how many people contributed. — idiomatic.js…",prev:{fields:{slug:"/javascript-developer-survey-results/"},frontmatter:{title:"JavaScript 开发者年度调查报告",category:"技术",tags:["译文"],cover:null,date:"2015-12-26"},excerpt:"原文链接 :  JavaScript Developer Survey Results 原文作者 :  ponyfoo 译文出自 :  掘金翻译计划 译者 :  sqrthree(根号三) 校对者:  Zhangdroid 截止目前有超过了 500…"},next:{fields:{slug:"/jQuery3-0-Alpha-Versions-Released/"},frontmatter:{title:"jQuery 3.0 以及兼容版的 Alpha 版本发布",category:"技术",tags:["jQuery3.0","译文"],cover:null,date:"2015-11-12"},excerpt:"从我们做出上一个重大的版本发布已经过去很长时间了，所以你理应再得到一个新版本。因此我们非常高兴的宣布  jQuery 3.0  的第一个  alpha  版本的发布。 尽管版本号已经到了 3.…"}}}}});
//# sourceMappingURL=path---articles-fecs-a0e88e55b7f7eb9fd56a.js.map