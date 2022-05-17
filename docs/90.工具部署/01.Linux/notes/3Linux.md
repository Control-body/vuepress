---
title: Linux基础(尚硅谷)
tags: Linux
---

## Linux和Unix的渊源
贝尔实验室： Multice（批处理的失败）-》Unix（分时处理的，汇编语言写的- 》->B语言-》C语言）-》Unix(高性能)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-eb8c47e8a41c4b7ba0e01eff7a69a7c0.png)
Git： 分布式代码管理工具；
SVN： 单点式的代码管理工具；
## GNU/Linux
GNU:计划 就是软件免费开发的宣言； -》
GPL的规范（完全免费）
BSD的规范-》使用后 可以进行闭源；
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-127473c55a6b4ba39466f68729b6088f.png)
## Linux发行版
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-34893b9ce21d41b0932eca2a8dca63c8.png)
## Linux和Windos 区别
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-6fc519a596db445bbf7bf2547529b048.png)
# 第 3 章 Linux 文件与目录结构 
## 3.1 Linux 文件 
Linux 系统中一切皆文件。 
## 3.2 Linux 目录结构 
如图 3-1 所示
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-2fcb039e95fa487ab0c7703ecf1436a0.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-8393e60128264f1b834ff95d2902da55.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-f103fe2d38cb48eebcf36c60e30eaafd.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-1426b723071740a3a949ec225d794d43.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-39e986f0205342039d3b5b71bc5b6b05.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-f7b13ef1d7a64cb2be3b995767db12b6.png)

我们可以修改的文件夹：
- /opt   其他文件安装的目录
- /var   临时文件的目录
- /tmp   临时文件的目录
- /root   root用户的目录文件
- /家目录  各个用户的家目录
- /etc  配置文件，谨慎修改

# 第 4 章 VI/VIM 编辑器（重要） 
## 4.1 是什么 VI 
是 Unix 操作系统和类 Unix 操作系统中最通用的文本编辑器。 VIM 编辑器是从 VI 发展出来的一个性能更强大的文本编辑器。可以主动的以字体颜 色辨别语法的正确性，方便程序设计。VIM 与 VI 编辑器完全兼容。
## 4.2 测试数据准备 
1）拷贝/etc/profile 数据到/root 目录下
```java
[root@hadoop100 桌面]# cp /etc/profile /root 
[root@hadoop100 桌面]# cd /root/
```

## 4.3 一般模式 （删除 和 赋值黏贴）
以 vi 打开一个档案就直接进入一般模式了（这是默认的模式）。在这个模式中， 你可 以使用『上下左右』按键来移动光标，你可以使用『删除字符』或『删除整行』来处理档 案内容， 也可以使用『复制、粘贴』来处理你的文件数据。

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-af86e79818e143e6bc98201b84188689.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-aa27f05397ff4b81a497f1b602ec16d1.png)
## 4.4 编辑模式 
在一般模式中可以进行删除、复制、粘贴等的动作，但是却无法编辑文件内容的！要 等到你按下『i, I, o, O, a, A』等任何一个字母之后才会进入编辑模式。 注意了！通常在Linux中，按下这些按键时，在画面的左下方会出现『INSERT或 REPLACE』的字样，此时才可以进行编辑。而如果要回到一般模式时， 则必须要按下 『Esc』这个按键即可退出编辑模式。
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-e439894598244b65a6f0028f5df7afe5.png)


## 4.5 指令模式
 在一般模式当中，输入『 : / ?』3个中的任何一个按钮，就可以将光标移动到最底下那 一行。在这个模式当中， 可以提供你『搜寻资料』的动作，而读取、存盘、大量取代字符、 离开 vi 、显示行号等动作是在此模式中达成的！

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-1c3ca8313655458a98c89a60bf1f5145.png)
## 4.6 模式间转换
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-512698f9236b4f44abc46dc4540ce5c6.png)

# 第 5 章 网络配置（重点） 
## 5.1 查看网络 IP 和 网关 
### 1）查看虚拟网络编辑器，如图 5-1 所示
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-bc2eac8050924583bebffd70d598b800.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-b60bf973c1ae4a6eb4ff446d3d1f28ed.png)

### 2）修改虚拟网卡 Ip，如图 5-2 所示
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-2f68d163cf444180b98e55b28cad3803.png)

### 3）查看网关，如图 5-3 所示
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-8b20923a20e84566ae1cef4a25616dd6.png)
### 4）查看 windows 环境的中 VMnet8 网络配置，如图 5-4 所示

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-4be9f932d4ab464c80a32ca46e52d730.png)

## 5.2 配置网络 ip 地址 
### 5.2.1 ifconfig 配置网络接口 
ifconfig :network interfaces configuring 网络接口配置 
1）基本语法 ifconfig （功能描述：显示所有网络接口的配置信息） 
2）案例实操 
（1）查看当前网络 ip  ifconfig

### 5.2.3 修改 IP 地址 
#### 1） 查看 IP 配置文件，如图 5-5 所示
```java
[root@hadoop100 桌面]#vim /etc/sysconfig/network-scripts/ifcfg-ens33

```
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-06bc200c3a49466997d5eb28e0603530.png)

以下标红的项必须修改，有值的按照下面的值修改，没有该项的要增加。
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-a92680f45f7749308f6e4a470bb24c2f.png)

#### 2）执行 service network restart 重启网络,如图 5-7 所示
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-dc6964edfc4f4a0586766b14c8c23be3.png)

## 5.2.4 修改 IP 地址后可能会遇到的问题 
（1）物理机能 ping 通虚拟机，但是虚拟机 ping 不通物理机,一般都是因为物理机的 防火墙问题,把防火墙关闭就行 
（2）虚拟机能 Ping 通物理机,但是虚拟机 Ping 不通外网,一般都是因为 DNS 的设置有 问题
（3）虚拟机 Ping www.baidu.com 显示域名未知等信息,一般查看 GATEWAY 和 DNS 设 置是否正确
（4）如果以上全部设置完还是不行，需要关闭 NetworkManager 服务  systemctl stop NetworkManager 关闭  systemctl disable NetworkManager 禁用 
（5）如果检查发现 systemctl status network 有问题 需要检查 ifcfg-ens33
## 5.3 配置主机名 
### 5.3.1 修改主机名称 
1） 基本语法 hostname （功能描述：查看当前服务器的主机名称） 
2） 案例实操 
（1）查看当前服务器主机名称
```java
 [root@hadoop100 桌面]# hostname 

```

（2）如果感觉此主机名不合适，我们可以进行修改。通过编辑/etc/hostname 文件 [root@hadoop100 桌面]# vi /etc/hostname 修改完成后重启生效。


