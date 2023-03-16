<template>
    <div class="relative md:top-20 top-16 w-full h-full flex flex-col items-center py-6">
        <div id="input" class="w-1/2 mb-6">
            <div class="mb-2">
                <label for="default-input" class="block mb-2 text-sm font-medium">你也可以發問!! (看情況回覆)</label>
                <input type="text" @keypress.enter="Send()" ref="question_content" class="border border-gray-300  text-sm rounded-lg focus:ring-orange-400 focus:border-orange-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-400 dark:placeholder-gray-400  dark:focus:ring-orange-400 dark:focus:border-orange-400">
            </div>
            <button type="button" @click="Send()" class="float-right focus:outline-none text-white bg-orange-400 hover:bg-orange-400 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:focus:ring-yellow-600">Send</button>
        </div>
        <div class="md:w-4/5 w-1/2 h-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
            <QuestionCard v-for="(item, key) in data" :key="key" :data="item"></QuestionCard>
        </div>
    </div>
</template>

<script>
import QuestionCard from '@/components/QuestionCard.vue'

export default {
    components: {
        QuestionCard
    },
    data() {
        return{
            apiUrl: 'http://127.0.0.1:5000',
            data: Array
        }
    },
    methods: {
        Send() {
            if (this.$refs.question_content.value != '') {
                this.axios.post(this.apiUrl + '/newQuestion',
                {
                    question: this.$refs.question_content.value,
                })
                .then( (response) => alert(response['data']['status']))
                .catch( (error) => alert(error))
                this.$refs.question_content.value = ''
            }
        }
    },
    created() {
        this.axios.get(this.apiUrl + '/getQuestion')
        .then( (response) => {
            this.data = response['data']['data']
        }).catch( (error) => alert(error))
    }
}
</script>
