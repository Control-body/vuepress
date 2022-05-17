---
title: SpringBoot(6)-单元测试  指标监控 监控可视化服务器
tags:
- 单元测试
- 指标监控
- 监控可视化服务器
---
# 07、单元测试
## 1、JUnit5 的变化
Spring Boot 2.2.0 版本开始引入 JUnit 5 作为单元测试默认库作为最新版本的JUnit框架，JUnit5与之前版本的Junit框架有很大的不同。由三个不同子项目的几个不同模块组成。JUnit 5 = JUnit Platform（测试平台） + JUnit Jupiter + JUnit Vintage 

**JUnit Platform:** Junit Platform是在JVM上启动测试框架的基础，不仅支持Junit自制的测试引擎，其他测试引擎也都可以接入。

**JUnit Jupiter**: JUnit Jupiter提供了JUnit5的新的编程模型，是JUnit5新特性的核心。内部 包含了一个测试引擎，用于在Junit Platform上运行。

**JUnit Vintage:** 由于JUint已经发展多年，为了照顾老的项目，JUnit Vintage提供了兼容JUnit4.x,Junit3.x的测试引擎。
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-fe351880b4d546dcb00532de21a98cf6.png)
注意：
SpringBoot 2.4 以上版本移除了默认对 Vintage 的依赖。如果需要兼容junit4需要自行引入（不能使用junit4的功能 @Test）
JUnit 5’s Vintage Engine Removed from spring-boot-starter-test,
（junite 5 已经将 junite剔除）如果需要继续兼容junit4需要自行引入vintage
```java
<dependency>
    <groupId>org.junit.vintage</groupId>
    <artifactId>junit-vintage-engine</artifactId>
    <scope>test</scope>
    <exclusions>
        <exclusion>
            <groupId>org.hamcrest</groupId>
            <artifactId>hamcrest-core</artifactId>
        </exclusion>
    </exclusions>
</dependency>
```
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-f4af013406e6415e8f7a3a518ea59746.png)

### 1.Junite5引入依赖：
```java
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
```
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-24a8fa8861184bfab90241acd620da39.png)
### 2.使用区别
现在：
 ```java
@SpringBootTest
class Boot05WebAdminApplicationTests {


    @Test
    void contextLoads() {

    }
}

 ```
以前：
@SpringBootTest + @RunWith(SpringTest.class)

SpringBoot整合Junit以后。
- 编写测试方法：@Test标注（注意需要使用junit5版本的注解）
- Junit类具有Spring的功能，@Autowired、比如 
- @Transactional（添加测试方法的事务） 标注测试方法，测试完成后自动回滚
## 2、JUnit5常用注解
JUnit5的注解与JUnit4的注解有所变化
https://junit.org/junit5/docs/current/user-guide/#writing-tests-annotations

如果运行类的单元测试 ，就会把里面的所有的单元测试都跑一遍
- @Test :表示方法是测试方法。但是与JUnit4的@Test不同，他的职责非常单一不能声明任何属性，拓展的测试将会由Jupiter提供额外测试
- @ParameterizedTest :表示方法是参数化测试，下方会有详细介绍
- @RepeatedTest :表示方法可重复执行，下方会有详细介绍
- @DisplayName :为测试类或者测试方法设置展示名称
- @BeforeEach :表示在每个单元测试之前执行
- @AfterEach :表示在每个单元测试之后执行

- @BeforeAll :表示在所有单元测试之前执行 必须是静态的 
- @AfterAll :表示在所有单元测试之后执行 必须是静态的 

- @Tag :表示单元测试类别，类似于JUnit4中的@Categories
- @Disabled :表示测试类或测试方法不执行，类似于JUnit4中的@Ignore

- @Timeout :表示测试方法运行如果超过了指定时间将会返回错误
- @ExtendWith :为测试类或测试方法提供扩展类引用 （对其测试进项推展）
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-40431205c12f4ad3ad304b7b419eaca8.png)
加@SpringBoootTest 自动注入成功
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-f4086074f3bc450883385ed5b0d4b16e.png)


