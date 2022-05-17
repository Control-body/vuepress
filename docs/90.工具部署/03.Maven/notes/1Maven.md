---
title: Maven
---

导言：生产环境下开发不再是一个项目一个工程，而是每一个模块创建一个工程，而多个模块整合在一起就需要 
使用到像 Maven 这样的构建工具。

## Why? 
### 1.1 真的需要吗？ 
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-58054a814a864678b368815637c4924a.png)
Maven 是干什么用的？这是很多同学在刚开始接触 Maven 时最大的问题。之所以会提出这个问题， 
是因为即使不使用 Maven 我们仍然可以进行 B/S 结构项目的开发。从表述层、业务逻辑层到持久化层 
再到数据库都有成熟的解决方案——不使用 Maven 我们一样可以开发项目啊？ 

这里给大家纠正一个误区，Maven 并不是直接用来**辅助编码的**，它战斗的岗位并不是以上各层。所 
以我们有必要通过企业开发中的**实际需求**来看一看哪些方面是我们现有技术的不足。
### 1.2 究竟为什么？ 
为什么要使用 Maven？它能帮助我们解决什么问题？ 
#### ①添加第三方 jar 包 
在今天的 JavaEE 开发领域，有大量的第三方框架和工具可以供我们使用。要使用这些 jar 包最简单 
的方法就是复制粘贴到 WEB-INF/lib 目录下。但是这会导致每次创建一个新的工程就需要将 jar 包重复复 
制到 lib 目录下，从而造成工作区中存在大量重复的文件，让我们的工程显得很臃肿。 
而使用 Maven 后每个 jar 包本身只在本地仓库中保存一份，需要 jar 包的工程只需要以坐标的方式 
简单的引用一下就可以了。不仅极大的节约了存储空间，让项目更轻巧，更避免了重复文件太多而造成 
的混乱。 
#### ②jar 包之间的依赖关系
jar 包往往不是孤立存在的，很多 jar 包都需要在其他 jar 包的支持下才能够正常工作，我们称之为 
jar 包之间的依赖关系。最典型的例子是：commons-fileupload-1.3.jar 依赖于 commons-io-2.0.1.jar，如果 
没有 IO 包，FileUpload 包就不能正常工作。 
那么问题来了，你知道你所使用的所有** jar 包的依赖关系**吗？当你拿到一个新的从未使用过的 jar 
包，你如何得知他需要哪些 jar 包的支持呢？如果不了解这个情况，导入的 jar 包不够，那么现有的程 
序将不能正常工作。再进一步，当你的项目中需要用到上百个 jar 包时，你还会人为的，手工的逐一确 
认它们依赖的其他 jar 包吗？这简直是不可想象的。 
而引入 Maven 后，Maven 就可以替我们自动的将当前 jar 包所依赖的其他所有 jar 包全部导入进来， 
无需人工参与，节约了我们大量的时间和精力。用实际例子来说明就是：通过 Maven 导入 
commons-fileupload-1.3.jar 后，commons-io-2.0.1.jar 会被自动导入，程序员不必了解这个依赖关系。 
下图是 Spring 所需 jar 包的部分依赖关系
#### ③获取第三方 jar 包 
JavaEE 开发中需要使用到的 jar 包种类繁多，几乎每个 jar 包在其本身的官网上的获取方式都不尽相 
同。为了查找一个 jar 包找遍互联网，身心俱疲，没有经历过的人或许体会不到这种折磨。不仅如此， 
费劲心血找的 jar 包里有的时候并没有你需要的那个类，又或者又同名的类没有你要的方法——以不规 
范的方式获取的 jar 包也往往是不规范的。 
使用 Maven 我们可以享受到一个完全统一规范的 jar 包管理体系。你只需要在你的项目中以坐标的 
方式依赖一个 jar 包，Maven 就会自动从中央仓库进行下载，并同时下载这个 jar 包所依赖的其他 jar 包
——规范、完整、准确！一次性解决所有问题！ 
Tips：在这里我们顺便说一下，统一的规范几乎可以说成是程序员的最高信仰。如果没有统一的规 
范，就意味着每个具体的技术都各自为政，需要以诸多不同的特殊的方式加入到项目中；好不容易加入 
进来还会和其他技术格格不入，最终受苦的是我们。而任何一个领域的统一规范都能够极大的降低程序 
员的工作难度，减少工作量。例如：USB 接口可以外接各种设备，如果每个设备都有自己独特的接口， 
那么不仅制造商需要维护各个接口的设计方案，使用者也需要详细了解每个设备对应的接口，无疑是非 
常繁琐的。 
#### ④将项目拆分成多个工程模块 
随着 JavaEE 项目的规模越来越庞大，开发团队的规模也与日俱增。一个项目上千人的团队持续开 
发很多年对于 JavaEE 项目来说再正常不过。那么我们想象一下：几百上千的人开发的项目是同一个 Web 
工程。那么架构师、项目经理该如何划分项目的模块、如何分工呢？这么大的项目已经不可能通过 package 结构来划分模块，必须将项目拆分成多个工程协同开发。多个模块工程中有的是 Java 工程，有的是 Web 工程。 
那么工程拆分后又如何进行互相调用和访问呢？这就需要用到 Maven 的依赖管理机制。大家请看 我们的 Survey 调查项目拆分的情况：
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-1b1f7a2b0d254daaa003cc1241a84f6f.png)
## What? 
### 2.1 Maven 简介 
Maven 是 Apache 软件基金会组织维护的一款自动化构建工具，专注服务于 Java 平台的项目构建和 
依赖管理。Maven 这个单词的本意是：专家，内行。读音是['meɪv(ə)n]或['mevn]
2.2 什么是构建 
构建并不是创建，创建一个工程并不等于构建一个项目。要了解构建的含义我们应该由浅入深的从 
以下三个层面来看：
①纯 Java 代码 
大家都知道，我们 Java 是一门编译型语言，.java 扩展名的源文件需要编译成.class 扩展名的字节码 
文件才能够执行。所以编写任何 Java 代码想要执行的话就必须经过编译得到对应的.class 文件。 
②Web 工程 
当我们需要通过浏览器访问 Java 程序时就必须将包含 Java 程序的 Web 工程编译的结果“拿”到服务 
器上的指定目录下，并启动服务器才行。这个“拿”的过程我们叫部署。 
我们可以将未编译的 Web 工程比喻为一只生的鸡，编译好的 Web 工程是一只煮熟的鸡，编译部署 
的过程就是将鸡炖熟。 
Web 工程和其编译结果的目录结构对比见下图：

