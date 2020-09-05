<template>
	<view class="allOrder h100  bgcf1f1 ">
		<view class="status_bar " style="z-index: 20;">
			<view class="top-view bgcf1f1"></view>
		</view>
		<view class="title-fixed bgcf1f1">
			<Title :txt="'订单详情'"></Title>
			<view class="tab flex">
				<view class="f28 flex flex1 tab-item" :class="{active:tabIndex == 1}">
					<text @click="select(1)">全部订单</text>
				</view>
				<view class="f28 flex flex1 tab-item" :class="{active:tabIndex == 2}">
					<text @click="select(2)">待付款</text>
				</view>
				<view class="f28 flex flex1 tab-item" :class="{active:tabIndex == 3}">
					<text @click="select(3)">待发货</text>
				</view>
				<view class="f28 flex flex1 tab-item" :class="{active:tabIndex == 4}">
					<text @click="select(4)">待收货</text>
				</view>
				<view class="f28 flex flex1 tab-item" :class="{active:tabIndex == 5}">
					<text @click="select(5)">已完成</text>
				</view>
			</view>
		</view>
		<view class="list-box ml30 mr30 " style="padding-top: 200rpx;">
			<view class="bgcfff br20 list-item mb20">
				<view class="djcsb mb20">
					<image class="wh160 br20 mr25" src="../../static/footer/tab001.png" mode=""></image>
					<view class="flex1 djcsb flex-column pb20 ">
						<view class="djcai">
							<text class="f28 c333">阎良冬枣500g</text>
							<text class="f24 cff1">待发货</text>
						</view>
						<view class="djcai">
							<text class="f28 c333">阎良冬枣500g</text>
							<text class="f28 c999">X1</text>
						</view>
					</view>
				</view>
				<view class="f28 bde5e5 pb20" style="text-align: right;">实付:53.00</view>
				<view class="dflex jcfe ">
					<view class="btn take flex mt20 ml15" >去付款</view>
					<!-- <view class="btn addcar flex mt20 ml15"  >去付款</view> -->
				</view>
			</view>
			<view class="bgcfff br20 list-item mb20">
				<view class="djcsb mb20">
					<image class="wh160 br20 mr25" src="../../static/footer/tab001.png" mode=""></image>
					<view class="flex1 djcsb flex-column pb20 ">
						<view class="djcai">
							<text class="f28 c333">阎良冬枣500g</text>
							<text class="f24 cff1">待发货</text>
						</view>
						<view class="djcai">
							<text class="f28 c333">阎良冬枣500g</text>
							<text class="f28 c999">X1</text>
						</view>
					</view>
				</view>
				<view class="f28 bde5e5 pb20" style="text-align: right;">实付:53.00</view>
				<view class="dflex jcfe ">
					<view class="btn take flex mt20 ml15" >去付款</view>
					<!-- <view class="btn addcar flex mt20 ml15"  >去付款</view> -->
				</view>
			</view>
			<view class="bgcfff br20 list-item mb20">
				<view class="djcsb mb20">
					<image class="wh160 br20 mr25" src="../../static/footer/tab001.png" mode=""></image>
					<view class="flex1 djcsb flex-column pb20 ">
						<view class="djcai">
							<text class="f28 c333">阎良冬枣500g</text>
							<text class="f24 cff1">待发货</text>
						</view>
						<view class="djcai">
							<text class="f28 c333">阎良冬枣500g</text>
							<text class="f28 c999">X1</text>
						</view>
					</view>
				</view>
				<view class="f28 bde5e5 pb20" style="text-align: right;">实付:53.00</view>
				<view class="dflex jcfe ">
					<view class="btn take flex mt20 ml15" >去付款</view>
					<!-- <view class="btn addcar flex mt20 ml15"  >去付款</view> -->
				</view>
			</view>
			<view class="bgcfff br20 list-item mb20">
				<view class="djcsb mb20">
					<image class="wh160 br20 mr25" src="../../static/footer/tab001.png" mode=""></image>
					<view class="flex1 djcsb flex-column pb20 ">
						<view class="djcai">
							<text class="f28 c333">阎良冬枣500g</text>
							<text class="f24 cff1">待发货</text>
						</view>
						<view class="djcai">
							<text class="f28 c333">阎良冬枣500g</text>
							<text class="f28 c999">X1</text>
						</view>
					</view>
				</view>
				<view class="f28 bde5e5 pb20" style="text-align: right;">实付:53.00</view>
				<view class="dflex jcfe ">
					<view class="btn take flex mt20 ml15" >去付款</view>
					<!-- <view class="btn addcar flex mt20 ml15"  >去付款</view> -->
				</view>
			</view>
			<view class="bgcfff br20 list-item mb20">
				<view class="djcsb mb20">
					<image class="wh160 br20 mr25" src="../../static/footer/tab001.png" mode=""></image>
					<view class="flex1 djcsb flex-column pb20 ">
						<view class="djcai">
							<text class="f28 c333">阎良冬枣500g</text>
							<text class="f24 cff1">待发货</text>
						</view>
						<view class="djcai">
							<text class="f28 c333">阎良冬枣500g</text>
							<text class="f28 c999">X1</text>
						</view>
					</view>
				</view>
				<view class="f28 bde5e5 pb20" style="text-align: right;">实付:53.00</view>
				<view class="dflex jcfe ">
					<view class="btn take flex mt20 ml15" >去付款</view>
					<!-- <view class="btn addcar flex mt20 ml15"  >去付款</view> -->
				</view>
			</view>
			<view class="bgcfff br20 list-item mb20">
				<view class="djcsb mb20">
					<image class="wh160 br20 mr25" src="../../static/footer/tab001.png" mode=""></image>
					<view class="flex1 djcsb flex-column pb20 ">
						<view class="djcai">
							<text class="f28 c333">阎良冬枣500g</text>
							<text class="f24 cff1">待发货</text>
						</view>
						<view class="djcai">
							<text class="f28 c333">阎良冬枣500g</text>
							<text class="f28 c999">X1</text>
						</view>
					</view>
				</view>
				<view class="f28 bde5e5 pb20" style="text-align: right;">实付:53.00</view>
				<view class="dflex jcfe ">
					<view class="btn take flex mt20 ml15" >去付款</view>
					<!-- <view class="btn addcar flex mt20 ml15"  >去付款</view> -->
				</view>
			</view>
		</view>
		
	</view>
</template>
<script>
	import Title from "@/components/title.vue"

	export default {
		data() {
			return {
				height: '500px',
				address: '',
				tabIndex: 1
			}
		},
		components: {
			Title,

		},
		methods: {
			select(index) {
				this.tabIndex = index
			}
		}
	}
</script>

<style lang="less" scoped>
	page {
		height: 100%;
		background-color: #F1F1F1;
		.allOrder {
			.tab {
				color: #333333;

				.tab-item {
					height: 100rpx;
				}

				.tab-item.active {
					color: #ff1e1e;
				}
			}

			.list-box {
				
				.list-item {
					padding: 30rpx 20rpx 20rpx 20rpx;
				}
			}

			.btn {
				padding: 10rpx 24rpx;
				border-radius: 40rpx;
			}

			.addcar {
				border: 1rpx solid rgba(229, 229, 229, 1);
			}

			.take {
				border: 1rpx solid rgba(255, 30, 30, 1);
				margin-left: 20rpx;
				color: #ff1e1e;
			}


		}

	}
</style>
