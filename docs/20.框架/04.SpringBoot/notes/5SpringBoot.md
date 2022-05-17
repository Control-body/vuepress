---
title: SpringBoot(5)-SpringBoot数据库
tags:
- SpringBoot数据库
---
# 1、SQL1、数据源的自动配置-HikariDataSource
### 1、导入JDBC场景
```java
  <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-jdbc</artifactId>
        </dependency>
```
数据库驱动？
为什么导入JDBC场景，官方不导入驱动？官方不知道我们接下要操作什么数据库。
数据库版本和驱动版本对应
```java
默认版本：<mysql.version>8.0.22</mysql.version>

        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
<!--            <version>5.1.49</version>-->
        </dependency>
想要修改版本
1、直接依赖引入具体版本（maven的就近依赖原则）
2、重新声明版本（maven的属性的就近优先原则）
    <properties>
        <java.version>1.8</java.version>
        <mysql.version>5.1.49</mysql.version>
    </properties>
```
## 2、分析自动配置
### 1、自动配置的类
● DataSourceAutoConfiguration ： 数据源的自动配置
  ○ 修改数据源相关的配置：spring.datasource
  ○ 数据库连接池的配置，是自己容器中没有DataSource才自动配置的
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-9b72588fd6ff42b69330102d77fddf0c.png)
  ○ 底层配置好的连接池是：HikariDataSource
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-410f5093f98245fbbc24553c68e8f084.png)
也可以动态的指定；
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-1e84db0faaa448a6a5f05e55adefb31f.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-c99ade72ceff44c988fcc035e391a2f9.png)
● DataSourceTransactionManagerAutoConfiguration： 事务管理器的自动配置


● JdbcTemplateAutoConfiguration： JdbcTemplate的自动配置，可以来对数据库进行crud
  ○ 可以修改这个配置项@ConfigurationProperties(prefix = "spring.jdbc") 来修改JdbcTemplate
  ○ @Bean@Primary    JdbcTemplate；容器中有这个组件
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-4b8a995561ba4f4abb1d15e9d1e05292.png)

● JndiDataSourceAutoConfiguration： jndi的自动配置
● XADataSourceAutoConfiguration： 分布式事务相关的
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-d84dcb4cd76248a1ac56478398905b22.png)
## 3.分析自动配置的类
● DataSourceAutoConfiguration ： 数据源的自动配置
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-06e021a3569842c386162eab4f3d21db.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-6cd09f415aa14eac9977c54d0d8d0c2f.png)
默认配置了 数据源 （德鲁伊 csp0 ）


## 4.配置文件的编写

```java
spring:
  datasource:  #数据源的配置
    url: jdbc:mysql://localhost:3306/book?useSSL=false
    username: root
    password: 19182030
    driver-class-name: com.mysql.jdbc.Driver
    type: com.zaxxer.hikari.HikariDataSource  //配置指定的数据源 （默认的写不写都一样）
```

## 5.测试
```java
 @Autowired
    JdbcTemplate jdbcTemplate;
    @Autowired
    DataSource dataSource;
    @Test
    void contextLoads() {
        Long aLong = jdbcTemplate.queryForObject("select count(*) from t_user", Long.class);
        log.info("zongshu: {}",aLong);
        log.info("数据源类型：{}",dataSource.getClass());
    }
```

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-2e6cbfca6fed4779afc693fd4af3e7c6.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-5c7b9dfd37ca4459a1db69560da03d18.png)


# 2、使用Druid数据源
## 1、druid官方github地址
https://github.com/alibaba/druid
整合第三方技术的两种方式
● 自定义
● 找starter