③实际项目 
在实际项目中整合第三方框架，Web 工程中除了 Java 程序和 JSP 页面、图片等静态资源之外，还 
包括第三方框架的 jar 包以及各种各样的配置文件。所有这些资源都必须按照正确的目录结构部署到服 
务器上，项目才可以运行。 
所以综上所述：构建就是以我们编写的 Java 代码、框架配置文件、国际化等其他资源文件、JSP 页 
面和图片等静态资源作为“原材料”，去“生产”出一个可以运行的项目的过程。 
那么项目构建的全过程中都包含哪些环节呢？
#### 2.3 构建过程的几个主要环节 
①清理：删除以前的编译结果，为重新编译做好准备。 
②编译：将 Java 源程序编译为字节码文件。 
③测试：针对项目中的关键点进行测试，确保项目在迭代开发过程中关键点的正确性。 
④报告：在每一次测试后以标准的格式	记录和展示测试结果。 
⑤打包：将一个包含诸多文件的工程封装为一个压缩文件用于安装或部署。Java 工程对应 jar 包（SpringBoot也是jar包），Web 工程对应 war 包。 
⑥安装：在 Maven 环境下特指将打包的结果——jar 包或 war 包安装到本地仓库中。 
⑦部署：将打包的结果部署到远程仓库或将 war 包部署到服务器上运行。 
#### 2.4 自动化构建 
其实上述环节我们在 Eclipse 中都可以找到对应的操作，只是不太标准。那么既然 IDE 已经可以进 
行构建了我们为什么还要使用 Maven 这样的构建工具呢？我们来看一个小故事：
      这是阳光明媚的一天。托马斯向往常一样早早的来到了公司，冲好一杯咖啡，进入了自己的邮箱——很 
