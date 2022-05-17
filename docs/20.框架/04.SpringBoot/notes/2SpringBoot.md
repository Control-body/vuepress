---
title: SpringBoot(2)-属性解析 内容协商  Thymeleaf
tags:
- 属性解析
- 内容协商
- Thymeleaf
---
# 核心功能
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-262924ac9aa340e5b7f6fe42ca5f0eea.png)
## 04、配置文件
### 1、文件类型
1.1、properties同以前的properties用法
1.2、yaml1.2.1、简介YAML 是 "YAML Ain't Markup Language"（YAML 不是一种标记语言）的递归缩写。在开发的这种语言时，YAML 的意思其实是："Yet Another Markup Language"（仍是一种标记语言）。 非常适合用来做以数据为中心的配置文件
1.2.2、基本语法key: value；kv之间有空格大小写敏感使用缩进表示层级关系缩进不允许使用tab，只允许空格缩进的空格数不重要，只要相同层级的元素左对齐即可'#'表示注释字符串无需加引号，如果要加，''与""表示字符串内容 会被 转义/不转义
1.2.3、数据类型
- 字面量：单个的、不可再分的值。date、boolean、string、number、null
k: v
- 对象：键值对的集合。map、hash、set、object 
```java
行内写法：  k: {k1:v1,k2:v2,k3:v3} Json的写法 不写空格也可以
#或
k: 
  k1: v1
  k2: v2
  k3: v3

```
- 数组：一组按次序排列的值。array、list、queue
```java
行内写法：  k: [v1,v2,v3]
#或者
k:
 - v1
 - v2
 - v3

```
### 例子:
```java
@Data
public class Person {
	
	private String userName;
	private Boolean boss;
	private Date birth;
	private Integer age;
	private Pet pet;
	private String[] interests;
	private List<String> animal;
	private Map<String, Object> score;
	private Set<Double> salarys;
	private Map<String, List<Pet>> allPets;
}

@Data
public class Pet {
	private String name;
	private Double weight;
}
```
```java
# yaml表示以上对象 下面对用属性的名字;
person:
  userName: zhangsan
  boss: false
  birth: 2019/12/12 20:12:33
  age: 18
  pet: 
    name: tomcat
    weight: 23.4
  interests: [篮球,游泳]
  animal: 
    - jerry
    - mario
  score:
    english: 
      first: 30
      second: 40
      third: 50
    math: [131,140,148]
    chinese: {first: 128,second: 136}
  salarys: [3999,4999.98,5999.99]
  allPets:
    sick:
      - {name: tom}
      - name: jerry
        weight: 47   // 和上面一样的 
    health: [{name: mario,weight: 47}]
```
当连接数据库的时候必须 要配合 url 等连接信息;
yum 是不需要单双引号的 ; 但是 Springboot 还是优先读取Priperties文件 ,当有了Properties   .yam文件就不生效了; 单引号会转译, 双引号不会转译的 


### 2、配置提示
自定义的类 和 配置文件绑定一般没有提示。
```java
<dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-configuration-processor</artifactId>
            <optional>true</optional>
        </dependency>


 <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
                <configuration> 
                    <excludes> //在打包的时候 取出这个配置;
                        <exclude>
                            <groupId>org.springframework.boot</groupId>
                            <artifactId>spring-boot-configuration-processor</artifactId>
                        </exclude>
                    </excludes>
                </configuration>
            </plugin>
        </plugins>
    </build>
```
自己自定义的类 就会有提示了;
## 05 WEB开发
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-af930cb023b34e7ea24d41b7a0b13cad.png)

### 1、SpringMVC自动配置概览
Spring Boot provides auto-configuration for Spring MVC that works well with most applications.(大多场景我们都**无需自定义配置**)
The auto-configuration adds the following features on top of Spring’s defaults:
● Inclusion of ContentNegotiatingViewResolver and BeanNameViewResolver beans.
  ○ 内容协商视图解析器和BeanName视图解析器
● Support for serving static resources, including support for WebJars (covered later in this document)).
  ○ 静态资源（包括webjars）
● Automatic registration of Converter, GenericConverter, and Formatter beans.
  ○ 自动注册 Converter，GenericConverter，Formatter 
● Support for HttpMessageConverters (covered later in this document).
  ○ 支持 HttpMessageConverters （后来我们配合内容协商理解原理）
● Automatic registration of MessageCodesResolver (covered later in this document).
  ○ 自动注册 MessageCodesResolver （国际化用）
● Static index.html support.
  ○ 静态index.html 页支持
● Custom Favicon support (covered later in this document).
  ○ 自定义 Favicon (图标)  
● Automatic use of a ConfigurableWebBindingInitializer bean (covered later in this document).
  ○ 自动使用 ConfigurableWebBindingInitializer ，（DataBinder负责将请求数据绑定到JavaBean上 数据绑定 ）

不用@EnableWebMvc注解。使用 @Configuration + WebMvcConfigurer 自定义规则

声明 WebMvcRegistrations 改变默认底层组件

使用 @EnableWebMvc+@Configuration+DelegatingWebMvcConfiguration 全面接管SpringMVC

