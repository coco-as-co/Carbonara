<script setup>
import { getSkills } from "@/api/skill";
import { onMounted, reactive } from "vue";
import Button from '../../components/Button.vue';
import Card from '../../components/Card.vue';

const skills = reactive([]);

onMounted(() => {
    getSkills().then((res) => {
        skills.value = res.data;
    });
});

</script>

<template>
    <div class="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">

        <template v-if="skills.value">
            <Card v-for="skill in skills.value" :class="'col-span-1'">
                <template v-slot:title>
                    {{ skill.name }}
                </template>
                <template v-slot:footer>
                    <div></div>
                    <div>
                        <Button :variant="'green'" :href="`/skills/${skill.id}/quests`" class="me-3">Accéder</Button>
                        <Button :variant="'blue'" :href="`/skills/${skill.id}`">Modifier</Button>
                    </div>
                </template>
            </Card>
        </template>
        <Button :href="'/skills/create'" :class="'rounded-[20px] shadow-[0_5px_55px_0_rgba(0,0,0,0.1)]'">
            <div class="flex items-center justify-center h-full gap-x-4">
                <font-awesome-icon :icon="['fas', 'plus']" class="text-2xl" />
                Ajouter un skill
            </div>
        </Button>
    </div>
</template>