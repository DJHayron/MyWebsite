<template>
    <div class="relative md:top-20 top-16 w-full h-full flex flex-col items-center py-6">
        <UpdateLog class="w-4/5" v-for="(item, key) in updateLog" :key="key" :data="item"></UpdateLog>
    </div>
</template>

<script>
import UpdateLog from '@/components/UpdateLogContent.vue'

export default {
    components: {
        UpdateLog
    },
    data() {
        return {
            updateLog: [
                {
                    head: '新增頁面',
                    body: '新增 "TODO".微調 "更新日誌" 版型.微調 navbar 版型',
                    version: 'v0.3',
                    date: '2023/1/23'
                },
                {
                    head: '新增頁面',
                    body: '新增 "更新日誌"',
                    version: 'v0.2',
                    date: '2023/1/22'
                },
                {
                    head: '環境建構',
                    body: '建立 vite.使用 tailwind css framework.使用 vue-router 做 SPA.新增 navbar.新增 夜間模式',
                    version: 'v0.1',
                    date: '2023/1/21'
                }
            ]
        }
    }
}
</script>
