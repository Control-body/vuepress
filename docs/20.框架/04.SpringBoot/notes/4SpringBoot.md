---
title: SpringBoot(4)-Servlet原生组件 内嵌Servlet  定制化原理
tags:
- Servlet原生组件
- 内嵌Servlet
- 定制化原理
---

# 9、Web原生组件注入（Servlet、Filter、Listener）
## 1、使用Servlet API
### 1.必须在启动类上加：
- @ServletComponentScan(basePackages = "com.atguigu.admin") :
指定原生Servlet组件都放在那里 
### 2.写对应的原生组件
服务请求：
- @WebServlet(urlPatterns = "/my")：
效果：直接响应，没有经过Spring的拦截器？
拦截器：
- @WebFilter(urlPatterns={"/css/*","/images/*"})
单* 是Servlet的写法 ，**是Spring家的写法；
监听器：
- @WebListener

### 问题： 直接响应，没有经过Spring的拦截器？
扩展：DispatchServlet 如何注册进来
● 容器中自动配置了  DispatcherServlet  属性绑定到 WebMvcProperties；对应的配置文件配置项是 spring.mvc。
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-cc0403b059854e7089e3e117a03d5ab9.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-86dd9afb34434ee18251edc9ad05e0d8.png)
```java
通过 ServletRegistrationBean<DispatcherServlet> 把 DispatcherServlet  配置进来。
```
● 默认映射的是 / 路径 可以通过 
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-8b17cf6d79ca412ea87d5fa643182f9f.png)
Tomcat-Servlet；
多个Servlet都能处理到同一层路径，精确优选原则
A： /my/
B： /my/1

## 2、使用RegistrationBean （推荐使用这种方式）
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-b6b90d69b6cb4f77a59da2a3cc839fcb.png)
ServletRegistrationBean, FilterRegistrationBean, and ServletListenerRegistrationBea
**写一个配置类 直接将Servlet注入到容器中；**
**// (proxyBeanMethods = true)：保证依赖的组件始终是单实例的
@Configuration(proxyBeanMethods = true)**
```java
@Configuration
public class MyRegistConfig {

    @Bean
    public ServletRegistrationBean myServlet(){
        MyServlet myServlet = new MyServlet();

        return new ServletRegistrationBean(myServlet,"/my","/my02");
    }


    @Bean
    public FilterRegistrationBean myFilter(){

        MyFilter myFilter = new MyFilter();
//        return new FilterRegistrationBean(myFilter,myServlet());
        FilterRegistrationBean filterRegistrationBean = new FilterRegistrationBean(myFilter);
        filterRegistrationBean.setUrlPatterns(Arrays.asList("/my","/css/*"));
        return filterRegistrationBean;
    }

    @Bean
    public ServletListenerRegistrationBean myListener(){
        MySwervletContextListener mySwervletContextListener = new MySwervletContextListener();
        return new ServletListenerRegistrationBean(mySwervletContextListener);
    }
}
```
# 10、嵌入式Servlet容器
## 1、切换嵌入式Servlet容器
● 默认支持的webServer
  ○ Tomcat, Jetty, or Undertow
  ○ ServletWebServerApplicationContext 容器启动寻找ServletWebServerFactory 并引导创建服务器
● 切换服务器


● 原理
  ○ SpringBoot应用启动发现当前是Web应用。web场景包-导入tomcat
  ○ web应用会创建一个web版的ioc容器 ServletWebServerApplicationContext 
  ○ ServletWebServerApplicationContext  启动的时候寻找 ServletWebServerFactory（Servlet 的web服务器工厂---> Servlet 的web服务器）  
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-b69d4ed0592c478c9c0978da5318b7e2.png)
  ○ SpringBoot底层默认有很多的WebServer工厂；TomcatServletWebServerFactory, JettyServletWebServerFactory, or UndertowServletWebServerFactory （底层已经自动配置好了）
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-7bbf8800598f40f897d4904821421f21.png)
```java
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
    <exclusions>
        <exclusion>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-tomcat</artifactId>
        </exclusion>
    </exclusions>
</dependency>
```
上面就是创建引入了 Tomcat的场景， 导入tomcat类 ，让tomcat的工厂类生效；
  ○ 底层直接会有一个自动配置类。ServletWebServerFactoryAutoConfiguration
  ○ ServletWebServerFactoryAutoConfiguration导入了ServletWebServerFactoryConfiguration（配置类）
  ○ ServletWebServerFactoryConfiguration 配置类 根据动态判断系统中到底导入了那个Web服务器的包。（默认是web-starter导入tomcat包），容器中就有 TomcatServletWebServerFactory
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-5ec67215e9094006904a452faee51290.png)
当导入其他的类的时候 就导入其他的 工厂类；
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-ce508071a8904075bec7429453f4c431.png)
  ○ TomcatServletWebServerFactory 创建出Tomcat服务器并启动；TomcatWebServer 的**构造器**拥有初始化方法initialize---this.tomcat.start(); 在创建的时候就会启动！！！
  ○ 内嵌服务器，就是手动把启动服务器的代码调用（tomcat核心jar包存在）
