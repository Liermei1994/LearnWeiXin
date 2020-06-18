//index.js
import {getIndexDatas} from '../../service/api.js';
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    list: [],
    counter: 0,
    appAge: 0,
    imgPath: '',
    isActive: false,
    score: 90,
    movies: ["a", "b", "c"],
    number: 0,
    isShowBackTop:false,
    distance:200,
    showTop:false
  },
  //监听页面滚动
  onPageScroll(options){
    // console.log(options,'dd')
    // let dd = options.scrollTop
    // this.setData({
    //   isShowBackTop:dd>this.data.distance
    // })
    let flag = options.scrollTop>this.data.distance
    // console.log(flag,'flag')
    if(flag != this.data.isShowBackTop){
      this.setData({
        isShowBackTop:flag
      })
    }
  },
  //回到顶部
  backTop(){
    wx.pageScrollTo({
      scrollTop:0
    })
  },
  //接收子组件传来的事件数据
  handelCom(e) {
    // console.log(e, '接收子组件传来的事件数据')
  },
  //调用自组件的点击事件
  numAdd(e) {
    // console.log('father', e)
    this.setData({
      number: this.data.number + 1
    })
  },
  handelClick(e) {
    // console.log(e.currentTarget.dataset.item, )
  },
  touchstart() {
    // console.log('手指开始触摸屏幕了')
  },
  //changeColor
  changeColor() {
    // console.log("changeColor")
    this.setData({
      isActive: !this.data.isActive
    })
  },
  //input
  inputValue(e) {
    // console.log(e.detail.value, 'value')
  },
  handelFpcus(e) {
    // console.log('foucue', e)
  },
  shiqu() {
    // console.log('shiqu')
  },
  bindss(e) {
    // console.log('right', e)
  },
  handelBottom(e) {
    // console.log('距离底部', e.detail.scrollTop)
    if (e.detail.scrollTop > 100) {
      // console.log('此时已经距离顶部>100')
    }
  },
  scrolltoupper() {
    // console.log('33333')
  },
  //选择图片
  chooseImg() {
    // console.log("选择图片")
    wx.chooseImage({
      complete: (res) => {
        // console.log(res, 'res')
        this.setData({
          imgPath: res.tempFilePaths[0]
        })
      },
    })
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //跳转
  goToHome: function () {
    wx.redirectTo({
      url: '../home/home',
    })
  },
  //减法
  subtraction() {
    // let sub=this.data.counter--
    this.setData({
      counter: this.data.counter - 1
    })
  },
  //加法
  add() {

    // let add = this.data.counter++
    this.setData({
      counter: this.data.counter + 1
    })
    // console.log(this.data.counter)
  },
  //页面被加载出来
  onLoad: function (options) {
    // console.log('onLoad')
    getIndexDatas().then(res=>{
      console.log(res,'封装')
    })
        // console.log(this.data.list, "list")
    // console.log(options, '00')
    wx.getUserInfo({
      success: function (res) {
        // console.log(res, 'lem')
      }
    })
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse){
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
  },
  //点击授权
  handelgetuserInfo(e) {
    // console.log(e, 'ee')
  },
  // getUserInfo: function(e) {
    // console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // },

  //页面显示
  onShow: function (options) {
    // console.log("onShow")
    // console.log(options, 'options')
    // switch(options.scene){
    //   case 1001:
    //     break;
    //     case 1005:
    //       break
    // }
  },
  //页面渲染完成时
  onReady() {
    // console.log("onReady")
  },
  //页面被隐藏时
  onHide() {
    // console.log("onHide")
  },
  //页面销毁时
  onUnload() {
    // console.log("onUnload")
  },
  //下拉刷新
  onPullDownRefresh() {
    // console.log("下拉刷新")
  },
  //底部事件
  onReachBottom() {
    // console.log("已经到达底部")
  },
  onShareAppMessage(options) {
    // console.log(options, 'share')
    return {
      title: 'lem',
      path: '../home',
      imageUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592455265977&di=13bba7281c5744f7113243b83c27c26b&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg"
    }
  }
})