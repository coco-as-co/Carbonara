<script setup></script>

<template>
    <div class="flex flex-col gap-y-3 p-[20px] bg-[#FDFDFD] shadow-[0_5px_55px_0_rgba(0,0,0,0.1)] rounded-[20px] h-fit">
        <div class="flex justify-between items-center" v-if="$slots.header">
            <slot name="header"></slot>
        </div>

        <h1 class="text-lg font-semibold text-gray-800" v-if="$slots.title">
            <slot name="title"></slot>
        </h1>
        <p class="text-sm text-gray-600" v-if="$slots.body">
            <slot name="body"></slot>
        </p>

        <div class="flex justify-between items-center mt-4" v-if="$slots.footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>