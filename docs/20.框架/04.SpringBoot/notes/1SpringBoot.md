---
title: SpringBoot(1)-SpringBoot概述
---

# Spring概述：
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-c5670623a49a4a63abcad1285e6b5816.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-f1bfdf9df22d4c8ca9b40a7051a18874.png)
**解决的问题： Spring的配置很多，配置地狱 ！！ 解决配置的问题**
覆盖了：
web开发
数据访问
安全控制
分布式
消息服务
移动开发
批处理
### 1.Spring5重大升级： 
#### 1.3.1、响应式编程
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-e2fedab571fe4d76ac8c3a61ac9544f6.png)
#### 1.3.2、内部源码设计
基于Java8的一些新特性，如：接口默认实现（**适配器模式**）java8出来之后（接口的默认实现） 适配器就没用了-->重新设计源码架构。


### 2、为什么用SpringBoot

Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications that you can "just run".

**能快速创建**出生产级别的Spring应用
2.1、SpringBoot优点
● Create stand-alone Spring applications
  ○ 创建独立Spring应用
● Embed Tomcat, Jetty or Undertow directly (no need to deploy WAR files)
  ○ 内嵌web服务器 （形成jar 包 ）
● Provide opinionated 'starter' dependencies to simplify your build configuration
  ○ 自动starter依赖，简化构建配置(需要啥都会自动 导入各种依赖)
● Automatically configure Spring and 3rd party libraries whenever possible
  ○ 自动配置Spring以及第三方功能(配置都给你提供了默认的实现)
● Provide production-ready features such as metrics, health checks, and externalized configuration
  ○ 提供生产级别的监控、健康检查及外部化配置 （修改的时候，外部写好配置问文件 直接就可改）
● Absolutely no code generation and no requirement for XML configuration
  ○ 无代码生成、无需编写XML（不需要写xml配置文件了）

SpringBoot是整合Spring技术栈的一站式框架
SpringBoot是简化Spring技术栈的快速开发**脚手架**（搭建好环境 ，注重开发）

#### 2.2、SpringBoot缺点
● 人称版本帝，迭代快，需要时刻关注变化
● 封装太深，内部原理复杂，不容易精通


## 3、时代背景
### 3.1、微服务
James Lewis and Martin Fowler (2014)  提出微服务完整概念。
● 微服务是一种架构风格
● 一个应用拆分为一组**小型服务**
● 每个服务运行在自己的进程内，也就是可独立部署和升级
● 服务之间使用**轻量级HTTP**交互
● 服务围绕业务功能拆分
● 可以由全**自动部署机制**独立部署
● 去中心化，服务自治。服务可以使用不同的语言、不同的存储技术

### 3.2、分布式
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-17779ae8f7ec46a8b822edd6585dc7ad.png)
分布式的困难
● 远程调用
● 服务发现
● 负载均衡
● 服务容错
● 配置管理
● 服务监控（每个小的服务占多少资源等）
● 链路追踪
● 日志管理
● 任务调度
● ......

分布式的解决
● SpringBoot + SpringCloud
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-5e6581be637e469b8dbcf83027a0ca5f.png)
### 3.3、云原生
原生应用如何上云。 Cloud Native
上云的困难
● 服务自愈（某个服务器坏了怎么办）
● 弹性伸缩（在 高峰的时候 如何进行伸缩 （加减服务器））
● 服务隔离 （某个服务坏了 要隔离不影响其他服务器的 工作）
● 自动化部署（）
● 灰度发布（升级的时候 ，先上线一个 慢慢的测试最终 没问题了 在上线）
● 流量治理（高性能的数据库 收更高的流量）
● ......
## 4、如何学习SpringBoot
### 4.1、官网文档架构
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-faab2b09e9ed40efad702faeb0b249e1.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-b34ae3b5e51f44cea61653d9577a2dd8.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-f9c5451cf32c4296bd592d74bcc60978.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-94007d8c42794344bec515e3ab583d8d.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-939f34ea12634a0791fedc015b724a14.png)
## 第一个SpringBoot程序
javaweb是**war包**需要在 tomcat 上运行，SpringBoot 是**jar包** 内部嵌套了tomcat ，微服务 springCloud 就是多个Springboot 项目；SpringSecurity + shiro 就是拦截器的框架； 分布式方案：Dubbon+zookeeper
springCloud 也是一种分布式解决方案；
### 什么是Spring
Spring是一个开源框架，2003 年兴起的一个轻量级的Java 开发框架，作者：Rod Johnson  。
spring 就是 IOC 和AOP
Spring是为了解决企业级应用开发的复杂性而创建的，简化开发。
### Spring是如何简化Java开发的
为了降低Java开发的复杂性，Spring采用了以下4种关键策略：

