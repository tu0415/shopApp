<template>
	<view class="addRess h100  bgcfff ">
		<view class="status_bar " style="z-index: 20;">
			<view class="top-view bgcf1f1"></view>
		</view>
		<view class=" bgcfff">
			<Title :txt="'添加新地址'"></Title>
		</view>
		<view class="list ml30 mr30">
			<view class="bde5e5 daic item">
				<text class="f28 c333">收货人</text>
				<input type="text" value="" v-model="name" placeholder-class="placeholder-class" placeholder="请输入收货人姓名" />
			</view>
			<view class="bde5e5 daic item">
				<text class="f28 c333">联系电话</text>
				<input type="number" value="" v-model="phone" placeholder-class="placeholder-class" placeholder="请输入联系电话" />
			</view>
			<view class="bde5e5 djcai item">
				<view class="daic">
					<text class="f28 c333">所在地</text>
					<input type="text" value="" v-model="address" placeholder-class="placeholder-class" placeholder="请输入收货人姓名" />
				</view>
				<image @click="popup_bottom()" class="wh40" src="../../static/me/into@3x.png" mode=""></image>
			</view>
			<view class="bde5e5 item">
				<input class="h100" type="text" value="" v-model="addressDetail" placeholder-class="placeholder-class" placeholder="输入详细地址、门牌号、小区..." />
			</view>
		<!-- 	<view class="djcai set mt30 mb60">
				<text>设为默认</text>
				<switch class="section-right" color="red" :checked="checked" @change="switchChange"/>
			</view> -->
			<view class="mt70">
				<button class="bgcff3 br40 fff f34" type="default" @click="addRessEvt">添加</button>
			</view>
		</view>
		<linkAddress ref="linkAddress" :height="height" @confirmCallback="confirmCallback()">
		</linkAddress>

	</view>
</template>
<script>
	import Title from "@/components/title.vue"
	import linkAddress from '@/components/xuan-linkAddress/xuan-linkAddress.vue'
	import { mapState } from 'vuex';
	export default {
		data() {
			return {
				addressDetail: '',
				height: '500px',
				checked:false,
				address:'',
				phone:'',
				name:''
			}
		},
		components: {
			Title,
			linkAddress
		},
		 computed: {
		        ...mapState(['user_address'])
		    },
		onShow() {
		
		},
		methods: {
			switchChange(e) {
				console.log(e)
			},
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
				let ads = this.$store.state.user_address
				this.address = ads.province + ads.city + ads.district;
			},
			async addRessEvt() {
				let parameter = {
					province:this.user_address.province,
					city:this.user_address.city,
					area:this.user_address.district,
					phone:this.phone,
					name:this.name,
					address:this.addressDetail,
				}
				let {data} = await this.$http.quest(this.$API.car.createAddress, "get", parameter)
				uni.showToast({title:data.msg,icon:'none'})
				setTimeout(() => {uni.navigateTo({url: "/pages/me/ressList"})}, 1000)
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
