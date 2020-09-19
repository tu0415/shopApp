<template>
	<view class="meCollect h100  bgcf1f1 ">
		<view class="status_bar " style="z-index: 20;">
			<view class="top-view bgcf1f1"></view>
		</view>
		<view class="title-fixed bgcf1f1">
			<Title :txt="'商品详情'"></Title>
		</view>
		<view class="list">
			<view class="">
				<swiper   style="height: 750rpx;" class="swiper-cont" :indicator-dots="indicatorDots" :autoplay="autoplay" :circular="true" :interval="interval" :duration="duration">
					<swiper-item class="swiper-box  mr20" v-for="(item,i) in shopDetail.rotation_img" :key="i"  >
						<image class="wh100 " :src="item" mode=""></image>
					</swiper-item>
				</swiper>
			</view>
			<view class="bgcfff pl30 pt20">
				<view class="cff1 bold">
					￥{{shopDetail.price}}
				</view>
				<view class="f28 c333 mt20 pb40">
					{{shopDetail.desc}}
				</view>
			</view>
			<view class="">
				<view class="f30 c333 flex pt40 pb40">
					//  商品详情 //
				</view>
				<view class="">
					<view class="" style="height: 750rpx;" v-for="(item,i) in shopDetail.detail_img">
						<image class="wh100" :src="item" mode=""></image>
					</view>
					
				</view>
			</view>
			<view class="position-fixed bottom bgcfff djcai">
				<view class="flex">
					<view class="bottom-left flex mr40">
						<image class="wh36 mr20" src="../../static/footer/tab001.png" mode=""></image>
						<text class="f28 c333">客服</text>
					</view>
					<view class="bottom-left flex">
						<image class="wh36 mr20" v-if="shopDetail.collection == 0"  @click="collectEvt" src="../../static/home/sc@2x.png" mode=""></image>
						<image class="wh45 mr20" v-else  @click="detCollectEvt" src="../../static/home/collect-select.png" mode=""></image>
						<text class="f28 c333">收藏</text>
					</view>
				</view>
				
				<view class="f28 c333 bottom-right djcai" >
					<view class="daic">
						<button class="f28 c333 bgcff8 addCar" type="default" style="border-radius: 35rpx 0 0 35rpx;" @click="open" >
							加入购物车
						</button>
						<button class="f28 c333 bgcff3 " type="default" style="border-radius:0  35rpx 35rpx 0;color: #fff !important;">
							立即购买
						</button>
					</view>
				<!-- 	<view class="f28 fff flex conversion bgcff3" @click="open">
						兑换
					</view> -->
					
				</view>
			</view>
		</view>
			<unipopup ref='shade' type="bottom">
				<view class="bgcfff shade-box pr">
					<view class="bde5e5 pb40">
						<image class="wh40 pb close " src="../../static/footer/tab001.png" mode=""></image>
						<view class="dflex">
							<image class="wh260 mr30" :src="shopDetail.thumb" mode=""></image>
							<view class="">
								<view class="cff1 f34">￥36.9</view>
								<view class="f26 c999 mt20">库存:{{shopDetail.stock}}</view>
							</view>
						</view>
					</view>
					<view class="djcai mt20 mb60">
						<text class="f30 c333">数量</text>
						<view class="">
							<uni-number-box :disabled="false" :value="numberValue" @change="change" />
						</view>
					</view>
					<view class="bgcff3 fff flex f32 br45" style="height: 90rpx;" @click="addCartEvt">
						确认
					</view>
					
				</view>
			</unipopup>
	</view>
</template>
<script>
	import Title from "@/components/title.vue"
import unipopup from '@/components/uni-popup/uni-popup.vue';
import uniNumberBox from '@/components/uni-number-box/uni-number-box.vue'
	export default {
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 3000,
				duration: 500,
				shopDetail:{},
				numberValue:1,
				id:''
			}
		},
		onLoad(e) {
			this.id = JSON.parse(e.data).id
			this.goodsDetailEvt(JSON.parse(e.data).id)
		},
		onShow() {
			
		},
		components: {
			Title,
			unipopup,
			uniNumberBox
		},
		methods: {
			open() {
				this.$refs.shade.open()
			},
			change(e) {
				this.numberValue = e
			},
			async goodsDetailEvt(id) {
				let {data} = await this.$http.quest(this.$API.shop.goodsDetail, "get", {id})
				this.shopDetail = data
				
			},
			async collectEvt() {
				let data = await this.$http.quest(this.$API.shop.goodsCollection, "get", {goods_id:this.id})
				uni.showToast({title:data.msg,icon:'none'})
				this.shopDetail.collection = 1
			},
			async detCollectEvt() {
				let data = await this.$http.quest(this.$API.shop.delCollection, "get", {goods_id:this.id})
				uni.showToast({title:data.msg,icon:'none'})
				this.shopDetail.collection = 0
			},
			async addCartEvt() {
				let data = await this.$http.quest(this.$API.car.addCart, "get", {goods_id:this.id,number:this.numberValue})
				uni.showToast({title:data.msg,icon:'none'})
				this.$refs.shade.close()
			},
			add() {
				console.log(1)
			}
 		}
	}
</script>

<style lang="less" scoped>
	page {
		height: 100%;
		background-color: #F1F1F1;

		.meCollect {
			.list {
				padding-top: 120rpx;
				padding-bottom: 120rpx;
				.list-item {
					padding: 20rpx 20rpx 20rpx 30rpx;
				}
			}

			.bottom {
				height: 100rpx;
				padding: 0 30rpx 0 30rpx;
				bottom: 0;
				.bottom-right {
					.btn {
						width: 130rpx;
						height: 60rpx;
						border-radius: 30rpx;
					}
					.addCar {
						background-color: #FF821D;
					}
				}
				.conversion {
					width: 200rpx;
					height: 70rpx;
					border-radius: 35rpx;
				}
			}
		}
		.shade-box {
			padding: 30rpx;
			.close {
				right: 40rpx;
				top: 40rpx;
			}
		}

	}
</style>
