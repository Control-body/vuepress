---
title: SpringBoot(3)-异常处理  拦截器  视图解析
tags:
- 异常处理
- 拦截器
- 视图解析
---
# 4、构建后台管理系统
如何使用thymeleaf模板 
官方文档：
https://www.thymeleaf.org/doc/tutorials/3.0/usingthymeleaf.html#setting-value-to-specific-attributes 
就是引入头标签 就可以了；
thymeleaf 还是以html 后缀结尾的 
```java
<!DOCTYPE html>
<html lang="en" xmlns:th="http://www.thymeleaf.org">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="ThemeBuck
```
## 1.先引入前端的模板和必要的依赖
thymeleaf、web-starter、devtools、lombok
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-245312f439914dcd92ebec987713fa9b.png)
为什么访问8080端口会自动到发/login请求
th:action="@{/login}" @是默认加上本类的路径的；
## 2.创建监听器
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-8f7352aa035744408ee4779582aad004.png) 

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-0c56526a460842cf9993437584d8ea0c.png)
## 3、静态资源处理
自动配置好，我们只需要把所有静态资源放到 static 文件夹下
## 4.抽取公共内容
头 （css js代码）尾（js代码）
侧边栏  和  顶部菜单 是一样的 ；
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-2dfdd08626d94b64b8adf5a71de71899.png)
引入的三种方式：
th:insert/replace/include
1.把各个js css 的应用代码变成 teamleaf 的形式 映入 
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-c29514412d1543f78f463fc7930d83d6.png)
2.引入模板
- 给模板起个名字方式：
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-00aa50b82bd34b369be5f0d7ed74d50f.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-43537bb93921446cb4d66a73e590af14.png)
- id选择器的方式：
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-ab9994e180ae42c98147a35182cf7269.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-54d938465418416498288d0983420490.png)

3.引入
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-3bd0cbbffbf640c492dea8b1cabeee5f.png)
th:insert/replace/include
insert  在原来标签的基础上 带着标签引入  插入
include 在原来标签的基础上 不带标签引入 包含
replace 把原来的标签去掉 带着大标签   替换
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-a65dbb3c5f894f03bf16827c8505a4b8.png)

引入页面的时候 直接修改公共的部分就 就可以全部生效；
【【】】是行内的方式 取出数据；
# 5、视图解析与模板引擎
视图解析：SpringBoot默认不支持 JSP，需要引入第三方模板引擎技术实现页面渲染。
## 1、视图解析
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-f26fe7da21004966b9a97166256e000c.png)
1.请求先确定 参数解析器 和 返回值解析器 ，通过 参数解析器 拿到参数；
2.执行方法，得到返回值 
3.返回值 经过返回值处理器 进行处理；（用 return "redirect:/main.html"; ）返回字符串 来进行实例；
4.选择合适的返回值处理器（HeadlerMethodReturnValueHandlerComposite处理器处理）判读的条件是 返回字符串；
5.处理 如果是返回字符串 就放到ModelAndViewContainer 中

### 1、视图解析原理流程
#### 1、目标方法处理的过程中，所有数据都会被放在 ModelAndViewContainer （容器 ）里面。包括数据和视图地址
#### 2、方法的参数是一个自定义类型对象（从请求参数中确定的），把他重新放在 ModelAndViewContainer总 （请求的各种值都会放在里面） 
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-84a8a97fb60847c391e8d871cfc81925.png)
#### 3、任何目标方法执行完成以后都会返回 ModelAndView（数据和视图地址）（他是从ModelAndViewContainer抽取出来的 ）。
- 如果modelandView中没有视图地址就会返回到请求的发出的页面；
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-1b61ca6cdb0e4678a03bc51708431db0.png)
#### 4、processDispatchResult  处理派发结果（页面改如何响应）
1）先检测有没有出现问题 之后进行渲染；
● 1、render(mv（modelandview）, request, response); 进行页面渲染逻辑
  ○ 1、根据方法的String返回值得到 View 对象【定义了页面的渲染逻辑】
