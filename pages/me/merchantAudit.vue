<template>
	<view class="merchantAudit h100  bgcf1f1 ">
		<view class="status_bar">
			<view class="top-view"></view>
		</view>
		<Title :txt="'产品入驻'"></Title>
		<view class="ml30 mr30 mt20">
			<view class="f24 c666">请先填写产品入驻相关资料，平台审核通过后会电话联系您。</view>
			<view class="daic input-box br20 bgcfff mb20 mt20">
				<text class="txt">姓名</text>
				<input type="text" class="flex1" placeholder-class="placeholder-style" placeholder="请输入您的姓名">
			</view>
			<view class="daic input-box br20 bgcfff mb20 mt20">
				<text class="txt">身份证号</text>
				<input type="text" class="flex1" placeholder-class="placeholder-style" placeholder="请输入身份证号">
			</view>
			<view class="daic input-box br20 bgcfff mb20 mt20">
				<text class="txt">产品名称</text>
				<input type="text" class="flex1" placeholder-class="placeholder-style" placeholder="请输入产品名称">
			</view>

			<view class="daic input-box br20 bgcfff mb20 mt20">
				<text class="txt">联系方式</text>
				<input type="text" class="flex1" placeholder-class="placeholder-style" placeholder="请输入联系方式">
			</view>

			<view class="daic input-box br20 bgcfff mb20 mt20">
				<text class="txt">请选择地址</text>
				<input type="text" class="flex1" placeholder-class="placeholder-style" placeholder="请选择地址">
				<image class="wh30" @click="popup_bottom()" src="../../static/footer/tab001.png" mode=""></image>
			</view>
			<view class="daic input-box br20 bgcfff mb20 mt20">
				<text class="txt">详细地址</text>
				<input type="text" class="flex1" placeholder-class="placeholder-style" placeholder="请输入详细地址">
			</view>
			<view class="phone">
				<view>上传照片</view>
				<view class="daic mt20 mb10">
					<view class="mr20">
						<view class="bgcfff br20 img-box pr" @click="uploadImgEvt">
							<image  class="wh88 mr30 pb icon" src="/static/images/add.png"></image>
							<image class="wh100 h100 br20 mr30 pb icon" src=""></image>

						</view>
						<view class="f26 flex c999 mt10">上传身份证正面照</view>
					</view>
					<view class="">
						<view class="bgcfff br20 img-box pr">
							<image class="wh88 mr30 pb icon" src=""></image>
							<image class="wh100 h100 br20 mr30 pb icon" src=""></image>
						</view>
						<view class="f26 flex c999 mt10">上传身份证正面照</view>
					</view>

				</view>
			</view>
			<view class="flex">
				<button class="bgcff3 flex fff f34 btn">提交申请</button>
			</view>
			<linkAddress ref="linkAddress" :height="height" @confirmCallback="confirmCallback()">
			</linkAddress>
		</view>
	</view>
</template>
<script>
import Title from "@/components/title.vue"
import linkAddress from '@/components/xuan-linkAddress/xuan-linkAddress.vue'
import { uploadImg, uploadFile } from '../../utils/common';
export default {
	data() {
		return {
			height: '500px',	
			address:''
		}
	},
	components:{
		Title,
		linkAddress
	},
	methods:{
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
			let ads = this.$store.state.user_address;
			this.address = ads.province + ads.city + ads.district;
			console.log(this.address)
		},
		async uploadImgEvt() {
			let res = await uploadImg()
			console.log(res)
		}
	}
}
</script>

<style lang="less" scoped>
	page {
		height: 100%;

		.merchantAudit {
			.input-box {
				padding: 30rpx 20rpx;
				height: 90rpx;

				.txt {
					width: 150rpx;
				}
			}

			.phone {
				.img-box {
					width: 300rpx;
					height: 200rpx;

					.uploading-input {
						width: 100%;
						height: 100%;
					}
				}

				.icon {
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
				}
			}

			.btn {
				width: 660rpx;
				border-radius: 40rpx;
				height: 80rpx;
				margin-top: 50rpx;
			}
		}
	}
</style>
