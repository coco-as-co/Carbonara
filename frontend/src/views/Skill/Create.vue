<script setup>
import Button from '../../components/Button.vue';
import Card from '../../components/Card.vue';
import Input from '../../components/Form/Input.vue';


</script>

<template>
    <div class="flex justify-center">
        <Card :class="'w-96'">
            <template v-slot:title>
                Ajout d'un skill
            </template>
            <template v-slot:body>
                <Input :label="'Nom'" :placeholder="'Nom de la techno'" />
            </template>
            <template v-slot:footer>
                <div></div>
                <Button>Ajouter</Button>
            </template>
        </Card>
    </div>
</template>