const AV = require( '../../utils/av-weapp-min.js' );
AV.init( {
    appId: "XN5AuM7LzEyz3nDhrlgQfjnO-gzGzoHsz",
    appKey: "qy2UcLBEOEb9rjmqeJ5lTozz",
});
var app = getApp()
Page({
  data:{
    title2:[]
  },
   
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    new AV.Query('title2')
      .descending('updtedAt')
      .find()
      .then(title2 => this.setData({ title2 }))
      .catch(console.error);
  },
  dianji: function (e) {
    var object1 = e.currentTarget.dataset.item
    console.log(e.currentTarget)
    app.globalData.param1=object1
     wx.navigateTo({
       url: '../by1/by1',      
     })
    }
})