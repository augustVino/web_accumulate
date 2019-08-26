(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{264:function(t,s,e){"use strict";e.r(s);var a=e(0),r=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("p",[t._v("这本书是 2010 年出版的，这本书谈性能是有时效性的，现在已经是 2018 年了，这几年前端发展的速度是飞快的，书里面还有一些内容考虑 IE6、7、8 的东西，殊不知现在这些都已经不再考虑了，所以不可避免的有一些知识是比较老的。有些解决方法现在已经不是最好的解决方式，比如工具那一章。")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),e("hr"),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),e("p",[t._v("当浏览器在执行 js 代码的时候，不能同时做其他事情。（界面 ui 线程和 js 线程用的是同一进程，所以 js 执行越久，网页的响应时间越长。）")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),e("p",[t._v('async 属性规定一旦脚本可用，则会异步执行。async 属性仅适用于外部脚本（只有在使用 src 属性时）。如果 async="async"：脚本相对于页面的其余部分异步地执行（当页面继续进行解析时，脚本将被执行）')]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),e("p",[t._v("用 get 请求一个文件，请求好了。然后创建动态脚本，最后添加进去。\n缺陷：文件要再请求页面的同一个域。不能从 cdn 下载")]),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),e("p",[t._v("搜索执行环境的作用域链，查找同名标识符。搜索过程从作用域链头部开始，也就是当前运行函数的活动对象。如果找到，就使用这个标识符，对应的变量；如果没有找到，继续搜索下面的对象。搜索过程会持续进行，直到找到标识符，若无法搜索到匹配的对象，那么标识符被视为未定义、")]),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),e("ol",[t._m(33),t._v(" "),e("li",[t._v("使用 document.querySelect 来做选择器，比其他方式快。")]),t._v(" "),e("li",[t._v("需要多次访问某个 dom 节点，使用局部变量存储。")]),t._v(" "),e("li",[t._v("html 集合，把集合长度缓存到一个变量中，然后遍历使用这个变量，如果经常操作集合，建议拷到一个数组中。")]),t._v(" "),e("li",[t._v("要留意浏览器的重绘和重排；批量修改样式的时候，‘离线’操作 DOM 树，使用缓存，并减少访问布局信息的次数。\n重绘和重排是 DOM 编程优化的一个相当重要概念："),e("a",{attrs:{href:"http://web.jobbole.com/83164/",target:"_blank",rel:"noopener noreferrer"}},[t._v("重绘和重排"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("li",[t._v("动画中使用绝对定义，使用拖放处理。")]),t._v(" "),e("li",[t._v("使用事件委托来减少事件处理器的数量。")])]),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),e("p",[t._v("减少迭代工作量：减少属性查找和倒序循环，循环次数越多，性能优化越明显。")]),t._v(" "),t._m(36),e("p",[t._v('减少迭代的次数："Duff\'s Device"循环体展开技术，有兴趣的可以看一下，迭代工作量大于 1000 的时候适用。')]),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),t._m(39),t._v(" "),t._m(40),e("ol",{attrs:{start:"2"}},[e("li",[e("p",[t._v("书里面讲的"),e("strong",[t._v("正则原理和回溯原理，这个很重要")]),t._v("，找个篇"),e("a",{attrs:{href:"http://blog.csdn.net/c_kite/article/details/77875328",target:"_blank",rel:"noopener noreferrer"}},[t._v("博客"),e("OutboundLink")],1),t._v("：跟书里面讲的差不多，但还是建议大家可以去找找 PDF 好好看看正则表达式这节。")])]),t._v(" "),t._m(41),t._v(" "),t._m(42)]),t._v(" "),t._m(43),t._v(" "),e("p",[t._v("js 和用户界面更新在同一个进程中运行，因此一次只能处理一件事情。高效的管理 UI 线程就是要确保 js 不能运行太长时间，以免影响用户体验。")]),t._v(" "),t._m(44),t._v(" "),t._m(45),t._v(" "),e("p",[t._v("这一章节貌似东西都比较老一点。。")]),t._v(" "),t._m(46),t._v(" "),e("p",[t._v("json 应该是近几年一直在用的。。。")]),t._v(" "),t._m(47),t._v(" "),t._m(48),t._v(" "),t._m(49),t._v(" "),t._m(50),t._m(51),t._v(" "),t._m(52),t._v(" "),e("p",[t._v("构建和部署的过程对基于 js 的 web 应用的性能有着巨大影响。这个过程中最重要的步骤有：")]),t._v(" "),t._m(53),t._v(" "),e("p",[t._v("这些都是在构建过程中完成的工作，不要等到运行时去做，webpack 也是在构建过程中，完成的工作。")]),t._v(" "),t._m(54),t._v(" "),t._m(55),t._v(" "),e("p",[t._v("当网页变慢时，分析从网络下载的资源以及分析的资源以及分析脚本的运行性能能让你专注于那些最需要优化的地方。")]),t._v(" "),t._m(56),t._v(" "),t._m(57),t._m(58),t._v(" "),t._m(59),t._v(" "),t._m(60),t._v(" "),e("p",[t._v("1、字符串合并的时候使用简单的'+'和'+='操作符。")]),t._v(" "),t._m(61),e("p",[t._v("2、避免双重求值：避免使用 eval()和 function()构造器来避免双重求值带来的性能消耗，同样的，给 setTimeout()和 setInterval()传递函数而不是字符串作为参数。")]),t._v(" "),t._m(62),t._m(63),t._v(" "),e("p",[t._v("书不太厚，如果对里面的内容感兴趣，还是建议买一本回家看一看。")]),t._v(" "),e("p",[t._v("以上 2018.1.9\n")]),t._v(" "),e("h3",{attrs:{id:"点个star支持我一下"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#点个star支持我一下","aria-hidden":"true"}},[t._v("#")]),t._v(" 点个"),e("a",{attrs:{href:"https://github.com/OBKoro1/web_accumulate",target:"_blank",rel:"noopener noreferrer"}},[t._v("Star"),e("OutboundLink")],1),t._v("支持我一下~")]),t._v(" "),e("comment-comment")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"读书笔记-《高性能-javascript》"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#读书笔记-《高性能-javascript》","aria-hidden":"true"}},[this._v("#")]),this._v(" [读书笔记]《高性能 JavaScript》")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"缺陷"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缺陷","aria-hidden":"true"}},[this._v("#")]),this._v(" 缺陷")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[this._v("#")]),this._v(" 前言")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("总的来说，这本书整体给出的性能优化建议，以及作者耐心的实践，对我们开发优化的启发和帮助还是很大的")]),this._v("，因为它里边的很多知识，都是作者通过实践总结出来的，都是经验的积累，这在一般的教科书上是学不到的。特别是对于 js 基础比较差一点的，里面有很多知识点尽管在现在还是非常有必要的。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("下面我就将各章节的一些重要的知识点总结写出来，争取将干货都提取出来")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"第一章-加载和执行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第一章-加载和执行","aria-hidden":"true"}},[this._v("#")]),this._v(" 第一章-加载和执行")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("js 的阻塞特性：")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"2"}},[s("li",[this._v("脚本的位置")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("如果把脚本"),s("code",[this._v("<script>")]),this._v("放在"),s("code",[this._v("<head>")]),this._v("中，页面会等 js 文件全部下载并执行完成后才开始渲染")]),this._v("，在这些文件下载和执行的过程中：会导致访问网站的时候有明显的延迟，表现为：页面空白。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("性能提升："),s("strong",[this._v("推荐将所有的"),s("code",[this._v("<script>")]),this._v("标签尽可能的放到"),s("code",[this._v("<body>")]),this._v("标签的底部")]),this._v("，优先渲染页面，减少页面空白时间。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"3"}},[s("li",[this._v("组件脚本。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("每个"),s("code",[this._v("<script>")]),this._v("标签初始下载的时候都会阻塞页面的渲染。性能提升做法：\n"),s("strong",[this._v("减少内嵌脚本：减少内嵌的"),s("code",[this._v("<script>")]),this._v("标签")]),this._v("，将代码写在一个标签中。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("合并外链的 js 文件")]),this._v("：http 请求会带来额外的性能开销，栗子：下载一个 100KB 的 js 文件比下载 4 个 25kb 的 js 文件更快。具体操作方法自行搜索。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"4"}},[s("li",[this._v("无阻塞脚本的方法")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("script 标签的 aync 属性")]),this._v("：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("script 标签的 defer 属性")]),this._v("：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("js 文件在页面解析到 script 标签的时候开始下载，但并不会执行，dom 加载完成执行。"),s("strong",[this._v("这两个属性的区别在于执行时机")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("动态脚本元素")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("js 操作 dom 创建"),s("code",[this._v("<script>")]),this._v("标签，自定义生成标签的 type、src 属性。文件会在该元素被添加到页面的时候开始下载。ps：如果文件顺序很重要的话，最好按照顺序合成一个文件。然后再添加到页面中。这样：无论何时启动下载。文件的下载和执行过程不会阻塞页面的其他进程。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h5",{attrs:{id:"_3-xhr-ajax-脚本注入、"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-xhr-ajax-脚本注入、","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. XHR ajax 脚本注入、")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"第一章加载和执行小结："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第一章加载和执行小结：","aria-hidden":"true"}},[this._v("#")]),this._v(" 第一章加载和执行小结：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("把文件放在 body 标签签名，")]),this._v(" "),s("li",[this._v("合并脚本，减少"),s("code",[this._v("<script>")]),this._v("标签。")]),this._v(" "),s("li",[this._v("采用无阻塞下载 js。使用 script 的 defer 和 async 属性 异步下载。动态创建 script 标签和执行代码。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"第二章-数据存取"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第二章-数据存取","aria-hidden":"true"}},[this._v("#")]),this._v(" 第二章-数据存取")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[s("strong",[this._v("js 四种基本的数据存取位置")]),this._v("。\n1、字面量：字符串、数字、布尔、对象、数组、函数、正则、null、undefined，字面量只代表自身，没有存储位置。 2、局部变量。 let var 声明的变量。3、数组元素。4、对象成员。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("性能："),s("strong",[this._v("访问字面量和局部变量的速度是最快的，访问数组和对象成员相对较慢")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"2"}},[s("li",[s("strong",[this._v("变量标识符解析过程")]),this._v("：")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("性能问题：一个标识符所在的位置越深，它的读写速度也就越慢")]),this._v("。因此，函数中读写局部变量总是最快的，而读写全局变量通常是最慢的。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("建议：将全局变量存储到局部变量，加快读写速度。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"2"}},[s("li",[this._v("闭包，原型，嵌套对象。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("优化建议：将常用的跨作用域变量存储到局部变量，然后直接访问局部变量")]),this._v("。理由如上，变量标识符解析过程。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"第二章数据存取小结："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第二章数据存取小结：","aria-hidden":"true"}},[this._v("#")]),this._v(" 第二章数据存取小结：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("访问字面量和局部变量的速度最快，相反，访问数组元素和对象成员相对较慢。")]),this._v(" "),s("li",[this._v("由于局部变量存在于作用域链的起始位置，因为"),s("strong",[this._v("访问局部变量比访问跨作用域变量更快。这个道理同样适用于数组，对象，跨作用域变量")]),this._v("。")]),this._v(" "),s("li",[this._v("把常用的对象，数组，跨域变量保存在局部变量可以改善 js 性能，局部变量访问速度更快。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"第三章-dom-编程小结："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第三章-dom-编程小结：","aria-hidden":"true"}},[this._v("#")]),this._v(" 第三章 DOM 编程小结：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("strong",[this._v("dom 操作天生就慢，尽量减少 dom 操作")]),this._v("，减少访问 dom 的次数。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"第四章算法和流程控制小结："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第四章算法和流程控制小结：","aria-hidden":"true"}},[this._v("#")]),this._v(" 第四章算法和流程控制小结：")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ol",[e("li",[e("p",[t._v("for、while 和 do-while 循环性能差不多，"),e("strong",[t._v("for-in 循环速度只有前面几种类型的 1/7")]),t._v("，所以尽量避免使用 for-in 循环，除非你需要遍历一个属性数量未知的对象。")]),t._v(" "),e("p",[t._v("forEach 比 for 慢，如果运行速度要求严格，不建议使用。")])]),t._v(" "),e("li",[e("p",[t._v("改善循环性能的最佳方式是"),e("strong",[t._v("减少每次迭代的工作量和减少循环迭代的次数")]),t._v("。")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("items"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("代码"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//正序循环")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("items"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("代码"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//倒序循环")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//减少属性查找：查找一次属性，把值存在局部变量，在控制条件里面使用这个变量")]),t._v("\n\n倒序循环在i"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("的时候会自动转换为"),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("，等于"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("的时候为"),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("。\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//倒序循环：控制条件从（迭代数少于总数吗？它是否为true？）变为（它是否为true）")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ol",{attrs:{start:"3"}},[e("li",[e("p",[t._v("if-else 与 switch：条件数量越大，越倾向于使用 switch。")]),t._v(" "),e("p",[t._v("优化 if-else：")]),t._v(" "),e("ul",[e("li",[t._v("把最可能出现的条件放在首位.")]),t._v(" "),e("li",[t._v("使用二分法把值域分成一系列的区间。")])])]),t._v(" "),e("li",[e("p",[t._v("浏览器的调用栈大小限制了递归算法在 js 中的应用；栈溢出错误会导致其他代码中断运行。")]),t._v(" "),e("pre",[e("code",[t._v("小心使用递归，现在es6递归可以尾递归，在es6中只要使用尾递归就不会发生栈溢出，相对节省性能。\n")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"第五章字符串和正则表达式小结："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第五章字符串和正则表达式小结：","aria-hidden":"true"}},[this._v("#")]),this._v(" 第五章字符串和正则表达式小结：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("字符串合并的时候使用简单的'+'和'+='操作符。")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" str"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abc'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("'efg"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//2个以上的字符串拼接，会产生临时字符串")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" str"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("str"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abc'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'efg'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//推荐，提速10%~40%")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",[e("p",[t._v("提高正则表达式效率的方法：")]),t._v(" "),e("ul",[e("li",[t._v("最重要的是：具体化正则表达式！具体化正则表达式！具体化正则表达式！")]),t._v(" "),e("li",[t._v("关注如何让匹配更快失败，找出一些必需，特殊的字符")]),t._v(" "),e("li",[t._v("正则表达式以简单的、必需的字元开始。")]),t._v(" "),e("li",[t._v("使用量词模式，使它们后面的字元互斥。")]),t._v(" "),e("li",[t._v("较少分支数量，缩小分支范围")]),t._v(" "),e("li",[t._v("使用合适的量词")]),t._v(" "),e("li",[t._v("把正则表达式赋值给变量并重用")]),t._v(" "),e("li",[t._v("将复杂的正则拆分为简单的片段\n//事实上，书里面讲的方法不止这么几个，而且每一个都有详细的解析 大佬们 还是去看看这一章节吧")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[this._v("正则表达式并不总是最好的解决方案，当你只是搜索字面字符串或者你事先知道字符串的哪一部分将要被查找时：")]),this._v(" "),s("ul",[s("li",[this._v("使用 indexOf()和 lastIndexOf()更适合查找特定字符串的位置或者判断它们是否存在\n//例如：判断当前浏览器之类。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"第六章快速响应的用户界面小结："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第六章快速响应的用户界面小结：","aria-hidden":"true"}},[this._v("#")]),this._v(" 第六章快速响应的用户界面小结：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[s("p",[this._v("浏览器限制了 js 任务的运行时间，这种限制很有必要，它确保某些恶意代码不能通过永不停止的密集操作锁住用户的浏览器。此限制分为两种：调用栈的大小和长时间运行脚本。")])]),this._v(" "),s("li",[s("p",[this._v("任何 js 任务都不应当执行超过 100 毫秒。过长的运行时间会导致 UI 更新出现明显延迟，从而对用户体验造成负面影响。")])]),this._v(" "),s("li",[s("p",[this._v("定时器可用来安排代码延迟执行，它使得你可以把长时间运行脚本分解成一系列的小任务。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"第七章-ajax-小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第七章-ajax-小结","aria-hidden":"true"}},[this._v("#")]),this._v(" 第七章 AJAX 小结")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[s("p",[this._v("post 更适合发送大量数据到服务器。")])]),this._v(" "),s("li",[s("p",[this._v("get 请求能够被浏览器缓存，Expires 头信息设置浏览器缓存请求多久。可用于从不改变的图片或者其他静态数据集（js、css 等）")])]),this._v(" "),s("li",[s("p",[this._v("JSON 是一种使用 js 对象和数组直接量编写的轻量级且易于解析的数据格式，它不仅传输尺寸小，而且解析速度快。JSON 是高性能 AJAX 的基础，尤其在使用动态脚本注入时。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"4"}},[s("li",[this._v("减少请求数，通过合并 js 和 css 文件。")]),this._v(" "),s("li",[this._v("缩短页面的加载时间，页面主要内容加载完成后，用 AJAX 获取那些次要的文件。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"第八章编程实践小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第八章编程实践小结","aria-hidden":"true"}},[this._v("#")]),this._v(" 第八章编程实践小结")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("避免双重求值：避免使用 eval()和 function()构造器来避免双重求值带来的性能消耗，同样的，给 setTimeout()和 setInterval()传递函数而不是字符串作为参数。")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//双重求值：就是在js代码中执行另一段js代码，不建议使用下面这些方式")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("eval")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'代码'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v("构造函数"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'代码'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("‘代码’"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("和setInterval")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("‘代码’"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"2"}},[s("li",[this._v("尽量使用直接量创建对象和数组。直接量的创建和初始化都比非直接量形式要快。")]),this._v(" "),s("li",[this._v("避免做重复工作，能节省的步骤就节省。")]),this._v(" "),s("li",[this._v("js 原生方法总会比你写的任何代码都要快。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"第九章-构建并部署高性能-js-应用小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第九章-构建并部署高性能-js-应用小结","aria-hidden":"true"}},[this._v("#")]),this._v(" 第九章 构建并部署高性能 js 应用小结")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("合并、压缩 js 文件。"),s("strong",[this._v("可使用 Gzip 压缩，能够减少约 70%的体积")]),this._v("！")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"2"}},[s("li",[this._v("通过正确设置 HTTP 响应头来缓存 js 文件，通过向文件名增加时间戳来避免缓存问题。")]),this._v(" "),s("li",[this._v("使用 CDN 提供 js 文件；CDN 不仅可以提升性能，它也为你管理文件的压缩与缓存，。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"第十章-工具-小结："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第十章-工具-小结：","aria-hidden":"true"}},[this._v("#")]),this._v(" 第十章 工具 小结：")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ol",[e("li",[e("p",[t._v("使用网络分析工具找出加载脚本和页面中其他资源的瓶颈，这会帮助你决定那些脚本需要延迟加载，或者需要进一步分析。")]),t._v(" "),e("ul",[e("li",[t._v("检查图片、样式表和脚本的加载过程，以及它们对页面整体加载和渲染的影响。")]),t._v(" "),e("li",[t._v("针对性的做出优化")])])]),t._v(" "),e("li",[e("p",[t._v("把脚本尽可能延迟加载，这样做可以加快页面渲染速度，给用户带来更好的体验。")])]),t._v(" "),e("li",[e("p",[t._v("确认脚本和其他资源文件的加载过程已经被优化")]),t._v(" "),e("ul",[e("li",[t._v("这里主要是说文件从服务器的下载速度，比如服务器那边的配置问题之类的。")]),t._v(" "),e("li",[t._v("栗子：我就被后端坑过。一个js文件就200k ，下载下来需要50秒钟！")]),t._v(" "),e("li",[t._v("后面发现原来是后端那边nginx没有开启加速配置什么的，导致出现的问题，找问题找半天。")])])]),t._v(" "),e("li",[e("p",[t._v("测试脚本的运行时间,用一个 Date 实例减去另一个 Date 实例，得到的时间差就是脚本运行消耗的时间。")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" start "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//你的代码")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" time "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("newDate")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" start"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"5"}},[s("li",[s("strong",[this._v("chrome ,火狐 等主流浏览器的控制面板，已经能够反映很多性能问题")]),this._v("。仔细分析就能找出很多问题。例如：资源加载，断点等")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"后话"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#后话","aria-hidden":"true"}},[this._v("#")]),this._v(" 后话")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("事实上，"),s("strong",[this._v("自认为这本书最宝贵的就是一些提到的细节")]),this._v("，比如：")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" str"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abc'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'efg'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//2个以上的字符串拼接，会产生临时字符串")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" str"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("str"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abc'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'efg'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//推荐，提速10%~40%")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//双重求值：就是在js代码中执行另一段js代码，不建议使用下面这些方式")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("eval")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'代码'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v("构造函数"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'代码'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("‘代码’"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("和setInterval")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("‘代码’"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"这些东西可以让我们知道什么是更好的实践，什么样的代码可以跑得更快，让我们养成更好的开发习惯。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#这些东西可以让我们知道什么是更好的实践，什么样的代码可以跑得更快，让我们养成更好的开发习惯。","aria-hidden":"true"}},[this._v("#")]),this._v(" 这些东西可以让我们知道什么是更好的实践，什么样的代码可以跑得更快，让我们养成更好的开发习惯。")])}],!1,null,null,null);r.options.__file="高性能js.md";s.default=r.exports}}]);