---
title: Linux之Shell编程(尚硅谷)
tags: 
- shell编程
---

# 第 1 章 Shell 概述
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-f3a5e13fa636492e99b2fd8b18e2f035.png)
## 1）Linux 提供的 Shell 解析器有
```java
[atguigu@hadoop101 ~]$ 
cat /etc/shells 
/bin/sh 
/bin/bash 
/usr/bin/sh 
/usr/bin/bash 
/bin/tcsh 
/bin/csh
```
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-5a7218fa42bf43dbb906704bbb1200ae.png)

## 2）bash 和 sh 的关系 
```java
[atguigu@hadoop101 bin]$ ll | grep bash 
-rwxr-xr-x. 1 root root 941880 5 月 11 2016 bash 
lrwxrwxrwx. 1 root root 4 5 月 27 2017 sh -> bash 

```

## 3）Centos 默认的解析器是 
bash [atguigu@hadoop101 bin]$ echo $SHELL /bin/bash

# 第 2 章 Shell 脚本入门 
## 1）脚本格式 
脚本以#!/bin/bash 开头（指定解析器）
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-44c80470b819468ba7e22adabf6e4b01.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-16578b06549d4f1194481232bf43c7ce.png)
## 2）第一个 Shell 脚本：helloworld.sh
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-a55532e93f9c4eeabf97a32f188196c5.png)
（1）需求：创建一个 Shell 脚本，输出 helloworld 
（2）案例实操：
```java
[atguigu@hadoop101 shells]$ touch helloworld.sh 
[atguigu@hadoop101 shells]$ vim helloworld.sh 
在 helloworld.sh 中输入如下内容 
#!/bin/bash echo "helloworld"

```
## （3）脚本的常用执行方式 
第一种：采用 bash 或 sh+脚本的相对路径或绝对路径（不用赋予脚本+x 权限）
-  sh+脚本的相对路径 
[atguigu@hadoop101 shells]$ sh ./helloworld.sh 
Helloworld 
- sh+脚本的绝对路径 [atguigu@hadoop101 shells]$ sh /home/atguigu/shells/helloworld.sh 
helloworld
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-379ac6546ed34f2f81b40a7651d17c2d.png) 
- bash+脚本的相对路径 
[atguigu@hadoop101 shells]$ bash ./helloworld.sh 
Helloworld 
- bash+脚本的绝对路径 
[atguigu@hadoop101 shells]$ bash /home/atguigu/shells/helloworld.sh
 Helloworld

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-79dca032836e4069bac2a1fe7442bb72.png)

第二种：采用输入脚本的绝对路径或相对路径执行脚本（必须具有可执行权限+x）
 ①首先要赋予 helloworld.sh 脚本的+x 权限 
[atguigu@hadoop101 shells]$ chmod +x helloworld.sh 
②执行脚本
- 相对路径 
[atguigu@hadoop101 shells]$ ./helloworld.sh 
Helloworld 
- 绝对路径 
[atguigu@hadoop101 shells]$ /home/atguigu/shells/helloworld.sh 
Helloworld
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-a6174d265d9e4ac6b66f3325186297e0.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-b3007b34c9bb44f281b809a6a4656cb2.png)

注意：第一种执行方法，本质是 bash 解析器帮你执行脚本，所以脚本本身不需要执行 权限。
第二种执行方法，本质是脚本需要自己执行，所以需要执行权限。

【了解】第三种：在脚本的路径前加上“.”或者 source
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-e5bf67c09f2948449e149de78cf6c23f.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-6f151b85e7554168a78732d97a1df39d.png)
原因： 
前两种方式都是在当前 shell 中打开一个子 shell 来执行脚本内容，当脚本内容结束，则 子 shell 关闭，回到父 shell 中。 
第三种，也就是使用在脚本路径前加“.”或者 source 的方式，可以使脚本内容在当前 shell 里执行，而无需打开子 shell！这也是为什么我们每次要修改完/etc/profile 文件以后，需 要 source 一下的原因。 
开子 shell 与不开子 shell 的区别就在于，环境变量的继承关系，如在子 shell 中设置的 当前变量，父 shell 是不可见的。
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-9192bf7ec17b4e499f92f5df6c6e5d39.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-0860dd146ad242ae81690f5dd84e49f8.png)
# 第 3 章 变量 
## 3.1 系统预定义变量 
1）常用系统变量 
$HOME、$PWD、$SHELL（默认使用的编辑器）、$USER（当前的用户） 等 
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-54a428417f98455abbd5a95a1e68578f.png)
env 和 printenv
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-63999d1a908448229f58d4f3d065b6ca.png)
2）案例实操 
（1）查看系统变量的值
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-321e0a0054134ec786f0df0a8946323a.png)
（2）显示当前 Shell 中所有变量：set
以后自己定义的 局部变量 也是可以查看到的
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-0cc197a5ff4141379575ed066462fa2a.png)

