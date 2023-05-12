<template>
	<div id="question-card" class="pr-4 pb-4">
		<div class="block w-full h-fit p-6 bg-white border border-stone-200 rounded-lg shadow dark:bg-stone-800 dark:border-stone-900">
			<div class="mb-2 text-xl font-bold tracking-tight text-stone-900 dark:text-white">Q: {{ data.question }}</div>
			<div class="text-xl font-normal text-stone-700 dark:text-stone-300">A: {{ data.answer }}</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'QuestionCard',
	props: {
		data: {
			question: String,
			answer: String
		}
	}
}
</script>
