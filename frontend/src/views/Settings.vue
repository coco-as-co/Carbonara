<script setup>
import { inject } from "vue";
import Button from '../components/Button.vue';
import Card from '../components/Card.vue';

</script>

<template>
    <div class="flex justify-center items-center">
        <div :class="'w-[1200px]'">
            <div class="flex gap-x-5 items-stretch h-full">
                <Card :class="'w-[300px] bg-gray-100 sticky top-[150px]'">
                    <template v-slot:header>
                        <p class="mb-5">Menu</p>
                    </template>
                    <template v-slot:body>
                        <div class="flex flex-col gap-y-3 w-full">
                            <Button :variant="'dark'" :class="'w-full text-start'">Général</Button>
                            <Button :variant="'dark'" :class="'w-full text-start'">Accessibilité</Button>
                            <Button :variant="'dark'" :class="'w-full text-start'">Sécurité</Button>
                            <Button :variant="'dark'" :class="'w-full text-start'">Autres</Button>
                        </div>
                    </template>
                </Card>
                <Card :class="'w-[900px] self-stretch'">
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
        </div>
    </div>
</template>