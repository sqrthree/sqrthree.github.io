webpackJsonp([0x6b4e3503ade4],{386:function(n,s){n.exports={data:{markdownRemark:{html:'<blockquote>\n<ul>\n<li>原文地址：<a href="https://medium.freecodecamp.com/a-5-minute-intro-to-styled-components-41f40eb7cd55#.z1nrxe1zr">A 5-minute Intro to Styled Components</a></li>\n<li>原文作者：<a href="https://medium.freecodecamp.com/@sachagreif">Sacha Greif</a></li>\n<li>译文出自：<a href="https://github.com/xitu/gold-miner">掘金翻译计划</a></li>\n<li>译者：<a href="https://github.com/sqrthree">根号三</a></li>\n<li>校对者：<a href="https://github.com/Tina92">Tina92</a>、<a href="https://github.com/lovelyCiTY">lovelyCiTY</a></li>\n</ul>\n</blockquote>\n<p>CSS 是一个很神奇的语言，你可以在 15 分钟之内就学会一些基础部分，但是如果你要找到一个好的方式来组织你的样式，将会花费数年时间。</p>\n<p>这主要是由于语言本身很奇葩。不合常规的是， CSS 是相当有限的，没有变量、循环或者函数。与此同时，它又是相当自由的，你可以随意使用元素、Class、ID 或它们的任意组合。</p>\n<h3>混乱的样式表</h3>\n<p>正如你自己所经历过的那样，CSS 通常是很混乱的。虽然有诸如 SASS 和 LESS 这样的预处理器添加了大量有用的特性，但是它们仍然不能阻止 CSS 的这种混乱状态。</p>\n<p>组织工作留给了像 <a href="http://getbem.com/">BEM</a> 这样的方法，这些方法虽然很有用但是完全是自选方案，不能在语言或工具级别强制实施。</p>\n<h3>CSS 的新浪潮</h3>\n<p>最近一两年，新一波基于 JavaScript 的工具正试图通过改变编写 CSS 的方式来从根本上解决这些问题。</p>\n<p><a href="https://github.com/styled-components/styled-components">Styled Components</a> 就是那些工具库之一，因为兼顾创新和传统的优势，它很快就吸引了大量的关注。因此，如果你是 React 使用者（如果你不是的话，可以看看 <a href="https://medium.freecodecamp.com/a-study-plan-to-cure-javascript-fatigue-8ad3a54f2eb1">我的 JavaScript 学习计划</a> 和我写的 <a href="https://medium.freecodecamp.com/the-5-things-you-need-to-know-to-understand-react-a1dbd5d114a3">React 简介</a>），就绝对值得看看这个新的 CSS 替代者。</p>\n<p>最近我用它 <a href="http://sachagreif.com/">重新设计了我的个人网站</a>，今天我想分享下我在这个过程中所学到的一些东西。</p>\n<h3>组件, 样式化</h3>\n<p>关于 Styled Components 你需要理解的最主要的事情就是其名称应该采取字面意思。你不再根据他们的 Class 或者 HTML 元素来对 HTML 元素或组件进行样式化了。</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">&lt;h1 className=\'title\' > Hello World&lt;/h1>\n\nh1.title</span> <span class="token punctuation">{</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> 1.5em<span class="token punctuation">;</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> purple<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>相反，你可以定义一个拥有它们自己的封装风格的 styled Components。然后你就可以在你的代码中自由的使用它们了。</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">import</span> styled <span class="token keyword">from</span> <span class="token string">\'styled-components\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> Title <span class="token operator">=</span> styled<span class="token punctuation">.</span>h1<span class="token template-string"><span class="token string">`\n  font-size: 1.5em;\n  color: purple;\n`</span></span><span class="token punctuation">;</span>\n\n<span class="token operator">&lt;</span>Title<span class="token operator">></span>Hello World<span class="token operator">&lt;</span><span class="token operator">/</span>Title<span class="token operator">></span>\n</code></pre>\n      </div>\n<p>这两段代码看起来有一些细微的差别，事实上两者语法是非常相似的。但是它们的关键区别在于样式现在是这些组件的一部分啦。</p>\n<p>换句话说，我们正在摆脱 CSS class 作为组件和其样式的中间步骤这种情况。</p>\n<p>styled-components 的联合创造者 Max Stoiber 说：</p>\n<blockquote>\n<p>styled-components 的基本思想就是通过移除样式和组件之间的映射关系来达到最佳实践。</p>\n</blockquote>\n<h3>减少复杂性</h3>\n<p>这首先是反直觉的，因为使用 CSS 而不是直接定义 HTML 元素的关键点（还记得 <code>&#x3C;font></code> 标签吗？）是引入 class 这个中间层来解耦样式和标签。</p>\n<p>但是这层解耦也创造了很多复杂性。有这样一个的观点：相比于 CSS，诸如 Javascript 这类『真正』的编程语言具备了更好的处理这种复杂性的能力。</p>\n<h3>类（Class）上的 Props</h3>\n<p>为了遵循 『无类(no-class)』的理念，当涉及到自定义一个组件的行为时，styled-components 使用了类上的 props（props over classes）。所以呢，代码不是这样的：</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">&lt;h1 className="title primary">Hello World&lt;/h1> // will be blue\n\nh1.title</span> <span class="token punctuation">{</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> 1.5em<span class="token punctuation">;</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> purple<span class="token selector">;\n\n  &amp;.primary</span> <span class="token punctuation">{</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>你需要这样写：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> Title <span class="token operator">=</span> styled<span class="token punctuation">.</span>h1<span class="token template-string"><span class="token string">`\n  font-size: 1.5em;\n  color: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>props <span class="token operator">=></span> props<span class="token punctuation">.</span>primary <span class="token operator">?</span> <span class="token string">\'blue\'</span> <span class="token punctuation">:</span> <span class="token string">\'purple\'</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;\n`</span></span><span class="token punctuation">;</span>\n\n<span class="token operator">&lt;</span>Title primary<span class="token operator">></span>Hello World<span class="token operator">&lt;</span><span class="token operator">/</span>Title<span class="token operator">></span> <span class="token comment">// will be blue</span>\n</code></pre>\n      </div>\n<p>正如你所看到的那样，styled-components 通过将所有的 CSS 和 HTML 之间的相关实现细节（从组件中）分离出来使你的 React 组件更干净。</p>\n<p>也就是说，styled-components 的 CSS 仍然还是 CSS。所以像下面这样的代码也是完全有效的（尽管略微不常用）。</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> Title <span class="token operator">=</span> styled<span class="token punctuation">.</span>h1<span class="token template-string"><span class="token string">`\n  font-size: 1.5em;\n  color: purple;\n\n  &amp;.primary {\n    color: blue;\n  }\n`</span></span><span class="token punctuation">;</span>\n\n<span class="token operator">&lt;</span>Title className<span class="token operator">=</span><span class="token string">"primary"</span><span class="token operator">></span>Hello World<span class="token operator">&lt;</span><span class="token operator">/</span>Title<span class="token operator">></span> <span class="token comment">// will be blue</span>\n</code></pre>\n      </div>\n<p>这是让 styled-components 很容易就被接受的一个特性：当存在疑惑时，你总是可以倒退回你所熟悉的领域。</p>\n<h3>警告</h3>\n<p>需要提到的很重要的一点是 styled-components 仍然是一个很年轻的项目。有一些特性到目前为止还没有完全支持。例如，如果你想 <a href="https://github.com/styled-components/styled-components/issues/142">从父组件中样式化一个子组件</a> 时，目前你仍不得不依靠 CSS class 来实现（至少要持续到 styled-components 版本 2 发布）。</p>\n<p>目前也有一个非官方的方法来实现 <a href="https://github.com/styled-components/styled-components/issues/124">服务端预渲染你的 CSS</a>，虽然它是通过手动注入样式来实现的。</p>\n<p>事实上，styled-components 生成它自己的随机 class 名会使你很难通过浏览器的开发工具来确定你的样式最初是在哪里定义的。</p>\n<p>但是鼓舞人心的是，styled-components 核心团队已经意识到了这些问题，并且努力地一个又一个的攻克它们。<a href="(https://github.com/styled-components/styled-components/tree/v2)">版本 2 很快就要来啦</a>，我真的很期待它呢。</p>\n<h3>了解更多一点吧</h3>\n<p>我这篇文章的目的不是向你详细解释 styled-components 是如何生效的，更多的是给你一个小瞥。所以你可以自己决定是否值得一试。</p>\n<p>如果我的文章让你感到好奇的话，这里有一些链接你可以了解更多关于 styled-components 的知识。</p>\n<ul>\n<li>Max Stoiber 最近给 <a href="https://www.smashingmagazine.com/2017/01/styled-components-enforcing-best-practices-component-based-systems/">Smashing Magazine</a> 写了一篇文章有关创建 styled-components 的原因的文章。</li>\n<li><a href="https://github.com/styled-components/styled-components">styled-components repo</a> 它自己就有一个很丰富的文档.</li>\n<li><a href="https://medium.com/@jamiedixon/styled-components-production-patterns-c22e24b1d896#.tfxr5bws2">Jamie Dixon 写的这篇文章</a> 讲述了切换到 styled-components 的几个好处.</li>\n<li>如果你想了解更多关于这个库实际上是如何实现的，可以阅读 Max 的 <a href="http://mxstbr.blog/2016/11/styled-components-magic-explained/">这篇文章</a>。</li>\n</ul>\n<p>如果你想更进一步，也可以了解下 <a href="https://github.com/threepointone/glamor">Glamor</a> —— 一个完全不同的 CSS 新浪潮。</p>',frontmatter:{title:"一个关于 Styled Components 的五分钟介绍",date:"2017-02-10",category:"技术",tags:["CSS","React"],cover:"https://camo.githubusercontent.com/4cf7254acbf60caa799fadead24a8e35839b84af/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f323030302f312a4449466a69345a6d4a61345f483345706247325841772e706e67"}},site:{siteMetadata:{url:"http://blog.sqrtthree.com/",thumbnail:"",defaultAuthor:"根号三",donation:{status:!0,channel:{alipay:"http://7xl8me.com1.z0.glb.clouddn.com/alipay.JPG",wechat:"http://7xl8me.com1.z0.glb.clouddn.com/wechat_receive_money.JPG"}},share:!0}}},pathContext:{slug:"/a-5-minute-intro-to-styled-components/",title:"一个关于 Styled Components 的五分钟介绍",excerpt:"原文地址： A 5-minute Intro to Styled Components 原文作者： Sacha Greif 译文出自： 掘金翻译计划 译者： 根号三 校对者： Tina92 、 lovelyCiTY CSS 是一个很神奇的语言，你可以在 1…",prev:{fields:{slug:"/it-is-time-to-build-your-own-scaffolding-with-slush/"},frontmatter:{title:"是时候来用 Slush 构建你自己的脚手架了",category:"技术",tags:["gulp","工具"],cover:null,date:"2017-03-01"},excerpt:"Slush 是什么？ 简单的来说，Slush…"},next:{fields:{slug:"/The-hexagon-by-CSS/"},frontmatter:{title:"通过 CSS 实现六边形效果",category:"技术",tags:["CSS"],cover:null,date:"2016-06-27"},excerpt:"故事说起那是在一个冰冷幽暗的晚上，外面下着淅淅沥沥的小雨，我正在思考一个十分重要的人生问题：这个周末哪里去？是宅在家里写程序好呢，还是宅在家里写博客好呢？还是好呢？这时，桌面右下角很少抖动的 QQ…"}}}}});
//# sourceMappingURL=path---articles-a-5-minute-intro-to-styled-components-b9a367ed83a4939a6d29.js.map