---
title: 尚医通Spring Cache+Redis
---

## 一、Spring Cache + Redis 缓存数据

Spring Cache 是一个非常优秀的缓存组件。自Spring 3.1起，提供了类似于@Transactional注解事务的注解Cache支持，且提供了Cache抽象，方便切换各种底层Cache（如：redis）换底层

- 使用Spring Cache的好处：
  1，提供基本的Cache抽象，方便切换各种底层Cache；
  2，通过注解Cache可以实现类似于事务一样，缓存逻辑透明的应用到我们的业务代码上，且只需要更少的代码就可以完成；
  3，提供事务回滚时也自动回滚缓存；
  4，支持比较复杂的缓存逻辑；
- 适合做缓存的数据：不经常修改的数据 固定的数据 经常查询的数据 
  1、项目集成Spring Cache + Redis
  因为缓存也是公共使用，所有的service模块都有可能使用缓存，所以我们把依赖与部分配置加在service-util模块，这样其他service模块都可以使用了

### 1.1  service-util添加依赖

在service-util模块的pom.xml添加依赖

```xml
<!-- redis -->
<dependency>
<groupId>org.springframework.boot</groupId>
<artifactId>spring-boot-starter-data-redis</artifactId>
</dependency>

<!-- spring2.X集成redis所需common-pool2-->
<dependency>
<groupId>org.apache.commons</groupId>
<artifactId>commons-pool2</artifactId>
<version>2.6.0</version>
</dependency>
```
### 1.2  service-util添加配置类(看懂就行)

**看懂三个方法是在干啥**
创建com.atguigu.yygh.common.config.RedisConfig

```java

package com.atguigu.yygh.common.config;

@Configuration
@EnableCaching
public class RedisConfig {

/**
     * 自定义key规则
     * @return
*/
@Bean
public KeyGenerator keyGenerator() {
return new KeyGenerator() {
@Override
public Object generate(Object target, Method method, Object... params) {
                StringBuilder sb = new StringBuilder();
                sb.append(target.getClass().getName());
                sb.append(method.getName());
for (Object obj : params) {
                    sb.append(obj.toString());
                }
return sb.toString();
            }
        };
    }

/**
     * 设置RedisTemplate规则
     * @param redisConnectionFactory
* @return
*/
@Bean
public RedisTemplate<Object, Object> redisTemplate(RedisConnectionFactory redisConnectionFactory) {
        RedisTemplate<Object, Object> redisTemplate = new RedisTemplate<>();
        redisTemplate.setConnectionFactory(redisConnectionFactory);
        Jackson2JsonRedisSerializer jackson2JsonRedisSerializer = new Jackson2JsonRedisSerializer(Object.class);

//解决查询缓存转换异常的问题
ObjectMapper om = new ObjectMapper();
// 指定要序列化的域，field,get和set,以及修饰符范围，ANY是都有包括private和public
om.setVisibility(PropertyAccessor.ALL, JsonAutoDetect.Visibility.ANY);
// 指定序列化输入的类型，类必须是非final修饰的，final修饰的类，比如String,Integer等会跑出异常
om.enableDefaultTyping(ObjectMapper.DefaultTyping.NON_FINAL);
        jackson2JsonRedisSerializer.setObjectMapper(om);

//序列号key value
redisTemplate.setKeySerializer(new StringRedisSerializer());
        redisTemplate.setValueSerializer(jackson2JsonRedisSerializer);
        redisTemplate.setHashKeySerializer(new StringRedisSerializer());
        redisTemplate.setHashValueSerializer(jackson2JsonRedisSerializer);

        redisTemplate.afterPropertiesSet();
return redisTemplate;
    }

/**
     * 设置CacheManager缓存规则
     * @param factory
* @return
*/
@Bean
public CacheManager cacheManager(RedisConnectionFactory factory) {
        RedisSerializer<String> redisSerializer = new StringRedisSerializer();
        Jackson2JsonRedisSerializer jackson2JsonRedisSerializer = new Jackson2JsonRedisSerializer(Object.class);

//解决查询缓存转换异常的问题
ObjectMapper om = new ObjectMapper();
        om.setVisibility(PropertyAccessor.ALL, JsonAutoDetect.Visibility.ANY);
        om.enableDefaultTyping(ObjectMapper.DefaultTyping.NON_FINAL);
        jackson2JsonRedisSerializer.setObjectMapper(om);

// 配置序列化（解决乱码的问题）,过期时间600秒
RedisCacheConfiguration config = RedisCacheConfiguration.defaultCacheConfig()
                .entryTtl(Duration.ofSeconds(600))
                .serializeKeysWith(RedisSerializationContext.SerializationPair.fromSerializer(redisSerializer))
                .serializeValuesWith(RedisSerializationContext.SerializationPair.fromSerializer(jackson2JsonRedisSerializer))
                .disableCachingNullValues();

        RedisCacheManager cacheManager = RedisCacheManager.builder(factory)
                .cacheDefaults(config)
                .build();
return cacheManager;
    }
}
```

