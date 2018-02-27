webpackJsonp([0xec77d666a05d],{399:function(e,n){e.exports={data:{markdownRemark:{html:'<h2>1、神奇的 <code>mixins</code></h2>\n<p>想必有 <code>less</code> &#x26; <code>sass</code> 经验的同学对 <code>mixins</code> 一定都不陌生了，<code>mixins</code> 呢，其实就是方便对一堆代码块的重复利用。在 <code>Jade</code> 里面当然也少不了代码块的复用咯~~</p>\n<p><code>mixins</code> 的定义很简单，就只需要 <code>mixin 代码块名字</code> 即可</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>mixin demo\n  p this is a demo</code></pre>\n      </div>\n<p>调用方式就更简单了，我们需要这样 <code>+代码块名字</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>+demo</code></pre>\n      </div>\n<p>输出结果非常理想</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code><p>this is a demo</p></code></pre>\n      </div>\n<p>什么？你说这都是只能用于内容固定的代码块？没关系，我们来看看内容不固定的时候应该怎么办</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>mixin info(name, skills)\n  p my name is #{name}\n  ul.skills-box\n    each skill in skills\n      li #{skill}\n\n+info(\'sqrtthree\',[\'html\',\'css\',\'javascript\',\'nodejs\'])</code></pre>\n      </div>\n<p>编译结果如下</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code><p>my name is sqrtthree</p>\n<ul class="skills-box">\n  <li>html</li>\n  <li>css</li>\n  <li>javascript</li>\n  <li>nodejs</li>\n</ul></code></pre>\n      </div>\n<p>什么？你还想要嵌套的 <code>mixins</code>，╮(╯▽╰)╭ 怎么这么多事。。</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>mixin info(name, skills)\n  p my name is #{name}\n  ul.skills-box\n    each skill in skills\n      li #{skill}\n\nmixin developersInfo(developer)\n  h2 #{developer.name}\n  +info(developer.name, developer.skills)\n\n+developersInfo({"name": "sqrtthree", "skills": [\'html\',\'css\',\'javascript\',\'nodejs\']})</code></pre>\n      </div>\n<p>编译结果是这个样子的</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code><h2>sqrtthree</h2>\n<p>my name is sqrtthree</p>\n<ul class="skills-box">\n  <li>html</li>\n  <li>css</li>\n  <li>javascript</li>\n  <li>nodejs</li>\n</ul></code></pre>\n      </div>\n<p>那如果我们遇到不定参的问题呢</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>mixin info(className, ...skills)\n  ul(class=\'#{className}\')\n    each skill in skills\n      li #{skill}\n\n+info(\'list\',\'html\',\'css\',\'javascript\',\'nodejs\')</code></pre>\n      </div>\n<p>我们来看编译结果</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code><ul class="list">\n  <li>html</li>\n  <li>css</li>\n  <li>javascript</li>\n  <li>nodejs</li>\n</ul></code></pre>\n      </div>\n<p>变量都能传递了，那属性能传递么？</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>mixin attr(text)\n  p(class=attributes.class) #{text}\n\n+attr(\'text\')(class="tips")</code></pre>\n      </div>\n<p>结果如下：</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code><p class="tips">text</p></code></pre>\n      </div>\n<p>属性传递的时候还有一个语法糖呢。</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>mixin attr(text)\n  p&attributes(attributes) #{text}\n\n+attr(\'demo\')(class="tips", id="j-tips", data-id="18")</code></pre>\n      </div>\n<p>我们来看编译结果是什么样的</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code><p id="j-tips" data-id="18" class="tips">text</p></code></pre>\n      </div>\n<p><code>mixins</code> 还有一个高级用法，那就是内联代码块。先上例子</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>mixin code(text)\n p #{text}\n if block\n  block\n else\n  p no block.\n\n+code(\'this is a demo\')\n  p this is a block.</code></pre>\n      </div>\n<p>编译结果如下：</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code><p>this is a demo</p>\n<p>this is a block.</p></code></pre>\n      </div>\n<p>从上面的代码中，我们可以看出，我们在调用<code>+code</code>的时候给他设置一个代码块 <code>p this is a block</code>，那么在 <code>mixins</code> 里面，程序会自动把这个代码块的内容传递给 <code>block</code> 变量。然后我们可以通过判断进行相应的操作。</p>\n<h2>2、模板的继承</h2>\n<p>我们在做整站开发时，通常每一个页面的头部和底部都是一样的，之前我们的做法可能是写完一个之后然后不断的复制粘贴，但是现在我们有了 <code>Jade</code>之后，来看看我们可以怎么做？</p>\n<p>在 <code>Jade</code> 里面，我们通过 <code>block</code> 和 <code>extends</code> 这两个关键字实现模板之间的继承，一个代码块可以看成是 <code>Jade</code> 中的一个 <code>block</code>，我们将在子模板中实现</p>\n<p>我们先看一个小例子，定义一个简单的代码块</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>block demo\n  p this is a demo.</code></pre>\n      </div>\n<p>默认情况下，代码块的内容是会被输出的</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code><p>this is a demo.</p></code></pre>\n      </div>\n<p>在同一个文件中，我们可以直接通过这种方式进行调用</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>block demo\n  p this is a demo.\nblock demo\nblock demo\nblock demo</code></pre>\n      </div>\n<p>结果是这样的</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code><p>this is a demo.</p>\n<p>this is a demo.</p>\n<p>this is a demo.</p>\n<p>this is a demo.</p></code></pre>\n      </div>\n<p>那么如果是不同文件之间，如何进行调用呢？</p>\n<p>比如我们有一个 <code>layout.jade</code> 文件，内容是这样的。</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>doctype html\nhtml\n  head\n    title this is a demo.\n  body\n    h1 demo.\n\n    block cont</code></pre>\n      </div>\n<p>然后呢，我们有一个 <code>demo.jade</code>文件是这样的</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>extends layout\t// 这里的 layout 指的是需要继承的模板文件\n\nblock cont\n  h2 Look, this is a demo.\n  p this is a paragraph.</code></pre>\n      </div>\n<p>然后我们通过命令行工具编译 <code>demo.jade</code> 文件，结果是神奇的</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code><!DOCTYPE html>\n<html>\n  <head>\n    <title>this is a demo.</title>\n  </head>\n  <body>\n    <h1>demo.</h1>\n    <h2>Look, this is a demo.</h2>\n    <p>this is a paragraph.</p>\n  </body>\n</html></code></pre>\n      </div>\n<p>怎么样？是不是觉得很方便呢？</p>\n<p>模板的继承解决了多个文件之间代码复用的问题，其实上面我们提到的页头和页脚我们用模板包含的方式可能更合适一些，下面我们来看一看模板的包含.</p>\n<p><code>includes</code> 允许你静态包含一段 <code>Jade</code>, 或者别的存放在单个文件中的东西比如 <code>css</code> <code>html</code>。</p>\n<p>比如我们有一个 <code>footer.jade</code> 文件，他里面有着这样的内容</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>div#footer\n  p copyright.</code></pre>\n      </div>\n<p>然后我们在我们的 <code>demo.jade</code> 文件中这样使用</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>doctype html\nhtml\n  head\n    title this is a demo.\n  body\n    h1 Hello, World.\n\n    include footer</code></pre>\n      </div>\n<p>编译结果是这个样子的</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code><DOCTYPE html>\n<html>\n  <head>\n    <title>this is a demo.</title>\n  </head>\n  <body>\n    <h1>Hello, World.</h1>\n    <div id="footer">\n      <p>copyright.</p>\n    </div>\n  </body>\n</html></code></pre>\n      </div>\n<p>当然，通过 <code>includes</code> 引入 <code>css</code> 代码也是一样的。大家可以尝试一下，我这里就不举例子了。</p>',frontmatter:{title:"前端开发模板引擎 -- Jade之神奇的 mixins 和模板继承",date:"2015-08-20",category:"技术",tags:["jade"],cover:null}},site:{siteMetadata:{url:"http://blog.sqrtthree.com/",thumbnail:"",defaultAuthor:"根号三",donation:{status:!0,channel:{alipay:"http://7xl8me.com1.z0.glb.clouddn.com/alipay.JPG",wechat:"http://7xl8me.com1.z0.glb.clouddn.com/wechat_receive_money.JPG"}},share:!0}}},pathContext:{slug:"/jade-04/",title:"前端开发模板引擎 -- Jade之神奇的 mixins 和模板继承",excerpt:"1、神奇的  mixins 想必有  less  &  sass  经验的同学对  mixins  一定都不陌生了， mixins  呢，其实就是方便对一堆代码块的重复利用。在  Jade  里面当然也少不了代码块的复用咯~~ mixins  的定义很简单，就只需要  mixin…",prev:{fields:{slug:"/jade-02/"},frontmatter:{title:"前端开发模板引擎 -- Jade之标签的基本写法",category:"技术",tags:["jade"],cover:null,date:"2015-08-20"},excerpt:"1、文档声明 我们在开始写一个  html  页面的时候，首先要写上  DOCTYPE  文档声明的，现在通常情况下我们都是采用  HTML5  的文档声明方式，那么在  jade  里面我们应该怎么写呢？ 在  jade  里面编写文档声明有…"},next:{fields:{slug:"/hello-world/"},frontmatter:{title:"Hello World",category:null,tags:null,cover:null,date:"2015-06-27"},excerpt:"About Me I'm a Front-End developer, now living in ZhengZhou, China. I'm ❤ programming & UI design. Skills HTML5 & CSS3 JavaScript Node.js Go…"}}}}});
//# sourceMappingURL=path---articles-jade-04-ec79478f46492fa5ae79.js.map