<script setup>
import Button from '../../components/Button.vue';
import Card from '../../components/Card.vue';


</script>

<template>
    <div class="grid grid-cols-2 gap-8 xl:grid-cols-3">
        <Card :class="'col-span-2'">
            <template v-slot:title>
                <div class="flex gap-x-5 items-center">
                    <img class="object-cover w-[68px] h-[68px] rounded-[20px]"
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=faceare&facepad=3&w=688&h=688&q=100"
                        alt="">
                    <div class="flex flex-col">
                        <div>Nikolas TESLA</div>
                        <div class="text-sm text-gray-600">
                            <div class="flex gap-x-2">
                                <img src="/badge/bronze/html5.png" alt="" class="w-[30px] h-[30px]">
                                <img src="/badge/diamond/carbon.png" alt="" class="w-[30px] h-[30px]">
                            </div>
                        </div>
                    </div>
                </div>
            </template>
            <template v-slot:body>
                <div class="flex gap-20 pt-5">
                    <!-- EXP / LVL -->
                    <div class="flex flex-col gap-5 w-[50%]">
                        <div class="relative w-full bg-slate-200 h-[20px] rounded-full">
                            <div class="absolute left-0 -top-5">Niv. 3</div>
                            <div class="absolute top-0 left-0 bg-[#5B98D2] h-[20px] text-center text-[#dbedff] font-semibold text-sm rounded-full"
                                style="width: 30%">
                                30 / 100
                            </div>
                            <div class="absolute right-0 -top-5">Niv. 4</div>
                        </div>


                        <div class="flex flex-wrap gap-3 h-fit">
                            <span
                                class="flex gap-x-2 justify-center items-center px-3 py-1 text-gray-700 bg-gray-200 rounded-full">
                                <font-awesome-icon :icon="['fas', 'phone']" />
                                <p>06.01.20.30.40</p>
                            </span>
                            <span
                                class="flex gap-x-2 justify-center items-center px-3 py-1 text-gray-700 bg-gray-200 rounded-full">
                                <font-awesome-icon :icon="['fas', 'briefcase']" />
                                <p>PMU</p>
                            </span>
                            <span
                                class="flex gap-x-2 justify-center items-center px-3 py-1 text-amber-700 bg-amber-200 rounded-full">
                                <font-awesome-icon :icon="['fas', 'star']" />
                                <p>ReactJS</p>
                            </span>
                        </div>
                    </div>

                    <div>
                        <ol class="relative border-l border-gray-200">
                            <li class="mb-10 ml-6">
                                <span
                                    class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-100 rounded-full ring-8 ring-white">
                                    <svg aria-hidden="true" class="w-3 h-3 text-blue-800" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                                <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900">
                                    SNCF
                                </h3>
                                <time class="block mb-2 text-sm font-normal leading-none text-gray-400">
                                    1 Janvier 2021 - 28 Mai 2021
                                </time>
                            </li>
                            <li class="mb-10 ml-6">
                                <span
                                    class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-100 rounded-full ring-8 ring-white">
                                    <svg aria-hidden="true" class="w-3 h-3 text-blue-800" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                                <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900">
                                    Edenred
                                </h3>
                                <time class="block mb-2 text-sm font-normal leading-none text-gray-400">
                                    8 Juin 2021 - 31 Décembre 2021
                                </time>
                            </li>
                            <li class="mb-10 ml-6">
                                <span
                                    class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-100 rounded-full ring-8 ring-white">
                                    <svg aria-hidden="true" class="w-3 h-3 text-blue-800" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                                <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900">
                                    PMU
                                </h3>
                                <time class="block mb-2 text-sm font-normal leading-none text-gray-400">
                                    1 Janvier 2022 - 31 Mars 2022
                                </time>
                            </li>

                        </ol>

                    </div>
                    <!-- Missions -->
                </div>
            </template>
        </Card>

        <!-- COLLÈGUES -->
        <Card>
            <template v-slot:title>
                Collègues
            </template>
            <template v-slot:body>
                <div class="grid grid-cols-1 gap-5 xl:grid-cols-2">
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
                        <template v-slot:footer>
                            <div></div>
                            <Button :variant="'blue'" :href="'/skills/2/quests/2'">
                                <font-awesome-icon :icon="['fas', 'eye']" />
                            </Button>
                        </template>
                    </Card>
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
                        <template v-slot:footer>
                            <div></div>
                            <Button :variant="'blue'" :href="'/skills/2/quests/2'">
                                <font-awesome-icon :icon="['fas', 'eye']" />
                            </Button>
                        </template>
                    </Card>
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
                        <template v-slot:footer>
                            <div></div>
                            <Button :variant="'blue'" :href="'/skills/2/quests/2'">
                                <font-awesome-icon :icon="['fas', 'eye']" />
                            </Button>
                        </template>
                    </Card>
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
                        <template v-slot:footer>
                            <div></div>
                            <Button :variant="'blue'" :href="'/skills/2/quests/2'">
                                <font-awesome-icon :icon="['fas', 'eye']" />
                            </Button>
                        </template>
                    </Card>
                </div>
            </template>
        </Card>
    </div>
</template>