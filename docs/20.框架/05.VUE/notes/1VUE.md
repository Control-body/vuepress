---
title: VUE基础
---

## 一 前端体系
想要成为真正的“互联网 Java 全栈工程师”还有很长的一段路要走，其中“我大前端”是绕不开的一门必修
课。
本阶段课程的主要目的就是带领我 Java 后台程序员认识前端、了解前端、掌握前端，为实现成为 “互联
网 Java 全栈工程师” 再向前迈进一步。
前端三大：
- 事件（windows docunment）
- 逻辑 (if  else 判断 循环)
- 通信： xhr-》ajax-》axios（vue的专门的通讯框架）  
- 视图（html css 对应框架 vue ）
### 1.前端三要素
- HTML（结构）：超文本标记语言（Hyper Text Markup Language），决定网页的结构和内容
- CSS（表现）：层叠样式表（Cascading Style Sheets），设定网页的表现样式
- JavaScript（行为）：是一种弱类型脚本语言，其源代码不需经过编译，而是由浏览器解释运行，用于控制网页的行为
### 2.表现层（CSS）
CSS 层叠样式表是一门标记语言，并不是编程语言，因此不可以自定义变量，不可以引用等，换句话说
就是不具备任何语法支持，它主要缺陷如下：
- 语法不够强大，比如无法嵌套书写，导致模块化开发中需要书写很多重复的选择器；
- 没有变量和合理的样式复用机制，使得逻辑上相关的属性值必须以字面量的形式重复输出，导致难以维护；


**解决办法**：这就导致了我们在工作中无端增加了许多工作量。为了解决这个问题，前端开发人员会使用一种称之为
【CSS 预处理器】 的工具，提供 CSS 缺失的样式层复用机制、减少冗余代码，提高样式代码的可维护
性。大大提高了前端在样式上的开发效率。
### 3.什么是 CSS 预处理器?
CSS 预处理器定义了一种新的语言，其基本思想是，用一种专门的**编程语言**，为 CSS 增加了一些编程的
特性，将 CSS 作为目标生成文件，然后开发者就只要使用这种语言进行 CSS 的编码工作。转化成通俗易
懂的话来说就是“用一种专门的编程语言，进行 Web 页面样式设计，再通过编译器转化为正常的 CSS 文件，以供项目使用”。
常用的 CSS 预处理器有哪些：
- SASS：基于 Ruby，通过服务端处理，功能强大。解析效率高。需要学习 Ruby 语言，上手难度高于 LESS。
- LESS：基于 NodeJS，通过客户端处理，使用简单。功能比 SASS 简单，解析效率也低于 SASS，但
在实际开发中足够了，所以我们后台人员如果需要的话，建议使用 LESS。

### 4.行为层（JavaScript）
JavaScript 一门弱类型脚本语言，其源代码在发往客户端运行之前不需经过编译，而是将文本格式的字符代码发送给浏览器由浏览器解释运行。

Native 原生 JS 开发
原生 JS 开发，也就是让我们按照 【ECMAScript】 标准的开发方式，简称是 ES，特点是所有浏览器都
支持。ES 标准已发布如下版本：
ES3
ES4（内部，未正式发布）
ES5（全浏览器支持）
ES6（常用，当前主流版本：webpack打包成为ES5支持！）
ES7
ES8
ES9（草案阶段）
从 ES6 开始每年发布一个版本，以年份作为名称，区别就是逐步增加新特性。
### TypeScript 微软的标准
TypeScript 是一种由微软开发的自由和开源的编程语言。它是 JavaScript 的一个超集，而且本质上向这
个语言添加了可选的静态类型和基于类的面向对象编程。由安德斯·海尔斯伯格（C#、Delphi、 TypeScript 之父；.NET 创立者）主导。
### 5.JavaScript 框架
#### 1.jQuery库
大家最熟知的 JavaScript 库，优点是简化了 DOM 操作，缺点是 DOM 操作太频繁，影响前端性能；在
前端眼里使用它仅仅是为了兼容 IE6、7、8；
#### 2.Angular  
（模块化开发 ： M（model）V（view）VM（controller））
Google 收购的前端框架，由一群 Java 程序员开发，其特点是将后台的 MVC 模式搬到了前端并增加了模
块化开发的理念，与微软合作，采用 TypeScript 语法开发；对后台程序员友好，对前端程序员不太友好；最大的缺点是版本迭代不合理（如：1代 -> 2代，除了名字，基本就是两个东西；已推出了Angular6）
#### 3.React  （虚拟DOM）
Facebook 出品，一款高性能的 JS 前端框架；特点是提出了新概念 **【虚拟 DOM】** 用于减少真实 DOM
操作，在内存中模拟 DOM 操作，有效的提升了前端渲染效率；缺点是使用复杂，因为需要额外学习一
门 【JSX】 语言；
#### 4.Vue
一款渐进式 JavaScript 框架，所谓渐进式就是逐步实现新特性的意思，如实现模块化开发、路由、状态
管理等新特性。其特点是综合了 Angular（模块化） 和 React（虚拟 DOM） 的优点；
#### 5.Axios
前端通信框架；因为 Vue 的边界很明确，就是为了**处理 DOM**，所以并不具备通信能力，此时就需要额
外使用一个通信框架与服务器交互；当然也可以直接选择使用 jQuery 提供的 AJAX 通信功能；
### 6.JavaScript 构建工具
- Babel：JS 编译工具，主要用于浏览器不支持的 ES 新特性，比如用于编译 TypeScript
- WebPack：模块打包器，主要作用是打包、压缩、合并及按序加载
### 7.前端所需后端技术
前端人员为了方便开发也需要掌握一定的后端技术，但我们 Java 后台人员知道后台知识体系极其庞大复
杂，所以为了方便前端人员开发后台应用，就出现了 NodeJS 这样的技术。
NodeJS 的作者已经声称放弃 NodeJS（说是架构做的不好再加上笨重的 node_modules，可能让作者不
爽了吧），开始开发全新架构的 Deno。
既然是后台技术，那肯定也需要**框架和项目管理工具**，NodeJS 框架及项目管理工具如下：
- Express：NodeJS 框架
- Koa：Express 简化版
- NPM：项目综合管理工具，类似于 Maven
- YARN：NPM 的替代方案，类似于 Maven 和 Gradle 的关系

## 二 UI 框架
常用
- Ant-Design：阿里巴巴出品，基于 React 的 UI 框架
- ElementUI、iview、ice：饿了么出品，基于 Vue 的 UI 框架
- Bootstrap：Twitter 推出的一个用于前端开发的开源工具包
- AmazeUI：又叫“妹子 UI”，一款 HTML5 跨屏前端框架
- Layui：轻量iView

#### iView
iview 是一个强大的基于 Vue 的 UI 库，有很多实用的基础组件比 elementui 的组件更丰富，主要服务于
PC 界面的中后台产品。使用单文件的 Vue 组件化开发模式 基于 npm + webpack + babel 开发，支持
ES2015 高质量、功能丰富 友好的 API ，自由灵活地使用空间。
[官网地址] https://www.iviewui.com/
[Github] https://github.com/TalkingData/iview-weapp
[iview-admin] https://github.com/iview/iview-admin
备注：属于前端主流框架，选型时可考虑使用，主要特点是移动端支持较多
#### ElementUI
Element 是饿了么前端开源维护的 Vue UI 组件库，组件齐全，基本涵盖后台所需的所有组件，文档讲
解详细，例子也很丰富。主要用于开发 PC 端的页面，是一个质量比较高的 Vue UI 组件库。
[官网地址] http://element-cn.eleme.io/#/zh-CN
[Github] https://github.com/ElementUI/element-starter
[vue-element-admin] https://github.com/PanJiaChen/vue-element-admin
备注：属于前端主流框架，选型时可考虑使用，主要特点是桌面端支持较多
#### ICE
飞冰是阿里巴巴团队基于 React/Angular/Vue 的中后台应用解决方案，在阿里巴巴内部，已经有 270 多
个来自几乎所有 BU 的项目在使用。飞冰包含了一条从设计端到开发端的完整链路，帮助用户快速搭建
属于自己的中后台应用。
[官网地址] https://alibaba.github.io/ice
[Github] https://github.com/alibaba/ice
备注：主要组件还是以 React 为主，截止 2019 年 02 月 17 日更新博客前对 Vue 的支持还不太完善，
目前尚处于观望阶段
#### VantUI
Vant UI 是有赞前端团队基于有赞统一的规范实现的 Vue 组件库，提供了一整套 UI 基础组件和业务组
件。通过 Vant，可以快速搭建出风格统一的页面，提升开发效率。
[官网地址] https://youzan.github.io/vant/#/zh-CN/intro
[Github] https://github.com/youzan/vant
AtUI
at-ui 是一款基于 Vue 2.x 的前端 UI 组件库，主要用于快速开发 PC 网站产品。 它提供了一套 npm +
webpack + babel 前端开发工作流程，CSS 样式独立，即使采用不同的框架实现都能保持统一的 UI 风
格。
的 UI 风格。
[官网地址] https://at-ui.github.io/at-ui/#/zh
[Github] https://github.com/at-ui/at-ui
#### CubeUI
cube-ui 是滴滴团队开发的基于 Vue.js 实现的精致移动端组件库。支持按需引入和后编译，轻量灵活；
扩展性强，可以方便地基于现有组件实现二次开发。
[官网地址] https://didi.github.io/cube-ui/#/zh-CN
[Github] https://github.com/didi/cube-ui/
#### Flutter
Flutter 是谷歌的移动端 UI 框架，可在极短的时间内构建 Android 和 iOS 上高质量的原生级应用。
Flutter 可与现有代码一起工作, 它被世界各地的开发者和组织使用, 并且 Flutter 是免费和开源的。
[官网地址] https://flutter.dev/docs
[Github] https://github.com/flutter/flutter
备注：Google 出品，主要特点是快速构建原生 APP 应用程序，如做混合应用该框架为必选框架
#### Ionic
Ionic 既是一个 CSS 框架也是一个 Javascript UI 库，Ionic 是目前最有潜力的一款 HTML5 手机应用开发
框架。通过 SASS 构建应用程序，它提供了很多 UI 组件来帮助开发者开发强大的应用。它使用
JavaScript MVVM 框架和 AngularJS/Vue 来增强应用。提供数据的双向绑定，使用它成为 Web 和移动
开发者的共同选择。
[官网地址] https://ionicframework.com/
[官网文档] https://ionicframework.com/docs/
[Github] https://github.com/ionic-team/ionic
#### mpvue
mpvue 是美团开发的一个使用 Vue.js 开发小程序的前端框架，目前支持 微信小程序、百度智能小程
序，头条小程序 和 支付宝小程序。 框架基于 Vue.js，修改了的运行时框架 runtime 和代码编译器
compiler 实现，使其可运行在小程序环境中，从而为小程序开发引入了 Vue.js 开发体验。
[官网地址] http://mpvue.com/
[Github] https://github.com/Meituan-Dianping/mpvue
备注：完备的 Vue 开发体验，并且支持多平台的小程序开发，推荐使用
#### WeUI
WeUI 是一套同微信原生视觉体验一致的基础样式库，由微信官方设计团队为微信内网页和微信小程序
量身设计，令用户的使用感知更加统一。包含 button、cell、dialog、toast、article、icon 等各式元
素。
[官网地址] https://weui.io/
[Github] https://github.com/weui/weui.git
注：以上知识点已将 WebApp 开发所需技能全部梳理完毕

