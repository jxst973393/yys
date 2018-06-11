const AV = require('../../utils/av-weapp-min.js');
AV.init({
    appId: "XN5AuM7LzEyz3nDhrlgQfjnO-gzGzoHsz",
    appKey: "qy2UcLBEOEb9rjmqeJ5lTozz",
});
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

var app = getApp()
Page({
    data: {
        title: [],
        title3: [],
        title5: [],
        tabs: ["B-L", "M-T", "W-Z"],
        activeIndex: 0,
        sliderOffset: 0,
        sliderLeft: 1,
        inputShowed: false,
    }, showInput: function () {
        this.setData({
            inputShowed: true
        });
    },
    hideInput: function () {
        this.setData({
            inputVal: "",
            inputShowed: false
        });
    },
    clearInput: function () {
        this.setData({

        });
    },
    inputTyping: function (e) {
        this.setData({
            inputVal: e.detail.value
        });
    }, 
    onLoad: function () {
        
        var that = this;
        wx.getSystemInfo({
            success: function (res) {
                that.setData({
                    sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
                    sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
                });
            }
        });
    },
 tabClick: function (e) {
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id
        });
    },
    onReady: function () {
        new AV.Query('title')
            .descending('updtedAt')
            .find()
            .then(title => this.setData({ title }))
            .catch(console.error);
        new AV.Query('title3')
            .descending('updtedAt')
            .find()
            .then(title3 => this.setData({ title3 }))
            .catch(console.error);
        new AV.Query('title5')
            .descending('updtedAt')
            .find()
            .then(title5 => this.setData({ title5 }))
            .catch(console.error);
    },

    clickRow: function (e) {
        var object = e.currentTarget.dataset.item
        console.log(e.currentTarget)
        app.globalData.param = object
        wx.navigateTo({
            url: '../by/by',
        })
    },
    dianji1: function (e) {
        var object2 = e.currentTarget.dataset.item
        console.log(e.currentTarget)
        app.globalData.param2 = object2
        wx.navigateTo({
            url: '../by2/by2',
        })
    }, dianji2: function (e) {
        var object3 = e.currentTarget.dataset.item
        console.log(e.currentTarget)
        app.globalData.param3 = object3
        wx.navigateTo({
            url: '../by3/by3',
        })
    },
    onShow:function(){
    // 页面显示
  },
    onPullDownRefresh:function(){
        wx.showLoading({
            title:"刷新中",
        })
        setTimeout(function(){
            wx.hideLoading()
        },1000)
        new AV.Query('title')
            .descending('id')
            .find()
            .then(title => this.setData({ title }))
            .catch(console.error);
        new AV.Query('title3')
            .descending('updtedAt')
            .find()
            .then(title3 => this.setData({ title3 }))
            .catch(console.error);
        new AV.Query('title5')
            .descending('updtedAt')
            .find()
            .then(title5 => this.setData({ title5 }))
            .catch(console.error);
            wx.stopPullDownRefresh()
    },

    onShareAppMessage: function () {
        var title3 = '阴阳师Max | 玩好阴阳师的第一步'
        return {
            title: title3,
            path: 'pages/index/index'
        }
    }
})

