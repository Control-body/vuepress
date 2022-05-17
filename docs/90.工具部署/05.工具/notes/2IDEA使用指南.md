---
title: IDEA生成文档注释
date: 2022-03-26 10:03:08.872
updated: 2022-03-26 10:03:08.872
url: /archives/idea-sheng-cheng-wen-dang-zhu-shi
categories: 
tags: 
---

　　IDEA中设置注释模板主要分为两个部分，分别是**创建java文件时类**的注释和**方法的注释**。

　　这里为大家详细介绍一下方法，大家可以根据自己的习惯生成自己喜欢的注释模板。效果如下：
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-2163769949644201be72abfd8042bcb3.png)
## 如何自动生成按文档注释？

### 一、类注释模板
1、选择File→Settings→Editor→File and Code Templates→Files→Class。可以看到创建Class时引入了一个参数"File Header.java"。对应的是Files旁边的Includes→File Header文件。
IntelliJ IDE --> Preferences --> Editor --> File and Code Templates --> Includes --> File Header
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-1ef18792a2dd4539b77f2f80a70d11e8.png)
2、File Header里就是创建类时的注释模板，下面Description中有描述一些可以配置的参数，可以根据自己需要选用。
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-05f8de3e64d14b289c5ccf3144febd99.png)

### 二、设置方法的注释模板

1、选择File→Settings→Editor→Live Templates。点击右边的加号，选择Template Group，创建一个分组。
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-bda9bc36d9fc4a65b51f48a3b84f19fe.png)

2、再点击加号，选择Live Template，创建一个模板。其中：

Abbreviation：填模板的缩写，可以使用*号作为代号，方便后面调用模板。

Options→Expand with：填注释模板的扩展快捷键，根据使用习惯，这里使用默认的Tab。
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-ca9b39990a7a4c3f9d295fc92ad6a218.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-5f93c8fb2b314b6aba8fa16fe98c00dc.png)

3、参数赋值优化

（1）如果param参数使用默认的methodParameters()来获取方法参数值，其注释参数是在一行展示的，如下图。这里我们希望像MyEclipse中一样，一行一个参数的样式，可以通过脚本来实现。将以下脚本复制进Expression，可以得到文章开头效果图的样式：

groovyScript("def result=''; def params=\"${_1}\".replaceAll('[\\\\[|\\\\]|\\\\s]', '').split(',').toList(); for(i = 0; i < params.size(); i++) {result+=' * @param ' + params[i] + ((i < params.size() - 1) ? '\\r\\n' : '')}; return result", methodParameters())
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-a62fa6272dee49288c5647e016c0c401.png)
（2）如果return参数使用默认的methodReturnType()来获取参数值，模板里使用了@link来跳转结果类型，那么当方法返回值为void时，注释会报错，如下图。可以通过脚本来避免，将上面模板中的@link参数去掉，将以下脚本复制进Expression：

groovyScript("def result=\"${_1}\"; if(result == \"void\"){return \"\";}else{return \"{@link \"+result+\"}\";}", methodReturnType())

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-72f562374a444eb2b87f57d90439d65d.png)

PS:（1）注意，注释模板开头不要使用/，因为设置后虽然可以更便捷的使用 * + Tab键，调用模板。但是会存在param为null的情况（原因暂时未知），如下图，需要在方法内调用才能获取参数，但这样还需要将注释复制到方法外反而使用不便。
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-3054b5a803d34ce4abc8e17714821cf9.png)

