<script setup>
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
  <div class="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-2xl shadow-lg lg:max-w-4xl max-h-fit">
    <div class="hidden bg-cover lg:block lg:w-1/2"
      style="background-image: url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80');">
    </div>

    <div class="w-full px-6 py-12 md:px-8 lg:w-1/2">
      <div class="flex justify-center mx-auto">
        <img class="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt="">
      </div>

      <p class="mt-3 text-xl text-center text-gray-600 ">
        Bienvenue sur Carbon'Ara
      </p>
      <form @submit.prevent="handleLogin">
        <div class="mt-4">
          <label class="block mb-2 text-sm font-medium text-gray-600 " for="email">Adresse
            mail</label>
          <input id="email"
            class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
            type="email" v-model="_inputsLogin.email" required />
        </div>

        <div class="mt-4">
          <div class="flex justify-between">
            <label class="block mb-2 text-sm font-medium text-gray-600 " for="password">Mot de
              passe</label>
            <a href="#" class="text-xs text-gray-500 hover:underline">Mot de passe oublié ?</a>
          </div>

          <input id="password"
            class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
            type="password" v-model="_inputsLogin.password" required />
        </div>

        <div class="mt-6">
          <button
            class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
            Se connecter
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
