// 引入defineStore用于创建store
import { defineStore } from 'pinia'

// 定义并暴露一个store
export const useTalkStore = defineStore('talk', {
    // 动作
    actions: {},
    // 状态
    state() {
        return {
            talkList: [
                { id: 'yuysada01', content: '你今天有点怪，哪里怪？怪好看的！' },
                { id: 'yuysada02', content: '草莓、蓝莓、蔓越莓，你想我了没？' },
                { id: 'yuysada03', content: '心里给你留了一块地，我的死心塌地' }
            ]
        }
    },
    // 计算
    getters: {}
})