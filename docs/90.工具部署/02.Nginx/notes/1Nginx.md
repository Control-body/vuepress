---
title: Nginx总结
---

## 1. 什么是Nginx?

Nginx (engine x) 是一个高性能的HTTP和反向代理web服务器，同时也提供了IMAP/POP3/SMTP服务。

Nginx是由伊戈尔·赛索耶夫为俄罗斯访问量第二的Rambler.ru站点（俄文：Рамблер）开发的。

Nginx的特点是占有内存少，并发能力强，能够支持高达 50,000 个并发连接数的响应,事实上nginx的并发能力在同类型的网页服务器中表现较好，中国大陆使用nginx网站用户有：百度、京东、新浪、网易、腾讯、淘宝等。

Nginx支持正向代理、反向代理、负载均衡和动静分离。接下来一一介绍。

### 1.1 正向代理
在如今的网络环境下，我们如果由于技术需要要去访问国外的某些网站，此时你会发现位于国外的某网站我们通过浏览器是没有办法访问的，此时大家可能都会用一个代理(vpn)进行访问，代理的方式主要是找到一个可以访问国外网站的代理服务器，我们将请求发送给代理服务器，代理服务器去访问国外的网站，然后将访问到的数据传递给我们！

Nginx支持正向代理，"它代理的是客户端"，是一个位于客户端和原始服务器(origin server)之间的服务器，为了从原始服务器取得内容，客户端向代理发送一个请求并指定目标(原始服务器)，然后代理向原始服务器转交请求并将获得的内容返回给客户端。客户端必须要进行一些特别的设置才能使用正向代理。

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-a4c65b10c74e4442bec396fea227119c.png)

客户端必须设置正向代理服务器，当然前提是要知道正向代理服务器的IP地址，还有代理程序的端口。如图。
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-124e8ff675114c1cb93416f1fe30c912.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-1c89f0a0fed742e7868b4852262709bb.png)
**正向代理的用途：**
（1）访问原来无法访问的资源，如Google
（2） 可以做缓存，加速访问资源
（3）对客户端访问授权，上网进行认证
（4）代理可以记录用户访问记录（上网行为管理），对外隐藏用户信息
### 1.2 反向代理

明白了什么是正向代理，我们继续看关于反向代理的处理方式，举例如我大天朝的某宝网站，每天同时连接到网站的访问人数已经爆表，单个服务器远远不能满足人民日益增长的购买欲望了，此时就出现了一个大家耳熟能详的名词：分布式部署；也就是通过部署多台服务器来解决访问人数限制的问题；某宝网站中大部分功能也是直接使用Nginx进行反向代理实现的，并且通过封装Nginx和其他的组件之后起了个高大上的名字：Tengine，有兴趣的童鞋可以访问Tengine的官网查看具体的信息：http://tengine.taobao.org/。

Tengine是一个由淘宝网发起的Web服务器开源项目，其核心成员来自于淘宝 、搜狗 等互联网企业。它在Nginx 的基础上，针对大访问量网站的需求，添加了很多高级功能和特性。Tengine的性能和稳定性已经在大型的网站如淘宝网 ，天猫商城 等得到了很好的检验。它的最终目标是打造一个高效、稳定、安全、易用的Web平台。

Nginx支持**反向代理**，"它代理的是服务端，代服务端接收请求"，主要用于服务器集群分布式部署的情况下，**反向代理隐藏了服务器的信息**。多个客户端给服务器发送的请求，Nginx服务器接收到之后，按照一定的规则分发给了后端的业务处理服务器进行处理了。请求的来源也就是客户端是明确的，但是请求具体由哪台服务器处理的并不明确了，Nginx扮演的就是一个反向代理角色。
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-ca93743096534d1282c0b7a53ebf893b.png)

反向代理的作用：
（1）保证内网的安全，通常将反向代理作为公网访问地址，Web服务器是内网。
（2）负载均衡，通过反向代理服务器来优化网站的负载

### 1.3 正向代理与反向代理的应用场景

通常情况下，我们在实际项目操作时，正向代理和反向代理很有可能会存在在**一个应用场景中**，正向代理代理客户端的请求去访问目标服务器，目标服务器是一个反向代理服务器，反向代理了多台真实的业务处理服务器。具体的拓扑图如下：
### 1.4 正向代理与反向代理的区别

通过一张图来说明正向代理和反向代理二者之间的区别：
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-0a22e070bcb14d2caf1a4ffd868f3b5c.png)
图解：

在正向代理中，Proxy和Client同属于一个LAN（图中方框内），隐藏了客户端信息；

在反向代理中，Proxy和Server同属于一个LAN（图中方框内），隐藏了服务端信息；

实际上，Proxy在两种代理中做的事情都是替服务器代为收发请求和响应，不过从结构上看正好左右互换了一下，所以把后出现的那种代理方式称为反向代理了。

### 1.5 负载均衡

我们已经明确了所谓代理服务器的概念，那么接下来，Nginx扮演了反向代理服务器的角色，它是以依据什么样的规则进行请求分发的呢？不用的项目应用场景，分发的规则是否可以控制呢？

我们把客户端发送的、Nginx反向代理服务器接收到的**请求数量**，就是我们说的**负载量**。

请求数量按照一定的规则进行分发到不同的服务器处理的规则，就是一种均衡规则。

将服务器接收到的请求按照规则分发的过程，称为**负载均衡**。