1.iview 是一个强大的基于 Vue 的 UI 库，有很多实用的基础组件比 elementui 的组件更丰富，主要服务于
PC 界面的中后台产品。使用单文件的 Vue 组件化开发模式 基于 npm + webpack + babel 开发，支持
ES2015 高质量、功能丰富 友好的 API ，自由灵活地使用空间。
[官网地址] https://www.iviewui.com/
[Github] https://github.com/TalkingData/iview-weapp
[iview-admin] https://github.com/iview/iview-admin级框架

## 三 前后分离的演变史
### 1.后端为主的 MVC 时代
为了降低开发的复杂度，以后端为出发点，比如：Struts、SpringMVC 等框架的使用，就是后端的 MVC时代;
**以 SpringMVC 流程为例：**
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-793ed23c4e374de589b697f9edb7f356.png)
- 1.发起请求到前端控制器( DispatcherServlet )
- 2.前端控制器请求 HandlerMapping 查找 Handler ，可以根据 xml 配置、注解进行查找
- 3.处理器映射器 HandlerMapping 向前端控制器返回 Handler
- 4.前端控制器调用处理器适配器去执行 Handler
- 5.处理器适配器去执行 Handler Handler 
- 6.执行完成给适配器返回 ModelAndView
- 7.处理器适配器向前端控制器返回 ModelAndView ， ModelAndView 是 SpringMVC 框架的一个底层对象，包括 Model 和 View
- 8.前端控制器请求视图解析器去进行视图解析，根据逻辑视图名解析成真正的视图( JSP )
- 9.视图解析器向前端控制器返回 View
- 10.前端控制器进行视图渲染，视图渲染将模型数据(在 ModelAndView 对象中)填充到 request 域
- 11.前端控制器向用户响应结果

**优点：**
MVC 是一个非常好的协作模式，能够有效降低代码的耦合度，从架构上能够让开发者明白代码应该写在
哪里。为了让 View 更纯粹，还可以使用 Thymeleaf、Freemarker 等模板引擎，使模板里无法写入 Java代码，让前后端分工更加清晰。
**缺点：**
前端开发重度依赖开发环境，开发效率低，这种架构下，前后端协作有两种模式：
- 1、第一种是前端写 DEMO，写好后，让后端去套模板。好处是 DEMO 可以本地开发，很高效。不足是
还需要后端套模板，有可能套错，套完后还需要前端确定，来回沟通调整的成本比较大；
- 2、另一种协作模式是前端负责浏览器端的所有开发和服务器端的 View 层模板开发。好处是 UI 相关的代码都是前端去写就好，后端不用太关注，不足就是前端开发重度绑定后端环境，环境成为影响前端开发效率的重要因素。
- 3.前后端职责纠缠不清：模板引擎功能强大，依旧可以通过拿到的上下文变量来实现各种业务逻辑。这样，只要前端弱势一点，往往就会被后端要求在模板层写出不少业务代码。
- 4.还有一个很大的灰色地带是Controller ，页面路由等功能本应该是前端最关注的，但却是由后端来实现。 Controller 本身与 Model 往往也会纠缠不清，看了让人咬牙的业务代码经常会出现在 Controller 层。这些问题不能全归结于程序员的素养，否则 JSP 就够了。
- 5.对前端发挥的局限性：性能优化如果只在前端做空间非常有限，于是我们经常需要后端合作；

### 2.基于 AJAX 带来的 SPA 时代
时间回到 2005 年 AJAX （Asynchronous JavaScript And XML，异步 JavaScript 和 XML，老技术新
用法） 被正式提出并开始使用 CDN 作为静态资源存储，于是出现了 JavaScript 王者归来（在这之前
JS 都是用来在网页上贴狗皮膏药广告的）的 SPA（Single Page Application）单页面应用时代。
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-be00e8c90dab40ccb8ffd34c7fdb94de.png)
- 优点：
这种模式下，前后端的分工非常清晰，前后端的关键协作点是 AJAX 接口。看起来是如此美妙，但回过
头来看看的话，这与 JSP 时代区别不大。**复杂度从服务端的 JSP **里移到了浏览器的** JavaScript**，浏览器
端变得很复杂。类似 Spring MVC，这个时代开始出现浏览器端的分层架构：
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-5c652c8b46c84ac69f25f749da62e954.png)
- 缺点：
前后端接口的约定： 如果后端的接口一塌糊涂，如果后端的业务模型不够稳定，那么前端开发会很痛苦；不少团队也有类似尝试，通过接口规则、接口平台等方式来做。有了和后端一起沉淀的 接口规则，还可以用来模拟数据，使得前后端可以在约定接口后实现高效并行开发。前端开发的复杂度控制： SPA 应用大多以功能交互型为主，JavaScript 代码过十万行很正常。大量JS 代码的组织，与 View 层的绑定等，都不是容易的事情。


## 四 前端为主的 MV* 时代
此处的 MV* 模式如下：
- MVC（同步通信为主）：Model、View、Controller
- MVP（异步通信为主）：Model、View、Presenter
- MVVM（异步通信为主）：Model、View、ViewModel
为了降低前端开发复杂度，涌现了大量的前端框架，比如： AngularJS 、 React 、 Vue.js 、 EmberJS 等，这些框架总的原则是先按类型分层，比如 Templates、Controllers、
Models，然后再在层内做切分，如下图：
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-4b2184a5292f4154aa83d746999e3e06.png)
**优点**：
- 前后端职责很清晰： 前端工作在浏览器端，后端工作在服务端。清晰的分工，可以让开发并行，测试数据的模拟不难，前端可以本地开发。后端则可以专注于业务逻辑的处理，输出 RESTful等接口。
- 前端开发的复杂度可控： 前端代码很重，但合理的分层，让前端代码能各司其职。这一块蛮有意思的，简单如模板特性的选择，就有很多很多讲究。并非越强大越好，限制什么，留下哪些自由，代码应该如何组织，所有这一切设计，得花一本书的厚度去说明。
- 部署相对独立： 可以快速改进产品体验
## 五 NodeJS 带来的全栈时代
前端为主的 MV* 模式解决了很多很多问题，但如上所述，依旧存在不少不足之处。随着 NodeJS 的兴
起，JavaScript 开始有能力运行在服务端。这意味着可以有一种新的研发模式：
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-e83ee16984214ab18b1443565c7e9795.png)
在这种研发模式下，前后端的职责很清晰。对前端来说，两个 UI 层各司其职：
- Front-end UI layer **处理浏览器层**的展现逻辑。通过 CSS 渲染样式，通过 **JavaScript 添加交互功能**，HTML 的生成也可以放在这层，具体看应用场景。
- Back-end UI layer 处理路由、模板、数据获取、Cookie 等。通过路由，前端终于可以自主把控URL Design，这样无论是单页面应用还是多页面应用，前端都可以自由调控。后端也终于可以摆脱对展现的强关注，转而可以专心于业务逻辑层的开发。
通过 Node，Web Server 层也是 JavaScript 代码，这意味着部分代码可前后复用，需要 SEO 的场景可
以在服务端同步渲染，由于异步请求太多导致的性能问题也可以通过服务端来缓解。前一种模式的不
足，通过这种模式几乎都能完美解决掉。
与 JSP 模式相比，全栈模式看起来是一种回归，也的确是一种向原始开发模式的回归，不过是一种螺旋
上升式的回归。
基于 NodeJS 的全栈模式，依旧面临很多挑战：
- 需要前端对服务端编程有更进一步的认识。比如 TCP/IP 等网络知识的掌握。
- NodeJS 层与 Java 层的高效通信。NodeJS 模式下，都在服务器端，RESTful HTTP 通信未必高效，通过 SOAP 等方式通信更高效。一切需要在验证中前行。
- 对部署、运维层面的熟练了解，需要更多知识点和实操经验。
- 大量历史遗留问题如何过渡。这可能是最大最大的阻力。

