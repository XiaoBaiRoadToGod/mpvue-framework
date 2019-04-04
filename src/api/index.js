import fly from './fly'

// const baseUrlApi = 'http://192.168.1.123:8888'
// const baseUrlApi = process.env.NODE_ENV === 'development' ? 'http://192.168.1.123:8888' : '103.22.43.12:8000';
// console.log(baseUrlApi)
const api = {
    /**
     * 登录
     */
    // 获取用户微信信息
    getCity: () => fly.get('/bespeakApi/region/regionCityList'),

}
export default api