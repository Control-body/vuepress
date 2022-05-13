// 多模块的管控

module.exports = {
    '/guide/': require('../guide/sidebar'),  //第一个模块的侧边栏

    '/baodian/zero': require('../baodian/zero/sidebar'),  // 第二个的侧边栏
    '/baodian/high': require('../baodian/high/sidebar'), // 第二个的侧边栏
}