## 3.2 自定义变量 
### 1）基本语法 
（1）定义变量：
变量名=变量值，注意，**=号前后不能有空格** 
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-92d0f6012da6496a93c0c86ebb6d4ea8.png)

（2）撤销变量：
unset 变量名
（3）声明静态变量：
readonly 变量，注意：不能 unset

### 2）变量定义规则 
（1）变量名称可以由字母、数字和下划线组成，但是不能以数字开头，环境变量名建 议大写。
（2）等号两侧不能有空格 
（3）在 bash 中，变量默认类型都是字符串类型，无法直接进行数值运算用 （（））或者 【】。 
（4）变量的值如果有空格，需要使用双引号或单引号括起来。 
3）案例实操
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-ce7c0bdfe09648b6bcd9ed202a0fc6e6.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-e3bd8e3914d542f0a55c7a33109943af.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-6c7d681e2a6e4e729fbbd3a7fcf2ad8c.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-61830c63eed643dab1d6b4d7e8325cfe.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-f21072f9b273417cb563327602836877.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-8e2bfcde79124ff688944a5176d87ecf.png)
环境变量的修改；
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-77ebb7a4c0c84dcf926f6acf79ad5e70.png)

## 3.3 特殊变量 
### 3.3.1 $n 
1）基本语法 
$n （功能描述：n 为数字，$0 代表该脚本名称，$1-$9 代表第一到第九个参数，十以 上的参数，十以上的参数需要用大括号包含，如${10}） 
2）案例实操
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-a6f947b58f474eeab023b3df2a3c04a9.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-eb006c907a0b48e2aec9660d44995c41.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-46b3afcbcc2441ca9ee8d3e3f82a0b98.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-2c63304d2cc14a7abc208076196bbd08.png)
### 3.3.2 $# 
1）基本语法 $# （功能描述：获取所有输入参数个数，常用于循环,判断参数的个数是否正确以及 加强脚本的健壮性）。 
2）案例实操
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-76200733d4794ddd819461d5ee662349.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-41e4439d1e854fb1a3cfc2fdcc399116.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-05a03e1b1b884483909ac16c1f7df2d4.png)

### 3.3.3 $*、$@ 
1）基本语法 
$* （功能描述：这个变量代表命令行中所有的参数，$*把所有的参数看成**一个整体**） 
$@ （功能描述：这个变量也代表命令行中所有的参数，不过$@把每个参数区分对待） 得到的是参数的集合，
2）案例实操
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-3702ab64f19b4641801d5658e9827b48.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-b8fbbd32bd30489ea901f38d980770cc.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-8caa709204da4d12af0bc5b85b7e0a03.png)

### 3.3.4 $？ 
#### 1）基本语法 
$？ （功能描述：最后一次执行的命令的**返回状态**。如果这个变量的值为 0，证明上一 个命令正确执行；如果这个变量的值为非 0（具体是哪个数，由命令自己来决定），则证明 上一个命令执行不正确了。） 
#### 2）案例实操 
判断 helloworld.sh 脚本是否正确执行
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-c8d7f01b2ac24eeaaa4aa7ade15c8bfe.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-a554c138989646babb213d9bb0373b8c.png)
# 第 4 章 运算符 
## 1）基本语法
“$((运算式))” 或 “$[运算式]” 
## 2）案例实操：
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-a9ed1c1315514ddfad90fbc0c2bb2db8.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-b766d5e7a7ce4fefb6a1fd44a364ac2d.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-05e09d7c51b144649d7df86aee5db210.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-2ddfb58dc5ea4650b2394009d3f89e9c.png)
# 第 5 章 条件判断 
## 1）基本语法 
（1）test condition 
（2）[ condition ]（注意 condition 前后要有空格） 注意：条件非空即为 true，[ atguigu ]返回 true，[ ] 返回 false。 
## 2）常用判断条件 
### （1）两个整数之间比较
-eq 等于（equal） 
-ne 不等于（not equal） 
-lt 小于（less than） 
-le 小于等于（less equal） 
-gt 大于（greater than） 
-ge 大于等于（greater equal） 
注：如果是字符串之间的比较 ，用等号“=”判断相等；用“!=”判断不等。
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-960bd2c7fb1248479f89e2a7d1eb1701.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-ab76eeff3e844c2c8af8008ef7875a76.png)