**- 这里是重定向的位置：**
    ■ 1、所有的视图解析器尝试是否能根据当前返回值得到View对象
如何得到View名字呢？ 
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-a4a6e0f64ef64535b8a1ca7e03fdb683.png)
第一个就可处理 得到  RedirectView（）对象；
   ■ 2、得到了  redirect:/main.html --> Thymeleaf new RedirectView()
   ■ 3、ContentNegotiationViewResolver 里面包含了下面所有的视图解析器，内部还是利用下面所有视图解析器得到视图对象。
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-b29c89c1e6324ee88efe428e0f6e4ee7.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-3b992e55536444949fcc05c61219e1d8.png)
    ■ 4、view.render(mv.getModelInternal(), request, response);   视图对象调用自定义的render进行页面渲染工作
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-5f8e7f4519cf44dbbae973459a917406.png)
      ● RedirectView 如何渲染【重定向到一个页面】
       ● 1、获取目标url地址
       ● 2、response.sendRedirect(encodedURL);

**- 下面是不需要重定向 （）**
视图解析：
  ○ 返回值以 forward: 开始： new InternalResourceView(forwardUrl); -->  转发request.getRequestDispatcher(path).forward(request, response); 
  ○ 返回值以 redirect: 开始： new RedirectView() --> render就是重定向 
  ○ 返回值是普通字符串： new ThymeleafView（）--->会把有 th标签的地方进行写入 

# 6. 拦截器
## 1、HandlerInterceptor 接口(写一个拦截器)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-20c658f698be4cc38f4b88b63471ffb0.png)
```java

/**
 * 登录检查
 * 1、配置好拦截器要拦截哪些请求
 * 2、把这些配置放在容器中
 */
@Slf4j
public class LoginInterceptor implements HandlerInterceptor {

    /**
     * 目标方法执行之前
     * @param request
     * @param response
     * @param handler
     * @return
     * @throws Exception
     */
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

        String requestURI = request.getRequestURI();
        log.info("preHandle拦截的请求路径是{}",requestURI);

        //登录检查逻辑
        HttpSession session = request.getSession();

        Object loginUser = session.getAttribute("loginUser");

        if(loginUser != null){
            //放行
            return true;
        }

        //拦截住。未登录。跳转到登录页
        request.setAttribute("msg","请先登录");
//        re.sendRedirect("/");
        request.getRequestDispatcher("/").forward(request,response);
        return false;
    }

    /**
     * 目标方法执行完成以后
     * @param request
     * @param response
     * @param handler
     * @param modelAndView
     * @throws Exception
     */
    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        log.info("postHandle执行{}",modelAndView);
    }

    /**
     * 页面渲染以后
     * @param request
     * @param response
     * @param handler
     * @param ex
     * @throws Exception
     */
    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
        log.info("afterCompletion执行异常{}",ex);
    }
}
```
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-4515854b5e1445b495beaad04e42b0b4.png)
## 2、配置拦截器
加到配置SpringMVC的配置类里面：
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-7b8f25257491404498ecd9d82f638d92.png)
```java
/**
 * 1、编写一个拦截器实现HandlerInterceptor接口
 * 2、拦截器注册到容器中（实现WebMvcConfigurer的addInterceptors）
 * 3、指定拦截规则【如果是拦截所有，静态资源也会被拦截】
 */
@Configuration
public class AdminWebConfig implements WebMvcConfigurer {

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new LoginInterceptor())
                .addPathPatterns("/**")  //所有请求都被拦截包括静态资源
                .excludePathPatterns("/","/login","/css/**","/fonts/**","/images/**","/js/**"); //放行的请求
    }
}
```
/** 是把静态的页面也进行拦截；
- 解决方式一：（抛去静态请求的前缀）
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-b522effea31241cabca192a71946ff08.png)
- 解决方式二：（给静态资源在配置文件中加上前缀）
- spring.mvc.static-path-pattern=/static/*
## 3.总结：
/**
 * 1、编写一个拦截器实现HandlerInterceptor接口
 * 2、拦截器注册到容器中（实现WebMvcConfigurer的addInterceptors）
 * 3、指定拦截规则【如果是拦截所有，静态资源也会被拦截】
 *
 * @EnableWebMvc:全面接管
 *      1、静态资源？视图解析器？欢迎页.....全部失效
 */

