<template>
    <div class="child">
      <h3>子组件</h3>
          <h4>我的玩具：{{ toy }}</h4>
          <h4>父给我的车：{{ car }}</h4>
          <button @click="getToy(toy)">玩具给父亲</button>
    </div>
  </template>
  
  <script setup lang="ts" name="Child">
      import { ref } from "vue";
      const toy = ref('奥特曼')
      
      defineProps(['car','getToy'])
  </script>
  
  