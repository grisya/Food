// packageA/pages/milk/milk.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        condensedsrc:"https://s2.loli.net/2022/03/13/YPiKw2DjsWvygpd.png",
        cheesesrc:"https://s2.loli.net/2022/03/13/OjmDknMvdhlxZwe.png",
        yogurtsrc:"https://s2.loli.net/2022/03/13/zd94ihBXQLNw6Mn.png",
        milksrc:"https://s2.loli.net/2022/03/13/VpPRo3suB2h7j5H.png"
    },

    gotocondensed(){
        wx.navigateTo({
            url: '/packageA_F/pages/condensed/condensed',
          })
    },

    gotocheese(){
        wx.navigateTo({
            url: '/packageA_F/pages/cheese/cheese',
          })
    },

    gotoyogurt(){
        wx.navigateTo({
            url: '/packageA_F/pages/yogurt/yogurt',
          })
    },

    gotomilk(){
        wx.navigateTo({
            url: '/packageA_F/pages/milk/milk',
          })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

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

    }
})