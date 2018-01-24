// pages/main/main.js
Page({
  data: {
    imgUrls: ["http://osnhakmay.bkt.clouddn.com/Main_1.gif"],

  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
    var context = wx.createContext();
    context.fill();
    context.setLineWidth(6);
    context.beginPath();
    context.setStrokeStyle('#eaeaea');
    context.setFillStyle('#eaeaea')
    context.arc(100, 60, 50, 0, 2 * Math.PI, true);
    context.stroke();
    context.closePath();
    context.setStrokeStyle('#ff7460');
    context.setFillStyle('#ff7460')
    context.beginPath();
    context.arc(100, 60, 50, 0, Math.PI, true);
    context.stroke();
    context.closePath();
    context.setFontSize(20);
    context.fillText('抢购', 80, 65);
    wx.drawCanvas({
      canvasId: 'firstCanvas',
      actions: context.getActions()
    })
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})