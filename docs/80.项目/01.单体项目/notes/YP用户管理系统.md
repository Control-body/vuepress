---
title: YP项目用户管理系统
---

## 用户中心

完整了解做项目的思路，接触一些企业级的开发技术

（尽量少写代码）目标：大家之后都能轻松做出管理系统

### 一 企业做项目流程

需求分析 => 设计（概要设计、详细设计）=> 技术选型 =>

初始化 / 引入需要的技术 => 写 Demo => 写代码（实现业务逻辑） => 测试（单元测试）=> 代码提交 / 代码评审 => 部署=> 发布
### 二 需求分析

1. **登录 / 注册**
2. **用户管理（仅管理员可见）对用户的查询或者修改**
3. 用户校验（ **仅星球用户** ）
4. ## 技术选型

前端：三件套 + React + 组件库 Ant Design（阿里云的组件库） + Umi + Ant Design Pro（现成的管理系统）
后端：

- java
- spring（依赖注入框架，帮助你管理 Java 对象，集成一些其他的内容）
- springmvc（web 框架，提供接口访问、restful接口等能力）
- mybatis（Java 操作数据库的框架，持久层框架，对 jdbc 的封装）
- mybatis-plus（对 mybatis 的增强，不用写 sql 也能实现增删改查）
- springboot（**快速启动** / 快速集成项目。不用自己管理 spring 配置，不用自己整合各种框架）
- junit 单元测试库
- mysql

部署：服务器 / 容器放## 计划

1. 初始化项目

   1. 前端初始化     20 min

      1. 初始化项目 ✔
      2. 引入一些组件之类的 ✔
      3. 框架介绍 / 瘦身（ant design pro （包含的 功能比较多）） ✔

   2. 后端初始化  20 min

      1. 准备环境（MySQL 之类的）验证 MySQL 是否安装成功 - 连接一下 ✔
      2. 初始化后端项目，引入框架（整合框架）✔

      

2. **登录 / 注册** 20min

   1. 前端
   2. 后端

3. 用户管理（仅管理员可见） 20 min

   1. 前端
   2. 后端

（平台）
三种初始化 Java 项目的方式

1. GitHub 搜现成的代码
2. SpringBoot 官方的模板生成器（https://start.spring.io/）
3. 直接在 IDEA 开发工具中生成  ✔

如果要引入 java 的包，可以去 maven 中心仓库寻找（http://mvnrepository.com/）



### 三 环境配置

#### 下载 node.js

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-7424440b96e54c42a8cd3803c8564713.png)
#### And Design Pro
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-2091f47ccc7247858d38ccba28f598a1.png)
里面 所有的 页面都是 可以代码生成的
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-b9a9a4d274884189968635f8ebe730a0.png)
有时间 吧文档自己看一遍
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-bebaacb253404b57b4444c45fda97dc1.png)
使用 npm
npx create-umi myapp
就是快速 初始化的一个 项目
使用 yarn
yarn create umi myapp
yarn（快） 是一个包管理器 应用别人的 项目 和 npm 一样
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-54198ae5aa9d443781bbf9b617bfc75d.png)
需要进行下载 yarn 包管理器
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-ebc12f9ad193434090123f284920c3b6.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-86ccffad9ffe4a46b74992a211f3817d.png)
官网地址：
https://classic.yarnpkg.com/en/docs/install#windows-stable

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-3ef87bfb389846f7ba4ddfff0f6b3784.png)
选择模板：
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-d1f130987be344f4931e6b59239ca5e2.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-3c42184ec1ea40e3bfa2c4a9a0f6a2b8.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-27d3123e6ee945a89ac5d57b7726b3bf.png)
下载完成会在 cmd 所在的路径 中多出来一些 页面
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-44630ec10d464854aafc5f0733564e8d.png)
yarn 就是一个 和 npm 一样的工具 （她更快）
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-bbe07dd6b4df4842be1be8e74d1a62b2.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-5bdf93b4586848038080d8aa91689ad9.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-90f279a0c53f40ee812bc22391711ed9.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-5fd7148e78f14df399e675c318aee6f2.png)
umi（加了 路由）框架就是 再次封装下 react（对js的封装 ） 前端框架

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-8423b0d422334307a37ac88b7493d24f.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-4b095ab21d0b4ef1993d66f032636fd6.png)
js 是解释型 语言 为了  写更少的js 代码 我们 可以在js  之上 写 TS ts 是可以编译成 js 的
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-64f023c4c7b94a21abbd92ccc0c753fc.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-529b87f556b34963a8bd5401d9ebb795.png)
可以自动生成代码：
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-c871b041b1a746b1a2f7f204493a7125.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-4b9317e639f34db29052e656c74d1bfe.png)
生成代码的过程： （即使 git pull 他的 代码库下载到本地 然后 再进行 编译）
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-25ef8e10393248c9a181b5def0f8d22f.png)
下载代码 成功 
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-1ac02aee2bbe49c3b0f9908eba4b97d3.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-d7d610f8d4b14bb889eca6d4faffc985.png)

