import fly from 'flyio/dist/npm/wx'
import baseUrlApi from './baseUrl'


const flyio = new fly();

// http 请求拦截器
flyio.interceptors.request.use((req) => {
    wx.showNavigationBarLoading()
    req.baseURL = baseUrlApi;

    // 获取存储的 sessinId
    let sessionid = wx.getStorageSync('sessionId')

    if (req.method === 'POST') {
        if (req.url === '/bespeakApi/user/login') { // 登录不需要sessionId
            req.headers = { "Content-Type": "application/x-www-form-urlencoded" }
            return req
        }
        // req.url == '/monitorApi/baby/jaundice/value' ||
        if (req.url === '/bespeakApi/userCoupon/addBatch' || req.url === '/monitorApi/monito/babyPuerpera/addPuerpera' || req.url === '/monitorApi/monito/babyPuerpera/addBaby' || req.url === '/monitorApi/emotion/survey/emotiontest' || req.url === '/monitorApi/feedRecord/add' || req.url == '/monitorApi/baby/measureRecord/add' || req.url == '/monitorApi/baby/jaundice/add' || req.url == '/monitorApi/baby/measureRecord/editApp' || req.url == '/monitorApi/monito/babyPuerpera/updatePuerperaByApp') {
            // 智能监护，修改请求头
            // request.headers["Content-Type"] = "application/json;charset=utf-8" 
            req.headers = { 'sessionId': sessionid, "Content-Type": "application/json" }
            console.log(req)
            return req
        }
        req.headers = { 'sessionId': sessionid, "Content-Type": "application/x-www-form-urlencoded" }
    }


    if (req.method === 'GET') {
        if (req.url === '/bespeakApi/user/verification/get') {
            return req
        }
        if (req.url === '/monitorApi/blueData/collect/lists') {
            req.baseURL = 'https://p.yuezidao.cn'
        }
        req.headers = { 'sessionId': sessionid }
    }
    console.log(req)
    return req
})

flyio.interceptors.response.use(
    (response, promise) => {
        console.log('response')
        wx.hideNavigationBarLoading()
        return promise.resolve(response.data)
    },
    (err, promise) => {
        wx.hideNavigationBarLoading()
        console.log(err.message)
            // wx.showToast({
            //   title: err.message,
            //   icon: 'none'
            // })
        return promise.resolve()
    }
)

export default flyio