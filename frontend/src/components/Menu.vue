<script setup>
import ItemMenu from './ItemMenu.vue';

const existing = {
    home: {
        title: 'Mon dashboard',
        icon: 'house',
        path: '/'
    },
    user: {
        title: 'Users',
        icon: 'people-group',
        path: '/users'
    },
    learnings: {
        title: 'Formations',
        icon: 'graduation-cap',
        path: '/quests'
    },
    settings: {
        title: 'Paramètres',
        icon: 'gear',
        path: '/settings'
    },
    news: {
        title: 'News',
        icon: 'newspaper',
        path: '/news'
    },
    reviews: {
        title: 'Avis clients',
        icon: 'face-smile-beam',
        path: '/reviews'
    },
    chat: {
        title: 'Conversations',
        icon: 'comments',
        path: '/chat'
    },
    events: {
        title: 'Événements',
        icon: 'calendar-week',
        path: '/events'
    },
}

//Use USER_STATUS to filter the menu
const list = {
    ADMIN: [
        existing.home,
        existing.user,
        existing.learnings,
        existing.news,
        existing.reviews,
        existing.chat,
        existing.events,
        existing.settings,
    ],
    CONSULTANT: [
        existing.home,
        existing.learnings,
        existing.news,
        existing.reviews,
        existing.chat,
        existing.events,
        existing.settings,
    ],
    COMMERCIAL: [
        existing.home,
        existing.learnings,
        existing.news,
        existing.reviews,
        existing.chat,
        existing.events,
        existing.settings,
    ],
    RH: [
        existing.home,
        existing.learnings,
        existing.news,
        existing.reviews,
        existing.chat,
        existing.events,
        existing.settings,
    ],
    CLIENT: [
        existing.home,
        existing.reviews,
        existing.settings,
    ],
}

</script>

<template>
    <aside class="h-screen w-[170px] min-w-[170px] fixed left-[0] top-[0]">
        <div
            class="absolute w-[100px] top-[35px] bottom-[35px] left-[35px] right-[35px] bg-[#FDFDFD] shadow-[0_5px_55px_0_rgba(0,0,0,0.1)] rounded-[35px] py-[20px]">
            <div class="flex flex-col justify-between h-full items-center ">
                <!-- Logo -->
                <div>
                    LOGO
                </div>

                <!-- Menu -->
                <div class="flex flex-col gap-5">
                    <ItemMenu v-for="l in list.ADMIN" :path="l.path" :icon="l.icon" />
                </div>

                <!-- Log Out -->
                <ItemMenu :path="'/logout'" :icon="'right-from-bracket'"
                    :class="'bg-[#E53F49] text-white hover:text-white'" />
            </div>
        </div>
    </aside>
</template>

<style scoped></style>