### 5.3.2 修改 hosts 映射文件 
#### 1）修改 linux 的主机映射文件（hosts 文件） 
后续在 hadoop 阶段，虚拟机会比较多，配置时通常会采用主机名的方式配置， 比较简单方便。 不用刻意记 ip 地址。 
（1）打开/etc/hosts 
```java
[root@hadoop100 桌面]# vim /etc/hosts 

```

添加如下内容 
```java
192.168.2.100 hadoop100
192.168.2.101 hadoop101 
192.168.2.102 hadoop102 
192.168.2.103 hadoop103 
192.168.2.104 hadoop104 
192.168.2.105 hadoop105

```

（2）重启设备，重启后，查看主机名，已经修改成功

#### 2）修改 windows 的主机映射文件（hosts 文件） 
（1）进入 C:\Windows\System32\drivers\etc 路径 
（2）打开 hosts 文件并添加如下内容 
```java
192.168.2.100 hadoop100
192.168.2.101 hadoop101 
192.168.2.102 hadoop102 
192.168.2.103 hadoop103 
192.168.2.104 hadoop104 
192.168.2.105 hadoop105

```
#### 测试：
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-dced7a3e70b24d528fe4f4f1c36bfaf4.png)

## 5.4 远程登录 
通常在工作过程中，公司中使用的真实服务器或者是云服务器，都不允许除运维人员 之外的员工直接接触，因此就需要通过远程登录的方式来操作。所以，远程登录工具就是 必不可缺的，目前，比较主流的有 Xshell, SSH Secure Shell, SecureCRT,FinalShell 等，同学 们可以根据自己的习惯自行选择.
### 5.4.1 相关配置
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-53dcc26029b6428b90cdce6103928cf8.png)

# 第 6 章 系统管理 
## 6.1 Linux 中的进程和服务 
计算机中，一个正在执行的程序或命令，被叫做“进程”（process）。 
启动之后一只存在、常驻内存的进程，一般被称作“服务”（service）。

## 6.2 service 服务管理（CentOS 6 版本-了解） 
1） 基本语法 service 服务名 start | stop |· restart | status 
2） 经验技巧 查看服务的方法：/etc/init.d/服务名 ,发现只有两个服务保留在 service
## 6.3 chkconfig 设置后台服务的自启配置（CentOS 6 版本） 
1） 基本语法 
chkconfig （功能描述：查看所有服务器自启配置） 
chkconfig 服务名 off （功能描述：关掉指定服务的自动启动） 
chkconfig 服务名 on （功能描述：开启指定服务的自动启动） 
chkconfig 服务名 --list （功能描述：查看服务开机启动状态）

## 6.4 systemctl （CentOS 7 版本-重点掌握） 
1） 基本语法 systemctl start | stop | restart | status 服务名 
2） 经验技巧 查看服务的方法：/usr/lib/systemd/system

## 6.5 systemctl 设置后台服务的自启配置 
1）基本语法 
systemctl list-unit-files （功能描述：查看服务开机启动状态）
systemctl disable service_name （功能描述：关掉指定服务的自动启动） 
systemctl enable service_name （功能描述：开启指定服务的自动启动）
## 6.6 系统运行级别 
### 1）Linux 运行级别[CentOS 6]，如图 7-1 所示
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-c369c77c891a4b7b862d6499f1c03ab5.png)
### 2）CentOS7 的运行级别简化为: 
multi-user.target 等价于原运行级别 3（多用户有网，无图形界面） 
graphical.target 等价于原运行级别 5（多用户有网，有图形界面）

### 3） 查看当前运行级别: 
systemctl get-default 
### 4）修改当前运行级别 
systemctl set-default TARGET.target （这里 TARGET 取 multi-user 或者 graphical）

## 6.7 关闭防火墙 
1） 临时关闭防火墙 
（1）查看防火墙状态
[root@hadoop100 桌面]# systemctl status firewalld 

（2）临时关闭防火墙 
[root@hadoop100 桌面]# systemctl stop firewalld 2）开机启动时关闭防火墙 
（1）查看防火墙开机启动状态
 [root@hadoop100 桌面]# systemctl enable firewalld.service 
（2）设置开机时关闭防火墙 
[root@hadoop100 桌面]# systemctl disable firewalld.service

## 6.8 关机重启命令 
在 linux 领域内大多用在服务器上，很少遇到关机的操作。毕竟服务器上跑一个服务是永无止境的，除非特殊情况下，不得已才会关机

### 1）基本语法
（1）sync （功能描述：将数据由内存同步到硬盘中） 
（2）halt （功能描述：停机，关闭系统，但不断电） 
（3）poweroff （功能描述：关机，断电） 
（3）reboot （功能描述：就是重启，等同于 shutdown -r now） 
（4）shutdown [选项] 时间 

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-2e286b64713d42278c6cd5ee7bcb8ad8.png)

### 2） 经验技巧 
Linux 系统中为了提高磁盘的读写效率，对磁盘采取了 **“预读迟写”**操作方式。当用户 保存文件时，Linux 核心并不一定立即将保存数据写入物理磁盘中，而是将数据保存在缓 冲区中，等缓冲区满时再写入磁盘，这种方式可以极大的提高磁盘写入数据的效率。但是， 也带来了安全隐患，如果数据还未写入磁盘时，系统掉电或者其他严重问题出现，则将导 致数据丢失。使用 sync 指令可以立即将缓冲区的数据写入磁盘。
## 第 7 章 常用基本命令（重要） 
Shell 可以看作是一个命令解释器，为我们提供了交互式的文本控制台界面。我们可以 通过终端控制台来输入命令，由 shell 进行解释并最终交给内核执行。 本章就将分类介绍 常用的基本 shell 命令。

### 7.1 帮助命令 
#### 7.1.1 man 获得帮助信息 （只能获取非内嵌的命令）
1）基本语法 man [命令或配置文件] （功能描述：获得帮助信息） 
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-9dae004ab3da47e3a2fd0295ddc54998.png)
2）显示说明

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-96f37da181f04258802c5e2639af7768.png)

### 7.1.2 help 获得 shell 内置命令的帮助信息
 一部分基础功能的系统命令是直接内嵌在 shell 中的，系统加载启动之后会随着 shell 一起加载，常驻系统内存中。这部分命令被称为“内置（built-in）命令”；相应的其它命令 被称为“外部命令”。 
#### 1）基本语法 
help 命令（功能描述：获得 shell 内置命令的帮助信息） 
#### 2）案例实操 
（1）查看 cd 命令的帮助信息 [root@hadoop101 ~]# help cd

### 7.1.3 常用快捷键
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-69324671fa814156a8b52a518b7e6104.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-78e27a3c042343d4aa9416c11dfcd87f.png)

