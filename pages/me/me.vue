<template>
	<view class="me bgcf1f1">
		<view class="status_bar bgcfff">
			<view class="top-view"></view>
		</view>
		<view class="top-title ">
			<Back :txt="'我的'"></Back>
		</view>
		
			<view class="user-cont daic flex-column">
				<image class="wh100px br50" src="../../static/footer/tab001.png" mode=""></image>
				<view class="f34 fff mt30 mb20">起个破名太费劲啦</view>
				<view class="f26 fff">积分：500</view>
				<view class="flex f36 w100 mt60" @click="goDetail">
					<view class="flex flex1">
						<image class="wh30 mr30" src="../../static/footer/tab001.png" mode=""></image>
						<text class="c6E4">商家入驻</text>
					</view>
					<view class="flex flex1">
						<image class="wh30 mr30" src="../../static/footer/tab001.png" mode=""></image>
						<text class="c6E4">商家入驻</text>
					</view>
				</view>
			</view>
			<view class="br20 bgcfff ml30 mr30 flex mt30 mb20" style="padding: 45rpx 10rpx;">
				<navigator url="/pages/me/allOrder?type=1" hover-class="none" class="f30 c333 flex flex-column flex1">
					<image class="wh45" src="../../static/footer/tab001.png" mode=""></image>
					<text class="mt30">全部订单</text>
				</navigator>
				<view class="f30 c333 flex flex-column flex1">
					<image class="wh45" src="../../static/footer/tab001.png" mode=""></image>
					<text class="mt30">待付款</text>
				</view>
				<view class="f30 c333 flex flex-column flex1">
					<image class="wh45" src="../../static/footer/tab001.png" mode=""></image>
					<text class="mt30">待发货</text>
				</view>
				<view class="f30 c333 flex flex-column flex1">
					<image class="wh45" src="../../static/footer/tab001.png" mode=""></image>
					<text class="mt30">待收货</text>
				</view>
				<view class="f30 c333 flex flex-column flex1">
					<image class="wh45" src="../../static/footer/tab001.png" mode=""></image>
					<text class="mt30">已完成</text>
				</view>
			</view>
			<view class="br20 bgcfff ml30 mr30 flex flex-wrap" style="padding: 45rpx 10rpx;">
				<navigator url="/pages/me/meCollect" hover-class="none"  class="f30 c333 flex flex-column w33 mb60">
					<image class="wh45" src="../../static/footer/tab001.png" mode=""></image>
					<text class="mt30">我的收藏</text>
				</navigator>
				<navigator url="/pages/me/about" hover-class="none" class="f30 c333 flex flex-column w33 mb60">
					<image class="wh45" src="../../static/footer/tab001.png" mode=""></image>
					<text class="mt30">关于我们</text>
				</navigator>
				<navigator url="/pages/me/ressList" hover-class="none" class="f30 c333 flex flex-column w33 mb60">
					<image class="wh45" src="../../static/footer/tab001.png" mode=""></image>
					<text class="mt30">收货地址</text>
				</navigator>
				<navigator url="/pages/me/feedback" hover-class="none" class="f30 c333 flex flex-column w33">
					<image class="wh45" src="../../static/footer/tab001.png" mode=""></image>
					<text class="mt30">用户反馈</text>
				</navigator>
				<navigator url="/pages/me/notice" hover-class="none" class="f30 c333 flex flex-column w33">
					<image class="wh45" src="../../static/footer/tab001.png" mode=""></image>
					<text class="mt30">系统公告</text>
				</navigator>
				<view class="f30 c333 flex flex-column w33">
					<image class="wh45" src="../../static/footer/tab001.png" mode=""></image>
					<text class="mt30">联系客服</text>
				</view>
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
			Back
		},
		onShow() {
			
		},
		onLoad() {

		},
		methods: {
			goDetail() {
				uni.navigateTo({
					url:"/pages/me/merchantAudit"
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	page {
		background-color: #F1F1F1;
	}

	.me {
		.user-cont {
			background: url(../../static/home/wd_bg@2x.png) no-repeat;
			background-size: 100% 100%;
			height: 400rpx;
			padding-top: 35rpx;
		}
	}
</style>
