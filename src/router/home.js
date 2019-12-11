module.exports =  [
    {
        path: 'home/index',
        subPackage: true,
        config: {
            navigationBarBackgroundColor: "#fff",
            navigationBarTitleText: '二级分包页面',
            enablePullDownRefresh: false,
            usingComponents: {
                'van-button': '/static/vant/button/index'
            }
        }
    }
]