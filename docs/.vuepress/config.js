module.exports = {
    title: '知码学院',
    description: '君哥带你上王者',
    dest: './dist',   //在build 的时候 会默认的创建文件  在.vuepress
    port: '7777',
    head: [
        ['link', {rel: 'icon', href: '/img/favicon.png'}],//加图标
        ['link', {rel: 'stylesheet', href: '/css/style.css'}], //    / 就是表示静态文件的 意思
        ['script', {charset: 'utf-8', src: '/js/main.js'}],
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        // nav: [{                    // 下拉文档 抽成文档了
        //     text: '懵逼指南', link: '/guide/'
        // }],
        nav: require("./nav.js"), // 在文件下去找
        // sidebar: {'/guide/':[      // 侧边栏
        //         {
        //             title:'新手指南',
        //             collapsable: true,
        //             children:[
        //                 '/guide/notes/one',
        //             ]
        //         },
        //         {
        //             title:'知码学院',
        //             collapsable: true,
        //             children:[
        //                 '/guide/notes/two',
        //             ]
        //         }
        //     ]
        // },
        sidebar: require("./sidebar.js"),
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！'
    }
}