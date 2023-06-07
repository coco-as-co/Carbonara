<script setup>
import { index, register } from "@/api/auth";
import { useGetCurrentUser } from "@/services";
import { onMounted, provide, reactive } from "vue";
import Header from "./components/Header.vue";
import Menu from "./components/Menu.vue";

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
  <div class="flex min-height h-full justify-between w-screen overflow-hidden">
    <Menu v-if="currentUser" />
    <div class="flex-col w-full h-screen overflow-y-auto justify-between">
      <Header v-if="currentUser" />
      <main className="flex min-height items-center justify-center min-h-full h-full">
        <router-view />
      </main>
    </div>
  </div>
</template>

<style scoped></style>
