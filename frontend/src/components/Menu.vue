<script setup>
import ItemMenu from './ItemMenu.vue';

const existing = {
    home: {
        title: 'Mon dashboard',
        icon: 'house',
        path: '/'
    },
    user: {
        title: 'Utilisateurs',
        icon: 'people-group',
        path: '/users'
    },
    learnings: {
        title: 'Formations',
        icon: 'graduation-cap',
        path: '/skills'
    },
    settings: {
        title: 'Paramètres',
        icon: 'gear',
        path: '/settings'
    },
    news: {
        title: 'Articles',
        icon: 'newspaper',
        path: '/articles'
    },
    reviews: {
        title: 'Avis clients',
        icon: 'face-smile-beam',
        path: '/reviews'
    },
    chat: {
        title: 'Boîte à idées',
        icon: 'comments',
        path: '/boxe_ideas'
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
const handleLogout = () => {
    sessionStorage.removeItem("ara-app-token");
    window.location.href = "/login";
};
</script>

<template>
    <aside class="h-screen w-[170px] min-w-[170px] fixed left-[0] top-[0]">
        <div
            class="absolute w-[100px] top-[35px] bottom-[35px] left-[35px] right-[35px] bg-[#FDFDFD] shadow-[0_5px_55px_0_rgba(0,0,0,0.1)] rounded-[35px] py-[20px]">
            <div class="flex flex-col justify-between items-center h-full">
                <!-- Logo -->
                <div class="">

                    <img class="w-[70px] h-[70px]" src="/logo.svg" alt="">
                </div>

                <!-- Menu -->
                <div class="flex flex-col gap-5">
                    <ItemMenu v-for="l in list.ADMIN" :path="l.path" :icon="l.icon" :title="l.title" />
                </div>

                <!-- Log Out -->
                <ItemMenu :path="'/logout'" :onClick="handleLogout" :icon="'right-from-bracket'" :title="'Se déconnecter'"
                    :class="'bg-[#E53F49] text-white hover:text-white'" />
            </div>
        </div>
    </aside>
</template>

<style scoped></style>