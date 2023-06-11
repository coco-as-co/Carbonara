<script setup>

const props = defineProps(
    {
        options: Array

    },
    {
        label: String
    },
    {
        value: String
    }
)

</script>

<template>
    <v-select :label="props.label" :options="props.options" class="mt-2">
    </v-select>
</template>

<style >
@import "vue-select/dist/vue-select.css";

.v-select,
.v-select * {
    border-radius: 0.5rem;
}

.v-select>* {
    --tw-text-opacity: 1;
    color: rgb(55 65 81 / var(--tw-text-opacity));
    padding-top: 0.625rem;
    padding-bottom: 0.625rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    --tw-bg-opacity: 1;
    background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}
</style>