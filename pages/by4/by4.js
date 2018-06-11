const AV = require('../../utils/av-weapp-min.js');
Page({
  data:{
    title6:{}
  },
  onLoad:function(options){
  },
  onReady:function(){
     console.log(getApp().globalData.param4)
    this.setData({
      title6:getApp().globalData.param4
    })
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
}) 