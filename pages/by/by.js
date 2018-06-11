const AV = require('../../utils/av-weapp-min.js');
Page({
  data: {
    title: {},
  },
  onReady: function() {
    console.log(getApp().globalData.param)
    this.setData({
      title:getApp().globalData.param
    })
  },
  onLaunch: function () {
      this.setData({
        images:" "
      })
      
  },
});