不幸，QA 小组发来了一封邮件，报告了他昨天提交的模块的测试结果——有 BUG。“好吧，反正也不是第一 次”，托马斯摇摇头，进入 IDE，运行自己的程序，编译、打包、部署到服务器上，然后按照邮件中的操作 路径进行测试。“嗯，没错，这个地方确实有问题”，托马斯说道。于是托马斯开始尝试修复这个 BUG当他 差不多有眉目的时候已经到了午饭时间。 
下午继续工作。BUG 很快被修正了，接着托马斯对模块重新进行了**编译、打包、部署，测试之后确认没** 
有问题了，回复了 QA 小组的邮件。 
一天就这样过去了，明媚的阳光化作了美丽的晚霞，托马斯却觉得生活并不像晚霞那样美好啊。

#### 安装 Maven 
1. 检查javaHome 的是否配置 （**maven是 java写的需要虚拟机环境**）
2. 解压 maven 的核心压缩包 放在一个文件中 （无中文 和  空格）
3. 配置 maven 相关的环境变量 Manven_Home 和 path
4. mvn - v 查看版本
2.5 Maven 核心概念 
Maven 能够实现自动化构建是和它的内部原理分不开的，这里我们从 Maven 的九个核心概念入手， 
看看 Maven 是如何实现自动化构建的 
①POM 
②约定的目录结构 
③坐标 
④依赖管理 
⑤仓库管理 
⑥生命周期 
⑦插件和目标 
⑧继承 
⑨聚合
## How? 
Maven 的核心程序中仅仅定义了**抽象的生命周期**，而具体的操作则是由 Maven 的插件来完成的。可是 
Maven 的插件并不包含在 Maven 的核心程序中，在首次使用时需要联网下载。 
下载得到的插件会被保存到本地仓库中。本地仓库默认的位置是：~\.m2\repository。 （就是后面我们自己换过的地址）
如果不能联网可以使用我们提供的 RepMaven.zip 解压得到。具体操作参见“Maven 操作指南.txt”
### 约定的目录结构 
约定的目录结构对于 Maven 实现自动化构建而言是必不可少的一环，就拿自动编译来说，Maven 必须 
能找到** Java 源文件**，下一步才能编译，而编译之后也必须有一个准确的位置保持编译得到的字节码文件。 
我们在开发中如果需要让第三方工具或框架知道我们自己创建的资源在哪，那么基本上就是两种方式： 
- ①通过配置的形式明确告诉它 
- ②基于第三方工具或框架的约定  （这里maven就是按照规定来写）

Maven 对工程目录结构的要求就属于后面的一种
为什么 需要按这个来 写文件呢 ？（Maven想自动构建就按照maven的规矩）
现在 JavaEE 开发领域普遍认同一个观点：约定（架构）>配置（配置）>编码（）。意思就是能用配置解决的问题就不编码， 
能基于约定的就不进行配置。而 Maven 正是因为指定了特定文件保存的目录才能够对我们的 Java 工程进行 自动化构建
#### 关于联网的问题：
1. maven 的核心工程 仅仅 定义抽象的声明周期 具体的 工作 必须由 特定的插件来完成
2. 当我们执行 **插件**的时候 maven核心程序 先会到 本地仓库 中查找
3. 如果没有就会 联网进行下载；
如何修改 maven的文件库
maven的解压目录 conf\setting.xml 
在这个文件中 找到localrepository 标签 
将localrepository 标签 修改到我们新建的 maven新的仓库的地址；
### POM 
Project Object Model：项目对象模型。将 Java 工程的相关信息封装为对象作为便于操作和管理的模型。 
Maven 工程的核心配置。可以说学习 Maven 就是学习 pom.xml 文件中的配置。
坐标 
#### 6.1 几何中的坐标 
[1]在一个平面中使用 x、y 两个向量可以唯一的确定平面中的一个点。 
[2]在空间中使用 x、y、z 三个向量可以唯一的确定空间中的一个点。 
#### 6.2 Maven 的坐标 
使用如下三个向量在 Maven 的仓库中唯一的确定一个 Maven 工程。 
[1]groupid：公司或组织的域名倒序+当前项目名称 
[2]artifactId：当前项目的**模块**名称 
[3]version：当前模块的版本
```pom
<groupId>com.atguigu.maven</groupId>  当前项目名称
<artifactId>Hello</artifactId> 模块的名称
<version>0.0.1-SNAPSHOT</version> 版本

```

