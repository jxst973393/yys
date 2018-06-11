const AV = require('../../utils/av-weapp-min.js');
AV.init({
  appId: "XN5AuM7LzEyz3nDhrlgQfjnO-gzGzoHsz",
  appKey: "qy2UcLBEOEb9rjmqeJ5lTozz",
});
var app = getApp()
var user = AV.User.current()
Page({
  data: {
    _File: [],
    gl2:[]
  },
  dianji: function (e) {
    console.log('jin ru dianji')
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album'],
      success: function (res) {
        that.setData({
          _File: that.data._File.concat(res.tempFilePaths)
        });
        console.log(that.data._File)
        console.log(Error)
      },
    });
  },
  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data._File // 需要预览的图片http链接列表
    })
  },
  dianji3: function (e) {
    var that = this
    wx.showLoading({
      title: '上传中'
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 1000)
    var that = this
    var tempF = this.data._File;

    if (tempF.url == null) {
      var user = AV.User.current();
      // var userObject = AV.Object.createWithoutData('_User', user.id);
      // var textareaObject = e.detail.value.textarea;
      // var fileObject1 = AV.Object.createWithoutData('_File', files[0].id);

      var fileObject1 = null
      console.log(fileObject)
      var gl = new AV.Object('gl2');
      // gl.set('content', textareaObject);
      gl.save()
      gl.set('url', fileObject);
      gl.save();
      console.log(userObject)
      gl.set('User', userObject);
      gl.save();
      var object12 = e.currentTarget.dataset.item
      console.log(e.currentTarget)
      app.globalData.param12 = object12
      // console.log(_File)
      wx.navigateBack({
        delta: 1, // 回退前 delta(默认为1) 页面
      })
    }if (tempF != null){
      tempF.map(tempFilePaths => () => new AV.File('yhsc.png', {
        blob: {
          uri: tempFilePaths,
        },
      }).save()).reduce(
        (m, p) => m.then(v => AV.Promise.all([...v, p()])),
        AV.Promise.resolve([])
        ).then(function (files) {
          var user = AV.User.current();
          var fileObject = AV.Object.createWithoutData('_File', files[0].id);
          var userObject = AV.Object.createWithoutData('_User', user.id);
          var textareaObject = e.detail.value.textarea;
          console.log(fileObject)
          var gl = new AV.Object('gl2');
          gl.set('content', textareaObject);
          gl.save()
          gl.set('url', fileObject);
          gl.save();
          console.log(userObject)
          gl.set('User', userObject);
          gl.save();
          var object12 = e.currentTarget.dataset.item
          console.log(e.currentTarget)
          app.globalData.param12 = object12
          console.log(_File)
          console.log(tempFilePaths)
          console.log(Error)
          wx.navigateBack({
            delta: 1, // 回退前 delta(默认为1) 页面
          })
        })
    }
    if (tempF.url == null) {
    var user = AV.User.current();
    var fileObject = AV.Object.createWithoutData('_File', files[0].id);
    var userObject = AV.Object.createWithoutData('_User', user.id);
    var textareaObject = e.detail.value.textarea;
    var fileObject1 = tempF.url
  
    console.log(fileObject)
    var gl = new AV.Object('gl2');
    gl.set('content', textareaObject);
    gl.save()
    gl.set('url', fileObject1);
    // console.log(fileObject)
    gl.save();
    console.log(userObject)
    gl.set('User', userObject);
    gl.save();
  }if (tempF.url != null ) {
      tempF.map(tempFilePaths => () => new AV.File('yhsc.png', {
        blob: {
          uri: tempFilePaths,
        },
      }).save()).reduce(
        (m, p) => m.then(v => AV.Promise.all([...v, p()])),
        AV.Promise.resolve([])
        ).then(function (files) {
          var user = AV.User.current();
          var fileObject = AV.Object.createWithoutData('_File', files[0].id);
          var userObject = AV.Object.createWithoutData('_User', user.id);
          var textareaObject = e.detail.value.textarea;
          console.log(fileObject)
          var gl = new AV.Object('gl2');
          gl.set('content', textareaObject);
          gl.save()
          gl.set('url', fileObject);
          gl.save();
          console.log(userObject)
          gl.set('User', userObject);
          gl.save();
          var object12 = e.currentTarget.dataset.item
          console.log(e.currentTarget)
          app.globalData.param12 = object12
          // console.log(_File)
          console.log(Error)
          wx.navigateBack({
            delta: 1, // 回退前 delta(默认为1) 页面
          })
        })

  }


      },
  dianji5: function () {
    var that = this;
    wx.clearStorage({
      success: function (res) {
        that.setData({
          _File: []
        })
      }
    })
  },
  bindFormSubmit: function (e) {
    var textarea = new AV.Object('gl2');
    var that = this;
    textarea.set('content', e.detail.value.textarea);
    textarea.save().then(function (textarea) {
      console.log('objectid is' + textarea.id);
    }, function (error) {
      console.log(error)
    })
    console.log(e.detail.value.textarea)
  },
  onLoad: function (options) {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})
