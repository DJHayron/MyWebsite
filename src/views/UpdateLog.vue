<template>
    <div class="relative md:top-20 top-16 w-full h-full flex flex-col items-center py-6">
        <div id="updateLog-content" class="w-4/5" v-for="(item, key) in updateLog" :key="key" :data="item">
            <div id="head">
                <button type="button" @click="ReadMore(item)" class="w-full flex items-center justify-between p-5 font-medium text-left border border-gray-200 rounded-t-xl bg-gray-200 dark:bg-gray-800 dark:border-gray-900 hover:bg-gray-300 dark:hover:bg-gray-900"
                :class="[item.isOpen ? '' : 'rounded-b-xl']">
                    <span>{{ item.head }} {{ item.version }}</span>
                    <svg data-accordion-icon class="w-6 h-6 shrink-0" :class="[item.isOpen ? 'rotate-180' : '']" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
            <div id="body" :class="[item.isOpen ? '' : 'hidden']">
                <div class="p-5 font-normal border rounded-b-xl border-gray-200 dark:border-gray-900 dark:bg-gray-700">
                    <ul>
                        <li v-for="(things, key) in item.body.split('.')" :key="key"><p class="mb-2">>{{ things }}</p></li>
                    </ul>
                    <p class="mb-2">更新日期: {{ item.date }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            updateLog: [
                {
                    head: '更新頁面',
                    body: '更新 "關於我".新增 Youtube 連結.修正 "更新日誌" 中的程式',
                    version: 'v0.7',
                    date: '2023/01/31',
                    isOpen: false
                },
                {
                    head: '更新頁面',
                    body: '匯入 font-awesome-icon 套件.更新 "主頁".修正一些小錯誤',
                    version: 'v0.6',
                    date: '2023/01/30',
                    isOpen: false
                },
                {
                    head: '學習後端技能',
                    body: '使用 python flask api 做為後端.比較 fetch、axios request的差異.學習 CORS 後端.使用 sqlite3 用來保存資料 練習 SQL 語法.新增 "對我發問" 發問功能.修改 "更新日誌" 日期格式',
                    version: 'v0.5',
                    date: '2023/01/26',
                    isOpen: false
                },
                {
                    head: '新增頁面',
                    body: '新增 "對我發問".在某處埋下了一顆彩蛋',
                    version: 'v0.4',
                    date: '2023/01/24~25',
                    isOpen: false
                },
                {
                    head: '新增頁面',
                    body: '新增 "TODO".微調 "更新日誌" 版型.微調 navbar 版型',
                    version: 'v0.3',
                    date: '2023/01/23',
                    isOpen: false
                },
                {
                    head: '新增頁面',
                    body: '新增 "更新日誌"',
                    version: 'v0.2',
                    date: '2023/01/22',
                    isOpen: false
                },
                {
                    head: '環境建構',
                    body: '建立 vite.使用 tailwind css framework.使用 vue-router 做 SPA.新增 navbar.新增 夜間模式',
                    version: 'v0.1',
                    date: '2023/1/21',
                    isOpen: false
                }
            ]
        }
    },
    methods: {
        ReadMore(item) {
            item.isOpen = !item.isOpen
            this.updateLog.forEach(element => {
                element == item ? '' : element.isOpen = false
            })
        }
    }
}
</script>
