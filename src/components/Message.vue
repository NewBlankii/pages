<template>
    <div class="content">
        <h1 class="title">组件通讯</h1>
        <Father></Father>
    </div>
   
</template>
<script lang="ts" setup>
    import Father from './UseProps/Father.vue'
</script>
<style scoped>
    .content{
        margin-top: 20px;
        padding: 20px;
        background-color: red;
    }

</style>