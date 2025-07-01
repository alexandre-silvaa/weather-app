import { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const token = import.meta.env.VITE_WEATHER_API_KEY;
  if (token) config.params.appid = token;

  return config;
};

const axiosInterceptors = (axiosInstance: AxiosInstance): AxiosInstance => {
  axiosInstance.interceptors.request.use(onRequest, (error: AxiosError) => Promise.reject(error));
  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => Promise.reject(error),
  );
  return axiosInstance;
};

export { axiosInterceptors };
