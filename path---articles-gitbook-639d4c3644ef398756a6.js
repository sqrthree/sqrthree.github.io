webpackJsonp([34301039453723],{384:function(n,s){n.exports={data:{markdownRemark:{html:'<blockquote>\n<p>Modern book format and toolchain using Git and Markdown</p>\n</blockquote>\n<p>这是 GitBook 项目主页上对 GitBook 的定义。</p>\n<p>GitBook 是一个命令行工具。通过它，你能够使用 Git 和 Markdown 来编排书本。并且通过工具可以自动生成相应的 HTML、PDF 和 epub 格式的文件。</p>\n<p>总之，就是好用，好使，加好看。</p>\n<!-- more -->\n<p>刚好近日准备通过 GitBook 来写一些教程，这里就先简明介绍一下它的使用。嗯？我写的什么教程？ 哈哈，就不告诉你，等写好了再说 &#x3C;(￣ ▽ ￣)> 哇哈哈…</p>\n<h2>安装</h2>\n<p>因为 GitBook 是一个基于 <a href="http://nodejs.org/">Node</a> 开发的命令行工具。因此需要您自行配置 <a href="http://nodejs.org/">Node</a> 和 <a href="https://www.npmjs.com/package/npm">npm</a> 环境。如果你已经安装好这些环境之后，GitBook 的安装只需要一步就能完成！</p>\n<div class=\'highlight\'><pre class="editor editor-colors"><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>$&nbsp;npm&nbsp;install&nbsp;-g&nbsp;gitbook-cli</span></span></div></pre></div>\n<h2>使用</h2>\n<p>GitBook 的用法非常简单，老规矩，先看一下我们都有哪些命令可以使用:</p>\n<div class=\'highlight\'><pre class="editor editor-colors"><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>$&nbsp;gitbook&nbsp;help</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;build&nbsp;[book]&nbsp;[output]&nbsp;\t&nbsp;build&nbsp;a&nbsp;book</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;--format&nbsp;\t&nbsp;Format&nbsp;to&nbsp;build&nbsp;to&nbsp;(Default&nbsp;is&nbsp;website;&nbsp;Values&nbsp;are&nbsp;website,&nbsp;json,&nbsp;ebook)</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;--log&nbsp;\t&nbsp;Minimum&nbsp;log&nbsp;level&nbsp;to&nbsp;display&nbsp;(Default&nbsp;is&nbsp;info;&nbsp;Values&nbsp;are&nbsp;debug,&nbsp;info,&nbsp;warn,&nbsp;error,&nbsp;disabled)</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;pdf&nbsp;[book]&nbsp;[output]&nbsp;\t&nbsp;build&nbsp;a&nbsp;book&nbsp;to&nbsp;pdf</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;--log&nbsp;\t&nbsp;Minimum&nbsp;log&nbsp;level&nbsp;to&nbsp;display&nbsp;(Default&nbsp;is&nbsp;info;&nbsp;Values&nbsp;are&nbsp;debug,&nbsp;info,&nbsp;warn,&nbsp;error,&nbsp;disabled)</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;epub&nbsp;[book]&nbsp;[output]&nbsp;\t&nbsp;build&nbsp;a&nbsp;book&nbsp;to&nbsp;epub</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;--log&nbsp;\t&nbsp;Minimum&nbsp;log&nbsp;level&nbsp;to&nbsp;display&nbsp;(Default&nbsp;is&nbsp;info;&nbsp;Values&nbsp;are&nbsp;debug,&nbsp;info,&nbsp;warn,&nbsp;error,&nbsp;disabled)</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;mobi&nbsp;[book]&nbsp;[output]&nbsp;\t&nbsp;build&nbsp;a&nbsp;book&nbsp;to&nbsp;mobi</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;--log&nbsp;\t&nbsp;Minimum&nbsp;log&nbsp;level&nbsp;to&nbsp;display&nbsp;(Default&nbsp;is&nbsp;info;&nbsp;Values&nbsp;are&nbsp;debug,&nbsp;info,&nbsp;warn,&nbsp;error,&nbsp;disabled)</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;serve&nbsp;[book]&nbsp;\t&nbsp;Build&nbsp;then&nbsp;serve&nbsp;a&nbsp;gitbook&nbsp;from&nbsp;a&nbsp;directory</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;--port&nbsp;\t&nbsp;Port&nbsp;for&nbsp;server&nbsp;to&nbsp;listen&nbsp;on&nbsp;(Default&nbsp;is&nbsp;4000)</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;--lrport&nbsp;\t&nbsp;Port&nbsp;for&nbsp;livereload&nbsp;server&nbsp;to&nbsp;listen&nbsp;on&nbsp;(Default&nbsp;is&nbsp;35729)</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;--watch&nbsp;\t&nbsp;Enable/disable&nbsp;file&nbsp;watcher&nbsp;(Default&nbsp;is&nbsp;true)</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;--format&nbsp;\t&nbsp;Format&nbsp;to&nbsp;build&nbsp;to&nbsp;(Default&nbsp;is&nbsp;website;&nbsp;Values&nbsp;are&nbsp;website,&nbsp;json,&nbsp;ebook)</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;--log&nbsp;\t&nbsp;Minimum&nbsp;log&nbsp;level&nbsp;to&nbsp;display&nbsp;(Default&nbsp;is&nbsp;info;&nbsp;Values&nbsp;are&nbsp;debug,&nbsp;info,&nbsp;warn,&nbsp;error,&nbsp;disabled)</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;install&nbsp;[book]&nbsp;\t&nbsp;install&nbsp;plugins&nbsp;dependencies</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;init&nbsp;[directory]&nbsp;\t&nbsp;create&nbsp;files&nbsp;and&nbsp;folders&nbsp;based&nbsp;on&nbsp;contents&nbsp;of&nbsp;SUMMARY.md</span></span></div></pre></div>\n<p>实际上我们最常用的命令只有两个:</p>\n<ul>\n<li><code>gitbook init</code>: 初始化书籍目录</li>\n<li><code>gitbook serve</code>: 在编写书籍时启动一个服务器，自动编译&#x26;更新内容，并在浏览器中预览</li>\n</ul>\n<h2>使用</h2>\n<h4>gitbook init</h4>\n<p>首先，通过终端(PC 下可使用命令提示符)进入到你想要书写内容的目录，然后执行 <code>gitbook init</code> 命令，之后目录中会自动生成 <code>README.md</code> 和 <code>SUMMARY.md</code> 两个文件。</p>\n<p>这两个文件在 GitBook 项目中是必须存在的，其中 <code>README.md</code> 是对书籍的简单介绍，<code>SUMMARY.md</code> 是对书籍目录的描述，并且 GitBook 会通过该文件中的目录描述自动生成对应的目录和文件。</p>\n<p>其中，<code>SUMMARY.md</code> 文件中内容的格式是这样的:</p>\n<div class=\'highlight\'><pre class="editor editor-colors"><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>*&nbsp;[Chapter1](chapter1/README.md)</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;*&nbsp;[Section1.1](chapter1/section1.1.md)</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;*&nbsp;[Section1.2](chapter1/section1.2.md)</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>*&nbsp;[Chapter2](chapter2/README.md)</span></span></div></pre></div>\n<p>当你修改了 <code>SUMMARY.md</code> 文件中的内容后，你可以再次使用 <code>gitbook init</code> 来自动生成对应的目录和文件。</p>\n<h4>Multi-Languages</h4>\n<p>如果你要写的书籍是多语言版，你只需要创建一个 <code>LANGS.md</code> 文件，然后编写配置内容即可:</p>\n<div class=\'highlight\'><pre class="editor editor-colors"><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>*&nbsp;[English](en/)</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>*&nbsp;[French](fr/)</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>*&nbsp;[Español](es/)</span></span></div></pre></div>\n<h4>gitbook serve</h4>\n<p>书籍目录结构创建完成以后，我们就可以使用 <code>gitbook serve</code> 来编译和预览书籍了：</p>\n<p><code>gitbook serve</code> 命令实际上会首先调用 <code>gitbook build</code> 编译书籍，完成以后会打开一个 web 服务器，监听在本地的 <code>4000</code> 端口。</p>\n<div class=\'highlight\'><pre class="editor editor-colors"><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>$&nbsp;gitbook&nbsp;serve</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>Live&nbsp;reload&nbsp;server&nbsp;started&nbsp;on&nbsp;port:&nbsp;35729</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>Press&nbsp;CTRL+C&nbsp;to&nbsp;quit&nbsp;...</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>info:&nbsp;loading&nbsp;book&nbsp;configuration....OK</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>info:&nbsp;load&nbsp;plugin&nbsp;gitbook-plugin-highlight&nbsp;....OK</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>info:&nbsp;load&nbsp;plugin&nbsp;gitbook-plugin-search&nbsp;....OK</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>info:&nbsp;load&nbsp;plugin&nbsp;gitbook-plugin-sharing&nbsp;....OK</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>info:&nbsp;load&nbsp;plugin&nbsp;gitbook-plugin-fontsettings&nbsp;....OK</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>info:&nbsp;load&nbsp;plugin&nbsp;gitbook-plugin-livereload&nbsp;....OK</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>info:&nbsp;&gt;&gt;&nbsp;5&nbsp;plugins&nbsp;loaded</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>info:&nbsp;start&nbsp;generation&nbsp;with&nbsp;website&nbsp;generator</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>info:&nbsp;clean&nbsp;website&nbsp;generator</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>info:&nbsp;OK</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>info:&nbsp;generation&nbsp;is&nbsp;finished</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>Starting&nbsp;server&nbsp;...</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>Serving&nbsp;book&nbsp;on&nbsp;</span><span class="syntax--markup syntax--underline syntax--link syntax--http syntax--hyperlink"><span>http://localhost:4000</span></span></span></div></pre></div>\n<p>之后，你就可以使用浏览器打开 <code>http://127.0.0.1:4000</code> 查看效果了。就是这么简单。</p>\n<p>页面效果如下:</p>\n<p><img src="https://camo.githubusercontent.com/c1b6c55fca8e171120ce1fd73afcee699cc2a98f/68747470733a2f2f7261772e6769746875622e636f6d2f476974626f6f6b494f2f676974626f6f6b2f6d61737465722f707265766965772e706e67" alt="https://camo.githubusercontent.com/c1b6c55fca8e171120ce1fd73afcee699cc2a98f/68747470733a2f2f7261772e6769746875622e636f6d2f476974626f6f6b494f2f676974626f6f6b2f6d61737465722f707265766965772e706e67"></p>\n<p>你可以尽情的使用 <code>Markdown</code> 来编写文章了，完全不需要关心样式和排版呢。</p>\n<h2>GitBook 编辑器</h2>\n<p>如果你不喜欢使用命令行，这里也有 GitBook 可视化编辑器，<a href="https://www.gitbook.com/editor/">https://www.gitbook.com/editor/</a></p>\n<h2>GitBook.com</h2>\n<p><a href="https://www.gitbook.com/">GitBook.com</a> 是一个围绕 GitBook 发行书籍的社区，于 2014 年初创，GitBook.com 提供免费和付费的服务，而且免费账户就可以享受诸多服务，包括：</p>\n<ul>\n<li>1 本私有书籍</li>\n<li>托管不限数量的公开书籍</li>\n<li>售卖不限数量的书籍，并分享 80% 的书籍收入</li>\n<li>不限数量的协作者</li>\n<li>免费的在线书籍编辑器</li>\n</ul>\n<h2>其他命令</h2>\n<ul>\n<li><code>gitbook build</code>: 会生成相应的 HTML 文件供分发。</li>\n<li><code>gitbook pdf</code>: 生成 PDF 文件</li>\n<li><code>gitbook epub</code>: 生成 epub 文件</li>\n<li><code>gitbook mobi</code>: 生成 mobi 文件</li>\n</ul>\n<h2>高级技巧</h2>\n<h3>个性化配置</h3>\n<p>我们通过配置 <code>book.json</code> 文件来修改 <code>GitBook</code> 在编译书籍时的行为，例如：修改书籍的名称，显示效果等等。</p>\n<p><code>GitBook</code> 在编译书籍的时候会读取书籍源码顶层目录中的 <code>book.json</code>，<code>book.json</code> 支持的具体配置请参考<a href="http://help.gitbook.com/format/configuration.html">官方文档</a></p>\n<h3>安装插件</h3>\n<p>你可以通过 <code>gitbook install</code> 命令来安装一些诸如 <a href="https://github.com/GitbookIO/plugin-disqus">disqus</a>、<a href="https://github.com/citizenmatt/gitbook-plugin-multipart">multipart</a> 这些实用的第三方插件。</p>',frontmatter:{title:"GitBook 简明教程",date:"2016-02-23",category:"技术",tags:["GitBook","工具"],cover:null}},site:{siteMetadata:{url:"http://blog.sqrtthree.com/",thumbnail:"",defaultAuthor:"根号三",donation:{status:!0,channel:{alipay:"http://7xl8me.com1.z0.glb.clouddn.com/alipay.JPG",wechat:"http://7xl8me.com1.z0.glb.clouddn.com/wechat_receive_money.JPG"}},share:!0}}},pathContext:{slug:"/gitbook/",title:"GitBook 简明教程",excerpt:"Modern book format and toolchain using Git and Markdown 这是 GitBook 项目主页上对 GitBook 的定义。 GitBook 是一个命令行工具。通过它，你能够使用 Git 和 Markdown…",prev:{fields:{slug:"/debugging-nodejs-in-chrome-devtools/"},frontmatter:{title:"在 Chrome 开发者工具中调试 node.js",category:"技术",tags:["译文"],cover:null,date:"2016-02-29"},excerpt:"原文链接 :  Debugging Node.js in Chrome DevTools 原文作者 :  MATT DESLAURIERS 译文出自 :  掘金翻译计划 译者 :  sqrthree (根号三) 校对者:  shenxn 、 CoderBOBO…"},next:{fields:{slug:"/implicit-type-conversion/"},frontmatter:{title:"聊一聊 JS 中的『隐式类型转换』",category:"技术",tags:["JS"],cover:null,date:"2016-01-23"},excerpt:"…"}}}}});
//# sourceMappingURL=path---articles-gitbook-639d4c3644ef398756a6.js.map