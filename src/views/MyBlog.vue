<template>
    <div class="relative md:top-20 top-16 w-full h-full flex flex-col items-center py-6">
        <div class="md:w-4/5 w-1/2 h-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
            <BlogCard v-for="(item, key) in data" :key="key" :data="item"></BlogCard>
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
        return{
            data: [
                {
                    title: "test1",
                    coverImage: Image,
                    latestUpdateDate: "YYYY/MM/DD",
                    mainContent: `<h1>Test</h1>`
                },
                {
                    title: "test2",
                    coverImage: Image,
                    latestUpdateDate: "YYYY/MM/DD",
                    mainContent: `<h1>Test</h1>`
                }
            ]
        }
    }
}
</script>
