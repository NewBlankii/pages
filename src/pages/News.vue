<template>
    <div class="news">
        <!-- 导航区 -->
        <ul>
            <li class="newsTitle" v-for="p in newsList" :key="p.id">
                <RouterLink replace :to="{
                    name: 'xiangxi', query: {
                        id: p.id,
                        title: p.title,
                        content: p.content
                    }
                }">
                    {{ p.title }}
                </RouterLink>
            </li>
        </ul>
        <!-- 展示区  同页面的导航区会自动在展示区显示 -->
        <div class="newsDetail">
            <RouterView></RouterView>
        </div>
    </div>


</template>
<script lang="ts" setup>
// 给NewsDetail.vue 传递数据
let newsList = [
    {
        id: '1',
        title: '你好北京',
        content: '北京是一个包容的城市'
    },
    {
        id: '2',
        title: '震惊！这个小区发生了...',
        content: '这个小区被雨淹没了'
    },
    {
        id: '3',
        title: '今天天气大雨转小雨',
        content: '下班就停下了..'
    }
]

import { useRouter } from 'vue-router';
const router = useRouter()
// 点击进去新闻页面，默认点击进入第一条新闻
router.replace({
    name:'xiangxi',
    query:newsList[0]
})
</script>
<style scoped>
.news {
    padding: 0 20px;
    display: flex;
    height: 100%;
    justify-content: space-between;

}

.news .newsTitle {
    list-style: none;
    margin-top: 30px;
    padding-left: 10px;
}

.news .newsTitle a {
    font-size: 18px;
    line-height: 40px;
    text-decoration: none;
    color: #64967E;
    text-shadow: 0 0 1px rgb(0, 84, 0);
}

.newsDetail {
    width: 70%;
    height: 90%;
    border: 1px solid;
    margin-top: 20px;
    border-radius: 10px;

}
</style>