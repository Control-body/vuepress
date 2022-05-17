---
title: MyBatisPlus
---
## 一 定义：
官方文档： https://baomidou.com/pages/24112f/#%E7%89%B9%E6%80%A7
MyBatis-Plus (opens new window)（简称 MP）是一个 MyBatis (opens new window)的增强工具，在 MyBatis 的基础上只做增强不做改变，为简化开发、提高效率而生。
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-daf53af6977c4221b70b47ed6d6b9572.png)

## 二 特性：
- 无侵入：只做增强不做改变，引入它不会对现有工程产生影响，如丝般顺滑

- 损耗小：启动即会自动注入基本 CURD，性能基本无损耗，直接面向对象操作，BaseMapper

- 强大的 CRUD 操作：内置通用 Mapper、通用 Service，仅仅通过少量配置即可实现单表大部分 CRUD 操作，更有强大的条件构造器，满足各类使用需求，以后简单的CRUD操作，不用自己编写了 ！

- 支持 Lambda 形式调用：通过 Lambda 表达式，方便的编写各类查询条件，无需再担心字段写错

- 支持主键自动生成：支持多达 4 种主键策略（内含分布式唯一 ID 生成器 - Sequence），可自由配置，完美解决主键问题

- 支持 ActiveRecord 模式：支持 ActiveRecord 形式调用，实体类只需继承 Model 类即可进行强大的 CRUD 操作

- 支持自定义全局通用操作：支持全局通用方法注入（ Write once, use anywhere ）

- 内置代码生成器：采用代码或者 Maven 插件可快速生成 Mapper 、 Model 、 Service 、 Controller 层代码，支持模板引擎，更有超多自定义配置等您来使用（自动帮你生成代码）

- 内置分页插件：基于 MyBatis 物理分页，开发者无需关心具体操作，配置好插件之后，写分页等同于普通 List 查询

- 分页插件支持多种数据库：支持 MySQL、MariaDB、Oracle、DB2、H2、HSQL、SQLite、Postgre、SQLServer 等多种数据库

- 内置性能分析插件：可输出 Sql 语句以及其执行时间，建议开发测试时启用该功能，能快速揪出慢查询

- 内置全局拦截插件：提供全表 delete 、 update 操作智能分析阻断，也可自定义拦截规则，预防误操作
## 三 HelloWorld
###  1 pojo （）

### 2 service

### 3.Controller

在之前的Mybatis里面需要写 xml文件和 接口 （接口绑定在 xml文件上）

在Idea里面 创建 SpringBoot项目

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-dcf252aaa1644d82ba9f702c2ae8bb41.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-1174397b812f4cd69da93024bce8046d.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-786c5f1000574126b992f56d8ffc4dfe.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-fc65fc40b9124d49b24de4367837a34f.png)

### 4.加入日志

由于sql语句是 自动生成的 可以加日志来看操做 流程

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-dd91e86a575c4cc399e8de77e8b1b86e.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-891810a753434cc2b1d4f40a8dbfab9a.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-f7a7f020d9eb465c826943ea3cac5d49.png)

```java
package com.wsk;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
//扫描mapper包下的所有接口
@MapperScan("com.wsk.mapper")
@SpringBootApplication
public class MybatisPlusApplication {
    public static void main(String[] args) {
        SpringApplication.run(MybatisPlusApplication.class, args);
    }
}
```
记得要加入 注解 在接口上 加入 @Response  @Mapper或者启动类中MapperScan扫描
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-32fd2c70ae8d439995384a9acdf17737.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-07a53bec87d24b3e9ddda9f7221b6215.png)

- 数据库传入的 ID 全局唯一的ID
### 5.主键生成策略