#### 6.3 如何通过坐标到仓库中查找 jar 包？ 
[1]将 gav 三个向量连起来 
com.atguigu.maven+Hello+0.0.1-SNAPSHOT 
[2]**以连起来的字符串作为目录结构到仓库中查找 **
com/atguigu/maven/Hello/0.0.1-SNAPSHOT/Hello-0.0.1-SNAPSHOT.jar
※注意：我们自己的 Maven 工程必须**执行安装操作**才会进入仓库。安装的命令是：mvn install
### 依赖 
Maven 中最关键的部分，我们使用 Maven 最主要的就是使用它的依赖管理功能。要理解和掌握 Maven 
的依赖管理，我们只需要解决一下几个问题： 
#### ①依赖的目的是什么 
当 A jar 包用到了 B jar 包中的某些类时，A 就对 B 产生了依赖，这是概念上的描述。那么如何在项目 
中以依赖的方式引入一个我们需要的 jar 包呢？ 
答案非常简单，就是使用 dependency 标签指定被依赖 jar 包的坐标就可以了。（说的是这个依赖是用在哪里  如果 是compile那就是全部都可以用 到那时 junite就是只提供给 测试是使用）
```java
<dependency>
<groupId>com.atguigu.maven</groupId> <artifactId>Hello</artifactId> <version>0.0.1-SNAPSHOT</version> 
<scope>compile</scope>
</dependency>

```

#### ②依赖的范围 
大家注意到上面的依赖信息中除了目标 jar 包的坐标还有一个 **scope** 设置，这是依赖的范围。依赖的范 
围有几个可选值，我们用得到的是：**compile、test、provided** 三个。
##### [1]从项目结构角度理解 
compile(都可以访问到) 和 test（只能在test的仓库中是使用） 的区别
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-3ee6b8483a6048459d5044a737e1e428.png)
结合具体例子：对于 HelloFriend 来说，Hello 就是服务于主程序的，junit 是服务于测试程序的。 
HelloFriend 主程序需要 Hello 是非常明显的，测试程序由于要调用主程序所以也需要 Hello，所以 
- compile 范围依赖对主程序和测试程序都应该有效。 
HelloFriend 的测试程序部分需要 junit 也是非常明显的，而主程序是不需要的，所以 test 范围依赖 
仅仅对于主程序有效。
##### [2]从开发和运行这两个不同阶段理解
compile 和 provided 的区别
	![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-cfe1b19bbc6a400a83fbc99ea4c497a7.png)
③依赖的传递性 
A 依赖 B，B 依赖 C，A 能否使用 C 呢？那要看 B 依赖 C 的范围是不是 compile，如果是则可用，否则不 
可用。
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-79d55b2e150045908bfa91fc1657222b.png)
④依赖的排除 
如果我们在当前工程中引入了一个依赖是 A，而 A 又依赖了 B，那么 Maven 会自动将 A 依赖的 B 引入当前工程，但是个别情况下 B 有可能是一个不稳定版，或对当前工程有不良影响。这时我们可以在引入 A 的时  候将 B 排除。
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-9e38c9c37ef847e48f14649d07499842.png)
[2]配置方式 
```java
<dependency> 
   <groupId>com.atguigu.maven</groupId>  //是那个项目的
   <artifactId>HelloFriend</artifactId> //那个模块
  <version>0.0.1-SNAPSHOT</version> //版本
   <type>jar</type> 
   <scope>compile</scope>  //全部都生效 
<exclusions> // 就是排除
   <exclusion> 
   <groupId>commons-logging</groupId> 
   <artifactId>commons-logging</artifactId> 
    </exclusion> 
 </exclusions> 
</dependency>

```


### 常用的maven命令：
注意：执行和构建相关的Maven命令 必须进入 pom.xml所在的目录。
常用的命令： 
- mvn clean： 清理    
● mvn compile 编译主程序    生成target 文件就是编译的意思
● mvn test-compile 编译测试 程序  编译test的文件
● mvn test 执行测试         
● mvn package  打包（就是生成对应的jar包 和war包）
⑤统一管理所依赖 jar 包的版本 
对同一个框架的一组 jar 包最好使用相同的版本。为了方便升级框架，可以将 jar 包的版本信息统一提 
取出来
[1]统一声明版本号 
<properties> 
 <atguigu.spring.version>4.1.1.RELEASE</atguigu.spring.version> 
