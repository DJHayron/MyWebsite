<template>
    <div id="blog-card" class="relative block w-full h-[25vh]  mb-5 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-900">
        <div class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ data.title }}</div>    
        <span>{{ data.mainContent }}</span>
        <p class="text-sm font-normal text-gray-700 dark:text-gray-400">最後更新時間:{{ data.latestUpdateDate }}</p>
    </div>
</template>

<script>
export default {
    name: 'BlogCard',
    props: {
        data: {
            title: String,
            latestUpdateDate: String,
            mainContent: String
        }
    }
}
</script>
