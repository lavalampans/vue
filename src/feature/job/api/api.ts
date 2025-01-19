import instance from '@/lib/axios/instance';
import { Job } from '@/feature/job/types/types';
import { AxiosResponse } from 'axios';

export const endpoints = {
	getJobs: async (): Promise<AxiosResponse<Job[]>> => {
		try {
			return await instance.get('jobs');
		} catch (error) {
			throw error;
		}
	},
	getJob: async (id: number): Promise<AxiosResponse<Job>> => {
		try {
			return await instance.get(`jobs/${id}`);
		} catch (error) {
			throw error;
		}
	},
	deleteJob: async (id: number): Promise<AxiosResponse<Job>> => {
		try {
			return await instance.delete(`jobs/${id}`);
		} catch (error) {
			throw error;
		}
	},
};