1、基于POJO的轻量级和最小侵入性编程，所有东西都是bean；

2、通过IOC，依赖注入（DI）和面向接口实现松耦合；

3、基于切面（AOP）和惯例进行声明式编程；

4、通过切面和模版减少样式代码，RedisTemplate，xxxTemplate；
## 什么是SpringBoot
Java企业级应用->J2EE->spring->springboot的过程。
随着 Spring 不断的发展，涉及的领域越来越多，**项目整合开发需要配合各种各样的文件**，慢慢变得不那么易用简单，违背了最初的理念，甚至人称配置地狱。Spring Boot 正是在这样的一个背景下被抽象出来的开发框架，目的为了让大家更容易的使用 Spring 、更容易的集成各种常用的**中间件、开源软件**；
Spring Boot **基于 Spring 开发**，Spirng Boot 本身并不提供 Spring 框架的核心特性以及扩展功能，只是用于快速、敏捷地开发新一代基于 Spring 框架的应用程序。也就是说，它并不是用来替代 Spring 的解决方案，而是和 Spring 框架紧密结合用于提升 Spring 开发者体验的工具。Spring Boot 以**约定大于配置**的核心思想，默认帮我们进行了很多设置，多数 Spring Boot 应用只需要很少的 Spring 配置。同时它集成了大量常用的第三方库配置（例如 Redis、MongoDB、Jpa、RabbitMQ、Quartz 等等），Spring Boot 应用中这些第三方库几乎可以**零配置的开箱即用**。
简单来说就是SpringBoot其实不是什么新的框架，它默认配置了很多框架的使用方式，就像maven整合了所有的jar包，spring boot整合了所有的框架 。

### Spring Boot的主要优点：

- 为所有Spring开发者更快的入门

- 开箱即用，提供各种默认配置来简化项目配置

- 内嵌式容器简化Web项目

- 没有冗余代码生成和XML配置的要求
## 微服务架构
就是一种架构风格，他 要求我们在开发一个应用的时候，建立起一系列小服务的组合，然后通过Http进行通讯，
### 单体架构：
war包就是 一个 单体应用；所有的都在一个服务器上（All in One），
**优点**： 方便开发  维护  ；
**缺点：** 任何一个模块都需要停止服务器，而且 请求大的时候 服务器压力大，分布式就 可以解决这个问题；

## 02、SpringBoot2入门
1、系统要求Java 8 & 兼容java14 .Maven 3.3+idea 2019.1.2
### 2.配置Maven
```java
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.example</groupId>
    <artifactId>myproject</artifactId>
    <version>0.0.1-SNAPSHOT</version>

    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.6.4</version>
    </parent>

    <!-- Additional lines to be added here... -->

</project>
```
比之前的多了 paranet 依赖 （里面有他的 版本依赖）
### 2.导入web依赖
```java
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
</dependencies>
```
### 所有的配置全部都在application.yml
当我们没有添加配置的时候就是，使用默认的配置
有哪些配置呢？？？？
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-56aa03eaa0194942a885a494c7e041bb.png)
在之前 我们都打包成 一个 war包但是在SpringBoot中都是默认是 jar 包
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-575da4f94aef44acb2eee6eb76facded.png)
生成 fat jar  （里面包含了 很多的 环境 包含Tomcat） 直接 java xxx。jar 就可运行；
### 简化部署 
引入打包插件 就可以 直接打包成 jar 包；

