<script setup>
import { useJobStore } from '@/feature/job/state/state';
import JobListing from '@/feature/job/componets/JobListing.vue';
import { onMounted } from 'vue';

const jobStore = useJobStore()

onMounted(async () => {
  await jobStore.getJobs();
});
</script>

<template>
    <section class="bg-blue-50 px-4 py-10">
        <div class="container-xl lg:container m-auto">
            <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
                Browse Jobs
            </h2>

            <div v-if="jobStore.isLoading" class="text-center">
                <div class="pi pi-spin pi-cog" style="font-size: 2rem"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <JobListing v-for="job in jobStore.jobs" :key="job.id" :job="job" />
            </div>
        </div>
    </section>
</template>