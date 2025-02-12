<template>
    <div class="father">
      <h3>父组件，</h3>
          <h4>我的车：{{ car }}</h4>
          <h4>儿子给的玩具：{{ toy }}</h4>
          <Child :car="car" :getToy="getToy"/>
    </div>
  </template>
  
  <script setup lang="ts" name="Father">
      import Child from './Child.vue'
      import { ref } from "vue";
      // 数据
      const car = ref('奔驰')
      const toy = ref()
      // 方法
      function getToy(value:string){
          toy.value = value
      }
  </script>