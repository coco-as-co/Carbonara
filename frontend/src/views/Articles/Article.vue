<script setup>
import { getOneArticle } from "@/api/articles";
import { onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { inject } from "vue";
import Card from "../../components/Card.vue";
const route = useRouter();

const currentUser = inject("auth_user");
const article_id = route.currentRoute.value.params.article_id ?? null;
const article = reactive({
    data: []
});

onMounted(() => {
    if (article_id) {
        getOneArticle(article_id).then((res) => {
            article.data = res.data;
        });
    }
});
</script>

<template>
    <div class="grid grid-cols-2 gap-8 xl:grid-cols-3">
        <Card :class="'col-span-2'">
            <template v-slot:title>
                <h1>{{ article.data.title }}</h1>
            </template>
            <template v-slot:body>
                <div v-html="article.data.content"></div>
            </template>
        </Card>
        <Card :class="'xl:col-span-1 col-span-2'">
            <template v-slot:title>
                Commentaires
            </template>
            <template v-slot:body>
                <div v-if="article.data.comments">
                    <Card v-for="comment in article.data.comments">
                        <template v-slot:header>
                            <p>{{ comment.user.firstname }}</p>
                            <p>{{ comment.createdAt }}</p>
                        </template>
                        <template v-slot:body>
                            <h2>{{ comment.title }}</h2>
                            <p>{{ comment.content }}</p>
                        </template>
                    </Card>
                </div>
            </template>
        </Card>
    </div>
</template>