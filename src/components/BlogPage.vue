<template>
	<button @click="backToList()">返回</button>
	<div>
		<div>{{ data.title }}</div>
		<Markdown :source="data.content"/>
	</div>
</template>

<script>
import Markdown from 'vue3-markdown-it'

export default {
  name: "BlogCard",
	components: {
		Markdown
  },
  props: {
    data: {
			title: String,
			date: String,
			content: String,
			summary: String
		}
  },
  methods: {
    backToList() {
      this.$emit('back-to-list', null)
    }
  }
}
</script>
