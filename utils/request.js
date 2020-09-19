import Vue from 'vue'

const URL = 'http://192.168.0.120/index.php/api' 
let token = {token:uni.getStorageSync('token')}

const quest = (url, method, data) => {
	let httpDefaultOpts = {
		url: URL + url,
		data: token ?  Object.assign(data,token): data,
		method: method,
		header: {
			"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
		},
		dataType: 'json',
	}
	return new Promise(function(resolve, reject) {
		uni.request(httpDefaultOpts).then(
			(res) => {
				if(res[1].data.status == 1) {
					resolve(res[1].data)
				} else {
					uni.showToast({
						title:res[1].data.msg,
						icon:'none'
					})
				} 
			}
		).catch(
			(response) => {
				uni.showToast({
					title:'服务器繁忙,请稍后再试',
					icon:'none'
				})
				reject(response)
			}
		)
	})
};




export default {
	// baseUrl,
	quest,
}