## 7.2 文件目录类 
### 7.2.1 pwd 显示当前工作目录的绝对路径 
pwd:print working directory 打印工作目录 
1）基本语法 pwd （功能描述：显示当前工作目录的绝对路径） 
2）案例实操 
（1）显示当前工作目录的绝对路径
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-9e56992b420a4932b5cb9cd571893331.png)

## 7.2.2 ls 列出目录的内容 
ls:list 列出目录内容 
1）基本语法 ls [选项] [目录或是文件] 
2）选项说明
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-e5e9c4695f16478fb68f86e5e086b388.png)
3）显示说明 每行列出的信息依次是： 
文件类型与权限 链接数 文件属主 文件属组 文件大小用byte 来表示 建立或最近修改的时间 名字

## 7.2.3 cd 切换目录 
cd:Change Directory 切换路径 
1）基本语法 cd [参数] 
2）参数说明
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-0c6e5ee5bac0479f9880e8ac3103878a.png)

## 7.2.4 mkdir 创建一个新的目录 
mkdir:Make directory 建立目录 
1）基本语法 mkdir [选项] 要创建的目录 
2）选项说明
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-b12ce94342ca4f349bb72bd4d8be7f1a.png)

## 7.2.5 rmdir 删除一个空的目录 
rmdir:Remove directory 移除目录 
1）基本语法 rmdir 要删除的空目录 
2）案例实操 
（1）删除一个空的文件夹
[root@hadoop101 ~]# rmdir xiyou/dssz/meihouwang

## 7.2.6 touch 创建空文件 
1）基本语法 touch 文件名称 
2）案例实操 
[root@hadoop101 ~]# touch xiyou/dssz/sunwukong.txt

## 7.2.7 cp 复制文件或目录 
1）基本语法 
cp [选项] source dest （功能描述：复制source文件到dest） 
2）选项说明
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-40907cc4b39743eb93f7b7754f080985.png)
3）参数说明
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-e02a3989fbba4fe0bff7b4f0bdaacb87.png)
## 7.2.8 rm 删除文件或目录 
1）基本语法 
rm [选项] deleteFile （功能描述：递归删除目录中所有内容） 
2）选项说明
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-0f0c9d5ffdb74b00ae9dcce9eae1ae2c.png)

## 7.2.9 mv 移动文件与目录或重命名 
1）基本语法 
（1）mv oldNameFile newNameFile （功能描述：重命名） 
（2）mv /temp/movefile /targetFolder （功能描述：移动文件）

## 7.2.10 cat 查看文件内容 查看文件内容，从第一行开始显示。 
1）基本语法 cat [选项] 要查看的文件 
2）选项说明
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-224b2e69850f477eb12e42cf86ef72ac.png)
3）经验技巧 
一般查看比较小的文件，一屏幕能显示全的。

4）案例实操 
（1）查看文件内容并显示行号 
```java
[atguigu@hadoop101 ~]$ cat -n houge.txt

```
## 7.2.11 more 文件内容分屏查看器 
more 指令是一个基于 VI 编辑器的文本过滤器，它以全屏幕的方式按页显示文本文件 的内容。more 指令中内置了若干快捷键，详见操作说明。 
1）基本语法 more 要查看的文件 
2）操作说明
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-b40f687b581d458c80e8a313b73f27d7.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-8655ab30d476421c9cbed40d1cf9cbf6.png)

## 7.2.12 less 分屏显示文件内容 
less 指令用来分屏查看文件内容，它的功能与 more 指令类似，但是比 more 指令更加 强大，支持各种显示终端。less 指令在显示文件内容时，并不是一次将整个文件加载之后 才显示，而是根据显示需要加载内容，对于显示大型文件具有较高的效率。 
1）基本语法 
less 要查看的文件 
2）操作说明
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-13767323ede24f1cb524f72fc3998ba9.png)

## 7.2.13 echo echo 输出内容到控制台 
1）基本语法 
echo [选项] [输出内容] 
选项： -e： 支持反斜线控制的字符转换
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-c690dcc373a8491b9f1de0215c0146b0.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-ae84f2c5f26c4d44adab1dad34832a6e.png)

## 7.2.14 head 显示文件头部内容 
head 用于显示文件的开头部分内容，默认情况下 head 指令显示文件的前 10 行内容。 
1）基本语法 
head 文件 （功能描述：查看文件头10行内容） 
head -n 5 文件 （功能描述：查看文件头5行内容，5可以是任意行数） 
2）选项说明
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-e2729945444a4a36b85132be00a6f428.png)
## 7.2.15 tail 输出文件尾部内容 
tail 用于输出文件中尾部的内容，默认情况下 tail 指令显示文件的后 10 行内容。 
1） 基本语法 
（1）tail 文件 （功能描述：查看文件尾部10行内容） 
（2）tail -n 5 文件 （功能描述：查看文件尾部5行内容，5可以是任意行数） 
（3）tail -f 文件 （功能描述：实时追踪该文档的所有更新）

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-2acaab8b4b3b489ebdaf2b86fbca494c.png)

3）案例实操 
（1）查看文件尾 1 行内容 
```java
[root@hadoop101 ~]# tail -n 1 smartd.conf 

```

（2）实时追踪该档的所有更新 
```java
[root@hadoop101 ~]# tail -f houge.txt

```

## 7.2.16 > 输出重定向和 >> 追加 
## 1）基本语法 、
（1）ls -l > 文件 （功能描述：列表的内容写入文件 a.txt 中（覆盖写））
（2）ls -al >> 文件 （功能描述：列表的内容追加到文件 aa.txt 的末尾）
（3）cat 文件 1 > 文件 2 （功能描述：将文件 1 的内容覆盖到文件 2） 
（4）echo “内容” >> 文件

### 2）案例实操 
（1）将 ls 查看信息写入到文件中 
```java
[root@hadoop101 ~]# ls -l>houge.txt 

```

（2）将 ls 查看信息追加到文件中 
```java
[root@hadoop101 ~]# ls -l>>houge.txt 

```

（3）采用 echo 将 hello 单词追加到文件中 
```java
[root@hadoop101 ~]# echo hello>>houge.txt

```
### 文件的修改机制
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-a4bb88ca7c1549a38ba8a0ae0afed348.png)

当用vim 去修改的时候，发现是监控不到的；
文件在 Linux 中的设置；
每个文件创建都会建立一个编码（索引节点号）；
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-c31a04c7bc3641dba92310a267bcc0f1.png)


跟踪的时候是按照所应号监控的；


