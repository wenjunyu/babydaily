// pages/babyDaily/babyDaily.js

const DB = wx.cloud.database().collection('babyDaily');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dailyIndex: 0,
    dailyItem: {
      // sleep: 0,  //睡觉时长
      // cry: 0,//哭闹时长
      // do: 0,//活动时长      
      // bathe: 0,//洗澡
      // Date: "",//日期
      // drink: {},//喝水 时间/容量
      // excre: {},//大便 时间/状态
      // Pee: {},//小便
      // id: 0,
      // knead: 0,
      // lactic: 0,//母乳 时间/容量
      // milk: 0,//牛奶 时间/容量
      temperature: {}//体温 时间/数据
    }
  },

  newAddData(){
    wx.navigateTo({
      url: '/pages/babyAddInfo/babyAddInfo',
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },

  //新增记录
  addData() {
    //新增数据，自定义记录ID.
    let index = this.data.dailyIndex;
    index +=1;
    DB.add({
      data: {
        _id: index,
        dailyItem: {
          // sleep: 0,  //睡觉时长
          // cry: 0,//哭闹时长
          // do: 0,//活动时长
          // Pee: 0,//小便
          // bathe: 0,//洗澡
          // Date: "",//日期
          // drink: 0,//喝水
          // excre: 0,//大便
          // id: 0,
          // knead: 0,
          // lactic: 0,//母乳
          // milk: 0,//牛奶
          temperature: 0//体温
        }
      }
    })
    this.setData({
      dailyIndex:index,
      dailyItem: {
        // sleep: 0,  //睡觉时长
        // cry: 0,//哭闹时长
        // do: 0,//活动时长
        // Pee: 0,//小便
        // bathe: 0,//洗澡
        // Date: "",//日期
        // drink: 0,//喝水
        // excre: 0,//大便
        // id: 0,
        // knead: 0,
        // lactic: 0,//母乳
        // milk: 0,//牛奶
        temperature: 0//体温
      }
    })
  },

  //获取数据库的数据
  getData() {
    const that = this;
    DB.where({
      _id: 'dailyItem'
    })
      .get({
        success: function (res) {
          // res.data 是包含以上定义的两条记录的数组
          const { dailyItem } = res.data[0]
          console.log(dailyItem)
          that.setData({
            dailyItem
          })
        }
      })
  },

  //刷新数据库的数据
  frashData() {
    DB.update({
      data: {
        dailyItem: {
          sleep: newsleep,
          cry: newcry
        }
      },
      success: res => {
        this.setData({
          sleep: newsleep
        })
        console.log(res)
      },
      fail: err => {
        icon: 'none',
          console.error('[数据库] [更新记录] 失败：', err)
      }
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

  }

})