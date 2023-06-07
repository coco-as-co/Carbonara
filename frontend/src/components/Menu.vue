<script setup>
import ItemMenu from './ItemMenu.vue';

const existing = {
    dashboard: {
        title: 'Dashboard',
        icon: 'house',
        path: '/home'
    },
    user: {
        title: 'Users',
        icon: 'people-group',
        path: '/users'
    },
    roles: {
        title: 'Roles',
        icon: 'roles',
        path: '/roles'
    },
    permissions: {
        title: 'Permissions',
        icon: 'permissions',
        path: '/permissions'
    },
    settings: {
        title: 'Settings',
        icon: 'gear',
        path: '/settings'
    },
    news: {
        title: 'News',
        icon: 'news',
        path: '/news'
    },
}

const list = {
    'ADMIN': [
        existing.dashboard,
        existing.user,
        existing.roles,
        existing.permissions,
        existing.settings,
        existing.news,
    ],
    'USER': [
        existing.dashboard,
        existing.news,
    ],
    'RH': [

    ]
}

</script>

<template>
    <aside class="relative h-screen w-[170px] min-w-[170px]">
        <div class="absolute top-[35px] bottom-[35px] left-[35px] right-[35px] bg-white shadow-lg rounded-3xl py-[20px]">
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
                <ItemMenu :path="'/logout'" :icon="'logout'" />
            </div>
        </div>
    </aside>
</template>

<style scoped></style>