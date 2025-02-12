<template>
    <Person ref="ren"></Person>
    <button @click="getPersonBean">点击获取Person实例</button>
    <Live></Live>
    <UseHooks></UseHooks>
    <Rounter></Rounter>
    <UseProps></UseProps>
    <UsePinia></UsePinia>
    <UseMessage></UseMessage>

</template>

<script lang="ts" setup name="App">
import Person from './components/Person.vue'
import Live from './components/Live.vue'
import UseHooks from './components/UseHooks.vue'
import Rounter from './components/Router.vue'
import UseProps from './components/UseProps.vue'
import UsePinia from './components/UsePinia.vue'
import UseMessage from './components/Message.vue'
import { ref } from 'vue'
import { reactive } from 'vue'
import { type Persons } from './types'

let persons = reactive<Persons>([
    { id: 'e98219e12', name: '张三', age: 18 },
    { id: 'e98219e13', name: '李四', age: 19 },
    { id: 'e98219e14', name: '王五', age: 20 }
])
let ren = ref()
function getPersonBean() {
    console.log(ren.value.person.name) //子组件必须使用defineExpose
}


</script>