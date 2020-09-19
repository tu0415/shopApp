// import Vue from 'vue'
const reg = {
	phone:/^1[3|4|5|6|7|8|9][0-9]{9}$/, // 手机号码验证
	pay:/^\d{6}$/,  // 6位支付密码
	password:/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/ //登录密码6-16位
}

export default {
	install(Vue) {
		Vue.prototype.$reg = reg
	}
}

// export const regList = () => {
//     return reg
// }
