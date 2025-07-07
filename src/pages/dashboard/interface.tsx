import { IGetWeatherResponse } from '../../shared/service/weather/interface';

export interface IDashboardPresentation {
  loading: boolean;
  weather?: IGetWeatherResponse;
  getWeatherByCity: (city?: string) => void;
  handleCityChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  city?: string;
}
