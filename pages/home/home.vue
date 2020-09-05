<template>
	<view class="home">
		<view class="status_bar " style="background-color: #fd6b23 !important;">
			<view class="top-view"></view>
		</view>
		<view class="title-fixed home-top" >
			<view class="flex f36 fff title">
				味在田畔
			</view>
			<view class="djcai search">
				<view class="flex">
					<image class="wh40 mr10" src="../../static/footer/tab001.png" mode=""></image>
					<text class="f26 fff">企业名称企业名称企业...</text>
				</view>
				<image class="wh30" src="../../static/footer/tab001.png" mode=""></image>
			</view>
			<image class="w100 bg-banner" src="../../static/footer/tab001.png" mode=""></image>
		</view>
		<view class="count pr ml45 mr45" style="z-index: 11;">
			<view class="flex">
				<swiper class="swiper-cont" :indicator-dots="indicatorDots" :autoplay="autoplay" :circular="true" :interval="interval" :duration="duration">
					<swiper-item class="swiper-box br20 mr20"  >
						<image class="wh100 br20" src="../../static/footer/tab001.png" mode=""></image>
					</swiper-item>
					<swiper-item class="swiper-box br20 mr20"  >
						<image class="wh100" src="../../static/footer/tab001.png" mode=""></image>
					</swiper-item>
					<swiper-item class="swiper-box br20 mr20"  >
						<image class="wh100" src="../../static/footer/tab001.png" mode=""></image>
					</swiper-item>
					<swiper-item class="swiper-box br20 mr20"  >
						<image class="wh100" src="../../static/footer/tab001.png" mode=""></image>
					</swiper-item>
				</swiper>
			</view>
			<view class="flex  mt40 mb40" >
				<navigator url="/pages/classify/classifyList" hover-class="none"  class="flex flex1 flex-column">
					<image class="wh88" src="../../static/footer/tab001.png" mode=""></image>
					<text class="f28 c333 mt25">鲜果礼盒</text>
				</navigator>
				<navigator url="/pages/home/integralShop" hover-class="none" class="flex flex1 flex-column">
					<image class="wh88" src="../../static/footer/tab001.png" mode=""></image>
					<text class="f28 c333 mt25">积分商城</text>
				</navigator>
				<view  @click="open" class="flex flex1 flex-column">
					<image class="wh88" src="../../static/footer/tab001.png" mode=""></image>
					<text class="f28 c333 mt25">签到</text>
				</view>
			</view>
			<view class="flex  mb30">
				<image class="wh30" src="../../static/footer/tab001.png" mode=""></image>
				<text class="f34 bold ml20 mr20">热销推荐</text>
				<image class="wh30" src="../../static/footer/tab001.png" mode=""></image>
			</view>
			<view class="list">
				<view class="br20 bgcfff shadow mb30 pb40">
					<image class="shop-img" src="../../static/footer/tab001.png" mode=""></image>
					<view class="djcsb pl30 pr30">
						<text class="f34 c333 bold">陕西眉县绿心猕猴桃礼盒装</text>
						<text class="cff1 f34">￥50.00</text>
					</view>
					<view class="djcsb pl30 pr30 mt20">
						<text class="f28 c666 " style="width: 460rpx;">陕西眉县绿心猕猴桃礼陕西眉县绿心猕猴桃盒装</text>
						<text class="ccc f26">销量:20</text>
					</view>
				</view>
				
			</view>
		</view>
		<unipopup ref='shade' type="center" >
			<view class="shade-box  br20 pr flex flex-column " >
				<image class="wh100 pb close" src="../../static/footer/tab001.png" mode=""></image>
				<view class="f34 c333 cff1" style="font-size: 150rpx;">
					+5
				</view>
				<view class="f30 flex bgcff8 br40 btn fff mt70">
					我知道了
				</view>
			</view>
		</unipopup>
	</view>
</template>
<script>	
import unipopup from '@/components/uni-popup/uni-popup.vue';
export default {
	data() {
		return {
			indicatorDots: true,
			autoplay: true,
			interval: 3000,
			duration: 500,
		}
	},
	components: {
		unipopup
	},
	onShow() {
		
	},
	methods:{
		open() {
			this.$refs.shade.open()
		}
	}
}
</script>
<style lang="less" scoped>
	.home {
		.home-top {
			background-color: #fd6b23;
			.title {
				height: 96rpx;
			}
			.search {
				padding:20rpx 50rpx;
			}
			.bg-banner {
				height: 500rpx;
			}
		}
		.count {
			padding-top: 300rpx;
			.swiper-cont {
				width: 660rpx;
				height: 500rpx;
			}
		}
		.list {
			.shop-img {
				height: 360rpx;
				width: 100%;
				border: 20rpx 20rpx 0 0 ;
			}
		}
		.shade-box {
			width: 600rpx;
			height: 600rpx;
			z-index: 222;
			.btn {
				width: 300rpx;
				height: 80rpx;
				border-radius: 40rpx;
			}
			
		}
	}
</style>
	