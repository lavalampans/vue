<script setup>
import { useRoute, useRouter } from 'vue-router';
import { onMounted } from 'vue';
import { useJobStore } from '../state/state';


const route = useRoute();
const router = useRouter();
const id = route.params.id;

const jobStore = useJobStore();

onMounted(async () => {
    await jobStore.getJob(id);
});

const onDeleteJob = async () => {
    
    const isDeleted = await jobStore.deleteJob(id);

    if (isDeleted) {
        router.push('/jobs')
    }

}


</script>

<template>
    <section class="bg-green-50">
        <div class="container m-auto py-10 px-6">

            <div v-if="jobStore.isLoading" class="text-center">
                <div class="pi pi-spin pi-cog" style="font-size: 2rem"></div>
            </div>

            <div v-if="jobStore.job" class="grid grid-cols-3 md:grid-cols-70/30 w-full gap-2">
                <div class="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                    <div class="text-gray-500 mb-4">{{ jobStore.job.type }}</div>
                    <h1 class="text-3xl font-bold mb-4">{{ jobStore.job.title }}</h1>
                    <div class="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                        <i class="fa-solid fa-location-dot text-lg text-orange-700 mr-2"></i>
                        <p class="text-orange-700">{{ jobStore.job.location }}</p>
                    </div>
                </div>

                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h3 class="text-green-800 text-lg font-bold mb-6">
                        Job Description
                    </h3>

                    <p class="mb-4">
                        {{ jobStore.job.description }}
                    </p>

                    <h3 class="text-green-800 text-lg font-bold mb-2">Salary</h3>

                    <p class="mb-4">{{ jobStore.job.salary }}</p>
                </div>

                <aside>
                    <div class="bg-white p-6 rounded-lg shadow-md">
                        <h3 class="text-xl font-bold mb-6">Company Info</h3>

                        <h2 class="text-2xl">{{ jobStore.job.title }}</h2>

                        <p class="my-2">
                            {{ jobStore.job.description }}
                        </p>

                        <hr class="my-4" />

                        <h3 class="text-xl">Contact Email:</h3>

                        <p class="my-2 bg-white p-2 font-bold">
                            {{ jobStore.job.company.contactEmail }}
                        </p>

                        <h3 class="text-xl">Contact Phone:</h3>

                        <p class="my-2 bg-white p-2 font-bold text-gray-600">{{ jobStore.job.company.contactPhone }}</p>
                    </div>

                    <div class="bg-white p-6 rounded-lg shadow-md mt-2">
                        <h3 class="text-xl font-bold mb-6">Manage Job</h3>
                        <a href="add-job.html"
                            class="bg-green-500 hover:bg-green-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block">Edit
                            Job</a>
                        <button @click="onDeleteJob"
                            class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block">
                            Delete Job
                        </button>
                    </div>
                </aside>
            </div>
        </div>
    </section>
</template>