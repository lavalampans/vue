<script setup>
import JobListings from '@/components/JobListing.vue';
import axiosInstance from '@/lib/axios/instance';
import { onMounted, reactive } from 'vue';

defineProps({
    limit: {
        type: Number,
        default: 6,
    }
})
const state = reactive({
    jobs: [],
    isLoading: false,
    error: null,
});

onMounted(async () => {
    try {
        state.isLoading = true;
        const response = await axiosInstance.get('/jobs');
        setTimeout(() => {
            state.jobs = response.data;
            state.isLoading = false;
        }, 500);
    } catch (error) {
        state.error = error
        state.isLoading = false
    }
})

</script>

<template>
    <section class="bg-blue-50 px-4 py-10">
        <div class="container-xl lg:container m-auto">
            <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
                Browse Jobs
            </h2>

            <div v-if="state.isLoading" class="text-center">
                <div class="pi pi-spin pi-cog" style="font-size: 2rem"></div>
            </div>

            <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <JobListings v-for="job in state.jobs?.slice(0, limit)" :key="job.id" :job="job" />
            </div>
        </div>
    </section>
</template>