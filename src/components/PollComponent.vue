<template>
    <div class="">
        {{ poll?.title }}
    </div>
</template>


<style scoped>
</style>


<script lang="ts">
import { PropType, defineComponent } from 'vue';
import IPoll from '@/interfaces/IPoll';

export default defineComponent({
    name: "PollComponent",
    props: {
        poll: {
            type: Object as PropType<IPoll>,
        }
    }
});
</script>