<template>
    <div>
        <!-- Enunciado -->
        <div>
            {{ question?.statement }}
        </div>
        
        <!-- Alternatives -->
        <div v-for="alternative in question?.alternatives" :key="alternative.id">
           {{ alternative.description }} 
        </div>

        <!-- Coment -->
        <div v-if="question?.hasComent">
            <textarea cols="50" lines="10">

            </textarea>
        </div>
    </div>
</template>



<style scoped>
</style>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
import IQuestion from '@/interfaces/IQuestion'
import { useStore } from 'vuex';

export default defineComponent({
    name: "QuestionComponent",
    computed: {
        
    },
    props: {
        question: {
            type: Object as PropType<IQuestion>,
        }
    },
    created(){
        return;
    },
    data(){
        return {

        }
    },
    setup(){
        return {
            store: useStore()
        }
    }
});
</script>