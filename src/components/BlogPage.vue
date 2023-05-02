<template>
	<button type="button" @click="this.$emit('back-to-list')"
		class="float-left focus:outline-none text-white bg-orange-400 hover:bg-orange-400 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:focus:ring-yellow-600">
		返回
	</button>
	<div id="md-page" class="w-fulll">
		<div class="flex justify-center text-5xl py-10">{{ data.title }}</div>
		<hr class="pb-8"/>
		<article class="prose-base">
			<div v-html="renderedMarkdown"></div>
		</article>
	</div>
</template>

<script>
import MarkdownIt from 'markdown-it'
import MarkdownItKatex from 'markdown-it-katex'

export default {
  name: "BlogPage",
  props: {
    data: {
			title: String,
			date: String,
			content: String,
			summary: String
		}
  },
	emits: ["back-to-list"],
	computed: {
    renderedMarkdown() {
      const md = new MarkdownIt().use(MarkdownItKatex)
      return md.render(this.data.content)
    }
  }
}
</script>