## 2、自定义方式
### 1、创建数据源
```java
    <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>druid</artifactId>
            <version>1.1.17</version>
        </dependency>

<bean id="dataSource" class="com.alibaba.druid.pool.DruidDataSource"
		destroy-method="close">
		<property name="url" value="${jdbc.url}" />
		<property name="username" value="${jdbc.username}" />
		<property name="password" value="${jdbc.password}" />
		<property name="maxActive" value="20" />
		<property name="initialSize" value="1" />
		<property name="maxWait" value="60000" />
		<property name="minIdle" value="1" />
		<property name="timeBetweenEvictionRunsMillis" value="60000" />
		<property name="minEvictableIdleTimeMillis" value="300000" />
		<property name="testWhileIdle" value="true" />
		<property name="testOnBorrow" value="false" />
		<property name="testOnReturn" value="false" />
		<property name="poolPreparedStatements" value="true" />
		<property name="maxOpenPreparedStatements" value="20" />
```
### 2、StatViewServlet
StatViewServlet的用途包括：
● 提供监控信息展示的html页面
● 提供监控信息的JSON API
```java
	<servlet>
		<servlet-name>DruidStatView</servlet-name>
		<servlet-class>com.alibaba.druid.support.http.StatViewServlet</servlet-class>
	</servlet>
	<servlet-mapping>
		<servlet-name>DruidStatView</servlet-name>
		<url-pattern>/druid/*</url-pattern>
	</servlet-mapping>
```
### 3、StatFilter
用于统计监控信息；如SQL监控、URI监控
```java
需要给数据源中配置如下属性；可以允许多个filter，多个用，分割；如：

<property name="filters" value="stat,slf4j" />
```

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-dcf891c32bdd4578a5e20b2c23a0d23e.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-a91a2b032c7b47eebad249959c10439d.png)
配置SQL监控：
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-cd9b7c58969947dc82df26194e41c411.png)

配置URI监控：



## 3、使用官方starter方式
可以去掉 
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-2511925cc24c470dacdf7e22e713081a.png)
导入了自动配置类
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-8856b86a970e4f3b9a17f0b0cd951989.png)
引入官方的Start 就 啥也不需要写了（配置类）
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-e9027ac34e5e4ebc816065385edf377e.png)
### 1、引入druid-starter
```java
  <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>druid-spring-boot-starter</artifactId>
            <version>1.1.17</version>
        </dependency>
```
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-6676491239944520b3d7e59ef82be0ff.png)
### 2、分析自动配置
● 扩展配置项 spring.datasource.druid
● DruidSpringAopConfiguration.class,   监控Spring组件的；配置项：spring.datasource.druid.aop-patterns
● DruidStatViewServletConfiguration.class, 监控页的配置：spring.datasource.druid.stat-view-servlet；**默认开启**
●  DruidWebStatFilterConfiguration.class, web监控配置；spring.datasource.druid.web-stat-filter；**默认开启**
● DruidFilterConfiguration.class})（防火墙 sql监控等） 所有Druid自己filter的配置

```java
    private static final String FILTER_STAT_PREFIX = "spring.datasource.druid.filter.stat";
    private static final String FILTER_CONFIG_PREFIX = "spring.datasource.druid.filter.config";
    private static final String FILTER_ENCODING_PREFIX = "spring.datasource.druid.filter.encoding";
    private static final String FILTER_SLF4J_PREFIX = "spring.datasource.druid.filter.slf4j";
    private static final String FILTER_LOG4J_PREFIX = "spring.datasource.druid.filter.log4j";
    private static final String FILTER_LOG4J2_PREFIX = "spring.datasource.druid.filter.log4j2";
    private static final String FILTER_COMMONS_LOG_PREFIX = "spring.datasource.druid.filter.commons-log";
    private static final String FILTER_WALL_PREFIX = "spring.datasource.druid.filter.wall";
```
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-d87fc6677d924d4e81ddc7da4906a456.png)
### 3、配置示例
```java
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/db_account
    username: root
    password: 123456
    driver-class-name: com.mysql.jdbc.Driver
    druid:
      aop-patterns: com.atguigu.admin.*  #监控SpringBean对应那个包下
      filters: stat,wall     # 底层开启功能，stat（sql监控），wall（防火墙）
      stat-view-servlet:   # 配置监控页功能
        enabled: true
        login-username: admin
        login-password: admin
        resetEnable: false
      web-stat-filter:  # 监控web
        enabled: true
        urlPattern: /*
        exclusions: '*.js,*.gif,*.jpg,*.png,*.css,*.ico,/druid/*'
      filter:
        stat:    # 对上面filters里面的stat的详细配置
          slow-sql-millis: 1000
          logSlowSql: true
          enabled: true
        wall:
          enabled: true
          config:
            drop-table-allow: false
```
SpringBoot配置示例
https://github.com/alibaba/druid/tree/master/druid-spring-boot-starter

