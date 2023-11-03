<template>
    <Card style="width: 25em" v-if="poll">
        <template #header>
            <img alt="user header" src="" />
        </template>
        <template #title> {{poll?.title}} </template>
        <template #content>
            <p>
                {{ poll?.description || 'N/D' }}
            </p>
        </template>
        <template #footer>
            <Button label="Answer" severity="success" />
            <Button label="Skip" severity="secondary"/>
        </template>
    </Card>
</template>


<style scoped>
</style>


<script lang="ts">
import { PropType, defineComponent } from 'vue';
import IPoll from '@/interfaces/IPoll';
import Card from 'primevue/card';
import Button from 'primevue/button';



export default defineComponent({
    name: "PollComponent",
    props: {
        poll: {
            type: Object as PropType<IPoll>,
        }
    },
    components: {
        Card,
        Button
    }
});
</script>