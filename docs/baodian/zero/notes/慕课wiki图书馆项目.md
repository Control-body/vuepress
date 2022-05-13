### 第二章 创建SpringBoot项目

#### 1. 创建带web依赖的 Springboot 项目

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-e17465a398f840acb141d862f152c6dd.png)![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-21b957a2fd194019a593eab54e95dfcb.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-8317a1c49ebc46ef8dcc3b05506ad6a3.png)

#### 2.修改同一编码

项目统一 UTF-8 编码
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-3b78bd01a108421186d065700c7740cf.png)

#### 3.开启git

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-c4d75a9c7be646ffbcab555e86f7e060.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-d423b1a56deb4bf6840e0c264b37138a.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-f602af7b2a4748bd8082eca12fee1408.png)

#### 4.关联Git远程仓库

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-e6241a6b1ea54cbebb246e7f8adc5161.png)


![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-170f40d3610e4717896aef3377d81124.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-dc4d82987c244332b9111f48c135eb4f.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-f349e8a1cc0d40029d286e72ade03b5b.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-ea7314a423434250be231b3af60082e0.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-2a3de86c51984def892634bd449de3ec.png)

#### 5.修改日志样式

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-4ec11912dc334ae899e72bc145541a4b.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-ef0836dd06e34686903a17147a09d7d8.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-1b612b27a0594a9babcf959365546a0b.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-020ca8d36acb4f3797b016a1c9c4425b.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-a8f292de1bb24755a235527d84f7f37a.png)

#### 6.写一个请求

405 访问的请求方式 不支持;

当移动启动类
就需要子啊 启动类上加 @ComponentScan("com.jiawa")
后面的包名 支持数组 就是可以传入多个包名;

#### 7.IDEA 自带的测试工具

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-bc3700e5111d42c481cfdd8c8fa565d3.png)

创建http文件夹 文件必须是 http结尾; 一个http文件可以写多个 测试脚本的;
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-c2a223bae032427494037935e9dd561c.png)

还可以写 自动检测 代码

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-feae612ab8ed452f966a66ef005e2cb5.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-ee4dc25000aa4e64bc63b1ee13569946.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-c5975c549f034d10834a4b3426c39e23.png)

#### 8.SpringBoot的配置文件;

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-f379ab0dca0b4047a4fbbcf4ad738aed.png)

- SpringBoot

只会识别application.properties/yml
config/application.properties/yml

- SpringCloud

会识别bootstrap.yml/properties
config/bootstrap.properties/yml

#### 9.使用配置文件 为类赋值

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-fdcf597fbcfd4aea8401910b697c4a84.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-7bf9198aacff466692ef506fcdcfa0b8.png)

#### 10.热部署

1.添加依赖

```java
  <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-devtools</artifactId>
        </dependency>
```

2.修改IDEA配置
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-f43e1c0a22ad499aa9ca8083d31b45b9.png)

3.每次修改之后
只需要点击锤子 就可以热部署
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-4bd6422f9b5a4f8994970362c03178be.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-e489c28ed1494bb7af6ebec14a0882f8.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-dfe5bcb7e1284488a6fd73c064a6bbcf.png)

## 第三章 完善后端架构

### 1.数据库准备

#### 1.创建数据库 分配权限

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-b98be65dd3ae4fe2a2b8513408eb9563.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-e866a4ce5abc4ad1a0106339e8365da0.png)

可访问的一定 要是公网的ip 否则不通过;
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-febd62f5e0b5480fa56c801a16f617cd.png)

创建表;

### 2.使用IDEA的插件来链接数据库

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-4f3148c765f24be4baec391d53b88690.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-0cfdc02039db4bc6a502edffe6f364c1.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-daac6959fdd54b2dbdf0046683d11c02.png)

### 3.集成Mybatis 框架

#### 1.创建结构

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-90e45b2d56274f94a73f00d3940814f7.png)

#### 2.在启动类上添加扫描包(接口的位置)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-e3bd3fed911f4ab28c008591440f3a10.png)

#### 3.在application.propertiew文件中配置xml文件的路径

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-77d07c6f66ca4de896c5d3b55e8cd6b5.png)

#### 4.@MapperScan()与@Mapper

从mybatis3.4.0开始加入了**@Mapper**注解，目的就是为了不再写mapper映射文件（那个xml写的是真的蛋疼。。。）。很恶心的一个事实是源码中并没有对于这个注解的详细解释

```java
@Mapper
public interface UserDAO {
 
    @Select("select * from user where name = #{name}")
    public User find(String name);
 
    @Select("select * from user where name = #{name} and pwd = #{pwd}")
    /**
      * 对于多个参数来说，每个参数之前都要加上@Param注解，
      * 要不然会找不到对应的参数进而报错
      */
    public User login(@Param("name")String name, @Param("pwd")String pwd);
}

```

@MapperScan() : 写在启动类上 自动扫描对应包下的所有的接口 映射到对应的 文件;

### 4.自动生成代码

#### 1.在pom.xml中加入插件

```java
<!--            映入Mybatis的插件-->
            <plugin>
                <groupId>org.mybatis.generator</groupId>
                <artifactId>mybatis-generator-maven-plugin</artifactId>
                <version>1.4.0</version>
                <configuration>
                    <configurationFile>src/main/resources/generator/generator-config.xml</configurationFile>
                    <overwrite>true</overwrite>
                    <verbose>true</verbose>
                </configuration>
                <dependencies>
                    <dependency>
                        <groupId>mysql</groupId>
                        <artifactId>mysql-connector-java</artifactId>
                        <version>8.0.22</version>
                    </dependency>
                </dependencies>
            </plugin>
```

#### 2.写对应的生成文件generator-config.xml