配置项列表https://github.com/alibaba/druid/wiki/DruidDataSource%E9%85%8D%E7%BD%AE%E5%B1%9E%E6%80%A7%E5%88%97%E8%A1%A8


# 3、整合MyBatis操作
https://github.com/mybatis
starter
SpringBoot官方的Starter：spring-boot-starter-*
第三方的： *-spring-boot-starter
```java
        <dependency>
            <groupId>org.mybatis.spring.boot</groupId>
            <artifactId>mybatis-spring-boot-starter</artifactId>
            <version>2.1.4</version>
        </dependency>
```
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-f87d1b448a254401b3120452f6847056.png)
## 1、配置模式
之前的样子：
● 全局配置文件 
● SqlSessionFactory: 自动配置好了
● SqlSession：自动配置了 SqlSessionTemplate (组合了SqlSession)
● @Import(AutoConfiguredMapperScannerRegistrar.class）；配置mapper的文件位置；
● Mapper： 只要我们写的操作MyBatis的接口标准了 @Mapper 就会被自动扫描进来

```java
@EnableConfigurationProperties(MybatisProperties.class) ： MyBatis配置项绑定类。
@AutoConfigureAfter({ DataSourceAutoConfiguration.class, MybatisLanguageDriverAutoConfiguration.class })
public class MybatisAutoConfiguration{}

@ConfigurationProperties(prefix = "mybatis")
public class MybatisProperties
```
1.完成mybatis.xml文件；
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-8cd86dfba8d440cf95bebc0c2cfd700f.png)
2.yaml文件配置
```java
# 配置mybatis规则
mybatis:
  config-location: classpath:mybatis/mybatis-config.xml  #全局配置文件位置
  mapper-locations: classpath:mybatis/mapper/*.xml  #sql映射文件位置

Mapper接口--->绑定Xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.atguigu.admin.mapper.AccountMapper">
<!--    public Account getAcct(Long id); -->
    <select id="getAcct" resultType="com.atguigu.admin.bean.Account">
        select * from  account_tbl where  id=#{id}
    </select>
</mapper>
```
配置 private Configuration configuration;
 mybatis.configuration下面的所有，就是相当于改mybatis全局配置文件中的值
```java
# 配置mybatis规则
mybatis:
#  config-location: classpath:mybatis/mybatis-config.xml
  mapper-locations: classpath:mybatis/mapper/*.xml
  configuration:
    map-underscore-to-camel-case: true
    
 可以不写全局；配置文件，所有全局配置文件的配置都放在configuration配置项中即可
```
● 导入mybatis官方starter
● 编写mapper接口。标准@Mapper注解
● 编写sql映射文件并绑定mapper接口
● 在application.yaml中指定Mapper配置文件的位置，以及指定全局配置文件的信息 （建议；配置在mybatis.configuration）

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-f463f97d094a4d1c8c92bfca442f8505.png)
### mybatis测试：
## 2、注解模式
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-34d503e2f2fc4a7991375c09b2e4519f.png)
## 3、混合模式
```java
@Mapper
public interface CityMapper {

    @Select("select * from city where id=#{id}")
    public City getById(Long id);

    public void insert(City city);

}

```
最佳实战：
● 引入mybatis-starter
● 配置application.yaml中，指定mapper-location位置即可
● 编写Mapper接口并标注@Mapper注解
● 简单方法直接注解方式
● 复杂方法编写mapper.xml进行绑定映射
● @MapperScan("com.atguigu.admin.mapper") 简化，其他的接口就可以不用标注@Mapper注解


