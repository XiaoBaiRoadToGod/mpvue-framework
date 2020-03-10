import Fly from 'flyio/dist/npm/wx'
import baseUrlApi from './baseUrl'
import { getSessionId } from '@/utils/auth'

const flyio = new Fly()

// http 请求拦截器
flyio.interceptors.request.use((cig) => {
  wx.showNavigationBarLoading()
  cig.baseURL = baseUrlApi
  let sessionId = getSessionId('sessionId')
  cig.baseURL = baseUrlApi
  cig.headers = { 'sessionId': sessionId }
  if (cig.method === 'POST' && cig.qs) {
    cig.headers = { 'sessionId': sessionId, 'Content-Type': 'application/x-www-form-urlencoded' }
  }
  // cig.headers = { 'sessionId': 'o306K5fqSt-mkcp7Ue3MkTZVlH1c' }
  //   console.log(cig)
  return cig
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