## 5.自动配置
为什么我们，直接引入一个state 就可以直接 引入依赖呢？ （不去管理版本问题） ？？？？
```java
  <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.6.3</version>
        <relativePath/> <!-- lookup parent from repository -->
    </parent>
```
原因就在 maven 多的那个 parent文件（里面包含了 包的 版本号等信息）
maven中 的版本信息都是使用 父项目进行管理的；
进入这个父项目就发现 还有一个父项目
```java
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-dependencies</artifactId>
    <version>2.6.3</version>
  </parent>
```
进入这个父项目 就会发现：
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-335ac17d6ed143b2a3b68fc93f19dc7b.png)
几乎申明了 大部分的 版本号 我们在使用的时候 不需要写依赖
如果你写了 那就按照你的 版本来导入；
#### 如何自定义导入依赖版本
1、查看spring-boot-dependencies里面规定当前依赖的版本 用的 key。
2、在当前项目里面重写配置
    <properties>
        <mysql.version>5.1.43</mysql.version>
    </properties>

#### 导入需要场景的依赖
```java
  <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

```


还是maven的特性 ，因为他的里面导入了 他需要的依赖 
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-eb9028febd4945028979c5e71fae0777.png)

#### 当然还可以自定义自己的Start
 1、见到很多 spring-boot-starter-* ： *就某种场景
2、只要引入starter，这个场景的所有常规需要的依赖我们都自动引入
3、SpringBoot所有支持的场景
https://docs.spring.io/spring-boot/docs/current/reference/html/using-spring-boot.html#using-boot-starter
4、见到的  *-spring-boot-starter： 第三方为我们提供的简化开发的场景启动器。
5、所有场景启动器最底层的依赖 SpringBootde 核心依赖
```java
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter</artifactId>
  <version>2.3.4.RELEASE</version>
  <scope>compile</scope>
</dependency>

```
无需关注版本号，自动版本仲裁
﻿
1、引入依赖默认都可以不写版本
﻿
2、引入非版本仲裁的jar，要写版本号。
#### 1.2、自动配置
● 自动配好Tomcat
  ○ 引入Tomcat依赖。
  ○ 配置Tomcat（如何配置好呢？）
● 自动配好SpringMVC
  ○ 引入SpringMVC全套组件（依赖）
  ○ 自动配好SpringMVC常用组件（功能 ）
DispacherServlet （服务分发）
characterEncodingFilter（字符串过滤器）
ViewResolver（视图解析器）
multipartResolver（文件上传） 配置好了 web 开发的常见场景
● 自动配好Web常见功能，如：字符编码问题
  ○ SpringBoot帮我们配置好了所有web开发的常见场景
● 默认的包结构（包扫描都不需要配）
  ○ 主程序所在包及其下面的所有子包里面的组件都会被默认扫描进来
  ○ 无需以前的包扫描配置
  ○ 想要改变扫描路径，（默认是 扫描 主程序所在的 包）@SpringBootApplication(scanBasePackages="com.atguigu")
  修改扫描的基础包
    ■ 或者@ComponentScan 指定扫描路径 （不能写在启动类上 ）
```java
@SpringBootApplication
等同于
@SpringBootConfiguration
@EnableAutoConfiguration
@ComponentScan("com.atguigu.boot")
```
● 各种配置拥有默认值
  ○ 默认配置最终都是映射到某个类上，如：MultipartProperties
  ○ 配置文件的值最终会绑定**每个类上**，这个类会在容器中创建对象
● 按需加载所**有自动配置项** 映入了那个类才会让那个进行生效 
  ○ 非常多的starter
  ○ 引入了哪些场景这个场景的自动配置才会开启
  ○ SpringBoot所有的自动配置功能都在 spring-boot-autoconfigure 包里面
他们是如何 进行绑定的呢？？？？
spring-boot-starter-web-->spring-boot-starter-->spring-boot-autoconfigure
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-926cf5809f8f4bad8590a6a5ba9bdd72.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-c231dfe8802842d7aa26557819db26b9.png)

