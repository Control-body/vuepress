---
title: Nginx尚硅谷
---

# 第 1 章 Nginx 简介
## 1.1 Nginx概述
Nginx ("engine x") 是一个高性能的 HTTP 和反向代理服务器,特点是占有内存少，并发能
力强，事实上 nginx 的并发能力确实在同类型的网页服务器中表现较好，中国大陆使用 nginx
网站用户有：百度、京东、新浪、网易、腾讯、淘宝等
## 1.2 Nginx 作为 web 服务器
Nginx 可以作为静态页面的 web 服务器，同时还支持 CGI 协议的动态语言，比如 perl、php
等。但是不支持 java。Java 程序只能通过与 tomcat 配合完成。Nginx 专为性能优化而开发，
性能是其最重要的考量,实现上非常注重效率 ，能经受高负载的考验,有报告表明能支持高
达 50,000 个并发连接数。
## 1.3 正向代理
Nginx 不仅可以做反向代理，实现负载均衡。还能用作正向代理来进行上网等功能。
正向代理：如果把局域网外的 Internet 想象成一个巨大的资源库，则局域网中的客户端要访问 Internet，则需要通过代理服务器来访问，这种代理服务就称为正向代理。(访问的是 目标地址 **需要配置 代理服务器**)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-2dd7393402054726bdf3a3303ad29666.png)
## 1.4 反向代理
反向代理，其实客户端对代理是**无感知的**，因为**客户端不需要任何配置**就可以访问，我们只需要将请求发送到**反向代理服务器**，由反向代理服务器去选择目标服务器获取数据后，在返回给客户端，此时反向代理服务器和目标服务器对外就是一个服务器，暴露的是**代理服务器地址**，**隐藏了真实服务器 IP** 地址
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-51cf72e281134326a072659055e2dae2.png)
## 1.5 负载均衡
客户端发送多个**请求到服务器**，服务器处理请求，有一些可能要与数据库进行交互，服务器处理完毕后，再将结果返回给客户端。这种架构模式对于早期的系统相对单一，并发请求相对较少的情况下是比较适合的，成本也低。但是随着信息数量的不断增长，访问量和数据量的飞速增长，以及系统业务的复杂
度增加，这种架构会造成服务器相应客户端的请求日益**缓慢**，并发量特别大的时候，还容易造成**服务器直接崩溃**。很明显这是由于服务器性能的瓶颈造成的问题，那么如何解决这种情况呢？
 我们首先想到的可能是****，比升级服务器的配置如提高 CPU 执行频率，加大内存等提高机器的物理性能来解决此问题，但是我们知道摩尔定律的日益失效，硬件的**性能提升已经不能**
满足日益提升的需求了。最明显的一个例子，天猫双十一当天，某个热销商品的瞬时访问量
是极其庞大的，那么类似上面的系统架构，将机器都增加到现有的顶级物理配置，都是不能
够满足需求的。那么怎么办呢？
 上面的分析我们去掉了增加服务器物理配置来解决问题的办法，也就是说纵向解决问题
