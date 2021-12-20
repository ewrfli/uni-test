<template>
	<view>
		<picker @change="bindPickerChange" :value="index" :range="array">
			<view class="picker">
				当前选择：{{array[index]}}
			</view>
		</picker>
		
		<radio-group class="radio-group" @change="radioChange">
			<label class="radio" v-for="(item, index) in items" :key="item.name">
				<radio :value="item.name" :checked="item.checked" /> {{item.value}}
			</label>
		</radio-group>
		
		<view>Original message: "{{ message }}"</view>
		<view>计算属性 reversed message: "{{ reversedMessage }}"</view>
		<input v-model="message" placeholder="edit me">
		
		 <view>fullName:{{ fullName }}</view>
		 <button type="default" @click="buttonClick()">Click this.fullName='John Doe'</button>
		 
		 <view>计算属性缓存 vs 方法: "{{ methodsReversedMessage() }}"</view>
		 
		 <view>
			 watch:
			 <input type="text" v-model="word" ref="watchInput">
		</view>
		
		<sonComponents :word.sync="word" ref="sonComponents" @click="clicksonComponents()"></sonComponents>
		<button type="default" @click="clicksonComponents()"> clicksonComponents</button>
	</view>
</template>

<script>
// import 	sonComponents from '../../components/sonComponents/sonComponents.vue'
	export default {
		// components:{ sonComponents },
		data() {
			return {
				word: 'wordAAAA',
				firstName: 'Foo',
				lastName: 'Bar',
				message: 'Hello',
				index: 0,
				array: ['A', 'B', 'C'],
				items: [{
					name: 'USA',
					value: '美国'
				},
				{
					name: 'CHN',
					value: '中国',
					checked: 'true'
				},
				{
					name: 'BRA',
					value: '巴西'
				},
				{
					name: 'JPN',
					value: '日本'
				},
				{
					name: 'ENG',
					value: '英国'
				},
				{
					name: 'TUR',
					value: '法国'
				}
			]
			};
		},
		watch: {
		            /* 使用watch来响应数据的变化 */
			word(newVal, oldVal) {
				console.log('最新值是：'+newVal,"原来的值是："+ oldVal);
			}
		},
		computed: {
			// 计算属性的 getter
			reversedMessage(){
			  return this.message.split('').reverse().join('')
			},
			fullName: {
				// getter
				get(){
					return this.firstName + ' ' + this.lastName
				},
				// setter
				set(newValue){
					var names = newValue.split(' ')
					this.firstName = names[0]
					this.lastName = names[names.length - 1]
				}
			}
		},
		methods: {
			bindPickerChange(e) {
				console.log(e)
			},
			radioChange(e) {
				console.log('radio发生change事件，携带value值为：', e.target.value)
			},
			buttonClick() {
				this.fullName = 'John Doe'  //// setter
			},
			methodsReversedMessage(){
				return this.message.split('').reverse().join('')
			},
			clicksonComponents(){
				console.log('this.$ref',this.$refs.sonComponents)
				this.$refs.watchInput.focus()
			}
		}
	}
</script>

<style lang="less">

</style>