```java
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE generatorConfiguration
  PUBLIC "-//mybatis.org//DTD MyBatis Generator Configuration 1.0//EN"
"http://mybatis.org/dtd/mybatis-generator-config_1_0.dtd">
<!-- 配置生成器 -->
<generatorConfiguration>
<!-- 可以用于加载配置项或者配置文件，在整个配置文件中就可以使用${propertyKey}的方式来引用配置项
    resource：配置资源加载地址，使用resource，MBG从classpath开始找，比如com/myproject/generatorConfig.properties        
    url：配置资源加载地质，使用URL的方式，比如file:///C:/myfolder/generatorConfig.properties.
    注意，两个属性只能选址一个;
    另外，如果使用了mybatis-generator-maven-plugin，那么在pom.xml中定义的properties都可以直接在generatorConfig.xml中使用
<properties resource="" url="" />
 -->
 
 <!-- 在MBG工作的时候，需要额外加载的依赖包
     location属性指明加载jar/zip包的全路径
<classPathEntry  location="C:/ojdbc6.jar"/>
  -->
 
<!-- 
    context:生成一组对象的环境 
    id:必选，上下文id，用于在生成错误时提示
    defaultModelType:指定生成对象的样式
   	    特别说明 我的前面三个都不管用,不知道为啥
        1，conditional：类似hierarchical；
        2，flat：所有内容（主键，blob）等全部生成在一个对象中；
        3，hierarchical：主键生成一个XXKey对象(key class)，Blob等单独生成一个对象，其他简单属性在一个对象中(record class)
    targetRuntime:
        1，MyBatis3：默认的值，生成基于MyBatis3.x以上版本的内容，包括XXXBySample；
        2，MyBatis3Simple：类似MyBatis3，只是不生成XXXBySample；
    introspectedColumnImpl：类全限定名，用于扩展MBG
-->
<context id="mysql" defaultModelType="hierarchical" targetRuntime="MyBatis3Simple" >
 
    <!-- 自动识别数据库关键字，默认false，如果设置为true，根据SqlReservedWords中定义的关键字列表；
        一般保留默认值，遇到数据库关键字（Java关键字），使用columnOverride覆盖
     -->
    <property name="autoDelimitKeywords" value="false"/>
    <!-- 生成的Java文件的编码 -->
    <property name="javaFileEncoding" value="UTF-8"/>
    <!-- 格式化java代码 -->
    <property name="javaFormatter" value="org.mybatis.generator.api.dom.DefaultJavaFormatter"/>
    <!-- 格式化XML代码 -->
    <property name="xmlFormatter" value="org.mybatis.generator.api.dom.DefaultXmlFormatter"/>
 
    <!-- beginningDelimiter和endingDelimiter：指明数据库的用于标记数据库对象名的符号，比如ORACLE就是双引号，MYSQL默认是`反引号； -->
    <property name="beginningDelimiter" value="`"/>
    <property name="endingDelimiter" value="`"/>
 
    <!-- 必须要有的，使用这个配置链接数据库
        @TODO:是否可以扩展
     -->
    <jdbcConnection driverClass="com.mysql.jdbc.Driver" connectionURL="jdbc:mysql:///test" userId="root" password="123456">
    <!-- <jdbcConnection driverClass="oracle.jdbc.driver.OracleDriver" connectionURL="jdbc:oracle:thin:@192.168.1.200:1521:orcl" userId="scott" password="scott">
     </jdbcConnection> -->
        <!-- 这里面可以设置property属性，每一个property属性都设置到配置的Driver上 -->
    </jdbcConnection>
 
    <!-- java类型处理器 
        用于处理DB中的类型到Java中的类型，默认使用JavaTypeResolverDefaultImpl；
        注意一点，默认会先尝试使用Integer，Long，Short等来对应DECIMAL和 NUMERIC数据类型； 
    -->
    <javaTypeResolver type="org.mybatis.generator.internal.types.JavaTypeResolverDefaultImpl">
        <!-- 
            true：使用BigDecimal对应DECIMAL和 NUMERIC数据类型
            false：默认,
                scale>0;length>18：使用BigDecimal;
                scale=0;length[10,18]：使用Long；
                scale=0;length[5,9]：使用Integer；
                scale=0;length<5：使用Short；
         -->
        <property name="forceBigDecimals" value="false"/>
    </javaTypeResolver>
 
 
    <!-- java模型创建器，是必须要的元素
        负责：1，key类（见context的defaultModelType）；2，java类；3，查询类
        targetPackage：生成的类要放的包，真实的包受enableSubPackages属性控制；
        targetProject：目标项目，指定一个存在的目录下，生成的内容会放到指定目录中，如果目录不存在，MBG不会自动建目录
     -->
    <javaModelGenerator targetPackage="com.counsiken.test.model" targetProject="demo/src/main/java">
        <!--  for MyBatis3/MyBatis3Simple
            自动为每一个生成的类创建一个构造方法，构造方法包含了所有的field；而不是使用setter；
         -->
        <property name="constructorBased" value="false"/>
 
        <!-- 在targetPackage的基础上，根据数据库的schema再生成一层package，最终生成的类放在这个package下，默认为false -->
        <property name="enableSubPackages" value="true"/>
 
        <!-- for MyBatis3 / MyBatis3Simple
            是否创建一个不可变的类，如果为true，
            那么MBG会创建一个没有setter方法的类，取而代之的是类似constructorBased的类
         -->
        <property name="immutable" value="false"/>
 
        <!-- 设置一个根对象，
            如果设置了这个根对象，那么生成的keyClass或者recordClass会继承这个类；在Table的rootClass属性中可以覆盖该选项
            注意：如果在key class或者record class中有root class相同的属性，MBG就不会重新生成这些属性了，包括：
                1，属性名相同，类型相同，有相同的getter/setter方法；
         -->
        <property name="rootClass" value="com.counsiken.test.model.base"/>
 
        <!-- 设置是否在getter方法中，对String类型字段调用trim()方法 -->
        <property name="trimStrings" value="true"/>
    </javaModelGenerator>
 
 
    <!-- 生成SQL map的XML文件生成器，
        注意，在Mybatis3之后，我们可以使用mapper.xml文件+Mapper接口（或者不用mapper接口），
            或者只使用Mapper接口+Annotation，所以，如果 javaClientGenerator配置中配置了需要生成XML的话，这个元素就必须配置
        targetPackage/targetProject:同javaModelGenerator
     -->
    <sqlMapGenerator targetPackage="mapping/test" targetProject="demo/src/main/resources">
        <!-- 在targetPackage的基础上，根据数据库的schema再生成一层package，最终生成的类放在这个package下，默认为false -->
        <property name="enableSubPackages" value="true"/>
    </sqlMapGenerator>
 
 
    <!-- 对于mybatis来说，即生成Mapper接口，注意，如果没有配置该元素，那么默认不会生成Mapper接口 
        targetPackage/targetProject:同javaModelGenerator
        type：选择怎么生成mapper接口（在MyBatis3/MyBatis3Simple下）：
            1，ANNOTATEDMAPPER：会生成使用Mapper接口+Annotation的方式创建（SQL生成在annotation中），不会生成对应的XML；
            2，MIXEDMAPPER：使用混合配置，会生成Mapper接口，并适当添加合适的Annotation，但是XML会生成在XML中；
            3，XMLMAPPER：会生成Mapper接口，接口完全依赖XML；
        注意，如果context是MyBatis3Simple：只支持ANNOTATEDMAPPER和XMLMAPPER
    -->
    <javaClientGenerator targetPackage="com.counsiken.test.mapper" type="ANNOTATEDMAPPER" targetProject="demo/src/main/java">
        <!-- 在targetPackage的基础上，根据数据库的schema再生成一层package，最终生成的类放在这个package下，默认为false -->
        <property name="enableSubPackages" value="true"/>
 
        <!-- 可以为所有生成的接口添加一个父接口，但是MBG只负责生成，不负责检查
        <property name="rootInterface" value=""/>
         -->
    </javaClientGenerator>
 
    <!-- 选择一个table来生成相关文件，可以有一个或多个table，必须要有table元素
        选择的table会生成一下文件：
        1，SQL map文件
        2，生成一个主键类；
        3，除了BLOB和主键的其他字段的类；
        4，包含BLOB的类；
        5，一个用户生成动态查询的条件类（selectByExample, deleteByExample），可选；
        6，Mapper接口（可选）
        tableName（必要）：要生成对象的表名；
        注意：大小写敏感问题。正常情况下，MBG会自动的去识别数据库标识符的大小写敏感度，在一般情况下，MBG会
            根据设置的schema，catalog或tablename去查询数据表，按照下面的流程：
            1，如果schema，catalog或tablename中有空格，那么设置的是什么格式，就精确的使用指定的大小写格式去查询；
            2，否则，如果数据库的标识符使用大写的，那么MBG自动把表名变成大写再查找；
            3，否则，如果数据库的标识符使用小写的，那么MBG自动把表名变成小写再查找；
            4，否则，使用指定的大小写格式查询；
        另外的，如果在创建表的时候，使用的""把数据库对象规定大小写，就算数据库标识符是使用的大写，在这种情况下也会使用给定的大小写来创建表名；
        这个时候，请设置delimitIdentifiers="true"即可保留大小写格式；
        可选：
        1，schema：数据库的schema；
        2，catalog：数据库的catalog；
        3，alias：为数据表设置的别名，如果设置了alias，那么生成的所有的SELECT SQL语句中，列名会变成：alias_actualColumnName
        4，domainObjectName：生成的domain类的名字，如果不设置，直接使用表名作为domain类的名字；可以设置为somepck.domainName，那么会自动把domainName类再放到somepck包里面；
        5，enableInsert（默认true）：指定是否生成insert语句；
        6，enableSelectByPrimaryKey（默认true）：指定是否生成按照主键查询对象的语句（就是getById或get）；
        7，enableSelectByExample（默认true）：MyBatis3Simple为false，指定是否生成动态查询语句；
        8，enableUpdateByPrimaryKey（默认true）：指定是否生成按照主键修改对象的语句（即update)；
        9，enableDeleteByPrimaryKey（默认true）：指定是否生成按照主键删除对象的语句（即delete）；
        10，enableDeleteByExample（默认true）：MyBatis3Simple为false，指定是否生成动态删除语句；
        11，enableCountByExample（默认true）：MyBatis3Simple为false，指定是否生成动态查询总条数语句（用于分页的总条数查询）；
        12，enableUpdateByExample（默认true）：MyBatis3Simple为false，指定是否生成动态修改语句（只修改对象中不为空的属性）；
        13，modelType：参考context元素的defaultModelType，相当于覆盖；
        14，delimitIdentifiers：参考tableName的解释，注意，默认的delimitIdentifiers是双引号，如果类似MYSQL这样的数据库，使用的是`（反引号，那么还需要设置context的beginningDelimiter和endingDelimiter属性）
        15，delimitAllColumns：设置是否所有生成的SQL中的列名都使用标识符引起来。默认为false，delimitIdentifiers参考context的属性
        注意，table里面很多参数都是对javaModelGenerator，context等元素的默认属性的一个复写；
     -->
    <table tableName="userinfo" >
 
        <!-- 参考 javaModelGenerator 的 constructorBased属性-->
        <property name="constructorBased" value="false"/>
 
        <!-- 默认为false，如果设置为true，在生成的SQL中，table名字不会加上catalog或schema； -->
        <property name="ignoreQualifiersAtRuntime" value="false"/>
 
        <!-- 参考 javaModelGenerator 的 immutable 属性 -->
        <property name="immutable" value="false"/>
 
        <!-- 指定是否只生成domain类，如果设置为true，只生成domain类，如果还配置了sqlMapGenerator，那么在mapper XML文件中，只生成resultMap元素 -->
        <property name="modelOnly" value="false"/>
 
        <!-- 参考 javaModelGenerator 的 rootClass 属性 
        <property name="rootClass" value=""/>
         -->
 
        <!-- 参考javaClientGenerator 的  rootInterface 属性
        <property name="rootInterface" value=""/>
        -->
 
        <!-- 如果设置了runtimeCatalog，那么在生成的SQL中，使用该指定的catalog，而不是table元素上的catalog 
        <property name="runtimeCatalog" value=""/>
        -->
 
        <!-- 如果设置了runtimeSchema，那么在生成的SQL中，使用该指定的schema，而不是table元素上的schema 
        <property name="runtimeSchema" value=""/>
        -->
 
        <!-- 如果设置了runtimeTableName，那么在生成的SQL中，使用该指定的tablename，而不是table元素上的tablename 
        <property name="runtimeTableName" value=""/>
        -->
 
        <!-- 注意，该属性只针对MyBatis3Simple有用；
            如果选择的runtime是MyBatis3Simple，那么会生成一个SelectAll方法，如果指定了selectAllOrderByClause，那么会在该SQL中添加指定的这个order条件；
         -->
        <property name="selectAllOrderByClause" value="age desc,username asc"/>
 
        <!-- 如果设置为true，生成的model类会直接使用column本身的名字，而不会再使用驼峰命名方法，比如BORN_DATE，生成的属性名字就是BORN_DATE,而不会是bornDate -->
        <property name="useActualColumnNames" value="false"/>
 
 
        <!-- generatedKey用于生成生成主键的方法，
            如果设置了该元素，MBG会在生成的<insert>元素中生成一条正确的<selectKey>元素，该元素可选
            column:主键的列名；
            sqlStatement：要生成的selectKey语句，有以下可选项：
                Cloudscape:相当于selectKey的SQL为： VALUES IDENTITY_VAL_LOCAL()
                DB2       :相当于selectKey的SQL为： VALUES IDENTITY_VAL_LOCAL()
                DB2_MF    :相当于selectKey的SQL为：SELECT IDENTITY_VAL_LOCAL() FROM SYSIBM.SYSDUMMY1
                Derby      :相当于selectKey的SQL为：VALUES IDENTITY_VAL_LOCAL()
                HSQLDB      :相当于selectKey的SQL为：CALL IDENTITY()
                Informix  :相当于selectKey的SQL为：select dbinfo('sqlca.sqlerrd1') from systables where tabid=1
                MySql      :相当于selectKey的SQL为：SELECT LAST_INSERT_ID()
                SqlServer :相当于selectKey的SQL为：SELECT SCOPE_IDENTITY()
                SYBASE      :相当于selectKey的SQL为：SELECT @@IDENTITY
                JDBC      :相当于在生成的insert元素上添加useGeneratedKeys="true"和keyProperty属性
        <generatedKey column="" sqlStatement=""/>
         -->
 
        <!-- 
            该元素会在根据表中列名计算对象属性名之前先重命名列名，非常适合用于表中的列都有公用的前缀字符串的时候，
            比如列名为：CUST_ID,CUST_NAME,CUST_EMAIL,CUST_ADDRESS等；
            那么就可以设置searchString为"^CUST_"，并使用空白替换，那么生成的Customer对象中的属性名称就不是
            custId,custName等，而是先被替换为ID,NAME,EMAIL,然后变成属性：id，name，email；
            注意，MBG是使用java.util.regex.Matcher.replaceAll来替换searchString和replaceString的，
            如果使用了columnOverride元素，该属性无效；
        <columnRenamingRule searchString="" replaceString=""/>
         -->
 
 
         <!-- 用来修改表中某个列的属性，MBG会使用修改后的列来生成domain的属性；
             column:要重新设置的列名；
             注意，一个table元素中可以有多个columnOverride元素哈~
          -->
         <columnOverride column="username">
             <!-- 使用property属性来指定列要生成的属性名称 -->
             <property name="property" value="userName"/>
 
             <!-- javaType用于指定生成的domain的属性类型，使用类型的全限定名
             <property name="javaType" value=""/>
              -->
 
             <!-- jdbcType用于指定该列的JDBC类型 
             <property name="jdbcType" value=""/>
              -->
 
             <!-- typeHandler 用于指定该列使用到的TypeHandler，如果要指定，配置类型处理器的全限定名
                 注意，mybatis中，不会生成到mybatis-config.xml中的typeHandler
                 只会生成类似：where id = #{id,jdbcType=BIGINT,typeHandler=com._520it.mybatis.MyTypeHandler}的参数描述
             <property name="jdbcType" value=""/>
             -->
 
             <!-- 参考table元素的delimitAllColumns配置，默认为false
             <property name="delimitedColumnName" value=""/>
              -->
         </columnOverride>
 
         <!-- ignoreColumn设置一个MGB忽略的列，如果设置了改列，那么在生成的domain中，生成的SQL中，都不会有该列出现 
             column:指定要忽略的列的名字；
             delimitedColumnName：参考table元素的delimitAllColumns配置，默认为false
             注意，一个table元素中可以有多个ignoreColumn元素
         <ignoreColumn column="deptId" delimitedColumnName=""/>
         -->
    </table>
 
</context>
 
</generatorConfiguration>

```

