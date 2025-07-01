import { IGetWeatherResponse } from '../../shared/service/weather/interface';

export interface IDashboardPresentation {
  loading: boolean;
  weather?: IGetWeatherResponse;
}
