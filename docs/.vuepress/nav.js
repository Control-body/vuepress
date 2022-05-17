/**
 * 把最上面的 下拉框抽一个 js文件来
 * link 两种 :
 * 一个是   link: '/baodian/zero/ 自己的
 * 一个是   link: 'https://tinypng.com/'  外连接
 */

module.exports = [
    {
        text: '首页', link: '/',
    },
    {
        text: '语言',
        items: [
            { text: 'java',items: [
                    { text: '面向对象基础',link: '/baodian/zero/'},
                    { text: 'java进阶-集合框架',link: '/baodian/high/'},
                    { text: 'java进阶-并发框架',link: '/baodian/high/'},
                    { text: 'java进阶-IO框架',link: '/baodian/high/'},
                    { text: 'java进阶-新版本特性',link: '/baodian/high/'},
                    { text: 'java进阶-JVM相关',link: '/baodian/high/'},
                ]},
            {text: 'C语言',items: [
                    { text: 'C语言基础',link: '/10.语言/10.C/'},
                ]},
        ]
    },
    // 下拉框 分类
    {
        text: '算法',
        items: [
            { text: '算法基础', items: [
                    { text: '算法基础',link: '/30.算法/01.算法基础/'},
                    { text: '算法思想',link: ''}
                ] },
            { text: '其他算法', items: [
                    { text: '头脑风暴' , link: '/baodian/zero/'},
                ] }
        ]
    },
    {
        text: '数据库',
        items: [
            { text: '数据库基础和原理', items: [
                    { text: '数据库基础',link: '/baodian/zero/'},
                    { text: 'SQL语言',link: '/baodian/high/'}
                ] },
            { text: 'SQL数据库', items: [
                    { text: 'Mysql详解',link: '/baodian/zero/'},
                ] },
            { text: 'NoSQL数据库', items: [
                    { text: 'Redis详解',link: '/baodian/zero/'},
                    { text: 'MongoDB详解',link: '/baodian/high/'}
                ] },
        ]
    },
    {
        text: '框架|中间件', link: '/20.框架/',
        items: [
            { text: 'WEB容器', items: [
                    {text: 'Spring', link: '/20.框架/01.Spring/'},
                    {text: 'SpringMVC', link: '/20.框架/02.SpringMVC/'},
                    {text: 'SpringBoot', link: '/20.框架/04.SpringBoot/'},
                ] },
            { text: 'ORM框架', items: [
                    {text: 'Mybatis', link: '/20.框架/03.Mybatis/'},
                    {text: 'MybatisPlus', link: '/20.框架/04.MybatisPlus/'},
                ] },
            { text: '前端', items: [
                    {text: 'VUE', link: '/20.框架/05.VUE/'},
                ] },
        ]
    },
    {
        text: '408', link: '/50.408/',
        items: [
            { text: '计算机组成原理', items: [
                    {text: '计算机组成原理基础', link: '/50.408/10.机组/'},
                ] },
            { text: '计算机网络', items: [
                    {text: '计算机网络基础', link: '/50.408/00.网络/'},
                    {text: '慕课29讲', link: '/50.408/01.慕课29讲/'},
                ] },
            { text: '操作系统', items: [
                    {text: 'Mybatis', link: '/20.框架/03.Mybatis/'},
                ] },
            { text: '数据结构', items: [
                    {text: 'Mybatis', link: '/20.框架/03.Mybatis/'},
                ] },
        ]
    },
    {
        text: '项目',
        items: [
            { text: '入门 - 青铜阶段', items: [
                    {text: '单体项目', link: '/80.项目/01.单体项目/'},
                    {text: '微服务项目', link: '/80.项目/02.微服务项目/'},
                ] },
            { text: '进阶 - 白银阶段', items: [
                    {text: 'Mybatis', link: '/20.框架/03.Mybatis/'},
                ] },
            { text: '进阶 - 黄金阶段', items: [
                    {text: 'Mybatis', link: '/20.框架/03.Mybatis/'},
                ] },
            { text: '进阶 - 铂金阶段', items: [
                    {text: 'Mybatis', link: '/20.框架/03.Mybatis/'},
                ] },
            { text: '进阶 - 钻石阶段', items: [
                    {text: 'Mybatis', link: '/20.框架/03.Mybatis/'},
                ] },
            { text: '进阶 - 星耀阶段', items: [
                    {text: 'Mybatis', link: '/20.框架/03.Mybatis/'},
                ] },
            { text: '进阶 - 王者阶段', items: [
                    {text: 'Mybatis', link: '/20.框架/03.Mybatis/'},
                ] },
        ]
    },
    {
        text: '开发', link: '/baodian/',
        items: [
            {text: '开发BUG', link: '/70.开发/01.开发BUG/'},
            {text: '中高进阶篇', link: '/baodian/high/'},
        ]
    },
    {
        text: '方法论', link: '/baodian/',
        items: [
            { text: '设计模式', items: [
                    {text: '设计模式基础', link: '/60.方法论/01.设计模式/'},
                ] },
            { text: '理论|流程|协议', items: [
                    {text: 'Mybatis', link: '/20.框架/03.Mybatis/'},
                ] },
        ]
    },
    {
        text: '工具|部署', link: '/90.工具部署/',
        items: [
            {text: 'Linux', link: '/90.工具部署/01.Linux/'},
            {text: 'Nginx', link: '/90.工具部署/02.Nginx/'},
            {text: 'Maven', link: '/90.工具部署/03.Maven/'},
            {text: '部署', link: '/90.工具部署/04.部署/'},
            {text: '工具', link: '/90.工具部署/05.工具/'},
        ]
    },
    {
        text: '工具箱',
        items: [
            {
                text: '在线编辑',
                items: [
                    {text: '图片压缩', link: 'https://tinypng.com/'}
                ]
            },
            {
                text: '在线服务',
                items: [
                    {text: '阿里云', link: 'https://www.aliyun.com/'},
                    {text: '腾讯云', link: 'https://cloud.tencent.com/'}
                ]
            },
            {
                text: '博客指南',
                items: [
                    {text: '掘金', link: 'https://juejin.im/'},
                    {text: 'CSDN', link: 'https://blog.csdn.net/'}
                ]
            }
        ]
    }
]