## 7.2.17 ln 软链接 
软链接也称为**符号**链接，类似于 windows 里的快捷方式，有自己的数据块，主要存放 了链接其他文件的路径。 
### 1）基本语法 
ln -s [原文件或目录] [软链接名] （功能描述：给原文件创建一个软链接） 
### 2）经验技巧 
删除软链接： rm -rf 软链接名，而不是 rm -rf 软链接名/ 如果使用 rm -rf 软链接名/ 删除，会把软链接对应的真实目录下内容删掉 查询：通过 ll 就可以查看，列表属性第 1 位是 l，尾部会有位置指向。

### 3）案例实操 
（1）创建软连接 
```java
[root@hadoop101 ~]# mv houge.txt xiyou/dssz/ 
[root@hadoop101 ~]# ln -s xiyou/dssz/houge.txt ./houzi 
[root@hadoop101 ~]# ll lrwxrwxrwx. 1 root root 20 6 月 17 12:56 houzi -> xiyou/dssz/houge.txt 
```
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-1ac6f317cfda470991c6c255246ee014.png)
（2）删除软连接(注意不要写最后的/) 
[root@hadoop101 ~]# rm -rf houzi 
（3）进入软连接实际物理路径
```java
 [root@hadoop101 ~]# ln -s xiyou/dssz/ ./dssz 
[root@hadoop101 ~]# cd -P dssz/
```
（4）硬连接
每一个文件搜都有一个 inode
ln [原文件或目录] [软链接名] 
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-9bb9eb1a91f844be9fc63b690376689b.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-173011cff77c4d01b3be183034d9b266.png)
所有的文件都是硬链接；
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-ce7f77936d80482694fd0accaf4d7684.png)
## 7.2.18 history 查看已经执行过历史命令 
1）基本语法 history （功能描述：查看已经执行过历史命令） 
2）案例实操 
（1）查看已经执行过的历史命令
```java
[root@hadoop101 test1]# history

```

## 7.3 时间日期类 
1）基本语法 date [OPTION]... [+FORMAT] 2）选项说明
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-b3909edfb7714840869a57fff83e71a3.png)
3）参数说明
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-b8ed0db8e87d467bb70b39a66764e8cf.png)

## 7.3.1 date 显示当前时间 
1）基本语法
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-a91340a4473246e6a8c8b3b0af8ecd8b.png)

## 7.3.2 date 显示非当前时间 
1）基本语法 
（1）date -d '1 days ago' （功能描述：显示前一天时间） 
（2）date -d '-1 days ago' （功能描述：显示明天时间）

## 7.3.3 date 设置系统时间 
1）基本语法 date -s 字符串时间 
2）案例实操 
（1）设置系统当前时间 
[root@hadoop101 ~]# date -s "2017-06-19 20:52:18"
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-7013255da7b34992a66043c94bb5ec2c.png)

# 7.4 用户管理命令 
## 7.4.1 useradd 添加新用户 
1）基本语法 
useradd 用户名 （功能描述：添加新用户） 
useradd -d /home/dave davi（给用户的文件夹起别名)
useradd -g 组名 用户名 （功能描述：添加新用户到某个组） 
2）案例实操 （1）添加一个用户
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-65421b8f924943edaaca817804530ead.png)
## 7.4.2 passwd 设置用户密码 
1）基本语法 passwd 用户名 （功能描述：设置用户密码）
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-7e328c5eedf7481a9b8f6e406930cbfd.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-74bb37b3d2f545eb80b666ed210d7eac.png)
## 7.4.3 id 查看用户是否存在 
1）基本语法 id 用户名 
2）案例实操 
（1）查看用户是否存在 
[root@hadoop101 ~]#id tangseng
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-809e62bfe018449fbe1f420fb8d76b18.png)

## 7.4.4 cat /etc/passwd 查看创建了哪些用户
 1）案例实操 
[root@hadoop101 ~]# cat /etc/passwd
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-d16cc8a7507c4f05ba4171ce52a7a235.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-c8a6c6e22a414cc39d32a44ad2460e87.png)

## 7.4.5 su 切换用户
su: swith user 切换用户 
1）基本语法 
su 用户名称 （功能描述：切换用户，只能获得用户的执行权限，不能获得环境变量）
 su - 用户名称 （功能描述：切换到用户并获得该用户的环境变量及执行权限） 
2）案例实操 
（1）切换用户
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-2f84dcc1ad5b414ea9e821a6009c695e.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-10c6a49e7c2546d9b383c3ebab1cef26.png)

## 7.4.6 userdel 删除用户 
1）基本语法 
（1）userdel 用户名 （功能描述：删除用户但保存用户主目录） 
（2）userdel -r 用户名 （功能描述：用户和用户主目录，都删除） 
2）选项说明
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-fbc60322546c4d25812852099a1dab37.png)
（1）删除用户但保存用户主目录 
[root@hadoop101 ~]#userdel tangseng 
[root@hadoop101 ~]#ll /home/ 
（2）删除用户和用户主目录，都删除 
```java
[root@hadoop101 ~]#useradd zhubajie 
[root@hadoop101 ~]#ll /home/ 
[root@hadoop101 ~]#userdel -r zhubajie 
[root@hadoop101 ~]#ll /home/

```
## 7.4.7 who 查看登录用户信息 
1）基本语法 
（1）whoami （功能描述：显示自身用户名称） 
（2）who am i （功能描述：显示登录用户的用户名以及登陆时间） 
2）案例实操 
（1）显示自身用户名称 [root@hadoop101 opt]# whoami 
（2）显示登录用户的用户名 [root@hadoop101 opt]# who am i

## 7.4.8 sudo 设置普通用户具有 root 权限 
### 1）添加 atguigu 用户，并对其设置密码
 [root@hadoop101 ~]#useradd atguigu 
[root@hadoop101 ~]#passwd atguigu 
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-e660142808f14795a9e4e65f67024fb3.png)
### 2）修改配置文件 
[root@hadoop101 ~]#vi /etc/sudoers 
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-93947565eed940a6903e574fc2777d53.png)

修改 /etc/sudoers 文件，找到下面一行(91 行)，
在 root 下面添加一行，如下所示： 
```java
## Allow root to run any commands anywhere 
root ALL=(ALL) ALL 
atguigu ALL=(ALL) ALL

```
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-61069460de2c4b69aea6001e10beeca0.png)
或者配置成采用 sudo 命令时，不需要输入密码 
```java
## Allow root to run any commands anywhere root ALL=(ALL) ALL 
atguigu ALL=(ALL) NOPASSWD:ALL 

```
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-f2b58d1f89854384ad913982336b5725.png)
修改完毕，现在可以用 atguigu 帐号登录，
然后用命令 sudo ，即可获得 root 权限进行