自动生成单表查询的Sql语句 但是多表查询的还是要自己写;
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-7792378240f340b2948fcbfa4284f8a1.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-c9e36e2bc4394548b99ff9a701ff0dae.png)

#### 3.替换代码 快速开发

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-416f3f5fc638450598ebaf3654e89117.png)

### 5.创建和前端统一的返回类

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-a6e9a8bd31284c4f92c77edc3ec027de.png)

```java
package com.jiawa.wiki.resp;

public class CommonResp<T> {

    /**
     * 业务上的成功或失败
     */
    private boolean success = true;

    /**
     * 返回信息
     */
    private String message;

    /**
     * 返回泛型数据，自定义类型
     */
    private T content;

    public boolean getSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public T getContent() {
        return content;
    }

    public void setContent(T content) {
        this.content = content;
    }

    @Override
    public String toString() {
        final StringBuffer sb = new StringBuffer("ResponseDto{");
        sb.append("success=").append(success);
        sb.append(", message='").append(message).append('\'');
        sb.append(", content=").append(content);
        sb.append('}');
        return sb.toString();
    }
}


```

### 6.封装请求参数和返回参数

#### 1.原始不封装请求参数的时候

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-b0521f66fea9437a85eac4ab96b26cee.png)

- controller中
  ![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-6f152e69d4eb4537b02e80c4d33986c3.png)

