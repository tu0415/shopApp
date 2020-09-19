<template>
	<view class="addRess h100  bgcf1f1 ">
		<view class="status_bar " style="z-index: 20;">
			<view class="top-view bgcf1f1"></view>
		</view>
		<view class="title-fixed bgcf1f1">
			<Title :txt="'收货地址'"></Title>
			
		</view>
		<view class="list ml30 mr30">
			<view class="br20 bgcfff list-item djcai mb20" v-for="(item,i) in ressList" :key='i'>
				<view class="address flex1 mr30" style="width: 500rpx;" >
					<view class="">
						<text class="f34 c333 mr15">{{item.name}}</text>
						<text class="f28 c999">{{item.phone}}</text>
					</view>
					<view class="f25 mt30" >{{item.province}}{{item.city}}{{item.area}}</view>
				</view>
				<view class="dflex alfe flex-column">
					<text class="f28 cff1" v-if="item.default == 1">默认</text>
					<text class="f28 c333" @click="settingAddress(item.id)" v-else>设为默认</text>
					<image class="wh40 mt20" src="../../static/home/collect-select.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="position-fixed bottom bgcf1f1 djcai">
			<navigator url="/pages/me/addRess" hover-class="none"  class="bgcff3 flex w100 btn f34 fff">添加新地址</navigator>
		</view>

	</view>
</template>
<script>
	import Title from "@/components/title.vue"

	export default {
		data() {
			return {
				ressList:[]
			}
		},
		components: {
			Title,

		},
		onShow() {
			this.getRessList()
		},
		methods: {
			async getRessList() {
				let {data} = await this.$http.quest(this.$API.car.addressList, "get", {})
				this.ressList = data
				
			},
			async settingAddress(id) {
				let data = await this.$http.quest(this.$API.car.setDefault, "get", {id})
				uni.showToast({title:data.msg,icon:'none'})
				this.getRessList()
			}
		}
	}
</script>

<style lang="less" scoped>
	page {
		height: 100%;
		background-color: #F1F1F1;

		.addRess {
			.list {
				padding-top: 120rpx;
				padding-bottom: 120rpx;
				.list-item {
					padding: 20rpx ;
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
