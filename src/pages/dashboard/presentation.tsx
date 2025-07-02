import { Typography } from '@mui/material';
import { IDashboardPresentation } from './interface';
import { MapPin } from 'lucide-react';
import moment from 'moment';
import { getWeatherIcon } from '../../shared/utils/functions';

export default function DashboardPresentation(state: IDashboardPresentation) {
  const { weather } = state;

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full p-4 bg-white rounded-lg shadow-md">
      <div className="flex flex-col items-center">
        <div className="flex flex-row gap-2 items-center">
          <MapPin size={18} />
          <Typography fontSize={22} fontWeight={600}>
            {weather?.name}
          </Typography>
        </div>
        <Typography fontSize={14}>{moment().format('MMMM D YYYY, h:mm a')}</Typography>
      </div>

      <div className="flex items-center justify-center">{getWeatherIcon(weather?.weather[0].icon)}</div>

      <div className="flex flex-col items-center mt-4">
        <Typography fontSize={80} fontWeight={500} className="text-center">
          {weather?.main?.temp !== undefined ? `${Math.round(+weather.main.temp)}°` : '--'}
        </Typography>
        <Typography fontSize={18} fontWeight={600}>
          {weather?.weather[0].description}
        </Typography>
      </div>
    </div>
  );
}
