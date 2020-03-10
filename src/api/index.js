import fly from './fly'

// 获取用户微信信息
export function getUserWecharId (p) {
  return fly.get('/bespeakApi/user/registerByCode', p)
}
// set用户敏感信息
export function setUserUnionid (p) {
  return fly.post('/bespeakApi/user/setUnionid', p, { qs: true })
}
// 获取用户信息
export function getBySession (p) {
  return fly.get('/bespeakApi/user/getBySession', p)
}
// 获取所有城市
export function getCityLists (p) {
  return fly.get('/bespeakApi/region/regionCityList', p)
}