# 4、整合 MyBatis-Plus 完成CRUD
## 1、什么是MyBatis-Plus
MyBatis-Plus（简称 MP）是一个 MyBatis 的增强工具，在 MyBatis 的基础上只做增强不做改变，为简化开发、提高效率而生。
mybatis plus 官网
建议安装 MybatisX 插件 
2、整合MyBatis-Plus
```java
  <dependency>
            <groupId>com.baomidou</groupId>
            <artifactId>mybatis-plus-boot-starter</artifactId>
            <version>3.4.1</version>
        </dependency>
```
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-ef62fa4001e746d0b13ce747022a1383.png)
自动配置
● MybatisPlusAutoConfiguration 配置类，MybatisPlusProperties 配置项绑定。 (开头 )mybatis-plus：xxx就是对mybatis-plus的定制
● SqlSessionFactory 自动配置好。**底层从容器中拿 默认的数据源**
● mapperLocations 自动配置好的。**有默认值**。classpath*:/mapper/**/*.xml；类路径下的所有mapper文件夹下任意路径下的所有xml都是sql映射文件。  建议以后sql映射文件，放在 mapper下
● 容器中也自动配置好了 SqlSessionTemplate
● @Mapper 标注的接口也会被**自动扫描**；建议直接 @MapperScan("com.atguigu.admin.mapper") 批量扫描就行
优点：
●  只需要我们的Mapper继承 BaseMapper 就可以拥有crud能力
```java
    @GetMapping("/user/delete/{id}")
    public String deleteUser(@PathVariable("id") Long id,
                             @RequestParam(value = "pn",defaultValue = "1")Integer pn,
                             RedirectAttributes ra){

        userService.removeById(id);

        ra.addAttribute("pn",pn);
        return "redirect:/dynamic_table";
    }


    @GetMapping("/dynamic_table")
    public String dynamic_table(@RequestParam(value="pn",defaultValue = "1") Integer pn,Model model){
        //表格内容的遍历
//        response.sendError
//     List<User> users = Arrays.asList(new User("zhangsan", "123456"),
//                new User("lisi", "123444"),
//                new User("haha", "aaaaa"),
//                new User("hehe ", "aaddd"));
//        model.addAttribute("users",users);
//
//        if(users.size()>3){
//            throw new UserTooManyException();
//        }
        //从数据库中查出user表中的用户进行展示

        //构造分页参数
        Page<User> page = new Page<>(pn, 2);
        //调用page进行分页
        Page<User> userPage = userService.page(page, null);


//        userPage.getRecords()
//        userPage.getCurrent()
//        userPage.getPages()


        model.addAttribute("users",userPage);

        return "table/dynamic_table";
    }
```
2.Service

```java
@Service
public class UserServiceImpl extends ServiceImpl<UserMapper,User> implements UserService {


}

public interface UserService extends IService<User> {

}
```

# 5、NoSQL
Redis 是一个开源（BSD许可）的，内存中的数据结构存储系统，它可以用作数据库、缓存和消息中间件。 它支持多种类型的数据结构，如 字符串（strings）， 散列（hashes）， 列表（lists）， 集合（sets）， 有序集合（sorted sets） 与范围查询， bitmaps， hyperloglogs 和 地理空间（geospatial） 索引半径查询。 Redis 内置了 复制（replication），LUA脚本（Lua scripting）， LRU驱动事件（LRU eviction），事务（transactions） 和不同级别的 磁盘持久化（persistence）， 并通过 Redis哨兵（Sentinel）和自动 分区（Cluster）提供高可用性（high availability）

## 1、Redis自动配置
```java
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-redis</artifactId>
        </dependency>
```
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-3cfe81c12aa840298bc73932ed356af5.png)
自动配置：
● RedisAutoConfiguration 自动配置类。RedisProperties 属性类 --> spring.redis.xxx是对redis的配置
● 连接工厂是准备好的。LettuceConnectionConfiguration、JedisConnectionConfiguration
● 自动注入了RedisTemplate<Object, Object> ： xxxTemplate；
● 自动注入了StringRedisTemplate；k：v都是String
● key：value
● 底层只要我们使用 StringRedisTemplate、RedisTemplate就可以操作redis
## 2、RedisTemplate与Lettuce
```java
    @Test
    void testRedis(){
        ValueOperations<String, String> operations = redisTemplate.opsForValue();

        operations.set("hello","world");

        String hello = operations.get("hello");
        System.out.println(hello);
    }
```
## 3、切换至jedis
```java
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-redis</artifactId>
        </dependency>

<!--        导入jedis-->
        <dependency>
            <groupId>redis.clients</groupId>
            <artifactId>jedis</artifactId>
        </dependency>

yam配置；
spring:
  redis:
      host: r-bp1nc7reqesxisgxpipd.redis.rds.aliyuncs.com
      port: 6379
      password: lfy:Lfy123456
      client-type: jedis
      jedis:
        pool:
          max-active: 10
```



