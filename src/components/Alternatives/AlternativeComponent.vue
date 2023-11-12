<template>
    <span 
        v-for="alternative in data" 
        :key="alternative.value"
        >
        <ButtonComponent 
            :label="alternative.description"
            rounded 
            :severity="
                (alternative.value === choosenAnswer.value)
                ? 'info'
                : 'success'
            " 
            raised
            @click="chooseAnswer(alternative)" 
        />
    </span>
</template>


<style scoped>
</style>


<script lang="ts">
import Alternative from '@/entities/Alternative';
import { PropType, defineComponent } from 'vue';

export default defineComponent({
    name: "AlternativeComponent",
    data() {
        return {
            choosenAnswer: {} as Alternative
        }
    },
    methods: {
        chooseAnswer(alternative: Alternative){
            this.choosenAnswer = alternative
            this.$emit('sendAnswer', this.choosenAnswer)
        }
    },
    props: {
        data: {
            type: Array as PropType<Array<Alternative>>,
        }
    },
})
</script>