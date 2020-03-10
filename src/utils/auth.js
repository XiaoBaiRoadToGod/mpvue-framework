export function setSessionId (data) {
  return wx.setStorageSync('sessionId', data)
}

export function getSessionId () {
  return wx.getStorageSync('sessionId')
}
export function setSessionKey (data) {
  return wx.setStorageSync('sessionKey', data)
}

export function getSessionKey () {
  return wx.getStorageSync('sessionKey')
}
