---
title: SpringMVC-拦截器
tags:
- 拦截器
- 过滤器
---
## 一.拦截器概述
### 学习目标：
- 了解拦截器的配置
- 熟悉拦截器的执行流程
- 掌握拦截器的使用
###  1.1、拦截器的定义
类似于Servlet中的**Filter**,对用户的请求作处理。比如权限验证、判断用户是否登陆了。
使用SpringMVC的拦截器需要实现**HandlerInterceptor**接口。
拦截器和 过滤器的 区别 ：
  过滤器需要进行静态资源的放行 在web.里面配置过滤器
```java
<!--    // 字符过滤器 防止乱码-->

    <filter>
        <filter-name>encoding</filter-name>
        <filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class>
        <init-param>
            <param-name>encoding</param-name>
            <param-value>utf-8</param-value>
        </init-param>
    </filter>
    <filter-mapping>
        <filter-name>encoding</filter-name>
        <url-pattern>/*</url-pattern>
    </filter-mapping>
```

  拦截器是自带有静态资源过滤 （是AOP的思想的 应用 拦截器只有框架才有）

### 1.2 如何自定义一个 拦截器
- 单个拦截器的执行流程
定义CustomInterceptor拦截器 （只需要继承下HandlerInterceptor 就扣就可以自定义一个拦截器）
```java
public class CustomInterceptor implements HandlerInterceptor {
    public boolean preHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o) throws Exception {
        System.out.println("preHandle..........CustomInterceptor");
        //对拦截请求进行放行
        return true;
    }
    public void postHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, ModelAndView modelAndView) throws Exception {
        System.out.println("postHandle...........CustomInterceptor");
    }
    public void afterCompletion(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, Exception e) throws Exception {
        System.out.println("afterCompletion.......CustomInterceptor");
    }
}
```
### 1.3实验：
创建一个 SpringMVC的项目：
 先创建一个 maven项目：
#### 1.3.1.导入依赖：
```java
<dependencies>
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <version>1.18.22</version>
        </dependency>
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.12</version>
        </dependency>
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-webmvc</artifactId>
            <version>5.1.9.RELEASE</version>
        </dependency>
        <dependency>
            <groupId>javax.servlet</groupId>
            <artifactId>servlet-api</artifactId>
            <version>2.5</version>
        </dependency>
        <dependency>
            <groupId>javax.servlet.jsp</groupId>
            <artifactId>jsp-api</artifactId>
            <version>2.2</version>
        </dependency>
        <dependency>
            <groupId>javax.servlet</groupId>
            <artifactId>jstl</artifactId>
            <version>1.2</version>
        </dependency>
        <dependency>
            <groupId>javax.servlet</groupId>
            <artifactId>servlet-api</artifactId>
            <version>2.5</version>
        </dependency>
        <dependency>
            <groupId>javax.servlet.jsp</groupId>
            <artifactId>jsp-api</artifactId>
            <version>2.2</version>
        </dependency>
    </dependencies>
```
#### 1.3.2.加入web模块
在web.xml中配置Spring 容器：过滤器等等 
```java
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
         version="4.0">
<!--    SpringMVC 的 DispatcherServlet 服务配上-->
    <servlet>
        <servlet-name>springmvc</servlet-name>
        <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
        <init-param>
            <param-name>contextConfigLocation</param-name>
            <param-value>classpath:applicationContext.xml</param-value>
        </init-param>
        <load-on-startup>1</load-on-startup>
    </servlet>
    <servlet-mapping>
        <servlet-name>springmvc</servlet-name>
        <url-pattern>/</url-pattern>
    </servlet-mapping>


    <!--    // 字符过滤器 防止乱码-->
    <filter>
        <filter-name>encoding</filter-name>
        <filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class>
        <init-param>
            <param-name>encoding</param-name>
            <param-value>utf-8</param-value>
        </init-param>
    </filter>
    <filter-mapping>
        <filter-name>encoding</filter-name>
        <url-pattern>/*</url-pattern>
    </filter-mapping>
</web-app>
```
#### 1.3.3.创建 Application.xml Spring容器的 配置文件
```java
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:mvc="http://www.springframework.org/schema/mvc"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
http://www.springframework.org/schema/beans/spring-beans.xsd
http://www.springframework.org/schema/context
http://www.springframework.org/schema/context/spring-context.xsd
http://www.springframework.org/schema/mvc
https://www.springframework.org/schema/mvc/spring-mvc.xsd">
    <!--    三个 东西 注解驱动  视图解析器  静态资源滤-->
    <!--    绑定Controller包 这个包下面的 所有的 添加注解的类 都交给 IOC 容器-->
    <context:component-scan base-package="com.liubin.controller"/>

    <!--    json乱码 配置 -->
    <mvc:annotation-driven>
        <mvc:message-converters register-defaults="true">
            <bean class="org.springframework.http.converter.StringHttpMessageConverter">
                <constructor-arg value="UTF-8"/>
            </bean>
            <bean class="org.springframework.http.converter.json.MappingJackson2HttpMessageConverter">
                <property name="objectMapper">
                    <bean class="org.springframework.http.converter.json.Jackson2ObjectMapperFactoryBean">
                        <property name="failOnEmptyBeans" value="false"/>
                    </bean>
                </property>
            </bean>
        </mvc:message-converters>
    </mvc:annotation-driven>


    <bean class="org.springframework.web.servlet.handler.BeanNameUrlHandlerMapping"/>
    <bean class="org.springframework.web.servlet.mvc.SimpleControllerHandlerAdapter"/>

    <!--    注解驱动-->

    <!--    静态资源滤-->
    <mvc:default-servlet-handler/>
    <!--    视图解析器-->
    <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver"
          id="InternalResourceViewResolver">
        <property name="prefix" value="/WEB-INF/jsp/"/>
        <property name="suffix" value=".jsp"/>
    </bean>
</beans>
```
spring 配置文件 包含 三个部分 （静态资源过滤 ，注解驱动 ， 视图解析器 ）
#### 1.3.4.创建 包 测试
写一个 test controller 测试 Spring web 成功
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-c74f8cffc077490493e1b05aa40eb6bc.png)
虽然他继承拦截器接口 没有强制你去实现什么 但是我们必须实现 （拦截器 和 过滤器 都会 有请求 和相应 参数 ）
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-f478fe314c4041a4a7a0bfd757412915.png)!
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-d974c5678225434a8a16e967e8328672.png)
拦截器的 原理就是 AOP原理： 也可以自己拿 Spring 来实现
#### 1.3.5登陆是否成功（问题）
 是根据Session来判断的  但是在判断的时候出现 一个问题就是当sesion ！=“” 的时候过滤器不生效 
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-10f03e50025c4e0bae1fd9f914fb2477.png)
在request里面找到session 然后找到 attribute （属性）
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-67e5f826e0094199a6301c9bc2d173a6.png)
在写if(session.getAttribute("username")!=""){
            return true;
        }
