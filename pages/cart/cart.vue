<template>
	<view class="car bgcf1f1 h100">
		<view class="status_bar bgcfff">
			<view class="top-view"></view>
		</view>
		<view class="title-fixed ">
			<Back :txt="'购物车'"></Back>
		</view>
		<!-- 购物车非空状态 -->
		<view class="list">
			<view class="bgcfff br20 item mt20 ml30 mr30 daic" v-for="(item,i) in carList" :key="i">
				<image class="wh36 br20 mr20" v-if="item.active" src="../../static/car/xz@2x.png" mode=""></image>
				<image class="wh36 br20 mr20" v-else src="../../static/car/wxz@2x.png" mode=""></image>
				<image class="wh160 br20 mr30" :src="item.thumb" mode=""></image>
				<view class="flex1">
					<view class="f32 c333">
						{{item.desc}}
					</view>
					<view class="djcai mt20 mb20">
						<text class="f28 cff1">￥{{item.price}}</text>
						<text class="f26 c999">X{{item.number}}</text>
					</view>
					<view class="">
						<view class="example-body dflex jcfe">
							<uni-number-box :disabled="true" :value="item.number" @change="change($event,item)" @minus="addEvt($event,item.goods_id)"  />
						</view>
					</view>
				</view>
			</view>
			
		</view>
		<view class="position-fixed bottom bgcfff djcai">
			<view class="bottom-left flex">
				<image class="wh36 mr20" src="../../static/car/xz@2x.png" mode=""></image>
				<!-- <image class="wh36 mr20" src="../../static/car/wxz@2x.png" mode=""></image> -->
				<text class="f28 c333">全选</text>
			</view>
			<view class="f28 c333 bottom-right djcai">
				<view class="f28 c333 mr20">已选择<text class="cff1">1</text>
					件宝贝
				</view>
				<view class="bde5 btn flex c333" type="default" @click="delCartEvt">删除</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Back from "@/components/back.vue"
	import uniNumberBox from '@/components/uni-number-box/uni-number-box.vue'
	export default {
		data() {
			return {
			 numberValue:10,
			 carList:[]
			}
		},
		components: {
			Back,
			uniNumberBox
		},
		onLoad() {
			
		},
		onShow() {
			this.getDataEvt()
		},
		methods: {
			change(value,i) {
				console.log(i)
				console.log(value)
				this.numberValue = value
				// this.addCartEvt(i.id,value)
				this.carList.forEach(v=>{
					if(v.id == i.id) {
						v.number = value
					}
				})
			},
			async getDataEvt() {
				let {data} = await this.$http.quest(this.$API.car.cartList, "get", {})
				this.carList = data
			    if(this.carList) {
					this.carList.forEach(v=>{
						this.$set(v,'active',true)
					})
				}
			},
			async addCartEvt(id) {
				let data = await this.$http.quest(this.$API.car.addCart, "get", {goods_id:id,number:1})
				uni.showToast({title:data.msg,icon:'none'})
			},
			async reduceCartEvt(id) {
				let data = await this.$http.quest(this.$API.car.reduceCart, "get", {goods_id:id,number:1})
				uni.showToast({title:data.msg,icon:'none'})
			},
			addEvt(e,id) {
				if(e == 'plus') {
					this.addCartEvt(id,1)
				} else {
					this.reduceCartEvt(id,1)
				}
				
			},
			async delCartEvt(id,number) {
				let ids = '';
				this.carList.forEach(v=>{
					ids += v.goods_id + ",";
				})
				let data = await this.$http.quest(this.$API.car.clearCart, "get", {goods_id:ids})
				uni.showToast({title:data.msg,icon:'none'})
			},
		}
	}
</script>

<style lang="less" scoped>
	page {
		background-color: #f1f1f1;
		.car {
			padding-bottom: 120rpx;
			.list {
				padding-top: 100rpx;
				.item {
					padding: 36rpx 28rpx 28px 30rpx;
				}
			}
			
			.bottom {
				height: 100rpx;
				padding: 0 30rpx 0 60rpx;
				bottom: calc(var(--window-bottom));
				.bottom-right {
					.btn {
						width: 130rpx;
						height: 60rpx;
						border-radius: 30rpx;
					}
				}
			}
			

		}

	}
</style>
