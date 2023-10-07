<template>
    <main class="questions">
        <QuestionComponent v-for="(question, index) in questions" :key="index" :question="question"/>
    </main>
</template>


<style scoped>
</style>


<script lang="ts">
import { defineComponent } from 'vue';
import QuestionComponent  from '@/components/QuestionComponent.vue'
import IQuestion from '@/interfaces/IQuestion';
import { useStore } from 'vuex';

export default defineComponent({
    name: "QuestionsView",
    components: {
        QuestionComponent
    },
    computed: {
        questions() : Array<IQuestion> {
            const store = useStore()
            return store.state.questions
        }
    },
    data(){
        return {

        }
    }
});
</script>