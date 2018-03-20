webpackJsonp([0xa4b8b4d5774a],{401:function(e,n){e.exports={data:{markdownRemark:{html:'<p>前面介绍了一些 <code>Jade</code> 的简单用法，这篇文章为大家讲一下 <code>Jade</code> 中如何进行数据的动态传递和流程控制，干货来咯~</p>\n<h2>1、<code>Jade</code> 中简单的变量定义和使用</h2>\n<p>我们在写 <code>html</code> 静态页面的过程中，免不了会碰到一些需要动态注入的地方，一般的写法就略显麻烦，那么我们有了 <code>Jade</code> 之后呢，不啰嗦了，我们从最简单的例子开始：</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>doctype html\nhtml\n  head\n    title Hello,World.\n  body\n    - var title = \'sqrtthree.com\';\n    p welcome to #{title}</code></pre>\n      </div>\n<p>我想我们大概能够想象出编译结果：</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code><!DOCTYPE html>\n<html>\n  <head>\n    <title>Hello,World.</title>\n  </head>\n  <body>\n    <p>welcome to sqrtthree.com</p>\n  </body>\n</html></code></pre>\n      </div>\n<p>从上面的代码中我们可以看出，在 <code>Jade</code> 中进行数据传递非常简单：</p>\n<ol>\n<li>通过<code>-</code> + <code>空格</code>开始，作为标记在 <code>Jade</code> 中定义变量</li>\n<li>通过 <code>#{变量名}</code> 进行输出和调用即可.</li>\n</ol>\n<p>那要是我们就只是想输出 <code>#{}</code>的时候该怎么办呢？转义咯~</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>p welcome to \\#{title}\t// => <p>welcome to #{title}</p></code></pre>\n      </div>\n<p>另外，在 <code>Jade</code> 里面我们就可以通过这种方式使用 <code>js</code>的语法了，比如这样：(为了看着方便，我就直接在后面写出关键行的编译结果了)</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>- var title = \'sqrtthree.com\';\np welcome to #{title.toUpperCase()}\t\t// => <p>welcome to SQRTTHREE.COM</p></code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>- var title = \'sqrtthree.com\';\np welcome to #{title.charAt(0)}\t\t// => <p>welcome to s</p></code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>- var title = \'sqrtthree.com\';\np welcome to #{title.substring(0,4)}\t// => <p>welcome to sqrt</p></code></pre>\n      </div>\n<p>怎么样？有没有觉得很简单呢。</p>\n<p>但是呢，我们在工作中是很少直接在文件中这样直接定义变量值的，通常都是在后台读取到值然后设置到页面中，那我们现在没有后台该怎么办呢？还记得第一篇文章中我们说过的 <code>Jade</code> 命令行工具么？我们可以在 <code>Jade</code> 为我们提供的命令行工具中直接传递数据，话不多说，继续上代码：</p>\n<p>我们通过如下的命令编译下面的 <code>Jade</code> 文件，为了方便查看，就只显示部分的编译结果</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>jade test.jade  -P --obj \'{"title": "sqrtthree"}\'</code></pre>\n      </div>\n<p><code>Jade</code> 文件如下：</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>doctype html\nhtml\n  head\n    title welcome\n  body\n    p welcome to #{title}\t\t// => <p>welcome to sqrtthree</p></code></pre>\n      </div>\n<p>那么问题就来了，如果我们在命令行中和文件中定义了相同名字的变量，那究竟是显示哪一个变量的值呢？</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>doctype html\nhtml\n  head\n    title welcome\n  body\n    - var title = \'sqrtthree.com\'\n    p welcome to #{title}\t\t// => <p>welcome to sqrtthree.com</p></code></pre>\n      </div>\n<p>根据编译结果显示，在文件中定义的值把之前外部传入的值替换掉了。</p>\n<p>其实上面的方式中有一个坑不知道大家发现没有，就是通常我们传入数据的时候都不会只传一个的，那如果需要传入很多的数据的话，怎么还能够这么写呢？反正换我我是绝逼会崩溃的。</p>\n<p><code>Jade</code> 也支持传入 <code>json</code> 文件的方式进行数据传递的, 例如我们在项目里新建一个 <code>data.json</code> 文件，格式如下：</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>{\n  "title": "根号三的博客",\n  "href": "sqrtthree.com",\n  "cont": "我可耻，我打了个硬广。^_^"\n}</code></pre>\n      </div>\n<p>这里我们就要在命令行里执行另一个参数的命令了</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>jade test.jade  -P -O data.json\t\t// 注意，O 为英文大写</code></pre>\n      </div>\n<p>页面和编译结果分别为:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>doctype html\nhtml\n  head\n    title welcome #{title}\t// => <title>welcome 根号三的博客</title>\n  body\n    a(href=\'#{href}\', title=\'#{title}\') #{href}\t\t// => <a href="sqrtthree.com" title="根号三的博客">sqrtthree.com</a>\n    p #{cont}\t\t// => <p>我可耻，我打了个硬广。^_^</p></code></pre>\n      </div>\n<h2>2、<code>Jade</code> 中的注释</h2>\n<p>变量一多，我们就难免会忘记他们的含义，为了便于后期维护，我们的好习惯是给他们都加上注释方便理解。</p>\n<p>单行注释和 JavaScript 里是一样的，通过 <code>//</code> 来开始，并且必须为单独一行哟~</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>// just some example\t\t// => <!-- just some example-->\np just some example\t\t// => <p>just some example</p></code></pre>\n      </div>\n<p><code>Jade</code> 同样支持不输出的注释，只需要加一个横线 <code>-</code> 就好了</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>//- just some example\np just some example\t\t// => <p>just some example</p></code></pre>\n      </div>\n<p>如果我们需要多行注释的话，使用下面的块注释也是极好的</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>.box\n  //\n    h1 this is a demo.\n    p this is a paragraph.</code></pre>\n      </div>\n<p>编译结果是这样的：</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code><div class="box">\n  <!--\n  h1 this is a demo.\n  p this is a paragraph.\n  -->\n</div></code></pre>\n      </div>\n<h2>3、流程控制</h2>\n<p>有了变量，我们就可以做很多事情。比如像下面这样：</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>- var data = {"name": "sqrtthree","age": 20};\n\n- for ( var attr in data)\n  p= \'my \' + attr + \' is \' + data[attr]ighlight html %}</code></pre>\n      </div>\n<p>那么结果是什么样的呢？</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code><p>my name is sqrtthree</p>\n<p>my age is 20</p></code></pre>\n      </div>\n<p>咦，看着怎么这么熟悉呢？没错，就是 <code>js</code> 中遍历 <code>json</code>对象的操作。当然了，下面这种方式也是可以的，结果和上面是一样的</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>- var data = {"name": "sqrtthree","age": 20};\n\n- for ( var attr in data)\n  //- p= \'my \' + attr + \' is \' + data[attr]\n  p my #{attr} is #{data[attr]}</code></pre>\n      </div>\n<p>当然了，除了 <code>for</code> 之外，<code>Jade</code> 还提供了另外一种语法糖</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>- var data = {"name": "sqrtthree","age": 20};\n\n- each value, keys in data\n  //- p=keys + \' : \' + value\n  p #{keys} : #{value}</code></pre>\n      </div>\n<p>说完了 <code>json</code> 对象，我们来说一说他的好搭档 - 数组</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>- var skills = [\'html\', \'css\', \'javascript\', \'nodejs\'];\n\nul\n  - each skill in skills\n    li #{skill}</code></pre>\n      </div>\n<p>编译结果是这个样子的</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code><ul>\n  <li>html</li>\n  <li>css</li>\n  <li>javascript</li>\n  <li>nodejs</li>\n</ul></code></pre>\n      </div>\n<p>什么？太简单了？那我们来点复杂的</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>- var data = [{id: 1,skills: [\'html\', \'css\']},{id: 2,skills: [\'javascript\',\'nodejs\']}];\n\ndl\n  - each list in data\n    dt #{list.id}\n    - each item in list.skills\n      dd #{item}</code></pre>\n      </div>\n<p>结果是这样的</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code><dl>\n  <dt>1</dt>\n  <dd>html</dd>\n  <dd>css</dd>\n  <dt>2</dt>\n  <dd>javascript</dd>\n  <dd>nodejs</dd>\n</dl></code></pre>\n      </div>\n<p>说完了 <code>for</code> &#x26; <code>each</code> 语句，我们还有 <code>while</code> 语句呢，比如我们要输出 5 个 <code>li</code>，我们可以这么写：</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>- var n = 0;\n\nul\n  while n < 5\n    li=n++</code></pre>\n      </div>\n<p>结果很明显：</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code><ul>\n  <li>0</li>\n  <li>1</li>\n  <li>2</li>\n  <li>3</li>\n  <li>4</li>\n</ul></code></pre>\n      </div>\n<h2>4、条件判断</h2>\n<p>关于<code>if else</code>，我们可以这样用</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>- var onOff = true;\n- var data = [\'html\',\'css\',\'javascript\']\n\nul\n  if onOff\n    -each skills in data\n      li=skills\n  else\n    li none</code></pre>\n      </div>\n<p>当 <code>onOff</code> 变量为真时，结果为</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code><ul>\n  <li>html</li>\n  <li>css</li>\n  <li>javascript</li>\n</ul></code></pre>\n      </div>\n<p>当 <code>onOff</code> 变量为假时，结果为</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code><ul>\n  <li>none</li>\n</ul></code></pre>\n      </div>\n<p>又见语法糖，<code>Jade</code> 默认是支持 <code>unless</code> 的，那么问题来了，<code>unless</code> 究竟是个什么东东呢？</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>- var onOff = true;\n- var data = [\'html\',\'css\',\'javascript\']\n\nul\n  unless !onOff\n    -each skills in data\n      li=skills\n  else\n    li none</code></pre>\n      </div>\n<p>从上面的代码中，我们可以看出，<code>unless</code> 实际上就是 <code>if ( !(expr) )</code> 的等价方式.</p>\n<p>下面我们谈谈 <code>case</code> &#x26; <code>when</code> 的用法，编译结果我就不写了，大家可以自行测试。</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>- var data = \'jser\';\n\ncase data\n  when \'jser\'\n    p Hello, jser.\n  when \'weber\'\n    p Hello, weber.\n  default\n    p Hello, #{data}</code></pre>\n      </div>',frontmatter:{title:"前端开发模板引擎 -- Jade之数据的动态传递和流程控制",date:"2015-08-20",category:"技术",tags:["jade"],cover:null}},site:{siteMetadata:{url:"http://blog.sqrtthree.com/",thumbnail:"",defaultAuthor:"根号三",donation:{status:!0,channel:{alipay:"http://7xl8me.com1.z0.glb.clouddn.com/alipay.JPG",wechat:"http://7xl8me.com1.z0.glb.clouddn.com/wechat_receive_money.JPG"}},share:!0}}},pathContext:{slug:"/jade-03/",title:"前端开发模板引擎 -- Jade之数据的动态传递和流程控制",excerpt:"前面介绍了一些  Jade  的简单用法，这篇文章为大家讲一下  Jade  中如何进行数据的动态传递和流程控制，干货来咯~ 1、 Jade  中简单的变量定义和使用 我们在写  html…",prev:{fields:{slug:"/jade-02/"},frontmatter:{title:"前端开发模板引擎 -- Jade之标签的基本写法",category:"技术",tags:["jade"],cover:null,date:"2015-08-20"},excerpt:"1、文档声明 我们在开始写一个  html  页面的时候，首先要写上  DOCTYPE  文档声明的，现在通常情况下我们都是采用  HTML5  的文档声明方式，那么在  jade  里面我们应该怎么写呢？ 在  jade  里面编写文档声明有…"},next:{fields:{slug:"/jade-04/"},frontmatter:{title:"前端开发模板引擎 -- Jade之神奇的 mixins 和模板继承",category:"技术",tags:["jade"],cover:null,date:"2015-08-20"},excerpt:"1、神奇的  mixins 想必有  less  &  sass  经验的同学对  mixins  一定都不陌生了， mixins  呢，其实就是方便对一堆代码块的重复利用。在  Jade  里面当然也少不了代码块的复用咯~~ mixins  的定义很简单，就只需要  mixin…"}}}}});
//# sourceMappingURL=path---articles-jade-03-5ade81961b757cfac832.js.map