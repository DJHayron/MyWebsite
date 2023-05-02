<template>
	<div id="blog-card" @click="openBlogPage" class="relative block w-full h-[15vh] mb-5 p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-900 group hover:scale-[99%]">
		<div class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-orange-400">{{ data.title }}</div>    
		<span class="m-2 text-xl" >
			{{ data.summary }}
		</span>
		<p class="absolute right-6 bottom-6 text-sm font-normal text-gray-700 dark:text-gray-400">最後更新時間:{{ data.date }}</p>
	</div>
</template>

<script>
export default {
	name: "BlogCard",
	props: {
		data: {
			title: String,
			date: String,
			content: String,
			summary: String
		}
	},
	methods: {
		openBlogPage() {
			this.$emit('blog-data', this.data)
		}
	}
}
</script>
