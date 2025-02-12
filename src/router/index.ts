import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'
import NewsDetail from '@/pages/NewsDetail.vue'

const router = createRouter({
	history: createWebHistory(),//路由器的工作模式
	routes: [
		{
			name: 'zhuye',
			path: '/home',
			component: Home
		},
		{
			name: 'jianjie',
			path: '/about',
			component: About
		},
		{
			name: 'xinwen',
			path: '/News',
			component: News,
			children: [
				{
					name: "xiangxi",
					path: 'detail',
					component: NewsDetail
				}
			]
		}
		,{
			path:'/',
			redirect:'/home'
		}
	]
})
export default router