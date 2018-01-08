webpackJsonp([0xe9342f4bb34f],{402:function(e,t){e.exports={data:{markdownRemark:{html:'<p>故事说起那是在一个冰冷幽暗的晚上，外面下着淅淅沥沥的小雨，我正在思考一个十分重要的人生问题：这个周末哪里去？是宅在家里写程序好呢，还是宅在家里写博客好呢？还是好呢？这时，桌面右下角很少抖动的 QQ 头像竟然动了起来，我多年的直觉告诉我，一定是有人要约我，尽管这件事情从来没有发生过。我去，了不得，竟然是万年隐身的女神主动联系我，女神一定是因为看了朋友圈的照片对我的身材陷入了深深的迷恋，说不定还要包养我呢，啊，想想都觉得好激动啊~</p>\n<blockquote>\n<p>“哎，在干嘛呢？” (你看，果然要约我)</p>\n</blockquote>\n<blockquote>\n<p>“没事啊，在思考人生呢”</p>\n</blockquote>\n<blockquote>\n<p>"那个，我在写一个网站，需要用 CSS 实现一个六边形效果，你能帮我写个 Demo 么？"</p>\n</blockquote>\n<p>额。。。那个，好吧，跟想象中的有点不太一样，咦，万一这是女神对我的考验呢，说不定通过了之后就，哇卡卡~</p>\n<p>用 CSS 实现一个六边形还不简单？</p>\n<p>如下图，这就是我们要实现的六边形。</p>\n<p><img src="http://7xl8me.com1.z0.glb.clouddn.com/hexagon_1.png?imageView2/1/w/256/h/256/q/100%7Cwatermark/2/text/QHNxcnR0aHJlZQ==/font/5b6u6L2v6ZuF6buR/fontsize/500/fill/I0VGRUZFRg==/dissolve/100/gravity/SouthEast/dx/10/dy/10" alt="六边形"></p>\n<p>咋一看，这货怎么能用 CSS 来实现嘛？看官别着急，我给你画两条线你就能猜到了，请看下图：</p>\n<p><img src="http://7xl8me.com1.z0.glb.clouddn.com/hexagon_2.png?imageView2/1/w/256/h/256/q/100%7Cwatermark/2/text/QHNxcnR0aHJlZQ==/font/5b6u6L2v6ZuF6buR/fontsize/500/fill/I0VGRUZFRg==/dissolve/100/gravity/SouthEast/dx/10/dy/10" alt="六边形"></p>\n<p>咦，还没看出来？那您老再看下面这张图：</p>\n<p><img src="http://7xl8me.com1.z0.glb.clouddn.com/hexagon_3.png?imageView2/1/w/256/h/256/q/100%7Cwatermark/2/text/QHNxcnR0aHJlZQ==/font/5b6u6L2v6ZuF6buR/fontsize/500/fill/I0VGRUZFRg==/dissolve/100/gravity/SouthEast/dx/10/dy/10" alt="六边形"></p>\n<p>这下能够看出来了吧，没错，思路很简单，就是利用两个三角形和一个长方形然后拼接到一块，就能做出这么一个正六边形啦~</p>\n<p>嗯？三角形怎么做？介个，等我什么时候有空了再给你娓娓道来吧（不过我想我是没空了，因为等我做完女神就要约我了~）</p>\n<p>好了，废话不多说，直接上代码~ <a href="http://codepen.io/sqrtthree/pen/jrBEbj">点击查看</a></p>\n<p>然后痛痛快快的给女神发了过去，</p>\n<blockquote>\n<p>"咦，效果虽然是这个效果，但是为什么鼠标移入的触发区域不太对呢？能不能把鼠标移入的触发区域也仅限制为六边形？"</p>\n</blockquote>\n<p>嗯，这确实是这种方法的一个弊端，因为 CSS 中是没法直接做一个三角形的，所以我们利用了 <code>border</code> 的特点模拟了一个出来，但是元素本质上还是一个矩形。</p>\n<p>那么问题来了，怎样实现一个完美的六边形效果呢？</p>\n<p>哈哈，这个问题怎么能难得住我嘛，不多一会，我就做出了一个完美的六边形出来给女神发过去了，这次主要是利用了 <code>overflow: hidden</code> 和 CSS3 中的 <code>transform</code> 相关属性实现的。详细代码请 <a href="http://codepen.io/sqrtthree/pen/BzKbBb">点击查看</a>。</p>\n<p>嗯，这次看来女神挺满意的~</p>\n<p>毕竟鼠标移入的触发区域也完美的限制在六边形里面了嘛~</p>\n<p>女神表达了感激之情，我们在 QQ 上轻(gan)松(ga)的聊了起来，看起来是到了该约周末一起吃饭的时候了。</p>\n<blockquote>\n<p>"啊，抱歉噢，我周末要跟男朋友一起去逛街呢"</p>\n</blockquote>\n<p>哦。</p>\n<p>呵呵哒。</p>\n<p>真是一个感(lei)人(jue)肺(bu)腑(ai)的爱情故事。</p>',frontmatter:{title:"通过 CSS 实现六边形效果",date:"2016-06-27",category:"技术",tags:["CSS"]}},site:{siteMetadata:{defaultAuthor:"根号三",language:"zh-cmn-Hans",SEOTitle:"sqrtthree's blog | 根号三的博客",keyword:"前端 前端工程师 HTML5 CSS3 Javascript React Vue Node.js Go Docker",description:"web 开发者, 擅长各项前端技能，深入研究 web 端开发与前端性能, 并对 Nodejs 及 Go 服务端技术栈有深入了解。",donation:{status:!0,channel:{alipay:"http://7xl8me.com1.z0.glb.clouddn.com/alipay.JPG",wechat:"http://7xl8me.com1.z0.glb.clouddn.com/wechat_receive_money.JPG"}},share:!0}}},pathContext:{slug:"/The-hexagon-by-CSS/",title:"通过 CSS 实现六边形效果",prev:{fields:{slug:"/a-5-minute-intro-to-styled-components/"},frontmatter:{title:"一个关于 Styled Components 的五分钟介绍",category:"技术",tags:["CSS","React"],cover:"https://camo.githubusercontent.com/4cf7254acbf60caa799fadead24a8e35839b84af/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f323030302f312a4449466a69345a6d4a61345f483345706247325841772e706e67",date:"2017-02-10"},excerpt:"原文地址： A 5-minute Intro to Styled Components 原文作者： Sacha Greif 译文出自： 掘金翻译计划 译者： 根号三 校对者： Tina92 、 lovelyCiTY CSS 是一个很神奇的语言，你可以在 1…"},next:{fields:{slug:"/jQuery-3-0-Final-Released/"},frontmatter:{title:"jQuery 3.0 终于发布啦！",category:"技术",tags:["jQuery3.0","译文"],cover:null,date:"2016-06-13"},excerpt:"jQuery 3.0 现在发布啦！这个版本从 2014 年 10 月就已经在开始开发了。我们的目标是创建一个更轻量、更快的 jQuery（带有向后兼容的思想）。我们删除了所有的兼容旧版本 IE 浏览器的解决办法，并在一些有意义的地方利用了一些较为现代的 web APIs。它是…"}}}}});
//# sourceMappingURL=path---the-hexagon-by-css-a5b8b05ad9af17572de8.js.map