</properties> 
其中 atguigu.spring.version 部分是自定义标签。
[2]引用前面声明的版本号
<dependencies>
 <dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-core</artifactId>
    <version>${atguigu.spring.version}</version>
  </dependency>
……
</dependencies>
[3]其他用法 
<properties> 
     <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding> 
</properties>
⑥依赖的原则：解决 jar 包冲突
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-7a279dd0c9a94256b96c04f01750d182.png)
### 8. 仓库 
#### 8.1 分类 
[1]本地仓库：为当前本机电脑上的所有 Maven 工程服务。 
[2]远程仓库
(1)私服：架设在当前局域网环境下，为当前局域网范围内的所有 Maven 工程服务。
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-f3074d0862a9411097cef420fa22786a.png)
(2)中央仓库：架设在 Internet 上，为全世界所有 Maven 工程服务。 
(3)中央仓库的镜像：架设在各个大洲，为中央仓库分担流量。减轻中央仓库的压力，同时更快的响应用户请求。 
#### 8.2 仓库中的文件 
[1]Maven 的插件 
[2]我们自己开发的项目的模块 
[3]第三方框架或工具的 jar 包 
※不管是什么样的 jar 包，在仓库中都是按照坐标生成目录结构，所以可以通过统一的方式查询或依赖。
### 9 生命周期 
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-882c97e853a240a2abbd3d90300045fe.png)
上图就是Maven的声明周期，
#### 9.1 什么是 Maven 的生命周期？ 
●Maven 生命周期定义了各个构建环节的执行顺序，有了这个清单，Maven 就可以自动化的执行构建命令了。 （为了加快自动构建的过程）
●Maven 有三套相互独立的生命周期，分别是： 
①Clean Lifecycle 在进行真正的构建之前进行一些清理工作。 
②Default Lifecycle 构建的**核心部分**，编译，测试，打包，安装，部署等等。 
③Site Lifecycle 生成项目报告，站点，发布站点。 （项目开发完成之后就会把我们写的带代码，作者啥的信息生成一个静态的站点 用的少）
它们是相互独立的，你可以仅仅调用 clean 来清理工作目录，仅仅调用** site 来生成站点**。当然你也可以 直接运行 mvn clean install site 运行所有这三套生命周期。 
每套生命周期都由一组阶段(Phase)组成，我们平时在命令行输入的命令总会对应于一个特定的阶段。比 
如，运行 mvn clean，这个 clean 是 Clean 生命周期的一个阶段。有 Clean 生命周期，也有 clean 阶段。
#### 9.2 Clean 生命周期 
Clean 生命周期一共包含了三个阶段： 
①pre-clean 执行一些需要在 clean 之前完成的工作 
②clean 移除所有上一次构建生成的文件 
③post-clean 执行一些需要在 clean 之后立刻完成的工作
#### 9.3 Site 生命周期 
①pre-site 执行一些需要在生成站点文档之前完成的工作 
②site 生成项目的站点文档 
③post-site 执行一些需要在生成站点文档之后完成的工作，并且为部署做准备 
④site-deploy 将生成的站点文档部署到特定的服务器上 
这里经常用到的是 site 阶段和 site-deploy 阶段，用以生成和发布 Maven 站点，这可是 Maven 相当强大 的功能，Manager 比较喜欢，文档及统计数据自动生成，很好看。
#### 9.4 Default 生命周期 
Default 生命周期是 Maven 生命周期中最重要的一个，绝大部分工作都发生在这个生命周期中。这里， 
只解释一些比较重要和常用的阶段： 
```java
下面针对main目录的：
validate 
generate-sources 
process-sources
generate-resources 
process-resources 复制并处理资源文件，至目标目录，准备打包。 
compile main下的源代码编译项目的源代码。 
process-classes 
下面针对测试环境的：
generate-test-sources 
process-test-sources 
generate-test-resources 
process-test-resources 复制并处理资源文件，至目标测试目录。 
test-compile 编译测试源代码。 
process-test-classes 
test 使用合适的单元测试框架运行测试。这些测试代码不会被打包或部署。 
打包：
prepare-package 
package 接受编译好的代码，打包成可发布的格式，如 JAR。 
pre-integration-test 
integration-test 
post-integration-test 
verify 
安装：
install 将包安装至本地仓库，以让其它项目依赖。 
发到服务器上：
deploy 将最终的包复制到远程的仓库，以让其它开发人员与项目共享或部署到服务器上运行

```
三个生命周期是独立的，在统一个生命周期里，执行 后面的前面的也会执行；
。
#### 9.5 生命周期与自动化构建 
运行任何一个阶段的时候，它前面的所有阶段都会被运行，例如我们运行 mvn install 的时候，代码会 
被编译，测试，打包。这就是 Maven 为什么能够自动**执行构建**过程的各个环节的原因。此外，Maven 的插 
件机制是完全依赖 Maven 的生命周期的，因此**理解生命周期**至关重要。

