<template>
    <span 
        v-for="alternative in data" 
        :key="alternative.value"
        class="m-0"
        >
        <ButtonComponent 
            :label="alternative.description"
            rounded 
            severity="success" 
            raised 
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

        }
    },
    props: {
        data: {
            type: Array as PropType<Array<Alternative>>,
        }
    },
})
</script>