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
        text: '语言', link: '/10.语言/',
        items: [
            {text: 'java', link: '/10.语言/00.java/' },
            {text: 'C', link: '/10.语言/10.c/'},
        ]
    },
    // 下拉框 分类
    {
        text: '算法', link: '/baodian/',
        items: [
            { text: 'Group1', items: [
                    { text: 'Group11',link: '/baodian/zero/'},
                    { text: 'Group22',link: '/baodian/high/'}
                ] },
            { text: 'Group2', items: [
                    { text: 'Group11' , link: '/baodian/zero/'},
                    { text: 'Group22' ,link: '/baodian/high/'}
                ] }
        ]
    },
    {
        text: '数据库', link: '/baodian/',
        items: [
            {text: '初级开发篇', link: '/baodian/zero/'},
            {text: '中高进阶篇', link: '/baodian/high/'},
        ]
    },
    {
        text: '框架|中间件', link: '/baodian/',
        items: [
            {text: '初级开发篇', link: '/baodian/zero/'},
            {text: '中高进阶篇', link: '/baodian/high/'},
        ]
    },
    {
        text: '项目', link: '/baodian/',
        items: [
            {text: '初级开发篇', link: '/baodian/zero/'},
            {text: '中高进阶篇', link: '/baodian/high/'},
        ]
    },
    {
        text: '开发', link: '/baodian/',
        items: [
            {text: '初级开发篇', link: '/baodian/zero/'},
            {text: '中高进阶篇', link: '/baodian/high/'},
        ]
    },
    {
        text: '方法论', link: '/baodian/',
        items: [
            {text: '初级开发篇', link: '/baodian/zero/'},
            {text: '中高进阶篇', link: '/baodian/high/'},
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