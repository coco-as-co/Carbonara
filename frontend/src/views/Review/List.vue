<script setup>
import Button from "@/components/Button.vue";
import Card from "@/components/Card.vue";
</script>

<template>
  <div class="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
    <Card>
      <template v-slot:header>
        <span class="text-sm font-light text-gray-800"></span>
      </template>
      <template v-slot:title>Evaluation de Coco</template>
      <template v-slot:body
        >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex et, minima
        quae...
      </template>

      <template v-slot:footer>
        <span
          class="flex gap-x-2 justify-center items-center px-3 py-1 text-gray-700 bg-gray-200 rounded-full"
        >
          <font-awesome-icon :icon="['fas', 'briefcase']" />
          <p>PMU</p>
        </span>
        <p class="text-xs text-gray-600 font-semibold"></p>
        <Button :variant="'blue'" href="">Voir</Button>
      </template>
    </Card>

    <Card>
      <template v-slot:header>
        <span class="text-sm font-light text-gray-800"></span>
      </template>
      <template v-slot:title>Evaluation de Coco</template>
      <template v-slot:body
        >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex et, minima
        quae...
      </template>

      <template v-slot:footer>
        <span
          class="flex gap-x-2 justify-center items-center px-3 py-1 text-gray-700 bg-gray-200 rounded-full"
        >
          <font-awesome-icon :icon="['fas', 'briefcase']" />
          <p>Veepee</p>
        </span>
        <p class="text-xs text-gray-600 font-semibold"></p>
        <Button :variant="'blue'" href="">Voir</Button>
      </template>
    </Card>

    <Card>
      <template v-slot:header>
        <span class="text-sm font-light text-gray-800"></span>
      </template>
      <template v-slot:title>Evaluation de Coco</template>
      <template v-slot:body
        >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex et, minima
        quae...
      </template>

      <template v-slot:footer>
        <span
          class="flex gap-x-2 justify-center items-center px-3 py-1 text-gray-700 bg-gray-200 rounded-full"
        >
          <font-awesome-icon :icon="['fas', 'briefcase']" />
          <p>Edenred</p>
        </span>
        <p class="text-xs text-gray-600 font-semibold"></p>
        <Button :variant="'blue'" href="">Voir</Button>
      </template>
    </Card>

    <Card>
      <template v-slot:header>
        <span class="text-sm font-light text-gray-800"></span>
      </template>
      <template v-slot:title>Evaluation de Coco</template>
      <template v-slot:body
        >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex et, minima
        quae...
      </template>

      <template v-slot:footer>
        <span
          class="flex gap-x-2 justify-center items-center px-3 py-1 text-gray-700 bg-gray-200 rounded-full"
        >
          <font-awesome-icon :icon="['fas', 'briefcase']" />
          <p>Amundi</p>
        </span>
        <p class="text-xs text-gray-600 font-semibold"></p>
        <Button :variant="'blue'" href="">Voir</Button>
      </template>
    </Card>

    <Button
      :class="'rounded-[20px] shadow-[0_5px_55px_0_rgba(0,0,0,0.1)] min-h-[196px]'"
    >
      <div class="flex items-center justify-center h-full gap-x-4">
        <font-awesome-icon :icon="['fas', 'plus']" class="text-2xl" />
        Ajouter un avis
      </div>
    </Button>
  </div>
</template>
