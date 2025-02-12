<template>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="increment">点我+1</button>
    <button @click="decrement">点我-1</button>
    <hr>
    <img v-for="(u, index) in dogList" :key="index" :src="(u as string)">
    <span v-show="dogList.length<=0">加载中......</span><br>
    <button @click="getDog">再来一只狗</button>
</template>



<script setup lang="ts">
  import useSum from '../hooks/UseSum'
  import useDog from '../hooks/UseDog'
  let {sum,increment,decrement} = useSum()
  let {dogList,getDog} = useDog()

</script>