的时候null确实不等于 “” 所有进去 
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-048db30c4dba43639bd2e58a9ad03b5c.png)
拦截器 是SpringMVC里面的 然而 Filter tomcat支持的都可以 用


## 二.自定义Filter
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-022b5d6844224026a2f7ec3835aa700a.png)
**Filter 是交给 web做 然而 拦截器是交给 Spirng 来做**
不过实现的方式有以下几类：

        (1) 直接实现Filter，这一类过滤器只有CompositeFilter；
    
        (2) 继承抽象类GenericFilterBean，该类实现了javax.servlet.Filter，这一类的过滤器只有一个，即DelegatingFilterProxy；
    
        (3) 继承抽象类OncePerRequestFilter，该类为GenericFilterBean的直接子类，这一类过滤器包括CharacterEncodingFilter、HiddenHttpMethodFilter、HttpPutFormContentFilter、RequestContextFilter和ShallowEtagHeaderFilter；
    
        (4) 继承抽象类AbstractRequestLoggingFilter，该类为OncePerRequestFilter的直接子类，这一类过滤器包括CommonsRequestLoggingFilter、Log4jNestedDiagnosticContextFilter和ServletContextRequestLoggingFilter。

过滤器放在容器结构的什么位置？

过滤器放在web资源之前，可以在请求抵达它所应用的web资源(可以是一个Servlet、一个Jsp页面，甚至是一个HTML页面)之前截获进入的请求，并且在它返回到客户之前截获输出请求。Filter：用来拦截请求，处于客户端与被请求资源之间，目的是重用代码。Filter链，在web.xml中哪个先配置，哪个就先调用。在filter中也可以配置一些初始化参数。

Java中的Filter 并不是一个标准的Servlet ，它不能处理用户请求，也不能对客户端生成响应。 主要用于对HttpServletRequest 进行预处理，也可以对HttpServletResponse 进行后处理，是个典型的处理链。 

### 2.1 Filter 有如下几个种类：

-  用户授权的Filter: Filter 负责检查用户请求，根据请求过滤用户非法请求。 

-  日志Filter: 详细记录某些特殊的用户请求。 

-  负责解码的Filter: 包括对非标准编码的请求解码。 

-  能改变XML 内容的XSLTFilter 等。 

 

### 2.2 Filter 有如下几个用处：

-  在HttpServletRequest 到达Servlet 之前，拦截客户的HttpServletRequest 。 

-  根据需要检查HttpServletRequest ，也可以修改HttpServletRequest 头和数据。 

-  在HttpServletResponse 到达客户端之前，拦截HttpServletResponse 。 

-  根据需要检查HttpServletResponse ，可以修改HttpServletResponse 头和数据。

 

### 2.3创建一个Filter 只需两个步骤: 
(1)创建Filter 处理类: 

(2)在web.xml 文件中配置Filter 。

 

创建Filter 必须实现javax.servlet.Filter 接口，在该接口中定义了三个方法。 
• void init(FilterConfig config): 用于完成Filter 的初始化。 
• void destroy(): 用于Filter 销毁前，完成某些资源的回收。 
• void doFilter(ServletRequest request, ServletResponse response,FilterChain chain): 实现过滤功能，该方法就是对每个请求及响应增加的额外处理。 

过滤器Filter也具有生命周期：init()->doFilter()->destroy()，由部署文件中的filter元素驱动。
### 2.4 / 和 /* /** 区别
/** 是下面的所有请求 
/* 文件下的某个文件

