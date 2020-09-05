
// const baseUrl = 'http://47.52.205.185:8201'
const baseUrl = 'https://wztp.zhumengxuanang.com' // 正式
const quest = (url, parameter,method,header) => {
    let token = uni.getStorageSync('token')
	// parameter = 
    uni.showLoading({
        title: '加载中', //提示的内容,
        mask: true, //显示透明蒙层，防止触摸穿透,
        success: res => {}
      });
    return new Promise((resolve, reject) => {
        wx.request({
            url: `${baseUrl}${url}`,
            data: token ? Object.assign(parameter,{token:uni.getStorageSync('token')}) : parameter,
            method: method,
            header:{"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"},
			dataType: 'json',
            success: res => {
                if(res.data.code == 200) {
                    resolve(res.data);
                } else {
                    console.log(res)
                    uni.showToast({
                        title: '服务器错误,请重试',
                        icon: 'none',
                        duration: 2000
                    });
                    reject(res.data);
                }
               
            },
            fail: (err) => {
                uni.showToast({
                    title: '服务器错误,请重试',
                    icon: 'none',
                    duration: 2000
                });
                reject(err);
            },
            complete: () => {
                uni.hideLoading();
            }
        });
    });

};

export default {
    quest,
    baseUrl
}