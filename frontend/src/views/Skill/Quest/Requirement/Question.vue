<script setup>
import Button from '../../../../components/Button.vue';
import Card from '../../../../components/Card.vue';
import QCM from '../../../../components/Form/QCM.vue';
import Radio from '../../../../components/Form/Radio.vue';


</script>

<template>
    <div class="grid grid-cols-2 2xl:grid-cols-8 gap-12">
        <!-- Question 1 -->
        <QCM>
            <template v-slot:question>
                1. Quel est le cycle de vie d'un composant React ?
            </template>
            <template v-slot:choices>
                <Radio :class="'col-span-2'" name="lifecycle" value="mountUpdateUnmount">a. Mounting, Updating, Unmounting
                </Radio>
                <Radio :class="'col-span-2'" name="lifecycle" value="initRenderDelete">b. Initialization, Rendering,
                    Deletion</Radio>
                <Radio :class="'col-span-2'" name="lifecycle" value="createReadUpdateDelete">c. Create, Read, Update, Delete
                </Radio>
                <Radio :class="'col-span-2'" name="lifecycle" value="noneOfTheAbove">d. Aucun des choix ci-dessus</Radio>
            </template>
        </QCM>

        <!-- Question 2 -->
        <QCM>
            <template v-slot:question>
                2. Qu'est-ce que JSX en React ?
            </template>
            <template v-slot:choices>
                <Radio :class="'col-span-2'" name="jsx" value="jsXml">a. JavaScript XML</Radio>
                <Radio :class="'col-span-2'" name="jsx" value="javaSyntaxExtension">b. Java Syntax Extension</Radio>
                <Radio :class="'col-span-2'" name="jsx" value="javascriptExtended">c. JavaScript Extended</Radio>
                <Radio :class="'col-span-2'" name="jsx" value="noneOfTheAbove">d. Aucun des choix ci-dessus</Radio>
            </template>
        </QCM>

        <!-- Question 3 -->
        <QCM>
            <template v-slot:question>
                3. Quelle est la méthode utilisée pour définir l'état initial d'un composant React ?
            </template>
            <template v-slot:choices>
                <Radio :class="'col-span-2'" name="stateMethod" value="getInitialState">a. getInitialState</Radio>
                <Radio :class="'col-span-2'" name="stateMethod" value="setInitialState">b. setInitialState</Radio>
                <Radio :class="'col-span-2'" name="stateMethod" value="initState">c. initState</Radio>
                <Radio :class="'col-span-2'" name="stateMethod" value="noneOfTheAbove">d. Aucun des choix ci-dessus</Radio>
            </template>
        </QCM>

        <!-- Question 4 -->
        <QCM>
            <template v-slot:question>
                4. Comment passer des données d'un parent à un enfant en React ?
            </template>
            <template v-slot:choices>
                <Radio :class="'col-span-2'" name="dataPassing" value="props">a. Props</Radio>
                <Radio :class="'col-span-2'" name="dataPassing" value="state">b. State</Radio>
                <Radio :class="'col-span-2'" name="dataPassing" value="context">c. Context</Radio>
                <Radio :class="'col-span-2'" name="dataPassing" value="noneOfTheAbove">d. Aucun des choix ci-dessus</Radio>
            </template>
        </QCM>
    </div>
    <div class="flex justify-center my-10">
        <Button :variant="'green'">Valider mes réponses</Button>
    </div>
</template>