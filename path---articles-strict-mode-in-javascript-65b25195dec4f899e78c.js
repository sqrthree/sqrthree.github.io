webpackJsonp([0xbccf7caf92f2],{396:function(s,n){s.exports={data:{markdownRemark:{html:'<h2>什么是严格模式？</h2>\n<blockquote>\n<p><code>严格模式</code> 是 ECMAScript 5 中引入的一种将更好的错误检查引入代码中的方法，现在已经被大多浏览器实现。 顾名思义，这种模式使得Javascript在更严格的条件下运行。</p>\n</blockquote>\n<p>因此，在严格模式下，我们的一些不严谨的写法将会导致程序抛出错误。 例如：</p>\n<div class=\'highlight\'><pre class="editor editor-colors"><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>function&nbsp;fn(param)&nbsp;{</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;var&nbsp;arguments&nbsp;=&nbsp;[]&nbsp;//&nbsp;在严格模式下该行将会抛出错误:&nbsp;error:&nbsp;redefinition&nbsp;of&nbsp;arguments</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>}</span></span></div></pre></div>\n<p>在上面的代码中，由于 <code>arguments</code> 在 js 中是一个特殊对象，在严格模式下是不允许被重新定义的。 但是没有实现严格模式检查的环境中会接受这段代码。</p>\n<h2>为什么会出现严格模式？</h2>\n<p>总所周知，从 ECMAscript 从1997年正式成为国际标准以来，已经发布了6个版本。 除此之外，还存在一些 Javascript 实现支持非标准特性，而其他的 Javascript 实现却并不支持这些特性的情况。 由于 Javascript 的实现多样化，我们很难确定哪些特性在哪些平台上是支持的，再加上 Web 浏览器的复杂性，并且它并不能让开发者指定某一个特定的 Javascript 版本来执行我们的程序。 因此我们需要精心的编写程序，以确保在所有的平台上都能够正常运行。</p>\n<p>因此在 ES5 中引入了一种版本控制的考量: <code>严格模式</code>。 此特性允许开发者选择在受限制的 Javascript 版本中禁止使用一些 Javascript 语言中问题较多或是易于出错的特性。</p>\n<p>由于其语法强大的向后兼容特性，所以即使在没有实现严格模式检查的环境中，你的严格代码仍然可以正常执行。</p>\n<h2>如何使用严格模式?</h2>\n<p>在程序中使用严格模式的方式是在程序中的最开始增加一个特定的字符串字面量。</p>\n<div class=\'highlight\'><pre class="editor editor-colors"><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&quot;use&nbsp;strict&quot;</span></span></div></pre></div>\n<p>如果你在一个文件的顶部加入这个特定的字符串，则表示该文件的所有内容将始终使用严格模式执行。</p>\n<p>如果你只想在一个函数体内使用严格模式，则在该函数体内的最开始处(顶部)加入这句指令。</p>\n<h2>为什么要使用字符串字面量来实现严格模式?</h2>\n<p>单独使用一个特定的字符串字面量来作为指令语法在语言里看起来确实相当怪异，但是他有一个最大的好处是向后兼容。 我们来看一下它为什么能够向后兼容。 我们都知道在 js 中解释执行一个字符串字面量是没有任何副作用的，这句话什么意思呢？ 比如说你在 chrome 浏览器控制台里面输入一个字符串字面量，解释器只会返回一个同样的字符串，除此之外不会发生任何事情，这就使得即使ES3引擎不支持<code>严格模式</code>，但依然能够无伤大雅的解释和执行这条指令。 ES3 引擎在解析完改字符串之后，会立即将该值丢弃。 因此，尽管旧的引擎不支持严格模式，但依然能够正常运行。</p>\n<p>但需要注意的是: 尽管不会抛出错误，但是旧的引擎不会进行任何的严格检查模式，因此如果要使用严格模式，你应该总是在完全兼容ES5的环境中测试严格代码。</p>\n<h2>使用严格模式需要注意哪些问题?</h2>\n<p>我们在上面已经说过，<code>use strict</code> 指令需要写在脚本或者函数的顶部，因为该指令只有在写在顶部才能生效。 这就使得我们在使用的时候需要注意一下这里有个小坑。 这个坑是什么呢？</p>\n<p>举个例子，我们在开发大型功能的时候，开发过程中会使用多个独立的脚本文件，但是在部署到生产环境的时候出于性能优化的目的，需要将多个脚本连接成一个单一的文件。 比如说，脚本1 运行于严格模式下,</p>\n<div class=\'highlight\'><pre class="editor editor-colors"><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>//&nbsp;file1.js</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&quot;use&nbsp;strict&quot;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>function&nbsp;doSth()&nbsp;{</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>}</span></span></div></pre></div>\n<p>但是有另外一个同事写了一个脚本 2 运行于非严格模式下:</p>\n<div class=\'highlight\'><pre class="editor editor-colors"><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>//&nbsp;file2.js</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>function&nbsp;doOtherSth(param)&nbsp;{</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;var&nbsp;arguments&nbsp;=&nbsp;[]</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>}</span></span></div></pre></div>\n<p>那么，我们该怎么连接这两个文件呢？ 如果我们以 file1.js 开始，那么连接后的代码将运行于严格模式下，但是由于 file2 中的一些操作会在严格模式下抛出错误，导致我们的程序无法正常运行。如果我们以 file2.js 开始，那么连接后的代码将运行于非严格模式下，因为我们前面已经讲过该指令只有在写在顶部才能生效。 似乎怎样都不太合适。</p>\n<p>那么如何解决这个问题呢？</p>\n<ol>\n<li>在项目中坚持只使用<code>严格模式</code>或者只使用<code>非严格模式</code>，并且不要将使用<code>严格模式</code>和不使用<code>严格模式</code>的文件进行打包构建。 O(∩_∩)O哈哈~这样就不会有问题了嘛。</li>\n<li>我们上面说过，如果你只想在一个函数体内使用严格模式，则在该函数体内的最开始处(顶部)加入这句指令。 我们可以利用这个特性，将每一个脚本文件里面的代码包裹在一个立即执行的函数表达式内，这样即使两种模式的文件打包在一起，依然能够按照我们的期望进行工作。 例如:</li>\n</ol>\n<div class=\'highlight\'><pre class="editor editor-colors"><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>;(function()&nbsp;{</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;//&nbsp;file1.js</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&quot;use&nbsp;strict&quot;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;function&nbsp;doSth()&nbsp;{}</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>})()</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>;(function()&nbsp;{</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;//&nbsp;file2.js</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;function&nbsp;doOtherSth()&nbsp;{}</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>})()</span></span></div></pre></div>\n<p>当然了，上面这样的做法会导致这些文件的内容不会在全局作用域内解释，这就导致我们通过 <code>var</code> 和 <code>function</code> 声明的变量不会视为全局变量。 不过这刚好对我们来说也是一个很好的特性。 因此就放心大胆的使用吧，去吧，皮卡丘。</p>\n<h2>最佳实践</h2>\n<p>上面的方法2看起来是极好的，并且我们可以通过<code>自动化构建工具</code>为我们的脚本文件上添加如上代码。 但是如果我们想要编写一个通用的库，使其可以在尽可能多的环境中正常工作，我们不能假设脚本文件一定会被构建工具置于一个立即执行的函数中，也不能假设客户端代码一定处于严格模式或是非严格模式中。 所以为了获得最佳效果，我们应该总是在严格模式下编写代码，并显式的将其包裹在启用了严格模式的立即执行函数中，而不是依靠构建工具来实现。</p>\n<h2>结语</h2>\n<p>"严格模式"体现了 Javascript 更合理、更安全、更严谨的发展方向。 为了达到更为普遍的兼容性，我们应该总是在严格模式下编写代码。</p>',frontmatter:{title:"聊聊 JS 中的严格模式",date:"2015-10-09",category:"技术",tags:["JS"],cover:null}},site:{siteMetadata:{defaultAuthor:"根号三",language:"zh-cmn-Hans",SEOTitle:"sqrtthree's blog | 根号三的博客",keyword:"前端 前端工程师 HTML5 CSS3 Javascript React Vue Node.js Go Docker",description:"web 开发者, 擅长各项前端技能，深入研究 web 端开发与前端性能, 并对 Nodejs 及 Go 服务端技术栈有深入了解。",donation:{status:!0,channel:{alipay:"http://7xl8me.com1.z0.glb.clouddn.com/alipay.JPG",wechat:"http://7xl8me.com1.z0.glb.clouddn.com/wechat_receive_money.JPG"}},share:!0}}},pathContext:{slug:"/strict-mode-in-javascript/",title:"聊聊 JS 中的严格模式",prev:{fields:{slug:"/jquery3-the-next-generations/"},frontmatter:{title:"jQuery 3.0 —— 下一代的jQuery",category:"技术",tags:["jQuery3.0","译文"],cover:null,date:"2015-11-05"},excerpt:"2014年10月29日，jQuery 官方博客上更新了一篇博文，描述了关于下一代 jQuery 的一些信息。实际上这篇博文至今都已经一年时间了，jQuery 官方团队也早在2015年7月13日发布了  jQuery 3.0.0-alpha…"},next:{fields:{slug:"/utf8-to-b64/"},frontmatter:{title:"解决 Javascript 中 atob 方法解码中文字符乱码问题",category:"技术",tags:null,cover:null,date:"2015-08-29"},excerpt:"今天在写一个通过 GitHub API 获取 README 的功能的时候, 由于返回值为 Base64 编码, 我在尝试用 js 转换为 UFT-…"}}}}});
//# sourceMappingURL=path---articles-strict-mode-in-javascript-65b25195dec4f899e78c.js.map