## 4、拦截器原理
DispacherServlet-->doDispatch-->handler(谁处理这个请求)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-de7ab59776054fb2839bec1828d3145b.png)
在方法执行之前，先进行拦截器的操作：
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-1676778dd1714d22be073aee3ab47bfd.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-0fcf5d30ab464244a4fa4fe7b8a392e7.png)
目标方法执行完成之后，倒叙执行posthandle
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-b8db0cdbe4c641fe918f6de26f3c8d66.png)
过滤器操作完成：
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-1f1a06b861b049e38d182ceb9eba4661.png)
渲染页面完成之后
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-a45a64920dd6493ca20bc612bc32324a.png)

1、根据当前请求，找到HandlerExecutionChain【可以处理请求的handler以及handler的所有 拦截器】
2、先来顺序执行 所有拦截器的 preHandle方法
● 1、如果当前拦截器prehandler返回为true。则执行下一个拦截器的preHandle
● 2、如果当前拦截器返回为false。直接倒序执行所有已经执行了的拦截器的  afterCompletion；
3、如果任何一个拦截器返回false。直接跳出不执行目标方法
4、所有拦截器都返回True。执行目标方法
5、倒序执行所有拦截器的postHandle方法。
6、前面的步骤有任何异常都会直接倒序触发 afterCompletion
7、页面成功渲染完成以后，也会倒序触发 afterCompletion

拦截器的 afterCompletion 一定会触发不管是 出现什么问题


# 7、文件上传
## 1、页面表单
```java
 <form role="form" th:action="@{https://cdn.jsdelivr.net/gh/Control-body/tuChuang}" method="post" enctype="multipart/form-data">
                            <div class="form-group">
                                <label for="exampleInputEmail1">邮箱</label>
                                <input type="email" name="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">名字</label>
                                <input type="text" name="username" class="form-control" id="exampleInputPassword1" placeholder="Password">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputFile">头像</label>
                                <input type="file" name="headerImg" id="exampleInputFile">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputFile">生活照</label>
                                <input type="file" name="photos" multiple>
                            </div>
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox"> Check me out
                                </label>
                            </div>
                            <button type="submit" class="btn btn-primary">提交</button>
                        </form>
```
## 2、文件上传代码
```java
    /**
     * MultipartFile 自动封装上传过来的文件
     * @param email
     * @param username
     * @param headerImg
     * @param photos
     * @return
     */
    @PostMapping("https://cdn.jsdelivr.net/gh/Control-body/tuChuang")
    public String upload(@RequestParam("email") String email,
                         @RequestParam("username") String username,
                         @RequestPart("headerImg") MultipartFile headerImg,
                         @RequestPart("photos") MultipartFile[] photos) throws IOException {

        log.info("上传的信息：email={}，username={}，headerImg={}，photos={}",
                email,username,headerImg.getSize(),photos.length);

        if(!headerImg.isEmpty()){
            //保存到文件服务器，OSS服务器
            String originalFilename = headerImg.getOriginalFilename();
            headerImg.transferTo(new File("H:\\cache\\"+originalFilename));
        }

        if(photos.length > 0){
            for (MultipartFile photo : photos) {
                if(!photo.isEmpty()){
                    String originalFilename = photo.getOriginalFilename();
                    photo.transferTo(new File("H:\\cache\\"+originalFilename));
                }
            }
        }


        return "main";
    }

```
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-f026f3188f6e4c05925effe70033dec2.png)
上传文件 有大小的限制 
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-9b41a941e2b74b4387844b1773cbd9fa.png)
文件上传的自动配置类：
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-300f0039e42b476ea466852d3c27c0e5.png)
文件上传的配置类：
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-5ff5ef842c4449a080e3a05c67d15c93.png)
## 3、自动配置原理
分析 源码流程：
- SpringBoiot 自动配置了那些
- Debug 调试看 流程是怎么写的

