<template>
	<view class="car bgcf1f1 h100">
		<view class="status_bar bgcfff">
			<view class="top-view"></view>
		</view>
		<view class="title-fixed ">
			<Back :txt="'分类'"></Back>
			<view class="search-box pr f26 bgcfff pr pl30 pr30 flex">
				<image class="wh30 pb icon" style="z-index: 10;" src="../../static/footer/tab001.png" mode=""></image>
				<input class=" bgcf1f1 search pb" disabled placeholder-class="placeholder-class" type="text" placeholder="搜索您想要的商品"
				 @tap="gosearch" />
			</view>
		</view>
		<!-- 分类 -->
		<view class="list dflex">
			<scroll-view class="left" scroll-y="true">
				<view class="flex f28 item active">111</view>
				<view class="flex f28 item">111</view>
				<view class="flex f28 item">111</view>
				<view class="flex f28 item">111</view>
				<view class="flex f28 item">111</view>
				<view class="flex f28 item">111</view>
				<view class="flex f28 item">111</view>
				<view class="flex f28 item">111</view>
				<view class="flex f28 item">111</view>
				<view class="flex f28 item">111</view>

				<view class="flex f28 item">111</view>
				<view class="flex f28 item">111</view>
				<view class="flex f28 item">111</view>
				<view class="flex f28 item">111</view>
				<view class="flex f28 item">111</view>
				<view class="flex f28 item">111</view>
				<view class="flex f28 item">111</view>
				<view class="flex f28 item">111</view>
				<view class="flex f28 item">111</view>
				<view class="flex f28 item">111</view>
				<view class="flex f28 item">111</view>
				<view class="flex f28 item">111</view>
				<view class="flex f28 item">111</view>
				<view class="flex f28 item">111</view>
			</scroll-view>
			<scroll-view class="right flex1 bgcfff" scroll-y="true">
				<view class="right-item djcsb">
					<image class="wh160 br20 mr20" src="../../static/footer/tab001.png" mode=""></image>
					<view class="flex1 djcsb flex-column">
						<view class="f28 c333">陕西红富士苹果水果10斤新鲜脆甜</view>
						<view class="djcsb">
							<text class="f28 cff1">￥60.00</text>
							<image class="wh40" src="../../static/footer/tab001.png" mode=""></image>
						</view>
					</view>
				</view>
				<view class="right-item djcsb">
					<image class="wh160 br20 mr20" src="../../static/footer/tab001.png" mode=""></image>
					<view class="flex1 djcsb flex-column">
						<view class="f28 c333">陕西红富士苹果水果10斤新鲜脆甜</view>
						<view class="djcsb">
							<text class="f28 cff1">￥60.00</text>
							<image class="wh40" src="../../static/footer/tab001.png" mode=""></image>
						</view>
					</view>
				</view>
				<view class="right-item djcsb">
					<image class="wh160 br20 mr20" src="../../static/footer/tab001.png" mode=""></image>
					<view class="flex1 djcsb flex-column">
						<view class="f28 c333">陕西红富士苹果水果10斤新鲜脆甜</view>
						<view class="djcsb">
							<text class="f28 cff1">￥60.00</text>
							<image class="wh40" src="../../static/footer/tab001.png" mode=""></image>
						</view>
					</view>
				</view>
				<view class="right-item djcsb">
					<image class="wh160 br20 mr20" src="../../static/footer/tab001.png" mode=""></image>
					<view class="flex1 djcsb flex-column">
						<view class="f28 c333">陕西红富士苹果水果10斤新鲜脆甜</view>
						<view class="djcsb">
							<text class="f28 cff1">￥60.00</text>
							<image class="wh40" src="../../static/footer/tab001.png" mode=""></image>
						</view>
					</view>
				</view>
				<view class="right-item djcsb">
					<image class="wh160 br20 mr20" src="../../static/footer/tab001.png" mode=""></image>
					<view class="flex1 djcsb flex-column">
						<view class="f28 c333">陕西红富士苹果水果10斤新鲜脆甜</view>
						<view class="djcsb">
							<text class="f28 cff1">￥60.00</text>
							<image class="wh40" src="../../static/footer/tab001.png" mode=""></image>
						</view>
					</view>
				</view>
				<view class="right-item djcsb">
					<image class="wh160 br20 mr20" src="../../static/footer/tab001.png" mode=""></image>
					<view class="flex1 djcsb flex-column">
						<view class="f28 c333">陕西红富士苹果水果10斤新鲜脆甜</view>
						<view class="djcsb">
							<text class="f28 cff1">￥60.00</text>
							<image class="wh40" src="../../static/footer/tab001.png" mode=""></image>
						</view>
					</view>
				</view>
				<view class="right-item djcsb">
					<image class="wh160 br20 mr20" src="../../static/footer/tab001.png" mode=""></image>
					<view class="flex1 djcsb flex-column">
						<view class="f28 c333">陕西红富士苹果水果10斤新鲜脆甜</view>
						<view class="djcsb">
							<text class="f28 cff1">￥60.00</text>
							<image class="wh40" src="../../static/footer/tab001.png" mode=""></image>
						</view>
					</view>
				</view>
				
			</scroll-view>
		</view>

	</view>
</template>

<script>
	import Back from "@/components/back.vue"
	export default {
		data() {
			return {

			}
		},
		components: {
			Back,
		},
		onLoad() {

		},
		methods: {
			change(value) {
				this.numberValue = value
			}
		}
	}
</script>

<style lang="less" scoped>
	page {
		background-color: #f1f1f1;
		height: 100%;

		.car {
			.search-box {
				width: 100%;
				height: 100rpx;

				.search {
					height: 60rpx;
					width: 690rpx;
					border-radius: 30rpx;
				}

				.icon {
					top: 32rpx;
					left: 64rpx;
				}

				.placeholder-class {
					color: #CBCBCB;
					font-size: 26rpx;
					padding-left: 80rpx;
				}
			}

			.list {
				padding-top: 196rpx;
				height: ~'calc(100vh - 100rpx)';

				.left {
					width: 150rpx;

					.item {
						height: 100rpx;
						color: #656565;
					}

					.item.active {
						background-color: #fff;
						color: #FF1D1D;
						font-weight: bold;
						border-left: 10rpx solid #FF1D1D;
					}
				}

				.right-item {
					margin-top: 40rpx;
					padding: 0 50rpx;
				}
			}
		}
	}
</style>