## 1.VUE
### 1.1 什么是MVVM
MVVM（Model-View-ViewModel）是一种软件设计模式，由微软WPF（用于替代WinForm，以前就是用这个技术开发桌面应用程序的）和Silverlight（类似于Java Applet，简单点说就是在浏览器上运行WPF）的架构师Ken Cooper和Ted Peters开发，是一种简化用户界面的事件驱动编程方式。由John Gossman（同样也是WPF和Sliverlight的架构师）与2005年在他的博客上发表。

- Vue只关注视图层；给用户看，刷新后台的数据；

MVVM源自于经典的MVC（Model-View-Controller）模式。MVVM的核心是ViewModel层，负责转换Model中的数据对象来让数据变得更容易管理和使用。其作用如下：

该层向上与视图层进行双向数据绑定
向下与Model层通过接口请求进行数据交互
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-f66f1fd5e6d440058907822c4dff7da7.png)
MVVM已经相当成熟了，主要运用但不仅仅在网络应用程序开发中。当下流行的MVVM框架有Vue.js，Anfular JS

### 1.2 为什么要使用MVVM
MVVM模式和MVC模式一样，主要目的是分离视图（View）和模型（Model），有几大好处

- 低耦合：视图（View）可以独立于Model变化和修改，一个ViewModel可以绑定到不同的View上，当View变化的时候Model可以不变，当Model变化的时候View也可以不变。
- 可复用：可以把一些视图逻辑放在一个ViewModel里面，让很多View重用这段视图逻辑。
- 独立开发：开发人员可以专注于业务逻辑和数据的开发（ViewMode），设计人员可以专注于页面设计。
- 可测试：界面素来是比较难以测试的，而现在测试可以针对ViewModel来写。
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-739ea0c68aa64446bebd6a0a7778debc.png)
#### （1）View

View是视图层， 也就是用户界面。前端主要由HTH L和csS来构建， 为了更方便地展现vi eu to del或者Hodel层的数据， 已经产生了各种各样的前后端模板语言， 比如FreeMarker，Thymeleaf等等， 各大MV VM框架如Vue.js.Angular JS， EJS等也都有自己用来构建用户界面的内置模板语言。
#### （2）Model

Model是指数据模型， 泛指后端进行的各种业务逻辑处理和数据操控， 主要围绕数据库系统展开。这里的难点主要在于需要和前端约定统一的接口规则

#### （3）ViewModel

ViewModel是由前端开发人员组织生成和维护的视图数据层。在这一层， 前端开发者对从后端获取的Model数据进行转换处理， 做二次封装， 以生成符合View层使用预期的视图数据模型。

#### （4）注意：
需要注意的是View Model所封装出来的数据模型包括视图的状态和行为两部分， 而Model层的数据模型是只包含状态的
比如页面的这一块展示什么，那一块展示什么这些都属于**视图状态(展示)**
页面加载进来时发生什么，点击这一块发生什么，这一块滚动时发生什么这些都属于**视图行为(交互)**
视图状态和行为都封装在了View Model里。这样的封装使得View Model可以完整地去描述View层。由于实现了双向绑定， View Model的内容会实时展现在View层， 这是激动人心的， 因为前端开发者再也不必低效又麻烦地通过操纵DOM去更新视图。
MVVM框架已经把最脏最累的一块做好了， 我们开发者只需要处理和维护View Model， 更新数据视图就会自动得到相应更新，真正实现事件驱动编程。
View层展现的不是Model层的数据， 而是ViewModel的数据， 由ViewModel负责与Model层交互， 这就完全解耦了View层和Model层， 这个解耦是至关重要的， 它是前后端分离方案实施的重要一环
### 1.3 Vue
### （1）MVVM模式的实现者

- Model：模型层， 在这里表示JavaScript对象
- View：视图层， 在这里表示DOM(HTML操作的元素)
- ViewModel：连接视图和数据的中间件， Vue.js就是MVVM中的View Model层的实现者
在MVVM架构中， 是不允许数据和视图直接通信的， 只能通过ViewModel来通信， 而View Model就是定义了一个Observer观察者

- ViewModel能够**观察到**数据的变化， 并对视图对应的内容进行更新
- ViewModel能够监听到视图的变化， 并能够通知数据发生改变
至此， 我们可以大致了解，** Vue.js就是一个MV VM的实现者， 他的核心就是实现了DOM监听与数据绑定**
###（2）为什么使用Vue.js

- 轻量级， 体积小是一个重要指标。Vue.js压缩后有只有20多kb(Angular压缩后56kb+，React压缩后44kb+)
- 移动优先。更适合移动端， 比如移动端的Touch事件
- 易上手，学习曲线平稳，文档齐全
- 吸取了Angular(模块化) 和React(虚拟DOＭ) 的长处， 并拥有自己独特的功能，如：计算属性
- 开源，社区活跃度高
### 1.4 第一个Vue程序(Hello World)
#### 1.Vue.js：我们通常使用cdn导入
```java
<script src=“https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.js”></script>
<!--或-->
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.min.js"></script>
```
#### 2.创建一个空项目，创建一个文件夹，new一个HTML文件
编写代码
```java
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>cVzhanshi</title>
</head>
<body>

<!--view层，模板-->
<div id="app">
<!--    数据绑定-->
    {{message}}
</div>

<!--1.导入Vue.js-->
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.min.js"></script>
<script type="text/javascript">
    // 创建一个Vue实例
    var vm = new Vue({
        el:"#app",
        /*Model：数据*/
        data:{
            message:"hello,vue  -----cvzhanshi!"
        }
    });
</script>
</body>
</html>
```
说明

el:"#app" -----> 绑定元素的ID
data:{message:“hello,vue —cvzhanshi!”} ----> 数据对象中有一个名为message的属性，并设置了初始值 hello,vue —cvzhanshi
{{message}} -----> 实现数据绑定功能
测试

为了能够更直观的体验Vue带来的数据绑定功能， 我们需要在浏览器测试一番， 操作流程如下：
  1、在浏览器上运行第一个Vue应用程序， 进入开发者工具
  2、在控制台输入vm.message=‘HelloWorld’， 然后回车， 你会发现浏览器中显示的内容会直接变成HelloWorld，不需要刷新页面
  此时就可以在控制台直接输入vm.message来修改值， 中间是可以省略data的， 在这个操作中， 我并没有主动操作DOM， 就让页面的内容发生了变化， 这就是借助了Vue的数据绑定功能实现的； MV VM模式中要求View Model层就是使用观察者模式来实现数据的监听与绑定， 以做到数据与视图的快速响应

**理解View Model：它可以类比成一个观察者，监测到了数据的变化，就立马更新页面与之绑定的值，无需更新页面，也无需操作DOM对象，相当于一个虚拟DOM对象**


## 2. Vue 基础语法
### 2.1 v-bind
测试代码
```java
<!DOCTYPE html>
<html lang="en" xmlns:v-bind="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="UTF-8">
    <title>cVzhanshi</title>
</head>
<body>

<div id="app">
  <span v-bind:title="message">
    鼠标悬停几秒钟查看此处动态绑定的提示信息！
  </span>

    <!--1.导入Vue.js-->
    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.min.js"></script>
    <script type="text/javascript">
        // 创建一个Vue实例
        var vm = new Vue({
            el:"#app",
            /*Model：数据*/
            data:{
                message:"hello,vue  -----cvzhanshi!"
            }
        });
    </script>
</div>
</body>
</html>

```
说明**：

看到的 v-bind attribute 被称为指令。指令带有前缀 v-，以表示它们是 Vue 提供的特殊 attribute

它们会在渲染的 DOM 上应用特殊的响应式行为
在这里，该指令的意思是：“将这个元素节点的 title attribute 和 Vue 实例的 message property 保持一致”

如果你再次打开浏览器的 JavaScript 控制台，输入 app.message = '新消息'，就会再一次看到这个绑定了 title attribute 的 HTML 已经进行了更新
### 2.2 v-if、v-else
测试代码1
- v-if
- v-else
```java
<!--View层模板-->
<div id="app">
     <h1 v-if="ok">yes</h1>
    <h1 v-else="ok">no</h1>
</div>

<!--1.导入vue.js-->
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.min.js"></script>
<script>
    var vm=new Vue({
        el:"#app",
        //model 模板
        data:{
            ok: true
        }
    });
</script>
```
测试

