<script setup>
const props = defineProps({
    name: String,
    value: String,
})
</script>

<template>
    <div>
        <input type="radio" :name="props.name" :value="props.value" :id="props.name + props.value" class="hidden peer" />
        <label :for="props.name + props.value"
            class="flex flex-col gap-y-2 p-[20px] bg-[#FDFDFD] shadow-[0_5px_30px_0_rgba(0,0,0,0.1)] rounded-[20px] h-fit cursor-pointer border-2 border-[#FDFDFD] peer-checked:bg-[#dbedff] peer-checked:border-[#5B98D2] transition-all duration-150">

            <h1 class="text-sm font-semibold text-gray-800">
                <slot></slot>
            </h1>
        </label>
    </div>
</template>

<style scoped></style>