负载均衡在实际项目操作过程中，有**硬件**负载均衡和**软件**负载均衡两种，硬件负载均衡也称为硬负载，如F5负载均衡，相对造价昂贵成本较高，但是数据的**稳定性安全性**等等有非常好的保障，如中国移动中国联通这样的公司才会选择硬负载进行操作；更多的公司考虑到成本原因，会选择使用软件负载均衡，软件负载均衡是利用现有的技术结合主机硬件实现的一种**消息队列分发机制**。
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-04a855b232244076a48e57536f1a6e13.png)
Nginx支持的负载均衡调度算法方式如下：

1. weight轮询（默认，常用，具有HA功效！）：接收到的请求按照权重分配到不同的后端服务器，即使在使用过程中，某一台后端服务器宕机，Nginx会自动将该服务器剔除出队列，请求受理情况不会受到任何影响。 这种方式下，可以给不同的后端服务器设置一个权重值(weight)，用于调整不同的服务器上请求的分配率；权重数据越大，被分配到请求的几率越大；该权重值，主要是针对实际工作环境中不同的后端服务器硬件配置进行调整的。
2. ip_hash（常用）：每个请求按访问ip的hash结果分配，这样每个访客固定访问一个后端服务器，这也在一定程度上解决了集群部署环境下session共享的问题。
3. fair：智能调整调度算法，动态的根据后端服务器的请求处理到响应的时间进行均衡分配，响应时间短处理效率高的服务器分配到请求的概率高，响应时间长处理效率低的服务器分配到的请求少；结合了前两者的优点的一种调度算法。但是需要注意的是Nginx默认不支持fair算法，如果要使用这种调度算法，请安装upstream_fair模块。
4. url_hash：按照访问的url的hash结果分配请求，每个请求的url会指向后端固定的某个服务器，可以在Nginx作为静态服务器的情况下提高缓存效率。同样要注意Nginx默认不支持这种调度算法，要使用的话需要安装Nginx的hash软件包。
### 1.6 动静分离

为了提高网站的响应速度，减轻程序服务器（Tomcat，Jboss等）的负载，对于静态资源比如图片，js，css等文件，我们可以在Nginx反向代理服务器中进行缓存，这样浏览器在请求一个静态资源时，Nginx代理服务器就可以直接处理，而不用将请求转发给后端服务器。用户请求的动态文件比如**servlet,jsp则转发给Tomcat**，Jboss服务器处理，这就是**动静分离**。
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-d7225c6b2a28482bafaf8324f5ff992a.png)

### 1.7 几种常用web服务器对比
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-d91615408a1b44bdaeefc596f0198d52.png)

## 2. Linux安装Nginx

### 安装 Nginx 前 必须安装 PCRE（Ubuntu操作系统的时候）
Nginx是高度自由化的Web服务器，它的功能是由许多模块来支持。如果使用了某个模块，这个模块使用了一些类似zlib或OpenSSL等的第三方库，那么就必须先安装这些软件。Ubuntu下不像在centOS中使用yum直接在线安装，可以使用以下方法。

#### （1）PCRE库

PCRE库支持正则表达式。如果我们在配置文件nginx.conf中使用了正则表达式，那么在编译Nginx时就必须把PCRE库编译进Nginx，因为Nginx的HTTP模块需要靠它来解析正则表达式。另外，pcre-devel是使用PCRE做二次开发时所需要的开发库，包括头文件等，这也是编译Nginx所必须使用的。可以这样安装：
```java

sudo apt-get install libpcre3 libpcre3-dev  

```
#### （2）zlib库
zlib库用于对HTTP包的内容做gzip格式的压缩，如果我们在nginx.conf中配置了gzip on，并指定对于某些类型（content-type）的HTTP响应使用gzip来进行压缩以减少网络传输量，则在编译时就必须把zlib编译进Nginx。zlib-devel是二次开发所需要的库。可以这样安装：

sudo apt-get install zlib1g-dev
#### （3）OpenSSL库
如果服务器不只是要支持HTTP，还需要在更安全的SSL协议上传输HTTP，那么需要拥有OpenSSL。另外，如果我们想使用MD5、SHA1等散列函数，那么也需要安装它。可以这样安装：

sudo apt-get install openssl libssl-dev 
网址：https://blog.csdn.net/somanlee/article/details/69808788?utm_source=copy

最好在更新一下 openssl

但是升级了 openssl nginx 安装 --with-http_ssl_module 会报错 （所以我 为了开启 --with-http_ssl_module 没有升级 openssl 不升级也没什么关系 哈哈哈）


