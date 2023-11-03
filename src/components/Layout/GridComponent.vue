<template>
    <div class="grid-component">
        <div 
            class="grid"
            v-for="line in lines"
            :key="line"
        >
            <div
                :class="columns"
                v-for="item in totalItemInLine"
                :key="item"
            >
                <slot></slot>
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
        totalItemsInLine: Number
    },

    computed: {
        
        // Calculate the number of items the Grid must have in each line
        totalItemInLine(): number{
            return this.totalItemsInLine || 0
        },

        // Compute the data's length from retrieved prop
        lengthData(): number{
            return this.data?.length || 1
        },

        // Compute the total of lines the Grid must have
        lines(): number{
            return Math.ceil(this.lengthData/this.totalItemInLine);
        },
        
        // Compute the number of columns the Grid must have
        columns(){
            return `col-${12/this.totalItemInLine}`
        }
    }
});
</script>


<style scoped>
</style>