非空 且 唯一

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-d73bf58ea4294923aaf3374821ae8e5f.png)
### 6.ID_WORKER 全局唯一Id
默认 : ID_WORKER 全局唯一Id
分布式系统唯一Id生成：https://www.cnblogs.com/haoxinyue/p/5208136.html
### 7.雪花算法
snowflake是Twitter开源的分布式ID生成算法，结果是一个**long**型的ID。其核心思想是：使用41bit作为毫秒数，10bit作为机器的ID（5个bit是数据中心（北京、香港···），5个bit的机器ID），12bit作为毫秒内的流水号（意味着每个节点在每毫秒可以产生 4096 个 ID），最后还有一个符号位，永远是0。id 几乎保证全球为一；
具体实现的代码可以参看https://github.com/twitter/snowflake。

### 8.主键自增：AUTO 我们需要配置主键自增
我们需要配置主键自增

在实体类字段上配置@TableId(type = IdType.AUTO)

数据库字段一定是自增

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-b2cb5b5492be4b9eb1abbff4f751f875.png)
IdType类是个 枚举类 包含以下的 属性：

- AUTO 数据库ID自增
- INPUT 用户输入ID
- ID_WORKER 全局唯一ID，Long类型的主键（默认）
- ID_WORKER_STR 字符串全局唯一ID
- UUID 全局唯一ID，UUID类型的主键
- NONE 该类型为未设置主键类型
  ![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-e4c0bfa7e5604409ad2d752a07acda66.png)
  ![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-c9b8eb5a4f304396a2a9c9e952972b4a.png)
  ![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-6403440c29fa418abefd8e81df7dd58b.png)

### 9.InPut 手动输入
当写成手动输入的时候 就是 
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-036dd87e4b454008ab6f4267a14d0ff4.png)
### 10.更新操作：
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-8dd7ae39366744d781abb586db275a01.png)
根据 查到的 ID值进行 更新
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-fbc63491ce464ea2afdf557306bfd3b3.png)
当你修改其他值的时候 他会帮你 拼接动态SQL

### 11.自动填充

创建时间 修改时间 这些都是自动化完成的 不需要手动 更新
阿里巴巴开发手册︰几乎所有的表都要配置 gmt_create、gmt_modified ！而且需要自动化 （创建和修改时间）

#### 方式一 数据库级别(不建议 使用)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-e5a9342709ac44fba99ad12746fc0c14.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-4ebeb6a597a742f4a254776c22daddb6.png)

#### 方式二 代码级别

1. 删除之前在数据库加入的数值
  ![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-945683afbf014034abd0b3e4b55b8e4f.png)
2. 直接加上 我们mysql——plus 的注解就可实现
   ![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-4faef08686ac443e89f95c585399d319.png)
    @TableField(fill = FieldFill.INSERT)只在 创建的时候 
    private Date createTime;//驼峰命名 
    @TableField(fill = FieldFill.INSERT_UPDATE) 在 创建和就修改的时候
    private Date updateTime;
3. 自己实现自己写的接口
```java
@Slf4j
@Component
public class MyMetaObjectHandler implements MetaObjectHandler {
    //插入的时候的 填充策略
    @Override
    public void insertFill(MetaObject metaObject) {
        log.info("start insert fill..");
        this.setFieldValByName("createTime",new Date(),metaObject);
        this.setFieldValByName("updateTime",new Date(),metaObject);
        
    }
   // g跟新时候的 删除策略
    @Override
    public void updateFill(MetaObject metaObject) {
        log.info("start update dill");
        this.setFieldValByName("updateTime",new Date(),metaObject);

    }
}
```
也一定要 吧写好的 接口放入 ioc 容器里面 （这样才可以 传入处理）

## 四 遇到的问题

### iservice和basemapper的区别
**BaseMapper** 是Mapper层或者叫Dao层的接口。

**IService** 是业务逻辑层接口。

你开发的是否分层吧，不同层继承不同层的接口。MP还有个通用Service的实现类，叫ServiceImpl，他本身也实现了IService。你的service可以继承ServiceImpl，省着你一些简单的方法，还需要在service中写一遍了。

## 五 乐观锁&悲观锁
在面试过程中经常被问到乐观锁/悲观锁，这个其实很简单

