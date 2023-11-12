<template>
  <h1>List of Polls</h1>
  <GridComponent 
    :data="polls" 
    :totalItemsInLine=4 
    :component="PollComponent"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import GridComponent from '@/components/Layout/GridComponent.vue'
import PollComponent from '@/components/Polls/PollComponent.vue';

export default defineComponent({
    name: "PollsView",
    components: {
      GridComponent
    },
    data() {
      return {
        PollComponent: PollComponent
      }
    },
    computed: {
      polls(){
        let store = useStore()
        return store.state.polls 
      }
    },
    created() {
      let store = useStore()
      store.dispatch('loadPolls')
    }
})
</script>

<style scoped>
</style>