## 3、断言（assertions）
断言（assertions）是测试方法中的核心部分，用来对测试需要满足的条件进行验证。这些断言方法都是 org.junit.jupiter.api.Assertions 的静态方法。JUnit 5 内置的断言可以分成如下几个类别：
检查业务逻辑返回的数据是否合理。
所有的测试运行结束以后，**会有一个详细的测试报告；**
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-823ec85104144514b5ce0e20d44b2f5f.png)
### 1、简单断言
用来对单个值进行简单的验证。如：
方法	                    说明
- assertEquals	判断两个对象或两个原始类型是否相等
- assertNotEquals 判断两个对象或两个原始类型是否不相等
- assertSame	判断两个对象引用是否指向同一个对象
- assertNotSame	判断两个对象引用是否指向不同的对象
- assertTrue	判断给定的布尔值是否为 true
- assertFalse	判断给定的布尔值是否为 false
- assertNull	判断给定的对象引用是否为 null
- assertNotNull	判断给定的对象引用是否不为 null
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-73d6edbc5c234c9195a5c8c24bead096.png)
比较两个对象是否相等
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-1337251fa67f46af98cdd3f2d62eab66.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-b749246cbb654aef82158359a091a1af.png)

### 2、数组断言
通过 assertArrayEquals 方法来判断两个对象或原始类型的数组是否相等
```java
@Test
@DisplayName("array assertion")
public void array() {
 assertArrayEquals(new int[]{1, 2}, new int[] {1, 2});
}
```
### 3、组合断言
assertAll 方法接受多个 org.junit.jupiter.api.Executable 函数式接口的实例作为要验证的断言，可以通过 lambda 表达式很容易的提供这些断言
```java
@Test
@DisplayName("assert all")
public void all() {
 assertAll("Math",
    () -> assertEquals(2, 1 + 1),
    () -> assertTrue(1 > 0)
 );
}
```
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-4fd4f1136df046969093e783986c8e47.png)
Executable  是函数式接口：
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-f1d8e40be2184607ad2a98e312cffd4f.png)
必须全部成功才会执行下面，否则不执行；
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-42093f7668cf428abcd663bd650351dd.png)

### 4、异常断言
我断定你会出现异常，不出现异常就会报错；
在JUnit4时期，想要测试方法的异常情况时，需要用@Rule注解的ExpectedException变量还是比较麻烦的。而JUnit5提供了一种新的断言方式Assertions.assertThrows() ,配合函数式编程就可以进行使用。
```java
@Test
@DisplayName("异常测试")
public void exceptionTest() {
    ArithmeticException exception = Assertions.assertThrows(
           //扔出断言异常
            ArithmeticException.class, () -> System.out.println(1 % 0));

}
```
### 5、超时断言
Junit5还提供了Assertions.assertTimeout() 为测试方法设置了超时时间
```java
@Test
@DisplayName("超时测试")
public void timeoutTest() {
    //如果测试方法时间超过1s将会异常
    Assertions.assertTimeout(Duration.ofMillis(1000), () -> Thread.sleep(500));
}
```
### 6、快速失败
通过 fail 方法直接使得测试失败
```java
@Test
@DisplayName("fail")
public void shouldFail() {
 fail("This should fail");
}
```
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-0fd0b135812a4a4aa1adb57f9847ba4f.png)

