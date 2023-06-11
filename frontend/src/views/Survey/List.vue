<script setup>
import Button from '../../components/Button.vue';
import Card from '../../components/Card.vue';


</script>

<template>
  <div class="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">

    <Button :href="'/surveys/create'" :class="'rounded-[20px] shadow-[0_5px_55px_0_rgba(0,0,0,0.1)]'">
      <div class="flex items-center justify-center h-full gap-x-4">
        <font-awesome-icon :icon="['fas', 'plus']" class="text-2xl" />
        Ajouter un sondage
      </div>
    </Button>
    <Card :class="'col-span-1'">
      <template v-slot:title>
        Quel autre formations souhaiteriez-vous suivre ?
      </template>
      <template v-slot:footer>
        <div></div>
        <div>
          <Button :variant="'green'" :href="'surveys/view/1'" class="me-3">Accéder</Button>
          <Button :variant="'blue'" :href="`#`">Modifier</Button>
        </div>
      </template>
    </Card>

  </div>
</template>