1.在浏览器上运行，打开控制台
2.在控制台输入vm.ok=false然后回车，你会发现浏览器中显示的内容会直接变成NO
  注：使用v-*属性绑定数据是不需要双花括号包裹的

- 测试方法二：
```java
<!DOCTYPE html>
<html lang="en" xmlns:v-bind="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="UTF-8">
    <title>cVzhanshi</title>
</head>
<body>
<!--view层，模板-->
<div id="app">
    <h1 v-if="type==='A'">A</h1>
    <h1 v-else-if="type==='B'">B</h1>
    <h1 v-else-if="type==='D'">D</h1>
    <h1 v-else>C</h1>

</div>
<!--1.导入Vue.js-->
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.min.js"></script>
<script type="text/javascript">
    var vm = new Vue({
        el:"#app",
        /*Model：数据*/
        data:{
            type: 'A'
        }
    });
</script>
</body>
</html>
```
测试

1.在浏览器上运行，打开控制台
2.在控制台输入vm.type="D"然后回车，你会发现浏览器中显示的内容会直接变成D
注：===三个等号在JS中表示绝对等于(就是数据与类型都要相等)
### 2.3 v-for
测试代码
v-for=”item in items“
```java
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>cVzhanshi</title>
</head>
<body>
<!--view层，模板-->
<div id="app">
    <li v-for="(item,index) in items">
        {{item.message}}---{{index}}
    </li>
</div>
<!--1.导入Vue.js-->
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.min.js"></script>
<script type="text/javascript">
    var vm = new Vue({
        el:"#app",
        /*Model：数据*/
        data:{
            items:[
                {message:'cvzhanshi'},
                {message:'ursula'},
                {message:'cvzhanshi-ursula'}
            ]
        }
    });
</script>
</body>
</html>
<div id="app">
    <li v-for="(item,index) in items">
        {{item.message}}---{{index}}
    </li>
</div>
```
注：items是数组，item是数组元素迭代的别名，index是迭代的序号
测试
打开控制台，在控制台输入vm.items.push({message：'vue hello'})，尝试追加一条数据，会发现页面也添加了数据
### 2.4 v-on
1、可以用 v-on 指令监听 DOM 事件，并在触发时运行一些 JavaScript 代码
```java
<!DOCTYPE html>
<html lang="en" xmlns:v-on="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="UTF-8">
    <title>cVzhanshi</title>
</head>
<body>
<!--view层，模板-->
<div id="example-1">
    <button v-on:click="counter += 1">Add 1</button>
    <p>The button above has been clicked {{ counter }} times.</p>
</div>
<!--1.导入Vue.js-->
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.min.js"></script>
<script type="text/javascript">
    var example1 = new Vue({
        el: '#example-1',
        data: {
            counter: 0
        }
    });
</script>
</body>

```
2、然而许多事件处理逻辑会更为复杂，所以直接把 JavaScript 代码写在 v-on 指令中是不可行的。因此 v-on 还可以接收一个需要调用的方法名称
```java
<!DOCTYPE html>
<html lang="en" xmlns:v-on="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="UTF-8">
    <title>cVzhanshi</title>
</head>
<body>
<!--view层，模板-->
<div id="example-2">
    <!-- `greet` 是在下面定义的方法名 -->
    <button v-on:click="greet">Greet</button>
</div>
<!--1.导入Vue.js-->
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.min.js"></script>
<script type="text/javascript">
    var example2 = new Vue({
            el: '#example-2',
            data: {
                name: 'Vue.js'
            },
            // 在 `methods` 对象中定义方法
            methods: {
                greet: function (event) {
                    // `this` 在方法里指向当前 Vue 实例
                    alert('Hello ' + this.name + '!')
                    // `event` 是原生 DOM 事件
                    if (event) {
                        alert(event.target.tagName)
                    }
                }
            }
        })
    ;
</script>
</body>
</html>

```

## 3.Vue 表单双绑&组件
### 3.1 表单数据双向绑定
数据双向绑定， 即当数据发生变化的时候， 视图也就发生变化， 当视图发生变化的时候，数据也会跟着同步变化。
注意 : 我们所说的数据双向绑定，一定是对于UI控件来说的非UI控件不会涉及到数据双向绑定。

你可以用v-model指令在表单、及元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。v-model负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理。

注意：v-model会忽略所有表单元素的value、checked、selected特性的初始值而总是将Vue实例的数据作为数据来源。你应该通过JavaScript在组件的data选项中声明初始值

v-model 在内部为不同的输入元素使用不同的 property 并抛出不同的事件：

- text 和 textarea 元素使用 value property 和 input 事件；
- checkbox 和 radio 使用 checked property 和 change 事件；
- select 字段将 value 作为 prop 并将 change 作为事件。
#### 单行文本
```java
<!DOCTYPE html>
<html lang="en" xmlns:v-on="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="UTF-8">
    <title>cVzhanshi</title>
</head>
<body>
<!--view层，模板-->
<div id="example-2">
    <input v-model="message" placeholder="edit me">
    <p>Message is: {{ message }}</p>
</div>
<!--1.导入Vue.js-->
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.min.js"></script>
<script type="text/javascript">
    var example2 = new Vue({
            el: '#example-2',
            data: {
                message: ''
            }
        });
</script>
</body>
</html>
```
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-184200f42654488f91e598c1a6328835.png)
#### 多行文本
```java
<!DOCTYPE html>
<html lang="en" xmlns:v-on="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="UTF-8">
    <title>cVzhanshi</title>
</head>
<body>
<!--view层，模板-->
<div id="example-2">
    <span>Multiline message is:</span>
    <p style="white-space: pre-line;">{{ message }}</p>
    <br>
    <textarea v-model="message" placeholder="add multiple lines"></textarea>
</div>
<!--1.导入Vue.js-->
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.min.js"></script>
<script type="text/javascript">
    var example2 = new Vue({
            el: '#example-2',
            data: {
                message: ''
            }
        });
</script>
</body>
</html>
```
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-cbd0322ec6524ff29c5f433495ef89b4.png)

注意 ：在文本区域插值 ({{text}}) 并不会生效，应用 v-model 来代替
v-model就会取出data中的值，然后绑定到标签中的value中；
#### 复选框

- 单个复选框绑定到布尔值
```java
<!--view层，模板-->
<div id="example-2">
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">{{ checked }}</label>
</div>
<!--1.导入Vue.js-->
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.min.js"></script>
<script type="text/javascript">
    var example2 = new Vue({
            el: '#example-2',
            data: {
                checked: 'true'
            }
        });
</script>

```
- 多个复选框，绑定到同一个数组
```java
<!--view层，模板-->
<div id="example-2">
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>
    <br>
    <span>Checked names: {{ checkedNames }}</span>
</div>
<!--1.导入Vue.js-->
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.min.js"></script>
<script type="text/javascript">
    var example2 = new Vue({
            el: '#example-2',
            data: {
                checkedNames: []
            }
        });
</script>

```
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-6368a7b747484d798f2b61a551077465.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-330238eb57ea4cc8adbd099549497a79.png)
#### 单选按钮
```java
<!--view层，模板-->
<div id="example-2">
    <input type="radio" id="one" value="One" v-model="picked">
    <label for="one">One</label>
    <br>
    <input type="radio" id="two" value="Two" v-model="picked">
    <label for="two">Two</label>
    <br>
    <span>Picked: {{ picked }}</span>
</div>
<!--1.导入Vue.js-->
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.min.js"></script>
<script type="text/javascript">
    var example2 = new Vue({
            el: '#example-2',
            data: {
                picked: ''
            }
        });
</script>
```
如果 v-model 表达式的初始值未能匹配任何选项，`` 元素将被渲染为“未选中”状态。在 iOS 中，这会使用户无法选择第一个选项。因为这样的情况下，iOS 不会触发 change 事件。因此，更推荐像上面这样提供一个值为空的禁用选项。
### 3.2 组件
组件是可复用的Vue实例， 说白了就是一组可以重复使用的模板， 跟JSTL的自定义标签、Thymeleal的th:fragment等框架有着异曲同工之妙，通常一个应用会以一棵嵌套的组件树的形式来组织
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-308a455eb0344cc593c9ac155799f6c5.png)
例如，你可能会有页头、侧边栏、内容区等组件，每个组件又包含了其它的像导航链接、博文之类的组件
### 1.自定义第一个组件
```java
<!--view层，模板-->
<div id="app">
    <cvzhanshi></cvzhanshi>
</div>
<!--1.导入Vue.js-->
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.min.js"></script>
<script type="text/javascript">
    Vue.component("cvzhanshi",{
       template: '<li>Hello cVzhanshi</li>'
    });
    var vm = new Vue({
            el: '#app',
            data: {
                selected: ''
            }
        });
</script>
```
说明：

