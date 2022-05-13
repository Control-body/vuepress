function init(){
    console.log("终于可以为所欲为了");
}
//因为界面加载原因，我们延迟500ms再调用init  在head中 可能在页面还没有 加载完成 就去请求数据 了 所以延迟下
setTimeout("init()",500)