### 四 项目瘦身

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-63a47450a24240e489833fceb9e769b4.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-461bd79c7e52454f89885e80609f8c36.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-93d2f27e0b2a41c7b4228bcb2dc4ec70.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-63b7164bc1fe4dc3a900cebf8fc1b5b3.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-d114078ec53b4ae9bfca85e8db3732f9.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-92b7511024094768b05456ac76b750a8.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-6cf9089e00b544b9a7c138dff70578e1.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-18974e8420ae4f7c90fb19a243ce51bb.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-0140b4b3526f44c4b3b7d99634042946.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-90c87c691e5f4b02ad9f30c31ae213af.png)

### 五 .后端
数据库 ： MySql 5.7  
初始化java项目部署 后端 项目： 
     - 在 github上 下载 需要的 模板：
     - SpringBoot的 官方的 生成 模板
     - IDEA 生成 （最方便的）
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-87734072dd7c409eb6b89b81b42d76bb.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-e181ced13dc54e1c831518189a6ff9f4.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-b1f7743978f7412f90e817310aaf9539.png)
- Spinrg （依赖注入框架 帮助你管理 java对象 集成 其他的 一些工具）
- SpringMVC （web框架 提供接口 访问 restFul 风格  接口的 能力）
- mybatis （操作数据 库的 工具 ）
- Mybatis-plus 就是 不用自己写 sql语句
- SpringBoot （快速启动 ）（不需要自己写 xml 配置 不用自己 整合 Spring 配置）
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-c5dd83c1dcb149dc9c75acdc1450478a.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-884e5df413fa4060a0832412849b7799.png)
 @Resource 根据名称  @Autowired 是根据类型
断言：
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-52244ee5390a427795a97b69cfbbaef1.png)
@RunWith(SpringRunner.class)
Springboot的@RunWith(SpringRunner.class)

注解的意义在于Test测试类要使用注入的类，比如@Autowired注入的类，

有了@RunWith(SpringRunner.class)这**些类才能实例化到spring容器中**，自动注入才能生效，

不然直接一个NullPointerExecption
#### 1.数据库设计 
数据库 （文件夹） Exale 表格
和我们自己 去 Exeal 里面操作数据 一样的 
需要那些类型？ 字段的类型？是否 添加索引 ？（相当于 字典）
用户表：

id（主键）bigint  

username 昵称  varchar

userAccount 登录账号 

avatarUrl 头像 varchar

gender 性别 tinyint

userPassword 密码  varchar

phone 电话 varchar

email 邮箱 varchar
isVaild   是否 有效  tinyint （整数）0 1

userStatus 用户状态 int  0 - 正常

-------------------------------------------------------------------

createTime 创建时间（数据插入时间）datetime

  更新时间（数据更新时间）datetime

isDelete 是否删除 0 1（逻辑删除）tinyint
上面的数据 几乎每一个 数据库都是 需要这几个 属性的
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-842b3c378e444b2f9f879ba2539af668.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-0ba4ed0836544152b48c392609a85d0f.png)
实现 用户表==》数据库的 基本操作：首先和数据库的关联
#### 2.MybatisPlus自动生成  
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-a1baba4ed44646178f6190fe5a2c3371.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-9418a31c800f4f508d5c7c4e980d0bb0.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-840e323818574002a6909cd8e5795a54.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-28705fa159884e8b833bc1afdca7ea89.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-51a3f81b561c47369b99e47ebbedd54d.png)
测试自动生成的代码：
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-fed20ed79aaf45bea808c63ae3893db5.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-d5ced64abe8f4d0c85aeb9b270f61c5b.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-059d1616bb5b435cb1107a499132b386.png)

一键生成 需要的 set方法
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-e15345a54b8a43fb81b46eea9585e66c.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-76c80f49e060493faa50fe0376e4dab6.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-f17a0010eae14890920fda7b35819c2d.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-666571508f6640fd861c9ff70c8032b9.png)
出现问题： MP 自动映射出现问题
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-833247a5234a4855917cbe632849bf19.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-2b6e132602e24cd4b6be87c1a5816b46.png)

