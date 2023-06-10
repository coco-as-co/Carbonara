<script setup>
import { getArticles } from "@/api/articles";
import { onMounted, reactive } from "vue";
import Button from '../../components/Button.vue';
import Card from '../../components/Card.vue';

const articles = reactive([]);

onMounted(() => {
    getArticles().then((res) => {
        articles.value = res.data;
    });
});

</script>

<template>
    <div class="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">

        <template v-if="articles.value">
            <Card v-for="article in articles.value" :class="'col-span-1'">
                <template v-slot:title>
                    {{ article.title }}
                </template>
                <template v-slot:footer>
                    <div></div>
                    <div>
                        <Button :variant="'green'" :href="`/articles/${article.id}`" class="me-3">Accéder</Button>
                        <Button :variant="'blue'" :href="`/articles/${article.id}`">Modifier</Button>
                    </div>
                </template>
            </Card>
        </template>
        <Button :href="'/articles/create'" :class="'rounded-[20px] shadow-[0_5px_55px_0_rgba(0,0,0,0.1)]'">
            <div class="flex items-center justify-center h-full gap-x-4">
                <font-awesome-icon :icon="['fas', 'plus']" class="text-2xl" />
                Ajouter un article
            </div>
        </Button>
    </div>
</template>