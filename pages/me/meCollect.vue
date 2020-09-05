<template>
	<view class="meCollect h100  bgcf1f1 ">
		<view class="status_bar " style="z-index: 20;">
			<view class="top-view bgcf1f1"></view>
		</view>
		<view class="title-fixed bgcf1f1">
			<Title :txt="'我的收藏'"></Title>
			<view class="tab flex f28 mt10 c333 djcai ml30 mr30">
				<text>共4件</text>
				<text>完成</text>
				<!-- <text>完成</text> -->
			</view>
		</view>
		<view class="list ml30 mr30">
			<view class="br20 bgcfff list-item daic">
				<image class="wh36 mr30" src="../../static/footer/tab001.png" mode=""></image>
				<image class="wh160 br20 mr30" src="../../static/footer/tab001.png" mode=""></image>
				<view class="f28 flex-column dflex">
					<text class="c333">南非进口红西柚</text>
					<text class="cff1 mt40">￥58.00</text>
				</view>
			</view>
			<view class="br20 bgcfff list-item daic">
				<image class="wh36 mr30" src="../../static/footer/tab001.png" mode=""></image>
				<image class="wh160 br20 mr30" src="../../static/footer/tab001.png" mode=""></image>
				<view class="f28 flex-column dflex">
					<text class="c333">南非进口红西柚</text>
					<text class="cff1 mt40">￥58.00</text>
				</view>
			</view>
			<view class="br20 bgcfff list-item daic">
				<image class="wh36 mr30" src="../../static/footer/tab001.png" mode=""></image>
				<image class="wh160 br20 mr30" src="../../static/footer/tab001.png" mode=""></image>
				<view class="f28 flex-column dflex">
					<text class="c333">南非进口红西柚</text>
					<text class="cff1 mt40">￥58.00</text>
				</view>
			</view>
			<view class="br20 bgcfff list-item daic">
				<image class="wh36 mr30" src="../../static/footer/tab001.png" mode=""></image>
				<image class="wh160 br20 mr30" src="../../static/footer/tab001.png" mode=""></image>
				<view class="f28 flex-column dflex">
					<text class="c333">南非进口红西柚</text>
					<text class="cff1 mt40">￥58.00</text>
				</view>
			</view>
			
			<view class="br20 bgcfff list-item daic">
				<image class="wh36 mr30" src="../../static/footer/tab001.png" mode=""></image>
				<image class="wh160 br20 mr30" src="../../static/footer/tab001.png" mode=""></image>
				<view class="f28 flex-column dflex">
					<text class="c333">南非进口红西柚</text>
					<text class="cff1 mt40">￥58.00</text>
				</view>
			</view>
			
			<view class="br20 bgcfff list-item daic">
				<image class="wh36 mr30" src="../../static/footer/tab001.png" mode=""></image>
				<image class="wh160 br20 mr30" src="../../static/footer/tab001.png" mode=""></image>
				<view class="f28 flex-column dflex">
					<text class="c333">南非进口红西柚</text>
					<text class="cff1 mt40">￥58.00</text>
				</view>
			</view><view class="br20 bgcfff list-item daic">
				<image class="wh36 mr30" src="../../static/footer/tab001.png" mode=""></image>
				<image class="wh160 br20 mr30" src="../../static/footer/tab001.png" mode=""></image>
				<view class="f28 flex-column dflex">
					<text class="c333">南非进口红西柚</text>
					<text class="cff1 mt40">￥58.00</text>
				</view>
			</view>
			<view class="br20 bgcfff list-item daic">
				<image class="wh36 mr30" src="../../static/footer/tab001.png" mode=""></image>
				<image class="wh160 br20 mr30" src="../../static/footer/tab001.png" mode=""></image>
				<view class="f28 flex-column dflex">
					<text class="c333">南非进口红西柚</text>
					<text class="cff1 mt40">￥58.00</text>
				</view>
			</view>
		</view>
		<view class="position-fixed bottom bgcfff djcai">
			<view class="bottom-left flex">
				<image class="wh36 mr20" src="../../static/footer/tab001.png" mode=""></image>
				<text class="f28 c333">全选</text>
			</view>
			<view class="f28 c333 bottom-right djcai">
				<view class="f28 c333 mr20">已选择<text class="cff1">1</text>
					件宝贝
				</view>
				<bottom class="bde5 btn flex ">删除</bottom>
			</view>
		</view>

	</view>
</template>
<script>
	import Title from "@/components/title.vue"

	export default {
		data() {
			return {

			}
		},
		components: {
			Title,

		},
		methods: {

		}
	}
</script>

<style lang="less" scoped>
	page {
		height: 100%;
		background-color: #F1F1F1;

		.meCollect {
			.list {
				padding-top: 170rpx;
				padding-bottom: 120rpx;
				.list-item {
					padding: 20rpx 20rpx 20rpx 30rpx;
				}
			}

			.bottom {
				height: 100rpx;
				padding: 0 30rpx 0 60rpx;
				bottom: 0;
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
