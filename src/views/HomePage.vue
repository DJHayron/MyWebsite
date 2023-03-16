<template>
    <!-- 
        TODO: 用 gsap 做動畫 淡入
        TODO: 用 個人圖片
        TODO: 主頁右邊塞圖片
        TODO: 社交區塊 超連結網址 預計 v1.0 發佈版 再更新
        TODO: 做出 作品導覽，學習筆記 等功能之後 要在主頁可以推播
     -->
    <div class="relative md:top-20 top-16 w-full h-full flex flex-col items-center py-6">
        <div class="absolute md:pt-10 w-4/5 text-xl font-semibold">
            <div class="md:text-5xl text-4xl">
                你好~ 我是<span class="text-orange-400">Hayron竑</span>
            </div>
            <div class="pt-8">
                我是一名大學生，對寫程式有很大的熱忱，主攻算法及AI，目前正在學習網頁設計
            </div>
            <div class="pt-2">
                這是我學習過程中第一個作品!!也就是我的個人網站，這裡會記錄著我學習過程
            </div>
            <div class="pt-8">
                希望之後可以在這上面持續分享各種技術上的經驗，也希望可以對你有所啟發~
            </div>
            <div class="flex pt-8">
                <div v-for="(item, key) in socialBlock" :key="key" class="pr-6">
                    <a :href="item.path">
                        <font-awesome-icon :icon="item.icon" class="h-6"></font-awesome-icon>
                    </a>
                </div>
            </div>
            <div class="pt-8 left-0">
                <button type="button" @click="$router.push('/about')" class="focus:outline-none text-white bg-orange-400 hover:bg-orange-400 focus:ring-4 focus:ring-orange-300 text-xl font-bold rounded-md px-6 py-2 dark:focus:ring-yellow-600">關於我</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            socialBlock: [
                {
                    icon:['fas', 'envelope'],
                    path: 'https://google.com/'
                },
                {
                    icon: ['fab', 'fa-github'],
                    path: 'https://github.com/'
                },
                {
                    icon: ['fab', 'instagram'],
                    path: 'https://instagram.com/'
                },
                {
                    icon: ['fab', 'discord'],
                    path: 'https://discord.com/'
                },
                {
                    icon: ['fab', 'fa-square-facebook'],
                    path: 'https://facebook.com/'
                },
                {
                    icon: ['fab', 'youtube'],
                    path: 'https://youtube.com/'
                }
            ]
        }
    }
}
</script>
