// pages/invest/invest.js
Page({
  data: {
    result: [{ "productType": "策略1号", "yearRate": "15.00", "productDesc": "日内做T/股票", "hasAward": "yes", "typeTerm": "3个月~12个月" }, { "productType": "策略2号", "yearRate": "6.00~11.00", "typeTerm": "1~12个月", "productDesc": "股票", "hasAward": "yes" }, { "productDesc": "期货", "yearRate": "5.00", "typeTerm": "随进随出", "hasAward": "no", "productType": "CTA" }, { "productDesc": "指数跟踪", "yearRate": "8.00", "typeTerm": "10天", "hasAward": "no", "productType": "股指增强型" }, { "productDesc": "期货/股票", "yearRate": "12.00", "typeTerm": "7天", "hasAward": "yes", "productType": "混合策略" }],
  },

  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
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