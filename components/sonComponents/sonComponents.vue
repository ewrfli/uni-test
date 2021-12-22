<template>
	<view class="sonComponents">
		sonComponents
		<view>
			父组件传来的props：{{normalizedSize}}
			<input type="text" v-model="word">
		</view>
		<text>vuex用户名：{{username}}</text> <br>
		<text>vuex age：{{age}}</text>
	</view>
</template>

<script>
	export default {
		// props:{
		// 	word:{
		// 		type: String,
		// 		default:null
		// 	}
		// },
		props: ['word'],
		name:"sonComponents",
		data() {
			return {
				
			};
		},
		computed: {
			normalizedSize: function () {
				return this.word.toLowerCase()
			},
			username() { //组件使用vuex
				return this.$store.state.username 
			},
			age() { //组件使用vuex
				return this.$store.state.age 
			}
			//在组件中使用 this.$store.dispatch('xxx') 分发 action
		}
	}
</script>

<style>
.sonComponents{
	width: 500rpx;
	height: 350rpx;
	border: #007AFF solid 1rpx;
}
</style>