### 2、容器功能
#### 2.1、组件添加
##### 1、注解:
- @Configuration 对应 之前的 Xml配置文件 文件; 本身也是一个组件 比SpringBoot1 多一个属性 
- @Bean 就是给容器中加各组件 方法返回的**对象**就是**组件类型** 返回的**值** 就是 容器中的**实例**  默认组件名字 是方法名字;可以自己 指定 @Bean(value="name"); 默认是单实例的;
基本使用 是不是代理的 
Full模式与 (单实例)  支持依赖 (true)  需要检查   慢 
Lite模式(多实例)   不支持依赖 (false)  跳过检查 运行块
示例
最佳实战
配置 类组件之间**无依赖关系**用Lite模式加速容器启动过程，减少判断
配置类组件之间**有依赖关系**，方法会被调用得到之前单实例组件，用Full模式
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-deb9e9a1fe79461eb15683f62a3e5c76.png)
##### 2、@Bean、@Component、@Controller、@Service、@Repository
- @Bean 普通对象 
- @Component 是个组件
- @Controller 控制层组件
- @Service  Servlet 业务逻辑 层组件
- @Repository 数据库层组件
##### 3、@ComponentScan、@Import
- @ComponentScan  扫描那个包
- @Import 参数是类.class 会自动创建组件 然后引入 默认组件的名字是全类名
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-8c2e3d2933c14e6598edce221175e44f.png)
##### 4、@Conditional
条件装配：满足Conditional指定的条件，则进行组件注入
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-c29b0238fc1a4c99a349e4d05895313c.png)
各种条件装配 当满足那些注解的时候在会成效;
#### 2.2、原生配置文件引入
##### 1、@ImportResource
当我们写了Xml文件的时候就需要 在配置类上 加@ImportResource注解 ()
@ImportResource("classpath:bean.xml") 也可以生效;
```java
======================beans.xml=========================
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd">

    <bean id="haha" class="com.atguigu.boot.bean.User">
        <property name="name" value="zhangsan"></property>
        <property name="age" value="18"></property>
    </bean>

    <bean id="hehe" class="com.atguigu.boot.bean.Pet">
        <property name="name" value="tomcat"></property>
    </bean>
</beans>

在 配置类的上方写:
@ImportResource("classpath:beans.xml")
public class MyConfig {}

======================测试=================
        boolean haha = run.containsBean("haha");
        boolean hehe = run.containsBean("hehe");
        System.out.println("haha："+haha);//true
        System.out.println("hehe："+hehe);//true
```

##### 2.3、配置绑定 
如何使用Java读取到properties文件中的内容，并且把它封装到JavaBean中，以供随时使用； 
之前需要引入配置文件的方式:(麻烦)
```java
public class getProperties {
     public static void main(String[] args) throws FileNotFoundException, IOException {
         Properties pps = new Properties();
         pps.load(new FileInputStream("a.properties"));
         Enumeration enum1 = pps.propertyNames();//得到配置文件的名字
         while(enum1.hasMoreElements()) {
             String strKey = (String) enum1.nextElement();
             String strValue = pps.getProperty(strKey);
             System.out.println(strKey + "=" + strValue);
             //封装到JavaBean。
         }
     }
 }
```
###### 注解:@ConfigurationProperties
只需要加一个 前缀 mycar   当然这个类 必须放在 容器中;
```java
/**
 * 只有在容器中的组件，才会拥有SpringBoot提供的强大功能
 */
@Component
@ConfigurationProperties(prefix = "mycar")
public class Car {

    private String brand;
    private Integer price;

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "Car{" +
                "brand='" + brand + '\'' +
                ", price=" + price +
                '}';
    }
}
```
###### 1、解决方式一:@EnableConfigurationProperties + @ConfigurationProperties
适用于:映入第三方包的时候他是不会 在他的类上 加@Component的所以需要我们自己引入 容器
@EnableConfigurationProperties 在配置类上写 表示开启配置绑定功能 并且放入容器中,
```java
@EnableConfigurationProperties(Car.class)
//1、开启Car配置绑定功能
//2、把这个Car这个组件自动注册到容器中
public class MyConfig {
}
```
###### 2、解决方式二:@Component + @ConfigurationProperties
## 3、自动配置原理入门
3.1、引导加载自动配置类
- @SpringBootApplication
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-3db23127b7d44422a2f3985fce156dda.png)
- @SpringBootConfiguration
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-60e47b80ace045f7b343952611a47eb6.png)
- @EnableAutoConfiguration(重点)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-1c4f469bd392425195c4a86843f15b4d.png)
1.@AutoConfigurationPackage
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-e420404e95334ec58fc99a178aba3849.png)
1.1@Import({Registrar.class}) -->Registrar (把启动类的包下面的所有都导入组件)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-c3f9ba3bbe4d42dcbe31b7583087ebe4.png)
2.@Import({AutoConfigurationImportSelector.class})
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-7a103b0711684c17ba09b6166592602a.png)
这个方法:
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-37a26137f71944efb7fcd4bef971dd44.png)
```java
1、利用getAutoConfigurationEntry(annotationMetadata);给容器中批量导入一些组件
2、调用List<String> configurations = getCandidateConfigurations(annotationMetadata, attributes)获取到所有需要导入到容器中的配置类
3、利用工厂加载 Map<String, List<String>> loadSpringFactories(@Nullable ClassLoader classLoader)；得到所有的组件
4、从META-INF/spring.factories位置来加载一个文件。
	默认扫描我们当前系统里面所有META-INF/spring.factories位置的文件
    spring-boot-autoconfigure-2.3.4.RELEASE.jar包里面也有META-INF/spring.factories
    
```
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-02580b27713b4289951f71cef3333ef3.png)
配置127个配置类
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-cc9f7e8397b8431da205c8ae3a1a0211.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-2efb3846198842e3926b8f9990726f4c.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-09d2e177c1364859aa71c4004db64380.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-6c3323b5e355425794bd21999f5bbc34.png)
条件装配规则 按需配置;
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-3884a6839bd643f9bc075969d8d86538.png)