- service 中
  ![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-2d8094b0a7dc4fd3a515cf6f4f9461fd.png)

**问题:**
当查询的条件逐渐曾多的时候,怎么办呢???
就需要进行封装 请求参数;

#### 2.初步封装

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-82710a8e403b4ca5b0cfc66ab3e519cc.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-e94ed103fd4c4d5d903b59e1b410d92f.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-ef4f223a72d14f80b82bed30861f3869.png)

####  2.测试@RequestParam注解

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-53833cdbe6454576beae0365723a9931.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-d63b96405f0f40d0b8fd76c7fb90253a.png)

### 7.抽取公共的类copy工具

```java
public class CopyUtil {

    /**
     * 单体复制
     */
    public static <T> T copy(Object source, Class<T> clazz) {
        if (source == null) {
            return null;
        }
        T obj = null;
        try {
            obj = clazz.newInstance();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
        BeanUtils.copyProperties(source, obj);
        return obj;
    }

    /**
     * 列表复制
     */
    public static <T> List<T> copyList(List source, Class<T> clazz) {
        List<T> target = new ArrayList<>();
        if (!CollectionUtils.isEmpty(source)){
            for (Object c: source) {
                T obj = copy(c, clazz);
                target.add(obj);
            }
        }
        return target;
    }
}

```

