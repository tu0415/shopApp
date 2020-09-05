<template>
	<view class="about bgcfff h100">
		<view class="status_bar bgcfff">
			<view class="top-view"></view>
		</view>
		<view class="top-title ">
			<Back :txt="'关于我们'">
				<image @click="back" class="wh30 pb back" slot="left"  src="../../static/footer/tab001.png" mode=""></image>
			</Back>
		</view>
		<view class="ml30 mr30 f32">
			<view class="txt">市场经济的飞速发展促使人们日常工作生活的节奏明显增快,在这一时代背景下人们对日常工作生活的便捷性提出了更高的要求,而互联网信息技术的飞速发展则为这一要求的实现提供了有利的条件。现在果鲜电商层出不穷，然而专门针对企业果鲜采购的平台很少。我们要做一款专注于企业礼盒果鲜采购的平台，平台主要分为两个区。礼品区和果类区。礼盒区主要用于平台合伙人采购礼品，企业员工也可进行采购（团购），果类区主要是企业员工或者平台合伙人采购果鲜，可单件购买也可发起拼团。    </view>
			<view class="mt50">客服微信:Liumomol</view>
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
			back() {
				uni.navigateBack(1)
			}
		}
	}
</script>

<style lang="less" scoped>
	page {
		background-color: #FFF;
		height: 100%;
	}

	.about {
		.back {
			top: 32rpx;
			left: 32rpx;
		}
		.txt {
			line-height: 50rpx;
			text-indent:2em
		}
	}
</style>
