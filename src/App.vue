<template>
  <PollsView />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PollsView from './views/PollsView.vue';

export default defineComponent({
    name: "App",
    components: {
      PollsView
    }
});
</script>

<style>

</style>