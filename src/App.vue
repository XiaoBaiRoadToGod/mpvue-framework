<script>
import { mapActions } from 'vuex'
export default {
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // eslint-disable-next-line
    console.log('app created and cache logs by setStorageSync')
  },
  onShow (option) {
    console.log('小程序启动')
    console.log(option)
    this.getByCode()
    this.checkUpdate()
    this.getCityLists()
  },
  methods: {
    ...mapActions({
      getUserWecharId: 'user/getUserWecharId',
      getUserInfo: 'user/getUserInfo',
      getCityLists: 'user/getCityLists'
    }),
    checkUpdate () {
      let updateManager = wx.getUpdateManager()
      console.log(updateManager)
      updateManager.onCheckForUpdate(function (res) {
      // 请求完新版本信息的回调
        console.log(res.hasUpdate)
      })

      updateManager.onUpdateReady(function () {
        wx.showModal({
          title: '更新提示',
          content: '新版本已经准备好，是否重启？',
          success: function (res) {
            if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
              updateManager.applyUpdate()
            }
          }
        })
      })
    },
    getByCode () {
      let _this = this
      wx.login({
        success: (code) => {
          if (code.code) {
            let par = {
              code: code.code
            }
            _this.getUserWecharId(par).then(res => {
              console.log('userByCode')
              _this.getUserInfo({ id: res.data.id })
            })
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" >
@import "../static/vant/common/index.wxss";
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