Vue.component()：注册组件
cvzhanshi：自定义组件的名字
template：组件的模板
### 2.使用props属性传递参数
```java
<!--view层，模板-->
<div id="app">
    <cvzhanshi v-for="item in items" v-bind:course="item"></cvzhanshi>
</div>
<!--1.导入Vue.js-->
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.min.js"></script>
<script type="text/javascript">
    Vue.component("cvzhanshi",{
        props: ['course'],
       template: '<li>{{course}}</li>'
    });
    var vm = new Vue({
            el: '#app',
            data:{
                items:["java","Linux","前端"]
            }
        });![在这里插入图片描述](https://img-blog.csdnimg.cn/20200616222020393.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3Bhbl9oMTk5NQ==,size_16,color_FFFFFF,t_70#pic_center)

</script>

```
\说明：

v-for=“item in items”：遍历Vue实例中定义的名为items的数组，并创建同等数量的组件
v-bind:course=“item”：将遍历的item项绑定到组件中props定义名为course属性上；= 号左边的course为props定义的属性名，右边的为item in items 中遍历的item项的值
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-551762e79b5f4815bb14d75021ff1fb1.png)

## 4. Axios异步通信
### 4.1 Axios简介
Axios是一个开源的可以用在浏览器端和Node JS的异步通信框架， 她的主要作用就是实现AJAX异步通信，其功能特点如下：

- 从浏览器中创建XMLHttpRequests
- 从node.js创建http请求
- 支持Promise API[JS中链式编程]
- 拦截请求和响应
- 转换请求数据和响应数据
- 取消请求
- 自动转换JSON数据
- 客户端支持防御XSRF(跨站请求伪造)
由于Vue.js是一个视图层框架并且作者(尤雨溪)** 严格准守SoC(关注度分离原则**)所以Vue.js并不包含AJAX的通信功能， 为了解决通信问题， 作者单独开发了一个名为vue-resource的插件， 不过在进入2.0版本以后停止了对该插件的维护并推荐了Axios框架。由于jQuery操作Dom太频繁，所以少用
### 4.2 测试Axios
先准备伪数据
```java
{
  "name": "cv战士",
  "url": "https://blog.csdn.net/qq_45408390?spm=1001.2101.3001.5343",
  "page": 1,
  "isNonProfit": true,
  "address": {
    "street": "含光门",
    "city": "陕西西安",
    "country": "中国"
  },
  "links": [
    {
      "name": "bilibili",
      "url": "https://bilibili.com"
    },
    {
      "name": "cv战士",
      "url": "https://blog.csdn.net/qq_45408390?spm=1001.2101.3001.5343"
    },
    {
      "name": "百度",
      "url": "https://www.baidu.com/"
    }
  ]
}
```
测试代码:
```java
<!DOCTYPE html>
<html lang="en" xmlns:v-binf="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <!--v-cloak 解决闪烁问题-->
    <style>
        [v-cloak]{
            display: none;
        }
    </style>
</head>
<body>
<div id="vue" v-cloak>
    <div>地名：{{info.name}}</div>
    <div>地址：{{info.address.country}}--{{info.address.city}}--{{info.address.street}}</div>
    <div>链接：<a v-bind:href="info.url">{{info.url}}</a> </div>
</div>

<!--引入js文件-->
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.min.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script type="text/javascript">
    var vm = new Vue({
        el:"#vue",
        //data：属性：vm
        data(){
            return{
                info:{
                    name:null,
                    address:{
                        country:null,
                        city:null,
                        street:null
                    },
                    url:null
                }
            }
        },
        mounted(){//钩子函数
            axios
                .get('../data.json')
                .then(response=>(this.info=response.data));
        }
    });
</script>
</body>
</html>

```
说明：

- 在这里使用了v-bind将a:href的属性值与Vue实例中的数据进行绑定
- 使用axios框架的get方法请求AJAX并自动将数据封装进了Vue实例的数据对象中
- 我们在data中的数据结构必须和Ajax响应回来的数据格式匹配


##### Vue生命周期图
![20200616222020393.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/20200616222020393-54c8fb81f2c949ff8288f4ac4ee2635b.png)
## 5.Vue 计算属性、内容分发、自定义事件
### 5.1 计算属性
计算属性的重点突出在属性两个字上(属性是名词)，首先它是个属性其次这个属性有计算的能力(计算是动词)，这里的计算就是个函数：
简单点说，它就是一个能够将计算结果**缓存起来的属性**(将行为转化成了静态的属性)，仅此而已；可以想象为缓存
测试代码：
```java
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
    </head>
    <body>
        <!--view层，模板-->
        <div id="app">
            <p>currentTime1:{{currentTime1()}}</p>
            <p>currentTime2:{{currentTime2}}</p>
        </div>
        <!--1.导入Vue.js-->
        <script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.min.js"></script>
        <script type="text/javascript">
            var vm = new Vue({
                el:"#app",
                data:{
                    message:"cvzhanshi"
                },
                methods:{
                    currentTime1:function(){
                        return Date.now();//返回一个时间戳
                    }
                },
                computed:{
                    currentTime2:function(){//计算属性：methods，computed方法名不能重名，重名之后，只会调用methods的方法
                        this.message;
                        return Date.now();//返回一个时间戳
                    }
                }
            });
        </script>
    </body>
</html>

```
注意：methods和computed里的东西不能重名,重名之后，只会**调用methods的方法**

说明：

methods：定义**方法**， 调用方法使用currentTime1()， 需要带括号

computed：定义**计算属性**， 调用属性使用currentTime2， 不需要带括号：this.message是为了能够让currentTime2计算得到的数据变化而变化

如何在方法中的值发生了变化，则缓存就会刷新!可以在控制台使用vm.message=”cvzhanshi"， 改变下数据的值，再次测试观察效果!
**总结**

调用方法时，每次都需要讲行计算，既然有计算过程则必定产生**系统开销**，那如果这个结果是不经常变化的呢?此时就可以考虑将这个结果缓存起来，采用计算属性可以很方便的做到这点，计算属性的主要特性就是为了将不经常变化的计算结果进行缓存，以节约我们的系统开销；
### 5.2 内容分发(插槽)
在Vue.js中我们使用``元素作为承载分发内容的出口，可以称其为插槽，可以应用在组合组件的场景中
需求：需要把下面的内容，让标题和内容通过插槽插入内容
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-62736369a2674c358177c1517b04d376.png)
```java
<body>
<!--View层模板-->
<div id="app">
    <todo>
        <todo-titlea slot="todo-titleb"   :titleliubin="title"></todo-titlea>
        <todo-items slot="todo-items"   v-for="item in todoItems" :items="item">
            <todo-itemsjava slot="todo-itemsjava" v-for="itemjava in todojava" :javaitemc="itemjava"></todo-itemsjava>
        </todo-items>
    </todo>
</div>

<!--1.导入vue.js-->
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.min.js"></script>
<script>
    //slot 就是个插槽
    Vue.component("todo",{
        template:
            `<div>
                <slot name="todo-titleb" ></slot>
                 <ul>
                    <slot name="todo-items"></slot>
<!--                         <ul>-->
<!--                         <slot name="todo-itemsjava" ></slot>-->
<!--                         </ul>-->
                 </ul>
            <div>`
    })
    Vue.component("todo-titlea",{
        props: ["titleliubin"],
        template: '<div>{{titleliubin}}</div>'
    });
    Vue.component("todo-items",{
        props: ['items'],
        template:
                `<li>{{items}}
                        <ul>
                          <slot name="todo-itemsjava" ></slot>
                        </ul>
                 </li>`
    });
    Vue.component("todo-itemsjava",{
        props: ['javaitemc'],
        template: '<li>{{javaitemc}}</li>'
    })
    var vm=new Vue({
        el:"#app",
        //model 模板
        data:{
            title: "标题",
            todoItems: ['java','Linx',"Mysql"],
            todojava: ['数组',' 集合']
        }
    });
</script>
</body>
```
插件（表示写好的组件），绑定data数据，然后data数据传入，组件，生成完整模板，放到页面中
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-ed64f780b7ec47329b983b0fdbddd453.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-7d4851c629c740ba821b433e6bfba323.png)
在Vue.js中我们使用``元素作为承载分发内容的出口，可以称其为插槽，可以应用在组合组件的场景中
- 需求：需要把下面的内容，让标题和内容通过插槽插入内容
```java
<p>标题</p>
<ul>
    <li>abcd</li>
    <li>abcd</li>
    <li>abcd</li>
</ul>
```

- 定义一个代办事情的组件
```java

 Vue.component('todo',{
        template:'<div>\
                <div>代办事项</div>\
                <ul>\
                    <li>cvzhanshi study Java</li>\
                </ul>\
            </div>'
    });
```
- 将上面的代码留出一个插槽，即slot
```java
 Vue.component('todo',{
        template:'<div>\
                <slot"></slot>\
                <ul>\
                    <slot"></slot>\
                </ul>\
            </div>'
    });
```
- 定义一个名为todo-title的待办标题组件 和 todo-items的待办内容组件
```java
Vue.component('todo-title',{
        props:['title'],
        template:'<div>{{title}}</div>'
    });
   
//这里的index，就是数组的下标，使用for循环遍历的时候，可以循环出来！
    Vue.component("todo-items",{
        props:["item","index"],
        template:"<li>{{index+1}},{{item}}</li>"
    });



```
- slot通过name和组件绑定
```java
 Vue.component('todo',{
        template:'<div>\
                <slot name="todo-title"></slot>\
                <ul>\
                    <slot name="todo-items"></slot>\
                </ul>\
            </div>'
    });

```
- 实例化Vue并初始化数据
```java
 var vm = new Vue({
        el:"#vue",
        data:{
            todoItems:['test1','test2','test3']
        }
    });


```
- 将数据通过插槽插入预留出来的位置
```java
<todo>
        <todo-title slot="todo-title" v-bind:title="title"></todo-title>
        <todo-items slot="todo-items" v-for="item in todoItems" :item="item" ></todo-items>
    </todo>


```
说明：

 slot：是绑定组件用的

 :title --> 是v-bind:title的缩写 在定义插槽的时候，可以使用 双飘号简写（``）,不需要/ 进行换行；
