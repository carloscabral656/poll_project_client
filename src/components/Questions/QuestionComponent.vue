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

export default defineComponent({
    name: "QuestionComponent",
    data(){
        return {
            idQuestion: this.data?.id as number,
            answers: [] as Array<Alternative>,
            comment: "" as string
        }
    },
    methods: {
        addAnswer(answer: Alternative){
            this.answers.push(answer)
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