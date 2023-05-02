<template>
	<div class="relative md:top-20 top-16 w-full h-full flex flex-col items-center py-6 animate-fade animate-fadeIn">
		<div class="w-4/5 h-full">
			<BlogCard v-for="(item, key) in data" :key="key" :data="item"></BlogCard>
		</div>
		<div v-if="!isConnect">
			連線失敗QQ
		</div>
	</div>
</template>

<script>
import BlogCard from '@/components/BlogCard.vue'

export default {
	components: {
		BlogCard
	},
	data() {
		return {
			apiUrl: 'http://127.0.0.1:5000/api',
			data: Array,
			isConnect: false
		}
	},
	created() {
		this.axios.get(this.apiUrl + '/getBlog')
			.then((response) => {
				this.data = response['data']['data']
				this.isConnect = true
			}).catch((error) => console.log(error))
	}
}
</script>