- 完整代码
```java
<!DOCTYPE html>
<html lang="en" xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
    </head>
    <body>
        <!--view层，模板-->
        <div id="vue">
            <todo>
                <todo-title slot="todo-title" v-bind:title="title"></todo-title>
                <!--<todo-items slot="todo-items" v-for="{item,index} in todoItems" v-bind:item="item"></todo-items>-->
                <!--如下为简写-->
                <todo-items slot="todo-items" v-for="item in todoItems" :item="item" ></todo-items>
            </todo>
        </div>
        <!--1.导入Vue.js-->
        <script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.min.js"></script>
        <script type="text/javascript">
            Vue.component('todo',{
                template:'<div>\
<slot name="todo-title"></slot>\
<ul>\
<slot name="todo-items"></slot>\
            </ul>\
            </div>'
            });
            Vue.component('todo-title',{
                props:['title'],
                template:'<div>{{title}}</div>'
            });
            //这里的index，就是数组的下标，使用for循环遍历的时候，可以循环出来！
            Vue.component("todo-items",{
                props:["item"],
                template:"<li>{{item}}</li>"
            });
            var vm = new Vue({
                el:"#vue",
                data:{
                    title:"cvzhanshi study java",
                    todoItems:['test1','test2','test3']
                }
            });
        </script>
    </body>
</html>


```
### 5.3 自定义事件
-方式一：直接使用vm对象进行绑定
```java
    Vue.component("todo-items",{
        props:["item","index"],
        template:"<li>{{index}}-----{{item}} <button @click='remove'>删除</button></li>",
        methods:{
            remove: function (index) {
              // this.$emit('remove',index);
                vm.removeItems(this.index);
            }
        }
    });
```
通过上诉代码我们可以发现一个问题，如果删除操作要在组件中完成，那么组件如何删除Vue实例中的数据？
删除按钮是在组件中的，点击删除按钮删除对应的数据。
阅读Vue教程可知，此时就涉及到**参数传递**与**事件分发**了， Vue为我们提供了自定义事件的功能很好的帮助我们解决了这个问题； 组件中使用this.$emit(‘自定义事件名’， 参数) ，而在视图层通过自定义事件绑定Vue中的删除操作的方法
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-4e08746cb62744739ae1631b470069c0.png)

步骤：

- 在Vue实例中定义一个删除操作的方法removeItems()
```java
methods: {
		removeItems: function (index) {
		this.todoItems.splice(index,1);
	}
}
```
说明splice(index,n)方法是操作index下标开始的n个元素

- 在视图层中自定义事件并绑定Vue实例中的方法
-

```java
<div id="vue">
    <todo>
        <todo-title slot="todo-title" v-bind:title="title"></todo-title>
        <todo-items slot="todo-items" v-for="(item,index) in todoItems"
                    :item="item" :index="index" v-on:remove="removeItems(index)"></todo-items>
    </todo>
</div>
```
自定义事件为remove，通过v-on绑定removeItems方法
- 在相应的组件中绑定自定义事件
```JAVA
Vue.component("todo-items",{
    props:["item","index"],
    template:"<li>{{item}}---{{index}}<button @click='remove'>删除</button></li>",
    methods: {
        remove: function (index) {
            this.$emit('remove',index);
        }
    }
});
```
逻辑理解：
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-e590da3121714edb81ed1dac7fb4aa72.png)
### 5.4 Vue入门小结
- v-if
- v-else-if
- v-else
- v-for
- v-on绑定事件，简写   @
- v-model数据双向绑定
- v-bind 给组件绑定参数，简写   ：
组件化：

组合组件slot插槽
组件内部绑定事件需要使用到this.$emit(“事件名”,参数);
计算属性的特色，缓存计算数据
遵循SoC关注度分离原则，Vue是纯粹的视图框架，并不包含，比如Ajax之类的通信功能，为了解决通信问题，我们需要使用Axios框架做异步通信；
## 6.第一个Vue-cli项目
### 6.1 Vue-cli简介
vue-cli官方提供的一个脚手架，用于快速生成一个vue的项目模板

预先定义好的目录结构及基础代码，就好比咱们在创建Maven项目时可以选择创建一个骨架项目，这个估计项目就是脚手架，我们的开发更加的快速

项目的功能

- 统一的目录结构
- 本地调试
- 热部署
- 单元测试
- 集成打包上线
### 6.2 环境配置
#### node下载遇到的坑：
##### 1.npm有配置文件：
可以通过 npm config ls -l （来查看具体的信息）
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-bddc6d125a15471e8fb810069970f9da.png)
##### 2.npm配置文件是 .npmrc，默认在用户目录下。
如果没有找到，用命令来看：

npm config get userconfig  ## 查看配置文件路径，

##### 3.以下config命令也是很好用：

npm config ls -l  ##　查看所有配置项
npm config get cache  ## 查看缓存配置，get后面可以跟任意配置项
npm config edit  ## 直接编辑config文件，这个会打开文本
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-93623a8da9c94cf8b1b5900330b013fc.png)
##### 4.可以把node的仓库地址改到其他的盘（容易出错）
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-e704d11cc5534844af0d9944a3275a22.png)

 cache：缓存模块
global：全局安装模块
4.1修改默认配置
```java
npm config set prefix "你的node_global路径"    （全局安装模块）
npm config set cache "你的node_cache路径"		（缓存模块）
```
4.2配置环境变量
将H:\nodejs\node_modules\node_global 配置到环境变量中的Path下

到这里就算完成了，可以自行执行npm config ls查看是否配置好

- Node.js
- 下载地址： http://nodejs.cn/download/ 安装的时候一直下一步直到结束

确认是否安装成功：

在cmd中运行node -v命令，查看是否能够输出版本号
在cmd中运行npm -v命令，查看是否能够输出版本号
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-07a2087cb93f4bacb9b005d62b544f24.png)
- 安装node.js淘宝镜像加速器（cnpm）
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-4c65d182dcd048a1915af9d5688066e6.png)

```java
# -g 就是全局安装
npm install cnpm -g

# 或使用如下语句解决npm速度慢的问题，但是每次install都需要（麻烦）可以不需要下载cnpm
npm install --registry=https://registry.npm.taobao.org

```
- 安装vue-cli

官网地址：https://cli.vuejs.org/guide/installation.html
cnpm instal1 -g @vue/cli
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-c0898dfde21a4e4795e3f2072246bdbf.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-9894ee0aa9ca4c65a034daef1094de97.png)
#测试是否安装成功#查看可以基于哪些模板创建vue应用程序，通常我们选择webpack
vue list
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-dd57a3a264c243b9a8ebcdf1aab43aac.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-c4bc74ea4d464456913204647387a177.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-41cc0e1b63da41e1bbfaa66c3355efed.png)
下载的文件：
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-c9c7f743219c4fe2a55fb1d2c851c2cc.png)

### 6.3 第一个vue-cli应用程序
找到一个项目路径(空文件夹)

创建一个基于webpack模板的vue应用程序（
VUE是基于ES6的，而大部分浏览器支持ES5，用Webpack可以打包降级进行使用）
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-d343b14f966540f7ade4b9fb42bb5b95.png)
Project name：项目名称，默认回车即可
Project description：项目描述，默认回车即可
Author：项目作者，默认回车即可
Install vue-router：是否安装vue-router，选择n不安装（后期需要再手动添加）
Use ESLint to lint your code:是否使用ESLint做代码检查，选择n不安装（后期需要再手动添加)
Set up unit tests:单元测试相关，选择n不安装（后期需要再手动添加）
Setupe2etests with Nightwatch：单元测试相关，选择n不安装（后期需要再手动添加）
Should we run npm install for you after the,project has been created:创建完成后直接初始化，选择n，我们手动执行；运行结果https://blog.csdn.net/qq_45408390/article/details/118151297
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-5e002c3efbc345e090acf2ff1c165792.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-644d42e96b1745d7a352e361dfc59f37.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-c28f3dfabb2243de87a02dcff9c5e789.png)
npm install 按照package.json 下载依赖；

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-0bf153c093d74c00b788acecb79334ba.png)