### 7.4.9 usermod 修改用户 
1）基本语法 
usermod -g 用户组 用户名
2）选项说明
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-64c523ce02a344479660a2bbee8f8f4d.png)
3）案例实操 
（1）将用户加入到用户组 
[root@hadoop101 opt]# usermod -g root zhubajie

## 7.5 用户组管理命令 
每个用户都有一个用户组，系统可以对一个用户组中的所有用户进行集中管理。不同 Linux 系统对用户组的规定有所不同， 如Linux下的用户属于与它同名的用户组，这个用户组在创建用户时同时创建。 用户组的管理涉及用户组的添加、删除和修改。组的增加、删除和修改实际上就是对 /etc/group文件的更新。

### 7.5.1 groupadd 新增组 
1）基本语法 groupadd 组名 
2）案例实操 
（1）添加一个xitianqujing组 
[root@hadoop101 opt]#groupadd xitianqujing

### 7.5.2 groupdel 删除组 
1）基本语法 groupdel 组名 
2）案例实操 
（1）删除xitianqujing组 
[root@hadoop101 opt]# groupdel xitianqujing

## 7.5.3 groupmod 修改组 
1）基本语法 
groupmod -n 新组名 老组名 
1）选项说明
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-000c2c7812cd4c068e8e72d9275b22e9.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-f8a1be5b8e724d5f99a527b99f63164b.png)

## 7.6 文件权限类 
### 7.6.1 文件属性
 Linux系统是一种典型的多用户系统，不同的用户处于不同的地位，拥有不同的权限。 为了保护系统的安全性，Linux系统对不同的用户访问同一文件（包括目录文件）的权限做 了不同的规定。在Linux中我们可以使用ll或者ls -l命令来显示一个文件的属性以及文件所属 的用户和组

1）从左到右的 10 个字符表示，如图 7-1 所示
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-a614a77480cf41e993a087f9590ebb74.png)
如果没有权限，就会出现减号[ - ]而已。从左至右用0-9这些数字来表示: 
（1）0 首位表示类型
 在Linux中第一个字符代表这个文件是目录、文件或链接文件等等 
```java
- 代表文件 
- d 代表目录 
- l 链接文档(link file)；
```

（2）第1-3位确定属主（该文件的所有者）拥有该文件的权限。---User 
（3）第4-6位确定属组（所有者的同组用户）拥有该文件的权限，---Group 
（4）第7-9位确定其他用户拥有该文件的权限 ---Other

2）rwx 作用文件和目录的不同解释 
（1）作用到文件：
 [ r ]代表可读(read): 可以读取，查看
 [ w ]代表可写(write): 可以修改，但是不代表可以删除该文件，删除一个文件的前 提条件是对该文件所在的目录有写权限，才能删除该文件.
 [ x ]代表可执行(execute):可以被系统执行 
（2）作用到目录： 
 [ r ]代表可读(read): 可以读取，ls查看目录内容 
 [ w ]代表可写(write): 可以修改，目录内创建+删除+重命名目录 
 [ x ]代表可执行(execute):可以进入该目录

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-31aa46a6a8c74e7399e7b05eb13a0e24.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-54847363344e42b6b14094c70bbcf09b.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-c99e342736aa49dfa75bdd1b6ea72654.png)

（1）如果查看到是文件：链接数指的是硬链接个数。 
（2）如果查看的是文件夹：链接数指的是子文件夹个数。

### 7.6.2 chmod 改变权限 
#### 1）基本语法 如图 7-3 所示
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-83f1e08c9992482883ef1ecd31b1d346.png)
第一种方式变更权限
 chmod [{ugoa}{+-=}{rwx}] 文件或目录 
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-0d45d1806e1f4d50b9e158ec4227537e.png)
第二种方式变更权限 
chmod [mode=421 ] [文件或目录]
2）经验技巧 u:所有者 g:所有组 o:其他人 a:所有人(u、g、o 的总和)
r=4 w=2 x=1 rwx=4+2+1=7
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-4e0e71a835504d84ab27a6cce11bf065.png)
3）案例实操
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-80606e9e0fa54207b356d67e5fa0dc5e.png)
### 7.6.3 chown 改变所有者 
1）基本语法 
chown [选项] [最终用户] [文件或目录] （功能描述：改变文件或者目录的所有 者）
2）选项说明
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-122deeaaaf194daabd1d4e8e06fd9c61.png)

3）案例实操
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-6015733181e548b9ba97d15f52a1c2ad.png)
### 7.6.4 chgrp 改变所属组
1）基本语法 chgrp [最终用户组] [文件或目录] （功能描述：改变文件或者目录的所属组） 
2）案例实操 
（1）修改文件的所属组
```java
[root@hadoop101 ~]# chgrp root houge.txt 
[root@hadoop101 ~]# ls -al -rwxrwxrwx. 1 atguigu root 551 5 月 23 13:02 houge.txt

```
### 7.6.5 实战
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-3ee7a7f1ae7d4962a358625ae34090af.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-47044819632843d684cd55c3628b3d4f.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-95b7beaaa82f47a5b203a8337cd43373.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-60371b9b2b404daca6cedc6cf2d397a5.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-9efc85e80c484f50ae4df19451d9029b.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-a3a3c617528a4c1da114a35e79974517.png)

## 7.7 搜索查找类 
### 7.7.1 find 查找文件或者目录 
find 指令将从指定目录向下递归地遍历其各个子目录，将满足条件的文件显示在终端。 
1）基本语法 
find [搜索范围] [选项] 
2）选项说明
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-143df0abc25e4e09849b66ecb091bbce.png)
3）案例实操
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-9153c4ea0c724ef38c78e2c14e331469.png)

### 7.7.2 locate 快速定位文件路径
 locate 指令利用事先建立的系统中所有文件名称及路径的 locate 数据库实现快速定位给 定的文件。Locate 指令无需遍历整个文件系统，查询速度较快。为了保证查询结果的准确 度，管理员必须定期更新 locate 时刻。 
1）基本语法 
locate 搜索文件 
2）经验技巧 
由于 locate 指令基于数据库进行查询，所以第一次运行前，必须使用 updatedb 指令创 建 locate 数据库。 
3）案例实操
（1）查询文件夹 
```java
[root@hadoop101 ~]# updatedb 
[root@hadoop101 ~]#locate tmp

```
4）查询命令的位置which 命令
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-8c14855c44034f0caca3edd70a07091a.png)


![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-620b35c67e49411ba8766bdb10ee70d6.png)
### 7.7.3 grep 过滤查找及“|”管道符 
管道符，“|”，表示将前一个命令的处理结果输出传递给后面的命令处理 
1）基本语法 
grep 选项 查找内容 源文件 
2）选项说明
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-bd59a0778fca42188ecf0fba143bb996.png)

