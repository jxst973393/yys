const AV = require('../../utils/av-weapp-min.js');
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
  _User:[],
  gl:[],
  gl2:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  bindFormSubmit: function (e) {
    console.log(e.currentTarget.dataset.item)
    // var that = this
    var gl2Object = this.data
    console.log(gl2Object)
    // var user = AV.User.current();
    // var gl2Object1 = AV.Object.createWithoutData('gl2', gl2Object);
    // var userObject = AV.Object.createWithoutData('_User', user.id);
    // var textareaObject = e.detail.value.textarea;
    // var gl = new AV.Object('gl1');
    // gl.set('content', textareaObject);
    // gl.save()
    // gl.set('User', userObject);
    // gl.save();
    // gl.set('tiezi', gl2Object1)
    // gl.save();
    // var object10 = e.currentTarget.dataset.item
    // console.log(e.currentTarget.dataset)
    // app.globalData.param10 = object10
    // var that = this;
    // that.setData({
    //   showView: (!that.data.showView)
    // })
  },
  onReady: function () {
    console.log(getApp().globalData.param9)
    this.setData({
      gl2: getApp().globalData.param9
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
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
  
  }
})