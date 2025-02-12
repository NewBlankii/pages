<template>
  <div class="app">
    <h2 class="title">Vue路由测试</h2>
    <!-- 导航区 -->
    <div class="navigate">
      <!--简化后：直接通过名字跳转（to的对象写法配合path属性） -->
      <RouterLink replace :to="{ path: '/home' }" active-class="active">首页</RouterLink>
      <!--简化前：需要写完整的路径（to的字符串写法） -->
      <RouterLink replace to="/news" active-class="active">新闻</RouterLink>
      <!--简化后：直接通过名字跳转（to的对象写法配合name属性） -->
      <RouterLink replace :to="{ name: 'jianjie' }" active-class="active">关于</RouterLink>
    </div>
    <!-- 展示区 -->
    <div class="main-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script lang="ts" setup name="Router">
  //  import { useRouter } from 'vue-router';
  //  const router= useRouter()
  //  router.replace('/home')

</script>
<style scoped>
.title {
  padding: 20px;
  font-size: 30px;
  font-style: bold;
  background-color: #a1a1a1;
  text-align: center;

}

.navigate {
  display: flex;
  justify-content: space-evenly;
}

.navigate a {
  padding: 14px;
  border-radius: 18px;
  background-color: #b2b2b2;
  color: white;
  font-size: 20px;

}

.navigate a.active {
  background-color: red;
  color: black;
}


.main-content {
  margin: 30px;
  border-radius: 25px;
  height: 400px;
  border: black 2px solid;
}
</style>