<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <footer class="mt-auto bg-green-700 border-t border-green-500 py-10">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-6">
            <div class="text-center">
                <h3 class="text-white text-xl font-bold mb-4">Links</h3>
                <div class="flex justify-center space-x-6">
                    <RouterLink to="/" class="text-white rounded-md px-3 py-2 hover:bg-green-600 hover:text-white">Home</RouterLink>
                    <RouterLink to="/jobs" class="text-white rounded-md px-3 py-2 hover:bg-green-600 hover:text-white">Jobs</RouterLink>
                    <RouterLink to="/jobs/add" class="text-white rounded-md px-3 py-2 hover:bg-green-600 hover:text-white">Add Job</RouterLink>
                </div>
            </div>
            <div class="mt-4 text-center text-white text-sm">
                <p>&copy; 2025 Vue Jobs, All Rights Reserved</p>
            </div>
        </div>
    </footer>
</template>
