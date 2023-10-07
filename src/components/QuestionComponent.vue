<template>
    <div>
        <!-- Enunciado -->
        <div>
            {{ question?.id }}
        </div>
        
        <!-- Alternatives -->
        <div v-for="alternative in question?.alternatives" :key="alternative.id">
           {{ alternative.description }} 
        </div>

        <!-- Coment -->
        <div v-if="question?.hasComent">
            {{ question?.comment }}
        </div>
    </div>
</template>



<style scoped>
</style>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
import IQuestion from '../interfaces/IQuestion'

export default defineComponent({
    name: "QuestionComponent",
    computed: {
        
    },
    props: {
        question: {
            type: Object as PropType<IQuestion>,
        }
    },
    data(){
        return {

        }
    }
});
</script>