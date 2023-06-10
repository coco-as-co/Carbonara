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
    <v-select :label="props.label" :options="props.options">
    </v-select>
</template>

<style >
@import "vue-select/dist/vue-select.css";

.v-select,
.v-select * {
    border-radius: 20px;
}
</style>