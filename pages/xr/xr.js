const AV = require( '../../utils/av-weapp-min.js' );
AV.init( {
    appId: "XN5AuM7LzEyz3nDhrlgQfjnO-gzGzoHsz",
    appKey: "qy2UcLBEOEb9rjmqeJ5lTozz",
});
var app = getApp()
Page({
  data:{
    title6:[],
    indicatordost: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    circular:true,
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    new AV.Query('title6')
      .descending('updtedAt')
      .find()
      .then(title6 => this.setData({ title6 }))
      .catch(console.error);
  },
  dianji:function(e){
    var object3 = e.currentTarget.dataset.item
    console.log(e.currentTarget)
    app.globalData.param4 = object3
    wx.navigateTo({
      url: '../by4/by4',
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
