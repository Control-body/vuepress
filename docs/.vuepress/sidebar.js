// 多模块的管控

module.exports = {
    '/guide/': require('../guide/sidebar'),  //第一个模块的侧边栏
    '/10.语言/00.java/': require('../10.语言/00.java/sidebar'),  // 第二个的侧边栏
    '/10.语言/10.C/': require('../10.语言/10.C/sidebar'), // 第二个的侧边栏
}