### 7.批量的执行测试方法
每一个模块执行完成后 一定要写一个测试方法测试 单个模块是否成功运行
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-4c847d9c839542ebbcfc20449a7b51b0.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-9617bf9ed308402aa20d9b3a925030c5.png)
## 4、前置条件（assumptions）
JUnit 5 中的前置条件（assumptions【假设】）类似于断言，不同之处在于不满足的断言会使得测试方法失败，
而不满足的前置条件只会使得测试方法的**执行终止**。前置条件可以看成是测试方法执行的前提，当该前提不满足时，就没有继续执行的必要。
```java
@DisplayName("前置条件")
public class AssumptionsTest {
 private final String environment = "DEV";
 
 @Test
 @DisplayName("simple")
 public void simpleAssume() {
    assumeTrue(Objects.equals(this.environment, "DEV"));
    assumeFalse(() -> Objects.equals(this.environment, "PROD"));
 }
 
 @Test
 @DisplayName("assume then do")
 public void assumeThenDo() {
    assumingThat(
       Objects.equals(this.environment, "DEV"),
       () -> System.out.println("In DEV")
    );
 }
}
```
assumeTrue 和 assumFalse 确保给定的条件为 true 或 false，不满足条件会使得测试执行终止。
assumingThat 的参数是表示条件的布尔值和对应的 Executable 接口的实现对象。只有条件满足时，Executable 对象才会被执行；当条件不满足时，测试执行并不会终止。
跳过的两种方式： 1.@Diaabled 注解 2.前置条件失败
## 5、嵌套测试
JUnit 5 可以通过 Java 中的内部类和**@Nested 注解实现嵌套测试**，从而可以更好的把相关的测试方法组织在一起。在内部类中可以使用@BeforeEach 和@AfterEach 注解，而且嵌套的层次没有限制
```java
@DisplayName("嵌套测试类")
public class TestingAStackDemo {
    Stack<Object> stack;

    @Test
    @DisplayName("is instantiated with new Stack()")
    void isInstantiatedWithNew() {
        new Stack<>();
    }

    @Nested
    @DisplayName("when new")
    class WhenNew {

        @BeforeEach
        void createNewStack() {
            stack = new Stack<>();
        }

        @Test
        @DisplayName("is empty")
        void isEmpty() {
            assertTrue(stack.isEmpty());
        }

        @Test
        @DisplayName("throws EmptyStackException when popped")
        void throwsExceptionWhenPopped() {
            assertThrows(EmptyStackException.class, stack::pop);
        }

        @Test
        @DisplayName("throws EmptyStackException when peeked")
        void throwsExceptionWhenPeeked() {
            assertThrows(EmptyStackException.class, stack::peek);
        }

        @Nested
        @DisplayName("after pushing an element")
        class AfterPushing {

            String anElement = "an element";

            @BeforeEach
            void pushAnElement() {
                stack.push(anElement);
            }

            @Test
            @DisplayName("it is no longer empty")
            void isNotEmpty() {
                //
                assertFalse(stack.isEmpty());
            }

            @Test
            @DisplayName("returns the element when popped and is empty")
            void returnElementWhenPopped() {
                assertEquals(anElement, stack.pop());
                assertTrue(stack.isEmpty());
            }

            @Test
            @DisplayName("returns the element when peeked but remains not empty")
            void returnElementWhenPeeked() {
                assertEquals(anElement, stack.peek());
                assertFalse(stack.isEmpty());
            }
        }
    }
}
```
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-9ccc84520905488aad6a1290857bc3c4.png)
外层不能调用内层的Beforeeach；
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-ef4d5e9849eb4030babc9c081ae3b7a1.png)
内层可以调用外层的BeforeEach
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-556059b60f4b49b9864b32050dca8a5d.png)
外层不能驱动内层，内层可以驱动外层；
## 6、参数化测试（用不同的参数来测试方法）
参数化测试是JUnit5很重要的一个新特性，它使得用不同的参数多次运行测试成为了可能，也为我们的单元测试带来许多便利。

利用@ValueSource等注解，指定入参，我们将可以使用不同的参数进行多次单元测试，而不需要每新增一个参数就新增一个单元测试，省去了很多冗余代码。

@ValueSource: 为参数化测试指定入参来源，支持八大基础类以及String类型,Class类型
@NullSource: 表示为参数化测试提供一个null的入参
@EnumSource: 表示为参数化测试提供一个枚举入参
@CsvFileSource：表示读取指定**CSV文件**内容作为参数化测试入参
@MethodSource：表示读取指定方法的返回值作为参数化测试入参(注意方法返回需要是一个流)