### 10 插件和目标 
●Maven 的核心仅仅定义了抽象的生命周期，具体的任务都是交由插件完成的。 
●每个插件都能**实现多个功能**，每个功能就是一个插件目标。 
●Maven 的生命周期与插件目标**相互绑定**，以完成某个具体的构建任务。 
例如：compile 就是插件 maven-compiler-plugin 的一个目标；pre-clean 是插件 maven-clean-plugin 的一个目标。
插件就是执行，多个生命周期的操作；
### 11 继承 
#### 11.1 为什么需要继承机制？ 
由于非 compile 范围的依赖信息是不能在“依赖链”中传递的，所以有需要的工程只能单独配置。例如：
每个模块的junit 库的版本都不一样 那么就 需要一个个进去手动修改那么就很不可取  所有就 有了继承
此时如果项目需要将各个模块的junit版本统一为4.9，那么到各个工程中手动修改无疑是非常不可取的。 
使用继承机制就可以将这样的依赖信息统一提取到父工程模块中进行统一管理。
#### 11.2 创建父工程 
创建父工程和创建一般的 Java 工程操作一致，唯一需要注意的是：打包方式处要设置为 pom。
11.3 在子工程中引用父工程
```java
<parent> 
<!-- 父工程坐标 --> 
<groupId>...</groupId> 
<artifactId>...</artifactId> 
<version>...</version> 
<relativePath>从当前目录到父项目的 pom.xml 文件的相对路径</relativePath> 
</parent>
<parent> 
<groupId>com.atguigu.maven</groupId>
<artifactId>Parent</artifactId>
<version>0.0.1-SNAPSHOT</version>
<!-- 指定从当前子工程的pom.xml文件出发，查找父工程的pom.xml的路径 --> 
    <relativePath>../Parent/pom.xml</relativePath>
</parent>

```

此时如果子工程的 groupId 和 version 如果和父工程重复则可以删除
#### 11.4 在父工程中管理依赖 
将 Parent 项目中的 dependencies 标签，用 dependencyManagement 标签括起来
junite 是不能传递的所有 可能分散在 各个模块中 所以不方便协同开发
```java
<dependencyManagement> 
<dependencies> 
<dependency> 
<groupId>junit</groupId> 
<artifactId>junit</artifactId> 
<version>4.9</version> 
<scope>test</scope>
</dependency> 
</dependencies> 
</dependencyManagement>

```

在子项目中重新指定需要的依赖，删除范围和版本号（版本号是不修改的）
```java
<dependencies> 
<dependency> 
<groupId>junit</groupId> 
<artifactId>junit</artifactId> 
</dependency> 
</dependencies>

```

● 创建一个夫工程 注意打包方式是 ：pom方式
```java
    <groupId>com.liubin.maven</groupId>
    <artifactId>Maven</artifactId>
    <version>1.0-SNAPSHOT</version>
    <packaging>pom</packaging> 

```

● 在子工程中声明对夫工程的应用  (这是我爹)
```java
    <parent>
        <groupId>com.liubin.maven</groupId>
        <artifactId>Maven</artifactId>
        <version>1.0-SNAPSHOT</version>
<!--        以当前文件为基准的 夫工程 pom。xml 文件的相对路径-->
        <relativePath>../model/pom.xml</relativePath>
    </parent>

```

