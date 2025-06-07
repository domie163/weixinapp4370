const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootr275i/",
            name: "springbootr275i",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootr275i/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于微信小程序的仓储管理系统"
        } 
    }
}
export default base
