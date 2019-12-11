// module.exports = [{
//         path: 'pages/tabBar/home/index', // 页面路径，同时是 vue 文件相对于 src 的路径
//         name: 'index'
//     },
//     {
//         path: 'pages/tabBar/logs/index'
//     }
// ]

const requireContext = require('../utils/require-context')
const path = require('path')
let routes = [
    {
        path: 'pages/tabBar/home/index', // 页面路径，同时是 vue 文件相对于 src 的路径
        config: {
            navigationBarBackgroundColor: "#fff",
            navigationBarTitleText: '首页',
            enablePullDownRefresh: false,
            usingComponents: {
                
            }
        }
    },
    {
        path: 'pages/tabBar/logs/index',
        config: {
            navigationBarBackgroundColor: "#fff",
            navigationBarTitleText: '我的',
            enablePullDownRefresh: false,
            usingComponents: {
                
            }
        }
    }
]


const routerContext = requireContext(path.join(__dirname, './'), true, /\.js$/)
// console.log(routerContext.keys())
routerContext.keys().forEach(route => {
    // 如果是根目录的index.js 不处理
    // console.log(route)
    // console.log(route.startsWith('index'))
    if (route.startsWith('index')) {
        return
    }

    const routerModule = routerContext(route)
    // console.log('routerModule')
    // console.log(routerModule)
    /****
     * 兼容 import export 和 require module.export 两种规范
     */
    routes = routes.concat(routerModule.default || routerModule)
    
});

module.exports = routes