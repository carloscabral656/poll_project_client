<template>
    <div class="grid-component">
        <div 
            class="grid"
            v-for="line in lines"
            :key="line"
        >
            <div
                :class="columns"
                v-for="item in totalItemsInLineComputed"
                :key="item"
            >
                <component :is="component" :data="computedData[currentIndex++]"></component>
            </div>
        </div>
    </div> 
</template>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "GridComponent",

    props: {
        
        // 
        data: Array,

        // 
        totalItemsInLine: Number,
        
        // 
        component: {
            type: Object,
            required: true
        }
        
    },

    computed: {

        // Calculate the number of items the Grid must have in each line
        totalItemsInLineComputed(): number{
            return this.totalItemsInLine || 1
        },

        // Compute the data's length from retrieved prop
        lengthData(): number{
            return this.data?.length || 0
        },

        // Compute the total of lines the Grid must have
        lines(): number{
            return Math.ceil(this.lengthData/this.totalItemsInLineComputed);
        },
        
        // Compute the number of columns the Grid must have
        columns(): string{
            return `col-${12/this.totalItemsInLineComputed}`
        },
        
        // 
        computedData(): any{
            return this.data
        },

    },

    setup() {
        return {
            currentIndex: 0
        }
    }
});
</script>


<style scoped>
</style>