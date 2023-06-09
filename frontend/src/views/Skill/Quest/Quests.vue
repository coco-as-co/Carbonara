<script setup>
import { getQuestsBySkill } from "@/api/quest";
import { onMounted, reactive } from "vue";
import { useRouter } from "vue-router";
import Button from '../../../components/Button.vue';
import Card from '../../../components/Card.vue';

const route = useRouter();
const skill_id = route.currentRoute.value.params.skill_id ?? null;

const quests = reactive([]);
const skill = reactive({});

onMounted(() => {
    if (skill_id) {
        getQuestsBySkill(skill_id).then((res) => {
            quests.value = res.data;
            skill.value = res.data.skill;
        });
    }
});

</script>

<template>
    <div class="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">

        <Card v-for="quest in quests.value">
            <template v-slot:header>
                <span class="text-sm font-light text-gray-800">Quête</span>
                <div>
                    <span class="px-3 py-1 text-xs text-amber-800 uppercase bg-amber-200 rounded-full me-3">Niv. {{
                        quest.difficulty }}</span>
                    <span class="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full">{{ quest.skill.name
                    }}</span>
                </div>
            </template>
            <template v-slot:title>
                {{ quest.name }}
            </template>
            <template v-slot:body>
                {{ quest.description }}
            </template>
            <template v-slot:footer>
                <p class="text-xs text-gray-600 font-semibold">{{ quest.requirements.length }} prérequis</p>
                <Button :variant="'blue'" :href="'/skills/2/quests/3'">Commencer la quête</Button>

                <!-- When quest is done -->
                <!-- <div class="px-4 py-2 text-sm uppercase rounded-[10px] text-[#00BB7E] bg-[#d9f6ec]">
                    <font-awesome-icon :icon="['fas', 'check']" class="text-green-500" />
                </div> -->
            </template>
        </Card>
        <Button :href="{ name: 'quest_create' }" :class="'rounded-[20px] shadow-[0_5px_55px_0_rgba(0,0,0,0.1)]'">
            <div class="flex items-center justify-center h-full gap-x-4">
                <font-awesome-icon :icon="['fas', 'plus']" class="text-2xl" />
                Ajouter une quête
            </div>
        </Button>
    </div>
</template>