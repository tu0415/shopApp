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
			<view class="bgcfff br20 item mt20 ml30 mr30 daic">
				<image class="wh36 br20 mr20" src="../../static/footer/tab001.png" mode=""></image>
				<image class="wh160 br20 mr30" src="../../static/footer/tab001.png" mode=""></image>
				<view class="flex1">
					<view class="f32 c333">
						南非进口红西柚
					</view>
					<view class="djcai mt20 mb20">
						<text class="f28 cff1">￥58.00</text>
						<text class="f26 c999">X1</text>
					</view>
					<view class="">
						<view class="example-body dflex jcfe">
							<uni-number-box :disabled="false" :value="numberValue" @change="change" />
						</view>
					</view>
				</view>
			</view>
			<view class="bgcfff br20 item mt20 ml30 mr30 daic">
				<image class="wh36 br20 mr20" src="../../static/footer/tab001.png" mode=""></image>
				<image class="wh160 br20 mr30" src="../../static/footer/tab001.png" mode=""></image>
				<view class="flex1">
					<view class="f32 c333">
						南非进口红西柚
					</view>
					<view class="djcai mt20 mb20">
						<text class="f28 cff1">￥58.00</text>
						<text class="f26 c999">X1</text>
					</view>
					<view class="">
						<view class="example-body dflex jcfe">
							<uni-number-box :disabled="false" :value="numberValue" @change="change" />
						</view>
					</view>
				</view>
			</view>
			<view class="bgcfff br20 item mt20 ml30 mr30 daic">
				<image class="wh36 br20 mr20" src="../../static/footer/tab001.png" mode=""></image>
				<image class="wh160 br20 mr30" src="../../static/footer/tab001.png" mode=""></image>
				<view class="flex1">
					<view class="f32 c333">
						南非进口红西柚
					</view>
					<view class="djcai mt20 mb20">
						<text class="f28 cff1">￥58.00</text>
						<text class="f26 c999">X1</text>
					</view>
					<view class="">
						<view class="example-body dflex jcfe">
							<uni-number-box :disabled="false" :value="numberValue" @change="change" />
						</view>
					</view>
				</view>
			</view>
			<view class="bgcfff br20 item mt20 ml30 mr30 daic">
				<image class="wh36 br20 mr20" src="../../static/footer/tab001.png" mode=""></image>
				<image class="wh160 br20 mr30" src="../../static/footer/tab001.png" mode=""></image>
				<view class="flex1">
					<view class="f32 c333">
						南非进口红西柚
					</view>
					<view class="djcai mt20 mb20">
						<text class="f28 cff1">￥58.00</text>
						<text class="f26 c999">X1</text>
					</view>
					<view class="">
						<view class="example-body dflex jcfe">
							<uni-number-box :disabled="false" :value="numberValue" @change="change" />
						</view>
					</view>
				</view>
			</view>
			<view class="bgcfff br20 item mt20 ml30 mr30 daic">
				<image class="wh36 br20 mr20" src="../../static/footer/tab001.png" mode=""></image>
				<image class="wh160 br20 mr30" src="../../static/footer/tab001.png" mode=""></image>
				<view class="flex1">
					<view class="f32 c333">
						南非进口红西柚
					</view>
					<view class="djcai mt20 mb20">
						<text class="f28 cff1">￥58.00</text>
						<text class="f26 c999">X1</text>
					</view>
					<view class="">
						<view class="example-body dflex jcfe">
							<uni-number-box :disabled="false" :value="numberValue" @change="change" />
						</view>
					</view>
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
				<view class="bde5 btn flex c333" type="default">删除</view>
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
			 numberValue:10
			}
		},
		components: {
			Back,
			uniNumberBox
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
