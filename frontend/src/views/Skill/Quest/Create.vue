<script setup>
import { createQuest, getOneQuest, updateQuest } from "@/api/quest";
import { getOneSkill } from '@/api/skill';
import Button from '@/components/Button.vue';
import Card from '@/components/Card.vue';
import Input from '@/components/Form/Input.vue';
import { onMounted, reactive } from "vue";
import { useRouter } from "vue-router";


const route = useRouter();
const quest_id = route.currentRoute.value.params.quest_id ?? null;
const skill_id = route.currentRoute.value.params.skill_id ?? null;
const skill = reactive({})

const _formValues = reactive({
    name: "",
    description: "",
    difficulty: "",
    experience: "",
    skill: skill_id,
});

onMounted(() => {
    if (skill_id) {
        getOneSkill(skill_id).then((res) => {
            skill.name = res.data.name;
        });
    }
    if (quest_id) {
        getOneQuest(quest_id).then((res) => {
            console.log(res);
            _formValues.name = res.data.name;
            _formValues.description = res.data.description;
            _formValues.difficulty = res.data.difficulty;
            _formValues.experience = res.data.experience;
        });
    }
});


function handleRegister() {
    if (quest_id) {
        updateQuest(quest_id, { ..._formValues })
            .then(({ data }) => {
                console.log('success update');
            })
            .catch((error) => {
                console.log(error);
            });
    } else {
        createQuest({ ..._formValues })
            .then(({ data }) => {
                console.log('success create');
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

</script>

<template>
    <div class="flex justify-center">
        <form @submit.prevent="handleRegister">
            <Card>
                <template v-slot:title>
                    <span v-if="!id">Ajout d'une quête pour la compétence <b>{{ skill.name }}</b></span>
                    <span v-else>Modification d'une quête pour la compétence <b>{{ skill.name }}</b></span>
                </template>
                <template v-slot:body>
                    <Input :label="'Nom de la quête'" :placeholder="'Nom de la quête'" name="name"
                        v-model="_formValues.name" />
                    <Input :label="'Description de la quête'" :placeholder="'Description de la quête'" name="description"
                        v-model="_formValues.description" />
                    <Input :label="'Difficulté de la quête'" :placeholder="'Difficulté de la quête'" name="difficulté"
                        v-model="_formValues.difficulty" />
                    <Input :label="'Nombre d\'ex de la quête'" :placeholder="'Experience de la quête'" name="experience"
                        v-model="_formValues.experience" />
                </template>
                <template v-slot:footer>
                    <div></div>
                    <Button>
                        <span v-if="!id">Ajouter</span>
                        <span v-else>Modifier</span>
                    </Button>
                </template>
            </Card>
        </form>
    </div>
</template>