- 写好组件；
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-93a63f3eab184aa7a889cdff0f72f7c0.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-6ee8503a9e8048938a39d380b83a9a64.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-e41aa5ddcddd4fc6b51d2bf6e55bc40a.png)
- 程序的包结构
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-e1bac33008e14721ac6bc0a0ba36dc10.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-ff666b52078b4a0ba8bffb47cc8e14fb.png)
相当于node.js 服务器运行的页面；
## 7.webpack的使用
### 7.1 安装Webpack
```java
npm install webpack -g
npm install webpack-cli -g
测试：
webpack -v
webpack-cli -v
```
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-75f2ae0e74514580a1a17a6211dd9fe7.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-27c21b7a1b4d4dfcb3fe067cedcfbb0a.png)
### 7.2 相关配置：
创建webpack.config.js配置文件
entry：入口文件， 指定Web Pack用哪个文件作为项目的入口
output：输出， 指定WebPack把处理完成的文件放置到指定路径
module：模块， 用于处理各种类型的文件
plugins：插件， 如：热更新、代码重用等
resolve：设置路径指向
watch：监听， 用于设置文件改动后直接打包
### 7.3 使用webpack
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-02264baa5a9845029a64cc7c7d4cbe98.png)
- 创建项目
在workspace中创建文件夹webpack-study，然后用IDEA打开
- 创建一个名为modules的目录，用于放置JS模块等资源文件
- 在modules下创建模块文件hello.js
```java
//暴露一个方法：sayHi
exports.sayHi = function(){
    document.write("<div>Hello Webpack</div>");
}
```
- 在modules下创建一个名为main.js的入口文件main.js，用于打包时设置entry属性
```java
//require 导入一个模块，就可以调用这个模块中的方法了
var hello = require("./hello");
hello.sayHi();
```
- 在项目目录下创建webpack.config.js配置文件，使用webpack命令打包
```java
module.exports = {
    entry:"./modules/main.js",(程序的入口)
    output:{
        filename:"./js/bundle.js"（最后生成个啥）
    }
}
```
说明：打包如果失败，就用管理员权限运行webpack
- 在项目目录下创建HTML页面，如index.html，导入webpack打包后的JS文件
```java
<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>狂神说Java</title>
    </head>
    <body>
        <script src="dist/js/bundle.js"></script>
    </body>
</html>

# 参数--watch 用于监听变化,如果要打包的东西有变化，就重新打包
webpack --watch 
```
## 8.Vue vue-router路由
### 8.1 安装
基于第一个vue-cli进行测试学习； 先查看node modules中是否存在vue-router, vue-router是一个插件包， 所以我们还是需要用npm/cnpm来进行安装的
npm view vuex versions --json  (查看历史版本)
cnpm install vue-router@3.3.0 --save-dev  （安装router的方式）
### 8.2 测试路由
删除第一个vue-cli项目中的没用的东西
components 目录下存放我们自己编写的组件
定义几个自己的组件 Content.vue 、Main.vue、cVzhanshi.vue
- Content.vue
```java
<template>
	<div>
		<h1>内容页</h1>
	</div>
</template>

<script>
	export default {
		name:"Content"
	}
</script>
```
- Main.vue
```java
<template>
<div>
    <h1>首页</h1>
    </div>
</template>

<script>
    export default {
        name:"Main"
    }
</script>
```
- 安装路由，在src目录下，新建一个文件夹：router，专门存放路由，配置路由index.js
```java
import Vue from'vue'
//导入路由插件
import Router from 'vue-router'
//导入上面定义的组件
import Content from '../components/Content'
import Main from '../components/Main'
import cVzhanshi from "../components/cVzhanshi";
//安装路由
Vue.use(Router) ;
//配置路由
export default new Router({
  routes:[
    {
      //路由路径
      path:'/content',
      //路由名称
      name:'content',
      //跳转到组件
      component:Content
    },{
      //路由路径
      path:'/main',
      //路由名称
      name:'main',
      //跳转到组件
      component:Main
    }
    ,{
      //路由路径
      path:'/cvzhanshi',
      //路由名称
      name:'main',
      //跳转到组件
      component:cVzhanshi
    }
  ]
});
```
- 在main.js中配置路由
```java
import Vue from 'vue'
import App from './App'

import router from './router'//自动扫描里面的路由配置
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
```
- 在App.vue中使用路由
```java
<template>
  <div id="app">
    <!--
          router-link：默认会被渲染成一个<a>标签，to属性为指定链接
          router-view：用于渲染路由匹配到的组件
        -->
    <h1>cVzhanshi</h1>
    <router-link to="/main">首页</router-link>
    <router-link to="/content">内容</router-link>
    <router-link to="/cvzhanshi">cVzhanshi</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
```
- 运行npm run dev,然后浏览器访问localhost:8080
流程：
1.首先导入router的依赖
cnpm install vue-router@3.3.0 --save-dev
2.创建router对象和组件进行绑定
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-a8c3f58be8ab40219a098afa33c1df99.png)
3.App.vue
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-1047d0c5f9a84fe9b066c9278c2204b4.png)
4.main.js
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-09b0673092ef478c8f68446a9775221a.png)
5.总结
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-5ee34a77c3f74649b1d995af83f77557.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-00ef3d25b97944aebd177a6a9b266614.png)
总结： app.vue是一个总的模板，用router-link来调用其他的组件，渲染到<router-view></router-view>中，main.js相当于之前的js，和前端页面进行绑定，把app这个总组件渲染进去显示；

## 9.实战小demo
### 9.1 创建工程
- 创建一个名为hello-vue的工程
vue init webpack 项目名称
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-69c46ce8d0884434a64473d455ae842e.png)
- 安装依赖， vue-router、element-ui、sass-loader和node-sass四个插件
```java
#进入工程目录
cd hello-vue
#安装vue-routern 
cnpm install vue-router@3.3.0 --save-dev
#安装element-ui 
npm i element-ui -S
#安装依赖 
npm install
# 安装SASS加载器 用于css样式引入
cnpm install sass-loader node-sass --save-dev
#启功测试
npm run dev
```
- npm命令说明

npm install moduleName：安装模块到项目目录下

npm install -g moduleName：-g的意思是将模块安装到全局，具体安装到磁盘哪个位置要看npm

config prefix的位置

npm install -save moduleName：–save的意思是将模块安装到项目目录下， 并在package文件的dependencies节点写入依赖，-S为该命令的缩写

npm install -save-dev moduleName:–save-dev的意思是将模块安装到项目目录下，并在package文件的devDependencies节点写入依赖，-D为该命令的缩写
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-4c5d526523be4eb38d97e12392ea64ce.png)
### 9.2 创建登录页面
先把删除没用的文件
项目结构如下
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-5ece4bc4482e4c7085d70eb4ba475c90.png)
- 1.在views目录下创建首页视图Main.vue组件  (首页)
```java
<template>
<div>首页</div>
</template>
<script>
    export default {
        name:"Main"
    }
</script>
<style scoped>
</style>
```
- 在views目录下创建登录页面视图Login.vue组件（登陆页面）
```java
<template>
  <div>
<!--ele表单-->
    <el-form ref="loginForm" :model="form" :rules="rules" label-width="80px" class="login-box">
      <h3 class="login-title">欢迎登录</h3>
      <el-form-item label="账号" prop="username">
        <el-input type="text" placeholder="请输入账号" v-model="form.username"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="form.password"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" v-on:click="onsubmit('loginForm')">登录</el-button>
      </el-form-item>
    </el-form>

    <el-dialog title="温馨提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <span>请输入账号和密码</span>
      <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false">确定</el-button>
        </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return{
      form:{
        username:'',
        password:''
      },
      //表单验证，需要在 el-form-item 元素中增加prop属性
      rules:{
        username:[
          {required:true,message:"账号不可为空",trigger:"blur"}
        ],
        password:[
          {required:true,message:"密码不可为空",tigger:"blur"}
        ]
      },
      //对话框显示和隐藏
      dialogVisible:false
    }
  },
  methods:{
    onsubmit(formName){
      //为表单绑定验证功能
      this.$refs[formName].validate((valid)=>{
        if(valid){
          //使用vue-router路由到指定界面，该方式称为编程式导航
          this.$router.push('/main/'+this.form.username);
        }else{
          this.dialogVisible=true;
          return false;
        }
      });
    },
    handleClose: function () {
      console.log("Handle Close，空函数");
    }
  }
}
</script>

<style scoped>
.login-box{
  border:1px solid #DCDFE6;
  width: 350px;
  margin:180px auto;
  padding: 35px 35px 15px 35px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  box-shadow: 0 0 25px #909399;
}
.login-title{
  text-align:center;
  margin: 0 auto 40px auto;
  color: #303133;
}
</style>
```
- 在router目录下创建一个名为index.js的vue-router路由配置文件  （路由文件）
···java
import Vue from "vue";
import Router from 'vue-router'
import UserList from '../views/user/List'
import UserProfile from "../views/user/Profile";
import NotFound from "../views/NotFound";
//显示的声明
Vue.use(Router);
//引入组件

import Main from '../views/Main'
import Login from '../views/Login'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/main/:name',
      component: Main,//嵌套路由
      props: true,
      children: [
        {
          path: '/user/profile/:iwd',
          name: 'Userprofile',
          component: UserProfile,
          props: true
        },
        {
          path: '/user/list',
          component: UserList
        },{
        path: '/goHome',
          redirect: '/main'
        }
      ]
    },
    {
      path: '/login',
      component: Login
    },{
      path: '*',
      component: NotFound
    }
  ]
});
```
- 编写 APP.vue（总的页面展示框架)
```java
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>


    export default {
        name: 'App',

    }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
