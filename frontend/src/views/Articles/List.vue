<script setup>
import { getArticles, removeArticle } from "@/api/articles";
import { onMounted, reactive } from "vue";
import Button from '../../components/Button.vue';
import Card from '../../components/Card.vue';
import { inject } from "vue";

const currentUser = inject("auth_user");
const articles = reactive([]);

onMounted(() => {
    getArticles().then((res) => {
        articles.value = res.data;
    });
});

function formatDate(date) {
    const d = new Date(date);
    const day = d.getDay() < 10 ? `0${d.getDay()}` : d.getDay();
    const month = d.getMonth() < 10 ? `0${d.getMonth()}` : d.getMonth();
    return `${day}/${month}/${d.getFullYear()}`;
}

function deleteArticle(id) {
    removeArticle(id).then((res) => {
        console.log(res.data);
        articles.value = articles.value.filter((article) => article.id !== id);
    });
    console.log('delete');
}
</script>

<template>
    <div class="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
        <Button :href="'/articles/create'" :class="'rounded-[20px] shadow-[0_5px_55px_0_rgba(0,0,0,0.1)]'">
            <div class="flex items-center justify-center h-full gap-x-4">
                <font-awesome-icon :icon="['fas', 'plus']" class="text-2xl" />
                Ajouter un article
            </div>
        </Button>
        <Card :class="'col-span-1'">
            <template v-slot:title>
                Exemple d'Article Admin
            </template>
            <template v-slot:body>
                Créer le 05/06/2023
            </template>
            <template v-slot:footer>
                <div></div>
                <div>
                    <Button :variant="'green'" class="me-3">Accéder</Button>
                    <Button :variant="'blue'" class="me-3">Modifier</Button>
                    <Button :variant="'red'">Supprimer</Button>
                </div>
            </template>
        </Card>
        <template v-if="articles.value">
            <Card v-for="article in articles.value" :class="'col-span-1'">
                <template v-slot:title>
                    {{ article.title }}
                </template>
                <template v-slot:body>
                    Créer le {{ formatDate(article.createdAt) }}
                </template>
                <template v-slot:footer>
                    <div></div>
                    <div>
                        <Button :variant="'green'" :href="`/articles/${article.id}`" class="me-3">Accéder</Button>
                        <Button v-if="currentUser.value.role === 'ADMIN'" :variant="'blue'"
                            :href="`/articles/update/${article.id}`" class="me-3">Modifier</Button>
                        <Button v-if="currentUser.value.role === 'ADMIN'" :variant="'red'"
                            @click="deleteArticle(article.id)">Supprimer</Button>

                    </div>
                </template>
            </Card>
        </template>

    </div>
</template>