当然如果参数化测试仅仅只能做到指定普通的入参还达不到让我觉得惊艳的地步。让我真正感到他的强大之处的地方在于他可以支持外部的各类入参。如:CSV,YML,JSON 文件甚至方法的返回值也可以作为入参。只需要去实现ArgumentsProvider接口，任何外部文件都可以作为它的入参。
```java
@ParameterizedTest
@ValueSource(strings = {"one", "two", "three"})
@DisplayName("参数化测试1")
public void parameterizedTest1(String string) {
    System.out.println(string);
    Assertions.assertTrue(StringUtils.isNotBlank(string));
}


@ParameterizedTest
@MethodSource("method")    //指定方法名
@DisplayName("方法来源参数")
public void testWithExplicitLocalMethodSource(String name) {
    System.out.println(name);
    Assertions.assertNotNull(name);
}
//这个方法必须返回流 静态的
static Stream<String> method() {
    return Stream.of("apple", "banana");
}
```
## 7、迁移指南
在进行迁移的时候需要注意如下的变化：
- 注解在 org.junit.jupiter.api 包中，断言在 org.junit.jupiter.api.Assertions 类中，前置条件在 org.junit.jupiter.api.Assumptions 类中。
- 把@Before 和@After 替换成@BeforeEach 和@AfterEach。
- 把@BeforeClass 和@AfterClass 替换成@BeforeAll 和@AfterAll。
- 把@Ignore 替换成@Disabled。 忽略那个测试
- 把@Category 替换成@Tag。  标签
- 把@RunWith、@Rule 和@ClassRule 替换成@ExtendWith。
# 08、指标监控
## 1、SpringBoot Actuator（为了简化指标监控功能）
1、简介未来每一个微服务在云上部署以后，我们都需要对其进行监控、追踪、审计、控制等。SpringBoot就抽取了Actuator场景，使得我们每个微服务快速引用即可获得生产级别的应用监控、审计等功能。
```java
dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-actuator</artifactId>
        </dependency>
```
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-e22bddf326e1493495bf9bfa3e69981e.png)
## 2、1.x与2.x的不同
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-844a4e7c09ce46278eb29b569d98c553.png)

## 3、如何使用
- 引入场景
- 访问 http://localhost:8080/actuator/**
- 暴露所有监控信息为HTTP
```java
management:
  endpoints:
    enabled-by-default: true #暴露所有端点信息
    web:
      exposure:
        include: '*'  #以web方式暴露
```
- 测试
http://localhost:8080/actuator/beans
http://localhost:8080/actuator/configprops
http://localhost:8080/actuator/metrics
http://localhost:8080/actuator/metrics/jvm.gc.pause
http://localhost:8080/actuator/endpointName/detailPath
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-5039ecec59d84cf58f38f25cacf6e9ed.png)
### 4.指标监控的方式：
- HTTP的方式
- JMX的方式
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-86f099a33b024481aff0dfe15db870b3.png)
# 2、Actuator Endpoint
## 1、最常使用的端点
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-5a4ec48ca6354cfcb34e0e7ac0bac41e.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-f853b8dca1604eddb312faa5bad0de12.png)
如果您的应用程序是Web应用程序（Spring MVC，Spring WebFlux或Jersey），则可以使用以下附加端点：
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-855b2f6fc1614f3ba3ad8eba439038a3.png)
最常用的Endpoint
- Health：监控状况
- Metrics：运行时指标 
- Loggers：日志记录
## 2、Health Endpoint
健康检查机制
健康检查端点，我们一般用于在云平台，平台会定时的检查应用的健康状况，我们就需要Health Endpoint可以为平台返回当前应用的一系列组件健康状况的集合。
重要的几点：
- health endpoint返回的结果，应该是一系列健康检查后的一个汇总报告
- 很多的健康检查默认已经自动配置好了，比如：数据库、redis等
- 可以很容易的添加自定义的健康检查机制
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-9f34081de301499686dc6e3faff70887.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-c37a726b35794f5db27567d56403163b.png)
```java
  management:
    endpoints:
      enabled-by-default: true #开启所有的监控端点
      web:
        exposure:
          include: '*'  # 用Html的方式 暴露端点
    endpoint:
      health:
        show-details: always #让Health节点 总是展示详细信息
```
endpoint下面加上 单个组件 就是配置单个 节点的配置信息