不升级  openssl  能正常编译安装 nginx --with-http_ssl_module   切记切记
###  安装Nginx
下载地址：https://nginx.org/en/download.html
```java
[root@centos7601 nginx]# wget https://nginx.org/download/nginx-1.18.0.tar.gz
[root@centos7601 nginx]# ll
总用量 3072
-rw-r--r--. 1 root root 2090750 2月  13 2020 download
-rw-r--r--. 1 root root 1039530 4月  21 2020 nginx-1.18.0.tar.gz
drwxr-xr-x. 9 1169 1169   12288 2月  28 15:39 pcre-8.44
[root@centos7601 nginx]# tar -zxvf nginx-1.18.0.tar.gz 
[root@centos7601 nginx]# ll
总用量 3076
-rw-r--r--. 1 root root 2090750 2月  13 2020 download
drwxr-xr-x. 8 1001 1001    4096 4月  21 2020 nginx-1.18.0
-rw-r--r--. 1 root root 1039530 4月  21 2020 nginx-1.18.0.tar.gz
drwxr-xr-x. 9 1169 1169   12288 2月  28 15:39 pcre-8.44
[root@centos7601 nginx]# cd nginx-1.18.0/
[root@centos7601 nginx-1.18.0]# ./configure 
# 安装成功之后，在/usr下多出来一个文件夹local/nginx，在/usr/local/nginx/sbin有启动脚本 一定要在/url中修改否则不生效
[root@centos7601 sbin]# pwd
/usr/local/nginx/sbin
[root@centos7601 sbin]# ll
总用量 3764
-rwxr-xr-x. 1 root root 3852280 2月  28 16:01 nginx
# 启动nginx
[root@centos7601 sbin]# ./nginx
[root@centos7601 sbin]# ps -ef |grep nginx
root      60890      1  0 16:05 ?        00:00:00 nginx: master process ./nginx
nobody    60892  60890  0 16:05 ?        00:00:00 nginx: worker process
root      60907 127532  0 16:05 pts/3    00:00:00 grep --color=auto nginx
# 测试Nginx是否成功，查看ip，然后网址输入ip地址可转到一个Nginx测试网页，这里只展示部分命令结果
[root@centos7601 sbin]# ifconfig
ens33: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.14.128  netmask 255.255.255.0  broadcast 192.168.14.255
        inet6 fe80::9eb2:b749:c806:4c97  prefixlen 64  scopeid 0x20<link>
        ether 00:0c:29:61:23:1e  txqueuelen 1000  (Ethernet)
        RX packets 507925  bytes 738941851 (704.7 MiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 158188  bytes 10510448 (10.0 MiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```
### 开启防火墙
 nginx默认是监听80 端口；
```java

# 由于我的Linxu虚拟机80端口未开，所以需要对防火墙进行配置
[root@centos7601 sbin]# firewall-cmd --list-all
public (active)
  target: default
  icmp-block-inversion: no
  interfaces: ens33
  sources: 
  services: ssh dhcpv6-client
  ports: 8080/tcp
  protocols: 
  masquerade: no
  forward-ports: 
  source-ports: 
  icmp-blocks: 
  rich rules: 
	
[root@centos7601 sbin]# firewall-cmd --permanent --add-port=80/tcp
success
[root@centos7601 sbin]# firewall-cmd --reload
success
[root@centos7601 sbin]# firewall-cmd --query-port=80/tcp
yes
[root@centos7601 sbin]# firewall-cmd --list-all
public (active)
  target: default
  icmp-block-inversion: no
  interfaces: ens33
  sources: 
  services: ssh dhcpv6-client
  ports: 8080/tcp 80/tcp
  protocols: 
  masquerade: no
  forward-ports: 
  source-ports: 
  icmp-blocks: 
  rich rules:

```

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-537aa61f3353459bad9390263b47c835.png)


![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-1d64c05e37384ae89edf034ca80cf2cc.png)
### CentOS 安装 Nginx
#### A. 依赖环境安装
要安装 nginx，要先安装 nginx 的依赖环境：gcc-c++、openssl、pcre、zlib

##### 1. 安装 gcc-c++ 编译器和 openssl
```java

yum install gcc-c++ 
yum install -y openssl openssl-devel

```


##### 2. 安装 pcre 包

yum install -y pcre pcre-devel

##### 3. 再安装 zlib 包

yum install -y zlib zlib-devel

#### B. Nginx 安装
依赖环境安装完成后，我们开始安装 nginx

##### 1. 在 /usr/local/ 目录下创建 nginx 文件夹

cd /usr/local
mkdir nginx

##### 2. 使用 wget 命令直接下载 nginx 安装包，也可以直接上传下载好的压缩包

wget https://nginx.org/download/nginx-1.14.0.tar.gz

##### 3. 解压并进入解压好的目录

tar -zxvf nginx-1.14.0.tar.gz 
cd nginx-1.14.0/

##### 4. 使用 nginx 默认配置

./configure

##### 5. 编译安装

make
make install

如果没有报错，那么你的 /usr/local/nginx目录会多些除了红框之外的东西如下
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-6249509ddca04ee9a040ec1a979ec639.png)
##### 6. 进入 /usr/local/nginx/sbin 目录执行启动命令 
就算下载在其他的位置，编译之后也会 放在/usr/local/nginx/...下面

./nginx

##### 7. 查看是否启动成功

ps -ef | grep nginx
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-52e17dcfbf8e47adbf95246e7c5830ac.png)
## 3. Nginx常用命令
```java
# 查看nginx版本信息
[root@centos7601 sbin]# ./nginx -v 
nginx version: nginx/1.18.0
[root@centos7601 sbin]# ps -ef |grep nginx
root      62288      1  0 16:18 ?        00:00:00 nginx: master process ./nginx
nobody    62290  62288  0 16:18 ?        00:00:00 nginx: worker process
root      62325 127532  0 16:18 pts/3    00:00:00 grep --color=auto nginx
# 关闭nginx
[root@centos7601 sbin]# ./nginx -s stop
[root@centos7601 sbin]# ps -ef |grep nginx
root      62346 127532  0 16:18 pts/3    00:00:00 grep --color=auto nginx
# 重新加载nginx，前提是nginx已启动
[root@centos7601 sbin]# ./nginx -s reload
nginx: [error] open() "/usr/local/nginx/logs/nginx.pid" failed (2: No such file or directory)
# 启动nginx
[root@centos7601 sbin]# ./nginx 
[root@centos7601 sbin]# ps -ef |grep nginx
root      62428      1  0 16:19 ?        00:00:00 nginx: master process ./nginx
nobody    62430  62428  0 16:19 ?        00:00:00 nginx: worker process
root      62442 127532  0 16:19 pts/3    00:00:00 grep --color=auto nginx
# 重新加载nginx，前提是nginx已启动
[root@centos7601 sbin]# ./nginx -s reload
[root@centos7601 sbin]# ps -ef |grep nginx
root      62428      1  0 16:19 ?        00:00:00 nginx: master process ./nginx
nobody    62453  62428  0 16:19 ?        00:00:00 nginx: worker process
root      62465 127532  0 16:19 pts/3    00:00:00 grep --color=auto nginx

```
## 4. Nginx配置文件

