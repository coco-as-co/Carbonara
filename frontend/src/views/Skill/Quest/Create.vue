<script setup>
import Button from '../../../components/Button.vue';
import Card from '../../../components/Card.vue';


</script>

<template>
    <div class="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
        <Card>
            <template v-slot:header>
                <span class="text-sm font-light text-gray-800">Quête</span>
                <div>
                    <span class="px-3 py-1 text-xs text-amber-800 uppercase bg-amber-200 rounded-full me-3">Niv. 1</span>
                    <span class="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full">ReactJS</span>
                </div>
            </template>
            <template v-slot:title>
                Le premier donjon de ReactJS
            </template>
            <template v-slot:body>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            </template>
            <template v-slot:footer>
                <p class="text-xs text-gray-600 font-semibold">12 prérequis</p>
                <div class="px-4 py-2 text-sm uppercase rounded-[10px] text-[#00BB7E] bg-[#d9f6ec]">

                    <font-awesome-icon :icon="['fas', 'check']" class="text-green-500" />
                </div>
            </template>
        </Card>
        <Card>
            <template v-slot:header>
                <span class="text-sm font-light text-gray-800">Quête</span>
                <div>
                    <span class="px-3 py-1 text-xs text-amber-800 uppercase bg-amber-200 rounded-full me-3">Niv. 2</span>
                    <span class="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full">ReactJS</span>
                </div>
            </template>
            <template v-slot:title>
                Le second donjon de ReactJS
            </template>
            <template v-slot:body>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            </template>
            <template v-slot:footer>
                <p class="text-xs text-gray-600 font-semibold">12 prérequis</p>
                <Button :variant="'blue'" :href="'/quests/2/2'">Prendre la quête</Button>
            </template>
        </Card>
    </div>
</template>