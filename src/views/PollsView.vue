<template>
  <h2>List of Polls</h2>
  <GridComponent :data="polls || []" :totalItemInLine=4 />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import GridComponent from '@/components/Layout/GridComponent.vue'


export default defineComponent({
    name: "PollsView",
    components: {
      GridComponent
    },
    data(){
      return {
        
      }
    },
    computed:{
      polls(){
        let store = useStore()
        return store.state.polls 
      }
    },
    created(){
      let store = useStore()
      store.dispatch('loadPolls')
    }
})
</script>

<style scoped>
</style>