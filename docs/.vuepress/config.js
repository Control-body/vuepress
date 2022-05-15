module.exports = {
    title: 'Control.',
    description: '去发光,而不是被照亮',
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
        nav: require("./nav.js"), // 在文件下去找 // 侧边栏
        sidebar: require("./sidebar.js"),
        displayAllHeaders: false, // 显示页面中所有文章的 目录 默认false
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
        editLinkText: '在 GitHub 上编辑此页 ！',
        lastUpdated: 'Last Updated', // string | boolean 最后一次提交的时间
        // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
        nextLinks: true,
        // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
        prevLinks: true,
        smoothScroll: true,
    },
    plugins: {
        '@vuepress/active-header-links':{
            sidebarLinkSelector: '.sidebar-link',
            headerAnchorSelector: '.header-anchor'
        },
    }
}