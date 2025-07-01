import { AxiosResponse } from 'axios';
import { IGetWeatherReqParams } from './interface';
import { api } from '../instance';

const getCurrentWeather = async (params: IGetWeatherReqParams): Promise<AxiosResponse> => {
  const data = await api.get('/weather', { params: { ...params, lang: 'pt_br', units: 'metric' } });
  return data;
};

export { getCurrentWeather };
