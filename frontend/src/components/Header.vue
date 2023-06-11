<script setup>
import { inject } from "vue";
const currentUser = inject("auth_user");
</script>

<template>
  <header class="fixed top-[35px] right-[52px] left-[170px] z-50">
    <div class="flex justify-between min-h-[60px] h-[60px]">
      <button @click="$router.go(-1)"
        class="bg-[#FDFDFD]/50 shadow-[0_5px_55px_0_rgba(0,0,0,0.1)] backdrop-blur-xl py-[20px] px-[35px] rounded-[20px] flex items-center">
        <font-awesome-icon :icon="['fas', 'chevron-left']" class="text-2xl me-5" />
        Retour
      </button>
      <div class="flex gap-x-5">
        <div
          class="bg-[#FDFDFD]/50 shadow-[0_5px_55px_0_rgba(0,0,0,0.1)] backdrop-blur-xl py-[10px] px-[20px] rounded-[20px] flex items-center gap-x-5">
          <div class="">
            Niv.
            <span class="text-lg font-extrabold">{{
              Math.floor(currentUser.value.experience / 100)
            }}</span>
          </div>
        </div>
        <div
          class="bg-[#FDFDFD]/50 shadow-[0_5px_55px_0_rgba(0,0,0,0.1)] backdrop-blur-xl py-[10px] ps-[20px] pe-[0px] rounded-[20px] flex items-center gap-x-5">
          <div class="">
            Hello, <b>{{ currentUser.value.firstname }}</b>
          </div>
          <div class="">
            <img class="object-cover w-[68px] h-[68px] rounded-[20px]"
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=faceare&facepad=3&w=688&h=688&q=100"
              alt="" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