- @ComponentScan
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-74ab0fde146b4b6680e5ce3324aae26d.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-bc47467f575b4df481e3e1e27ec728dd.png)
##### 实例: SpringMVC的自动配置
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-137b7fd7669f4bdeb244338d0fdccd78.png)
配置类:和SpringMWC的配置 都在这个类里面写好了
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-320e2741092f458c87402aad4f87337e.png)
DispectServlet 放入容器中:
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-8b9c1ce6f0c94bffa43a180ea87eaa44.png)
文件上传;
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-0ab7722cb82d4240b646abd4b8c1b8a8.png)
字符编码问题:
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-9f12467300bb4e8296c30412098ff731.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-cd030bda00a74d4c9fd0eda4c6f02e7b.png)
**总结**:
● SpringBoot先加载所有的自动配置类  xxxxxAutoConfiguration
● 每个自动配置类按照**条件进行生效**，默认都会绑定配置文件指定的值。xxxxProperties里面拿。xxxProperties和配置文件进行了绑定
● 生效的配置类就会给容器中装配很多组件
● 只要容器中有这些组件，相当于这些功能就有了
● 定制化配置 
  ○ 用户直接自己@Bean替换底层的组件
  ○ 用户去看这个组件是获取的配置文件什么值就去修改。
xxxxxAutoConfiguration ---> 组件  ---> xxxxProperties里面拿值  ----> application.properties(.yum)
### 3.4、最佳实践
● 引入场景依赖
  ○ https://docs.spring.io/spring-boot/docs/current/reference/html/using-spring-boot.html#using-boot-starter
● 查看自动配置了哪些（选做）
  ○ 自己分析，引入场景对应的自动配置一般都生效了
  ○ 配置文件中debug=true开启自动配置报告。
Negative（不生效）\Positive（生效）
● 是否需要修改
  ○ 参照文档修改配置项
    ■ https://docs.spring.io/spring-boot/docs/current/reference/html/appendix-application-properties.html#common-application-properties
    ■ 自己分析。xxxxProperties绑定了配置文件的前缀。
  ○ 自定义加入或者替换组件
    ■ @Bean、@Component。。。
  ○ 自定义器  XXXXXCustomizer  自定义器;

## 4、开发小技巧
### 4.1、Lombok
简化JavaBean开发
```java
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
        </dependency>


idea中搜索安装lombok插件
```
有版本可以 不写版本;
```java
@ Data 自动 生成 get set 方法:
@toString   自动生成ToString 方法
@AllArgsConstructor  (有参)
@NOArgConstructor   (无参)
@EqualsAndHashCode  (hash值)
@SLf4j  (引入日志 )
```
### 4.2、dev-tools
项目或者页面修改以后：Ctrl+F9； 热更新 ;
前端 后端  都会重新加载;
```java
  <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-devtools</artifactId>
            <optional>true</optional>
        </dependency>
```
### 4.3、Spring Initailizr（项目初始化向导）

0、选择我们需要的开发场景
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-43650f41797845afae306e49da66766e.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-01f74f6922b44633a8dd9837bccaa4e5.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-24e78dee822747cdbbc7399d3ffe04f4.png)

