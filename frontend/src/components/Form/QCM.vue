<script setup>
import Card from '../Card.vue';
</script>

<template>
    <div class="col-span-4 col-start-3 grid grid-cols-2 2xl:grid-cols-4 gap-4">
        <Card :class="'col-span-4'">
            <template v-slot:title>
                <slot name="question"></slot>
            </template>
        </Card>
        <slot name="choices"></slot>
    </div>
</template>

<style scoped></style>