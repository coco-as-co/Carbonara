<script setup>
const props = defineProps({
    title: String,
    icon: String,
    path: String
})
</script>

<template>
    <a class="w-[60px] h-[60px] shadow-[0_5px_15px_0_rgba(0,0,0,0.1)] rounded-xl" :href="props.path">

        <!-- Icon -->
        <div class="flex justify-center items-center w-full h-full">
            <font-awesome-icon :icon="['fa', props.icon ?? '']" class="text-[#8c8c8c]" />
        </div>

    </a>
</template>

<style scoped></style>