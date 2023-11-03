<template>
  <h2>List of Polls</h2>
  <div 
    class="grid"
    v-for="line in (Math.ceil(polls.length/totalItemInLine))"
    :key="line"
    >
      <div
        :class="computedColumns"
        v-for="item in totalItemInLine"
        :key="item"
      >
        <PollComponent :poll="polls[currentItem++]"/>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import PollComponent from '@/components/Polls/PollComponent.vue';

export default defineComponent({
    name: "PollsView",
    components: {
      PollComponent
    },
    data(){
      return {
        
      }
    },
    computed:{
      polls(){
        let store = useStore()
        return store.state.polls 
      },

      computedColumns(){
        let totalItemInLine = 4
        return `col-${12/totalItemInLine}`
      }
    },
    created(){
      let store = useStore()
      store.dispatch('loadPolls')
    },
    setup(){
      return {
        currentItem: 0,
        totalItemInLine: 4
      }
    }
})
</script>

<style scoped>
</style>