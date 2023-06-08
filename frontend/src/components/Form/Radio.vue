<script setup>
const props = defineProps({
    name: String,
    value: String,
})
</script>

<template>
    <label class="flex items-center gap-x-2 cursor-pointer"> <input type="radio" :name="props.name" :value="props.value"
            class="hidden" />
        <slot></slot>
    </label>
</template>