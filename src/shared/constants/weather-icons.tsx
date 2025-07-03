import { Cloud, CloudFog, CloudHail, CloudMoon, CloudMoonRain, CloudRainWind, CloudSun, CloudSunRain, Cloudy, Moon, Snowflake, Sun } from 'lucide-react';

const ICON_SIZE = 20;

export const WEATHER_ICONS = {
  '01d': <Sun color="#FFBF00" strokeWidth={1} size={ICON_SIZE} />,
  '01n': <Moon color="gray" strokeWidth={1} size={ICON_SIZE} />,
  '02d': <CloudSun color="#FFBF00" strokeWidth={1} size={ICON_SIZE} />,
  '02n': <CloudMoon color="gray" strokeWidth={1} size={ICON_SIZE} />,
  '03d': <Cloud color="#d5d8dc" strokeWidth={1} size={ICON_SIZE} />,
  '03n': <Cloud color="#d5d8dc" strokeWidth={1} size={ICON_SIZE} />,
  '04d': <Cloudy color="gray" strokeWidth={1} size={ICON_SIZE} />,
  '04n': <Cloudy color="gray" strokeWidth={1} size={ICON_SIZE} />,
  '09d': <CloudSunRain color="#85c1e9" strokeWidth={1} size={ICON_SIZE} />,
  '09n': <CloudMoonRain color="#21618c" strokeWidth={1} size={ICON_SIZE} />,
  '10d': <CloudHail color="#85c1e9" strokeWidth={1} size={ICON_SIZE} />,
  '10n': <CloudHail color="#21618c" strokeWidth={1} size={ICON_SIZE} />,
  '11d': <CloudRainWind color="#85c1e9" strokeWidth={1} size={ICON_SIZE} />,
  '11n': <CloudRainWind color="#21618c" strokeWidth={1} size={ICON_SIZE} />,
  '13d': <Snowflake color="#85c1e9" strokeWidth={1} size={ICON_SIZE} />,
  '13n': <Snowflake color="#21618c" strokeWidth={1} size={ICON_SIZE} />,
  '50d': <CloudFog color="#85929e" strokeWidth={1} size={ICON_SIZE} />,
  '50n': <CloudFog color="#85929e" strokeWidth={1} size={ICON_SIZE} />,
} as const;
