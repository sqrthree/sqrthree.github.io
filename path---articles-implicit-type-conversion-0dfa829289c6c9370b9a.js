webpackJsonp([98604038800202],{395:function(e,o){e.exports={data:{markdownRemark:{html:'<p>类型转换还不行？还非得隐式？这是什么高级玩意？</p>\n<p>废话不多说，我们先上一盘 🌰，额，不对，先看一个例子吧。</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>3 + true</code></pre>\n      </div>\n<p>实际上在大多数编程语言中，都会认为上面这个表达式是错误的。因为布尔表达式与算术运算是不兼容的。尤其是在静态语言中，甚至不会被运行运行。即使是动态语言中，通常虽然可以让程序运行，但是会抛出一个异常。</p>\n<p>然而，然而， Javascript 不仅运行程序能够正常运行，而且还会顺利地产生结果 4。Javascript 真的是对类型错误出奇的宽容啊。看起来很像是一件好事对不对？</p>\n<p>基本上，在 Javascript 中，只有在一些极少数情况下才会因为类型错误而抛出一个异常。诸如: 调用非函数对象或者获取 null / undefined 的属性时。</p>\n<p>但是在大多数情况下，Javascript 都是不会抛出异常的。这个『小婊砸』反而按照多种多样的转换协议偷偷的强制转换为她期望的值。诺，你看，还花样转换呢，真会玩嘛。这就是所谓的『隐式类型转换』。</p>\n<p>那么，上面那个例子中，究竟是发生了什么样的转换方式呢？</p>\n<p>首先，Javascript 这个『小婊砸』在遇到算数运算符(<code>-</code> 、<code>*</code> 、<code>/</code> 和 <code>%</code>)的时候会在运算之前将参与运算的双方转换成数字。</p>\n<p>那么问题又来了，<code>true</code> 怎么就转换成数字了呢？实际上我们通过 <code>Number(true)</code> 就可以看到， <code>true</code> 转换为数字之后就是为 1，相反，<code>false</code> 转换为数字之后就对应为 0。</p>\n<p>细心的你可能发现我在上面并没有提到 <code>+</code> 运算符，那是因为它更复杂。因为它既承担着数字相加，又肩负着字符串连接操作的重任。具体的行为取决于参数的类型。</p>\n<p>但是，如果一个数字和一个字符串相加，会碰撞出什么样的火花呢？</p>\n<p>显然 Javascript 这个『小婊砸』更偏爱字符串多一点，她会将数字(<code>toString()</code>)转换为字符串，然后执行字符串连接操作。</p>\n<p>例如:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>"1" + 2;    // "12"\n1 + "2";    // "12"</code></pre>\n      </div>\n<p>但是，注意，Javascript 对操作顺序非常敏感，以至于会发生这样的事情:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>1 + 2 + "3";    // "33"</code></pre>\n      </div>\n<p>因为加法运算是自左向右的，因此它等同于下面的表达式:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>(1 + 2) + "3";    // "33"</code></pre>\n      </div>\n<p>再来看这一个例子:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>if (1 == true) {\n    alert("true");\n} else {\n    alert("false");\n}</code></pre>\n      </div>\n<p>相信你一定轻松的猜到了结果对不对？</p>\n<p>但是，哼，你以为我的问题会这么简单么？那岂不是太小看你了。</p>\n<p>我们都知道，Javascript 中，数字 <code>0</code> 为假，<code>非0</code> 均为真, 那么我想问的是，在上面的条件语句中，到底是 <code>1</code> 被隐式类型转换了呢还是 <code>true</code> 被隐式类型转换了呢？</p>\n<p>实际上在条件判断运算 <code>==</code> 中的转换规则是这样的:</p>\n<ol>\n<li>如果比较的两者中有布尔值(Boolean)，会把 <code>Boolean</code> 先转换为对应的 Number，即 0 和 1，然后进行比较。</li>\n<li>如果比较的双方中有一方为 <code>Number</code>，一方为 <code>String</code>时，会把 <code>String</code> 通过 <code>Number()</code> 方法转换为数字，然后进行比较。</li>\n<li>如果比较的双方中有一方为 <code>Boolean</code>，一方为 <code>String</code>时，则会先将双方转换为数字，然后进行比较。</li>\n<li>如果比较的双方中有一方为 <code>Number</code>，一方为<code>Object</code>时，则会调用 <code>valueOf</code> 方法将<code>Object</code>转换为数字，然后进行比较。</li>\n</ol>\n<p>例如:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>1 == { valueOf: function() {return 1;} }    // true\n1 + { valueOf: function() {return 1;} }    // 2</code></pre>\n      </div>\n<p>需要强调的是，在 Javascript 中，只有 <code>空字符串</code>、<code>数字0</code>、<code>false</code>、<code>null</code>、<code>undefined</code> 和 <code>NaN</code> 这 6 个值为假之外，其他所有的值均为真值。</p>\n<p>说到 <code>NaN</code>，就不得不提一下 <code>isNaN()</code> 方法，<code>isNaN()</code> 方法自带隐式类型转换，该方法在测试其参数之前，会先调用 <code>Number()</code> 方法将其转换为数字。所以 <code>isNaN(\'1\')</code> 这个语句中明明用一个字符串去测试，返回值仍然为 <code>false</code> 也就不足为怪了。</p>\n<p>在 <code>+</code> 号运算中还有一种更复杂的情况，那就是数字/字符串和对象进行运算的时候，上面已经举例说明了数字和对象运算的情况，我们再来说一下字符串和对象运算的情况。</p>\n<p>当字符串和对象进行 <code>+</code> 运算的时候，Javascript 会通过对象的 <code>toString()</code> 方法将其自身转换为字符串，然后进行连接操作。</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>"1" + { toString: function() {return 1;} }    // "11"</code></pre>\n      </div>\n<p>之所以说它特殊，是因为当一个对象同时包含 <code>toString()</code> 和 <code>valueOf()</code> 方法的时候，运算符 <code>+</code> 应该调用哪个方法并不明显(做字符串连接还是加法应该根据其参数类型，但是由于隐式类型转换的存在，类型并不显而易见。)，Javascript 会盲目的选择 <code>valueOf()</code> 方法而不是 <code>toString()</code> 来解决这个问题。这就意味着如果你打算对一个对象做字符串连接的操作，但结果却是......</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>var obj = {\n    toString: function() { return "Object CustomObj"; },\n    valueOf: function() { return 1; }\n};\n\nconsole.log("Object: " + obj);    // "Object: 1"</code></pre>\n      </div>\n<p>隐式类型转换会给我们造成很多麻烦，那么该怎么避免呢？</p>\n<p>建议在所有使用条件判断的时候都使用全等运算符 <code>===</code> 来进行条件判断。全等运算符会先进行数据类型判断，并且不会发生隐式类型转换。</p>',frontmatter:{title:"聊一聊 JS 中的『隐式类型转换』",date:"2016-01-23",category:"技术",tags:["JS"],cover:null}},site:{siteMetadata:{url:"http://blog.sqrtthree.com/",thumbnail:"",defaultAuthor:"根号三",donation:{status:!0,channel:{alipay:"http://7xl8me.com1.z0.glb.clouddn.com/alipay.JPG",wechat:"http://7xl8me.com1.z0.glb.clouddn.com/wechat_receive_money.JPG"}},share:!0}}},pathContext:{slug:"/implicit-type-conversion/",title:"聊一聊 JS 中的『隐式类型转换』",excerpt:"…",prev:{fields:{slug:"/gitbook/"},frontmatter:{title:"GitBook 简明教程",category:"技术",tags:["GitBook","工具"],cover:null,date:"2016-02-23"},excerpt:"Modern book format and toolchain using Git and Markdown 这是 GitBook 项目主页上对 GitBook 的定义。 GitBook 是一个命令行工具。通过它，你能够使用 Git 和 Markdown…"},next:{fields:{slug:"/javascript-developer-survey-results/"},frontmatter:{title:"JavaScript 开发者年度调查报告",category:"技术",tags:["译文"],cover:null,date:"2015-12-26"},excerpt:"原文链接 :  JavaScript Developer Survey Results 原文作者 :  ponyfoo 译文出自 :  掘金翻译计划 译者 :  sqrthree(根号三) 校对者:  Zhangdroid 截止目前有超过了 500…"}}}}});
//# sourceMappingURL=path---articles-implicit-type-conversion-0dfa829289c6c9370b9a.js.map