<script setup>
import { inject } from "vue";
import Button from '../components/Button.vue';
import Card from '../components/Card.vue';

const currentUser = inject("auth_user");

</script>

<template>
    <div class="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
        <Card :class="'col-span-4'">
            <template v-slot:title>
                Bienvenue, {{ currentUser.value.firstname }}
            </template>
            <template v-slot:body>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            </template>
        </Card>
        <Card class="bg-indigo-300">
            <template v-slot:title>
                Anniversaires <font-awesome-icon :icon="['fas', 'cake-candles']" bounce />
            </template>
            <template v-slot:body>
                <Card class="bg-indigo-200">
                    <template v-slot:body>
                        <ul>
                            <li>John Doe</li>
                            <li>Jane Smith</li>
                            <li>Michael Johnson</li>
                            <li>Emily Davis</li>
                        </ul>
                    </template>
                </Card>
            </template>
        </Card>

        <!-- EVENT -->
        <Card>
            <template v-slot:title>
                Les événements à venir
            </template>
            <template v-slot:body>
                <div class="grid grid-cols-1 row-span-2 gap-5">

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
                            Participez à notre atelier de développement personnel axé sur la croissance personnelle et la
                            réalisation de
                            vos objectifs. Acquérez des compétences pratiques pour améliorer vot...
                        </template>
                    </Card>
                </div>
            </template>
        </Card>
        <!-- ARTICLE -->
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
                fournit toutes les informations essentielles dont vous avez besoin pour vous familiariser rapidement
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

        <br>

        <!-- SUGGESTED QUESTS -->
        <Card>
            <template v-slot:header>
                <span class="text-sm font-light text-gray-800">Quête</span>
                <div>
                    <span class="px-3 py-1 text-xs text-amber-800 uppercase bg-amber-200 rounded-full me-3">Niv.
                        1</span>
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
                    <span class="px-3 py-1 text-xs text-amber-800 uppercase bg-amber-200 rounded-full me-3">Niv.
                        2</span>
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
                <Button :variant="'blue'" :href="'/skills/2/quests/2'">Commencer la quête</Button>
            </template>
        </Card>
        <Card>
            <template v-slot:header>
                <span class="text-sm font-light text-gray-800">Quête</span>
                <div>
                    <span class="px-3 py-1 text-xs text-amber-800 uppercase bg-amber-200 rounded-full me-3">Niv.
                        3</span>
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
                <Button :variant="'blue'" :href="'/skills/2/quests/3'">Commencer la quête</Button>
            </template>
        </Card>
    </div>
</template>