import axios from 'axios';
import { axiosInterceptors } from './interceptor';

const tenSecondsInMs = 10000;

export const api = axiosInterceptors(
  axios.create({
    baseURL: import.meta.env.VITE_WEATHER_API_URL,
    timeout: tenSecondsInMs,
    headers: {
      'Content-Type': 'application/json',
    },
  }),
);
