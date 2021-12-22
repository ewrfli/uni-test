<template>
	<view>
		<text>vuex用户名：{{username}}</text>
		<view>vuex年龄：{{age}}</view>
		<button @click="addCount">addCount</button>
		<button @click="add">add</button>
		<br>
		<sonComponents :word.sync="word"></sonComponents>
		
		<br>
		<text>todo</text>
		<view v-for="(item,index) in todos">
			<view>{{item.id}}</view>
			<view>{{item.text}}</view>
			<view>{{item.done}}</view>
			<view>{{item}}</view>
		</view>
		
		<br>
		<view>doneTodosCount:{{doneTodosCount}}</view>
		
		<br>
		
		<view>action数量：{{count}}</view>
		<button @click="proAddCountAction({amount: 5})">增加</button>

	</view>
</template>

<script>
import store from '@/store/index.js';//需要引入store	
import { mapState } from 'vuex'//引入mapState
import {mapGetters} from 'vuex' //引入mapGetters
import { mapMutations } from 'vuex'//引入mapMutations
import { mapActions } from 'vuex' //通过 mapActions 辅助函数分发。
	export default {
		data() {
			return {
				word:'word',
				firstName:"Li"
			}
		},
		// computed: {
		// 	username() {
		// 		// return store.state.username 
		// 		return this.$store.state.username 
		// 	},
		// },
		//mapState
		// computed: mapState({
		// 	// 从state中拿到数据 箭头函数可使代码更简练
		// 	username: state => state.username,
		// 	age: state => state.age,
		
		//使用对象展开运算符将此对象混入到外部对象中
		// 	...mapState({
		// 		username: state => state.username,
		// 		age: state => state.age,
		// 	})
		// // }), 
		
		//...mapState
		 computed: {
			...mapState({
				username: function (state) {
					return this.firstName + ' ' +  state.username 
				},
				age: state => state.age,
				todos() {
					console.log('store.getters.doneTodosCount:',store.getters.doneTodosCount)
					return this.$store.getters.getTodoById(2) 
					// return store.getters.doneTodos
				}
			}),
			
			// 使用对象展开运算符将 getter 混入 computed 对象中
			...mapGetters([
				'doneTodos',
				'doneTodosCount',
				// ...
				// 把 `this.doneCount` 映射为 `this.$store.getters.doneTodosCount`
				// doneCount: 'doneTodosCount'
			]),
			//action
			count() {
				return this.$store.state.count
			}
			
		},

		methods: {
			addCount() {
				// store.commit('add')
				// store.commit('add', 5)//每次累加 5
				
				// store.commit('add', { num: 10 })
				
				//整个对象都作为载荷传给 mutation 函数
				// store.commit({
				// 	type: 'add',
				// 	num: 6
				// })
				
			},
			...mapMutations(['add']),//对象展开运算符直接拿到vuexmutations里add
			//action
			// addAction () {
			// 	store.dispatch('addCountAction')
			// },
			
			//  addAction () {
			// 	// 以载荷形式分发
			// 	store.dispatch('addCountAction', {amount: 10})
			// }
			
			addAction () {
				// 以对象形式分发
				store.dispatch({
					type: 'addCountAction',
					amount: 5
				})
			},

			// 将 `this.addCountAction()` 映射为 `this.$store.dispatch('addCountAction')`
			...mapActions([  //@click="addCountAction"  也支持传入参数（载荷）： 支持传递一个对象：
 				'addCountAction', 
			]),

			//组合action
			async proAddCountAction(){
				// store.dispatch('actionA',{amount: 10})
				// .then(() => {
				// 	store.dispatch('actionB',{amount: 10})
				// })
				// .then(() => {
				// 	store.dispatch('actionC',{amount: 10})
				// })

				await store.dispatch('actionA',{amount: 10})
				await store.dispatch('actionB',{amount: 10})
				await store.dispatch('actionC',{amount: 10})
			}
			
		}
	}
</script>

<style>

</style>
