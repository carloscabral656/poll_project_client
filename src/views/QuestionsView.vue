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

export default defineComponent({
    name: "QuestionsView",
    data() {
        return {
            QuestionComponent: QuestionComponent
        }
    },
    methods: {
        saveAnswers(){
            console.log(JSON.stringify(this.store.getters.getAnswers))
            //this.store.dispatch('sendAnswers')
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