的办法行不通了，那么**横向增加服务器的数量**呢？这时候**集群**的概念产生了，单个服务器解决不了，我们增加服务器的数量，然后将请求分发到各个服务器上，将原先请求集中到**单个**服务器上的情况改为将请求分发到**多个服务器**上，将负载分发到不同的服务器，也就是我们所说的**负载均衡**
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-dc2a68e9a62e4d8ebb002988893bfaf2.png)
## 1.6 动静分离
为了加快网站的解析速度，可以把动态页面和静态页面由不同的服务器来解析，加快解析速度。降低原来单个服务器的压力。
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-32f6aab626074ac99069d02e74c32873.png)
# 第 2 章 Nginx 安装
## 2.1 进入 nginx 官网，下载
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-b45f9f2b4a134f99b2ba6204357732c3.png)
## 2.2 安装 nginx
- 第一步，安装 pcre （联网下载压缩包的方式）
wget http://downloads.sourceforge.net/project/pcre/pcre/8.37/pcre-8.37.tar.gz
解压文件，
./configure 完成后，回到 pcre 目录下执行 make，
再执行 make install
- 第二步，安装 openssl
- 第三步，安装 zlib
yum -y install make zlib zlib-devel gcc-c++ libtool openssl openssl-devel
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-3498aced919c4fa1b3ad8858bdb69020.png)
第四步，安装 nginx
1、 解压缩 nginx-xx.tar.gz 包。
2、 进入解压缩目录，执行./configure。 
3、 make && make install（编译和运行）
查看开放的端口号（Linux是默认是 开着防火墙的 需要开放端口）
firewall-cmd --list-all（注意空格）
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-1555f5174aeb43bcbe96940e1cbd7bcd.png)
设置开放的端口号
firewall-cmd --add-service=http –permanent
sudo firewall-cmd --add-port=80/tcp --permanent
重启防火墙
firewall-cmd –reload
# 第 3 章 nginx 常用的命令和配置文件
## 3.1 nginx 常用的命令： 
（1）启动命令
在/usr/local/nginx/sbin 目录下执行 ./nginx
（2）关闭命令
在/usr/local/nginx/sbin 目录下执行 ./nginx -s stop
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-ec06a95d846a45378065eaa0ba083a28.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-e9f901344333473e96f1796594b217fb.png)
## Nginx 的配置文件
### 1、nginx 配置文件位置
cd /usr/local/nginx/conf/nginx.conf
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-6fd1aaf1429340d884cb91ae1619f138.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-df3f13ee3604445e839fdf7aa2948bcc.png)
### 2、配置文件中的内容
包含三部分内容
**（1）全局块**：配置服务器整体运行的配置指令
比如 worker_processes 1;处理并发数的配置
**（2）events 块**：影响 Nginx 服务器与用户的网络连接
比如 worker_connections 1024; 支持的最大连接数为 1024
**（3）http 块**
还包含两部分：
http 全局块
server 块
### Nginx 配置实例-反向代理实例 1
1、实现效果
（1）打开浏览器，在浏览器地址栏输入地址 www.123.com，跳转到 liunx 系统 tomcat 主页
面中
2、准备工作
（1）在 liunx 系统安装 tomcat，使用默认端口 8080
* tomcat 安装文件放到 liunx 系统中，解压
* 进入 tomcat 的 bin 目录中，./startup.sh 启动 tomcat 服务器
（2）对外开放访问的**端口**
firewall-cmd --add-port=8080/tcp --permanent
firewall-cmd –reload
查看已经开放的端口号
firewall-cmd --list-all
（3）在 windows 系统中通过**浏览器**访问 tomcat 服务器
当输入一个 Ip地址的时候（默认访问 80端口） 就是 用nginx 来监听 80端口
然后 根据url 来转发；
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-bdb12bb3fdce4b33a21fdd623a40bcc9.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-0c0665dd935649b58478adc01eb2c7f1.png)
### Nginx 配置实例-反向代理实例 2 
1、实现效果
使用 nginx 反向代理，根据访问的路径跳转到不同端口的服务中
nginx 监听端口为 9001，
访问 http://192.168.17.129:9001/edu/ 直接跳转到 127.0.0.1:8080
访问 http:// 192.168.17.129:9001/vod/ 直接跳转到 127.0.0.1:8081 2、准备工作
（1）准备两个 tomcat 服务器，一个 8080 端口，一个 8081 端口
（2）创建文件夹和测试页面
3、具体配置
（1）找到 nginx 配置文件，进行反向代理配置
![image.png](5)
![image.png](6)
![image.png](7)
![image.png](8)可以进行筛选 进行不同的跳转你
![image.png](9)
![image.png](10)
![image.png](11)
## Nginx 配置实例-负载均衡
### 1、实现效果
（1）浏览器地址栏输入地址 http://192.168.17.129/edu/a.html，负载均衡效果，平均 8080 和 8081 端口中
### 2、准备工作
（1）准备两台 tomcat 服务器，一台 8080，一台 8081
（2）在两台 tomcat 里面 webapps 目录中，创建名称是 edu 文件夹，在 edu 文件夹中创建
页面 a.html，用于测试
### 3、在 nginx 的配置文件中进行负载均衡的配置
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-8b79f5e5636b478eb36ad71e3d9814be.png)
### 4、nginx 分配服务器策略
第一种 轮询（默认）
每个请求按时间顺序逐一分配到不同的后端服务器，如果后端服务器 down 掉，能自动剔除。
第二种 weight
weight 代表权重默认为 1,权重越高被分配的客户端越多
第三种 ip_hash
每个请求按访问 ip 的 hash 结果分配，这样每个访客固定访问一个后端服务器
第四种 fair（第三方）
按后端服务器的响应时间来分配请求，响应时间短的优先分配。
## Nginx 配置实例-动静分离
1、什么是动静分离
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-bd921c6da09641d187987eb37446d0e5.png)
通过 location 指定不同的**后缀名**实现不同的**请求转发**。通过 **expires **参数设置，可以使浏览器缓存**过期时间**，减少与服务器之前的请求和流量。具体 Expires 定义：是给一个资源
设定一个过期时间，也就是说无需去服务端验证，直接通过浏览器自身确认是否过期即可，所以不会产生额外的流量。此种方法非常适合不经常变动的资源。（如果经常更新的文件，不建议使用 Expires 来缓存），我这里设置 3d，表示在这 3 天之内访问这个 URL，发送一
个请求，比对服务器该文件**最后更新时间没有变化**，则不会从服务器抓取，返回状态码** 304**，如果有修改，则直接从服务器重新下载，返回状态码 200。
2、准备工作
（1）在 liunx 系统中准备静态资源，用于进行访问
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-8a34d8d9f4644a05982f08a30f25a45d.png)
3、具体配置
（1）在 nginx 配置文件中进行配置
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-83ee1facdd484ff3a71312130bb6b10e.png)
4、最终测试
（1）浏览器中输入地址
http://192.168.17.129/image/01.jpg
* 因为配置文件 autoindex on
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-219421a6c6454ed4bac6d24a714c796d.png)
（2）在浏览器地址栏输入地址
http://192.168.17.129/www/a.html
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-31bed2a605704f2baed5e3f555de9ab9.png)
## Nginx 配置高可用的集群
1、什么是 nginx 高可用
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-37c2a8590113404ab52e62541b74cf3e.png)
（1）需要两台 nginx 服务器
（2）需要 keepalived
（3）需要虚拟 ip
2、配置高可用的准备工作
（1）需要两台服务器 192.168.17.129 和 192.168.17.131
（2）在两台服务器安装 nginx
（3）在两台服务器安装 keepalived
### Nginx 的原理
1、mater 和 worker
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-4bf96d787fd94d6795cbcd67a2487f11.png)
2、worker 如何进行工作的
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/03/image-dbbd5333ea574558af8e8c465bc290a0.png)
3、一个 master 和多个 woker 有好处
（1）可以使用 nginx –s reload 热部署，利用 nginx 进行热部署操作
（2）每个 woker 是独立的进程，如果有其中的一个 woker 出现问题，其他 woker 独立的，
继续进行争抢，实现请求过程，不会造成服务中断
4、设置多少个 woker 合适
worker 数和服务器的 cpu 数相等是最为适宜的
5、连接数 worker_connection
第一个：发送请求，占用了 woker 的几个连接数？
答案：2 或者 4 个
第二个：nginx 有一个 master，有四个 woker，每个 woker 支持最大的连接数 1024，支持的
#### 最大并发数是多少？
 普通的静态访问最大并发数是： worker_connections * worker_processes 2， 而如果是 HTTP 作 为反向代理来说，最大并发数量应该是 worker_connections * worker_processes/4。
