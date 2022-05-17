---
title: Swagger
---

学习目标：
- 了解Swagger的作用和概念
- 了解前后端分离
- 在SpringBoot 里面中 结成Swagger
### swagger是什么？
Swagger 是一个规范和完整的框架，用于生成、描述、调用和可视化 RESTful 风格的 Web 服务的接口文档。

目前的项目基本都是前后端分离，后端为前端提供接口的同时，还需同时提供接口的说明文档。但我们的代码总是会根据实际情况来实时更新，这个时候有可能会忘记更新接口的说明文档，造成一些不必要的问题。

用人话说，swagger就是帮你写接口说明文档的。更具体地，可以看下面的图片，swagger官方建议使用下面的红字部分，这篇博客主要是记录如何，使用swagger自动生成Api文档的，所以只介绍swagger-ui，其他的…以后我用到会再整理
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-8d8470aafed34e79a7cc067a408ea7cb.png)
前后端分离：
vue + SpringBoot 
**vue：** 是双向分离的的 他的页面都是 用js 来生成的 只需要后端 吧他的 js生成就可以了 会自动渲染页面
后端时代：前端只是用管理静态页面 ：html==》后端 模板引擎 JSP ==》后端是主力

前后端分离时代：（前端工程化了）
- 后端： 后端控制层（controller） 服务层（service） 数据访问层（dao）
- 前端： 前端控制层（data） 视图层
  - 伪造后端数据 json 已经存在了 不需要后端 也可以自己跑
- 前后端如何交互？==》API
- 前后端相对独立 松耦合
- 前后端甚至可以部署在不同的服务器上
#### 产生一个问题
- 前后端集成链条，前端人员 和 后端人员 无法做到 “及时协商，尽早解决” 最终问题集中爆发
#### 解决方案
- 首先指定一个schema计划的提纲 实时更新最新的API 降低集成的风险
- 早些年 指定word计划文档
- 前后端分离： 
  - 之前是Postman是 （早些年） 
  - 现在是 使用接口（最新的）
## Swagger
  - 号称世界上最好的 API框架
  - RestFul Api 文档在线生成 工具 -》 APi文档和Api定义同步跟新
  - 直接运行 可以在线测试Api文档
  - 官网：https://swagger.io/
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-978fc2035b19415daf12dd0d5edc5ea7.png)


## 在项目中使用 Swagger
- swagger2
- swagger ui
## SpringBoot 继承Swagger
1、新建一个SpringBoot项目 
2.导入依赖
```java
 <!-- https://mvnrepository.com/artifact/io.springfox/springfox-swagger-ui -->
        <dependency>
            <groupId>io.springfox</groupId>
            <artifactId>springfox-swagger-ui</artifactId>
            <version>2.9.2</version>
        </dependency>
        <!-- https://mvnrepository.com/artifact/io.springfox/springfox-swagger2 -->
        <dependency>
            <groupId>io.springfox</groupId>
            <artifactId>springfox-swagger2</artifactId>
            <version>2.9.2</version>
        </dependency>

```
3.编写一个Hello工程
4.配置Swagger 是一个其他的类的包 
需要配置进Spring 写一个Config类
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-57523b3be6b1418088338df3ee0ade6b.png)
默认就可以 用 直接访问就可以
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-cc2ef8395c3a4610b016461907957d4a.png)
## 配置Swagger
Swagger的bean实例Docket 需要传入一个documentationType(文档属性)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-0eaaaae4955946169d43f0840f5a13c8.png)


![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-64f559c754bc4c1181d06f8f1edb70ee.png)


![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-b524285dd28a4f6ab741fa3121bc6820.png)
创建ApiInfo类
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-3beb0a375a214cc0bb16242a8ecb038a.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-fbe9d264744748aab0f341cf03125a8a.png)
```java
@Configuration
@EnableSwagger2//开启Swagger
public class SwaggerConfig {
    @Bean
    public Docket docket(){
        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(apiInfo());
    }
    //配置Swagger信息 =apiinfo
    private ApiInfo apiInfo(){
        //作者信息
        Contact DEFAULT_CONTACT = new Contact("刘斌", "http://101.132.174.210:8090/", "1741642120@QQ.com");
        return new ApiInfo(
                "Api liubinAPI",
                "去发光 而不是被照亮",
                "v1.0",
                "https://swagger.io/docs/open-source-tools/swagger-editor/",
                DEFAULT_CONTACT, "Apache 2.0",
                "http://www.apache.org/licenses/LICENSE-2.0",
                new ArrayList()
        );  
    }
}
```
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-14320fd856e14a56a1b38b4ed4a959d5.png)
### 下面进行对Swagger对我们写的Controller进行扫描
**问题**:为什么访问 http://localhost:8080/swagger-ui.html这个页面
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-96d53615949b4744b1433b5b46ca7c68.png)
## Swagger配置扫描接口
- .apis(RequestHandlerSelectors.)
```java
//RequestHandlerSelectors  配置要扫描的接口的方式
                //basePackage 指定要扫描的包
                //any()扫描全部de
                //none 不扫描
                //withClassAnnotation 扫描类上的注解 参数是一个注解的 反射 对对象
                //withMethodAnnotation() 扫描 方法上的注解
```

