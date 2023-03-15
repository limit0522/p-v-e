import {createStore} from 'vuex'

export default createStore({
    state() {
        //存储值 其他组件使用useStore().state.count获取
        return {
            count: 0
        }
    },
    mutations: {
        //修改值 其他组件使用useStore().commit('setState',10)
        setState(state,count){
            state.count = count;
        }
    },
    getters: {
        //计算属性，通过useStore().getters.doubleCount获取
        doubleCount(state) {
            return state.count *2
        }
    },
    actions: {
        //异步任务，不会改变state，通过useStore().dispatch('doubleCount')使用
        doubleCount(context) {
            context.commit("doubleCount");
        }
    },
    modules: {
        //store的下级store，方便大型项目复杂数据管理。
    }
})