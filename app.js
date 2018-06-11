const AV = require('/utils/av-weapp-min.js');
// const AV = require('/utils/av-weapp.js');
AV.init( {
    appId: "XN5AuM7LzEyz3nDhrlgQfjnO-gzGzoHsz",
    appKey: "qy2UcLBEOEb9rjmqeJ5lTozz",
});
var app = getApp()
App({
  onLaunch: function () {
    AV.Promise.resolve(AV.User.current()).then(user =>
      user ? (user.isAuthenticated().then(authed => authed ? user : null)) : null).then(user =>
        user ? user : AV.User.loginWithWeapp()
      ).then(user => {
        console.log(user)
        // 调用小程序 API，得到用户信息
        wx.getUserInfo({
          success: ({userInfo}) => {
            // 更新当前用户的信息
            user.set(userInfo).save().then(user => {
              // 成功，此时可在控制台中看到更新后的用户信息
              this.globalData.user = user
              console.log(this.globalData.user)
            }).catch(console.error);
          },
          fail: function (res) {
            console.log(res)
          }
        })
      }).catch(error => console.error(error))
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    param:null,
    param1:null,
    shouye:null,
    param2:null,
    param3:null,
    param4:null,
    param5:null,
    param6:null,
    param7:null,
    user:null,
    userInfo:null,
    param8:null,
    param9:null,
    param10:null,
    param11:null,
    param12:null,
  }
})