#### 3.自动生成器的使用

 MyBatisX 插件，自动根据数据库生成 domain 实体对象、mapper（操作数据库的对象）、mapper.xml（定义了 mapper对象和数据库的关联，可以在里面自己写 SQL）、service（包含常用的增删改查）、serviceImpl（具体实现 service）

#### 4.接口编写
##### 1. 注册逻辑

1. 前端：用户在前端输入账户和密码、以及校验码（todo）
2. 后端：校验用户的账户、密码、校验密码，是否符合要求
   1. 非空
   2. 账户长度 **不小于** 4 位
   3. 密码就 **不小于** 8 位
   4. 账户不能重复
   5. 账户不包含特殊字符
   6. 密码和校验密码相同
3. 对密码进行加密（密码千万不要直接**以明文存储到数据库**中）
4. 向数据库插入**用户数据**

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-ee0bd4a5a4244640ac13abbef34eb737.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-85b6c54c3ed646b290ad27ffc1999e46.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-d4b8094edbfb49d98b331260ad0e89c3.png)
测试： 
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-6690f9cb8f924451bfadc0d03d82eb09.png)

正则过滤测试时间过多：
```java
//账号 不能包含 特殊字符 去网络上找正则表达式
        String validPattern="[`~!@#$%^&*()+=|{}':;',\\\\[\\\\].<>/?~！@#￥%……&*（）——+|{}【】‘；：” “’。，、？]";
        Matcher matcher = Pattern.compile(validPattern).matcher(userAccount);
        if(matcher.find()){
            return -1;
        }
