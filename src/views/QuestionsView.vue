<template>
    <main class="questions">
        <QuestionComponent v-for="(index, question) in questions" :key="index" :question="question"/>
    </main>
</template>


<style scoped>
</style>


<script lang="ts">
import { defineComponent } from 'vue';
import QuestionComponent  from '@/components/QuestionComponent.vue'
import IQuestion from '@/interfaces/IQuestion';

export default defineComponent({
    name: "QuestionsView",
    components: {
        QuestionComponent
    },
    computed: {
        questions() : Array<IQuestion> {
            return this.$store.state.questions
        }
    },
    data(){
        return {

        }
    }
});
</script>