## 第四章 Vue3+ VueCLI 项目搭建

### 1.Vue 和 Vue.cli

- 工具: 就是我们的代码中使用它提供的代码
- 框架: 搭建好一个架子 ,我们写方法供框架使用;

### 2.创建Vue-cli

#### 1. 查看vue版本

- 查看我们 npm 的镜像是多少;
  npm get registry
  ![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-29f112daedcf4f01a5f5b16b52a7e23b.png)

@npm install -g @vue/cli@4.5.9   //下载指定的版本号

#### 2. 安装脚手架

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-143cf4f0b64c40f49e62f0834f40a779.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-fa2a9345df5646f5a65f78a24bed0499.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-fd950eb76d4442f59015148f24012104.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-952d646a9a4f4e179d9a34b43e788fe2.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-86b92293549440fb99febce01fe2eba6.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-8333f8790c324b4a8cbc5173fbe09ec2.png)

#### 3.抽出命令和 vue的文件结构

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-2b7f1f1ce7614d058edbd13231828fae.png)
类似与Maven 可以打包 构建等；
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-f57666112c944268bf8282591ecaa270.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-9f57ad1674694cfd8f89bb01f0098805.png)

### 3.集成Ant design Vue

#### 1.自动生成的组件时如何生成的？？

就是一个个的组件构成的；
创建组件的方法有两种：

- html css js （基于原生的HTmL5）
- 基于BootStrap 必须映入JQuery
- 基于VUE的UI组件 （ElementUI）

#### 2.Ant DEsign Vue

https://www.antdv.com/docs/vue/getting-started-cn
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-dc4b9c3aaa714f368e1a8c291acbf067.png)
引入组件库：

```java
 $ npm install ant-design-vue@2.0.0-rc.3 --save

```

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-207131b6bfb84c648ed143e182d0d33c.png)


引入第三方组件 大部分 就是修改main.ts组件；
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-0b48b381ac714b4fb65e1c1348b8d784.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-d2c31a91145e478e94196ec62de75621.png)

#### 4.抽出变化的代码  把静态的代码抽象成组件

让变化的代码 到router中 ,路由来动态显示
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-543e5ae5e3994370ba5b0656919d935c.png)

##### 1.组件声明自己的组件名称

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-f230be2e0dae4e9e91fdca1a5b788b84.png)

##### 2.引用组件

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-42123e45ed7141e2be9dcaa90d40d450.png)

## 第五章 前后端交互

### 1.集成HTTP 库Axios

#### 1.安装axios

```java
npm install axios@0.21.0 --save

```

#### 2.向后端发送请求

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-f63946045d1e4fd1bb039089d097afd6.png)

#### 3.出现跨域问题

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-f1190ecff60043bfb94a9c6d51b50fb0.png)

#### 4.解决跨域问题

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-3aaa993056ab4f6c9d23b63c89c5e918.png)

### 2.完成电子书列表接口前后端交互

#### 1.vue2 和Vue3的区别

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-48d56df5c1484dcdb8179e90ac2fafc7.png)

#### 2. setup 和 onMounted 生命周期函数

