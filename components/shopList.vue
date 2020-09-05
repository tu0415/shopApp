<template>
	<view class="list dflex jc-space-between flex-wrap mlr30">
	    <navigator  v-for="item in classData" url="/pages/home/shopDetail"   hover-class="none" class="bgcfff br20 pb20 mb20" style="">
	        <image class="wh336" style="border-radius: 20rpx 20rpx 0 0;" src="../static/footer/tab001.png"></image>
	        <view class="f28 c333 pl30 mt20 mb20">{{item.goodsName}}</view>
	        <view class="pl30 djcai pl30 pr30">
	            <view> <text class="f28 ff1D">￥{{item.goodsPrice}}</text><text class="f24 c999 ml15">{{item.sold}}人买过</text></view>
	            <image class="wh40" src="/static/images/jia@2x.png"></image>
	        </view>
	    </navigator>
	</view>
</template>

<script>
		export default {
			props:{
			    classData:{
					type:Array,
					
				}
			},
			onShow() {
			   
			},
			methods: {
			   
			}
		}
</script>

<style lang="less" scoped>
page {
    height: 100%;
}
    .list {
       
    }
</style>
