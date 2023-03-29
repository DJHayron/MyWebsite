<template>
    <div class="relative md:top-20 top-16 w-full h-full flex flex-col items-center py-6 animate-fade animate-fadeIn">
        <div class="w-4/5 h-full">
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
                    latestUpdateDate: "YYYY/MM/DD",
                    mainContent: `Test`
                },
                {
                    title: "test2",
                    latestUpdateDate: "YYYY/MM/DD",
                    mainContent: `Test`
                }
            ]
        }
    }
}
</script>
