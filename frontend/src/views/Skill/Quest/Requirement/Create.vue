<script setup>
import Button from '../../../../components/Button.vue';
import Card from '../../../../components/Card.vue';
import Input from '../../../../components/Form/Input.vue';


</script>

<template>
    <div class="flex justify-center">
        <Card class="w-[400px]">
            <template v-slot:title>
                <span>Modification d'une quête pour la compétence <b>ReactJS</b></span>
            </template>
            <template v-slot:body>
                <Input :label="'Nom de la quête'" :placeholder="'Nom de la quête'" name="name" />
                <Input :label="'Description de la quête'" :placeholder="'Description de la quête'" name="description" />
                <Input :label="'Difficulté de la quête'" :placeholder="'Difficulté de la quête'" name="difficulté" />
                <Input :label="'Nombre d\'ex de la quête'" :placeholder="'Experience de la quête'" name="experience" />
            </template>
            <template v-slot:footer>
                <div></div>
                <Button>
                    <span v-if="!id">Ajouter</span>
                    <span v-else>Modifier</span>
                </Button>
            </template>
        </Card>
    </div>
</template>