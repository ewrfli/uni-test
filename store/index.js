import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);//vue的插件机制

//Vuex.Store 构造器选项
const store = new Vuex.Store({
    state:{//存放状态
        "username":"vuexxxx",
        "age":18,
		todos: [
			{
				id: 1,
				text: '我是内容一',
				done: true
			},
			{
				id: 2,
				text: '我是内容一1',
				done: true
			},
			{
				id: 3,
				text: '我是内容二',
				done: false
			}
		],
		count: 10
    },
	 getters: {
		doneTodos: state => {
			return state.todos.filter(todo => todo.done)
		},
		doneTodosCount: (state, getters) => {
			//state ：可以访问数据
			//getters：访问其他函数，等同于 store.getters
			return getters.doneTodos.length
		},
		getTodoById: (state) => (id) => {
			return state.todos.find(todo => todo.id == id)
		}
	},
	mutations: {
		// add(state) {
		// 	// 变更状态
		// 	state.age += 2;
			
		// 	//action
		// 	state.count +=1;
		// }
		// 传入参数
		// add(state, n) {
		// 	state.age += n
		// }
		
		//mutation 传参（载荷）可以也可以传递一个对象
		// add(state, payload) {
		// 	state.age += payload.num
		// }
		
		//
		add(state, payload) {
			state.count += payload.amount
		} 
	},
	actions:{
		// 1.actions 通过 store.dispatch 方法触发。
		// addCountAction (context) {
		// 	context.commit('add')
		// }
		
		//参数解构
		// addCountAction ({commit}) {
		// 	commit('add')
		// }
		
		// actions 支持以载荷形式分发:
		// addCountAction (context , payload) {
		// 	console.log('context, payload',context,payload) //{type: 'addCountAction', amount: 5}
		// 	// context.commit('add',payload)

		// 	//在执行累加的时候，会等待两秒才执行
		// 	setTimeout(function () {
		// 		context.commit('add',payload)
		// 	}, 1000)
		// },


		//Promise
		actionA (context , payload) {
			return new Promise((resolve, reject) => {
					setTimeout(() => {
						console.log('actionA, payload',payload)
						context.commit('add',payload)
						resolve()
					}, 1000)
			})
		},	

		actionB (context, payload) {
				return new Promise((resolve, reject) => {
					setTimeout(() => {
						console.log('actionB, payload',payload)
						context.commit('add',payload)
						resolve()
					}, 500)
			})
		},

		actionC (context, payload) {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					console.log('actionC, payload',payload)
					context.commit('add',payload)
					resolve()
				}, 300)
		})
	}

		
	}

})
export default store