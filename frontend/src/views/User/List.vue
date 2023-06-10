<script setup>
import Button from '../../components/Button.vue';
import Card from '../../components/Card.vue';
import Select from '../../components/Form/Select.vue';


</script>

<template>
    <div class="grid grid-cols-2 gap-8 xl:grid-cols-3 2xl:grid-cols-4">
        <Card>
            <template v-slot:title>
                <div class="flex gap-x-5 items-center">
                    <img class="object-cover w-[68px] h-[68px] rounded-[20px]"
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=faceare&facepad=3&w=688&h=688&q=100"
                        alt="">
                    <div class="flex flex-col">
                        <div>Nikolas TESLA</div>
                        <div class="text-sm text-gray-600">
                            <div class="flex gap-x-2">
                                <img src="/badge/bronze/html5.png" alt="" class="w-[20px] h-[20px]">
                                <img src="/badge/diamond/carbon.png" alt="" class="w-[20px] h-[20px]">
                            </div>
                        </div>
                    </div>
                </div>
            </template>
            <template v-slot:body>
                <div class="flex flex-wrap gap-3">
                    <span class="flex gap-x-2 justify-center items-center px-3 py-1 text-gray-700 bg-gray-200 rounded-full">
                        <font-awesome-icon :icon="['fas', 'phone']" />
                        <p>06.01.20.30.40</p>
                    </span>
                    <span class="flex gap-x-2 justify-center items-center px-3 py-1 text-gray-700 bg-gray-200 rounded-full">
                        <font-awesome-icon :icon="['fas', 'briefcase']" />
                        <p>PMU</p>
                    </span>
                    <span
                        class="flex gap-x-2 justify-center items-center px-3 py-1 text-amber-700 bg-amber-200 rounded-full">
                        <font-awesome-icon :icon="['fas', 'star']" />
                        <p>ReactJS</p>
                    </span>
                </div>
            </template>
            <template v-slot:footer>
                <div></div>
                <Button :variant="'blue'" :href="'/users/2'">
                    <font-awesome-icon :icon="['fas', 'eye']" />
                </Button>
            </template>
        </Card>
    </div>
</template>