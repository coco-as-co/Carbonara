<script setup>
import Button from '../../components/Button.vue';
import Card from '../../components/Card.vue';


</script>

<template>
    <div class="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
        <Card :class="'col-span-1'">
            <template v-slot:title>
                ReactJS
            </template>
            <template v-slot:footer>
                <div></div>
                <Button :variant="'blue'" :href="'/quests/1/1'">Modifier</Button>
            </template>
        </Card>
        <Card>
            <template v-slot:title>
                Java
            </template>
            <template v-slot:footer>
                <div></div>
                <Button :variant="'blue'" :href="'/quests/1/1'">Modifier</Button>
            </template>
        </Card>
        <Card>
            <template v-slot:title>
                C#
            </template>
            <template v-slot:footer>
                <div></div>
                <Button :variant="'blue'" :href="'/quests/1/1'">Modifier</Button>
            </template>
        </Card>
        <Button :href="'/skills/create'" :class="'rounded-[20px]'">
            <div class="flex items-center justify-center h-full gap-x-4">
                <font-awesome-icon :icon="['fas', 'plus']" class="text-2xl" />
                Ajouter un skill
            </div>
        </Button>
    </div>
</template>