import { IGetWeatherReqParams, IGetWeatherResponse } from './interface';
import { api } from '../instance';

const getCurrentWeather = async (params: IGetWeatherReqParams): Promise<IGetWeatherResponse> => {
  const { data } = await api.get('/weather', { params: { ...params, lang: 'pt_br', units: 'metric' } });
  return data;
};

export { getCurrentWeather };
