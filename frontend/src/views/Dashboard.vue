<script setup>
import Button from '../components/Button.vue';
import Card from '../components/Card.vue';
import Radio from '../components/Form/Radio.vue';


</script>

<template>
    <div class="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
        <Card :class="'col-span-4'">
            <template v-slot:title>
                Bienvenue, Nico
            </template>
            <template v-slot:body>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            </template>
        </Card>
        <Card>
            <template v-slot:title>
                Anniversaires
            </template>
            <template v-slot:body>



            </template>
        </Card>
        <Card>
            <template v-slot:title>
                Vos prochains événements
            </template>
            <template v-slot:body>

            </template>
        </Card>
    </div>
</template>