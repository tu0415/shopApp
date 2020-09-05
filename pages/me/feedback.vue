<template>
	<view class="feedback h100  bgcfff ">
		<view class="status_bar " style="z-index: 20;">
			<view class="top-view bgcf1f1"></view>
		</view>
		<view class=" bgcfff">
			<Title :txt="'用户反馈'"></Title>
		</view>
		<view class="list ml30 mr30">
			<textarea class="textarea" placeholder-class="placeholder-class" placeholder="请输入您的反馈/问题，平台收到后将及时联系您..." />
			<view class="mb40">
				<button class="bgcff3 br45 fff f34" type="default">提交</button>
			</view>
			
		</view>
		
	</view>
</template>
<script>
	import Title from "@/components/title.vue"
	export default {
		data() {
			return {
				list:[{id:1},{id:2}]
				
			}
		},
		components: {
			Title,
		},
		onShow() {
			
		},
		methods: {
			
		}
	}
</script>

<style lang="less" scoped>
	page {
		height: 100%;
		background-color: #F1F1F1;

		.feedback {
			.list {
				textarea{
					height: 400rpx;
					background-color: #F5F5F5;
					width: 100%;
					margin-bottom: 60rpx;
					padding: 20rpx;
					margin-top: 20rpx;
				}
				.placeholder-class {
					color: #CBCBCB;
					font-size: 28rpx;
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
