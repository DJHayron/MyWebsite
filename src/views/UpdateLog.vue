<template>
    <div class="w-full h-full flex flex-col items-center pt-6">
        <UpdateLog v-for="(item, key) in updateLog" :key="key" :data="item"></UpdateLog>
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
                    head: '環境建構',
                    body: '建立vite.使用tailwind css framework.使用vue-router做SPA.新增navbar.新增夜間模式',
                    version: 'v0.0.1',
                    date: '2023/1/21'
                },
                {
                    head: '新增日誌頁面',
                    body: '新增更新日誌',
                    version: 'v0.0.2',
                    date: '2023/1/22'
                }
            ]
        }
    }
}
</script>
