<script setup>
import Header from "./components/Header.vue";
</script>

<template>
  <div className="min-height h-full">
    <Header />
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
