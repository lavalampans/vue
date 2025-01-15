<script setup lang="ts">
import logo from '@/assets/images/logo.png';
import { RouterLink, useRoute } from 'vue-router';

const route = useRoute();

const activeRoute = (routePath: string) => {
    return route.path === routePath;
};

const links = [
    {
        title: 'Home',
        to: '/'
    },
    {
        title: 'Jobs',
        to: '/jobs'
    },
    {
        title: 'Add Job',
        to: '/jobs/add'
    }
];
</script>

<template>
    <nav class="bg-green-700 border-b border-green-500">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="flex h-20 items-center justify-between">
                <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                    <!-- Logo -->
                    <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
                        <img class="h-10 w-auto" :src="logo" alt="Vue Jobs" />
                        <span class="hidden md:block text-white text-2xl font-bold ml-2">Vue Jobs</span>
                    </RouterLink>
                    <div class="md:ml-auto">
                        <div class="flex space-x-2">
                            <!-- Loop over links using v-for -->
                            <RouterLink v-for="link in links" :key="link.to" :to="link.to" :class="[
                                'text-white rounded-md px-3 py-2',
                                activeRoute(link.to) ? 'bg-green-900' : 'hover:bg-green-600 hover:text-white'
                            ]">
                                {{ link.title }}
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