1.文件上传配类两个 bean 
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-d1577f01c07d4be09bc02c4337941add.png)
文件上传解析器是 解析Servlet 的方式 传上来的方式 如果直接传上来 流 还是要自己写 解析器

2. 流程是如何 进行的？

文件上传自动配置类-MultipartAutoConfiguration - MultipartProperties
● 自动配置好了 StandardServletMultipartResolver   【文件上传解析器】
● 原理步骤
  ○ 1、请求进来使用文件上传解析器判断（isMultipart）并封装（resolveMultipart，返回MultipartHttpServletRequest 对象）文件上传请求
  ○ 2、参数解析器来解析请求中的文件内容 封装成MultipartFile
下面是参数的解析器：
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-fa063cc069e641dd9b2caacd15c20fd6.png)
  ○ 3、将request中文件信息封装为一个 Map；MultiValueMap<String, MultipartFile>
FileCopyUtils。实现文件流的拷贝
```java
    @PostMapping("https://cdn.jsdelivr.net/gh/Control-body/tuChuang")
    public String upload(@RequestParam("email") String email,
                         @RequestParam("username") String username,
                         @RequestPart("headerImg") MultipartFile headerImg,
                         @RequestPart("photos") MultipartFile[] photos)
```
# 8、异常处理
## 1、错误处理
### 1、默认规则
● 默认情况下，Spring Boot提供/error处理所有错误的映射
● 对于**机器客户端**，它将生成JSON响应，其中包含错误，HTTP状态和异常消息的详细信息。对于**浏览器客户端**，响应一个“ whitelabel”错误视图，以HTML格式呈现相同的数据
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-cc42c25f4a8e4782b667df4ef959c998.png)
● 要完全替换默认行为，可以实现 ErrorController 并注册该类型的Bean定义，或添加ErrorAttributes类型的组件以使用现有机制但替换其内容。
● error/下的4xx，5xx页面会被自动解析；
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-0623b2f36e0f495b9b96762ade5ca64e.png)
## 2、定制错误处理逻辑
● 自定义错误页
  ○ error/404.html   error/5xx.html；有精确的错误状态码页面就匹配精确，没有就找 4xx.html；如果都没有就触发白页
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-ca2633872bbd40a489d4a2c8759bcf42.png)

● @ControllerAdvice+@ExceptionHandler处理全局异常；底层是 ExceptionHandlerExceptionResolver 支持的 （推荐）
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-9adca9754aea438697108b22cc3e008a.png)

这里异常处理器 就已经返回了 MV 就不需要下面的 异常视图解析器了
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-1681b851e04240b3b9a502499baa25f8.png)
● @ResponseStatus+自定义异常 ；底层是 ResponseStatusExceptionResolver ，把responsestatus注解的信息底层调用 response.sendError(statusCode, resolvedReason)；tomcat发送的/error 在经过下面的异常视图解析器 最后到 4xx 5xx
自定义一个异常类：
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-7ba3f0127d6d43bbafa414085e50dccb.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-fabc6ecbdb764924a469f3e7a461dd06.png)

● Spring底层的异常（框架抛出的），如 参数类型转换异常；DefaultHandlerExceptionResolver 处理框架底层的异常。
  ○ response.sendError(HttpServletResponse.SC_BAD_REQUEST, ex.getMessage()); 也会发送、error 请求 
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-857dda7e9404472683d223500aa4868c.png)


● 自定义实现 HandlerExceptionResolver 处理异常；可以作为默认的全局异常处理规则
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-53cf7ea22fdb493db156ee557d816d34.png)  

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-a977c2413e504eb683836b395662842d.png)



● ErrorViewResolver  实现自定义处理异常；（一般不去自定义）
  ○ response.sendError 。error请求就会转给controller
  ○ 你的异常没有任何人能处理。tomcat底层 response.sendError。error请求就会转给controller
  ○ basicErrorController 要去的页面地址是 ErrorViewResolver  ；



