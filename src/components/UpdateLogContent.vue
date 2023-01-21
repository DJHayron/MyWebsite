<template>
    <div id="updateLog-content" class="w-4/5">
        <h2 id="head">
            <button type="button" @click="ReadMore()" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-700 border border-gray-200 rounded-t-xl dark:border-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            :class="[isOpen ? '' : 'rounded-b-xl']">
                <span>{{ data.head }} {{ data.version }}</span>
                <svg data-accordion-icon class="w-6 h-6 shrink-0" :class="[isOpen ? 'rotate-180' : '']" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
        </h2>
        <div id="body" :class="[isOpen ? '' : 'hidden']">
            <div class="p-5 font-normal border rounded-b-xl border-gray-200 dark:border-gray-900 dark:bg-gray-700">
                <ul>
                    <li v-for="(item, key) in data.body.split('.')" ><p class="mb-2 text-gray-700 dark:text-gray-400">>{{ item }}</p></li>
                </ul>
                <p class="mb-2 text-gray-500 dark:text-gray-400">更新日期: {{ data.date }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UpdateLog',
    props: {
        data: {
            head: String,
            body: String,
            version: String,
            date: String
        }
    },
    data() {
        return {
            isOpen: false
        }
    },
    methods: {
        ReadMore() {
            this.isOpen = !this.isOpen
        }
    }
}
</script>
