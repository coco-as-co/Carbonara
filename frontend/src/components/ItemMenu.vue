<script setup>
const props = defineProps({
    title: String,
    icon: String,
    path: String,
})
</script>

<template>
    <router-link
        class="w-[60px] h-[60px] shadow-[0_5px_15px_0_rgba(0,0,0,0.1)] rounded-[15px] text-[#8c8c8c] hover:text-[#E53F49] hover:scale-110 transition-all duration-200"
        :to="props.path">
        <!-- Icon -->
        <div class="flex justify-center items-center w-full h-full">
            <font-awesome-icon :icon="['fa', props.icon ?? '']" class="text-lg" />
        </div>
    </router-link>
</template>

<style scoped>
.router-link-active {
    background-color: #E53F49;
    color: white;
    animation: pulse .5s normal;
    transform: scale(1.1);
}

.router-link-active:hover {
    background-color: #E53F49;
    color: white;
}

@keyframes pulse {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.2);
    }

    100% {
        transform: scale(1.1);
    }
}
</style>