配置文件的位置：/usr/local/nginx/conf/nginx.conf

nginx.conf分为三个模块：全局块、events块、http块
#### 4.1 全局块

全局块：从配置文件开始到 events 块之间的内容，主要会设置一些影响 Nginx 服务器整体运行的配置指令，配置服务器整体运行的配置指令。

主要包括：

1、配置运行 Nginx 服务器的用户（组）、
2、允许生成的 worker process 数，
3、进程 PID 存放路径、
4、日志存放路径和类型
5、配置文件的引入
6、…
#### 4.2 events块

events 块涉及的指令主要影响 Nginx 服务器与用户的网络连接，常用的设置包括是否开启对多 work process 下的网络连接进行序列化，是否允许同时接收多个网络连接，选取哪种事件驱动模型来处理连接请求，每个 work process 可以同时支持的最大连接数等。

#### 4.3 http块

http块是 Nginx 服务器配置中最频繁的**部分，代理、缓存和日志**定义等绝大多数功能和第三方模块的配置都在这里。

需要注意的是，http 块也可以包括:

● http 全局块
● 多个server 块

##### 4.3.1 http 全局块

http 全局块配置的指令包括文件引入、 MIME-TYPE 定义、日志自定义、连接超时时间、单链接请求数上限等

##### 4.3.2 server 块

这块和虚拟主机有密切关系，虚拟主机从用户角度看，和单一独立的硬件主机是完全一样的，该技术的产生是为了节省互联网服务器硬件成本。

每个 http 块可以包括多个 server 块，而每个 server 块就相当于一个**虚拟主机**。

而每个 server 块也分为：

● 全局 server 块
● 多个 locaton 块

###### 4.3.2.1 全局 server 块

最常见的配置是本虚拟机主机的监听配置和**本虚拟主机的名称或 IP 配置**。

###### 4.3.2.2 location 块

一个 server 块可以配置多个 location 块。

这块的主要作用是基于 Nginx 服务器接收到的**请求字符串**（例如 server_name/uri-string），对虚拟主机名称（也可以是 IP 别名）之外的字符串（例如： /uri-string）进行匹配，对特定的请求进行处理。

4.4 配置文件的内容解析

更多内容可参考：