- 乐观锁：顾名思义十分乐观,他总是认为**不会出现问题**,无论干什么都不上锁!如果出现了问题,再次更新值测试

- 悲观锁：顾名思义十分悲观,他**总是认为出现问题**,无论干什么都会上锁!再去操作!
  我们这里主要讲解 乐观锁机制!

#### 乐观锁实现方式:

- 取出记录时,获取当前version
- 更新时,带上这个version
- 执行更新时,set version = newVersion where version = oldVersion
- 如果version不对,就更新失败
```java
乐观锁：先查询，获得版本号
-- A
update user set name = "wsk",version = version+1 
where id = 1 and version = 1
-- B  （B线程抢先完成，此时version=2，会导致A线程修改失败！）
update user set name = "wsk",version = version+1 
where id = 1 and version = 1
```
##### 实现：

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-da5211c2d6a34d2e8a944135585f12fa.png)

##### 1.首先完善数据库 加入version 默认值为 一

##### 2.完善实体类

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-5cc1e3ba4bec4abe8185931b5bd80591.png)



##### 3.注册组件

```java

//扫描mapper文件夹
@MapperScan("com.example.mybatis_plus.mapper")//交给mybatis做的，可以让这个配置类做扫描
@EnableTransactionManagement//自动管理事务
@Configuration//配置类
public class MyBatisPLusConfig {
    //注册乐观锁插件
    //注册乐观锁插件
    @Bean
    public OptimisticLockerInterceptor optimisticLockerInterceptor(){
        return new OptimisticLockerInterceptor();
    }

}

```
**OptimisticLockerInterceptor**是一个拦截器 进行自动化的处理
##### 测试
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-fee296d3f5a24641ae2b7746f6a1eab9.png)
```java
  //测试乐观锁
    @Test
    public void testOptimisticLocker(){
        User user = userMapper.selectById(1L);
        user.setAge(3);
        user.setName("xixi");
        user.setEmail("sdafds@qq.com");
        int i = userMapper.updateById(user);
    }
```
失败情况：
```java
@Test//测试乐观锁失败  多线程下
public void testOptimisticLocker2(){
    //线程1
    User user1 = userMapper.selectById(1L);
    user1.setAge(1);
    user1.setEmail("2803708553@qq.com");
    //模拟另外一个线程执行了插队操作
    User user2 = userMapper.selectById(1L);
    user2.setAge(2);
    user2.setEmail("2803708553@qq.com");
    userMapper.updateById(user2);
    //自旋锁来多次尝试提交！
    userMapper.updateById(user1);//如果没有乐观锁就会覆盖插队线程的值
}
```
## 六 插入
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-5f30403b9c304e9eb273891803eb5e60.png)

```java
@Test
    public  void testSelectById(){
        List<User> users = userMapper.selectBatchIds(Arrays.asList(1, 2, 3));
        users.forEach(System.out::println);
    }
```
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-9c2d7ee71ba04dc6a145e41c4ddeb242.png)
## 七 分页查询
分页在网站的使用十分之多！
```java
@Test//测试分页查询
public void testPage(){
    //参数一current：当前页   参数二size：页面大小
    //使用了分页插件之后，所有的分页操作都变得简单了
    Page<User> page = new Page<>(2,5);
    userMapper.selectPage(page,null);
    page.getRecords().forEach(System.out::println);
    System.out.println("总页数==>"+page.getTotal());
}
```
1、原始的limit分页

2、pageHelper第三方插件

3、MybatisPlus其实也内置了分页插件！

### 1.如何使用
1.配置拦截器 在配置类中添加 Bean

```java
  @Bean
    public PaginationInterceptor paginationInterceptor(){
        return new PaginationInterceptor();
    }


```
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-831ee5f454a843eabfa76f6d328c0e50.png)
在所有的分页中 首先 都是先查询下 总数
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-407cc6075a5844418f50963a284a0750.png)