setup 是先执行，在渲染页面，然后在输出运行 onMounted

### 3.电子书列表界面展示 （Vue3的数据绑定）

使用reactive 和 ref实现数据 绑定

#### 1.使用ref的方式

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-51954ff33f424533a26d107cfdefb390.png)

#### 2.使用reactive 来实现数据绑定

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-e716c0f83f9a448db3c21dc36b0fdcf3.png)

javaScript 是弱类型语言 同一个变量可以 放字符串 数值 和数组；
TypeScript 是强类型的语言 定义一个类型之后 不能在放其他的类型

#### 3.下载图标库

```java
npm install --save @ant-design/icons-vue

```


### 4.axios拦截器的使用

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-95967d783c034a3aad8b259026ae09ea.png)

```java
/**
 * axios拦截器
 */
axios.interceptors.request.use(function (config) {
    console.log('请求参数：', config);
    // const token = store.state.user.token;
    // if (Tool.isNotEmpty(token)) {
    //     config.headers.token = token;
    //     console.log("请求headers增加token:", token);
    // }
    return config;
}, error => {
    return Promise.reject(error);
});
axios.interceptors.response.use(function (response) {
    console.log('返回结果：', response);
    return response;
}, error => {
    console.log('返回错误：', error);
    // const response = error.response;
    // const status = response.status;
    // if (status === 401) {
    //     // 判断状态码是401 跳转到首页或登录页
    //     console.log("未登录，跳到首页");
    //     store.commit("setUser", {});
    //     message.error("未登录或登录超时");
    //     router.push('/');
    // }
    return Promise.reject(error);
});

```


### 5.Vue Cli多环境配置

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-0ceea10c36fd43a9abde36a3bfc1bcc8.png)

#### 1.修改前端的启动端口:

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-163f3a76afcf479ab5d91e20eea578fb.png)

#### 2.配置axiox 的baseurl

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-b5e2c41eb82b4313b1f2970f0dfe6bc4.png)

### 6.使用过滤器记录接口耗时

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-cb11d254593246b2b55be1a56b6ef12d.png)

```java
@Component
public class LogFilter implements Filter {

    private static final Logger LOG = LoggerFactory.getLogger(LogFilter.class);

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        // 打印请求信息
        HttpServletRequest request = (HttpServletRequest) servletRequest;
        LOG.info("------------- LogFilter 开始 -------------");
        LOG.info("请求地址: {} {}", request.getRequestURL().toString(), request.getMethod());
        LOG.info("远程地址: {}", request.getRemoteAddr());

        long startTime = System.currentTimeMillis();
        filterChain.doFilter(servletRequest, servletResponse);
        LOG.info("------------- LogFilter 结束 耗时：{} ms -------------", System.currentTimeMillis() - startTime);
    }
}


```

### 7.使用拦截器记录接口耗时

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-8b2c7e2a500a4f02af9ec464e438e43c.png)

#### 1.编写拦截器

```java
/**
 * 拦截器：Spring框架特有的，常用于登录校验，权限校验，请求日志打印
 */
@Component
public class LoginInterceptor implements HandlerInterceptor {

    private static final Logger LOG = LoggerFactory.getLogger(LoginInterceptor.class);
    
@Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        // 打印请求信息
        LOG.info("------------- LoginInterceptor 开始 -------------");
        long startTime = System.currentTimeMillis();
        request.setAttribute("requestStartTime", startTime);// 放回request 中
        return true;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        long startTime = (Long) request.getAttribute("requestStartTime");
        LOG.info("------------- LoginInterceptor 结束 耗时：{} ms -------------", System.currentTimeMillis() - startTime);
    }

}

```


#### 2.注册拦截器

```java
import javax.annotation.Resource;
@Configuration
public class SpringMvcConfig implements WebMvcConfigurer {

    @Resource
    LoginInterceptor loginInterceptor;


    // 注册过滤器 表示过滤所有请求
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
          registry.addInterceptor(loginInterceptor)
                  .addPathPatterns("/**").excludePathPatterns("/login");
    }
}


```

### 8.Aop记录接口耗时

#### 1.导入AOP 的依赖 和json 工具包

```java
<!--        添加AOP 依赖-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-aop</artifactId>
        </dependency>

<!--        添加Json 工具-->
        <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>fastjson</artifactId>
            <version>1.2.78</version>
        </dependency>

```

#### 2.切面类

切面类 就是 在哪里干什么,先定义 切点 然后 定义通知 (前置  环绕   后置) 三个最常用的;

