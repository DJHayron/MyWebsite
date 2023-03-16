<template>
    <div id="blog-card">
        <div class="block w-full h-[20vh] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-900">
            <div class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{{ data.title }}</div>
            <p class="text-xl font-normal text-gray-700 dark:text-gray-400">{{ data.latestUpdateDate }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BlogCard',
    props: {
        data: {
            title: String,
            coverImage: Image,
            latestUpdateDate: String,
            mainContent: String
        }
    }
}
</script>
