<template>
    <Card style="width: 25em" v-if="data">
        <template #header>
            <img alt="user header" src="" />
        </template>
        <template #title> {{data?.title}} </template>
        <template #content>
            <p>
                {{ data?.description || 'N/D' }}
            </p>
        </template>
        <template #footer>
            <Button label="Answer" severity="success" />
            <Button label="Skip" severity="secondary" />
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
        data: {
            type: Object as PropType<IPoll>,
        }
    },
    components: {
        Card,
        Button
    }
});
</script>