## 2、使用Spring Cache
### 2.1 常用缓存标签
#### 2.1.2 缓存@Cacheable
根据方法对其**返回结果进行缓存**，下次请求时，如果缓存存在，则直接读取缓存数据返回；如果缓存不存在，则执行方法，并把返回的结果存入缓存中。一般用在查询方法上。

说明：
@EnableCaching：标记注解@EnableCaching，开启缓存，并配置Redis缓存管理器。@EnableCaching 注释触发后置处理器, 检查每一个Spring bean 的 public 方法是否存在缓存注解。如果找到这样的一个注释, 自动创建一个代理拦截方法调用和处理相应的缓存行为。
1.3  service-cmn添加redis配置
```xml
spring.redis.host=192.168.44.165
spring.redis.port=6379
spring.redis.database= 0
spring.redis.timeout=1800000
spring.redis.lettuce.pool.max-active=20
spring.redis.lettuce.pool.max-wait=-1
#最大阻塞等待时间(负数表示没限制)
spring.redis.lettuce.pool.max-idle=5
spring.redis.lettuce.pool.min-idle=0
```
#### 2.1.2 缓存@CachePut
使用该注解标志的方法，每次**都会执行**，并将结果**存入指定的缓存**中。其他方法可以直接从响应的缓存中读取缓存数据，而不需要再去查询数据库。一般用在新增方法上。
属性/方法名	解释
**value**	缓存名，必填，它指定了你的缓存存放在哪块命名空间
**cacheNames**	与 value 差不多，二选一即可
**key**	 可选属性，可以使用 SpEL 标签自定义缓存的key
#### 实验：
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-1dbe23bac5624bed8cb15fae65474009.png)
想要实现缓存直接在方法上 加上@Cacheable 就可以了
#### **2.1.3 缓存@CacheEvict**
使用该注解标志的方法，**会清空指定的缓存**。一般用在更新或者删除方法上
查看源码，属性值如下：
属性/方法名	解释
**value**	缓存名，必填，它指定了你的缓存存放在哪块命名空间
**cacheNames**	与 value 差不多，二选一即可
**key**	      可选属性，可以使用 SpEL 标签自定义缓存的key
**allEntries**	是否清空所有缓存，默认为 false。如果指定为 true，则方法调用后将立即清空所有的缓存
**beforeInvocation**	是否在方法执行前就清空，默认为 false。如果指定为 true，则在方法执行前就会清空缓存
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-8d74f61ca5674e37ae2aa28c0c4fea61.png)
## 3 实验：
注意看 
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-96c955f2ec674749a4adcb0f6ecdc2b7.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-2f7cc89ef8f3489e8448ec752676f5e7.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-5ee49b28ed7d40038e236ecd64349a92.png)

