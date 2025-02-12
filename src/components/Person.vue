<template>
    <div class="person">
        <h2 ref="domTitle">姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button @click="changeName">改变名字</button>
        <button @click="addAge">增加年龄</button>
    </div>

</template>

<script lang="ts" setup name="Test1">
import { reactive, ref, watch, watchEffect } from 'vue'
let domTitle =ref()

let person = reactive({
    name:"花卷",
    age:12,
    like:{
        flow:12,
        fe:4432,
        data:{
            da:11,
            fef:54
        }
    }

})


function showLog() {
    console.log(1)
}
function changeName() {
    person.name=666
}
function addAge(){
    console.log('ref 的属性用法：',domTitle.value)
    person.age+=100
}

watch(()=>person.like.data.da,(newValue,oldValue)=>{
    console.log('person.car变化了',newValue,oldValue)
},{deep:true})
watchEffect(()=>{
    if(person.age>500){
        console.log('我要开花')
    }
})

defineExpose({person})//父组件可以通过ref获得该值
</script>
<!-- scoped为局部样式 与其他组件的相同id 隔离开 -->
<style scoped> 
.person {
    padding: 20px;
    background-color: skyblue;
    border: solid 1px black;
}
button{
    margin-left: 10px;
}
</style>