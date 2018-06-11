const AV = require('../../utils/av-weapp-min.js');
AV.init( {
    appId: "XN5AuM7LzEyz3nDhrlgQfjnO-gzGzoHsz",
    appKey: "qy2UcLBEOEb9rjmqeJ5lTozz",
});
var app = getApp()
Page({
  data:{_File:[],
  gl2:[],
  userInfo:{},
  showView: false,
  content:'点赞',
  g3:[],
  },
  dianji:function(e){
  wx.navigateTo({
    url: '../by5/by5',
  })
  },
    onPullDownRefresh:function(){
     wx.showLoading({
       title:"欧气，欧气",
     })
     setTimeout(function(){
       wx.hideLoading()
     },1000)
     new AV.Query('gl2')
       .descending('createdAt')
       .include('User')
       .find()
       .then(gl2 => this.setData({ gl2 }))
       .catch(console.error);
     new AV.Query('g3')
       .descending('createdAt')
       .include('User')
       .include('tiezi')
       .find()
       .then(g3 => this.setData({ g3 }))
       .catch(console.error);
       wx.vibrateShort({
         onPullDownRefresh:1
       })
      wx.stopPullDownRefresh()
   },
   onLoad:function(options){
     this.setData({
       gl2: getApp().globalData.param12
     });
  console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
    new AV.Query('g3')
      .descending('createdAt')
      .include('User')
      .include('tiezi')
      .find()
      .then(g3 => this.setData({ g3 }))
      .catch(console.error);
    new AV.Query('gl2')
      .descending('createdAt')
      .include('User')
      .find()
      .then(gl2 => this.setData({ gl2 }))
      .catch(console.error);
    showView: (options.showView == "true" ? true : false)
    var user = AV.User.current();
    var userid = user.id
    console.log(userid)
    var abc = app.globalData
    console.log(abc)
    // var thisid = AV.Object.createWithoutData('gl');
    // thisid.fetch().then(function(){
    //   var objectId = thisid.get('objectId');
    // })
    // console.log(thisid)
    // if (userid == thisid) {
    //   this.setData({
    //     showDelete: true
    //   })
    // }
  },
  previewImage:function(e){
    console.log(e.currentTarget.dataset.item)
    wx.previewImage({
      current: e.currentTarget.dataset.item.url.url,
      urls: [e.currentTarget.dataset.item.url.url]
    })
  },
  OuQidetails:function(e){
    var object5 = e.currentTarget.dataset.item
    console.log(e.currentTarget.dataset)
    app.globalData.param8 = object5
    wx.navigateTo({
      url: '../OuQidetails/OuQidetails',
    })
  },
  onReady:function(){
    this.setData({
      gl2: getApp().globalData.param12
    });
    new AV.Query('gl2')
      .descending('createdAt')
      .include('User')
      .find()
      .then(gl2 => this.setData({ gl2 }))
      .catch(console.error);
    new AV.Query('g3')
      .descending('createdAt')
      .include('User')
      .include('tiezi')
      .find()
      .then(g3 => this.setData({ g3 }))
      .catch(console.error);
     },
  onShow:function(){
    console.log(getApp().globalData.param7)
    this.setData({
      _File:getApp().globalData.param7,
    })
    new AV.Query('gl2')
      .descending('createdAt')
      .include('User')
      .find()
      .then(gl2 => this.setData({ gl2 }))
      .catch(console.error);
    new AV.Query('g3')
      .descending('createdAt')
      .include('User')
      .include('tiezi')
      .find()
      .then(g3 => this.setData({ g3 }))
      .catch(console.error);
  },
  onShareAppMessage: function () {
    var title3 = '阴阳师Max | 玩好阴阳师的第一步'
    return {
      title: title3,
      path: 'pages/xy/xy'
    }
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  dianzan:function(e){
    var gl2Object1 = e.currentTarget.dataset.item.objectId
    console.log(gl2Object1)
    // var user = AV.User.current();
    // var gl2Object1 = AV.Object.createWithoutData('gl2', gl2Object1);
    // var userObject = AV.Object.createWithoutData('_User', user.id);
    // var gl = new AV.Object('g3');
    // gl.set('User', userObject);
    // gl.save();
    // gl.set('tiezi', gl2Object1)
    // gl.save();
    // // var that = this;
    // // that.setData({
    // //   showView: (!that.data.showView)
    // // })
    var that = this;
    that.setData({
      content:'取消'
    })
    console.log(that)
  },
  // ceshi:function(e){
  //   console.log(e)
  // }
  dianzan1:function(e){
    // console.log(e.currentTarget.dataset.item)
    // var deleteObject = e
    // console.log(deleteObject)
    // var todo = AV.Object.createWithoutData('g3', deleteObject);
    // todo.destroy()
    // var that = this;
    // that.setData({
    //   content: '点赞'
    // })
  }
 
})