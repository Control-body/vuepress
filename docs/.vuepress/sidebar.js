// 多模块的管控

module.exports = {
    '/guide/': require('../guide/sidebar'),  //第一个模块的侧边栏
    '/10.语言/00.java/': require('../10.语言/00.java/sidebar'),  // 第二个的侧边栏
    '/10.语言/10.C/': require('../10.语言/10.C/sidebar'), // 第二个的侧边栏
    //框架|中间件
    '/20.框架/01.Spring/':require('../20.框架/01.Spring/sidebar'),
    '/20.框架/02.SpringMVC/':require('../20.框架/02.SpringMVC/sidebar'),
    '/20.框架/03.Mybatis/':require('../20.框架/03.Mybatis/sidebar'),
    '/20.框架/04.SpringBoot/':require('../20.框架/04.SpringBoot/sidebar'),
    '/20.框架/04.MybatisPlus/':require('../20.框架/04.MybatisPlus/sidebar'),
    '/20.框架/05.VUE/':require('../20.框架/05.VUE/sidebar'),
    //408
    '/50.408/00.网络/':require('../50.408/00.网络/sidebar'),
    '/50.408/01.慕课29讲/':require('../50.408/01.慕课29讲/sidebar'),
    '/50.408/10.机组/':require('../50.408/10.机组//sidebar'),
    //工具|部署
    '/90.工具部署/01.Linux/':require('../90.工具部署/01.Linux/sidebar'),
    '/90.工具部署/02.Nginx/':require('../90.工具部署/02.Nginx/sidebar'),
    '/90.工具部署/03.Maven/':require('../90.工具部署/03.Maven/sidebar'),
    '/90.工具部署/04.部署/':require('../90.工具部署/04.部署/sidebar'),
    '/90.工具部署/05.工具/':require('../90.工具部署/05.工具/sidebar'),
    //项目
    '/80.项目/01.单体项目/':require('../80.项目/01.单体项目/sidebar'),
    '/80.项目/02.微服务项目/':require('../80.项目/02.微服务项目/sidebar'),

    //设计模式方法论
    '/60.方法论/01.设计模式/':require('../60.方法论/01.设计模式/sidebar'),

    // 语言
    '/10.语言/10.C/':require('../10.语言/10.C/sidebar'),

    //算法
    '/30.算法/01.算法基础/':require('../30.算法/01.算法基础/sidebar'),
    //开发
    '/70.开发/01.开发BUG/':require('../70.开发/01.开发BUG/sidebar'),
}

