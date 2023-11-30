<template>
    <GridComponent 
        :data="choosenPoll.questions" 
        :totalItemsInLine=1
        :component="QuestionComponent"
    />
    <ButtonComponent 
    label="Save Answers" 
    severity="success"
    @click="saveAnswers" 
    />
</template>

<style scoped>
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import QuestionComponent  from '@/components/Questions/QuestionComponent.vue'
import GridComponent  from '@/components/Layout/GridComponent.vue'
import Poll from '@/entities/Poll';
import { useStore } from 'vuex';
import { AnswerAdapter } from '@/adapters/AnswersAdapter';

export default defineComponent({
    name: "QuestionsView",
    data() {
        return {
            QuestionComponent: QuestionComponent
        }
    },
    methods: {
        saveAnswers(){
            const answers  = this.store.getters.getAnswers;
            const answersAdpter = new AnswerAdapter(answers, 1).adapt();
           // Convert Map entries to an array of key-value pairs
            let keyValueArray = Array.from(answersAdpter.entries());

            // Transform array into an object without [] around keys
            let keyValueObject: { [key: string]: string } = {};
            keyValueArray.forEach(([key, value]) => {
                keyValueObject[key] = value;
            });

            // Stringify the object
            let jsonString = JSON.stringify(keyValueObject);

            console.log(jsonString) 
        }
    },
    components: {
        GridComponent
    },
    computed: {
        choosenPoll() : Poll {
            return this.store.getters.choosenPoll
        }
    },
    setup(){
        const store = useStore()
        return {
            store
        }
    }
});
</script>