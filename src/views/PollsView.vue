<template>
    <PollComponent v-for="(poll, index) in polls" :key="index" :poll="poll" />
</template>



<style scoped>
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import PollComponent from '@/components/PollComponent.vue';
import { useStore } from 'vuex';

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
      }
    },
    created(){
      let store = useStore()
      store.dispatch('loadPolls')
    },
    setup(){
      return {
        
      }
    }
})

</script>