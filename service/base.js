const BASE_URL = "http://123.207.32.32:8000"
export const base = function(url,method,params,dataType,responseType,isNeedLoading=true){
  let _url = BASE_URL + url
  return new Promise((resolve,reject)=>{
    if(isNeedLoading){
      wx.showLoading({
        title: '加载中...',
      })
    }
    wx.request({
      url: `${BASE_URL}${url}`,
      method:method || "GET",
      data:params || "",
      dataType:dataType || "json",
      responseType:responseType || "text",
      success:res=>{
        wx.hideLoading({
          complete: (res) => {},
        })
        resolve(res)
      },
      fail:err=>{
        reject(err)
      }
    })
  })
}