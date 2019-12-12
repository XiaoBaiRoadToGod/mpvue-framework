import fly from './fly'

const api = {
  /**
     * 登录
     */
  // 获取用户微信信息
  getCity: () => fly.get('/bespeakApi/region/regionCityList')

}
export default api