- .paths
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-dfe27476f82f4b1d8733130de19c0914.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-51a56e9537524c7b930b13122dcbc0ca.png)
看自己的激活的环境是那个一个 环境 进行swagger 启动或者不启动
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-8f8dac3fccc9464ebdcc70a2b36b9c49.png)
- group分组

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-9a79965e7ca6456295bfda3c47c89e31.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-e261245b78e84cb38c9afdb7960eca9c.png)
也可以配置多个组:
```java
   @Bean
    public Docket docket1(){
        return new Docket(DocumentationType.SWAGGER_2).groupName("A");
    }
    @Bean
    public Docket docket2(){
        return new Docket(DocumentationType.SWAGGER_2).groupName("B");
    }@Bean
    public Docket docket3(){
        return new Docket(DocumentationType.SWAGGER_2).groupName("C");
    }
    @Bean
    public Docket docket4(){
        return new Docket(DocumentationType.SWAGGER_2).groupName("D");
    }

```
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-bbec374cc52848db8c1b12db3c641259.png)

在实体类上加上注释 (只要接口返回有这个实体类) 这个实体类就会被声明在Swagger中
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-8df951307ce14833980e6791d3292d7a.png)
为什么没有name属性呢
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-0f2a8fee5f50493b97590fd1e3c66b42.png)
Swagger的注解
#### 接口部分
```java
import org.springframework.web.bind.annotation.RestController;
@RestController
public class HelloController {
    @GetMapping(value = "/hello")
    public String hello(){
        return "hello";
    }
    //只要我们的接口中 返回存在实体类 都会被扫描到
    @GetMapping(value = "/user")
    public User user(){
        return new User();
    }
    @ApiOperation("Hello接口")
    @PostMapping (value = "/hello2")
    public String hello2(@ApiParam("姓名") String name){
        return "hello"+name;
    }
    @ApiOperation("post测试")
    @PostMapping(value = "/hello3")
    public User hello3(@ApiParam("姓名") User user){
        int i=5/0;
        return user;
    }
}
     
```
注解其实就是 注释部分 
接口是自动扫描的 
实体类是接口返回的实体类都会扫描到
#### 实体类部分
```java
@Data
@ApiModel("用户实体类")
@Repository
public class User {
    @ApiModelProperty("用户名字")
    public  String username;
    @ApiModelProperty("用户密码")
    public String password;
}

```
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-e19885164f1549b5b7918d9fcf9fb046.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-ef9992ec99c14107a0f76fccc6553627.png)
返回NULL的原因是 实体类的get和set方法没有写
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-fd5068264b9548f8afea5595b396536d.png)
错误的处理:
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-1a33ca52463a4e0fb6bf86bfea4440ad.png)
### 总结:
1.我们可以通过Swagger来给一些比较难的属性或者接口 添加注释信息
2.接口文档支持跟新
3.可以在线测试 
4.公司可以 分配 不同的组 对应不同权限的接口
注意: 在正式上线的时候 注意关闭 swagger接口 处于 安全 和 资源省略的考虑 
**Swagger是一个优秀的工具**
	
```java
 @Bean
        public Docket docket(){
            return new Docket(DocumentationType.SWAGGER_2)
                    .apiInfo(apiInfo())
                    .groupName("Control")
                    .select().paths(PathSelectors.ant("/user/**")).build();
        }
        //配置Swagger信息 =apiinfo
        private ApiInfo apiInfo(){
            //作者信息
            Contact DEFAULT_CONTACT = new Contact("刘斌", "http://101.132.174.210:8090/", "1741642120@QQ.com");
            return new ApiInfo(
                    "Api liubinAPI",
                    "去发光 而不是被照亮",
                    "v1.0",
                    "https://swagger.io/docs/open-source-tools/swagger-editor/",
                    DEFAULT_CONTACT, "Apache 2.0",
                    "http://www.apache.org/licenses/LICENSE-2.0",
                    new ArrayList()
            );
        }
```
apiINfo 是信息部分 （可以设置 扫描那个包 组的名字啊 什么的）
每一个docket就是一个组 ，需要传入 apiInfo 信息生成一个 组
### 配置Swagger 步骤
1。 引入依赖
···java
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
···
2.创建一个 Config
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-0ec73924744a407d93b42b3a1eaf8418.png)
3.在启动类上加入注解
```java
@SpringBootApplication
@MapperScan("com.liubin.usercenter.mapper")
@EnableSwagger2
public class UserCenterApplication {
    public static void main(String[] args) {
        SpringApplication.run(UserCenterApplication.class, args);
    }

}
```
4.测试： 注意自己配的端口号 和 url 有没有前缀的问题
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-8b3291924e1041aa9f9d90f9a62271d5.png)
http://localhost:8080/api/swagger-ui.html
```java
@Api： 用于类，标识这个类是swagger的资源
@ApiIgnore： 用于类，忽略该 Controller，指不对当前类做扫描
@ApiOperation： 用于方法，描述 Controller类中的 method接口
@ApiParam： 用于参数，单个参数描述，
与 @ApiImplicitParam不同的是，他是写在参数左侧的。如（ @ApiParam(name="username",value="用户名")Stringusername）
@ApiModel： 用于类，表示对类进行说明，用于参数用实体类接收
@ApiProperty：用于方法，字段，表示对model属性的说明或者数据操作更改
@ApiImplicitParam： 用于方法，表示单独的请求参数
@ApiImplicitParams： 用于方法，包含多个 @ApiImplicitParam
@ApiResponse： 用于方法，描述单个出参信息
@ApiResponses： 用于方法，包含多个@ApiResponse
@ApiError： 用于方法，接口错误所返回的信息
```