https://blog.csdn.net/wangbin_0729/article/details/82109693
https://www.cnblogs.com/hunttown/p/5759959.html

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-a29f1df916d046e49973a4504266756d.png)
```java
#指定了Nginx要开启的进程数。
#每个Nginx进程平均耗费10M~12M内存。建议指定和CPU的数量一致即可。
worker_processes 8;
 
#定义全局错误日志文件。日志输出级别有debug、info、notice、warn、error、crit可供选择
#其中，debug输出日志最为最详细，而crit输出日志最少。
error_log /usr/local/nginx/logs/error.log info;

#指定进程pid的存储文件位置
pid /usr/local/nginx/logs/nginx.pid;

#指定进程可以打开的最大描述符：数目
#工作模式与连接数上限
#这个指令是指当一个nginx进程打开的最多文件描述符数目，理论值应该是最多打开文件数（ulimit -n）与nginx进程数相除，但是nginx分配请求并不是那么均匀，所以最好与ulimit -n 的值保持一致。
#现在在linux 2.6内核下开启文件打开数为65535，worker_rlimit_nofile就相应应该填写65535。
#这是因为nginx调度时分配请求到进程并不是那么的均衡，所以假如填写10240，总并发量达到3-4万时就有进程可能超过10240了，这时会返回502错误。
worker_rlimit_nofile 65535;

# events事件指令是设定Nginx的工作模式及连接数上限：
events
{
    #events事件指令是设定Nginx的工作模式及连接数上限：
    #use是个事件模块指令，用来指定Nginx的工作模式。
    #Nginx支持的工作模式有select、poll、kqueue、epoll、rtsig和/dev/poll。
    #其中select和poll都是标准的工作模式，kqueue和epoll是高效的工作模式，不同的是epoll用在Linux平台上，而kqueue用在BSD系统中。
    #对于Linux系统，epoll工作模式是首选。
    use epoll;

    #worker_connections也是个事件模块指令，用于定义Nginx每个进程的最大连接数，默认是1024。
    #最大客户端连接数由worker_processes和worker_connections决定，即Max_clients=worker_processes*worker_connections。
    #在作为反向代理时，max_clients变为：max_clients = worker_processes * worker_connections/4。
	#进程的最大连接数受Linux系统进程的最大打开文件数限制，在执行操作系统命令“ulimit -n 65536”后worker_connections的设置才能生效
    worker_connections 1024;

    #keepalive超时时间。
    keepalive_timeout 60;

    #客户端请求头部的缓冲区大小。
    #这个可以根据你的系统分页大小来设置，一般一个请求头的大小不会超过1k，不过由于一般系统分页都要大于1k，所以这里设置为分页大小。
    #分页大小可以用命令getconf PAGESIZE 取得。
    #[root@web001 ~]# getconf PAGESIZE
    #4096
    #但也有client_header_buffer_size超过4k的情况，但是client_header_buffer_size该值必须设置为“系统分页大小”的整倍数。
    client_header_buffer_size 4k;

    #这个将为打开文件指定缓存，默认是没有启用的，max指定缓存数量，建议和打开文件数一致，inactive是指经过多长时间文件没被请求后删除缓存。
    open_file_cache max=65535 inactive=60s;

    #这个是指多长时间检查一次缓存的有效信息。
    #语法:open_file_cache_valid time 默认值:open_file_cache_valid 60 使用字段:http, server, location 这个指令指定了何时需要检查open_file_cache中缓存项目的有效信息.
    open_file_cache_valid 80s;

    #open_file_cache指令中的inactive参数时间内文件的最少使用次数，如果超过这个数字，文件描述符一直是在缓存中打开的，如上例，如果有一个文件在inactive时间内一次没被使用，它将被移除。
    #语法:open_file_cache_min_uses number 默认值:open_file_cache_min_uses 1 使用字段:http, server, location  这个指令指定了在open_file_cache指令无效的参数中一定的时间范围内可以使用的最小文件数,如果使用更大的值,文件描述符在cache中总是打开状态.
    open_file_cache_min_uses 1;
    
    #语法:open_file_cache_errors on | off 默认值:open_file_cache_errors off 使用字段:http, server, location 这个指令指定是否在搜索一个文件是记录cache错误.
    open_file_cache_errors on;
}
 
 
 
#设定http服务器，利用它的反向代理功能提供负载均衡支持
http
{
	#实现对配置文件所包含的文件的设定，可以减少主配置文件的复杂度。类似于Apache中的include方法。
    #文件扩展名与文件类型映射表
    include mime.types;

    #默认文件类型
    default_type application/octet-stream;

    #默认编码
    #charset utf-8;

    #服务器名字的hash表大小
    #保存服务器名字的hash表是由指令server_names_hash_max_size 和server_names_hash_bucket_size所控制的。参数hash bucket size总是等于hash表的大小，并且是一路处理器缓存大小的倍数。在减少了在内存中的存取次数后，使在处理器中加速查找hash表键值成为可能。如果hash bucket size等于一路处理器缓存的大小，那么在查找键的时候，最坏的情况下在内存中查找的次数为2。第一次是确定存储单元的地址，第二次是在存储单元中查找键 值。因此，如果Nginx给出需要增大hash max size 或 hash bucket size的提示，那么首要的是增大前一个参数的大小.
    server_names_hash_bucket_size 128;

    #客户端请求头部的缓冲区大小。这个可以根据你的系统分页大小来设置，一般一个请求的头部大小不会超过1k，不过由于一般系统分页都要大于1k，所以这里设置为分页大小。分页大小可以用命令getconf PAGESIZE取得。
    client_header_buffer_size 32k;

    #客户请求头缓冲大小。nginx默认会用client_header_buffer_size这个buffer来读取header值，如果header过大，它会使用large_client_header_buffers来读取。
    large_client_header_buffers 4 64k;

    #设定通过nginx上传文件的大小
    client_max_body_size 8m;

    #开启高效文件传输模式，sendfile指令指定nginx是否调用sendfile函数来输出文件，对于普通应用设为 on，如果用来进行下载等应用磁盘IO重负载应用，可设置为off，以平衡磁盘与网络I/O处理速度，降低系统的负载。注意：如果图片显示不正常把这个改成off。
    #sendfile指令指定 nginx 是否调用sendfile 函数（zero copy 方式）来输出文件，对于普通应用，必须设为on。如果用来进行下载等应用磁盘IO重负载应用，可设置为off，以平衡磁盘与网络IO处理速度，降低系统uptime。
    sendfile on;

    #开启目录列表访问，合适下载服务器，默认关闭。
    autoindex on;

    #此选项允许或禁止使用socke的TCP_CORK的选项，此选项仅在使用sendfile的时候使用
    tcp_nopush on;
     
    tcp_nodelay on;

    #长连接超时时间，单位是秒
    keepalive_timeout 120;

    #FastCGI相关参数是为了改善网站的性能：减少资源占用，提高访问速度。下面参数看字面意思都能理解。
    fastcgi_connect_timeout 300;
    fastcgi_send_timeout 300;
    fastcgi_read_timeout 300;
    fastcgi_buffer_size 64k;
    fastcgi_buffers 4 64k;
    fastcgi_busy_buffers_size 128k;
    fastcgi_temp_file_write_size 128k;

    #gzip模块设置
    gzip on; #开启gzip压缩输出
    gzip_min_length 1k;    #最小压缩文件大小
    gzip_buffers 4 16k;    #压缩缓冲区
    gzip_http_version 1.0;    #压缩版本（默认1.1，前端如果是squid2.5请使用1.0）
    gzip_comp_level 2;    #压缩等级
    gzip_types text/plain application/x-javascript text/css application/xml;    #压缩类型，默认就已经包含textml，所以下面就不用再写了，写上去也不会有问题，但是会有一个warn。
    gzip_vary on;

    #开启限制IP连接数的时候需要使用
    #limit_zone crawler $binary_remote_addr 10m;


    #负载均衡配置
    upstream piao.jd.com {
     
        #upstream的负载均衡，weight是权重，可以根据机器配置定义权重。weigth参数表示权值，权值越高被分配到的几率越大。
        server 192.168.80.121:80 weight=3;
        server 192.168.80.122:80 weight=2;
        server 192.168.80.123:80 weight=3;

        #nginx的upstream目前支持4种方式的分配
        #1、轮询（默认）
        #每个请求按时间顺序逐一分配到不同的后端服务器，如果后端服务器down掉，能自动剔除。
        #2、weight
        #指定轮询几率，weight和访问比率成正比，用于后端服务器性能不均的情况。
        #例如：
        #upstream bakend {
        #    server 192.168.0.14 weight=10;
        #    server 192.168.0.15 weight=10;
        #}
        #2、ip_hash
        #每个请求按访问ip的hash结果分配，这样每个访客固定访问一个后端服务器，可以解决session的问题。
        #例如：
        #upstream bakend {
        #    ip_hash;
        #    server 192.168.0.14:88;
        #    server 192.168.0.15:80;
        #}
        #3、fair（第三方）
        #按后端服务器的响应时间来分配请求，响应时间短的优先分配。
        #upstream backend {
        #    server server1;
        #    server server2;
        #    fair;
        #}
        #4、url_hash（第三方）
        #按访问url的hash结果来分配请求，使每个url定向到同一个后端服务器，后端服务器为缓存时比较有效。
        #例：在upstream中加入hash语句，server语句中不能写入weight等其他的参数，hash_method是使用的hash算法
        #upstream backend {
        #    server squid1:3128;
        #    server squid2:3128;
        #    hash $request_uri;
        #    hash_method crc32;
        #}

        #tips:
        #upstream bakend{#定义负载均衡设备的Ip及设备状态}{
        #    ip_hash;
        #    server 127.0.0.1:9090 down;
        #    server 127.0.0.1:8080 weight=2;
        #    server 127.0.0.1:6060;
        #    server 127.0.0.1:7070 backup;
        #}
        #在需要使用负载均衡的server中增加 proxy_pass http://bakend/;

        #每个设备的状态设置为:
        #1.down表示单前的server暂时不参与负载
        #2.weight为weight越大，负载的权重就越大。
        #3.max_fails：允许请求失败的次数默认为1.当超过最大次数时，返回proxy_next_upstream模块定义的错误
        #4.fail_timeout:max_fails次失败后，暂停的时间。
        #5.backup： 其它所有的非backup机器down或者忙的时候，请求backup机器。所以这台机器压力会最轻。

        #nginx支持同时设置多组的负载均衡，用来给不用的server来使用。
        #client_body_in_file_only设置为On 可以讲client post过来的数据记录到文件中用来做debug
        #client_body_temp_path设置记录文件的目录 可以设置最多3层目录
        #location对URL进行匹配.可以进行重定向或者进行新的代理 负载均衡
    }
     
     
     
    #虚拟主机的配置
    server
    {
        #监听端口
        listen 80;

        #域名可以有多个，用空格隔开
        server_name www.jd.com jd.com;
        index index.html index.htm index.php;
        root /data/www/jd;

        #对******进行负载均衡
        location ~ .*.(php|php5)?$
        {
            fastcgi_pass 127.0.0.1:9000;
            fastcgi_index index.php;
            include fastcgi.conf;
        }
         
        #图片缓存时间设置
        location ~ .*.(gif|jpg|jpeg|png|bmp|swf)$
        {
            expires 10d;
        }
         
        #JS和CSS缓存时间设置
        location ~ .*.(js|css)?$
        {
            expires 1h;
        }
         
        #日志格式设定
        #$remote_addr与$http_x_forwarded_for用以记录客户端的ip地址；
        #$remote_user：用来记录客户端用户名称；
        #$time_local： 用来记录访问时间与时区；
        #$request： 用来记录请求的url与http协议；
        #$status： 用来记录请求状态；成功是200，
        #$body_bytes_sent ：记录发送给客户端文件主体内容大小；
        #$http_referer：用来记录从那个页面链接访问过来的；
        #$http_user_agent：记录客户浏览器的相关信息；
        #通常web服务器放在反向代理的后面，这样就不能获取到客户的IP地址了，通过$remote_add拿到的IP地址是反向代理服务器的iP地址。反向代理服务器在转发请求的http头信息中，可以增加x_forwarded_for信息，用以记录原有客户端的IP地址和原来客户端的请求的服务器地址。
        log_format access '$remote_addr - $remote_user [$time_local] "$request" '
        '$status $body_bytes_sent "$http_referer" '
        '"$http_user_agent" $http_x_forwarded_for';
         
        #定义本虚拟主机的访问日志
        access_log  /usr/local/nginx/logs/host.access.log  main;
        access_log  /usr/local/nginx/logs/host.access.404.log  log404;
         
        #对 "/" 启用反向代理
        location / {
            proxy_pass http://127.0.0.1:88;
            proxy_redirect off;
            proxy_set_header X-Real-IP $remote_addr;
             
            #后端的Web服务器可以通过X-Forwarded-For获取用户真实IP
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
             
            #以下是一些反向代理的配置，可选。
            proxy_set_header Host $host;

            #允许客户端请求的最大单文件字节数
            client_max_body_size 10m;

            #缓冲区代理缓冲用户端请求的最大字节数，
            #如果把它设置为比较大的数值，例如256k，那么，无论使用firefox还是IE浏览器，来提交任意小于256k的图片，都很正常。如果注释该指令，使用默认的client_body_buffer_size设置，也就是操作系统页面大小的两倍，8k或者16k，问题就出现了。
            #无论使用firefox4.0还是IE8.0，提交一个比较大，200k左右的图片，都返回500 Internal Server Error错误
            client_body_buffer_size 128k;

            #表示使nginx阻止HTTP应答代码为400或者更高的应答。
            proxy_intercept_errors on;

            #后端服务器连接的超时时间_发起握手等候响应超时时间
            #nginx跟后端服务器连接超时时间(代理连接超时)
            proxy_connect_timeout 90;

            #后端服务器数据回传时间(代理发送超时)
            #后端服务器数据回传时间_就是在规定时间之内后端服务器必须传完所有的数据
            proxy_send_timeout 90;

            #连接成功后，后端服务器响应时间(代理接收超时)
            #连接成功后_等候后端服务器响应时间_其实已经进入后端的排队之中等候处理（也可以说是后端服务器处理请求的时间）
            proxy_read_timeout 90;

            #设置代理服务器（nginx）保存用户头信息的缓冲区大小
            #设置从被代理服务器读取的第一部分应答的缓冲区大小，通常情况下这部分应答中包含一个小的应答头，默认情况下这个值的大小为指令proxy_buffers中指定的一个缓冲区的大小，不过可以将其设置为更小
            proxy_buffer_size 4k;

            #proxy_buffers缓冲区，网页平均在32k以下的设置
            #设置用于读取应答（来自被代理服务器）的缓冲区数目和大小，默认情况也为分页大小，根据操作系统的不同可能是4k或者8k
            proxy_buffers 4 32k;

            #高负荷下缓冲大小（proxy_buffers*2）
            proxy_busy_buffers_size 64k;

            #设置在写入proxy_temp_path时数据的大小，预防一个工作进程在传递文件时阻塞太长
            #设定缓存文件夹大小，大于这个值，将从upstream服务器传
            proxy_temp_file_write_size 64k;
        }
         
         
        #设定查看Nginx状态的地址
        location /NginxStatus {
            stub_status on;
            access_log on;
            auth_basic "NginxStatus";
            auth_basic_user_file confpasswd;
            #htpasswd文件的内容可以用apache提供的htpasswd工具来产生。
        }
         
        #本地动静分离反向代理配置
        #所有jsp的页面均交由tomcat或resin处理
        location ~ .(jsp|jspx|do)?$ {
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_pass http://127.0.0.1:8080;
        }
         
        #所有静态文件由nginx直接读取不经过tomcat或resin
        location ~ .*.(htm|html|gif|jpg|jpeg|png|bmp|swf|ioc|rar|zip|txt|flv|mid|doc|ppt|
        pdf|xls|mp3|wma)$
        {
            expires 15d; 
        }
         
        location ~ .*.(js|css)?$
        {
            expires 1h;
        }
    }
}

```
## 5. 配置反向代理