## 八 删除
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-0652707a593d4355894b05bb34462211.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-0a1fe52e63e4466aa8266b4ff656abd5.png)
```java
@Test
public void testDeleteById(){
    userMapper.deleteById(1359507762519068681L);
}
@Test
public void testDeleteBatchIds(){
  userMapper.deleteBatchIds(Arrays.asList(1359507762519068675L,1359507762519068676L));
}
@Test
public void testD(){
    HashMap<String, Object> map = new HashMap<>();
    map.put("age","18");
    map.put("name","lol");
    userMapper.deleteByMap(map);
}
```
## 九 逻辑删除
物理删除：从数据库中直接删除

逻辑删除：在数据库中没有被删除，而是通过一个变量来使他失效！ deleted=0 ==> deleted=1

管理员可以查看被删除的记录！防止数据的丢失，类似于回收站！

测试一下：

### 1、在数据表中增加一个deleted字段

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-f24e7fc3a9654d31a5a3a8469bfeb6a5.png)

### 2 在实体类中 加入对应的属性

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-af3a1f8e88fd4f158e0ba64ff0129b45.png)

### 3.添加相关的配置

```Java
@Bean
    public ISqlInjector sqlInjector(){
        return new LogicSqlInjector();
    }

```
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-78aad3a54b474eac9c6287241105e898.png)

### 4.在yam文件中添加配置

```java
#配置逻辑删除  没删除的为0 删除的为1
mybatis-plus.global-config.db-config.logic-delete-value=1
mybatis-plus.global-config.db-config.logic-not-delete-value=0
```
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-ee7968ba1b3f4943873ee38edb7eb306.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-063b9e05efbf433f99471a1957dc1351.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-5ce19616a53b41f2861474b8460ea945.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-811f938d1ab6490c80340a7027b1476a.png)
## 十 性能分析插件
我们在平时的开发中，会遇到一些满Sql。测试、druid···

MybatisPlus也提供了性能分析插件，如果超过这个时间就停止运行！
性能分析拦截器作用：用于输出每条sql语句及其执行时间
这些性能插件 都是写在 生产和测试的环境下的 

### 1、导入插件

```java
 //性能分析插件
@Bean
@Profile({"dev","test"})//设置dev开发、test测试 环境开启  保证我们的效率
public PerformanceInterceptor performanceInterceptor(){
    PerformanceInterceptor performanceInterceptor = new PerformanceInterceptor();
    performanceInterceptor.setMaxTime(100);//设置sql最大执行时间*ms，如果超过了则不执行
    performanceInterceptor.setFormat(true);//开启sql格式化
    return performanceInterceptor;
}

```
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-07cf7e9db4ea4efd9b12f8c3054f8801.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-a5f6c3c089b64d808b3228f2fe9add8a.png)
找出来 慢查询 进行优化；
### 2.条件构造器（Wapper）
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-8fb393f89bbe4fc0af39cd7667abb073.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-d463a18f50794df2a516f008e7f99ca6.png)
```java
@Test
public void testWrapper2() {
    //查询name=wsk的用户
    QueryWrapper<User> wrapper = new QueryWrapper<>();
    wrapper.eq("name","wsk");
    //查询一个数据selectOne，若查询出多个会报错
    //Expected one result (or null) to be returned by selectOne(), but found: *
    //若出现多个结果使用list或map
    User user = userMapper.selectOne(wrapper);//查询一个数据，若出现多个结果使用list或map
    System.out.println(user);
}

```

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-612f3dc587934107a6015122a86844d0.png)
在 之间的 条件
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-17792b0dca334c8e878b5ce97cabbd9b.png)
模糊查询
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-ecb939b2091e430599099f029134d7b2.png)
子查询
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-53c909b5bbc74406967d125ef2aa283d.png)
排序 通过Id进行排序
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-a33ad3ae174e4307bcd87d04f6674286.png)

## 十一 代码自生成器!

