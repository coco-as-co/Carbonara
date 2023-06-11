<script setup>
import { inject } from "vue";
import Button from '../components/Button.vue';
import Card from '../components/Card.vue';

const currentUser = inject("auth_user");

</script>

<template>
    <div class="grid grid-cols-2 grid-flow-row-dense gap-8 xl:grid-cols-3 2xl:grid-cols-4">
        <Card :class="'col-span-4 bg-gray-800'">
            <template v-slot:title>
                <div class="text-white">
                    Bienvenue, {{ currentUser.value.firstname }}
                </div>
            </template>
            <template v-slot:body>

                <div class="text-[#FDFDFD]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                </div>
            </template>
        </Card>

        <div class="flex flex-wrap col-span-2 gap-8 justify-start h-fit">
            <Card :class="'w-[calc(50%-20px)] box-border bg-[#d9f6ec]'">
                <template v-slot:title>
                    <div class="text-[#00BB7E]">
                        <h1>145</h1>
                    </div>
                </template>
                <template v-slot:body>
                    <div class="text-[#00BB7E]">
                        collaborateurs chez Carbon
                    </div>
                </template>
            </Card>

            <Card :class="'w-[calc(50%-20px)] box-border bg-[#dbedff]'">
                <template v-slot:title>
                    <div class="text-[#5B98D2]">
                        <h1>3</h1>
                    </div>
                </template>
                <template v-slot:body>
                    <div class="text-[#5B98D2]">
                        quêtes disponibles
                    </div>
                </template>
            </Card>

            <Card :class="'w-[calc(50%-20px)] box-border bg-[#fed7d7]'">
                <template v-slot:title>
                    <div class="text-[#e53f49]">
                        <h1>50</h1>
                    </div>
                </template>
                <template v-slot:body>
                    <div class="text-[#e53f49]">
                        clients fidèles
                    </div>
                </template>
            </Card>
            <!-- ARTICLE -->
            <Card :class="'w-full'">
                <template v-slot:title>
                    Liens importants
                </template>
                <template v-slot:body>
                    <div class="grid grid-cols-2 gap-5">
                        <Card>
                            <template v-slot:title>
                                FAQ
                            </template>
                            <template v-slot:body>
                                <ul>
                                    <li>Comment faire une demande de congés ?</li>
                                    <li>Que faire en cas de problème informatique ?</li>
                                    <li>Où se trouve la salle RH ?</li>
                                </ul>
                            </template>
                        </Card>

                        <Card>
                            <template v-slot:title>
                                Guide utilisateur pour les nouveaux employés
                            </template>
                            <template v-slot:body>
                                Notre guide utilisateur complet est conçu spécialement pour les nouveaux employés. Il
                                fournit toutes les informations essentielles dont vous avez besoin pour vous familiariser
                                rapidement
                                avec
                                notre entreprise, nos processus et nos politiques.
                            </template>
                        </Card>

                        <Card>
                            <template v-slot:title>
                                Les contacts utiles
                            </template>
                            <template v-slot:body>
                                Découvrez notre répertoire des contacts utiles, une ressource essentielle pour faciliter vos
                                interactions
                                professionnelles.
                            </template>
                        </Card>
                    </div>
                </template>
            </Card>
        </div>



        <div class="grid grid-cols-2 col-span-2 gap-8">
            <!-- SUGGESTED QUESTS -->
            <Card :class="'col-span-2'">
                <template v-slot:title>
                    Notre suggestion de quêtes
                </template>
                <template v-slot:body>
                    <div class="grid grid-cols-2 gap-5">

                        <Card>
                            <template v-slot:header>
                                <span class="text-sm font-light text-gray-800">Quête</span>
                                <div>
                                    <span
                                        class="px-3 py-1 text-xs text-amber-800 uppercase bg-amber-200 rounded-full me-3">Niv.
                                        1</span>
                                    <span
                                        class="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full">ReactJS</span>
                                </div>
                            </template>
                            <template v-slot:title>
                                Le premier donjon de ReactJS
                            </template>
                            <template v-slot:body>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                            </template>
                            <template v-slot:footer>
                                <p class="text-xs font-semibold text-gray-600">12 prérequis</p>
                                <div class="px-4 py-2 text-sm uppercase rounded-[10px] text-[#00BB7E] bg-[#d9f6ec]">

                                    <font-awesome-icon :icon="['fas', 'check']" class="text-green-500" />
                                </div>
                            </template>
                        </Card>
                        <Card>
                            <template v-slot:header>
                                <span class="text-sm font-light text-gray-800">Quête</span>
                                <div>
                                    <span
                                        class="px-3 py-1 text-xs text-amber-800 uppercase bg-amber-200 rounded-full me-3">Niv.
                                        2</span>
                                    <span
                                        class="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full">ReactJS</span>
                                </div>
                            </template>
                            <template v-slot:title>
                                Le second donjon de ReactJS
                            </template>
                            <template v-slot:body>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                            </template>
                            <template v-slot:footer>
                                <p class="text-xs font-semibold text-gray-600">12 prérequis</p>
                                <Button :variant="'blue'" :href="'/skills/2/quests/2'">Commencer la quête</Button>
                            </template>
                        </Card>
                        <Card>
                            <template v-slot:header>
                                <span class="text-sm font-light text-gray-800">Quête</span>
                                <div>
                                    <span
                                        class="px-3 py-1 text-xs text-amber-800 uppercase bg-amber-200 rounded-full me-3">Niv.
                                        3</span>
                                    <span
                                        class="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full">ReactJS</span>
                                </div>
                            </template>
                            <template v-slot:title>
                                Le second donjon de ReactJS
                            </template>
                            <template v-slot:body>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                            </template>
                            <template v-slot:footer>
                                <p class="text-xs font-semibold text-gray-600">12 prérequis</p>
                                <Button :variant="'blue'" :href="'/skills/2/quests/3'">Commencer la quête</Button>
                            </template>
                        </Card>
                    </div>
                </template>
            </Card>

            <!-- EVENT -->
            <Card :class="'col-span-1'">
                <template v-slot:title>
                    Les événements à venir
                </template>
                <template v-slot:body>
                    <div class="grid grid-cols-1 gap-5">

                        <Card>
                            <template v-slot:title>
                                Karting : Thème Mario
                                <div class="text-sm text-gray-500">
                                    Date : 03/09/1994 -
                                    14 participants
                                </div>
                            </template>
                            <template v-slot:body>
                                Venez participer à une expérience de karting inoubliable avec notre thème Mario Kart !
                                Mettez-vous
                                dans
                                la
                                peau de vos personnages préférés, affrontez vos collègue...
                            </template>
                        </Card>

                        <Card>
                            <template v-slot:title>
                                Conférence sur l'innovation technologique
                                <div class="text-sm text-gray-500">
                                    Date : 03/09/1994 -
                                    7 participants
                                </div>
                            </template>
                            <template v-slot:body>
                                Rejoignez-nous pour une conférence passionnante sur les dernières avancées technologiques.
                                Découvrez
                                comment les nouvelles technologies peuvent tra...
                            </template>
                        </Card>

                        <Card>
                            <template v-slot:title>
                                Atelier de développement personnel
                                <div class="text-sm text-gray-500">
                                    Date : 03/09/1994 -
                                    3 participants
                                </div>
                            </template>
                            <template v-slot:body>
                                Participez à notre atelier de développement personnel axé sur la croissance personnelle et
                                la
                                réalisation de
                                vos objectifs. Acquérez des compétences pratiques pour améliorer vot...
                            </template>
                        </Card>
                    </div>
                </template>
            </Card>


            <Card class="bg-amber-200">
                <template v-slot:title>
                    <div class="text-amber-800">
                        Les anniversaires <font-awesome-icon :icon="['fas', 'cake-candles']" bounce />
                    </div>
                </template>
                <template v-slot:body>
                    <div class="grid grid-cols-1 gap-5">
                        <Card>
                            <template v-slot:body>
                                <div class="flex gap-x-5 items-center">
                                    <div>
                                        <h2 class="text-xl border-e-2 pe-5">
                                            19 Juin
                                        </h2>
                                    </div>
                                    <div>
                                        <p class="text-lg text-gray-600">Nicolas P.</p>
                                    </div>
                                </div>
                            </template>
                        </Card>
                        <Card>
                            <template v-slot:body>
                                <div class="flex gap-x-5 items-center">
                                    <div>
                                        <h2 class="text-xl border-e-2 pe-5">
                                            19 Juin
                                        </h2>
                                    </div>
                                    <div>
                                        <p class="text-lg text-gray-600">Nicolas P.</p>
                                    </div>
                                </div>
                            </template>
                        </Card>
                        <Card>
                            <template v-slot:body>
                                <div class="flex gap-x-5 items-center">
                                    <div>
                                        <h2 class="text-xl border-e-2 pe-5">
                                            19 Juin
                                        </h2>
                                    </div>
                                    <div>
                                        <p class="text-lg text-gray-600">Nicolas P.</p>
                                    </div>
                                </div>
                            </template>
                        </Card>
                        <Card>
                            <template v-slot:body>
                                <div class="flex gap-x-5 items-center">
                                    <div>
                                        <h2 class="text-xl border-e-2 pe-5">
                                            19 Juin
                                        </h2>
                                    </div>
                                    <div>
                                        <p class="text-lg text-gray-600">Nicolas P.</p>
                                    </div>
                                </div>
                            </template>
                        </Card>
                        <Card>
                            <template v-slot:body>
                                <div class="flex gap-x-5 items-center">
                                    <div>
                                        <h2 class="text-xl border-e-2 pe-5">
                                            19 Juin
                                        </h2>
                                    </div>
                                    <div>
                                        <p class="text-lg text-gray-600">Nicolas P.</p>
                                    </div>
                                </div>
                            </template>
                        </Card>
                        <Card>
                            <template v-slot:body>
                                <div class="flex gap-x-5 items-center">
                                    <div>
                                        <h2 class="text-xl border-e-2 pe-5">
                                            19 Juin
                                        </h2>
                                    </div>
                                    <div>
                                        <p class="text-lg text-gray-600">Nicolas P.</p>
                                    </div>
                                </div>
                            </template>
                        </Card>
                        <Card>
                            <template v-slot:body>
                                <div class="flex gap-x-5 items-center">
                                    <div>
                                        <h2 class="text-xl border-e-2 pe-5">
                                            19 Juin
                                        </h2>
                                    </div>
                                    <div>
                                        <p class="text-lg text-gray-600">Nicolas P.</p>
                                    </div>
                                </div>
                            </template>
                        </Card>
                    </div>
                </template>
            </Card>
        </div>


    </div>
</template>