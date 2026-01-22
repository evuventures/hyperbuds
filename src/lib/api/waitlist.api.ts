import axios from 'axios';
import {CONFIG} from '@/config/baseUrl';

const api = axios.create({
  baseURL: CONFIG.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const waitlistApi = {
 
  joinWaitlist: async (email: string) => {
    const response = await api.post('/waitlist', { email });
    return response.data;
  },
};