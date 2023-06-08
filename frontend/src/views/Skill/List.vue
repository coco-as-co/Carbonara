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
                <div>
                    <Button :variant="'green'" :href="'/skills/1/quests'" class="me-3">Accéder</Button>
                    <Button :variant="'blue'" :href="'/quests/1/1'">Modifier</Button>
                </div>
            </template>
        </Card>
        <Card>
            <template v-slot:title>
                Java
            </template>
            <template v-slot:footer>
                <div></div>
                <div>
                    <Button :variant="'green'" :href="'/skills/2/quests'" class="me-3">Accéder</Button>
                    <Button :variant="'blue'" :href="'/quests/1/1'">Modifier</Button>
                </div>
            </template>
        </Card>
        <Card>
            <template v-slot:title>
                C#
            </template>
            <template v-slot:footer>
                <div></div>
                <div>
                    <Button :variant="'green'" :href="'/skills/3/quests'" class="me-3">Accéder</Button>
                    <Button :variant="'blue'" :href="'/quests/1/1'">Modifier</Button>
                </div>
            </template>
        </Card>
        <Button :href="'/skills/create'" :class="'rounded-[20px] shadow-[0_5px_55px_0_rgba(0,0,0,0.1)]'">
            <div class="flex items-center justify-center h-full gap-x-4">
                <font-awesome-icon :icon="['fas', 'plus']" class="text-2xl" />
                Ajouter un skill
            </div>
        </Button>
    </div>
</template>