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
		]
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
		add(state) {
			// 变更状态
			state.age += 2
		}
		// 传入参数
		// add(state, n) {
		// 	state.age += n
		// }
		
		//mutation 传参（载荷）可以也可以传递一个对象
		// add(state, payload) {
		// 	state.age += payload.num
		// }
	}

})
export default store