### （2）按照文件权限进行判断 
-r 有读的权限（read） 
-w 有写的权限（write） 
-x 有执行的权限（execute） 
（3）按照文件类型进行判断 
-e 文件存在（existence） 
-f 文件存在并且是一个常规的文件（file） 
-d 文件存在并且是一个目录（directory）

### 3）案例实操
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-cedb2b60a54342909e6afba3a2939148.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-51b390378e1148a09e65b7da635877c1.png)
第四个 实操会 实现高级语言的三元运算符

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-e803a7b6593b4c2cbf3a1efbd337d979.png)

# 第 6 章 流程控制（重点） 
## 6.1 if 判断 
### 1）基本语法 
（1）单分支
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-2e48b2f6628c429682e5b529d4520bfa.png)

注意事项： 
①[ 条件判断式 ]，中括号和条件判断式之间必须有空格 
②if 后要有空格
### 2）案例实操 
输入一个数字，如果是 1，则输出 banzhang zhen shuai，如果是 2，则输出 cls zhen mei， 如果是其它，什么也不输出。

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-8fbcbcd20ba849ddb184b001629fb4e5.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-8b0bf08446114089b41213e1c30c2da0.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-cd31890a7802477b873d646dccb62db8.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-2bb8cc7522fe4ff2b94cfafaf9063617.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-7ebae92c881f4d4e9b6cd76ec49ee5da.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-cd0908dc31db4ebbb28e55a9cac85606.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-8e93686e14cd42628ff65cab43a37aa4.png)
## 6.2 case 语句 
### 1）基本语法
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-db66b1c009064394b621f5c95dd07d7a.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-5f3fcc720dc745cd854cf7e883b3a991.png)
注意事项： 
（1）case 行尾必须为单词“in”，每一个模式匹配必须以右括号“）”结束。 
（2）双分号“;;”表示命令序列结束，相当于 java 中的 break。 
（3）最后的“*）”表示默认模式，相当于 java 中的 default。

### 6.3 for 循环 
#### 1）基本语法 1
```java
for (( 初始值;循环控制条件;变量变化 )) 
do 
     程序 
done

```
在 双小括号中 可以写 之前的数学表达式 的形式；
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-edd7bbbe86f244c3a2255dc9f4a488c2.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-795d2a0e4fd44a5b87ead6917f879166.png)

#### 3）基本语法 2
```java
for 变量 in 值 1 值 2 值 3… 
do 
      程序 
done

```
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-de4b3d93df3c4c43997e9949a1d89d30.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-861dda1306da4d458056b189eb700d09.png)


#### （2）比较$*和$@区别 
$*和$@都表示传递给函数或脚本的所有参数，不被双引号“”包含时，都以$1 $2 …$n 的形式输出所有参数

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-db3a519a06ff44bb9ec4085fa0c81d32.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-03ef06640b8746508efd33eae952c42d.png)


在不加引号的 是两个是没有 区别的
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-ab6dc0f49e214a42bc5398840d4a6404.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-da3d827c6ecc44829f64b924a477d16d.png)
当它们被双引号“”包含时，
$*会将所有的参数作为一个整体，以“$1 $2 …$n”的形式输 出所有参数；
$@会将各个参数分开，以“$1” “$2”…“$n”的形式输出所有参数。

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-01abc7a4f8ed49aba10b02bea87f5842.png)


## 6.4 while 循环 
### 1）基本语法 
while [ 条件判断式 ] do 程序 done 
### 2）案例实操 
从 1 加到 100
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-f4c222c761e04da0950f7d058f25005e.png)
踩坑经验：
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-688cdf88836747bca9f845c8e952c627.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-4df7f6c7e5654c13a9bfc38173b96e92.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-9bed82bd8bc64cc5a0411f1827ea5e57.png)


# 第 7 章 read 读取控制台输入 
## 1）基本语法 read (选项) (参数) 
①选项：
-p：指定读取值时的提示符； 
-t：指定读取值时等待的时间（秒）如果-t 不加表示一直等待 
②参数变量：指定读取值的变量名  （在执行的时候 后面的参数是 $1 和 $2等）
## 2）案例实操 
提示 7 秒内，读取控制台输入的名称
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-4369e7e6fabd4cbf8adfd859bccb6a94.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-4bd664611aba485ab38a80f124a43880.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-99f0034558a64d9da8f68dd515316ddd.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-fac9d682da9d4f858890da18125f739d.png)

