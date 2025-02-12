<template>
    <div class="content">
        <h2>使用pinia store 数据</h2>
        <ul>
            <li v-for="talk in talkStore.talkList" :key="talk.id">{{
                talk.content }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts" name="Count">
// 引入对应的useXxxxxStore	
import { useTalkStore } from '@/store/talk';

const talkStore = useTalkStore()

</script>
<style scoped>
    .content{
        padding: 20px;
        background-color: aquamarine;
        border-radius: 20px;
    }
</style>