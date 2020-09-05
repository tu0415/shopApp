<template>
	<view class="allOrder h100  bgcf1f1 ">
		<view class="status_bar " style="z-index: 20;">
			<view class="top-view bgcf1f1"></view>
		</view>
		<view class="title-fixed bgcf1f1">
			<Title :txt="'商品列表'"></Title>
			<view class="tab flex">
				<view class="f28 flex flex1 tab-item" :class="{active:tabIndex == 1}">
					<text @click="select(1)">综合</text>
				</view>
				<view class="f28 flex flex1 tab-item" :class="{active:tabIndex == 2}">
					<text @click="select(2)">销量</text>
				</view>
				<view class="f28 flex flex1 tab-item" :class="{active:tabIndex == 3}">
					<text @click="select(3)">价格</text>
				</view>
			</view>
		</view>
		<view class="list-box " style="padding-top: 200rpx;">
			<shopList :classData="classData"></shopList>
		</view>
		
	</view>
</template>
<script>
	import Title from "@/components/title.vue"
	import shopList from "@/components/shopList.vue"

	export default {
		data() {
			return {
				tabIndex: 1,
				classData:[
					{
					goodsName:'苹果',
					goodsPrice:10,
					sold:1000
				},
				{
					goodsName:'苹果',
					goodsPrice:10,
					sold:1000
				},
				{
					goodsName:'苹果',
					goodsPrice:10,
					sold:1000
				},
				]
			}
		},
		components: {
			Title,
			shopList
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
