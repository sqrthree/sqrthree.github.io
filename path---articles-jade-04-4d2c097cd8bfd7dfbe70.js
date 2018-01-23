webpackJsonp([0xec77d666a05d],{393:function(s,n){s.exports={data:{markdownRemark:{html:'<h2>1、神奇的 <code>mixins</code></h2>\n<p>想必有 <code>less</code> &#x26; <code>sass</code> 经验的同学对 <code>mixins</code> 一定都不陌生了，<code>mixins</code> 呢，其实就是方便对一堆代码块的重复利用。在 <code>Jade</code> 里面当然也少不了代码块的复用咯~~</p>\n<p><code>mixins</code> 的定义很简单，就只需要 <code>mixin 代码块名字</code> 即可</p>\n<div class=\'highlight\'><pre class="editor editor-colors"><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>mixin&nbsp;demo</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;p&nbsp;this&nbsp;is&nbsp;a&nbsp;demo</span></span></div></pre></div>\n<p>调用方式就更简单了，我们需要这样 <code>+代码块名字</code></p>\n<div class=\'highlight\'><pre class="editor editor-colors"><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>+demo</span></span></div></pre></div>\n<p>输出结果非常理想</p>\n<div class=\'highlight\'><pre class="editor editor-colors"><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&lt;p&gt;this&nbsp;is&nbsp;a&nbsp;demo&lt;/p&gt;</span></span></div></pre></div>\n<p>什么？你说这都是只能用于内容固定的代码块？没关系，我们来看看内容不固定的时候应该怎么办</p>\n<div class=\'highlight\'><pre class="editor editor-colors"><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>mixin&nbsp;info(name,&nbsp;skills)</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;p&nbsp;my&nbsp;name&nbsp;is&nbsp;#{name}</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;ul.skills-box</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;each&nbsp;skill&nbsp;in&nbsp;skills</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;li&nbsp;#{skill}</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>+info(&#39;sqrtthree&#39;,[&#39;html&#39;,&#39;css&#39;,&#39;javascript&#39;,&#39;nodejs&#39;])</span></span></div></pre></div>\n<p>编译结果如下</p>\n<div class=\'highlight\'><pre class="editor editor-colors"><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&lt;p&gt;my&nbsp;name&nbsp;is&nbsp;sqrtthree&lt;/p&gt;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&lt;ul&nbsp;class=&quot;skills-box&quot;&gt;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&lt;li&gt;html&lt;/li&gt;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&lt;li&gt;css&lt;/li&gt;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&lt;li&gt;javascript&lt;/li&gt;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&lt;li&gt;nodejs&lt;/li&gt;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&lt;/ul&gt;</span></span></div></pre></div>\n<p>什么？你还想要嵌套的 <code>mixins</code>，╮(╯▽╰)╭ 怎么这么多事。。</p>\n<div class=\'highlight\'><pre class="editor editor-colors"><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>mixin&nbsp;info(name,&nbsp;skills)</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;p&nbsp;my&nbsp;name&nbsp;is&nbsp;#{name}</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;ul.skills-box</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;each&nbsp;skill&nbsp;in&nbsp;skills</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;li&nbsp;#{skill}</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>mixin&nbsp;developersInfo(developer)</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;h2&nbsp;#{developer.name}</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;+info(developer.name,&nbsp;developer.skills)</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>+developersInfo({&quot;name&quot;:&nbsp;&quot;sqrtthree&quot;,&nbsp;&quot;skills&quot;:&nbsp;[&#39;html&#39;,&#39;css&#39;,&#39;javascript&#39;,&#39;nodejs&#39;]})</span></span></div></pre></div>\n<p>编译结果是这个样子的</p>\n<div class=\'highlight\'><pre class="editor editor-colors"><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&lt;h2&gt;sqrtthree&lt;/h2&gt;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&lt;p&gt;my&nbsp;name&nbsp;is&nbsp;sqrtthree&lt;/p&gt;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&lt;ul&nbsp;class=&quot;skills-box&quot;&gt;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&lt;li&gt;html&lt;/li&gt;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&lt;li&gt;css&lt;/li&gt;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&lt;li&gt;javascript&lt;/li&gt;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&lt;li&gt;nodejs&lt;/li&gt;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&lt;/ul&gt;</span></span></div></pre></div>\n<p>那如果我们遇到不定参的问题呢</p>\n<div class=\'highlight\'><pre class="editor editor-colors"><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>mixin&nbsp;info(className,&nbsp;...skills)</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;ul(class=&#39;#{className}&#39;)</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;each&nbsp;skill&nbsp;in&nbsp;skills</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;li&nbsp;#{skill}</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>+info(&#39;list&#39;,&#39;html&#39;,&#39;css&#39;,&#39;javascript&#39;,&#39;nodejs&#39;)</span></span></div></pre></div>\n<p>我们来看编译结果</p>\n<div class=\'highlight\'><pre class="editor editor-colors"><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&lt;ul&nbsp;class=&quot;list&quot;&gt;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&lt;li&gt;html&lt;/li&gt;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&lt;li&gt;css&lt;/li&gt;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&lt;li&gt;javascript&lt;/li&gt;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&lt;li&gt;nodejs&lt;/li&gt;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&lt;/ul&gt;</span></span></div></pre></div>\n<p>变量都能传递了，那属性能传递么？</p>\n<div class=\'highlight\'><pre class="editor editor-colors"><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>mixin&nbsp;attr(text)</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;p(class=attributes.class)&nbsp;#{text}</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>+attr(&#39;text&#39;)(class=&quot;tips&quot;)</span></span></div></pre></div>\n<p>结果如下：</p>\n<div class=\'highlight\'><pre class="editor editor-colors"><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&lt;p&nbsp;class=&quot;tips&quot;&gt;text&lt;/p&gt;</span></span></div></pre></div>\n<p>属性传递的时候还有一个语法糖呢。</p>\n<div class=\'highlight\'><pre class="editor editor-colors"><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>mixin&nbsp;attr(text)</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;p&amp;attributes(attributes)&nbsp;#{text}</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>+attr(&#39;demo&#39;)(class=&quot;tips&quot;,&nbsp;id=&quot;j-tips&quot;,&nbsp;data-id=&quot;18&quot;)</span></span></div></pre></div>\n<p>我们来看编译结果是什么样的</p>\n<div class=\'highlight\'><pre class="editor editor-colors"><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&lt;p&nbsp;id=&quot;j-tips&quot;&nbsp;data-id=&quot;18&quot;&nbsp;class=&quot;tips&quot;&gt;text&lt;/p&gt;</span></span></div></pre></div>\n<p><code>mixins</code> 还有一个高级用法，那就是内联代码块。先上例子</p>\n<div class=\'highlight\'><pre class="editor editor-colors"><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>mixin&nbsp;code(text)</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;p&nbsp;#{text}</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;if&nbsp;block</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;block</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;else</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;p&nbsp;no&nbsp;block.</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>+code(&#39;this&nbsp;is&nbsp;a&nbsp;demo&#39;)</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;p&nbsp;this&nbsp;is&nbsp;a&nbsp;block.</span></span></div></pre></div>\n<p>编译结果如下：</p>\n<div class=\'highlight\'><pre class="editor editor-colors"><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&lt;p&gt;this&nbsp;is&nbsp;a&nbsp;demo&lt;/p&gt;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&lt;p&gt;this&nbsp;is&nbsp;a&nbsp;block.&lt;/p&gt;</span></span></div></pre></div>\n<p>从上面的代码中，我们可以看出，我们在调用<code>+code</code>的时候给他设置一个代码块 <code>p this is a block</code>，那么在 <code>mixins</code> 里面，程序会自动把这个代码块的内容传递给 <code>block</code> 变量。然后我们可以通过判断进行相应的操作。</p>\n<h2>2、模板的继承</h2>\n<p>我们在做整站开发时，通常每一个页面的头部和底部都是一样的，之前我们的做法可能是写完一个之后然后不断的复制粘贴，但是现在我们有了 <code>Jade</code>之后，来看看我们可以怎么做？</p>\n<p>在 <code>Jade</code> 里面，我们通过 <code>block</code> 和 <code>extends</code> 这两个关键字实现模板之间的继承，一个代码块可以看成是 <code>Jade</code> 中的一个 <code>block</code>，我们将在子模板中实现</p>\n<p>我们先看一个小例子，定义一个简单的代码块</p>\n<div class=\'highlight\'><pre class="editor editor-colors"><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>block&nbsp;demo</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;p&nbsp;this&nbsp;is&nbsp;a&nbsp;demo.</span></span></div></pre></div>\n<p>默认情况下，代码块的内容是会被输出的</p>\n<div class=\'highlight\'><pre class="editor editor-colors"><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&lt;p&gt;this&nbsp;is&nbsp;a&nbsp;demo.&lt;/p&gt;</span></span></div></pre></div>\n<p>在同一个文件中，我们可以直接通过这种方式进行调用</p>\n<div class=\'highlight\'><pre class="editor editor-colors"><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>block&nbsp;demo</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;p&nbsp;this&nbsp;is&nbsp;a&nbsp;demo.</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>block&nbsp;demo</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>block&nbsp;demo</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>block&nbsp;demo</span></span></div></pre></div>\n<p>结果是这样的</p>\n<div class=\'highlight\'><pre class="editor editor-colors"><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&lt;p&gt;this&nbsp;is&nbsp;a&nbsp;demo.&lt;/p&gt;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&lt;p&gt;this&nbsp;is&nbsp;a&nbsp;demo.&lt;/p&gt;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&lt;p&gt;this&nbsp;is&nbsp;a&nbsp;demo.&lt;/p&gt;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&lt;p&gt;this&nbsp;is&nbsp;a&nbsp;demo.&lt;/p&gt;</span></span></div></pre></div>\n<p>那么如果是不同文件之间，如何进行调用呢？</p>\n<p>比如我们有一个 <code>layout.jade</code> 文件，内容是这样的。</p>\n<div class=\'highlight\'><pre class="editor editor-colors"><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>doctype&nbsp;html</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>html</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;head</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;title&nbsp;this&nbsp;is&nbsp;a&nbsp;demo.</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;body</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;h1&nbsp;demo.</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;block&nbsp;cont</span></span></div></pre></div>\n<p>然后呢，我们有一个 <code>demo.jade</code>文件是这样的</p>\n<div class=\'highlight\'><pre class="editor editor-colors"><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>extends&nbsp;layout\t//&nbsp;这里的&nbsp;layout&nbsp;指的是需要继承的模板文件</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>block&nbsp;cont</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;h2&nbsp;Look,&nbsp;this&nbsp;is&nbsp;a&nbsp;demo.</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;p&nbsp;this&nbsp;is&nbsp;a&nbsp;paragraph.</span></span></div></pre></div>\n<p>然后我们通过命令行工具编译 <code>demo.jade</code> 文件，结果是神奇的</p>\n<div class=\'highlight\'><pre class="editor editor-colors"><div class="line"><span class="syntax--text syntax--html syntax--basic"><span class="syntax--meta syntax--tag syntax--sgml syntax--html"><span class="syntax--punctuation syntax--definition syntax--tag syntax--html"><span>&lt;!</span></span><span class="syntax--meta syntax--tag syntax--sgml syntax--doctype syntax--html"><span>DOCTYPE</span><span>&nbsp;html</span></span><span class="syntax--punctuation syntax--definition syntax--tag syntax--html"><span>&gt;</span></span></span></span></div><div class="line"><span class="syntax--text syntax--html syntax--basic"><span class="syntax--meta syntax--tag syntax--structure syntax--any syntax--html"><span class="syntax--punctuation syntax--definition syntax--tag syntax--html"><span>&lt;</span></span><span class="syntax--entity syntax--name syntax--tag syntax--structure syntax--any syntax--html"><span>html</span></span><span class="syntax--punctuation syntax--definition syntax--tag syntax--html"><span>&gt;</span></span></span></span></div><div class="line"><span class="syntax--text syntax--html syntax--basic"><span>&nbsp;&nbsp;</span><span class="syntax--meta syntax--tag syntax--structure syntax--any syntax--html"><span class="syntax--punctuation syntax--definition syntax--tag syntax--html"><span>&lt;</span></span><span class="syntax--entity syntax--name syntax--tag syntax--structure syntax--any syntax--html"><span>head</span></span><span class="syntax--punctuation syntax--definition syntax--tag syntax--html"><span>&gt;</span></span></span></span></div><div class="line"><span class="syntax--text syntax--html syntax--basic"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="syntax--meta syntax--tag syntax--inline syntax--any syntax--html"><span class="syntax--punctuation syntax--definition syntax--tag syntax--begin syntax--html"><span>&lt;</span></span><span class="syntax--entity syntax--name syntax--tag syntax--inline syntax--any syntax--html"><span>title</span></span><span class="syntax--punctuation syntax--definition syntax--tag syntax--end syntax--html"><span>&gt;</span></span></span><span>this&nbsp;is&nbsp;a&nbsp;demo.</span><span class="syntax--meta syntax--tag syntax--inline syntax--any syntax--html"><span class="syntax--punctuation syntax--definition syntax--tag syntax--begin syntax--html"><span>&lt;/</span></span><span class="syntax--entity syntax--name syntax--tag syntax--inline syntax--any syntax--html"><span>title</span></span><span class="syntax--punctuation syntax--definition syntax--tag syntax--end syntax--html"><span>&gt;</span></span></span></span></div><div class="line"><span class="syntax--text syntax--html syntax--basic"><span>&nbsp;&nbsp;</span><span class="syntax--meta syntax--tag syntax--structure syntax--any syntax--html"><span class="syntax--punctuation syntax--definition syntax--tag syntax--html"><span>&lt;/</span></span><span class="syntax--entity syntax--name syntax--tag syntax--structure syntax--any syntax--html"><span>head</span></span><span class="syntax--punctuation syntax--definition syntax--tag syntax--html"><span>&gt;</span></span></span></span></div><div class="line"><span class="syntax--text syntax--html syntax--basic"><span>&nbsp;&nbsp;</span><span class="syntax--meta syntax--tag syntax--structure syntax--any syntax--html"><span class="syntax--punctuation syntax--definition syntax--tag syntax--html"><span>&lt;</span></span><span class="syntax--entity syntax--name syntax--tag syntax--structure syntax--any syntax--html"><span>body</span></span><span class="syntax--punctuation syntax--definition syntax--tag syntax--html"><span>&gt;</span></span></span></span></div><div class="line"><span class="syntax--text syntax--html syntax--basic"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="syntax--meta syntax--tag syntax--block syntax--any syntax--html"><span class="syntax--punctuation syntax--definition syntax--tag syntax--begin syntax--html"><span>&lt;</span></span><span class="syntax--entity syntax--name syntax--tag syntax--block syntax--any syntax--html"><span>h1</span></span><span class="syntax--punctuation syntax--definition syntax--tag syntax--end syntax--html"><span>&gt;</span></span></span><span>demo.</span><span class="syntax--meta syntax--tag syntax--block syntax--any syntax--html"><span class="syntax--punctuation syntax--definition syntax--tag syntax--begin syntax--html"><span>&lt;/</span></span><span class="syntax--entity syntax--name syntax--tag syntax--block syntax--any syntax--html"><span>h1</span></span><span class="syntax--punctuation syntax--definition syntax--tag syntax--end syntax--html"><span>&gt;</span></span></span></span></div><div class="line"><span class="syntax--text syntax--html syntax--basic"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="syntax--meta syntax--tag syntax--block syntax--any syntax--html"><span class="syntax--punctuation syntax--definition syntax--tag syntax--begin syntax--html"><span>&lt;</span></span><span class="syntax--entity syntax--name syntax--tag syntax--block syntax--any syntax--html"><span>h2</span></span><span class="syntax--punctuation syntax--definition syntax--tag syntax--end syntax--html"><span>&gt;</span></span></span><span>Look,&nbsp;this&nbsp;is&nbsp;a&nbsp;demo.</span><span class="syntax--meta syntax--tag syntax--block syntax--any syntax--html"><span class="syntax--punctuation syntax--definition syntax--tag syntax--begin syntax--html"><span>&lt;/</span></span><span class="syntax--entity syntax--name syntax--tag syntax--block syntax--any syntax--html"><span>h2</span></span><span class="syntax--punctuation syntax--definition syntax--tag syntax--end syntax--html"><span>&gt;</span></span></span></span></div><div class="line"><span class="syntax--text syntax--html syntax--basic"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="syntax--meta syntax--tag syntax--block syntax--any syntax--html"><span class="syntax--punctuation syntax--definition syntax--tag syntax--begin syntax--html"><span>&lt;</span></span><span class="syntax--entity syntax--name syntax--tag syntax--block syntax--any syntax--html"><span>p</span></span><span class="syntax--punctuation syntax--definition syntax--tag syntax--end syntax--html"><span>&gt;</span></span></span><span>this&nbsp;is&nbsp;a&nbsp;paragraph.</span><span class="syntax--meta syntax--tag syntax--block syntax--any syntax--html"><span class="syntax--punctuation syntax--definition syntax--tag syntax--begin syntax--html"><span>&lt;/</span></span><span class="syntax--entity syntax--name syntax--tag syntax--block syntax--any syntax--html"><span>p</span></span><span class="syntax--punctuation syntax--definition syntax--tag syntax--end syntax--html"><span>&gt;</span></span></span></span></div><div class="line"><span class="syntax--text syntax--html syntax--basic"><span>&nbsp;&nbsp;</span><span class="syntax--meta syntax--tag syntax--structure syntax--any syntax--html"><span class="syntax--punctuation syntax--definition syntax--tag syntax--html"><span>&lt;/</span></span><span class="syntax--entity syntax--name syntax--tag syntax--structure syntax--any syntax--html"><span>body</span></span><span class="syntax--punctuation syntax--definition syntax--tag syntax--html"><span>&gt;</span></span></span></span></div><div class="line"><span class="syntax--text syntax--html syntax--basic"><span class="syntax--meta syntax--tag syntax--structure syntax--any syntax--html"><span class="syntax--punctuation syntax--definition syntax--tag syntax--html"><span>&lt;/</span></span><span class="syntax--entity syntax--name syntax--tag syntax--structure syntax--any syntax--html"><span>html</span></span><span class="syntax--punctuation syntax--definition syntax--tag syntax--html"><span>&gt;</span></span></span></span></div></pre></div>\n<p>怎么样？是不是觉得很方便呢？</p>\n<p>模板的继承解决了多个文件之间代码复用的问题，其实上面我们提到的页头和页脚我们用模板包含的方式可能更合适一些，下面我们来看一看模板的包含.</p>\n<p><code>includes</code> 允许你静态包含一段 <code>Jade</code>, 或者别的存放在单个文件中的东西比如 <code>css</code> <code>html</code>。</p>\n<p>比如我们有一个 <code>footer.jade</code> 文件，他里面有着这样的内容</p>\n<div class=\'highlight\'><pre class="editor editor-colors"><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>div#footer</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;p&nbsp;copyright.</span></span></div></pre></div>\n<p>然后我们在我们的 <code>demo.jade</code> 文件中这样使用</p>\n<div class=\'highlight\'><pre class="editor editor-colors"><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>doctype&nbsp;html</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>html</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;head</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;title&nbsp;this&nbsp;is&nbsp;a&nbsp;demo.</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;body</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;h1&nbsp;Hello,&nbsp;World.</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;include&nbsp;footer</span></span></div></pre></div>\n<p>编译结果是这个样子的</p>\n<div class=\'highlight\'><pre class="editor editor-colors"><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&lt;DOCTYPE&nbsp;html&gt;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&lt;html&gt;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&lt;head&gt;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;this&nbsp;is&nbsp;a&nbsp;demo.&lt;/title&gt;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&lt;/head&gt;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&lt;body&gt;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Hello,&nbsp;World.&lt;/h1&gt;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&nbsp;id=&quot;footer&quot;&gt;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;copyright.&lt;/p&gt;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&lt;/body&gt;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&lt;/html&gt;</span></span></div></pre></div>\n<p>当然，通过 <code>includes</code> 引入 <code>css</code> 代码也是一样的。大家可以尝试一下，我这里就不举例子了。</p>',frontmatter:{title:"前端开发模板引擎 -- Jade之神奇的 mixins 和模板继承",date:"2015-08-20",category:"技术",tags:["jade"],cover:null}},site:{siteMetadata:{url:"http://blog.sqrtthree.com/",thumbnail:"",defaultAuthor:"根号三",donation:{status:!0,channel:{alipay:"http://7xl8me.com1.z0.glb.clouddn.com/alipay.JPG",wechat:"http://7xl8me.com1.z0.glb.clouddn.com/wechat_receive_money.JPG"}},share:!0}}},pathContext:{slug:"/jade-04/",title:"前端开发模板引擎 -- Jade之神奇的 mixins 和模板继承",excerpt:"1、神奇的  mixins 想必有  less  &  sass  经验的同学对  mixins  一定都不陌生了， mixins  呢，其实就是方便对一堆代码块的重复利用。在  Jade  里面当然也少不了代码块的复用咯~~ mixins  的定义很简单，就只需要  mixin…",prev:{fields:{slug:"/jade-03/"},frontmatter:{title:"前端开发模板引擎 -- Jade之数据的动态传递和流程控制",category:"技术",tags:["jade"],cover:null,date:"2015-08-20"},excerpt:"前面介绍了一些  Jade  的简单用法，这篇文章为大家讲一下  Jade  中如何进行数据的动态传递和流程控制，干货来咯~ 1、 Jade  中简单的变量定义和使用 我们在写  html…"},next:{fields:{slug:"/hello-world/"},frontmatter:{title:"Hello World",category:null,tags:null,cover:null,date:"2015-06-27"},excerpt:"About Me I'm a Front-End developer, now living in ZhengZhou, China. I'm ❤ programming & UI design. Skills HTML5 & CSS3 JavaScript Node.js Go…"}}}}});
//# sourceMappingURL=path---articles-jade-04-4d2c097cd8bfd7dfbe70.js.map