# 第 8 章 函数 
- 问： 脚本和函数的区别？
- 答 
虽然 功能是大差不差的，都差不多，
但是，脚本是没有返回值的（），但是函数就有返回值的；
函数比较轻量集，使用也比较方便
## 8.1 系统函数 
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-f6752e9542a7426086529cf540fb0e0f.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-a17e13b6a57f447cb0a0dbae46e54305.png)
### 8.1.1 basename （得到文件名）
#### 1）基本语法
basename [string / pathname] [suffix]
（功能描述：basename 命令会删掉所有的前 缀包括最后一个（‘/’）字符，然后将字符串显示出来。 basename 可以理解为取路径里的文件名称 
选项： 
suffix 为后缀，如果 suffix 被指定了，basename 会将 pathname 或 string 中的 suffix 去掉。 
#### 2）案例实操 
截取该/home/atguigu/banzhang.txt 路径的文件名称
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-0e2fec75f0564ec2a015f51a1b01f4fc.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-d4e724db779e44d0919b43fa034bd7cf.png)

### 8.1.2 dirname (得到文件的路径)
1）基本语法 
dirname 文件绝对路径  
（功能描述：从给定的包含绝对路径的文件名中去除文件名 （非目录的部分），然后返回剩下的路径（目录的部分）） dirname 可以理解为取文件路径的绝对路径名称 
2）案例实操 获取 banzhang.txt 文件的路径。
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-9099a109a48248d3b23c148be9cfa458.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-fc2dbd863f1c4b92ab4facee7155be23.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-0d20d1a42bdd420295c41ef9f9b32835.png)

### 8.2 自定义函数 
#### 1）基本语法 
[ function ] funname[()] 
{ 
   Action; 
  [return int;] 
}
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-bbe23dd8057c4511986bd165986dcc4d.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-524a2c7ed9ec401b97e65e51fde94b0b.png)

#### 2）经验技巧 
（1）必须在调用函数地方之前，先声明函数，shell 脚本是逐行运行。不会像其它语言一 样先编译。 
（2）函数返回值，只能通过$?系统变量获得，可以显示加：return 返回，如果不加，将 以最后一条命令运行结果，作为返回值。return 后跟数值 n(0-255)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-f650010e0d4a40bf86dbd0656a3412a5.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-62699d8c0e3f4a9d9e9de43bd932ba14.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-34b305c338f5435fb16a794e1248746e.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-236f1d9495274f47af5d79d426958242.png)

#### 3）案例实操 
计算两个输入参数的和。
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-7c7d27adffe44bdaa725d08ee692f0c6.png)

# 第 9 章 正则表达式入门 

正则表达式使用单个字符串来描述、匹配一系列符合某个语法规则的字符串。在很多文 本编辑器里，正则表达式通常被用来检索、替换那些符合某个模式的文本。在 Linux 中，grep， sed，awk 等文本处理工具都支持通过正则表达式进行模式匹配。 
## 9.1 常规匹配 一串不包含特殊字符的正则表达式匹配它自己，例如：
```java
 [atguigu@hadoop101 shells]$ cat /etc/passwd | grep atguigu 

```

就会匹配所有包含 atguigu 的行。
## 9.2 常用特殊字符 
### 1）特殊字符：^ 
^ 匹配一行的开头，例如：
```java
[atguigu@hadoop101 shells]$ cat /etc/passwd | grep ^a 

```

会匹配出所有以 a 开头的行

### 2）特殊字符：$ 
$ 匹配一行的结束，例如 
```java
[atguigu@hadoop101 shells]$ cat /etc/passwd | grep t$ 

```

会匹配出所有以 t 结尾的行 思考：^$ 匹配什么？


### 3）特殊字符：. 
. 匹配一个任意的字符，例如 
```java
[atguigu@hadoop101 shells]$ cat /etc/passwd | grep r..t 

```

会匹配包含 rabt,rbbt,rxdt,root 等的所有行

### 4）特殊字符：* 
* 不单独使用，他和上一个字符连用，表示匹配上一个字符 0 次或多次，
例如 
```java
[atguigu@hadoop101 shells]$ cat /etc/passwd | grep ro*t 

```

会匹配 rt, rot, root, rooot, roooot 等所有行 
思考：.* 匹配什么？
点是 任意字符 ，* 是出现n次

