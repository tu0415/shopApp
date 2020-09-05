<template>
	<view class="back">
		<view class="header">
				<slot  class="left" name="left"></slot>
				<text class="flex text" >{{txt}}</text>
				<view class="right f14 black">
					<slot name="right"></slot>
				</view>
			<!-- </image> -->
		</view>
	</view>
</template>

<script>
	export default {
		name: 'titles',
		props: {
			txt: {
				type: String
			},
			rightCont: {
				type: String
			}
		},
		methods: {
			back() {
				uni.navigateBack(1)
			}
		},
	}
</script>

<style scoped lang='less'>
	page {
		.header {
			height: 96rpx;
			position: relative;
			background-color: #FFFFFF;
			image{
				width: 48rpx;
				height: 48rpx;
				position: absolute;
				top: 24rpx;
				left: 24rpx;
			}

			.text {
				font-size: 36rpx;
				color: #333333;
				height: 100%;
			}
			.left {
				position: absolute;
				top: 32rpx;
				left: 32rpx;
			}

			.right {
				position: absolute;
				right: 32rpx;
				top: 32rpx;
			}
		}
	}
</style>