### 案例一：
案例效果：打开浏览器，在浏览器地址栏输入地址 www.123.com ，跳转到 liunx 系统 tomcat 主页面中

前面我们已经了解了反向代理是代理后端服务器的，我们以一张图再回顾一下，这张图也是此案例配置的示例图！
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-338cc03a3fb342dc99cbf3979e84d154.png)
从图中我们可以看出，我们还需要配置tomcat，安装tomcat可参考：https://www.yuque.com/bithachi/study/ko2vq0 的第5个内容。

并且Nginx开放80端口，可参考上面的安装Nginx部分配置端口。

我们将图上所述的配置好之后，启动nginx测试，windows浏览器访问www.123.com，Nginx反向代理服务器会将请求转发到tomcat默认测试的127.0.0.1：8080页面。

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-bd1b43adc5ee4690be69a48662a83bfb.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-558239dd026544d9a456a9d4ec279282.png)

#### 在Linux中安装 tomcat
效果图：
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-ff7126f2bbe7485291886b76a4f114a1.png)

##### 一、首先到官方下载tomcat服务

##### 二、将tomcat上传至linux服务器中
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-6778164c84e849cbac540390389a149c.png)


2.解压：tar zxvf apache-tomcat-7.0.67.tar.gz


##### 三、配置环境编辑/etc/profile文件
```java
JAVA_HOME=/rommr/jdk1.6.0_45
PATH=$JAVA_HOME/bin:$PATH
CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
CATALINA_HOME=/rommr/tomcat7 #其他的是jdk配置 重要的就是这点
export JAVA_HOME CATALINA_HOME #这点ok
export PATH
export CLASSPATH
JAVA_HOME=/rommr/jdk1.6.0_45
PATH=$JAVA_HOME/bin:$PATH
CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
CATALINA_HOME=/rommr/tomcat7 #其他的是jdk配置 重要的就是这点
export JAVA_HOME CATALINA_HOME #这点ok
export PATH
export CLASSPATH

```