```java
// 这个类就是一个切面 切点 (在哪)+ 通知(做啥)
@Aspect
@Component
public class LogAspect {

    private final static Logger LOG = LoggerFactory.getLogger(LogAspect.class);

    /** 定义一个切点 就是拦截那个东西 */
    @Pointcut("execution(public * com.jiawa.*.controller..*Controller.*(..))")
    public void controllerPointcut() {}

//    @Resource
//    private SnowFlake snowFlake;
   //前置通知
    @Before("controllerPointcut()")
    public void doBefore(JoinPoint joinPoint) throws Throwable {
        // 开始打印请求日志
        ServletRequestAttributes attributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        HttpServletRequest request = attributes.getRequest();
        Signature signature = joinPoint.getSignature();
        String name = signature.getName();
        // 打印请求信息
        LOG.info("------------- 开始 -------------");
        LOG.info("请求地址: {} {}", request.getRequestURL().toString(), request.getMethod());
        LOG.info("类名方法: {}.{}", signature.getDeclaringTypeName(), name);
        LOG.info("远程地址: {}", request.getRemoteAddr());
        // 打印请求参数
        Object[] args = joinPoint.getArgs();
		// LOG.info("请求参数: {}", JSONObject.toJSONString(args));

		Object[] arguments  = new Object[args.length];
        for (int i = 0; i < args.length; i++) {
            if (args[i] instanceof ServletRequest
                    || args[i] instanceof ServletResponse
                    || args[i] instanceof MultipartFile) {
                continue;
            }
            arguments[i] = args[i];
        }
        // 排除字段，敏感字段 或 太长的字段不显示
        String[] excludeProperties = {"password", "file"};
        PropertyPreFilters filters = new PropertyPreFilters();
        PropertyPreFilters.MySimplePropertyPreFilter excludefilter = filters.addFilter();
        excludefilter.addExcludes(excludeProperties);
        LOG.info("请求参数: {}", JSONObject.toJSONString(arguments, excludefilter));
    }
    //环绕通知
    @Around("controllerPointcut()")
    public Object doAround(ProceedingJoinPoint proceedingJoinPoint) throws Throwable {
        long startTime = System.currentTimeMillis();
        Object result = proceedingJoinPoint.proceed();

        // 排除字段，敏感字段或太长的字段不显示
        String[] excludeProperties = {"password", "file"};
        PropertyPreFilters filters = new PropertyPreFilters();
        PropertyPreFilters.MySimplePropertyPreFilter excludefilter = filters.addFilter();
        excludefilter.addExcludes(excludeProperties);
        LOG.info("返回结果: {}", JSONObject.toJSONString(result, excludefilter));
        LOG.info("------------- 结束 耗时：{} ms -------------", System.currentTimeMillis() - startTime);
        return result;
    }

}

```

#### 3.效果

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-61a77b98dc83437eaabe1fc828323ecb.png)

### 9.使用Validation做参数校验


## 第六章 电子书管理功能的开发

电子书的后台管理页面

### 1.增加电子书管理页面

页面 路由 菜单

#### 1.添加页面

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-c25fdda6ecdf4a97803d6e4ac152790f.png)

#### 2.添加路由 添加菜单

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-c4209e0837e6412b8499043445a65692.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-3f958e8a6bcb48539cfb5b109fa9f913.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-880f7db6ce6f491ba6f8cbfe63cfac3a.png)

### 2.电子书列表展示

表格组件  查询表单 后端列表查询接口

### 3.前后端分页处理

后端分页插件 前端分页组件 前后端分页参数传递

#### 1.首先导入分页的依赖

```java
    <!-- pagehelper 插件-->
        <dependency>
            <groupId>com.github.pagehelper</groupId>
            <artifactId>pagehelper-spring-boot-starter</artifactId>
            <version>1.2.13</version>
        </dependency>
```

#### 2.在service层加上分页插件

```java
@Service
public class EbookServce {
    @Resource
    //JDK自带的
    //@Autowired // 自动注入 Spring带的
    private EbookMapper ebookMapper;
    public List<EbookResp> list(EbookReq req){
        PageHelper.startPage(1,3);
        EbookExample ebookExample = new EbookExample();
        EbookExample.Criteria criteria = ebookExample.createCriteria();
        if(!ObjectUtils.isEmpty(req.getName()))
        criteria.andNameLike("%"+ req.getName()+"%%"); // 模糊匹配查询条件
        List<Ebook> ebookList = ebookMapper.selectByExample(ebookExample);
        List<EbookResp> respList = CopyUtil.copyList(ebookList, EbookResp.class);// 后面是泛型 里面的类
        return respList;
    }
}

```

#### 3.结果

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-5832a26b779f473f80145162fcd6f76f.png)

#### 4.PageHelper 要注意的事项

PageHelper.startPage(1,3);

- 第一个参数是 当前第几页 第二个参数是 页面显示多少数据页面数 是从** 第一页**开始的,
- 只对sql的第一次查询生效 第二次就不生效了 (一般把分页插件写在sql 语句的上方)

#### 5.PageInfo对象的使用

```java
     criteria.andNameLike("%"+ req.getName()+"%%"); // 模糊匹配查询条件
        PageHelper.startPage(1,3);
        List<Ebook> ebookList = ebookMapper.selectByExample(ebookExample);
        PageInfo<Ebook> pageInfo = new PageInfo<>(ebookList);
        Log.info("总行数:{}",pageInfo.getTotal());
        Log.info("总页数:{}",pageInfo.getPages());
```

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-4d1c24452a6e4de6baac0120716d731e.png)

#### 6,前后端需要交互的数据

- 后给前 : 当前查询列表  总行数
- 前给后 : 当前多少页 查询多少数据

#### 7.前端向后端发送请求的方式

- 字符串拼接
  http://localhost:8880/ebook/list?page=1&size=4
  axios.get("/ebook/list?page="+params.page+"&size="+params.size)
- 使用params 参数 指定参数

```java
const handleQuery = (params: any) => {
      loading.value = true;
      axios.get("/ebook/list",{
        params : params
      }).then((response) => {
        loading.value = false;
        const data = response.data;
        ebooks.value=data.content.list;
        pagination.value.current = params.page;
        pagination.value.total = params.content.total;
      });
    };

```

#### 8.结果测试

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-69575e514c514d1aafdab7916b486da0.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-161734249b8c4515b4acbcf53bf63b8f.png)

### 4.电子书编辑

模态框组件 表单组件 后端保存接口

#### 1.前端添加自动弹出组件

#### 2.自动弹出组件带数据

#### 3.后端增加save 接口

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-e80b3e5ad6d04930b4ec4254ad696559.png)

- post 方式提交的两种参数提交方式:
  (1) 前端以json数据传递给后端
  后端需要使用 @ResponseBody 注解修饰参数

```java
@PostMapping("/save")
    public CommonResp save(@RequestBody EbookSaveReq req){
        CommonResp objectCommonResp = new CommonResp<>();
        ebookServce.save(req);
        return objectCommonResp;
    }
```

