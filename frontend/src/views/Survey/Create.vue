<script setup>
import { createSurvey, updateSurvey } from "@/api/surveys";
import Button from '@/components/Button.vue';
import Card from '@/components/Card.vue';
import Input from '@/components/Form/Input.vue';
import { reactive } from "vue";
import { useRouter } from "vue-router";


const route = useRouter();

const _formValues = reactive({
  title: "",
  content: "",
  endedAt: "",
  choices1: "",
  choices2: "",
  choices3: "",
  choices4: "",
  choices5: "",
  choices6: "",
});

function handleRegister() {
  console.log(_formValues);
  if (id) {
    updateSurvey(id, { ..._formValues })
      .then(({ data }) => {
        console.log('success update');
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    createSurvey({ ..._formValues })
      .then(({ data }) => {
        console.log('success create');
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

</script>

<template>
  <div class="flex justify-center">
    <form>
      <Card :class="'w-96'">
        <template v-slot:title>
          <span v-if="!id">Ajout d'un sondage</span>
          <span v-else>Modification d'un sondage</span>
        </template>
        <template v-slot:body>
          <Input :label="'Titre'" :placeholder="'Titre du sondage'" name="sondage" v-model="_formValues.title" />
          <input type='date' :label="'Fin du sondage'" :placeholder="'Fin du sondage'" name="endedAt"
            v-model="_formValues.endedAt" />
          <Input :type="'textarea'" :label="'Description du sondage'" :placeholder="'Description du sondage'"
            name="content" v-model="_formValues.content" />

          <Input :label="'Choix 1'" :placeholder="'Choix 1'" v-model="_formValues.choices1" name="choice1" />
          <Input :label="'Choix 2'" :placeholder="'Choix 2'" v-model="_formValues.choices2" name="choice2" />
          <Input :label="'Choix 3'" :placeholder="'Choix 3'" v-model="_formValues.choices3" name="choice3" />
          <Input :label="'Choix 4'" :placeholder="'Choix 4'" v-model="_formValues.choices4" name="choice4" />
          <Input :label="'Choix 5'" :placeholder="'Choix 5'" v-model="_formValues.choices5" name="choice5" />
          <Input :label="'Choix 6'" :placeholder="'Choix 6'" v-model="_formValues.choices6" name="choice6" />
        </template>
        <template v-slot:footer>
          <div></div>
          <Button>
            <span v-if="!id">Ajouter</span>
            <span v-else>Modifier</span>
          </Button>
        </template>
      </Card>
    </form>
  </div>
</template>