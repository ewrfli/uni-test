<template>
	<view class="content">
		
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<button @click="say('hi')">Say hi</button>
		<button @click="say('what')">Say what</button>
		<button @click="warn('Form cannot be submitted yet.', $event)">
		  Submit
		</button>
		
		 <input v-model="message" placeholder="edit me">
		 <text>Message is: {{ message }}</text>
		 
		 <navigator url="/pages/test/test" hover-class="navigator-hover">
		 	<button type="default">跳转到新页面</button>
		 </navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				message:""
			}
		},
		onLoad() {

		},
		methods: {
			say(message) {
				uni.showToast({
					title: message
				});
			},
			warn(message, event) {
				// 现在我们可以访问原生事件对象
				if (event) {
					//可访问 event.target等原生事件对象
					console.log('warn',event.target)
				}
				uni.showToast({
					title: message
				});
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 80rpx;
		width: 80rpx;
		margin-top: 80rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
