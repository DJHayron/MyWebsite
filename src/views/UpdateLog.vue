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
                    head: '更新頁面',
                    body: '匯入 font-awesome-icon 套件.更新 "主頁".修正一些小錯誤',
                    version: 'v0.6',
                    date: '2023/01/30'
                },
                {
                    head: '學習後端技能',
                    body: '使用 python flask api 做為後端.比較 fetch、axios request的差異.學習 CORS 後端.使用 sqlite3 用來保存資料 練習 SQL 語法.新增 "對我發問" 發問功能.修改 "更新日誌" 日期格式',
                    version: 'v0.5',
                    date: '2023/01/26'
                },
                {
                    head: '新增頁面',
                    body: '新增 "對我發問".在某處埋下了一顆彩蛋',
                    version: 'v0.4',
                    date: '2023/01/24~25'
                },
                {
                    head: '新增頁面',
                    body: '新增 "TODO".微調 "更新日誌" 版型.微調 navbar 版型',
                    version: 'v0.3',
                    date: '2023/01/23'
                },
                {
                    head: '新增頁面',
                    body: '新增 "更新日誌"',
                    version: 'v0.2',
                    date: '2023/01/22'
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
