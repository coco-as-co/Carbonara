<script setup>
import { useGetCurrentUser } from "@/services";
import { onMounted, provide, reactive } from "vue";
import Header from "./components/Header.vue";
import Menu from "./components/Menu.vue";

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
  <div class="flex overflow-auto justify-between w-screen h-full min-height">
    <Menu v-if="currentUser.value" :class="'z-50'" />
    <div class="relative flex flex-col w-full h-screen justify-between ms-[170px] me-[35px]">
      <Header v-if="currentUser.value" :class="'z-20'" />
      <main :class="'pt-[130px] pb-[35px] z-10'">
        <router-view />
      </main>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
