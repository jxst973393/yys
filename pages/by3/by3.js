const AV = require('../../utils/av-weapp-min.js');
Page({
  data: {
    title5: {},
  },
  onReady: function() {
    console.log(getApp().globalData.param3)
    this.setData({
      title5:getApp().globalData.param3
    })
  },
  onLaunch: function () {
      this.setData({
        images:" "
      })
      
  },
});
