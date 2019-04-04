import fly from 'flyio/dist/npm/wx'
import baseUrlApi from './baseUrl'


const flyio = new fly();

// http 请求拦截器
flyio.interceptors.request.use((req) => {
    wx.showNavigationBarLoading()
    req.baseURL = baseUrlApi;

    req.headers = { 'sessionId': 'o306K5fqSt-mkcp7Ue3MkTZVlH1c' }
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