pojo controller 等都自动生成
AutoGenerator 是 MyBatis-Plus 的代码生成器，通过 AutoGenerator 可以快速生成 Entity、Mapper、Mapper XML、Service、Controller 等各个模块的代码，极大的提升了开发效率。
### 测试
1.构建代码生成器对象
```java
package com.example.mybatis_plus;

import com.baomidou.mybatisplus.annotation.DbType;
import com.baomidou.mybatisplus.annotation.FieldFill;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.generator.AutoGenerator;
import com.baomidou.mybatisplus.generator.config.DataSourceConfig;
import com.baomidou.mybatisplus.generator.config.GlobalConfig;
import com.baomidou.mybatisplus.generator.config.PackageConfig;
import com.baomidou.mybatisplus.generator.config.StrategyConfig;
import com.baomidou.mybatisplus.generator.config.po.TableFill;
import com.baomidou.mybatisplus.generator.config.rules.DateType;
import com.baomidou.mybatisplus.generator.config.rules.NamingStrategy;

import java.util.ArrayList;

//代码自动生成器
public class WskCode {
    public static void main(String[] args) {
        //我们需要构建一个代码生成器对象
        AutoGenerator mpg = new AutoGenerator();
        //怎么样去执行，配置策略
        //1、全局配置
        GlobalConfig gc = new GlobalConfig();
        String projectPath = System.getProperty("user.dir");//获取当前目录
        gc.setOutputDir(projectPath + "/src/main/java");//输出到哪个目录
        gc.setAuthor("Liubin");
        gc.setOpen(false);
        gc.setFileOverride(false);//是否覆盖
        gc.setServiceName("%sService");//去Service的I前缀
        gc.setIdType(IdType.ID_WORKER);
        gc.setDateType(DateType.ONLY_DATE);
        gc.setSwagger2(true);
        mpg.setGlobalConfig(gc);
        //2、设置数据源
        DataSourceConfig dsc = new DataSourceConfig();
        dsc.setUsername("root");
        dsc.setPassword("19182030");
        dsc.setUrl("jdbc:mysql://localhost:3306/mybatis_plus?useSSL=false&serverTimezone=GMT%2B8&useUnicode=true&characterEncoding=utf-8");
        dsc.setDriverName("com.mysql.cj.jdbc.Driver");
        dsc.setDbType(DbType.MYSQL);
        mpg.setDataSource(dsc);
        //3、包的配置
        PackageConfig pc = new PackageConfig();
        pc.setModuleName("study");
        pc.setParent("com.wsk");
        pc.setEntity("pojo");
        pc.setMapper("mapper");
        pc.setService("service");
        pc.setController("controller");
        mpg.setPackageInfo(pc);
        //4、策略配置
        StrategyConfig strategy = new StrategyConfig();
        strategy.setInclude("user","ndb_binlog_index");//设置要映射的表名,只需改这里即可
        strategy.setNaming(NamingStrategy.underline_to_camel);
        strategy.setColumnNaming(NamingStrategy.underline_to_camel);
        strategy.setEntityLombokModel(true);//是否使用lombok开启注解
        strategy.setLogicDeleteFieldName("deleted");
        //自动填充配置
        TableFill gmtCreate = new TableFill("gmt_create", FieldFill.INSERT);
        TableFill gmtUpdate = new TableFill("gmt_update", FieldFill.INSERT_UPDATE);
        ArrayList<TableFill> tableFills = new ArrayList<>();
        tableFills.add(gmtCreate);
        tableFills.add(gmtUpdate);
        strategy.setTableFillList(tableFills);
        //乐观锁配置
        strategy.setVersionFieldName("version");
        strategy.setRestControllerStyle(true);//开启驼峰命名
        strategy.setControllerMappingHyphenStyle(true);//localhost:8080/hello_id_2
        mpg.setStrategy(strategy);
        mpg.execute();//执行
    }
}
```

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-76e941f885824198b11d0555e5e33162.png)
转自狂神····

