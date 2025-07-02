import { Cloud } from 'lucide-react';
import { WEATHER_ICONS } from '../constants/weather-icons';

type WeatherIconKey = keyof typeof WEATHER_ICONS;

export function getWeatherIcon(iconCode?: string) {
  const Icon = (iconCode && WEATHER_ICONS[iconCode as WeatherIconKey]) ?? <Cloud color="yellow" size={40} />;
  return Icon;
}
