<script setup>

const props = defineProps(
    {
        options: Array
    }
)

</script>

<template>
    <v-select :options="props.options">
    </v-select>
</template>

<style >
@import "vue-select/dist/vue-select.css";

.v-select,
.v-select * {
    border-radius: 20px;
}
</style>