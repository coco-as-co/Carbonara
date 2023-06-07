<script setup>
import { index, register } from "@/api/auth";
import { useGetCurrentUser } from "@/services";
import { onMounted, provide, reactive } from "vue";
import Header from "./components/Header.vue";

function actionClick() {
  index().then((res) => {
    console.log(res.data);
  });

  register({
    "password": "$PasswordOf18Characters$",
    "email": "coco10@mail.com",
    "firstname": "coco",
    "lastname": "coco"
  }).then((res) => {
    console.log(res.data);
  });
}

const currentUser = reactive({ value: {} });
provide("auth_user", currentUser);
provide("app_refresh", refreshUser);

async function refreshUser() {
  currentUser.value = await useGetCurrentUser().catch(() => null);
  return currentUser.value;
}

onMounted(async () => {
  await refreshUser();
});
</script>

<template>
  <div className="min-height h-full">
    <Header />
    <button @click="actionClick">APPUYER</button>
    <main className="flex min-height items-center justify-center bg-gray-600 min-h-full h-full">
      <router-view class="min-h-full h-full" />
    </main>
  </div>
</template>

<style scoped>
.min-height {
  min-height: calc(100vh - 72px);
}
</style>
