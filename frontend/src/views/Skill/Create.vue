<script setup>
import { createSkill, getOneSkill, updateSkill } from "@/api/skill";
import Button from '@/components/Button.vue';
import Card from '@/components/Card.vue';
import Input from '@/components/Form/Input.vue';
import { onMounted, reactive } from "vue";
import { useRouter } from "vue-router";


const route = useRouter();
const id = route.currentRoute.value.params.skill_id ?? null;

const _formValues = reactive({
    name: "",
});

onMounted(() => {
    if (id) {
        getOneSkill(id).then((res) => {
            console.log(res.data);
            _formValues.name = res.data.name;
        });
    }
});


function handleRegister() {
    console.log(_formValues);
    if (id) {
        updateSkill(id, { ..._formValues })
            .then(({ data }) => {
                console.log('success update');
            })
            .catch((error) => {
                console.log(error);
            });
    } else {
        createSkill({ ..._formValues })
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
            <Card :class="'w-96'">
                <template v-slot:title>
                    <span v-if="!id">Ajout d'un skill</span>
                    <span v-else>Modification d'un skill</span>
                </template>
                <template v-slot:body>
                    <Input :label="'Nom'" :placeholder="'Nom de la techno'" name="skill" v-model="_formValues.name" />
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