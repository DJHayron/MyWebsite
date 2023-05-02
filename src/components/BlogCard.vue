<template>
	<div id="blog-card" @click="$router.push('/')" class="relative block w-full h-[15vh] mb-5 p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-900 group hover:scale-[99%]">
		<div class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-orange-400">{{ data.title }}</div>    
		<span class="m-2 text-xl" >
			<div v-html="markdownToHtml(data.content)"></div>
		</span>
		<p class="absolute right-6 bottom-6 text-sm font-normal text-gray-700 dark:text-gray-400">最後更新時間:{{ data.date }}</p>
	</div>
</template>

<script>
import { buildDirectiveArgs } from '@vue/compiler-core'
import marked from 'marked'

export default {
	name: "BlogCard",
	components: { 
		buildDirectiveArgs
	},
	props: {
		data: {
			title: String,
			date: String,
			content: String
		}
	},
	methods: {
    markdownToHtml(content) {
      return marked.parse(content)
    }
  }
}
</script>
