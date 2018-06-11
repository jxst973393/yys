// pages/by1/by1.js
Page({
  data:{
    title2:{}
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
     console.log(getApp().globalData.param1)
    this.setData({
      title2:getApp().globalData.param1
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