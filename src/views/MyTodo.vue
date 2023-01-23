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
    </div>
</template>

<script>
export default {
    data() {
        return {
            TODO: [
                {
                    thing: '完成個人網站',
                    isCheck: false
                },
                {
                    thing: '學習架設伺服器，並讓個人網站上線',
                    isCheck: false
                },
                {
                    thing: '強化深度學習，學習推播演算',
                    isCheck: false
                }
            ]
        }
    }
}
</script>