## 2.当想换其他的服务器的时候
就需要 在引入 web—start的时候进行排除tomcat
引入其他的 服务器；
```java
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
    <exclusions>
        <exclusion>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-tomcat</artifactId>
        </exclusion>
    </exclusions>
</dependency>
引入其他的依赖；
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-undertow</artifactId>
</dependency>
```

## 3、定制Servlet容器
```java
实现  WebServerFactoryCustomizer<ConfigurableServletWebServerFactory> 
```
  ○ 把配置文件的值和ServletWebServerFactory 进行绑定
方式一：● 修改配置文件 server.xxx
方式二：● 直接自定义 ConfigurableServletWebServerFactory 

xxxxxCustomizer：定制化器，可以改变xxxx的默认规则
```java
import org.springframework.boot.web.server.WebServerFactoryCustomizer;
import org.springframework.boot.web.servlet.server.ConfigurableServletWebServerFactory;
import org.springframework.stereotype.Component;

@Component
public class CustomizationBean implements WebServerFactoryCustomizer<ConfigurableServletWebServerFactory> {

    @Override
    public void customize(ConfigurableServletWebServerFactory server) {
        server.setPort(9000);
    }

}
```
# 11、定制化原理
Web应用 编写一个配置类实现 WebMvcConfigurer 即可定制化web功能；+ @Bean给容器中再扩展一些组件(使用很多) 一般是使用这个 来进行定制化配置；
## 1、定制化的常见方式 
● 修改配置文件；
● xxxxxCustomizer；
● 编写自定义的配置类   xxxConfiguration；+ @Bean替换、增加容器中默认组件；视图解析器  异常解析器 （添加组件） 
● Web应用 编写一个配置类实现 WebMvcConfigurer 即可定制化web功能；+ @Bean给容器中再扩展一些组件(使用很多)
```java
@Configuration
public class AdminWebConfig implements WebMvcConfigurer
```
● @EnableWebMvc + WebMvcConfigurer —— @Bean  可以全面接管SpringMVC，所有规则全部自己重新配置； 实现定制和扩展功能
  ○ 原理
  ○ 1、WebMvcAutoConfiguration 是 默认的SpringMVC的自动配置功能类。静态资源、欢迎页.....一堆的自动配置
  ○ 2、一旦使用 @EnableWebMvc（符合注解 ）注解 。会 @Import(DelegatingWebMvcConfiguration.class)导入这个类
  ○ 3、DelegatingWebMvcConfiguration 的 作用，**只保证SpringMVC最基本的使用**
    ■ 把所有系统中的 WebMvcConfigurer 拿过来。所有功能的定制都是这些 WebMvcConfigurer  合起来一起生效
    ■ 自动配置了一些非常底层的组件（映射器等 ）。RequestMappingHandlerMapping、这些组件依赖的组件都是从容器中获取
    ■ public class DelegatingWebMvcConfiguration extends WebMvcConfigurationSupport 
  ○ 4、WebMvcAutoConfiguration 里面的配置要能生效 必须  @ConditionalOnMissingBean(WebMvcConfigurationSupport.class) 没有这个组件WebMvcConfigurationSupport这个类，是DelegatingWebMvcConfiguration继承的 
  ○ 5、@EnableWebMvc  导致了 WebMvcAutoConfiguration  没有生效。
● ... ...

## 2、原理分析套路
场景starter - xxxxAutoConfiguration - 导入xxx组件 - 绑定xxxProperties -- 绑定配置文件项 