3）案例实操 
（1）查找某文件在第几行
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-4f5cef21d85a4ea0b67dd36725ed7cb9.png)
（2）管道操作符
就是前面查询出来的结果，在进行查询
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-163c17121459435aa60726db81af54da.png)
（3）wc查询文件的统计
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-17a80491bbf84c92974ec85202c9aafb.png)

## 7.8 压缩和解压类 
### 7.8.1 gzip/gunzip 压缩 
#### 1）基本语法 
gzip 文件 （功能描述：压缩文件，只能将文件压缩为*.gz 文件） 
gunzip 文件.gz （功能描述：解压缩文件命令） 
#### 2）经验技巧 
（1）只能压缩文件不能压缩目录 
（2）不保留**原来的文件** 
（3）同时多个文件会产生多个压缩包 
#### 3）案例实操 
（1）gzip压缩
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-7a8f107391e047278180dfd2874a51b3.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-0d2aa0e4876543a1a1ec79c18c7eb7ce.png)

### 7.8.2 zip/unzip 压缩 
1）基本语法 
zip [选项] XXX.zip 将要压缩的内容 （功能描述：压缩文件和目录的命令）
unzip [选项] XXX.zip
2）选项说明
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-ba585505174f40da8bda47859f218c1e.png)
3）经验技巧 
zip 压缩命令在windows/linux都通用，可以压缩目录且保留源文件。 
4）案例实操 
（1）压缩 houge.txt 和bailongma.txt，压缩后的名称为mypackage.zip
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-d0e24a51286a4167a1dc503ce696dca3.png)

### 7.8.3 tar 打包 
1）基本语法 
tar [选项] XXX.tar.gz 将要打包进去的内容 （功能描述：打包目录，压缩后的 文件格式.tar.gz） 
2）选项说明
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-280e642ca94f4537b28d8a0485d88bcb.png)
3）案例实操
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-8f36488d0b4b4cee8fa22a575bfcf295.png)
## 7.9 磁盘查看和分区类 
### 7.9.1 du 查看文件和目录占用的磁盘空间 
du: disk usage 磁盘占用情况  
1）基本语法 
du 目录/文件 （功能描述：显示目录下每个子目录的磁盘使用情况）
2）选项说明
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-c0173961374d4819bff25d58f226176b.png)
都是当前磁盘目录占用的磁盘空间；
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-d4b40cf5b8f14e3b90a8011b6444b9a5.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-066ff593900444e692cd517514f95556.png)
## 7.9.2 df 查看磁盘空间使用情况
 df: disk free 空余磁盘 
1）基本语法 
df 选项 （功能描述：列出文件系统的整体磁盘使用量，检查文件系统的磁盘空间占 用情况） 
2）选项说明
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-9ccf41d29e844505bdd47995cb3a697c.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-d1cab505c4de4563a22b337f653cd4ba.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-1f111141fb3c47e89e0e1de13b8549f8.png)
磁盘的剩余空间：
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-a60e4a3e98c8482289e08cc7ad8fa8d0.png)
## 7.9.3 lsblk 查看设备挂载情况 
1）基本语法 
lsblk （功能描述：查看设备挂载情况） 
2）选项说明
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-f0aa6c5fd5c446dcbf5cf29163a4d65e.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-cc4fe0b060544afc8d04e3e51647ac23.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-fd1f0b96305448f2a8806d11ee8361b1.png)
## 7.9.5 mount/umount 挂载/卸载 
对于Linux用户来讲，不论有几个分区，分别分给哪一个目录使用，它总归就是一个根 目录、一个独立且唯一的文件结构。 Linux中每个分区都是用来组成整个文件系统的一部分，它在用一种叫做“挂载”的处理 方法，它整个文件系统中包含了一整套的文件和目录，并将一个分区和一个目录联系起来， 要载入的那个分区将使它的存储空间在这个目录下获得。
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-d73abea3eb134f769936f7575b5a048b.png)
### 1）挂载前准备（必须要有光盘或者已经连接镜像文件），如图 7-5， 7-6 所示
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-9bd926756f834b3c8553ce5d2154c34f.png)

### 2）基本语法 
mount [-t vfstype] [-o options] device dir （功能描述：挂载设备）
 umount 设备文件名或挂载点 （功能描述：卸载设备）

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-c233d69b9e034e7c9f7c87487d5771b3.png)
想要访问到光盘中的文件，需要进行挂载

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-72ee86d6be0149249cd52c74e530913a.png)

3）参数说明
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-3926e260e8ef4d0cacc387e7deec15c8.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-050334a1792548548025bc5c326651ab.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-9b48188dd7af4ff88a0a670d2b1df884.png)
4）案例实操

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-1cf3bfb62c224f6e9653fd0ed9286cfd.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-0a931e204a8c4db394e8f297c5185260.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-cf48e6ddb36b4c9d97eda13a5bf809b3.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-584d5df30de342c88200033d6818a7ec.png)

5）设置开机自动挂载

[root@hadoop101 ~]# vi /etc/fstab

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-fd7ddedd3af94df79d0ffb15c67ba5f3.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-f72c70365be047ed82c17d60e61eebc8.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-0cc40688e56b4342b0c3fff83cf7d3e1.png)

## 7.9.4 fdisk 分区 
1）基本语法 
fdisk -l （功能描述：查看磁盘分区详情） fdisk 硬盘设备名 （功能描述：对新增硬盘进行分区操作） 
2）选项说明
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-89a3b811d01f4f05be3b460ffb15575b.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-4203b249ddc44568a28e0f6c4ac1cf9f.png)
3）经验技巧 
该命令必须在 root 用户下才能使用 
4）功能说明 
（1）Linux 分区 
Device：分区序列 
Boot：引导 
Start：从X磁柱开始 
End：到Y磁柱结束 
Blocks：容量 
Id：分区类型ID 
System：分区类型 
（2）分区操作按键说明 
m：显示命令列表 
p：显示当前磁盘分区 
n：新增分区 
w：写入分区信息并退出 
q：不保存分区信息直接退出 
5）案例实操
1.添加硬盘：
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-333ed994a9904599b95969759074b1e3.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-e66474a02a554a2ca8956aa2eadbc41a.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-319eb1282a894f32b12b0ff9f17bc4e2.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-8a7af3de10d946c99c01a56741688d37.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-9766929abc234c8b83183a0b6c290092.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-28caccff72324e30a100feb8a8c6a5bc.png)
### 创建分区
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-db27e959f96a494f867bc5fe1ff2cecb.png)
### 格式化分区
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-57fc5684da4b46ff9d97faf88517b728.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-b96d5187e41141f6b04c0c82cdf09760.png)
### 挂载
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-3a6e4953bf21435ab43df57a4113226e.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-1c94f2330cfa4156aae6b426febc5894.png)

