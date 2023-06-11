<script setup>
import { getSurveys } from "@/api/surveys";
import { onMounted, reactive } from "vue";
import Button from '../../components/Button.vue';
import Card from '../../components/Card.vue';

const surveys = reactive([]);

onMounted(() => {
  getSurveys().then((res) => {
    surveys.value = res.data;
  });
});

</script>

<template>
  <div class="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">

    <Button :href="'/surveys/create'" :class="'rounded-[20px] shadow-[0_5px_55px_0_rgba(0,0,0,0.1)]'">
      <div class="flex items-center justify-center h-full gap-x-4">
        <font-awesome-icon :icon="['fas', 'plus']" class="text-2xl" />
        Ajouter un sondage
      </div>
    </Button>
    <template v-if="surveys.value">
      <Card v-for="survey in surveys.value" :class="'col-span-1'">
        <template v-slot:title>
          {{ survey.title }}
        </template>
        <template v-slot:footer>
          <div></div>
          <div>
            <Button :variant="'green'" :href="`/surveys/${survey.id}`" class="me-3">Accéder</Button>
            <Button :variant="'blue'" :href="`/surveys/${survey.id}`">Modifier</Button>
          </div>
        </template>
      </Card>
    </template>

  </div>
</template>