## 3、异常处理自动配置原理
● ErrorMvcAutoConfiguration  自动配置异常处理规则
  ○ 容器中的组件：类型：DefaultErrorAttributes -> id：errorAttributes
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-435efd6d1ebc4d72b663dcb3d3a93809.png)
    ■ public class DefaultErrorAttributes implements ErrorAttributes, HandlerExceptionResolver
    ■ DefaultErrorAttributes：定义错误页面中可以包含哪些数据。
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-75167f150c67402c9f78e8f91316ffa8.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-37dce09bbc4e4b1db99b6b509eb3f267.png)

  ○ 容器中的组件：类型：BasicErrorController --> id：basicErrorController（json+白页 适配响应） 处理请求 
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-e3b1b2c0adf44db990852b04ee02fe0a.png)
    ■ 处理默认 /error 路径的请求；页面响应 new ModelAndView("error", model)；![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-f772d218fc494221a5983ebe78720d13.png)
    ■ 容器中有组件 View->id是error；（响应默认错误页）
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-4fd0c41f18bf491ea6a1344debdd2ca4.png)
    ■ 容器中放组件 BeanNameViewResolver（视图解析器）；按照返回的视图名作为组件的id去容器中找View对象。
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-86e74c2ef27f444090eb5000d7fd60c3.png)
  ○ 容器中的组件：类型：DefaultErrorViewResolver -> id：conventionErrorViewResolver
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-aff64d375d93420d92c23d4cb855bfc2.png)
    ■ 如果发生错误，会以HTTP的状态码 作为视图页地址（viewName），找到真正的页面
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-5558cb90417d4c8a88f7c4db57f81528.png)
    ■ error/404、5xx.html
如果想要返回页面；就会找error视图【StaticView】。(默认是一个白页)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-86e74c2ef27f444090eb5000d7fd60c3.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-1857e4512187468893b83a09c0e7bd67.png)


## 4。自定义错误可能修改的类
- DefaultErrorAttributes ： 修改这个可以设置返回那些信息
- BasicErrorController ：可以响应白页
- DefaultErrorViewResolver： 可以视图解析跳转错误页面到哪里
## 5、异常处理步骤流程
1、执行目标方法，目标方法运行期间有任何异常都会被catch、而且标志当前请求结束；并且用 dispatchException 封装：
2、进入视图解析流程（页面渲染？） 
processDispatchResult(processedRequest, response, mappedHandler, mv, dispatchException); 传入了 发生什么异常
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-d8fb1c88e28b403f996d47f432043664.png)
3、mv = processHandlerException；处理handler发生的异常，处理完成返回ModelAndView；
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-117dfcfba74b420e8fc977009ec4585a.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-53df99ab03f74b5a862fb9e66e8bded4.png)
● 1、遍历所有的 handlerExceptionResolvers，看谁能处理当前异常【HandlerExceptionResolver处理器异常解析器】
系统默认的异常解析器：
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-494919647f29426cb51daed005d155a1.png)
视图解析器的接口：
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-ddcae42924db402abe64d6706a8af48f.png)
  ○ 、DefaultErrorAttributes先来处理异常。把异常信息保存到rrequest域，并且返回null；
  ○ 2、默认没有任何人能处理异常，所以异常会被抛出
    ■ 1、如果没有任何人能处理最终底层就会发送 /error 请求（Servlet规范）。会被底层的BasicErrorController （它里面处理了、error 请求）处理
    ■ 2、解析错误视图；遍历所有的  ErrorViewResolver  看谁能解析。
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-829ed3e228994454b171997ea98e931f.png)
    ■ 3、默认的 DefaultErrorViewResolver ,作用是把响应状态码作为错误页的地址，error/500.html 
    ■ 4、模板引擎最终响应这个页面 error/500.html 
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-dfadf0cf1efb490e8100e51ffb0cc91b.png)

## 6.处理异常
- 先调用 异常解析器 环节（看是否可以处理异常）
- 如果没有就掉 异常视图解析器（跳转页面）
## 7.xxx视图解析器：
错误视图解析器为例：
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-6ff491360e434e8aaa4dbce04f062c91.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-fe2af9c534214e5da55f32f6d2f119a6.png)