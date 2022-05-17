---
title: SpringBoot(7)-SpringBoot原理解析
---
# 1、Profile功能
为了方便多环境适配，springboot简化了profile功能。
## 1、application-profile功能
- 默认配置文件  application.yaml；任何时候都会加载
- 指定环境配置文件  application-{env}.yaml
- 激活指定环境
  配置文件激活
  命令行激活 ：java -jar xxx.jar --spring.profiles.active=prod  --person.name=haha  可以改配置文件中的任何信息；
    -  修改配置文件的任意值，命令行优先
-  默认配置与环境配置同时生效
- 同名配置项，profile配置优先 
指定激活环境，默认配置文件和指定环境的配置文件都会生效；
## 2、@Profile条件装配功能
```java
@Configuration(proxyBeanMethods = false)
@Profile("production") 
public class ProductionConfiguration {

    // ...

}

@Configuration
public class Myconfig {
    @Profile("prod")//prod测试环境的
    @Bean
    public Color red(){
        return new Color();
    }

    @Bean
    @Profile("test")  //test测试环境的
    public Color green(){
        return new Color();
    }
}
```
## 2、外部化配置
### 1、外部配置源
常用：Java属性文件、YAML文件、环境变量、命令行参数；
### 2、配置文件查找位置
都是Applicaton.properties
(1) classpath 根路径  java 和 resource 都是类路径下
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-be0160d5774446b2bee0e04cb63b3be7.png)
(2) classpath 根路径下config目录
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-9c40f006ad184906a3f690460e944547.png)
(3) jar包当前目录
(4) jar包当前目录的config目录
(5) /config子目录的直接子目录 （只有在linux下面才会生效）
### 3、配置文件加载顺序：
1. 　当前jar包内部的application.properties和application.yml
2. 　当前jar包内部的application-{profile}.properties 和 application-{profile}.yml
3. 　引用的外部jar包的application.properties和application.yml
4. 　引用的外部jar包的application-{profile}.properties 和 application-{profile}.yml
### 4、指定环境优先，外部优先，后面的可以覆盖前面的同名配置项
## 3、自定义starter



### 1、starter启动原理
- starter-pom引入 autoconfigurer 包
  ![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-d8b7a5c02ca94ca9bf80bc192a92eb71.png)
  
1.创建两个model
  start是一个maven项目 没有任何源码
  ![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-990c902d4fd7476684951cd82f6db37c.png)
  autoconfig是用SpringBoot的初始化向导做的 删除多余的，只留下spring-boot-starter
  ![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-27851c0da2d74932bf1a2bc383031c0f.png)
2.创建一个SpringBoot的项目（带WEB）
  ![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-e9c8aeebf6f74e17b0d4ab91862ebcd9.png)
3.引入我们的START
  ![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-eb98c70e07c647c3b206d6e41fd69836.png)
4.流程：
  导入start---》会导入xxxapplicationautoconfigration---》自动导入一些bean---》bean和Properties绑定

## 4、SpringBoot原理
Spring原理【Spring注解】、SpringMVC原理、自动配置原理、SpringBoot原理
## 1、SpringBoot启动过程
### 1.1 创建 SpringApplication （组件的创建，把需要的组件读取进来）
保存一些信息。
判定当前应用的类型。ClassUtilsServlet
####  bootstrappers：初始启动引导器
```java
（List< Bootstrapper>）：去**spring.factories**文件中找 org.springframework.boot.Bootstrapper
```
####  找 ApplicationContextInitializer；去**spring.factories**找 ApplicationContextInitializer

```java
List<ApplicationContextInitializer<?>> initializers(初始化启动器)
```
####   找 ApplicationListener  ；应用监听器。去**spring.factories**找 ApplicationListener
```java
List<ApplicationListener<?>> listeners
```




### 1.2 运行 SpringApplication
1. StopWatch
2. 记录应用的启动时间
3. 创建引导上下文（Context环境）createBootstrapContext()
   3.1 获取到所有之前的 bootstrappers（初始启动引导器） 挨个执行 intitialize() 来完成对引导启动器上下文环境设置
   3.2 让当前应用进入headless模式。java.awt.headless（自力更生模式）
4. 获取所有 RunListener（运行监听器）【为了方便所有Listener进行事件感知】
   4.1 getSpringFactoriesInstances 去spring.factories找 SpringApplicationRunListener. 保存到RunListener，
   4.2 遍历 SpringApplicationRunListener 调用 starting 方法；
   4.3 相当于通知所有感兴趣系统正在启动过程的人，项目正在 starting。
5. 保存命令行参数；ApplicationArguments
6. 准备环境 prepareEnvironment（）;
   6.1 返回或者创建基础环境信息对象。StandardServletEnvironment
   6.2 配置环境信息对象。
   6.2.1 读取所有的配置源的配置属性值。
   6.3 绑定环境信息
   6.4 监听器调用 listener.environmentPrepared()；通知所有的监听器当前环境准备完成
7. 创建IOC容器（createApplicationContext（））
   7.1 根据项目类型（Servlet）创建容器，
   7.2 当前会创建 AnnotationConfigServletWebServerApplicationContext
8. 准备ApplicationContext IOC容器的基本信息   prepareContext()
   8.1 保存环境信息
   8.2 IOC容器的后置处理流程。
   8.3 应用初始化器；applyInitializers；
   8.3.1 遍历所有的 ApplicationContextInitializer 。调用 initialize.。来对ioc容器进行初始化扩展功能
   8.3.2  遍历所有的 listener 调用 contextPrepared。EventPublishRunListenr；通知所有的监听器contextPrepared准备好了（事件发布的监听器）
   8.4 所有的监听器 调用 contextLoaded。通知所有的监听器 contextLoaded；（通知监听器准备工作好了）
9. 刷新IOC容器。refreshContext
   9.1 创建容器中的所有组件（Spring注解）
10. 容器刷新完成后工作？afterRefresh
11. 所有监听器调用 listeners.started(context); 通知所有的监听器 started（准备好了）
12. 调用所有runners；callRunners()
    12.1 获取容器中的 ApplicationRunner
    12.2 获取容器中的  CommandLineRunner
    12.3 合并所有runner并且按照@Order进行排序
    12.4 遍历所有的runner。调用 run 方法
13. 如果以上有异常，
    13.1 调用Listener 的 failed
14. 调用所有监听器的 running 方法  listeners.running(context); 通知所有的监听器 running
15. running如果有问题。继续通知 failed 。调用所有 Listener 的 failed；通知所有的监听器 failed；
16. 返回IOC容器；
## 2.自定义底层组件
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-91e7f09acc094ff3ba8accb8d358734a.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-1a27b3fe5702435c974198d7f92effce.png)
黄色的都是可以自定义的，有些是在spring.factories读要建立文件，Spring容器读取的要加注解；
spring.factories：
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-65e60b7d9fe9404ea541dfe80760d71f.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-477097976b394892a37be53c77b382d1.png)

Spring容器读取的要加注解

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-b580fa53122244d39d8ca3be7360faea.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-55e1ff8033874a21827a0bea39fb0678.png)