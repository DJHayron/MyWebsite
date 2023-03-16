<template>
    <div class="relative md:top-20 top-16 w-full h-full flex flex-col items-center py-6">
        <div class="w-4/5">            
            <div class="mb-2 md:text-4xl text-2xl font-semibold">2023 年度清單</div>
            <ul class="space-y-1 list-inside md:text-2xl">
                <li v-for="(item, key) in TODO" :key="key" class="flex items-center">
                    <svg v-if="item.isCheck" class="w-6 h-6 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>

                    <svg v-if="!item.isCheck" class="w-6 h-6 mr-1.5 text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg>
                    {{ item.thing}}
                </li>
            </ul>
        </div>
        <pre class="pt-16 whitespace-pre-line text-gray-100 dark:text-gray-700">
            然而在製作這個介面的時候我遇到了一個問題
            TODO List 在確認方向的同時，也會因為大方向所帶來的壓力，讓人覺得好累好累
            而往往到最後讓自己學習的初衷變成一份清單帶來的壓力，而不是自發性的去學習
            這裡我給的是年度計畫，但我不一定會全部達到，這只是一個提醒我要"去做"，怕我忘記
            而不是我給自己無形的壓力
            這裡特別感謝<a href="https://www.tershi.com/">夏特稀</a>提供的經驗
            藏一個彩蛋以示感動(´▽`ʃ♡ƪ)
        </pre>
    </div>
</template>

<script>
export default {
    data() {
        return {
            TODO: [
                {
                    thing: '完成個人網站',
                    isCheck: false,
                    path: ''
                },
                {
                    thing: '學習架設伺服器，並讓個人網站上線',
                    isCheck: false,
                    path: ''
                },
                {
                    thing: '學習AI相關技能、機器學習、深度學習',
                    isCheck: false,
                    path: ''
                },
                {
                    thing: '製作推播演算',
                    isCheck: false,
                    path: ''
                },
                {
                    thing: '學習後端技術',
                    isCheck: false,
                    path: ''
                },
                {
                    thing: '強化資訊安全的基本觀念',
                    isCheck: false,
                    path: ''
                },
                {
                    thing: '完成一款獨立製作的手遊',
                    isCheck: false,
                    path: ''
                },
                {
                    thing: '完成TSP蟻群算法解',
                    isCheck: true,
                    path: ''
                },
                {
                    thing: '在個人網站中建立"學習筆記"頁面',
                    isCheck: false,
                    path: ''
                },
                {
                    thing: '在"TODO"介面中更新成樹狀',
                    isCheck: false,
                    path: ''
                }
            ]
        }
    }
}
</script>