以上配置完后执行： source /etc/profile 配置文件生效
##### 四、启动tomcat 进入tomcat bin目录
./startup.sh启动 ./shutdown.sh关闭命令
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-a9ab389faa1745efa316805779d9904f.png)
启动命令之后浏览器上输入：http:\\localhost:8080\ 如果在外部访问需要写上ip地址http:\\192.168.38.128:8080\ 可以看到tomcat信息
##### 五 开启防火墙8080端口
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-98f76dd718a641d9bf71f6f1a749c40e.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-7e1588b077aa459ea739fad7ab70b604.png)

#### 配置nginx配置文件
在/usr/local/nginx/conf/nginx.conf
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-0e73868074be43868e526f802b45c71a.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-e87ac1b564294d90a7d8d063318e0806.png)


### 5.2 案例二

实现效果：使用 nginx 反向代理，根据访问的路径跳转到不同端口的服务中nginx 监听端口为 9001
访问 http://192.168.14.128:9001/edu/ 直接跳转到 127.0.0.1:8080
访问 http:// 192.168.14.128:9001/vod/ 直接跳转到 127.0.0.1:8081

配置步骤：
（1 ）准备两个 tomcat 服务器，一个 8080 端口，一个 8081 端口
（2 ）创建文件夹edu和vod和测试页面a.html
（3 ）开放对外访问的端口号 9001 8080 8081
(4 ）修改nginx.conf
(5）测试访问
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-f18045a2e54b44e0b6346ec5039e5002.png)
nginx.conf中http块中的location块 配置说明：
location用于匹配 URL，语法如下：
```java
location [ = | ~ | ~* | ^~ ] uri {

}
= ：用于不含正则表达式的 uri 前，要求请求字符串与 uri 严格匹配，如果匹配成功，就停止继续向下搜索并立即处理该请求。
~：用于表示 uri 包含正则表达式，并且区分大小写。
~*：用于表示 uri 包含正则表达式，并且不区分大小写。
^~：用于不含正则表达式的 uri 前，要求 Nginx 服务器找到标识 uri 和请求字符串匹配度最高的 location 后，立即使用此 location 处理请求，而不再使用 location块中的正则 uri 和请求字符串做匹配。
注意：如果uri包含正则表达式，则必须要有 ~ 或者 ~* 标识。

```

### 5.3 安装成系统服务，开机自启
- 创建服务脚本 
vi /usr/lib/systemd/system/nginx.service  
- 服务脚本内容  
```java
[Unit]
Description=nginx - web server
After=network.target remote-fs.target nss-lookup.target
[Service]
Type=forking
PIDFile=/usr/local/nginx/logs/nginx.pid
ExecStartPre=/usr/local/nginx/sbin/nginx -t -c /usr/local/nginx/conf/nginx.conf
ExecStart=/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf
ExecReload=/usr/local/nginx/sbin/nginx -s reload
ExecStop=/usr/local/nginx/sbin/nginx -s stop
ExecQuit=/usr/local/nginx/sbin/nginx -s quit
PrivateTmp=true
[Install]
WantedBy=multi-user.target

```


- 重新加载系统服务 
systemctl daemon-reload  

- 启动服务 
systemctl start nginx.service  
使用系统启动服务之前，建议先把之前启动的关闭，否则可能有冲突


- 重新启动nginx服务
systemctl reload nginx

- 开机启动  
systemctl enable nginx.service

### 5.4 启动与关闭 nginx
#### 1.停止Nginx服务的四种方法

从容停止服务

这种方法较stop相比就比较温和一些了，需要进程完成当前工作后再停止。

```java
nginx -s quit

```


立即停止服务

这种方法比较强硬，无论进程是否在工作，都直接停止进程。

```java
nginx -s stop

```


systemctl 停止

systemctl属于Linux命令

```java
systemctl stop nginx.service

```


killall 方法杀死进程

直接杀死进程，在上面无效的情况下使用，态度强硬，简单粗暴！

```java
killall nginx

```


#### 2.启动Nginx

nginx直接启动

nginx

systemctl命令启动

systemctl start nginx.service

#### 3.查看启动后记录

```java
ps aux | grep nginx

```



#### 4.重启Nginx服务

systemctl restart nginx.service


#### 5.重新载入配置文件

当有系统配置文件有修改，用此命令，建议不要停止再重启，以防报错！

```java
nginx -s reload

```


#### 6.查看端口号

```java
netstat -tlnp

```
### nginx 配置环境变量

环境变量配置文件

如想将一个路径加入到$PATH中，可以像下面这样做：

#### 1. 控制台中：

$ PATH="$PATH:/my_new_path"    (关闭shell，会还原PATH)

#### 2. 修改profile文件：

```java
$ vi /etc/profile

```


以交叉编译环境为例：

交叉编译工具器在 /usr/local/nginx/sbin 

找到下面内容
```java

if [ "$EUID" = "0" ]; then

pathmunge /sbin

pathmunge /usr/sbin

pathmunge /usr/local/sbin

```


在这个后面加上: pathmunge /usr/local/nginx/sbin 

之后执行命令：source /etc/profile   （nginx 就可以生效了）

#### 3. 修改.bashrc文件：
```java

$ vi /root/.bashrc

```


在里面加入：
```java

export PATH="$PATH:/my_new_path"

```


后两种方法一般需要重新注销系统才能生效，最后可以通过echo命令测试一下：

$ echo $PATH

输出已经是新路径了。

举个列子，如果想把当前路径加入到环境变量中去，就可以这样做：

$   PATH ="$PATH:."

这样运行自己编写的shell脚本时就可以不输入./了。



**注意**： 服务是服务 exe是exe ，服务是后台运行的，而配置在环境变量中的bin是运行在前台的程序；