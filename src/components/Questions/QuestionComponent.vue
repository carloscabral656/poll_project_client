<template>
    <CardComponent>
        <!--  -->
        <template #title> Question {{ data?.orderQuestion }}</template>
        
        <!-- Question's Statement -->
        <template #content>
            
            <p class="m-0">
                {{ data?.statement }}
            </p>
            
            <!-- Alternatives -->
            <AlternativeComponent 
                :data="data?.alternatives" 
                @sendAnswer="addAnswer"
            />
            
            <!-- Comment -->
            <TextAreaComponent v-if="data?.hasComment" v-model="comment"/>
        </template>
    </CardComponent>
</template>



<style scoped>
</style>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
import { useStore } from 'vuex';
import Question from '@/entities/Question';
import Alternative from '@/entities/Alternative';
import AlternativeComponent from '@/components/Alternatives/AlternativeComponent.vue';
import Answer from '@/entities/Answer';

export default defineComponent({
    name: "QuestionComponent",
    data(){
        return {
            idQuestion: 0 as number,
            choosenAlternative: [] as Array<Alternative>,
            comment: "" as string
        }
    },
    methods: {
        addAnswer(alternative: Alternative){

            //Create answer obj
            let answer : Answer = new Answer(this.data!.id)

            // Adding choosen alternatives
            answer.setChoosenAlternative(alternative)
            answer.setComment(this.comment)

            // 
            this.store.dispatch('addAnswer', answer)

        }
    },
    computed: {
        
    },
    components: {
        AlternativeComponent
    },
    props: {
        data: {
            type: Object as PropType<Question>,
        }
    },
    setup(){
        return {
            store: useStore()
        }
    }
});
</script>