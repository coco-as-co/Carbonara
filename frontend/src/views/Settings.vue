<script setup>
import { inject } from "vue";
import Button from '../components/Button.vue';
import Card from '../components/Card.vue';

</script>

<template>
    <div class="flex justify-center items-center">
        <Card :class="'p-0 w-[1200px]'">
            <template v-slot:body>
                <div class="flex items-stretch h-full">
                    <Card :class="'w-[300px] bg-gray-100 rounded-e-none'">
                        <template v-slot:header>
                            <p class="">Menu</p>
                        </template>
                        <template v-slot:body>
                            <div class="flex flex-col gap-y-3 w-full">
                                <Button :variant="'dark'" :class="'w-full text-start'">Général</Button>
                                <Button :variant="'dark'" :class="'w-full text-start'">Accessibilité</Button>
                                <Button :variant="'dark'" :class="'w-full text-start'">Sécurité</Button>
                                <Button :variant="'dark'" :class="'w-full text-start'">Général</Button>
                            </div>
                        </template>
                    </Card>
                    <Card :class="'rounded-s-none w-[900px] self-stretch'">
                        <template v-slot:body>
                            <div class="">
                                <h1 class="pb-5 mb-5 text-2xl border-b">Général</h1>
                                <ul>
                                    <li>
                                        <label>Nom de l'outil</label>
                                        <input />
                                    </li>
                                </ul>
                            </div>
                        </template>
                    </Card>
                </div>
            </template>
        </Card>
    </div>
</template>