<script setup>
import { computed } from 'vue';

const props = defineProps({
    variant: {
        type: String,
        default: 'blue'
    },
    href: {
        type: String,
        default: null
    },
})

const variantClasses = computed(() => {
    const variants = {
        blue: {
            textColor: 'text-[#5B98D2] hover:text-[#FDFDFD]',
            bgColor: 'bg-[#dbedff] hover:bg-[#5B98D2]',
        },
        green: {
            textColor: 'text-[#00BB7E] hover:text-[#FDFDFD]',
            bgColor: 'bg-[#d9f6ec] hover:bg-[#00BB7E]',
        },
        red: {
            textColor: 'text-[#E53F49] hover:text-[#FDFDFD]',
            bgColor: 'bg-[#fed7d7] hover:bg-[#E53F49]',
        },
        dark: {
            textColor: 'text-[#282B2A] hover:text-[#FDFDFD]',
            bgColor: 'bg-[#F2F2F2] hover:bg-[#282B2A]',
        },
    }

    return variants[props.variant]
})

</script>

<template>
    <component :is="props.href ? 'router-link' : 'button'" :to="props.href"
        class="px-4 py-2 align-middle text-sm uppercase rounded-[10px] focus:outline-none border-none hover:shadow-[0_2px_10px_0_rgba(0,0,0,0.1)] duration-200 transition-all"
        :class="[variantClasses.textColor, variantClasses.bgColor]">
        <slot></slot>
    </component>
</template>