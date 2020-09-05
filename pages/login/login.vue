<template>
	<view class="login bgcfff">
		<view class="">
			<view class="" style="height: 400rpx;">
				<image class="wh100" src="../../static/footer/tab001.png" mode=""></image>
			</view>
			<view class="count mt40">
				<view class="item daic bde5e5">
					<text class="f32" style="width: 100rpx;">帐号</text>
					<input type="text" value="" placeholder-class="placeholder-class" placeholder="请输入账号" />
				</view>
				<view class="item daic bde5e5">
					<text class="f32" style="width: 100rpx;">密码</text>
					<input type="text" value="" placeholder-class="placeholder-class" placeholder="请输入账号" />
				</view>
				<button class="br45 mt60 mb60" type="default">
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

			}
		},
		onShow() {
			// this.getAccount()
			let obj = {
				id:1
			}
			let obj1 = {
				token:222
			}
			let a = {} 
			Object.assign(obj,obj1);
			if(a) {
				console.log(111)
			}
			console.log(obj)

		},
		computed: {


		},
		methods: {}
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