(2)from 表单方式可以直接传输

#### 4.测试

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-335ca4a37ec24a12a0eab7d98af0eed6.png)

#### 5.统一请求 响应 参数类型

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-3478611448a44938a68688db88d1329c.png)

### 5.电子书新增

界面复用编辑功能  复用保存接口  雪花算法

#### 1. 时间戳

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-77ec14a48d0c4b02b96c8355eb2bae96.png)

#### 2.雪花算法

- 时间戳: 自己定义一个时间的起点 (一般是比真实的时间戳小)
- 数据中心:  有多少个数据中心 也是位数限制
- 机器中心 : 有多少抬机器 也是位数限制
- 序列号:   相同毫秒内，序列号自增  序列号 有位数限制
  掌握nextId() 就可以了; 最终得到一个 长整型的数字;

1. 写在配置文件中 用的时候 去配置文件读取
2. 使用redis 读取 一个唯一的不重复的值

#### 3.生成ID 的方式

1. 使用uuid
2. 使用自增
3. 使用雪花算法

### 6.电子书删除

确认组件 后端删除接口

### 7.参数校验(集成SpringBoot Validation)\

#### 1.添加依赖

```java
 <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-validation</artifactId>
        </dependency>


```

#### 2.在需要添加限制的类上加注解

```java
@Data
@ToString
public class PageReq {
    @NotNull(message = "页码 不能为空")
    private int page;

    @NotNull(message = "每页条数 不能为空")
    @Max(value = 1000,message = "每页条数 不能超过1000")
    private int size;
}

```

#### 3.在接口上开启验证

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-fb80456d9d024de29ac37095e28c697a.png)

#### 4.添加异常处理类

专门处理当限制的类出现问题的时候,进行处理异常,返回统一的错误信息 和错误码;

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-9b9a2163e2044beaafc7840d0419b625.png)


#### 5.修改前端页面

1.引入vue的错误提示组件
import { message } from 'ant-design-vue';
2.处理返回的值是否正确

```java
axios.get("/ebook/list",{
        params : {
          page : params.page,
          size : params.size
        }
      }).then((response) => {
        loading.value = false;
        const data = response.data;
        if (data.success) {
          ebooks.value = data.content.list;
          // 重置分页按钮
          pagination.value.current = params.page;
          pagination.value.total = data.content.total;
        } else {
          message.error(data.message);
        }
        ebooks.value=data.content.list;
        pagination.value.current = params.page;
        pagination.value.total = data.content.total;
      });
    };

```

3.测试结果
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-243d191d98de428980372834e954dd17.png)

### 7.电子书管理功能优化

#### 1.实现增加查询的功能

#### 2.优化编辑的操作

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-99a4f44925f848cf8f427f21a94749be.png)

## 第七章 电子书分类

### 1.创建数据库表 和对应的数据

```java
create  table  `category` (
    `id` bigint not null comment 'id',
    `parent` bigint not null default 0 comment '父id',
    `name` varchar(50) not null comment '名称',
    `sort` int comment '顺序',
    primary key (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 comment ='分类';

insert into `category` (id,parent,name,sort) value (100,000,'前端开发',100);
insert into `category` (id,parent,name,sort) value (101,100,'VUE',101);
insert into `category` (id,parent,name,sort) value (102,100,'HTML',102);
insert into `category` (id,parent,name,sort) value (200,000,'JAVA',200);
insert into `category` (id,parent,name,sort) value (201,200,'基础应用',201);
insert into `category` (id,parent,name,sort) value (202,200,'框架应用',202);
insert into `category` (id,parent,name,sort) value (300,000,'Python',300);
insert into `category` (id,parent,name,sort) value (301,300,'基础应用',301);
insert into `category` (id,parent,name,sort) value (302,300,'进阶方向应用',302);
insert into `category` (id,parent,name,sort) value (400,000,'数据库',400);
insert into `category` (id,parent,name,sort) value (401,400,'Mysql',401);
insert into `category` (id,parent,name,sort) value (402,400,'redis',402);
insert into `category` (id,parent,name,sort) value (500,000,'其他',500);
insert into `category` (id,parent,name,sort) value (501,500,'开发工具',501);
insert into `category` (id,parent,name,sort) value (502,500,'热门服务端语言',502);

```

### 2.用代码生成器生成代码

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-538e6e54de5f47598d0de96766dbbb3f.png)

### 3.快速开发

使用替换Ctrl+r 替换 原来的值，进行快速开发；
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-59d54b5967724e919f4c988c07592aee.png)

#### 1.替换Controller

复制ebook 替换成 category

#### 2.替换service

复制ebookservice 换成category

#### 3.如何回退文件

1.在未提交的情况下
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-34b032a04b624009b09724db92a3c3fa.png)
2.选择要回退的文件 即可回退
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/05/image-54c6cd0c41214854b7cf311942dfbb29.png)

#### 4.使用restFul风格传递数据

1.前端发送请求

```java
 axios.delete("/ebook/delete/"+id).then((response) => {
        const data = response.data; // data = commonResp
        if (data.success) {// 判断是否加载成功
          // 重新加载列表
          handleQuery({
            page: pagination.value.current,
            size: pagination.value.pageSize,
          });
        } else {
          message.error(data.message);
        }
      });

```

注意在 url后面一定要 加上/ 否则 会直接拼接上 id号 导致后端接受不到数据
2.后端接口

```java
    @DeleteMapping("/delete/{id}")
    public CommonResp delete(@PathVariable(value = "id") Long id){
        CommonResp objectCommonResp = new CommonResp<>();
        categoryServce.delete(id);
        return objectCommonResp;
    }


```

### 4.前端定时器

setTimeout()