### 卸载
就直接 umount 设备名字/挂在目录

## 7.10 进程管理类 
进程是正在执行的一个程序或命令，每一个进程都是一个运行的实体，都有自己的地 址空间，并占用一定的系统资源。 
### 7.10.1 ps 查看当前系统进程状态 
ps:process status 进程状态 
#### 1）基本语法
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-0eafa547b3d74824af34b27a1466928c.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-bebbd9ebb98549ac840b0d4b324d7913.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-f762bcbeecd745beb1556d3c1ea1a394.png)

#### 2）选项说明
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-8cfdb9ec1d3b45758c551b52bec6909e.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-b42c019b85d94223ac976152874c0e37.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-3f0c7102097149c8bb62cef4e61cddb4.png)
虚拟内存 和 真实内存 （RLU 最近最少原则）
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-10b189eadb3747189cdf8497eea2991c.png)

#### 3）功能说明
（1）ps aux 显示信息说明 
USER：该进程是由哪个用户产生的 
PID：进程的 
ID 号 %CPU：该进程占用 
CPU 资源的百分比，占用越高，进程越耗费资源； 
%MEM：该进程占用物理内存的百分比，占用越高，进程越耗费资源； 
VSZ：该进程占用虚拟内存的大小，单位 KB； 
RSS：该进程占用实际物理内存的大小，单位 KB； 
TTY：该进程是在哪个终端中运行的。对于 CentOS 来说，tty1 是图形化终端， tty2-tty6 是本地的字符界面终端。pts/0-255 代表虚拟终端。 
STAT：进程状态。常见的状态有：
- R：运行状态、
- S：睡眠状态、
- T：暂停状态、 
- Z：僵尸状态、
- s：包含子进程、
- l：多线程、
- +：前台显示 


START：该进程的启动时间
TIME：该进程占用 CPU 的运算时间，注意不是系统时间 
COMMAND：产生此进程的命令名
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-56fcd232d24544b196e078dd9f6bf58a.png)
（2）ps -ef 显示信息说明 
- UID：用户 ID 
- PID：进程 ID 
- PPID：父进程 ID 
- C：CPU 用于计算执行优先级的因子。数值越大，表明进程是 CPU 密集型运算， 执行优先级会降低；数值越小，表明进程是 I/O 密集型运算，执行优先级会提高 
- STIME：进程启动的时间 
- TTY：完整的终端名称 
- TIME：CPU 时间 
- CMD：启动进程所用的命令和参数


![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-4d71ab1d740946c99a7b036551fed6b3.png)


#### 4）经验技巧 
如果想查看进程的 CPU 占用率和内存占用率，
可以使用 aux; 如果想查看进程的父进程 ID 可以使用 ef
#### 5）实战
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-6f9caa9444124ec7802b56e2449fdab5.png)

### 7.10.2 kill 终止进程 
#### 1）基本语法 
kill [选项] 进程号 （功能描述：通过进程号杀死进程） 
killall 进程名称 （功能描述：通过进程名称杀死进程，也支持通配符，这 在系统因负载过大而变得很慢时很有用） 
#### 2）选项说明
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-3840e1220948461887840f8687bc23e5.png)
当把sshd 服务踢掉后，之前连接上的终端，可以继续使用，但是在创建新的连接的时候是无效的；需要重新启动服务；
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-a8ea256d238740ef80a3248927060a21.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-2e15dd7489e84a4f8ceb78f32a705f51.png)

### 7.10.3 pstree 查看进程树 
1）基本语法 
pstree [选项] 
2）选项说明
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-588bf83390ef4c5b9969e7c5c0029ba0.png)
3）案例实操
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-cb10c0df76314cd8a6a7e182c3babf8c.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-44fe5355f99142acb381127e75e83595.png)

### 7.10.4 top 实时监控系统进程状态 
1）基本命令 
top [选项] 
2）选项说明
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-8d26b114c1c64dedbde971dcab5cee46.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-81df12b42b3c47988c0325e09249ef23.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-3fe138d5bbdf4cf79ba00353849e008c.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-d6d8bfc35cbb417983caeee90a5d42cc.png)
4）查询结果字段解释 
第一行信息为任务队列信息
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-5576b63a11cd4b9cba3e32fa7beaea58.png)
第二行为进程信息
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-7d417769f88e4bf08673e5248b513ab5.png)
第三行为 CPU 信息
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-6c76847d83ab4e9fa3eca5b527e2b87b.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-8a9c75db7f94416f89de65db8baf54ca.png)
第四行为物理内存信息
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-b7b70e6fab9e4ca19f35ab7f70a7dfae.png)
第五行为交换分区（swap）信息
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-5929d6591ba6450ab2dd0f8d792e91ff.png)
执行上述命令后，可以按 P（按照Cpu进行排序）、M、N（按照进程号进行排序） 对查询出的进程结果进行排序。

## 7.10.5 netstat 显示网络状态和端口占用信息 
1）基本语法 
netstat -anp | grep 进程号 （功能描述：查看该进程网络信息） 
netstat –nlp | grep 端口号 （功能描述：查看网络端口号占用情况） 
2）选项说明
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-0b55a7a7161c4d1988cf3fe1730fbe10.png)

套接字： （主机加端口号）
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-7f10bba3ac754e769dee3a8773d39ecd.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-0472cffb376d48329c18f73d885adf40.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-af7d35e80bd145a9855934801738b388.png)


（1）通过进程号查看sshd进程的网络信息
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-9371449af56448898f38ce619aa45647.png)
（2）查看某端口号是否被占用
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-b209f0f3ac094850a954fb9b4e59c526.png)

### 7.11.2 crontab 定时任务设置 
1）基本语法 
crontab [选项] 
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-bcaf760a91e4407eb4af1d7edc91158d.png)
2）选项说明
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-95bffe07cffc4a9cbf4235a7e063d988.png)
3）参数说明
（1）进入 crontab 编辑界面。会打开 vim 编辑你的工作。 
```java
* * * * * 执行的任务

```

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-404e9aedd3b74e0f93d43d558364b675.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-4bcb40f493d84ee498e3c65a67163eec.png)
（2）特殊符号
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-074ac89185eb4576b1616ae605fc4f7c.png)
（3）特定时间执行命令
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-e3823dd4fc6d43619e28246cf05b883c.png)
4）案例实操
（1）每隔 1 分钟，向/root/bailongma.txt 文件中添加一个 11 的数字
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-08292af2163e4919a4df9f162a6290bb.png)

