import { defineStore } from 'pinia';
import { Job } from '../types/types';
import { endpoints } from '../api/api';

interface State {
	jobs: Job[];
	job: Job | null;
	isLoading: boolean;
}

interface Actions {
	getJobs: () => Promise<void>;
	getJob: (id: number) => Promise<void>;
	deleteJob: (id: number) => Promise<boolean>;
}

export const useJobStore = defineStore<'job', State, {}, Actions>('job', {
	state: () => ({
		name: 'jobs',
		jobs: [],
		isLoading: false,
		job: null,
	}),

	getters: {},

	actions: {
		async getJobs(): Promise<void> {
			try {
				this.isLoading = true;
				const response = await endpoints.getJobs();
				this.jobs = response.data;
			} catch (error) {
				console.error(error);
			} finally {
				this.isLoading = false;
			}
		},

		async getJob(id: number): Promise<void> {
			try {
				this.isLoading = true;
				const response = await endpoints.getJob(id);
				this.job = response.data;
			} catch (error) {
				console.error(error);
			} finally {
				this.isLoading = false;
			}
		},

		async deleteJob(id: number): Promise<boolean> {
			try {
				this.isLoading = true;
				await endpoints.deleteJob(id);
				return true;
			} catch (error) {
				console.error(error);
				return false;
			} finally {
				this.isLoading = false;
			}
		},
	},
});