● 将子工程的坐标 中和 夫工程 重复的坐标
● 在父工程中 统一依赖
```java
<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <version>1.18.22</version>
        </dependency>
    </dependencies>
</dependencyManagement>

```

● 在子工程中删的版本 来统一管理
### 12 聚合 
#### 12.1 为什么要使用聚合？ 
将多个工程拆分为模块后，需要手动**逐个安装到仓库后依赖才**能够生效。修改源码后也需要逐个手动进行 clean 操作。而使用了聚合之后就可以批量进行 Maven 工程的安装、清理工作。
#### 12.2 如何配置聚合？ 
在总的聚合工程中使用 modules/module 标签组合，指定模块工程的相对路径即可
```java
<modules> 
<module>../Hello</module> 
<module>../HelloFriend</module> 
<module>../MakeFriends</module> 
</modules>

```

### 13 Maven 仓库
我们可以到 http://mvnrepository.com/搜索需要的 jar 包的依赖信息。
#### 1、DepencyManagement应用场景
当我们的项目模块很多的时候，我们使用Maven管理项目非常方便，帮助我们管理构建、文档、报告、依赖、scms、发布、分发的方法。可以方便的编译代码、进行依赖管理、管理二进制库等等。
由于我们的模块很多，所以我们又抽象了一层，抽出一个itoo-base-parent来管理子项目的公共的依赖。为了项目的正确运行，必须让所有的子项目使用依赖项的统一版本，必须确保应用的各个项目的依赖项和版本一致，才能保证测试的和发布的是相同的结果。
在我们项目顶层的POM文件中，我们会看到**dependencyManagement**元素。通过它元素来管理**jar包的版本**，让子项目中引用一个依赖而**不用显示的列出版本号。**
Maven会沿着父子层次向上走，直到找到一个拥有dependencyManagement元素的项目，然后它就会使用在这个dependencyManagement元素中指定的版本号。
##### 这样做的好处：
统一管理项目的版本号，确保应用的各个项目的依赖和版本一致，才能保证测试的和发布的是相同的成果，因此，在顶层pom中定义共同的依赖关系。同时可以避免在每个使用的子项目中都声明一个版本号，这样想升级或者切换到另一个版本时，只需要在父类容器里更新，不需要任何一个子项目的修改；
如果某个子项目需要另外一个版本号时，只需要在dependencies中声明一个版本号即可。子类就会使用子类声明的版本号，不继承于父类版本号。
#### 2、Dependencies
相对于dependencyManagement，所有生命在dependencies里的依赖都会自动引入，并默认被所有的子项目继承。
#### 3、区别
dependencies即使在子项目中不写该依赖项，那么子项目仍然会从父项目中继承该依赖项**（全部继承）**
dependencyManagement里只是**声明依赖**，并不实现引入，因此子项目需要显示的声明需要用的依赖。如果不在子项目中声明依赖，是不会从父项目中继承下来的；只有在子项目中写了该依赖项，并且没有指定具体版本，才会从父项目中继承该项，并且version和scope都读取自父pom;另外如果子项目中指定了版本号，那么会使用子项目中指定的jar版本。
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-272c25cb1d914646b9e61e2d22fcc3ad.png)

编译
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-8cfd778101b948a881f454c558534225.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-e30908f4db0d459fb6f0fb89b0be9f7d.png)
构建
● java代码
● WEB工程 （是java 代码 进行编码之后 放在 web文件的目录的过程部署）
真正的类路径 就是  class 路径就是编译之后的路径
真正运行是看编译结果的 文件地址的
构建文件的各个环节：
1. 清理： 把之前的编译的到的旧的字节码文件删除 为下一次编译做准备
2. 编译 将java 编译成 class 测试
3. 测试 ：自动测试 maven自动调用 **测试代码**  自动调用 junite
4. 报告; 测试程序的 结果
5. 打包： 将web工程打war包 java工程 打jar包
6. 安装：MAven的特定概念 打包 得到的文件赋值到 “仓库” 中
7.  将web 工程生成 的war包 赋值到 Servlet容器的指定位置