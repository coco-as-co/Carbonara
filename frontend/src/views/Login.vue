<script setup>
import "@lottiefiles/lottie-player";
</script>

<template>
  <div
    class="flex w-full max-w-sm mx-auto overflow-hidden bg-[#FDFDFD] rounded-2xl shadow-[0_5px_55px_0_rgba(0,0,0,0.1)] lg:max-w-4xl max-h-fit">
    <div class="hidden bg-cover lg:flex lg:w-1/2 justify-center items-center">
      <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_WRUlcX98bQ.json" background="transparent"
        speed="1" style="width: 300px; height: 300px;" loop autoplay></lottie-player>
    </div>

    <div class="w-full px-6 py-12 md:px-8 lg:w-1/2">
      <div class="flex justify-center mx-auto">
        <img class="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt="">
      </div>

      <p class="mt-3 text-xl text-center text-gray-600 ">
        Bienvenue sur Carbon'Ara
      </p>

      <div class="mt-4">
        <label class="block mb-2 text-sm font-medium text-gray-600 " for="email">Adresse
          mail</label>
        <input id="email"
          class="block w-full px-4 py-2 text-gray-700 bg-[#FDFDFD] border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
          type="email" />
      </div>

      <div class="mt-4">
        <div class="flex justify-between">
          <label class="block mb-2 text-sm font-medium text-gray-600 " for="password">Mot de
            passe</label>
          <a href="#" class="text-xs text-gray-500 hover:underline">Mot de passe oublié ?</a>
        </div>

        <input id="password"
          class="block w-full px-4 py-2 text-gray-700 bg-[#FDFDFD] border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
          type="password" />
      </div>

      <div class="mt-6">
        <button
          class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
          Se connecter
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