### 5）字符区间（中括号）：[ ] 
[ ] 表示匹配某个范围内的一个字符，
例如 
[6,8]------匹配 6 或者 8 
[0-9]------匹配一个 0-9 的数字 
[0-9]*------匹配任意长度的数字字符串 
[a-z]------匹配一个 a-z 之间的字符 
[a-z]* ------匹配任意长度的字母字符串 
[a-c, e-f]-匹配 a-c 或者 e-f 之间的任意字符 
[atguigu@hadoop101 shells]$ cat /etc/passwd | grep r[a,b,c]*t 
会匹配 rt,rat, rbt, rabt, rbact,rabccbaaacbt 等等所有行

### 6）特殊字符：\ 
\ 表示转义，并不会单独使用。由于所有特殊字符都有其特定匹配模式，当我们想匹配 某一特殊字符本身时（例如，我想找出所有包含 '$' 的行），就会碰到困难。此时我们就要 将转义字符和特殊字符连用，来表示特殊字符本身，
例如 
```java
[atguigu@hadoop101 shells]$ cat /etc/passwd | grep ‘a\$b’ 

```
就会匹配所有包含 a$b 的行。注意需要使用单引号将表达式引起来。
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-522eced4d93640fab13fd7107bd4e445.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-7e85143ccfc14ce4986eae9900b2b3ca.png)

# 第 10 章 文本处理工具 
## 10.1 cut 
cut 的工作就是“剪”，具体的说就是在文件中负责剪切数据用的。cut 命令从文件的每 一行剪切字节、字符和字段并将这些字节、字符和字段输出。 
1）基本用法 
cut [选项参数] filename 说明：默认分隔符是制表符 
2）选项参数说明
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-94453f5d7e834b4280fe165f50f67a25.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-f6e343b1393e4530b84809838b0de5bc.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-ba1610f3ddf84264b7356425e9e41545.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-8d45e6afd7ec46a6bb547b736838b843.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-ff2c4a437bd146ea9b131579cacd33ec.png)
## 10.2 awk 
一个强大的文本分析工具，把文件逐行的读入，以空格为默认分隔符将每行切片，切开 的部分再进行分析处理。 
1）基本用法
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-6bad3d7a5a9a4c569156c6333349f852.png)
2）选项参数说明
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-b707b7d781f44e4a87f439e39c50fe41.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-9110b36b6b00459a91235f9e3735873b.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-d00007fc162741c3923c6fe657ffbf55.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-38322c96135445cdad30b9a1facec165.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-a0240a09ae1c419ea23296b56d541513.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-33b3c4efd5af4f51ac4d9e78f248e826.png)

# 第 11 章 综合应用案例 
## 11.1 归档文件 
实际生产应用中，往往需要对重要数据进行归档备份。 
需求：实现一个每天对指定目录归档备份的脚本，输入一个目录名称（末尾不带/）， 将目录下所有文件按天归档保存，并将归档日期附加在归档文件名上，放在/root/archive 下。 这里用到了归档命令：tar
 后面可以加上-c 选项表示归档，加上-z 选项表示同时进行压缩，得到的文件后缀名 为.tar.gz。 脚本实现如下：
```java
#!/bin/bash 
# 首先判断输入参数个数是否为 1
```
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-eee51a1927e24602836fae1242a98076.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-99410251137f4d838ecce38f560d6fb1.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-ba36d4911cc64e2f96115c956010d11d.png)

## 11.2 发送消息 
   我们可以利用 Linux 自带的 mesg 和 write 工具，向其它用户发送消息。 

需求：
实现一个向某个用户快速发送消息的脚本，输入用户名作为第一个参数，后面直 接跟要发送的消息。脚本需要检测用户是否登录在系统中、是否打开消息功能，以及当前发 送消息是否为空。
脚本实现如下：
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-1c4812a62d5c44fe9886d84bf281c3e8.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-adf57b8500f04ad58eccd0e3e039f3ca.png)



![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-c3fc7931199f4e10ae9ff8ac08510207.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-a103a35561f44e8f8bc50b2d9ac5b332.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-9c8eff2012924b7dbed2fa0adfb36859.png)

发现直接使用 上面的 就可以 发送消息 ： 
缺点： 还需要我们去 查看是否开启，消息机制，然后 在发送请求

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-db58f8c9e55d421fa27f629f019e1ae3.png)
![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-90ba4abbe58e4b2ca3ad84b3e5b847e6.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-177e672791fb419486eee34f280d9796.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-61ddaf484b014963bd25b4c302096acc.png)

![image.png](https://cdn.jsdelivr.net/gh/Control-body/tuChuang/2022/04/image-6875e07226364fbbaa123ec45bbcedf9.png)