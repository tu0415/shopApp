<template>
	<view class="integralShop h100  bgcf1f1 ">
		<view class="status_bar " style="z-index: 20;">
			<view class="top-view bgcf1f1"></view>
		</view>
		<view class="title-fixed bgcf1f1">
			<Title :txt="'积分商城'"></Title>
			<view class="card ml30 mr30 pr flex flex-column ">
				<text class="f26 fff rule pb" @tap="open">规则</text>
				<image class="wh100px" src="../../static/footer/tab001.png" mode=""></image>
				<view class="fff mt20 mb20">
					<text class="f44 mr10">1000</text>
					<text class="f24">积分 ></text>
				</view>
				<view class="f24 fff">
					购物赚积分，积分畅快兑
				</view>
			</view>
			<view class="f34 c333 ml30 mt40 pb20">
				超值兑换
			</view>
		</view>
		<view class="list ml30 mr30">
			<view class="br20 bgcfff list-item daic">
				<image class="wh260 br20 mr30" src="../../static/footer/tab001.png" mode=""></image>
				<view class="f28 flex-column dflex">
					<text class="c333">南非进口红西柚</text>
					<text class="cff1 mt40">￥58.00</text>
					<text class="flex bgcff3 conversion fff mt30">兑换</text>
				</view>
			</view>
		</view>
		<unipopup ref='shade' type="center">
			<view class="shade-box bgcfff br20 pr flex flex-column " style="width: 520rpx;">
				<image class="wh40 pb close" src="../../static/footer/tab001.png" mode=""></image>
				<view class="f34 c333">
					规则
				</view>
				<view class="f32 c333 mt30 mb60">
					用户可通过购物获取相应积分，用户可通过购物获取相应积分，用户可通过购物获取相应积分，用户可通过
				</view>
				<view class="f30 flex bgcff3 br40 btn fff">
					我知道了
					
				</view>
			</view>
		</unipopup>

	</view>
</template>
<script>
	import Title from "@/components/title.vue"
import unipopup from '@/components/uni-popup/uni-popup.vue';
	export default {
		data() {
			return {

			}
		},
		components: {
			Title,
			unipopup
		},
		onShow() {
			this.$refs.shade.open()
		},
		methods: {
			open() {
				this.$refs.shade.open()
			}
		}
	}
</script>

<style lang="less" scoped>
	page {
		height: 100%;
		background-color: #F1F1F1;

		.integralShop {
			.card {
				background: url('../../static/footer/tab001.png') no-repeat;
				background-size: 100% 100%;
				height: 280rpx;
				.rule {
					top: 40rpx;
					right: 40rpx;
				}
			}
			.list {
				padding-top: 480rpx;
				.conversion {
					width: 150rpx;
					height: 60rpx;
					border-radius: 30rpx;
				}
			}
			.shade-box {
				padding: 44rpx 50rpx;
				.close {
					right:40rpx;
					top: 40rpx;
				}
				.btn {
					width: 300rpx;
					height: 80rpx;
					
				}
			}

			
		}

	}
</style>
