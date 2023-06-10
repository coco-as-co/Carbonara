<script setup>
import { createArticle, getOneArticle, updateArticle } from "@/api/articles";
import { getCategories } from "@/api/categories";
import Button from '@/components/Button.vue';
import Card from '@/components/Card.vue';
import Input from '@/components/Form/Input.vue';
import { onMounted, reactive } from "vue";
import { useRouter } from "vue-router";


const route = useRouter();
console.log(route.currentRoute.value.params.article_id);
const id = route.currentRoute.value.params.article_id ?? null;

const _formValues = reactive({
    title: "",
    content: "",
});

const _formCategories = reactive({
    categories: [],
});
onMounted(() => {
    if (id) {
        getOneArticle(id).then((res) => {
            console.log(res.data);
            _formValues.title = res.data.title;
            _formValues.content = res.data.content;
            // _formValues.categories = res.data.categories;
        });
    }
    getCategories().then((res) => {
        console.log(res.data);
        _formCategories.categories = res.data;
    });
});


function handleRegister() {
    console.log(_formValues);
    if (id) {
        updateArticle(id, { ..._formValues })
            .then(({ data }) => {
                console.log('success update');
                route.push({ name: 'articlesList' });
            })
            .catch((error) => {
                console.log(error);
            });
    } else {
        createArticle({ ..._formValues })
            .then(({ data }) => {
                console.log('success create');
                route.push({ name: 'articlesList' });
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
                    <span v-if="!id">Ajout d'un article</span>
                    <span v-else>Modification d'un article</span>
                </template>
                <template v-slot:body>
                    <Input :label="'Title'" :placeholder="'Nom de l\'article'" name="article" v-model="_formValues.title" />
                    <Input :label="'Content'" :placeholder="'Contenu de l\'article'" name="article" v-model="_formValues.content" />
                    
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