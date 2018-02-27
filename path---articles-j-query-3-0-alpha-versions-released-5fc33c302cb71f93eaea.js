webpackJsonp([0x904f5ef7cc2a],{394:function(e,o){e.exports={data:{markdownRemark:{html:'<p>从我们做出上一个重大的版本发布已经过去很长时间了，所以你理应再得到一个新版本。因此我们非常高兴的宣布 <code>jQuery 3.0</code> 的第一个 <code>alpha</code> 版本的发布。</p>\n<!-- more -->\n<p>尽管版本号已经到了 3.0，但是在升级目前已经存在的代码时，可以预期这些发布不会造成太多的麻烦。确实，只是一些用来调整重要版本冲突的零碎改变，但是我们希望这些改变不会实际影响到很多人。<code>jQuery Migrate</code> 插件可以很好的帮助你在你的代码中识别出兼容性问题。在这个 <code>alpha</code> 版本中，你针对于这些变化的反馈将会极大的帮助我们，所以请在你目前已有的代码和插件中尝试一下。</p>\n<p>实际上，这里有两个版本。第一个版本是 <code>jQuery 3.0</code>, 这个版本支持现代浏览器和 <code>IE9</code> 以后的浏览器环境。第二个版本是 <code>jQuery Compat 3.0</code>，这个支持 <code>IE8</code>。作为一个额外的福利，就是 <code>jQuery</code> 和 <code>jQuery Compat</code> 这两个版本都支持 Yandex 浏览器(一个 2012 年发布的免费软件)。你可以从 jQuery CDN 或者直接通过下面这些链接获取这两个文件。</p>\n<p><a href="https://code.jquery.com/jquery-3.0.0-alpha1.js">https://code.jquery.com/jquery-3.0.0-alpha1.js</a></p>\n<p><a href="https://code.jquery.com/jquery-compat-3.0.0-alpha1.js">https://code.jquery.com/jquery-compat-3.0.0-alpha1.js</a></p>\n<p>你也可以从 <code>npm</code> 中获取 alpha 版:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>npm install jquery@3.0.0-alpha1\n\nnpm install jquery-compat@3.0.0-alpha1</code></pre>\n      </div>\n<h4>Major changes (主要的变化)</h4>\n<p>下面的这些内容只是高亮了这个版本中一些重要的新特性，代码的改进，还有一些 bug 的修复。在这篇文章下面和我们的 GitHub issue tracker 板块你可以看到一个完整的改变清单。在 Github 上，你还可以看到我们期待在下个 beta 版本和暂时还没发布的最终版中添加的新特性。</p>\n<h5>Simplified <code>.show()</code> and <code>.hide()</code> methods: 简化的 show 和 hide 方法</h5>\n<p>每个人的心中都认为 <code>jQuery</code> 中的 <code>.hide()</code> 方法就是把元素设置为 <code>display:none</code>，相反的，<code>.show()</code> 方法就是清除 <code>display</code> 因此元素会重新显示(假设父级元素没有被隐藏)。很简单，对么？</p>\n<p>不，这么多年来，实际上有很多复杂特殊的例子，人们要求我们去修正一下，这些例子使得这些方法陷入一个复杂的原理集合之中。例如，如果一个元素在样式表中设置为 <code>display: none</code> 将会怎样？<code>jQuery</code> 会试着在元素上强制设置 <code>display: block</code> 去覆盖它。这是可以的。但是像 <code>&#x3C;li></code> 这样的一个正常的块元素通过不同的样式规则被设置为 <code>display: inline</code> 会怎么样呢？在一个元素被添加到 <code>document</code> 之前你调用了这个方法并且我们不知道这个元素拥有的 <code>display</code> 值的话又会怎样？确定这些事情需要花费额外的工作。有时仅仅是一个最后被证明是错误的猜想。</p>\n<p>这些方法在元素上添加一个样式属性之后，在像是响应式设计中(元素的可见性需要通过媒体查询来设置)这样的技术上往往不能很好的表现。这个导致需要 <code>jQuery</code> 处理器去监听 <code>orientationchange</code> 或 <code>resize</code> 事件人工隐藏或显示部分页面；jQuery 打败了媒体查询正尝试实现的优雅的解决方案。</p>\n<p>你可以看到 <code>jQuery</code> 已经完成了疯狂旅途中的一半路程了，但是完成整个旅程是行不通的。这个特殊的情况以及检查不仅复杂且难以完成，而且在大的页面中会造成具有重大意义的性能问题。</p>\n<p>因此，代替的是，我们实验性的反抗这些方法的演变，重新回归到一个简洁的，原始的模型。这将会分解一些代码。如果一个元素在样式表中被设置为 <code>display: none</code>，<code>.show()</code> 方法将不会再覆盖它。因此，转移到 jQuery 3.0 中有一个最重要的规则就是: 不要使用样式去设置 <code>display: none</code> 作为默认值，然后使用 <code>.show()</code> 或者其他方法来显示元素，例如使用 <code>.slideDown()</code> 和 <code>.fadeIn()</code> 方法来使它可见。</p>\n<p>如果你需要让一个元素默认是隐藏状态，最好的方法是给元素添加一个像 <code>hidden</code> 这样的类名，然后在样式中去定义这个类为 <code>display: none</code>，然后你可以使用 <code>jQuery</code> 的 <code>.addClass()</code> 和 <code>.removeClass()</code> 方法来添加或删除这个类来控制其可见性。另外一种方法是，你可以在元素显示到页面中之前，使用 <code>.ready()</code> 处理器并在其中调用 <code>.hide()</code> 方法。或者，如果你一定要在样式中保留默认值，你可以使用 <code>.css("display", "block")</code> (或其他合适的值)去覆盖样式。</p>\n<p>我们知道这可能是 <code>jQuery 3.0</code> 中最受争议和最困难的改变，所以我们想把它放到这个早期版本中观察一下所造成的影响。请让我们知道这些改变如何影响了你的代码，以及你为了使用这个新版本所作出的改变。</p>\n<p><a href="https://github.com/jquery/jquery/issues/1767">https://github.com/jquery/jquery/issues/1767</a>\n<a href="https://github.com/jquery/jquery/issues/2057">https://github.com/jquery/jquery/issues/2057</a>\n<a href="https://github.com/jquery/jquery/issues/2308">https://github.com/jquery/jquery/issues/2308</a></p>\n<h5>Special case with .data() names: 含有.data()名字的特殊事例</h5>\n<p><a href="https://github.com/jquery/jquery/issues/1751">https://github.com/jquery/jquery/issues/1751</a></p>\n<p>我们也更新了我们的 <code>.data()</code> 方法来更有效的匹配 HTML5 dataset specification. 所有的键值现在都从 kebab-case 转换成驼峰命名法，不再理会访问方式，数字也不再参与转换。例如: 我们不再区分 <code>foo-bar</code> 和 <code>fooBar</code>，但是仍然区分 <code>foo-42</code> 和 <code>foo42</code>。当通过调用无参数的 <code>.data()</code> 来取得所有的数据方法，或者尝试通过转换的键名(.data(“foo42”))而不是原始的(.data(“foo-42”))来获取数据时，这些改变将会发挥主要作用。</p>\n<h5>jQuery.Deferred is now Promises/A+ compatible: jQuery.Deferred 现在兼容 Promises/A+</h5>\n<p><code>jQuery.Deferred</code> 对象为了兼容 <code>Promises/A+</code> 和 <code>ES2015 Promises</code> 已经做出了更新，Promises/A+ Compliance Test Suite 检验。这意味着 引入一个 <code>.catch()</code> 方法，<code>.then()</code>方法也有一些重要的改变。</p>\n<ul>\n<li><code>.then()</code> 方法的回调函数中抛出的异常现在变成了一个可注入的值。以前，异常会一直往上冒泡，直至终止回调函数的执行，然后不可撤销的锁定 parent and child Deferred 对象。</li>\n<li>通过 <code>.then()</code> 方法创建的 Deferred 对象的 resolution 状态现在被它的回调函数控制——异常成为了注入值，并且 non-thenable 返回的结果成为了 fulfillment 值。以前，从注入处理器返回变成了注入值。</li>\n<li>回调函数总是被异步调用。以前，它们根据绑定或是 resolution 被立即调用，无论哪个更晚一些。</li>\n<li>Progress 回调函数不再解决受约束的 Deferred 对象。</li>\n</ul>\n<p>考虑一下下面的代码，哪个 parent Deferred 被注入以及 child 回调函数产生异常:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>var parent = jQuery.Deferred();\nvar child = parent.then( null, function() {\n  return "bar";\n});\nvar callback = function( state ) {\n  return function( value ) {\n    console.log( state, value );\n    throw new Error( "baz" );\n  };\n};\nvar grandchildren = [\n  child.then( callback( "fulfilled" ), callback( "rejected" ) ),\n  child.then( callback( "fulfilled" ), callback( "rejected" ) )\n];\nparent.reject( "foo" );\nconsole.log( "parent resolved" );</code></pre>\n      </div>\n<p>在 jQuery 3.0 中，在调用任何回调之前会先记录 “parent resolved”，每一个子回调将会记录 “fulfilled bar”， 然后 grandchildren 将会和错误 “baz” 一起注入。在之前的版本中，会记录一次 “rejected bar” (child Deferred 已经注入而不是 fulfilled)然后通过未捕获到的错误 “baz” 中断(“parent resolved” 不会被记录并且 grandchildren 会保持 unresolved 状态)。</p>\n<p>当捕获异常时有利于在浏览器中进行 debug, 使用注入回调来处理异常非常具有描述性(即显式的)。记住这个地方，你有责任在使用 promises 时总是添加至少一个注入回调，否则，任何错误都不会提示。</p>\n<p>Legacy 行为可以通过使用现在还不宜用的 <code>.pipe()</code> 方法替换 <code>.then()</code> 方法来重新获取，</p>\n<p><code>jQuery.when</code> 方法也为了接受任何 thenable 对象而更新了，包括了原生的 Promise 对象。</p>\n<p><a href="https://github.com/jquery/jquery/issues/1722">https://github.com/jquery/jquery/issues/1722</a>\n<a href="https://github.com/jquery/jquery/issues/2102">https://github.com/jquery/jquery/issues/2102</a></p>\n<h5>Removed special-case Deferred methods in jQuery.ajax: 移除了 jQuery.ajax 中 Deferred 方法的一些特殊情况</h5>\n<p>jqXHR 对象是一个 Promise，但是也有像 <code>.abort()</code> 这样的额外的方法。因此你可以在创建之后停止一个请求。</p>\n<p>随着用户越来越拥护类似像 AJAX 这样异步执行的 Promise 模式，通过 jQuery.ajax 进行 Promise 返回特殊事例的想法是越来越坏的主意。</p>\n<p>success, error, complete\ndone, fail, always</p>\n<p>注意，这些对于相同名字的回调函数没有任何影响，它们将会继续存在，而且不会被弃用。这个只会影响 Promise 方法！</p>\n<p><a href="https://github.com/jquery/jquery/issues/2084">https://github.com/jquery/jquery/issues/2084</a></p>\n<h5>Error cases don’t silently fail: 错误事例不会默默地失败</h5>\n<p>也许在一个重要的时刻你会想知道，“窗口的偏移量是多少？” 然后你可能会意识到这是一个疯狂的问题 - 窗口怎么会有偏移量？</p>\n<p>在过去，jQuery 有时会尝试去创建类似返回一些东西的事例而不是抛出一个错误。在这个询问窗口的偏移量的特殊事例中，到目前为止答案已经变成了 <code>{ top: 0, left: 0 }</code>，在 <code>jQuery 3.0</code> 的 <code>alpha</code> 版本中，我们正在尝试抛出一个错误来让这些疯狂的请求不至于被默默地忽略掉这样的想法。请尝试使用 <code>alpha</code> 版本看一下是否存在一些依赖 <code>jQuery</code> 的代码出现无效输入的问题。</p>\n<p><a href="https://github.com/jquery/jquery/issues/1784">https://github.com/jquery/jquery/issues/1784</a></p>\n<p><code>.width()</code>, <code>.height()</code>, <code>.css(“width”)</code>, 和 <code>.css(“height”)</code> 方法将返回带有小数点的数值(不论何时浏览器都会这样做)。</p>\n<p>以前，当你获取 width 和 height 的时候 <code>jQuery</code> 会对其进行取整。有一些浏览器会返回亚像素值 - 例如 IE 和 Firefox，并且有时当布局依赖这些值时用户需要这种精确度的值。我们不希望这些改变会对你的代码产生很大的影响，但是如果确实影响到了，请让我们知道。</p>\n<p><a href="https://github.com/jquery/jquery/issues/1724">https://github.com/jquery/jquery/issues/1724</a></p>\n<h5>Removed deprecated event aliases: 移除不赞成使用的事件别名</h5>\n<p><code>.load</code>, <code>.unload</code>, 和 <code>.error</code>, 这些方法自从 <code>jQuery 1.8</code> 就已经弃用，而且永不使用。使用 <code>.on()</code> 注册监听器</p>\n<p><a href="https://github.com/jquery/jquery/issues/2286">https://github.com/jquery/jquery/issues/2286</a></p>\n<p><code>jQuery.swap</code>, <code>jQuery.buildFragment</code>, 和 <code>jQuery.domManip</code> 不再从 <code>jQuery</code> 对象上获取。</p>\n<p>这些方法常常仅在内部使用，而且也从来没有文档说明。为了避免疑惑，我们最终决定将他们私有化。</p>\n<p><a href="https://github.com/jquery/jquery/issues/2224">https://github.com/jquery/jquery/issues/2224</a>\n<a href="https://github.com/jquery/jquery/issues/2225">https://github.com/jquery/jquery/issues/2225</a></p>\n<h5>Animations now use requestAnimationFrame:动画现在使用 requestAnimationFrame</h5>\n<p>除了 <code>IE8</code> 和 <code>IE9</code> 之外，越来越多的平台都支持 <code>requestAnimationFrame</code> API，<code>jQuery</code> 现在在执行动画的时候也使用了此 API。这样的结果是会让动画越来平滑流畅，并且使用更少的 CPU 时间，在移动设备上也尽可能好的保存电量。</p>\n<p><code>jQuery</code> 尝试使用 <code>requestAnimationFrame</code> 了一些年头，但是在目前的代码中有一些很严重的兼容性问题，因此我们又把它撤销回去了。我们认为我们通过当浏览器标签页移出视野时暂停动画这种方式已经解决了这些问题中的大多数。然而，在真实的运行时环境中，任何依赖于动画的代码一直运行是一个不切实际的假想。</p>\n<h5>.unwrap( selector )</h5>\n<p>在 <code>jQuery 3.0</code> 之前，<code>.unwrap()</code> 方法不接收任何参数。selector 参数提供了一个确定哪个包装器该被移出的方式。</p>\n<p><a href="https://github.com/jquery/jquery/issues/1744">https://github.com/jquery/jquery/issues/1744</a></p>\n<h5>Massive speedups for some jQuery custom selectors</h5>\n<p>感谢来自 Google 的 Paul Irish 所做出的一些排查工作，我们才可以识别出我们可以跳过的一些额外工作，像是 <code>:visible</code> 这样的常规的选择器在一个文档中使用好多次。特定的事例中现在在性能上能比以前快 17 倍。</p>\n<p>记住，即使这些事情改善了，像是 <code>:visible</code> 和 <code>:hidden</code> 这样的选择器也是很昂贵的，因为它们依赖于浏览器来决定什么时候元素确实显示在页面上。可能需要的是，在最差的情况中，CSS 样式和页面布局需要完整的重绘。尽管在大多数情况下我们不阻止使用他们，但是我们推荐你在你的页面上测试一下来确定这些选择器是否会造成一些性能问题。</p>\n<p><a href="https://github.com/jquery/jquery/issues/2042">https://github.com/jquery/jquery/issues/2042</a></p>\n<h5>译者注:</h5>\n<p>具体的更新内容列表没有在此翻译，如果想具体了解请自行查看英文原文。</p>\n<blockquote>\n<p>本文根据 <a href="http://blog.jquery.com/author/timmywil/">Timmy Willison</a> 的《jQuery 3.0 and jQuery Compat 3.0 Alpha Versions Released》所译，整个译文带有自己的理解与思想，如果译得不好或有不对之处还请同行朋友指点。如需转载此译文，需注明英文出处：<a href="http://blog.jquery.com/2015/07/13/jquery-3-0-and-jquery-compat-3-0-alpha-versions-released/">http://blog.jquery.com/2015/07/13/jquery-3-0-and-jquery-compat-3-0-alpha-versions-released/</a></p>\n</blockquote>\n<h2>相关链接</h2>\n<ul>\n<li>jQuery 3.0.0-alpha1: <a href="https://code.jquery.com/jquery-3.0.0-alpha1.js">https://code.jquery.com/jquery-3.0.0-alpha1.js</a></li>\n<li>jQuery compat 3.0.0-alpha1: <a href="https://code.jquery.com/jquery-3.0.0-alpha1.js">https://code.jquery.com/jquery-3.0.0-alpha1.js</a></li>\n</ul>',frontmatter:{title:"jQuery 3.0 以及兼容版的 Alpha 版本发布",date:"2015-11-12",category:"技术",tags:["jQuery3.0","译文"],cover:null}},site:{siteMetadata:{url:"http://blog.sqrtthree.com/",thumbnail:"",defaultAuthor:"根号三",donation:{status:!0,channel:{alipay:"http://7xl8me.com1.z0.glb.clouddn.com/alipay.JPG",wechat:"http://7xl8me.com1.z0.glb.clouddn.com/wechat_receive_money.JPG"}},share:!0}}},pathContext:{slug:"/jQuery3-0-Alpha-Versions-Released/",title:"jQuery 3.0 以及兼容版的 Alpha 版本发布",excerpt:"从我们做出上一个重大的版本发布已经过去很长时间了，所以你理应再得到一个新版本。因此我们非常高兴的宣布  jQuery 3.0  的第一个  alpha  版本的发布。 尽管版本号已经到了 3.…",prev:{fields:{slug:"/fecs/"},frontmatter:{title:"前端代码风格检查套件 FECS",category:"技术",tags:null,cover:null,date:"2015-12-25"},excerpt:"All code in any code-base should look like a single person typed it, no matter how many people contributed. — idiomatic.js…"},next:{fields:{slug:"/myCodeWars-01/"},frontmatter:{title:"My Code Wars v0.1",category:"技术",tags:["CodeWars"],cover:null,date:"2015-11-06"},excerpt:"这里讲述的是一个 8 级（kyu）菜鸟立志成为 8 段（dan）大神的故事。故事的起因是这样的。菜鸟有幸发现了  codewars  这个网站，从此沉迷于内一发不可收拾，他在代码战争中一次次遭遇挫败，又一次次爬起来继续跌倒下去。欲知详情，且看『迈向…"}}}}});
//# sourceMappingURL=path---articles-j-query-3-0-alpha-versions-released-5fc33c302cb71f93eaea.js.map