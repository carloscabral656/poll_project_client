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
            <AlternativeComponent :data="data?.alternatives"/>
            
            <!-- Comment -->
            <TextAreaComponent v-if="data?.hasComment"/>
        </template>
    </CardComponent>
</template>



<style scoped>
</style>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
import { useStore } from 'vuex';
import Question from '@/entities/Question';
import AlternativeComponent from '@/components/Alternatives/AlternativeComponent.vue';

export default defineComponent({
    name: "QuestionComponent",
    data(){
        return {
            // v-model
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
    created(){
        return;
    },
    setup(){
        return {
            store: useStore()
        }
    }
});
</script>