# 第 8 章 软件包管理 
## 8.1 RPM 
### 8.1.1 RPM 概述 
RPM（RedHat Package Manager），RedHat软件包管理工具，类似windows里面的setup.exe 是Linux这系列操作系统里面的打包安装工具，它虽然是RedHat的标志，但理念是通用的。 
RPM包的名称格式 
Apache-1.3.23-11.i386.rpm 
- “apache” 软件名称 
-  “1.3.23-11”软件的版本号，主版本和此版本 
-  “i386”是软件所运行的硬件平台，Intel 32位处理器的统称 
-  “rpm”文件扩展名，代表RPM包
### 8.1.2 RPM 查询命令（rpm -qa） 
1）基本语法 rpm -qa （功能描述：查询所安装的所有 rpm 软件包） 
2）经验技巧 由于软件包比较多，一般都会采取过滤。rpm -qa | grep rpm软件包 
3）案例实操 
（1）查询firefox软件安装情况
```java
[root@hadoop101 Packages]# rpm -qa |grep firefox firefox-45.0.1-1.el6.centos.x86_6413											

```
### 8.1.2 RPM 查询命令（rpm -qa） 
1）基本语法 
rpm -qa （功能描述：查询所安装的所有 rpm 软件包） 
2）经验技巧 由于软件包比较多，一般都会采取过滤。
rpm -qa | grep rpm软件包 
3）案例实操 
（1）查询firefox软件安装情况
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-5e9401ce3bcd401397c1b0941bb3351f.png)
```java
[root@hadoop101 Packages]# rpm -qa |grep firefox firefox-45.0.1-1.el6.centos.x86_64
```
### 8.1.3 RPM 卸载命令（rpm -e） 
1）基本语法 
（1）rpm -e RPM软件包 
（2） rpm -e --nodeps 软件包 
2）选项说明
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-5c53aae300b340368dfd615c46770106.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-95d7f1ba210d4d97a775a9c0e8790401.png)


![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-85c0b836d8864b5fb008e5f2776f40c0.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-c9d1dc33fab54c30a635903e9de77bd4.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-10210cd90b464d05a4fdcb141176005d.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-9ac1facfacbf4f61a052afffc8dda7ac.png)


### 8.1.4 RPM 安装命令（rpm -ivh） 
1）基本语法 
rpm -ivh RPM 包全名 
2）选项说明
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-af7290846a7a4ba9b6e0a0f04bd41127.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-e41df5b95ad0494d8da328d353523cdc.png)

## 8.2 YUM 仓库配置 (自动处理依赖性关系)
### 8.2.1 YUM 概述 
YUM（全称为 Yellow dog Updater, Modified）是一个在 Fedora 和 RedHat 以及 CentOS 中的 Shell 前端软件包管理器。基于 RPM 包管理，能够从指定的服务器自动下载 RPM 包 并且安装，可以**自动处理依赖性关系**，并且一次安装所有依赖的软件包，无须繁琐地一次 次下载、安装，如图 8-1 所示
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-6aaf0416d531433ba6d6d6ac1c773290.png)
### 8.2.2 YUM 的常用命令 
1）基本语法 
yum [选项] [参数] 
2）选项说明
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-c220ea62414944538b90bb7ee6a7357d.png)
3）参数说明
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-75d8f8cf5f9c4d49895ad05da1e41866.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-5dc9a1aa2483421f997d2094f7196240.png)
4）案例实操实操 
（1）采用 yum 方式安装 firefox 
[root@hadoop101 ~]#yum -y install firefox

### 8.2.3 修改网络 YUM 源 
默认的系统 YUM 源，需要连接国外 apache 网站，网速比较慢，可以修改关联的网络 YUM 源为国内镜像的网站，比如网易 163,aliyun 等
1）安装 wget, wget 用来从指定的 URL 下载文件
[root@hadoop101 ~] yum install wget 
2）在/etc/yum.repos.d/目录下，备份默认的 repos 文件, 
```java
[root@hadoop101 yum.repos.d] pwd /etc/yum.repos.d 
[root@hadoop101 yum.repos.d] cp CentOS-Base.repo CentOS-Base .repo.backup 

```

3）下载网易 163 或者是 aliyun 的 repos 文件,任选其一，如图 8-2 
```java
[root@hadoop101 yum.repos.d] wget 
http://mirrors.aliyun.com/repo/Centos-7.repo //阿里云 
[root@hadoop101 yum.repos.d] wget
 http://mirrors.163.com/.help/CentOS7-Base-163.repo //网易 163

```


4）使用下载好的 repos 文件替换默认的 repos 文件 
例如:用 CentOS7-Base-163.repo 替换 CentOS-Base.repo 
```java
[root@hadoop101 yum.repos.d]# mv CentOS7-Base-163.repo CentOS-Base.repo 

```

5）清理旧缓存数据，缓存新数据 
```java
[root@hadoop101 yum.repos.d]#yum clean all 
[root@hadoop101 yum.repos.d]#yum makecache yum makecache 

```

就是把服务器的包信息下载到本地电脑缓存起来 
6）测试 
```java
[root@hadoop101 yum.repos.d]# yum list | grep firefox 
[root@hadoop101 ~]#yum -y install firefox

```
# 第 9 章 克隆虚拟机 
## 9.1 克隆 
### 1）从现有虚拟机(关机状态)克隆出新虚拟机，右键选择管理=>克隆，
如图 9-1
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-79f80117abb1450fb125510a6da11919.png)
###  2）点击下一步,如图 9-2
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-ebde8c5d79ec46c5b2e8f3a1bd2d72d3.png)
### 3）选择虚拟机中的当前状态,如图 9-3
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-bf5d05d836684b5ab452f97f7b3e5fd3.png)
### 4）选择创建完整克隆，如图 9-4
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-b06da00e2e6946fead1d39d164ddfffc.png)
### 5）设置虚拟机名称及存储位置，如图 9-5
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-b77b3dcad9f948bab9d71fb17813b3cc.png)
## 9.2 开机修改系统相关配置 
注意: 使用 root 用户。 
1）修改 vim /etc/sysconfig/network-scripts/ifcfg-ens33 
,修改 IP 地址,如图 9-8 vim /etc/sysconfig/network-scripts/ifcfg-eth0
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-c057cf8261d44344bdf5e483792760f0.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-cc1d2af7fbc6422fac40acdb28edebab.png)

2）修改 /etc/hostname ,修改主机名,如图 9-9 
- 方式一：
vim /etc/hostname
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-fa7e11649e2d43bd962529341aedc372.png)
- 方式二：
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-340eeb4aad804b298167be6be8bbc6e0.png)

