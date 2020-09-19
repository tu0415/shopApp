<template>
	<view class="register bgcf1f1 h100">
		<view class="status_bar">
			<view class="top-view"></view>
		</view>
		<Title :txt="'注册'" ></Title>
		<view class="cont">
			<view class="f28 bgcfff br20 item daic mt20">
				<text class="daic">手机号</text>
				<input type="number" class="f28" value="" v-model.trim="phone" placeholder="请输入手机号" />
			</view>
			<!-- <view class="f28 bgcfff br20 item djcsb mt20" style="padding-right: 10rpx;" >
				<view class="daic">
					<text class="daic">验证码</text>
					<input class="f28" type="number" v-model.trim="code" placeholder="请输入验证码" />
				</view>
				
				<text class="flex c00FFBA" v-if="!sendTime" @click="getCode">发送验证码</text>
				<text class="flex c00FFBA" v-else >{{time}}s重新获取</text>
			</view> -->
			<view class="f28 bgcfff br20 item daic mt20">
				<text class="daic">登录密码</text>
				<input class="f28" type="password" maxlength="16" v-model.trim="password" placeholder="请设置登录密码" />
			</view>
			<view class="f28 bgcfff br20 item daic mt20">
				<text class="daic">确认密码</text>
				<input class="f28" type="password" maxlength="16" v-model.trim="passwords" placeholder="请重新输入登录密码" />
			</view>
			<!-- <view class="f28 bgcfff br20 item daic mt20">
				<text class="daic">支付密码</text>
				<input class="f28" type="password" maxlength="6" @input="onKeyInput($event,1)" password v-model.trim="paycode" placeholder="请设置支付密码" />
			</view>
			<view class="f28 bgcfff br20 item daic mt20">
				<text class="daic">确认密码</text>
				<input class="f28" type="password" maxlength="6" @input="onKeyInput($event,2)" password v-model.trim="paycodes" placeholder="请重新输入支付密码" />
			</view>
			<view class="f28 bgcfff br20 item daic mt20">
				<text class="daic">推荐人</text>
				<input class="f28" type="text" v-model.trim="referrer" placeholder="请输入推荐人号码" />
			</view> -->
			<view class="btn-box" @click="getRegister">
				<button class="btn f36 fff bgcff3 flex br45  mt60 cfff">
					注册
				</button>
			</view>
		</view>
	</view>
</template>

<script>
	import Title from "@/components/title.vue"
	export default {
		name: 'register',
		data() {
			return {
				phone: '', // 电话号码
				code: '', // 短信验证码
				password: '', // 密码
				passwords: '', // 确认密码
				paycode: '', // 支付密码
				paycodes: '', // 确认支付密码
				referrer: '', // 推荐人
				time: 60, // 倒计时
				sendTime: false, // 定时器,
			}
		},
		components: {
			Title
		},
		onLoad(e) {
			 
		},
		methods: {
			// 验证码倒计时
			send() {
				this.sendTime = true;
				let interval = setInterval(() => {
					if (this.time-- <= 0) {
						this.time = 60;
						this.sendTime = false;
						clearInterval(interval);
					}
				}, 1000);
			},

			// 发送短信验证码
			getCode() {
				let reg = /^1[3|4|5|6|7|8|9][0-9]{9}$/
				if (!reg.test(this.phone)) {
					uni.showToast({
						title: '手机号码不正确',
						icon: 'none'
					});
					return false;
				}
				this.send()
				this.$http.quest(this.$API.login.code, "post", {tel: this.phone,type:2}).then(res => {
					
					if(res.code == 200) {
						uni.showToast({
							title: res.msg,
							icon: 'none'
						});
					} else {
						uni.showToast({
							title: res.msg,
							icon: 'none'
						});
					}

				}, error => {
					console.log(error);
				})
			},
			
			// 注册
			async getRegister() {
				if(!this.$reg.phone.test(this.phone)) {
					uni.showToast({title: '手机号格式不正确',icon: 'none'});return
				}
				if(!this.$reg.password.test(this.password)) {
					uni.showToast({title: '请输入6-16数字,字母组合密码',icon: 'none'});return
				}
				 if(this.password != this.passwords) {
					uni.showToast({title: '两次密码不一致',icon: 'none'});return
				}
			let data = await this.$http.quest(this.$API.login.register, "get", {
					phone: this.phone,
					password: this.password,
					confirmPassword: this.passwords,
				})
				uni.showToast({title: data.msg,icon: 'none'});
				uni.setStorageSync('token',data.token)
				setTimeout(() => {uni.navigateTo({url: "/pages/login/login"})}, 1000)
			},
			onKeyInput(event,index) {
				let i = event.target.value;
				let num = i.charAt(i.length - 1);
				var reg = new RegExp('^[0-9]*$');
				if (!reg.test(num)) {
					if(index == 1) {
						this.paycode =  '';
					} else {
						this.paycodes =  '';
					}
					
				} else {
					if(index == 1) {
						this.paycode = i;
					} else {
						this.paycodes = i;
					}
					
				}
				
			}
		}
	}
</script>

<style scoped lang="less">
	page {
		height: 100%;
		.register {
			.cont {
				padding: 0 30rpx;

				.item {
					padding: 0 40rpx;
					height: 90rpx;

					text {
						width: 170rpx;
						height: 100%;
					}

					input {
						opacity: .5;
						height: 100%;
					}

				}

				.btn-box {
					padding: 0 20rpx;
				}
			}
		}
	}
</style>