```
- 在main.js中配置路由(入口文件，vue对象)
```java
import Vue from 'vue'
import App from './App'
import router from "./router";

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//import axios from '_vue-axios@3.4.1@vue-axios';
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

//Vue.use(router);
Vue.use(ElementUI)
new Vue({
  el: '#app',
  router,
  render: h=>h(App)//ElementUI
})
```
- 测试npm run dev

- 总结： 只要访问请求，都会去，路由文件中去找，对应的组件，然后渲染到App.vue文件中；
### 9.3 路由嵌套
嵌套路由又称子路由，在实际应用中，通常由多层嵌套的组件组合而成
路由下面的路由，
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-611d7dc01695473ba94f8546c7dce3b2.png)
- 创建用户信息组件，在 views/user 目录下创建一个名为 Profile.vue 的视图组件
```java
<template>
  <h1>个人信息</h1>
</template>
<script>
  export default {
    name: "UserProfile"
  }
</script>
<style scoped>
</style>
```
- 在用户列表组件在 views/user 目录下创建一个名为 List.vue 的视图组件
```java
<template>
  <h1>用户列表</h1>
</template>

<script>
export default {
  name: "List"
}
</script>

<style scoped>

</style>
```
- 修改首页视图，我们修改 Main.vue 视图组件，此处使用了 ElementUI 布局容器组件(直接使用饿了吗写好的组件)
需要先导入依赖：只有引入了，组件库才可以使用下面人家定义好的组件；
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-d91c3e6bfaf748ac921edd4f362f1e19.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-a60cd88658ca4361acf34af88db01f51.png)
```java
<template>
    <div>
      <el-container>
        <el-aside width="200px">
          <el-menu :default-openeds="['1']">
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-caret-right"></i>用户管理</template>
              <el-menu-item-group>
                <el-menu-item index="1-1">
                <!--插入的地方-->
                  <router-link to="/user/profile">个人信息</router-link>
                </el-menu-item>
                <el-menu-item index="1-2">
                <!--插入的地方-->
                  <router-link to="/user/list">用户列表</router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title"><i class="el-icon-caret-right"></i>内容管理</template>
              <el-menu-item-group>
                <el-menu-item index="2-1">分类管理</el-menu-item>
                <el-menu-item index="2-2">内容列表</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>

        <el-container>
          <el-header style="text-align: right; font-size: 12px">
            <el-dropdown>
              <i class="el-icon-setting" style="margin-right: 15px"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人信息</el-dropdown-item>
                <el-dropdown-item>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-header>
          <el-main>
          <!--在这里展示视图-->
            <router-view />
          </el-main>
        </el-container>
      </el-container>
    </div>
</template>
<script>
    export default {
        name: "Main"
    }
</script>
<style scoped lang="scss">
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  .el-aside {
    color: #333;
  }
</style>
```

- 添加了组件，去router修改配置文件
```java
//导入vue
import Vue from 'vue';
import VueRouter from 'vue-router';
//导入组件
import Main from "../views/Main";
import Login from "../views/Login";
//导入子模块
import UserList from "../views/user/List";
import UserProfile from "../views/user/Profile";

//使用
Vue.use(VueRouter);
//导出
export default new VueRouter({
  routes: [
    {
      //登录页
      path: '/main',
      component: Main,
      //  写入子模块
      children: [
        {
          path: '/user/profile',
          component: UserProfile,
        }, {
          path: '/user/list',
          component: UserList,
        },
      ]
    },
    //首页
    {
      path: '/login',
      component: Login

    },
  ]
}
```
- 运行测试
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-f433aa44dc9244e39ffb8cbc0563c716.png)
### 9.4 参数传递和重定向
#### 9.4.1 参数传递
##### 方法一
- 修改路由配置, 主要是router下的index.js中的 path 属性中增加了 :id 这样的占位符
```java
{
	path: '/user/profile/:id', 
	name:'UserProfile', 
	component: UserProfile
}
```
- 视图层传递参数 (在识别组件路径的时候必须使用名字来定义)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-585703baf72841dda6931a6396c09f92.png)
说明： 此时我们在Main.vue中的route-link位置处 to 改为了 :to，是为了将这一属性当成对象使用，注意 router-link 中的 name 属性名称 一定要和 路由中的 name 属性名称 匹配，因为这样 Vue 才能找到对应的路由路径
- 接收参数
```java
<template>
  <!--  所有的元素必须在根节点下-->
  <div>
    <h1>个人信息</h1>
    {{$route.params.id}}
  </div>
</template>
```
说明：所有的元素必须在根节点下面，否则会报错
##### 方法二 使用props 减少耦合
- 修改路由配置 , 主要在router下的index.js中的路由属性中增加了 props: true 属性(允许这个路由路径带这参数)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-c78d963d1aa14e578638f715e1a8b69f.png)

- 传递参数和之前一样
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-65a121706d1f44018f3919a62f647333.png)

- 在Profile.vue接收参数为目标组件增加 props 属性
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-6b48d720b7fb4ca7bb2ff5ed084fe1e9.png)
```java
<template>
  <div>
    个人信息
    {{ id }}
  </div>
</template>
<script>
    export default {
      props: ['id'],
      name: "UserProfile"
    }
</script>
<style scoped>
</style>
```
#### 9.4.2 重定向
Vue 中的重定向是作用在路径不同但组件相同的情况
- 在router/index.js配置重定向路径
```java
{
  path: '/main',
  name: 'Main',
  component: Main
},
{
  path: '/goHome',
  redirect: '/main'
}
```
- 视图增加
```java
<el-menu-item index="1-3">
    <!--插入的地方-->
    <router-link to="/goHome">返回首页</router-link>
</el-menu-item>
```
### 9.5 路由模式、404和路由钩子
#### 9.5.1 路由模式
路由模式有两种

- hash：路径带 # 符号，如 http://localhost/#/login
- history：路径不带 # 符号，如 http://localhost/login
修改路由配置
```java
export default new VueRouter({
  mode:'history',
  routes: []
  )}
```
在路由的配置中修改
#### 9.5.2 404页面
创建一个NotFound.vue视图
```java
<template>
  <div>
    <h1>404,你的页面走丢了</h1>
  </div>
</template>
<script>
    export default {
        name: "NotFound"
    }
</script>
<style scoped>
</style>
```
修改路由配置index.js（配置所有请求都去错误页面)
```java
import NotFound from '../views/NotFound'
{
   path: '*',
   component: NotFound
}
```
#### 9.5.3 路由钩子
除了之前的钩子函数还存在两个钩子函数

beforeRouteEnter：在进入路由前执行
beforeRouteLeave：在离开路由前执行

在 Profile.vue 使用
```java
<script>
    export default {
        name: "UserProfile",
        beforeRouteEnter: (to, from, next) => {
            console.log("准备进入个人信息页");
            next();
        },
        beforeRouteLeave: (to, from, next) => {
            console.log("准备离开个人信息页");
            next();
        }
    }
</script>
```
参数说明：

to：路由将要跳转的路径信息

from：路径跳转前的路径信息
next：路由的控制参数
next() 跳入下一个页面
next(’/path’) 改变路由的跳转方向，使其跳到另一个路由
next(false) 返回原来的页面
next((vm)=>{}) 仅在 beforeRouteEnter 中可用，vm 是组件实例

- 在钩子函数中进行异步请求
安装Axios
cnpm install --save vue-axios
- main.js引用 Axios
```java
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

```
- 准备数据
```json
{
  "name": "cv战士",
  "url": "https://blog.csdn.net/qq_45408390?spm=1001.2101.3001.5343",
  "page": 1,
  "isNonProfit": true,
  "address": {
    "street": "含光门",
    "city": "陕西西安",
    "country": "中国"
  },
  "links": [
    {
      "name": "bilibili",
      "url": "https://bilibili.com"
    },
    {
      "name": "cv战士",
      "url": "https://blog.csdn.net/qq_45408390?spm=1001.2101.3001.5343"
    },
    {
      "name": "百度",
      "url": "https://www.baidu.com/"
    }
  ]
}
```
说明： 只有我们的 static 目录下的文件是可以被访问到的，所以我们就把静态文件放入该目录下
- 在 beforeRouteEnter 中进行异步请求
```java
<script>
    export default {
        name: "UserProfile",
        beforeRouteEnter: (to, from, next) => {
            console.log("准备进入个人信息页");
            next(vm => {
                //进入路由之前执行getData方法
                vm.getData()
            });
        },
        beforeRouteLeave: (to, from, next) => {
            console.log("准备离开个人信息页");
            next();
        },
        //axios
        methods: {
            getData: function () {
                this.axios({
                    method: 'get',
                    url: 'http://localhost:8080/static/mock/data.json'
                }).then(function (response) {
                    console.log(response)
                })
            }
        }
    }
</script>

```
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-c7ce5ab789c6433d80e81ddde8dd1eca.png)



![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-6ef5c142b7214ab3b8cfb9af286ed505.png)