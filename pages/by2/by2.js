const AV = require('../../utils/av-weapp-min.js');
Page({
  data: {
    title3: {},
  },
  onReady: function() {
    console.log(getApp().globalData.param2)
    this.setData({
      title3:getApp().globalData.param2
    })
  },
  onLaunch: function () {
      this.setData({
        images:" "
      })
      
  },
});
