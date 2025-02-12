<template>
    <div class="detail">
        <ul>
            <li>id:{{route.query.id}}</li>
            <li>标题:{{route.query.title}}</li>
            <li>内容:{{route.query.content}}</li>
        </ul>
    </div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue';
import {useRoute} from 'vue-router'
const route = useRoute()


</script>
<style scoped>
</style>