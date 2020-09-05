<template>
	<view class="addRess h100  bgcfff ">
		<view class="status_bar " style="z-index: 20;">
			<view class="top-view bgcf1f1"></view>
		</view>
		<view class=" bgcfff">
			<Title :txt="'编辑收货地址'"></Title>
		</view>
		<view class="list ml30 mr30">
			<view class="bde5e5 daic item">
				<text class="f28 c333">收货人</text>
				<input type="text" value="" placeholder-class="placeholder-class" placeholder="请输入收货人姓名" />
			</view>
			<view class="bde5e5 daic item">
				<text class="f28 c333">联系电话</text>
				<input type="number" value="" placeholder-class="placeholder-class" placeholder="请输入联系电话" />
			</view>
			<view class="bde5e5 djcai item">
				<view class="daic">
					<text class="f28 c333">所在地</text>
					<input type="text" value="" placeholder-class="placeholder-class" placeholder="请输入收货人姓名" />
				</view>
				<image @click="popup_bottom()" class="wh40" src="../../static/footer/tab001.png" mode=""></image>
			</view>
			<view class="bde5e5 item">
				<input class="h100" type="text" value="" placeholder-class="placeholder-class" placeholder="输入详细地址、门牌号、小区..." />
			</view>
			<view class="djcai set mt30 mb60">
				<text>设为默认</text>
				<image class="select" src="../../static/footer/tab001.png" mode=""></image>
			</view>
			<view class="mb40">
				<button class="bgcff3 br45 fff f34" type="default">保存修改</button>
			</view>
			<view class="delete">
				<button class="bgcff3 br45 fff f34 bde5" type="default">删除收货地址</button>
			</view>
		</view>
		<linkAddress ref="linkAddress" :height="height" @confirmCallback="confirmCallback()">
		</linkAddress>

	</view>
</template>
<script>
	import Title from "@/components/title.vue"
	import linkAddress from '@/components/xuan-linkAddress/xuan-linkAddress.vue'
	export default {
		data() {
			return {
				address: '',
				height: '500px',
			}
		},
		components: {
			Title,
			linkAddress
		},
		onShow() {
			let time = new Date().getTime()
			console.log(time)
		},
		methods: {
			//点击弹出弹窗
			popup_bottom() {
				this.height = '550rpx';
				//显示
				this.show_popup();
			},
			//显示弹窗
			show_popup() {
				this.$refs.linkAddress.show();
			},
			confirmCallback() {
				let ads = this.$store.state.user_address;
				this.address = ads.province + ads.city + ads.district;
				console.log(this.address)
			},
		}
	}
</script>

<style lang="less" scoped>
	page {
		height: 100%;
		background-color: #F1F1F1;

		.addRess {
			.list {
				.item {
					height: 90rpx;

					text {
						width: 160rpx;
					}
				}

				.placeholder-class {
					color: #CBCBCB;
					font-size: 28rpx;
				}

				.select {
					width: 70rpx;
					height: 30rpx;
				}
				.delete {
					uni-button[type=default] {
						background-color: #FFFFFF;
						color: #333;
						
					}
				}
			}

			.bottom {
				height: 100rpx;
				padding: 0 30rpx 0 60rpx;
				bottom: 0;

				.btn {
					width: 660rpx;
					height: 80rpx;
					border-radius: 40rpx;
				}

			}
		}

	}
</style>