但是根据我的 测试 * 加快捷键 还是不行  需要 /** + 回车才能 生效
（2）注释模板中的user参数是获取系统的用户（当然注释作者也可以直接写固定值，但是配置更有意思，哈哈），经常不是自己需要的作者名，可以在IDEA中进行配置。打开→IDEA的安装目录\bin\idea64.exe.vmoptions。在最下面增加一行-Duser.name=username。

其中username就是你希望为user参数的赋值。


（3）注释模板中的date参数是获取系统的时间及格式（即桌面右下角的时间及格式），而WIN10下系统时间格式是可以调整的。右键桌面右下角的系统时间→调整日期/时间→日期、时间和区域格式设置→更改数据格式→调整“短日期格式”。

本文来自博客园，作者：PC君，转载请注明原文链接：https://www.cnblogs.com/pcheng/p/10121683.html

### 三插件

#### 一 软插件：

**快捷键提示插件：**
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-38bb378a4f38479eb4509d4ecdf4f5ce.png)
**翻译插件：**
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-72594f9f43784fc3a54411bd0f54d50c.png)
**彩虹括号插件；**
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-e4b96f34866e4fe3b8b5feff7c6a63c4.png)
**开启代码小地图的功能：**
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-f94aa5a5740d4e688b07c81d2621c822.png)

#### 二 硬插件

**可以实现对字符串的一系列操作：**
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-a302b8a21e7b4115b4134079ce6db7b8.png)
**拥有比IDEA更多的提示关键字的作用**
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-d54a4560bbd14366877005c108cf33cb.png)
**可以把Json转换成对象**
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-a2630e8bb8be42729da44777e227d4e9.png)
**不需要自己写测试代码了**
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-89230cede1af4386b35d6e34c0c17173.png)
在使用之前一定要修改配置
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-36c32f87017b40b0a4b91e9f3081d946.png)
点击junit 就可以生成对应的测试类
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-946042b57bdd4bf594a1de85ea8fea42.png)
**生成这个方法的时序图**
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-bf9b7586a15e4de283cfb5f5646ac8f0.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-54fb7c018983467eb8d31b8a4dcafea5.png)
**restFul 工具 可以看各个**
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-9141c484822744bb80a3a446d02d3ff9.png)
**生成代码：根据数据库表 生成代码**
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-df2ee802c1ea46d2a377bd3e0fc278b2.png)

### 四 WebStorm添加模板

首先打开webstorm的设置，搜索live，点击 Live Templates,可以看到右侧有很多的文件
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-e2741037233a41a7964f8e8d93df8154.png)

### 五 背景图片

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-748df692337844bb91f0ee60fe3d8c37.png)

### 六 DEBUG

#### 1.Debug 的基本操作

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-45f15733eab74f5b8083ef3de9a2a014.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-ca0bbaf1f7474ab78b57fe1deb7281d8.png)

#### 2.在接口上的方法 打断点.会在真实执行实现类的 方法处停下来;

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-6b5a16b332e2418692002c5a54338eff.png)

#### 3.字段上的断点;

在字段上打的时候, 就是当字段被修改的时候,暂停 
也可以修改的 ;
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-372255d4e4cc4eca9c5f0a42efee9ddf.png)

#### 4.异常断点的增加

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-79abde54a30440719ad3d260672bb555.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-057c2811286442179bd265e036641679.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-acbfb851f196468e8a64ee2a0f6c9c17.png)


#### 5. 回退 回退到进入方法之前

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-701c6b3dac8a4850a95b10534269093d.png)


#### 6. 条件执行断点

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-b17caaf6ccdc44a297888528971497b8.png)


#### 7.如何进行终止debug 呢?

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-49720ba0160b4c2ba7c66ba3d15cc50c.png)
**正确做法:**
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-0c76c9c459ba4eb189e682b0f0cd30f0.png)

#### 8.Stream的调试

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-2fd32560c93d4a73b084db1f67d1c8f6.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-2ee712a1cf1a43f494753ed2f1df5d2a.png)

#### 9.执行表达式

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-1a24b00b7d574abe8b9b2d2be122481c.png)

#### 10 线上调试:

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-d6aae89f3bb04055ad7436c5a28bb879.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-4e97e266c3154a44a301d5804d2e4234.png)

比如 在本机(或者局域网上 的某个机器运行 SpringBoot 为例:)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-f452e2c4011f4dcf8cb6a580bfd3a21d.png)


#### 11 多线程调试

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-2e197a5e13444b36899a10632d9594ce.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-2514868a14aa4ae889eaa917c5bad493.png)