```
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-56b34cd78efa4ef2bc9357bd5ad57788.png)

##### 2.登陆逻辑：
接受参数： 用户账号  密码
请求类型： POST 在请求 长的时候不能用 GIT
请求体：   JSON （前后传递参数 的形式）（轻量： 更少体积）RPC（了解）
返回值：用户信息 （脱敏）
###### 1.service部分 
逻辑
1. 检验用户 账号和密码是否正确（如果错误 就根本不需去数据库查）
2. 校验密码 对传进来的 密码进行加密 和 数据库进行对比
3.记录登陆状态 （session）将其存储在 的服务器上 （用 SpringBoot ）
 cookie （前传到后 后 和session对比 看最后的 登陆状态）
4. 返回用户信息 （脱敏： 隐藏敏感信息）

prsf （常量） 盐值 混淆密码；
安全性： 限流（同一台 IP 多次登陆 就加限制）
用@log4j 记录日志 尽量 用 英文 

**如何知道那个用户登陆了**
1. 连接服务器端后 得到session1（匿名会话）状态 返回给前端 
2. 登陆成功 后得到 登陆成功的 session （在给这个session中设置 登陆账号的值）返回给前端 一个 cookie 
3. 前端接受到 后端的 命令后  设置 cookie 保存到 浏览器中
4. 前端再次 发起请求的时候 （相同域名 ） 在请求头中带上cookie
5. 后端拿到前端 传过来的 的cookie 找到相应的 session
6. 后端从session中可以取出 基于该session存储的变量（用户 登陆名字等属性）
session 中的 Attripute 就是一个Map集合
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-ec1d33bb9d084503ac7c1a414e7e51e8.png)

SDK： 就是从外面直接引入 就可以使用的值
API： 就是后端写好的 请求接口；
DTO类： **数据传输对象**（DTO）(Data Transfer Object)，是一种设计模式之间传输数据的软件应用系统。数据传输目标往往是数据访问对象从数据库中检索数据。数据传输对象与数据交互对象或数据访问对象之间的差异是一个以不具有任何行为除了存储和检索的数据（访问和存取器）。必须是可以序列化类的 否则不能进行 序列化 （序列化就是 将 对象 转换成 二进制，可以在网络上进行传输）

序列化 ： 分布式为什么使用序列化（就是减小体积）很多种用法
VO： 是返回给前端的 类 

tode： 这个就是留给后面去完善的 地方
逻辑删除：在登陆的时候也需要去加
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-dcb877ecdf3b4e94998c58ef8ce110f4.png)


###### 2.controller 部分
逻辑 会了 什么语言都是 一样的  （算法重要）
将 接口封装成请求 
@RestfulController （就是返回的是json 数据）（编写restful风格的API）
Controller 层： 对请求参数 的校验（不涉及业务逻辑） 没有感情（越少越好）
Service层：对业务逻辑的校验 （service 也可能被 除了Controller 的其他类去调用）
###### 3. 测试：
F8 下一步 
F9 进行到下一个断点
swagger 自带的 就可以了 
APIfox 是适用于 团队开发

##### 3.用户管理接口

1.查询用户
  1. 允许用户名查询                                                                                           
2.删除用户    

先做设计--》代码实现--》（复用代码 提取公告逻辑）



全局替换 

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-2e27b915fda4402f803bcb9997dc8cfb.png)

@ 就是表示 src的根目录 

后端注意的点：
1.返回给前端的值 一定要脱敏 包括在 登陆态的值
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-bce2ba02ff9b4ac4b2f7e0a02e2e38ea.png)

2.MP的问题  就是逻辑删除的问题
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-4ad248cd96784475be2eb65cd3e10ba0.png)
配置yam文件
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-baf7f9f598674e1d90de156d70837372.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-1e502b3bfccf47aebcdb1035d1f54019.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-0b2beb2730fc4198824b00f0e447de7e.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-d31c0c2c3dba4670a450b6b1d46c7773.png)

##### 4.序列化和反序列化

     Java是面向对象的语言，与其他语言进行交互（比如与前端js进行http通信），需要把对象转化成一种通用的格式比如json（前端显然不认识Java对象），从对象到json字符串的转换，就是序列化的过程，反过来，从json字符串转换成Java对象，就是反序列化的过程。
**serialVersionUID**是什么

     反序列化的过程，需要从一个json字符串生成一个Java对象
```java
Gson gson = new Gson();
Request req = gson.fromJson("request string", Request.class)
```
 这时候会有问题，需要验证输入的json字符串是否是从当前的Request这个类序列化过去的，serialVersionUID就是用来干这个的。当序列化的时候的serialVersionUID与反序列化的时候的serialVersionUID不一致的时候，会跑出InvalidCalssException。 
**具体的序列化过程是这样的**：序列化操作的时候系统会把当前类的serialVersionUID写入到序列化文件中，当反序列化时系统会去检测文件中的serialVersionUID，判断它是否与当前类的serialVersionUID一致，如果**一致**就说明序列化类的版本与当前类版本是一样的，可以反序列化成功，否则失败。
在没有设置之前是不会自动生成和
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-9d0ec7bbb33e4982bf3c2bca15a5347b.png)
我的不知道为啥 配置不成功

- 如何不通过修改 Intellij IDEA 设置 serialVersionUID

上面的方法需要 Intellij IDEA 进行修改，才能生成 serialVersionUID。你还可以使用下面的方法，来生成 serialVersionUID 而不需要对 Intellij IDEA 进行配置修改。

在代码中输入：

private static final long serialVersionUID = 1L;
然后会在前面看到警告提示：
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-69ed02ccde064b5391dd461e43a69f85.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-b76c7ded6c174c36bc90e9dd688a0e88.png)

#### 5.测试：
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-e06587782bfc4d9e8fb7e6348857c1ff.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-bd363a2cb1c4475d825ab60ba1697c93.png)
登陆接口测试成：
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-d733567e14fb4a09af3d380631a3bb01.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-cb06e36cc0c84456abdeafa16c053a52.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-88945dd3d7d84867b8b79ecae8164f71.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-75041c9ba223407fb4f7996e7c9260a9.png)

#### 6.用户管理接口

！！！！ 必须建权(权限) （初级阶段先用在数据库加一个字段 来区分 后面用 框架等）
1.查询用户

  1. 允许用户名查询                                                                                           
2.删除用户   
常量：
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-24a8b19a122c43a192a10a00cbee1968.png)

测试：（出现Cookie不能存储的问题）
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-fffe5639563d4a4b808a09a881cdf371.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-0ca183a9135f4db8b5ededa3fbd3d91d.png)

开启之后就可以 测试成功了

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-3c7faa51aedb46948763470205e0d27e.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-a93f5e5914124cb08d33034e42632098.png)

把脱敏方法 写成 抽象类
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-e46b35b4506b4b09b5f209e5823256da.png)

后端 完成;(先设计 然后不断优化)
### 六.前端
 "start:dev": "cross-env REACT_APP_ENV=dev MOCK=none UMI_ENV=dev umi dev", 先用 不使用 mook 数据的方式 开启
ctrl + shift + - 自动折叠 代码
修改页面：
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-7504cfb4c909497e801c44e0a4c68057.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-6c30583c30434f6795c7f7d7bc620f30.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-464f5517822d47c8a90b9deb1ad5e8d5.png)
删除代码：

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-8f8c17f6d65a4ed19174db78f301bbec.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-6878f5d33509456ca2c39d3430252c2f.png)
页面精简完成：
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-158d04f4b1c440848101fb63a9254bbd.png)
#### 1.编写后端的跳转代码
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-45a94a81ec7544c58d37c880f05b2750.png)
找到函数体
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-5b84809bdc854ec28dab1c8a8170d742.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-49c506f4388c47c280dc5ef94331b1b5.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-779f0730f91e4888b56d27407bf56581.png)
去后端查看数据：
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-faa3ecb800d747878f1c2840666dddcd.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-6df083355ae8454899a6a0fa04166321.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-1ca752b0d7474f648d39a1ce1ebfbf05.png)

login方法：
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-7f3917518aa24962bd2f1c7c8212c427.png)

#### 2.前后端 交互：
前端 AJAX来请求 后端： axios 分装了AJAX  umi再次封装了 Axios
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-6a07e0d675f84f449c5f208069b47702.png)
修改地址的前缀
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-f141ddf6693b46ecbec4983ebac20b4b.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-bead662fc1b34529846eba31db1787f3.png)

#### 3.代理
由于前端是8000端口 但是你请求后端的地址是 8080 所以出现跨域的问题
解决的方式 有很多种：
在后端开启代理 也可以： 但是这里 他给封装了一个 代理的文件 更加方便在前端修改（正向代理）
正向代理： 代替客户端向服务端发送请求 
反向代理： 提服务器 接受请求 （不暴露）
Nginx 服务器：
Node.js 都可以实现代理
第一个是正向代理  第二个是反向 代理 （可实现负载均衡等）
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-c216dcb49e9445af8f158d03cd785481.png)
就是一个配置文件
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-652df6d2cdca4fa19102d5fb028beb53.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-a2907fd51af04806a390fc0e5d643322.png)
前后端都加上Api 的前缀
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-b4038b3894524641b3310dd47a1e36d2.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-d95ad54444d24fb58a0649597f192c6a.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-1c62ea2e3d6e419aa4ae7ebcb0a0ff71.png)
前端配置的几个文件：和后端的 
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-d9f02c777bf64bfa9490a855b94ff9a1.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-31a596810ca541a3af4d9f9bce6255c4.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-b06117c85ce546ea8e6189dfadb21e7f.png)

#### 4.路由的问题：
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-8341088b53f44b4589f8368e1936969b.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-d4f5f530b96544818431aa56f5091fb3.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-6ec72e8ea4114487a6a9b58a616d3a59.png)
#### 6.解决跨域问题（前端修改）：
ant  design提供了 代理的配置：
当请求中 包含了 /api/的时候 ，就进行代理到 8080端口；
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-77689b3d6f104604b45f788c749e568b.png)

#### 7.配置Swagger：
1.导入依赖
```java
 <dependency>
            <groupId>io.springfox</groupId>
            <artifactId>springfox-swagger2</artifactId>
            <version>2.9.2</version>
        </dependency>
        <dependency>
            <groupId>io.springfox</groupId>
            <artifactId>springfox-swagger-ui</artifactId>
            <version>2.9.2</version>
        </dependency>

