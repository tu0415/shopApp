<template>
	<view class="login bgcfff">
		<view class="">
			<view class="" style="height: 400rpx;">
				<image class="wh100" src="../../static/footer/tab001.png" mode=""></image>
			</view>
			<view class="count mt40">
				<view class="item daic bde5e5">
					<text class="f32" style="width: 100rpx;">帐号</text>
					<input type="text" value="" v-model.trim="phone" placeholder-class="placeholder-class" placeholder="请输入账号" />
				</view>
				<view class="item daic bde5e5">
					<text class="f32" style="width: 100rpx;">密码</text>
					<input type="text" value="" v-model.trim="password" placeholder-class="placeholder-class" placeholder="请输入账号" />
				</view>
				<button class="br45 mt60 mb60" type="default" :disabled="disabled" @click="loginEvt">
					登录
				</button>
				<view class="f28 c333 flex ">
					忘记密码 ?
				</view>
				<view class="flex " style="margin-top: 200rpx;">
					没有账号 , 去<text class="cff1 ml10" @click="pushPage('/pages/login/register',2)">注册</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				phone:'',
				password:'',
				disabled:false
			}
		},
		onShow() {
			// console.log(this.$reg)
			// console.log(this.$http.quest)

		},
		computed: {


		},
		methods: {
			async loginEvt() {
				if(!this.$reg.phone.test(this.phone)) {
					uni.showToast({title: '手机号格式不正确',icon: 'none'});return
				}
				if(!this.password) {
					uni.showToast({title: '请输入密码',icon: 'none'});return
				}
				this.disabled = true
				let data = await this.$http.quest(this.$API.login.login, "get", {
						phone: this.phone,
						password: this.password,
					})
					this.disabled = false
					uni.setStorageSync('token',data.token)
					setTimeout(() => {uni.switchTab({url: "/pages/home/home"})}, 1000)
					
			}
		}
	}
</script>

<style scoped lang="less">
	page {
		height: 100%;

		.login {
			.count {
				padding: 0 90rpx;

				.placeholder-class {
					color: #CCCCCC;
					font-size: 28rpx;
				}

				.item {
					height: 120rpx;
				}
			}
		}
	}
</style>