## 3、Metrics Endpoint
提供详细的、层级的、空间指标信息，
有两个能力：
这些信息可以被**pull（主动推送）**或者**push（被动获取）**方式得到；
- 通过Metrics对接多种监控系统
- 简化核心Metrics开发
- 添加自定义Metrics或者扩展已有Metrics
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-ceff1c8d5ed34db59df24acf2f1e929b.png)
## 4、管理Endpoints
### 1、开启与禁用Endpoints
默认所有的Endpoint除过shutdown都是开启的。
需要开启或者禁用某个Endpoint。配置模式为  
```java

management.endpoint.<endpointName>.enabled = true

```

management:
```java
management:
  endpoint:
    beans:
      enabled: true
```
或者禁用所有的Endpoint然后手动开启指定的Endpoint
先 全部关闭，然后单个在开启；
```java
management:
  endpoints:
    enabled-by-default: false
  endpoint:
    beans:
      enabled: true
    health:
      enabled: true

```

### 2、暴露Endpoints
支持的暴露方式
- HTTP：默认只暴露health和info Endpoint
- JMX：默认暴露所有Endpoint
- 除过health和info，剩下的Endpoint都应该进行保护访问。如果引入SpringSecurity，则会默认配置安全访问规则
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-d5840d20df14488cabbe93483f1ea358.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-2bd816309d424000905dde808d904f24.png)
# 3、定制 Endpoint
1、定制 Health 信息
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-8b77c5ede3c542c58e515d2f917ddcf8.png)
1、SpringBoot支持自动适配的Metrics
2、增加定制Metrics
```java
class MyService{
    Counter counter;
    public MyService(MeterRegistry meterRegistry){
         counter = meterRegistry.counter("myservice.method.running.counter");
    }

    public void hello() {
        counter.increment();
    }
}


//也可以使用下面的方式
@Bean
MeterBinder queueSize(Queue queue) {
    return (registry) -> Gauge.builder("queueSize", queue::size).register(registry);
}
```
4、定制Endpoint
```java
@Component
@Endpoint(id = "container")
public class DockerEndpoint {


    @ReadOperation
    public Map getDockerInfo(){
        return Collections.singletonMap("info","docker started...");
    }

    @WriteOperation
    private void restartDocker(){
        System.out.println("docker restarted....");
    }

}
```
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-57b5370c4ad9491483b8cedec32d09b8.png)
场景：开发ReadinessEndpoint来管理程序是否就绪，或者LivenessEndpoint来管理程序是否存活；
## 4.创建可视化服务器
创建一个可视化服务器，用来接受上面的健康信息的参数，可视化展示；
### 1.导入依赖
```java
<dependency>
    <groupId>de.codecentric</groupId>
    <artifactId>spring-boot-admin-starter-server</artifactId>
    <version>2.5.1</version>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
```
### 2.修改启动类
```java
@Configuration
@EnableAutoConfiguration
@EnableAdminServer
public class SpringBootAdminApplication {
    public static void main(String[] args) {
        SpringApplication.run(SpringBootAdminApplication.class, args);
    }
}
```
3.启动服务
启动页面如下：
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-69508b22510349769863493719cae711.png)
4.与我们的服务器连接
导入依赖
```java
<dependency>
    <groupId>de.codecentric</groupId>
    <artifactId>spring-boot-admin-starter-client</artifactId>
    <version>2.5.1</version>
</dependency>
```
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-e2d97461fc6f4bf09a1f56c965f70de3.png)

5.连接成功
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-f292e0846d764d96926e06942d2a89b6.png)

