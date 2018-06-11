const AV = require('../../utils/av-weapp-min.js');
var app = getApp()
var user = AV.User.current();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    _File: [],
    gl2: [],
    _User:[],
    gl1:[],
    showView: false,
    showDelete: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(getApp().globalData.param8)
    this.setData({
      gl2: getApp().globalData.param8
    });
    console.log(getApp().globalData.param10)
    this.setData({
      gl1: getApp().globalData.param10
    });
    this.setData({
      gl1: getApp().globalData.param9
    });
    showView: (options.showView == "true" ? true : false)
    var user = AV.User.current();
     var userid = user.id
     console.log(userid)
    var thisid = app.globalData.param8.User.objectId
    console.log(thisid)
    if (userid == thisid) {
      this.setData({
        showDelete :true
      })
    }
  },

  liuyan: function() {
    new AV.Query('gl1')
      .descending('createdAt')
      .include('User')
      .include('tiezi')
      .find()
      .then(gl1 => this.setData({ gl1 }))
      .catch(console.error);
      return
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (e) {
    this.setData({
      gl1: getApp().globalData.param9
    });
    console.log(getApp().globalData.param10)
    this.setData({
      gl1: getApp().globalData.param10
    });
    // console.log(getApp().globalData.param8)
    this.setData({
      gl2: getApp().globalData.param8
    });
      new AV.Query('gl1')
      .descending('createdAt')
      .include('User')
      .include('tiezi')
      .find()
      .then(gl1 => this.setData({ gl1 }))
      .catch(console.error);
      return
  },
  bindFormSubmit: function (e) {
    console.log(e.currentTarget.dataset.item)
    var that = this
    var gl2Object = that.data.gl2.objectId
    console.log(gl2Object)
    var user = AV.User.current();
    var gl2Object = AV.Object.createWithoutData('gl2', gl2Object);
    var userObject = AV.Object.createWithoutData('_User', user.id);
    var textareaObject = e.detail.value.textarea;
    var gl = new AV.Object('gl1');
    gl.set('content', textareaObject);
    gl.save()
    gl.set('User', userObject);
    gl.save();
    gl.set('tiezi', gl2Object)
    gl.save();
    var object10 = e.currentTarget.dataset.item
    console.log(e.currentTarget.dataset)
    app.globalData.param10 = object10
    var that = this;
    that.setData({
      showView: (!that.data.showView)
    })
    wx.vibrateShort({
      bindFormSubmit:1
    })
  }, 
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      gl1: getApp().globalData.param9
    });
    this.setData({
      gl1: getApp().globalData.param10
    });
     new AV.Query('gl1')
    .descending('createdAt')
    .include('User')
    .include('tiezi')
    .find()
    .then(gl1 => this.setData({ gl1 }))
    .catch(console.error);
    console.log(getApp().globalData.param10)
    return new AV.Query('gl1') 
  },
  shanchu:function(e){
    // console.log(e.currentTarget.dataset.item)
    var deleteObject = e.currentTarget.dataset.item.objectId
    console.log(e)
    var todo = AV.Object.createWithoutData('gl2', deleteObject );
    todo.destroy().then(function (success) {
      wx.navigateBack({
        delta:1,
      })
    }, function (error) {
      // 删除失败
    });
  },
  ceshi:function(e){
    var that = this
    var user = AV.User.current();
    var userObject = AV.Object.createWithoutData('_User', user.id);
    console.log(userObject)
    var ceshi = that.data.gl2.User.objectId
    console.log(ceshi)
  },
  previewImage: function (e) {
    // console.log(e.currentTarget.dataset.item)
    wx.previewImage({
      current: e.currentTarget.dataset.item.url.url,
      urls: [e.currentTarget.dataset.item.url.url]
    })
  },
  reply:function(e){
    console.log(e.currentTarget.dataset.item)
    var object11 = e.currentTarget.dataset.item
    console.log(e.currentTarget.dataset)
    app.globalData.param9 = object11
    // wx.navigateTo({
    //   url: '../OuQiReply/OuQiReply',
    // })
    var that = this;
    that.setData({
      showView: (!that.data.showView)
    })
  },
  
  onHide: function (e) {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    new AV.Query('gl1')
      .descending('createdAt')
      .include('User')
      .include('tiezi')
      .find()
      .then(gl1 => this.setData({ gl1 }))
      .catch(console.error);
    wx.vibrateShort({
      onPullDownRefresh: 1
    })   
      wx.stopPullDownRefresh()

  }
})

