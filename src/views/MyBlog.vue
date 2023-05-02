<template>
	<div class="relative md:top-20 top-16 w-full h-full flex flex-col items-center py-6 animate-fade animate-fadeIn">
		<div class="w-4/5 h-full">
			<!-- <BlogCard v-for="(item, key) in data" :key="key" :data="item"></BlogCard> -->
			<div v-if="selectedBlog">
				<BlogPage :data="selectedBlog" @back-to-list="returnToBlogList"></BlogPage>
			</div>
			<div v-else>
				<div v-for="(item, key) in data" :key="key">
					<BlogCard :data="item" @blog-data="getBlogPage"></BlogCard>
				</div>
			</div>
		</div>
		<div v-if="!isConnect">
			連線失敗QQ
		</div>
	</div>
</template>

<script>
import BlogCard from '@/components/BlogCard.vue'
import BlogPage from '@/components/BlogPage.vue'
import {defineComponent} from "vue"

export default {
	components: {
		BlogCard,
		BlogPage
	},
	data() {
		return {
			apiUrl: 'http://127.0.0.1:5000/api',
			data: Array,
			isConnect: false,
			selectedBlog: null
		}
	},
	created() {
		this.axios.get(this.apiUrl + '/getBlog')
			.then((response) => {
				this.data = response['data']['data']
				this.isConnect = true
			}).catch((error) => console.log(error))
	},
	methods: {
		getBlogPage(blog) {
			this.selectedBlog = blog
		},
		returnToBlogList() {
			this.selectedBlog = null
		}
	}
}
</script>
