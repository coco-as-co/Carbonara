<script setup>
import "@lottiefiles/lottie-player";

import { login } from "@/api/auth";
import { inject, reactive } from "vue";
import { useRouter } from "vue-router";

const route = useRouter();

const refreshUser = inject("app_refresh");

const _inputsLogin = reactive({
  email: "",
  password: "",
});

function handleLogin() {
  console.log(_inputsLogin);
  login({ ..._inputsLogin })
    .then(async ({ data }) => {
      sessionStorage.setItem("ara-app-token", JSON.stringify(data.access_token));
      const user = await refreshUser();
      route.push({ name: "home" });
    })
    .catch((error) => {
      console.log(error);
    });
}
</script>

<template>
  <div class="-ms-[170px] mt-[100px]">
    <div
      class="flex w-full max-w-sm mx-auto overflow-hidden bg-[#FDFDFD] rounded-2xl shadow-[0_5px_55px_0_rgba(0,0,0,0.1)] lg:max-w-4xl max-h-fit">
      <div class="hidden justify-center items-center bg-cover lg:flex lg:w-1/2">
        <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_WRUlcX98bQ.json" background="transparent"
          speed="1" style="width: 300px; height: 300px" loop autoplay></lottie-player>
      </div>

      <div class="px-6 py-12 w-full md:px-8 lg:w-1/2">
        <div class="flex justify-center mx-auto">
          <img class="w-[70px] h-[70px]" src="/logo.svg" alt="">
        </div>

        <p class="mt-3 text-xl text-center text-gray-600">
          Bienvenue sur Carbon'Ara
        </p>
        <form @submit.prevent="handleLogin">
          <div class="mt-4">
            <label class="block mb-2 text-sm font-medium text-gray-600" for="email">Adresse
              mail</label>
            <input id="email"
              class="block w-full px-4 py-2 text-gray-700 bg-[#FDFDFD] border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="email" v-model="_inputsLogin.email" />
          </div>

          <div class="mt-4">
            <div class="flex justify-between">
              <label class="block mb-2 text-sm font-medium text-gray-600" for="password">Mot de
                passe</label>
              <a href="#" class="text-xs text-gray-500 hover:underline">Mot de passe oublié ?</a>
            </div>

            <input id="password"
              class="block w-full px-4 py-2 text-gray-700 bg-[#FDFDFD] border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="password" v-model="_inputsLogin.password" />
          </div>

          <div class="mt-6">
            <button
              class="px-6 py-3 w-full text-sm font-medium tracking-wide text-white bg-gray-800 rounded-lg transition-colors duration-300 transform hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
              Se connecter
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped></style>