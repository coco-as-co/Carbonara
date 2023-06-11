<script setup>
import Button from '@/components/Button.vue';
import Card from '@/components/Card.vue';
import { useRouter } from "vue-router";

const route = useRouter();

</script>

<template>
  <div class="flex align-center justify-center">
    <Card>
      <template v-slot:header>
        <span class="text-sm font-light text-gray-800">Songage</span>
      </template>
      <template v-slot:title>
        Quel autre formations souhaiteriez-vous suivre ?
      </template>
      <template v-slot:body>


        <div class="flex items-center">
          <input id="default-radio-1" type="radio" value="" name="default-radio"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
          <label for="default-radio-1" class="ml-2 text-sm font-medium">C#</label>
        </div>
        <div class="flex items-center">
          <input checked id="default-radio-2" type="radio" value="" name="default-radio"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
          <label for="default-radio-2" class="ml-2 text-sm font-medium">Assembleur</label>
        </div>

        <div class="flex items-center">
          <input checked id="default-radio-2" type="radio" value="" name="default-radio"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
          <label for="default-radio-2" class="ml-2 text-sm font-medium">Docker</label>
        </div>


      </template>
      <template v-slot:footer>
        <p class="text-xs text-gray-600 font-semibold">5 votes</p>
        <Button :variant="'blue'" :href="'#'">
          Voter
        </Button>
      </template>
    </Card>
  </div>
</template>