```

2.编写配置类
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-1b79d56ac9444bfe8c262a3cfe49789e.png)

3.在接口上添加配置等信息
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-668b3df0e2894b05be342ded0eaf7e76.png)


![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-8bb93f0f7f724772859c4ad622403b99.png)

### 七 总结：

- 自动生成代码的使用
- 返回统一的 result 
- 使用枚举的状态码  
- 统一的异常处理
  ![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-9cd0e83cb5744451b4be92c28a5ba4ac.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-f75532cb28a0442393bb6ee97b0690cb.png)

### 八 部署

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-430daa0c8d7044cf870462052c91d50d.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-3a77f4855d96480b812a57d43da5787f.png)



![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-96c191c83e25449cbcbe3648785ef6f5.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-a92907ca9da94dd69452c11ae4c8940d.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-3e443c17c51642a99e1c181ad9a169a7.png)



![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-ef08e35925f240cabcb1d391614980ad.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-313875f2a84c461dbff389772dc86d2f.png)


![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-5cb8b70070b24654ac351905402b6f26.png)


![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-b2b2f86f1ef54cc2ae8ab03a9882b73f.png)



![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-6274c5637daf449cbe4aa1672d88e3ec.png)


![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-2b31378b734a4b5098a83b37210ef479.png)


![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-184d4f7ad18d4cebb4d338b60716d149.png) 


![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-33a73e6f2cf44867adb5c7480a832d98.png)

