<script setup>
import { getOneArticle } from "@/api/articles";
import { onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { inject } from "vue";
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
    <h1>{{ article.data.title }}</h1>
    <p>{{ article.data.content }}</p>

    LISTE COMMENT
    <div v-if="article.data.comments">
        <div v-for="comment in article.data.comments">
            <p>{{ comment.content }}</p>
            <p>{{ comment.title }}</p>
            <p>{{ comment.user.firstname }}</p>
        </div>
    </div>
</template>