### 2、简单功能分析
#### 2.1、静态资源访问
1、静态资源目录
只要静态资源放在类路径下： called /static (or /public or /resources or /META-INF/resources
访问 ： 当前项目根路径/ + 静态资源名 

原理： 静态映射/**。
请求进来，先去找Controller看能不能处理。不能处理的所有请求又都交给静态资源处理器。静态资源也找不到则响应404页面

改变默认的静态资源路径
```java
spring:
  mvc:
    static-path-pattern: /res/**  // 加前缀

  resources:
    static-locations: [classpath:/haha/] //改变静态地址的位置 数组的写法;
```
原理:
静态资源 拦截的是 /** (就是拦截所有的请求)
请求进来先去找 Controlller 然后在去访问 静态请求 在找不到 就是 404

为了以后 拦截器 拦截 就给静态页面加 前缀
2、静态资源访问前缀
默认无前缀
```java
spring:
  mvc:
    static-path-pattern: /res/**
```
当前项目 + static-path-pattern + 静态资源名 = 静态资源文件夹下找
3、webjar
自动映射 /webjars/**  映入了Query等包
https://www.webjars.org/
```java

        <dependency>
            <groupId>org.webjars</groupId>
            <artifactId>jquery</artifactId>
            <version>3.5.1</version>
        </dependency>
```
访问地址：http://localhost:8080/webjars/jquery/3.5.1/jquery.js   后面地址要按照依赖里面的包路径
#### 2.2、欢迎页支持
方式一: 静态资源路径下  index.html
  ○ 可以配置静态资源路径
  ○ 但是不可**以配置静态资源的访问前缀**。否则导致 index.html不能被默认访问
```java
spring:
#  mvc:
#    static-path-pattern: /res/**   这个会导致welcome page功能失效

  resources:
    static-locations: [classpath:/haha/]
```
方式二: controller能处理/index
#### 2.3、自定义 Favicon
favicon.ico 放在静态资源目录下即可
配置 有静态 前缀的时候 也会有问题  (要去调 静态页面的前缀)
#### 2.4、静态资源配置原理
● SpringBoot启动默认加载  xxxAutoConfiguration 类（自动配置类）
● SpringMVC功能的自动配置类 WebMvcAutoConfiguration，生效
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-8240da20d7d54026bf5e7d465877c6bc.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-ddd0b03650a64df992b0526a61120744.png)
配置了啥??
这个是重点类:
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-7c88c1b8c8064387b27e9002876294ce.png)
配置文件的相关属性和xxx进行了绑定。WebMvcProperties==spring.mvc、ResourceProperties==spring.resources
发现这个配置类只有一个 有参构造器 ,这个构造器的参数都会从容器中去找
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-53b140c7e44c464b9bc85b1c9638ad05.png)
```java
//有参构造器所有参数的值都会从容器中确定
//ResourceProperties resourceProperties；获取和spring.resources绑定的所有的值的对象
//WebMvcProperties mvcProperties 获取和spring.mvc绑定的所有的值的对象
//ListableBeanFactory beanFactory Spring的beanFactory
//HttpMessageConverters 找到所有的HttpMessageConverters
//ResourceHandlerRegistrationCustomizer 找到 资源处理器的自定义器。=========
//DispatcherServletPath  
//ServletRegistrationBean   给应用注册Servlet、Filter....
```
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-0c87c3e1dcb746ddb1e89575c7e535c8.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-b5dfc63886e84933964392554ee02b2e.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-0f319eebcc8144f68b3c0b53b0013684.png)


HandlerMapping：处理器映射。保存了每一个Handler能处理哪些请求。
找到就用 反射 调用能处理的方法;
```java
	

	@Bean
		public WelcomePageHandlerMapping welcomePageHandlerMapping(ApplicationContext applicationContext,
				FormattingConversionService mvcConversionService, ResourceUrlProvider mvcResourceUrlProvider) {
			WelcomePageHandlerMapping welcomePageHandlerMapping = new WelcomePageHandlerMapping(
					new TemplateAvailabilityProviders(applicationContext), applicationContext, getWelcomePage(),
					this.mvcProperties.getStaticPathPattern());
			welcomePageHandlerMapping.setInterceptors(getInterceptors(mvcConversionService, mvcResourceUrlProvider));
			welcomePageHandlerMapping.setCorsConfigurations(getCorsConfigurations());
			return welcomePageHandlerMapping;
		}

	WelcomePageHandlerMapping(TemplateAvailabilityProviders templateAvailabilityProviders,
			ApplicationContext applicationContext, Optional<Resource> welcomePage, String staticPathPattern) {
		if (welcomePage.isPresent() && "/**".equals(staticPathPattern)) {
            //要用欢迎页功能，必须是/**
			logger.info("Adding welcome page: " + welcomePage.get());
			setRootViewName("forward:index.html");
		}
		else if (welcomeTemplateExists(templateAvailabilityProviders, applicationContext)) {
            // 调用Controller  /index
			logger.info("Adding welcome page template: index");
			setRootViewName("index");
		}
	}

```
要使用 欢迎页的功能 就必须是 /** ;

4、favicon
每个浏览器就会发 当前项目的 /davicon 请求 如果配置 静态资源路径 肯定就找不到


### 3、请求参数处理
#### 0、请求映射
##### 1、rest使用与原理
● @xxxMapping；
● Rest风格支持（使用HTTP请求方式动词来表示对资源的操作）
  ○ 以前：/getUser   获取用户     /deleteUser 删除用户    /editUser  修改用户       /saveUser 保存用户
  ○ 现在： /user    GET-获取用户    DELETE-删除用户     PUT-修改用户      POST-保存用户
  ○ 核心Filter；HiddenHttpMethodFilter
    ■ 用法： 表单method=post，隐藏域 _method=put
    ■ SpringBoot中手动开启
  ○ 扩展：如何把_method 这个名字换成我们自己喜欢的。
```java
 @RequestMapping(value = "/user",method = RequestMethod.GET)
    public String getUser(){
        return "GET-张三";
    }

    @RequestMapping(value = "/user",method = RequestMethod.POST)
    public String saveUser(){
        return "POST-张三";
    }


    @RequestMapping(value = "/user",method = RequestMethod.PUT)
    public String putUser(){
        return "PUT-张三";
    }

    @RequestMapping(value = "/user",method = RequestMethod.DELETE)
    public String deleteUser(){
        return "DELETE-张三";
    }


	@Bean
	@ConditionalOnMissingBean(HiddenHttpMethodFilter.class)
	@ConditionalOnProperty(prefix = "spring.mvc.hiddenmethod.filter", name = "enabled", matchIfMissing = false)
	public OrderedHiddenHttpMethodFilter hiddenHttpMethodFilter() {
		return new OrderedHiddenHttpMethodFilter();
	}

SpringBoot 帮忙定义好了  加一个_method 参数 放在 隐藏参数上
//自定义filter
    @Bean
    public HiddenHttpMethodFilter hiddenHttpMethodFilter(){
        HiddenHttpMethodFilter methodFilter = new HiddenHttpMethodFilter();
        methodFilter.setMethodParam("_m");
        return methodFilter;
    }
```
Rest原理（表单提交要使用REST的时候）
SpringBoot 帮忙定义好了 需要开启  加一个_method 参数 放在 隐藏参数上
方式一: 表单方式:(表单只能是 Post 和 get 方式)
● 表单提交会带上 _method=PUT 
● 请求过来被HiddenHttpMethodFilter拦截
  ○ 请求是否正常，并且是POST
    ■ 获取到_method的值。
    ■ 兼容以下请求；PUT.DELETE.PATCH
    ■ 原生request（post），包装模式requesWrapper重写了getMethod方法，返回的是传入的值。
    ■ 过滤器链放行的时候用wrapper。以后的方法调用getMethod是调用requesWrapper的。
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-c3fe1870149d45b5b7044474665b9d32.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-32d0ac64c37d4340b82e7a2198b6b90f.png)
方式二:Rest使用客户端工具，
● 如PostMan直接发送Put、delete等方式请求，无需Filter。
```java
spring:
  mvc:
    hiddenmethod:
      filter:
        enabled: true   #开启页面表单的Rest功能
```
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-aac86a1bb0814313bfe44a286a3af6ac.png)

##### 2、请求映射原理
SpringBoot的底层还是SpringMvc (dispectServlet)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-cb7096efbf234670badbed62bf059e69.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-806bb40415b944e4a1f0a8b41fb4179f.png)


![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-ead28e7bf40349cead19e7ba6486751e.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-cca7f3247ed04e6ba5b5521dbaea7cf1.png)
RequestMappingHandlerMapping：保存了所有@RequestMapping 和handler的映射规则。
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-77f5d556af0d4be58389e86fee22282b.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-1e607e01e2e947dd87ccbf968da6a70c.png)

所有的请求映射都在HandlerMapping中。
- SpringBoot自动配置欢迎页的 WelcomePageHandlerMapping 。访问 /能访问到index.html；
- SpringBoot自动配置了默认 的 RequestMappingHandlerMapping
- 请求进来，挨个尝试所有的HandlerMapping看是否有请求信息。
- 如果有就找到这个请求对应的handler
- 如果没有就是下一个 HandlerMapping
- 我们需要一些自定义的映射处理，我们也可以自己给容器中放**HandlerMapping**。自定义 HandlerMapping
```java
	protected HandlerExecutionChain getHandler(HttpServletRequest request) throws Exception {
		if (this.handlerMappings != null) {
			for (HandlerMapping mapping : this.handlerMappings) {
				HandlerExecutionChain handler = mapping.getHandler(request);
				if (handler != null) {
					return handler;
				}
			}
		}
		return null;
	}
```
#### cookie被禁用改如何解决
session--->jsessionID--->cookie(保存在浏览器)--->每次发送请求都携带
解决方式:
url重写: /abc;jsession=xxxx  使用 矩阵变量(一般是写Sessinon的)的方式 传递 
#### 定制化SpringMVC的功能:
底层操作;
实现SpringMVC的 半自定义;
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-8ce1822757ea45fe8f6301a2bb86f383.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-e3ab3b95d5f0470d910288eb367e54a1.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-4225e0ad933d43c1b6a425e74a4dc874.png)
#### 1、普通参数与基本注解
#### 1.1、注解：
@PathVariable(对应路径变量的里面的值 )、@RequestHeader (获取请求头)、@RequestAttribute(获取请求域中保存的属性的) 、@RequestParam(请求参数)、 @MatrixVariable(矩阵变量: 以分号分割的是矩阵变量, )、@CookieValue  (后面接受的参数可以写个 Cookie类 、@RequestBody (请求体的数据)
```java
@RestController
public class ParameterTestController {


    //  car/2/owner/zhangsan
    @GetMapping("/car/{id}/owner/{username}")
    public Map<String,Object> getCar(@PathVariable("id") Integer id,
                                     @PathVariable("username") String name,
                                     @PathVariable Map<String,String> pv,
                                     @RequestHeader("User-Agent") String userAgent,
                                     @RequestHeader Map<String,String> header,
                                     @RequestParam("age") Integer age,
                                     @RequestParam("inters") List<String> inters,
                                     @RequestParam Map<String,String> params,
                                     @CookieValue("_ga") String _ga,
                                     @CookieValue("_ga") Cookie cookie){


        Map<String,Object> map = new HashMap<>();

//        map.put("id",id);
//        map.put("name",name);
//        map.put("pv",pv);
//        map.put("userAgent",userAgent);
//        map.put("headers",header);
        map.put("age",age);
        map.put("inters",inters);
        map.put("params",params);
        map.put("_ga",_ga);
        System.out.println(cookie.getName()+"===>"+cookie.getValue());
        return map;
    }
```
@MatrixVariable(矩阵变量: 以分号分割的是矩阵变量, )、
矩阵变量: 
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-9af32ab1d0c64e0c88f4592a26d609b2.png)
```java
    //1、语法： 请求路径：/cars/sell;low=34;brand=byd,audi,yd
    //2、SpringBoot默认是禁用了矩阵变量的功能
    //      手动开启：原理。对于路径的处理。UrlPathHelper进行解析。
    //              removeSemicolonContent（移除分号内容）支持矩阵变量的
    //3、矩阵变量必须有url路径变量才能被解析
    @GetMapping("/cars/{path}")
    public Map carsSell(@MatrixVariable("low") Integer low,
                        @MatrixVariable("brand") List<String> brand,
                        @PathVariable("path") String path){
        Map<String,Object> map = new HashMap<>();

        map.put("low",low);
        map.put("brand",brand);
        map.put("path",path);
        return map;
    }

    // /boss/1;age=20/2;age=10
 //当两个 path中 有重合的时候 
    @GetMapping("/boss/{bossId}/{empId}")
    public Map boss(@MatrixVariable(value = "age",pathVar = "bossId") Integer bossAge,
                    @MatrixVariable(value = "age",pathVar = "empId") Integer empAge){
        Map<String,Object> map = new HashMap<>();

        map.put("bossAge",bossAge);
        map.put("empAge",empAge);
        return map;

    }
```
##### 1.1 注解参数处理原理
所有的请求都是去 Diapectservlet 中 的 deDispech() 方法
● HandlerMapping中找到能处理请求的Handler（Controller.method() ）
● 为当前Handler 找一个适配器 HandlerAdapter； RequestMappingHandlerAdapter
● 适配器执行目标方法并确定方法参数的每一个值
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-51bb2d906de04b22b1d8c55ac8746522.png)

1、HandlerAdapter
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-11b86c30e2c54527a4c9833a70bdc0e0.png)
得到handlerAdapter handler适配器
2、执行目标方法
// Actually invoke the handler.
//DispatcherServlet -- doDispatch
mv = ha.handle(processedRequest, response, mappedHandler.getHandler())

底层反射 在调用的方法
```java
mav = invokeHandlerMethod(request, response, handlerMethod); //执行目标方法
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-fabcce75aa664756b0666f3906e9eb7a.png)

//ServletInvocableHandlerMethod
Object returnValue = invokeForRequest(webRequest, mavContainer, providedArgs);
//获取方法的参数值
Object[] args = getMethodArgumentValues(request, mavContainer, providedArgs);

```
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-317a2f38b3ea476db093c8730e0b86cf.png)

##### 1.2 参数解析器-HandlerMethodArgumentResolver 
确定将要执行的目标方法的每一个参数的值是什么;
SpringMVC目标方法能写多少种参数类型。取决于参数解析器。
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-729f244f55b545eabc84fb51f6d2d1d3.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-af3b22264f35499783dfe7be33d04b50.png)
##### 1.3 解析器接口
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-c3cbd2284ceb448694469da48b7dd0ea.png)
● 当前解析器是否支持解析这种参数
● 支持就调用 resolveArgument 来解析
##### 1.4返回值处理器:
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-335049d7149c4f78b72569ff11dbeea8.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-15411c147b3d4a9f8791a09f2af603d1.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-adb0abb7f94340e58d795d470256358b.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-d02a9f4e090a49ff906e25a47e674dfd.png)
找到适配器
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-724e290259f6410499552d4dbea9300b.png)
开始解析方法
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-456d73cbc25b484689ccda2c5e90a612.png)
得到解析器 从缓存中拿
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-b8b25a09e32d430f937dd1558bf34ff9.png)

解析参数的值
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-89c3962eac7e4de4a4bb07f6f0382c68.png)
不同的解析器 方法是 不同的 ;
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-a13555cde8f34f4f84e781eed1c7f9f1.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-c4fab9a913d74a81b747419779590bfe.png)
#### 1.2、Servlet API：
WebRequest、ServletRequest、MultipartRequest、 HttpSession、javax.servlet.http.PushBuilder、Principal、InputStream、Reader、HttpMethod、Locale、TimeZone、ZoneId
ServletRequestMethodArgumentResolver  以上的部分参数
```java
@Override
	public boolean supportsParameter(MethodParameter parameter) {
		Class<?> paramType = parameter.getParameterType();
		return (WebRequest.class.isAssignableFrom(paramType) ||
				ServletRequest.class.isAssignableFrom(paramType) ||
				MultipartRequest.class.isAssignableFrom(paramType) ||
				HttpSession.class.isAssignableFrom(paramType) ||
				(pushBuilder != null && pushBuilder.isAssignableFrom(paramType)) ||
				Principal.class.isAssignableFrom(paramType) ||
				InputStream.class.isAssignableFrom(paramType) ||
				Reader.class.isAssignableFrom(paramType) ||
				HttpMethod.class == paramType ||
				Locale.class == paramType ||
				TimeZone.class == paramType ||
				ZoneId.class == paramType);
	}
```
#### 1.3、复杂参数：
Map、Model（map、model里面的数据会被放在request的请求域  request.setAttribute）、Errors/BindingResult、RedirectAttributes（ 重定向携带数据）、ServletResponse（response）、SessionStatus、UriComponentsBuilder、ServletUriComponentsBuilder

```java
Map<String,Object> map,  Model model, HttpServletRequest request 都是可以给request域中放数据，
```
request.getAttribute();得到数据
##### 1.1 复杂参数原理:
Map、Model类型的参数，会返回 mavContainer.getModel（）；---> BindingAwareModelMap 是Model 也是Map
mavContainer.getModel(); 获取到值的
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-734c8e5b3f934aa6b028a43377908746.png)

##### 1.2、目标方法执行完成
将所有的数据都放在 ModelAndViewContainer；包含要去的页面地址View。还包含Model数据。
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-3bf01444c40b40bc9cd595d86219ed5f.png)
##### 1.3、处理派发结果
processDispatchResult(processedRequest, response, mappedHandler, mv, dispatchException);

renderMergedOutputModel(mergedModel, getRequestToExpose(request), response);
```java
InternalResourceView：
@Override
	protected void renderMergedOutputModel(
			Map<String, Object> model, HttpServletRequest request, HttpServletResponse response) throws Exception {

		// Expose the model object as request attributes.
		exposeModelAsRequestAttributes(model, request);

		// Expose helpers as request attributes, if any.
		exposeHelpers(request);

		// Determine the path for the request dispatcher.
		String dispatcherPath = prepareForRendering(request, response);

		// Obtain a RequestDispatcher for the target resource (typically a JSP).
		RequestDispatcher rd = getRequestDispatcher(request, dispatcherPath);
		if (rd == null) {
			throw new ServletException("Could not get RequestDispatcher for [" + getUrl() +
					"]: Check that the corresponding file exists within your web application archive!");
		}

		// If already included or response already committed, perform include, else forward.
		if (useInclude(request, response)) {
			response.setContentType(getContentType());
			if (logger.isDebugEnabled()) {
				logger.debug("Including [" + getUrl() + "]");
			}
			rd.include(request, response);
		}

		else {
			// Note: The forwarded resource is supposed to determine the content type itself.
			if (logger.isDebugEnabled()) {
				logger.debug("Forwarding to [" + getUrl() + "]");
			}
			rd.forward(request, response);
		}
	}
```
暴露模型作为请求域属性 就是挨个遍历 放到请求域中
```java
// Expose the model object as request attributes.
		exposeModelAsRequestAttributes(model, request);
protected void exposeModelAsRequestAttributes(Map<String, Object> model,
			HttpServletRequest request) throws Exception {

    //model中的所有数据遍历挨个放在请求域中
		model.forEach((name, value) -> {
			if (value != null) {
				request.setAttribute(name, value);
			}
			else {
				request.removeAttribute(name);
			}
		});
	}
```
#### 1.4、自定义对象参数：
可以自动类型转换与格式化，可以级联封装
```java
/**
 *     姓名： <input name="userName"/> <br/>
 *     年龄： <input name="age"/> <br/>
 *     生日： <input name="birth"/> <br/>
 *     宠物姓名：<input name="pet.name"/><br/>
 *     宠物年龄：<input name="pet.age"/>
 */
@Data
public class Person {
    
    private String userName;
    private Integer age;
    private Date birth;
    private Pet pet;
    
}

@Data
public class Pet {

    private String name;
    private String age;

}
```

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-35ff89acc5c84ac2bad08ae14c51575f.png)
```java
    /**
     * 数据绑定：页面提交的请求数据（GET、POST）都可以和对象属性进行绑定
     * @param person
     * @return
     */
    @PostMapping("/saveuser")
    public Person saveuser(Person person){

        return person;
    }

```
处理对象数据的 参数解析器:
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-9186db24cd1a48fdb0078f589c9e3931.png)
 是否为简单类型。 (不是简单类型 就可以处理 )
```java
public static boolean isSimpleValueType(Class<?> type) {
		return (Void.class != type && void.class != type &&
				(ClassUtils.isPrimitiveOrWrapper(type) ||
				Enum.class.isAssignableFrom(type) ||
				CharSequence.class.isAssignableFrom(type) ||
				Number.class.isAssignableFrom(type) ||
				Date.class.isAssignableFrom(type) ||
				Temporal.class.isAssignableFrom(type) ||
				URI.class == type ||
				URL.class == type ||
				Locale.class == type ||
				Class.class == type));
	}
```
WebDataBinder binder = binderFactory.createBinder(webRequest(原生Servlet请求), attribute(空Person对象), name);
**WebDataBinder** :web数据绑定器，将**请求参数的值绑定到指定的JavaBean里面**
WebDataBinder 利用它里面的 Converters(由于Http 传输是万物皆是文本) 将请求数据转成指定的数据类型。再次 利用反射 封装到JavaBean中
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-148b3c0d2d234f9c8f8473a812d7ec78.png)
**GenericConversionService**：在设置每一个值的时候，找它里面的所有converter(转换器)那个可以将这个数据类型（request带来参数的字符串）转换到指定的类型 例如:（JavaBean -- Integer） byte -- > file
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-e24350214e9c4f7c9ee769a107e0c35d.png)
```java
@Override
	@Nullable
	public final Object resolveArgument(MethodParameter parameter, @Nullable ModelAndViewContainer mavContainer,
			NativeWebRequest webRequest, @Nullable WebDataBinderFactory binderFactory) throws Exception {

		Assert.state(mavContainer != null, "ModelAttributeMethodProcessor requires ModelAndViewContainer");
		Assert.state(binderFactory != null, "ModelAttributeMethodProcessor requires WebDataBinderFactory");

		String name = ModelFactory.getNameForParameter(parameter);
		ModelAttribute ann = parameter.getParameterAnnotation(ModelAttribute.class);
		if (ann != null) {
			mavContainer.setBinding(name, ann.binding());
		}

		Object attribute = null;
		BindingResult bindingResult = null;

		if (mavContainer.containsAttribute(name)) {
			attribute = mavContainer.getModel().get(name);
		}
		else {
			// Create attribute instance
			try {
				attribute = createAttribute(name, parameter, binderFactory, webRequest);
			}
			catch (BindException ex) {
				if (isBindExceptionRequired(parameter)) {
					// No BindingResult parameter -> fail with BindException
					throw ex;
				}
				// Otherwise, expose null/empty value and associated BindingResult
				if (parameter.getParameterType() == Optional.class) {
					attribute = Optional.empty();
				}
				bindingResult = ex.getBindingResult();
			}
		}

		if (bindingResult == null) {
			// Bean property binding and validation;
			// skipped in case of binding failure on construction.
			WebDataBinder binder = binderFactory.createBinder(webRequest, attribute, name);
			if (binder.getTarget() != null) {
				if (!mavContainer.isBindingDisabled(name)) {
					bindRequestParameters(binder, webRequest);
				}
				validateIfApplicable(binder, parameter);
				if (binder.getBindingResult().hasErrors() && isBindExceptionRequired(binder, parameter)) {
					throw new BindException(binder.getBindingResult());
				}
			}
			// Value type adaptation, also covering java.util.Optional
			if (!parameter.getParameterType().isInstance(attribute)) {
				attribute = binder.convertIfNecessary(binder.getTarget(), parameter.getParameterType(), parameter);
			}
			bindingResult = binder.getBindingResult();
		}

		// Add resolved attribute and BindingResult at the end of the model
		Map<String, Object> bindingResultModel = bindingResult.getModel();
		mavContainer.removeAttributes(bindingResultModel);
		mavContainer.addAllAttributes(bindingResultModel);

		return attribute;
	}
```
##### 1.1 自定义webDataBinder
SpringMVC的定制:
- 方式一:public class WebConfig /*implements WebMvcConfigurer*/ 继承接口 实现方法;
- 方式二:  注入Bean
    @Bean
    public WebMvcConfigurer webMvcConfigurer(){
        return new WebMvcConfigurer() {

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-16e6d69ea7b34ef5947e36be78030cd1.png)
未来我们可以给WebDataBinder里面放自己的Converter(转换器)；
```java
private static final class StringToNumber<T extends Number> implements Converter<String, T>

 //1、WebMvcConfigurer定制化SpringMVC的功能
    @Bean
    public WebMvcConfigurer webMvcConfigurer(){
        return new WebMvcConfigurer() {
            @Override
            public void configurePathMatch(PathMatchConfigurer configurer) {
                UrlPathHelper urlPathHelper = new UrlPathHelper();
                // 不移除；后面的内容。矩阵变量功能就可以生效
                urlPathHelper.setRemoveSemicolonContent(false);
                configurer.setUrlPathHelper(urlPathHelper);
            }

            @Override
            public void addFormatters(FormatterRegistry registry) {
                registry.addConverter(new Converter<String, Pet>() {
                    @Override
                    public Pet convert(String source) {
                        // 啊猫,3
                        if(!StringUtils.isEmpty(source)){
                            Pet pet = new Pet();
                            String[] split = source.split(",");
                            pet.setName(split[0]);
                            pet.setAge(Integer.parseInt(split[1]));
                            return pet;
                        }
                        return null;
                    }
                });
            }
        };
    }
```
## 4、数据响应与内容协商
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-4feaa68e29b1410dafffbab2acf71afd.png)
### 1、响应JSON
#### 1.1、jackson.jar+@ResponseBody
引入依赖:
```java
       <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
web场景自动引入了json场景
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-json</artifactId>
      <version>2.3.4.RELEASE</version>
      <scope>compile</scope>
    </dependency>
```
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-f26059f7ecd3458e986a80365fa2d977.png)
给前端自动返回json数据 @ResponseBody
##### 1、返回值解析器
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-97d6921139e440eb804b9ca1525551e1.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-a8d65e14e65a4803a8e7fe215f29c5b2.png)
解析对象,
try {
			this.returnValueHandlers.handleReturnValue(
					returnValue, getReturnValueType(returnValue), mavContainer, webRequest);
		}
找到那个适配器可以 转换这个 对象;
```java
@Override
	public void handleReturnValue(@Nullable Object returnValue, MethodParameter returnType,
			ModelAndViewContainer mavContainer, NativeWebRequest webRequest) throws Exception {

		HandlerMethodReturnValueHandler handler = selectHandler(returnValue, returnType);
		if (handler == null) {
			throw new IllegalArgumentException("Unknown return value type: " + returnType.getParameterType().getName());
		}
		handler.handleReturnValue(returnValue, returnType, mavContainer, webRequest);
	}
```
找到返回值处理器之后.进行的操作: writeWithMessageConverters() 将数据写为JSON
```java
RequestResponseBodyMethodProcessor  	
@Override
	public void handleReturnValue(@Nullable Object returnValue, MethodParameter returnType,
			ModelAndViewContainer mavContainer, NativeWebRequest webRequest)
			throws IOException, HttpMediaTypeNotAcceptableException, HttpMessageNotWritableException {

		mavContainer.setRequestHandled(true);
		ServletServerHttpRequest inputMessage = createInputMessage(webRequest);
		ServletServerHttpResponse outputMessage = createOutputMessage(webRequest);

		// Try even with null return value. ResponseBodyAdvice could get involved.
        // 使用消息转换器进行写出操作  
		writeWithMessageConverters(returnValue, returnType, inputMessage, outputMessage);
	}
```
##### 2、返回值解析器原理
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-253057c4247e4658822d2aa09198b960.png)
● 1、返回值处理器判断是否支持这种类型返回值 supportsReturnType
● 2、返回值处理器调用 handleReturnValue 进行处理
● 3、RequestResponseBodyMethodProcessor 可以处理返回值标了@ResponseBody 注解的。
  ○ 1.  利用 MessageConverters 进行处理 将数据写为json
    ■ 1、内容协商（浏览器默认会以请求头的方式告诉服**务器他能接受什么样的内容类型**）
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-c41d03ce31c74419b9978638acfb4698.png)
    ■ 2、服务器最终根据自己自身的能力，决定服务器能生产出什么样内容类型的数据，  (之后 两个进行协商  最终产生一个 数据类型 下面 就调用转换方法,将对象 转换成 协商好的数据类型 )
    ■ 3、SpringMVC会挨个遍历所有容器底层的 HttpMessageConverter(转换器) ，看谁能处理？
      ● 1、得到MappingJackson2HttpMessageConverter可以将对象写为json
      ● 2、利用MappingJackson2HttpMessageConverter将对象转为json再写出去。
#### 1.2、SpringMVC到底支持哪些返回值
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-b5422527009d4474a71a91c9c7f6d5a6.png)
```java
ModelAndView
Model
View
ResponseEntity 
ResponseBodyEmitter
StreamingResponseBody
HttpEntity
HttpHeaders
Callable
DeferredResult
ListenableFuture
CompletionStage
WebAsyncTask
有 @ModelAttribute 且为对象类型的
@ResponseBody 注解 ---> RequestResponseBodyMethodProcessor；

```
#### 1.3、HTTPMessageConverter原理
内容协商产生 --> MediaType(媒体类型)-->进行数据转换

##### 1、MessageConverter规范
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-cea33b7021d140cf8542342b44997ad8.png)
HttpMessageConverter: 看是否支持将 此 Class类型的对象，转为MediaType类型的数据。 
例子：Person对象转为JSON。 或者
  JSON转为Person
##### 2、默认的MessageConverter
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-802eeb73d4a84915bb2cc990f8e3cc8e.png)
0 - 只支持Byte类型的
1 - String
2 - String
3 - Resource
4 - ResourceRegion
5 - DOMSource.class \ SAXSource.class) \ StAXSource.class \StreamSource.class \Source.class
6 - MultiValueMap
7 - true    JSON的 都支持
8 - true
9 - 支持注解方式xml处理的。
最终 MappingJackson2HttpMessageConverter  
把对象转为JSON（利用底层的jackson的objectMapper转换的)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-f55b3865e2d7436fb3f8dae8c40dbdf3.png)
### 2、内容协商
根据客户端接收能力不同，返回不同媒体类型的数据
#### 1、引入xml依赖
```java
 <dependency>
            <groupId>com.fasterxml.jackson.dataformat</groupId>
            <artifactId>jackson-dataformat-xml</artifactId>
</dependency>
```
#### 2、postman分别测试返回json和xml
只需要改变请求头中Accept字段。Http协议中规定的，告诉服务器本客户端可以接收的数据类型。
#### 3、开启浏览器参数方式内容协商功能
为了方便内容协商，开启基于请求**参数**的内容协商功能。
```java
spring:
    contentnegotiation:
      favor-parameter: true  #开启请求参数内容协商模式

发请求： http://localhost:8080/test/person?format=json
http://localhost:8080/test/person?format=xml
```
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-776d1d79a2754c85b14a0a30c1476d31.png)
优先进行 我们的 策略 得到准确的类型 就跳出 不执行,
如果还是一个模糊匹配,那就继续进行策略的查询;
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-d20d30df6b8946a6b2c1ee403d130c97.png)
确定客户端接收什么样的内容类型；
1、Parameter策略优先确定是要返回json数据（获取请求头中的format的值）
下面是获取我们参数里面传的类型;
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-d443521ee9a04ff388b89f328c1270cc.png)
2、最终进行内容协商返回给客户端json即可。
#### 4、内容协商原理
● 1、判断当前响应头中是否已经有确定的媒体类型。MediaType (有就直接进行,没有就第二步骤)
● 2、获取客户端（PostMan、浏览器）支持接收的内容类型。（获取客户端Accept请求头字段）【application/xml】(这次浏览器需要 XML 类型)
  ○ contentNegotiationManager 内容协商管理器 默认使用基于请求头的策略
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-4c2188e15e064a748be70c0585a142ff.png) 
  HeaderContentNegotiationStrategy  确定客户端可以接收的内容类型 
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-02b2f5db0cb847118e63d5115fa3b28b.png)
● 3、遍历循环所有当前系统的 MessageConverter，看谁支持操作这个对象（Person）
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-cb5ef837a1a84e2d95ab642878e33cca.png)
● 4、找到支持操作Person的converter(10个)，把converter支持的媒体类型统计出来。

● 5、客户端需要【application/xml】。服务端能力【10种、json、xml】
● 6、进行内容协商的最佳匹配媒体类型
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-c33ea713da4b4bc9b92aff8e0d89aca1.png)
● 7、用 支持 将对象转为 最佳匹配媒体类型 的converter。调用它进行转化 。
##### 内容协商总结:
1.请求进来,先得到请求体需要的数据类型-->application/JSON(可能一种可能多种(权重分配))
2.查找我们服务端可以相应的数据类型-->9种 加入XML依赖-->10种
3.进行内容协商产生 mediaType --> XML类型
4.查找可以转换的 类型转换器 (messageConverter)-->MappingJacksonMessageConverter
5.进行转换 返回数据;
#### ## Response 相应数据总结
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-c40fbe5a22d348c7b2361401f0bd6212.png)
0、@ResponseBody 响应数据出去 调用 RequestResponseBodyMethodProcessor 处理(找到适合的类型)
1、Processor 处理方法返回值。通过 MessageConverter(进行数据转换)处理
2、所有 MessageConverter 合起来可以支持各种媒体类型数据的操作（读、写）
3、内容协商找到最终的 messageConverter；
4.如果框架提供的转换器不够我们使用怎么办??
#### 5、自定义 MessageConverter
contentNegotiationManager(内容协商管理器) 有策略(基于请求头的 等等)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-c1c31dd5d54441a4acbf043582c9b742.png)
实现多协议数据兼容。json、xml、x-guigu
```java
    /**
     * 1、浏览器发请求直接返回 xml    [application/xml]        jacksonXmlConverter
     * 2、如果是ajax请求 返回 json   [application/json]      jacksonJsonConverter
     * 3、如果硅谷app发请求，返回自定义协议数据  [appliaction/x-guigu]   xxxxConverter
     *          属性值1;属性值2;
     *
  *
     * 步骤：
     * 1、添加自定义的MessageConverter进系统底层
     * 2、系统底层就会统计出所有MessageConverter能操作哪些类型
     * 3、客户端内容协商 [guigu(客户端需要这个类型)--->guigu(服务端有我们写的转换器)]
     * 作业：如何以参数的方式进行内容协商
     * @return
     */
```
##### 半自动配置SpringMVC的过程:
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-507c471508a14dfa8acc91aa362d4968.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-d95bd9e4a8bb4f9582d8457d423faea9.png)
SpringMVC的什么功能。一个入口给容器中添加一个  WebMvcConfigurer
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-24d3eb3d84004786b47b753cd15087b3.png)
写消息转换类":
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-fcf3467959314be195103dfd9be3c4c8.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-bd37622ad6784a869aa725fc16a2e08b.png)
写在MVC配置接口上:
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-d04e93441ba7410585d7216de84a082b.png)


#### 如何在参数的方法来传入类型呢??
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-3a5f1451a2f0451c8b1ccefe10b031a8.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-37387120f960483c94497473841ca4cb.png)

如何进行修改呢???
就是直接写一个我们自己的管理器 
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-9c2ac9342ef14b5f812b2aa86255a57b.png)

有可能我们添加的自定义的功能会覆盖默认很多功能，导致一些默认的功能失效。
大家考虑，上述功能除了我们完全自定义外？SpringBoot有没有为我们提供基于配置文件的快速修改媒体类型功能？怎么配置呢？【提示：参照SpringBoot官方文档web开发内容协商章节】
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-2fdff9f9e7444ab0be63551dbe1057f6.png)
## 5、视图解析与模板引擎
视图解析：SpringBoot默认不支持(不支持在 压缩包内 编译) JSP，需要引入第三方模板引擎技术实现页面渲染。   
现在SppringBoot 是打包jar 包,是压缩包的方式 (不支持Jsp的 编译过程)
### 1、视图解析
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-aa6f07fe5d514d1a9daba0779d9a3a07.png)
Thymleaf: 不支持高并发;
### 2、模板引擎-Thymeleaf
#### 1、thymeleaf简介
Thymeleaf is a modern server-side Java template engine for both web and standalone environments, capable of processing HTML, XML, JavaScript, CSS and even plain text.
现代化、服务端Java模板引擎
#### 2、基本语法
##### 1、表达式
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-8daea8f8f453428183448cc5c54f19e5.png)
##### 2、字面量
文本值: 'one text' , 'Another one!' ,…数字: 0 , 34 , 3.0 , 12.3 ,…布尔值: true , false
空值: null
变量： one，two，.... 变量不能有空格
##### 3、文本操作
字符串拼接: +
变量替换: |The name is ${name}| 

##### 4、数学运算
运算符: + , - , * , / , %

##### 5、布尔运算
运算符:  and , or
一元运算: ! , not 


##### 6、比较运算
```java
比较: > , < , >= , <= ( gt , lt , ge , le )等式: == , != ( eq , ne )
```

##### 7、条件运算
If-then: (if) ? (then)
If-then-else: (if) ? (then) : (else)
Default: (value) ?: (defaultvalue) 

##### 8、特殊操作
无操作： _
#### 3、设置属性值-th:attr
设置单个值
```java
<form action="subscribe.html" th:attr="action=@{/subscribe}">
  <fieldset>
    <input type="text" name="email" />
    <input type="submit" value="Subscribe!" th:attr="value=#{subscribe.submit}"/>
  </fieldset>
</form>
```
设置多个值
```java
<img src="../../images/gtvglogo.png"  th:attr="src=@{/images/gtvglogo.png},title=#{logo},alt=#{logo}" />
```
以上两个的代替写法 th:xxxx
```java
<input type="submit" value="Subscribe!" th:value="#{subscribe.submit}"/>
<form action="subscribe.html" th:action="@{/subscribe}">
```
#### 4、迭代
```java
<tr th:each="prod : ${prods}">
        <td th:text="${prod.name}">Onions</td>
        <td th:text="${prod.price}">2.41</td>
        <td th:text="${prod.inStock}? #{true} : #{false}">yes</td>
</tr>
<tr th:each="prod,iterStat : ${prods}" th:class="${iterStat.odd}? 'odd'">
  <td th:text="${prod.name}">Onions</td>
  <td th:text="${prod.price}">2.41</td>
  <td th:text="${prod.inStock}? #{true} : #{false}">yes</td>
</tr>
```
#### 5、条件运算
```java
<a href="comments.html"
th:href="@{/product/comments(prodId=${prod.id})}"
th:if="${not #lists.isEmpty(prod.comments)}">view</a>


<div th:switch="${user.role}">
  <p th:case="'admin'">User is an administrator</p>
  <p th:case="#{roles.manager}">User is a manager</p>
  <p th:case="*">User is some other thing</p>
</div>
```
#### 6、属性优先级
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-4f24519f3aed4690bcb05cb42e5101c0.png)
### 3、thymeleaf使用
#### 1、引入Starter
```java
     <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-thymeleaf</artifactId>
        </dependency>
```
#### 2、自动配置好了thymeleaf
```java
@Configuration(proxyBeanMethods = false)
@EnableConfigurationProperties(ThymeleafProperties.class)
@ConditionalOnClass({ TemplateMode.class, SpringTemplateEngine.class })
@AutoConfigureAfter({ WebMvcAutoConfiguration.class, WebFluxAutoConfiguration.class })
public class ThymeleafAutoConfiguration { }
```
自动配好的策略
● 1、所有thymeleaf的配置值都在 ThymeleafProperties 类中绑定好
● 2、配置好了 SpringTemplateEngine   模板引擎
● 3、配好了 ThymeleafViewResolver  视图解析器
● 4、我们只需要直接开发页面   直接开发就好
```java
	public static final String DEFAULT_PREFIX = "classpath:/templates/"; 前缀 

	public static final String DEFAULT_SUFFIX = ".html";  //xxx.html   后缀
```
 #### 3、页面开发
```java
<!DOCTYPE html>
<html lang="en" xmlns:th="http://www.thymeleaf.org">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<h1 th:text="${msg}">哈哈</h1>
<h2>
    <a href="www.atguigu.com" th:href="${link}">去百度</a>  <br/>
    <a href="www.atguigu.com" th:href="@{link}">去百度2</a>
</h2>
</body>
</html>
```
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-17e898f6da3a4adda736d285614be261.png)
th:href="${link}"
th:href="@{link}"
这两个的区别 $ 是把前面的标签都替换到前面 ; 而link 是跳到自己项目中的 页面 还会默认加上我们的前缀(如果我们加的话)
加前缀的方式:
```java
server:
  servlet:
    context-path: /world

```