#### 遇到的问题
nginx指定文件路径有两种方式root和alias，指令的使用方法和作用域：
[root]
语法：root path
默认值：root html
配置段：http、server、location、if
[alias]
语法：alias path
配置段：location

root与alias主要区别在于nginx如何解释location后面的uri，这会使两者分别以不同的方式将请求映射到服务器文件上。
root的处理结果是：**root路径＋location路径**
alias的处理结果是：**使用alias路径替换location路径**
alias是一个目录别名的定义，root则是最上层目录的定义。
还有一个重要的区别是alias后面必须要用“/”结束，否则会找不到文件的。。。而root则可有可无~~

root实例：

```location ^~ /t/ {
     root /www/root/html/;
}

location ^~ /t/ {
     root /www/root/html/;
}

```

如果一个请求的URI是/t/a.html时，web服务器将会返回服务器上的/www/root/html/t/a.html的文件。

alias实例：

```location ^~ /t/ {
 alias /www/root/html/new_t/;
}

location ^~ /t/ {
 alias /www/root/html/new_t/;
}

```

如果一个请求的URI是/t/a.html时，web服务器将会返回服务器上的/www/root/html/new_t/a.html的文件。注意这里是new_t，因为alias会把location后面配置的路径丢弃掉，把当前匹配到的目录指向到指定的目录。

注意：
1. 使用alias时，目录名后面一定要加"/"。
3. alias在使用正则匹配时，必须捕捉要匹配的内容并在指定的内容处使用。
4. alias只能位于location块中。（root可以不放在location中）