<script setup>
import { createboxeIdeas, getBoxeIdeas } from "@/api/boxeIdea";
import Input from '@/components/Form/Input.vue';
import { onMounted, reactive } from "vue";
import Button from '../../components/Button.vue';
import Card from '../../components/Card.vue';


const ideas = reactive([]);
const _formValues = reactive({
  name: "",
  content: "",
});

onMounted(() => {
  getBoxeIdeas().then((res) => {
    ideas.value = res.data;
  });
});

function formatDate(date) {
  const d = new Date(date);
  const day = d.getDay() < 10 ? `0${d.getDay()}` : d.getDay();
  const month = d.getMonth() < 10 ? `0${d.getMonth()}` : d.getMonth();
  return `${day}/${month}/${d.getFullYear()}`;
}

function handleAddIdea() {
  if (!_formValues.name || !_formValues.content) {
    return;
  }
  createboxeIdeas({ ..._formValues }).then((res) => {
    console.log(res.data);
    getBoxeIdeas().then((res) => {
      ideas.value = res.data;
    });
  });
  console.log(ideas);
}

</script>

<template>
  <div class="grid ">
    <form @submit.prevent="handleAddIdea" className="w-full">

      <Input :label="'Titre'" :placeholder="'Titre de l\'idée'" name="name" v-model="_formValues.name" required />
      <Input :type="'textarea'" :label="'Description de l\'idée'" :placeholder="'Description de l\'idée '" name="content"
        v-model="_formValues.content" required />
      <Button :class="'rounded-[20px] shadow-[0_5px_55px_0_rgba(0,0,0,0.1)] mb-6'">
        <div class="flex items-center justify-center h-full gap-x-4">
          <font-awesome-icon :icon="['fas', 'plus']" class="text-2xl" />
          Ajouter une idée
        </div>
      </Button>
    </form>
  </div>
  <div class="grid grid-rows-2 xl:grid-rows-3 2xl:grid-rows-4 gap-8">

    <Card v-for="idea in ideas.value" :class="'col-span-1'">
      <template v-slot:title>
        <div :class="'flex justify-between'">
          {{ idea.name }}
          <img class="object-cover w-[50px] h-[50px] rounded-[20px]"
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=faceare&facepad=3&w=688&h=688&q=100"
            alt="">
        </div>
      </template>
      <template v-slot:body>
        <div :class="'flex justify-between'">
          <div>
            {{ idea.content }}
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <div class="-mt-4 flex justify-between items-center w-full">
          <span className="text-sm text-gray-500">
            {{ formatDate(idea.createdAt) }}
          </span>
          <div>
            {{ idea.user.lastname }} {{ idea.user.firstname }}
          </div>
        </div>
      </template>
    </Card>

  </div>
</template>