<script setup>

const props = defineProps({
    label: {
        type: String,
        required: true
    },
    placeholder: {
        type: String,
        required: true
    },
    error: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: false
    },
    modelValue: {
        type: String,
        required: false
    }
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (event) => {
    emit('update:modelValue', event.target.value)
}
</script>

<template>
    <div>
        <label :for="props.name" class="block text-sm text-gray-500">
        </label>

        <input type="text" :placeholder="props.placeholder" :name="props.name" :id="props.name" @input="updateValue"
            :value="props.modelValue"
            class="block mt-2 w-full placeholder-gray-400/70  rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-gray-700 focus:border-[#5B98D2] focus:outline-none focus:ring focus:ring-[#dbedff] focus:ring-opacity-40" />

        <p class="mt-3 text-xs text-[#5B98D2]">{{ props.error }}</p>
    </div>
</template>

<style scoped></style>