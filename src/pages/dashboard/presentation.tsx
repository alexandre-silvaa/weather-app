import { Typography } from '@mui/material';
import { IDashboardPresentation } from './interface';
import { ArrowDown, ArrowUp, MapPin } from 'lucide-react';
import moment from 'moment';
import { getWeatherIcon } from '../../shared/utils/functions';

export default function DashboardPresentation(state: IDashboardPresentation) {
  const { weather } = state;

  return (
    <div className="flex flex-col h-screen w-full p-10 shadow-md bg-[#282c2f]">
      <div className="flex flex-col items-center mb-6 justify-center gap-2">
        <div className="flex flex-row gap-1 items-center justify-center">
          <MapPin size={14} color="#b5b7bd" />
          <Typography fontSize={16} color="#b5b7bd" fontWeight={300}>
            {weather?.name}, {weather?.sys?.country}
          </Typography>
        </div>

        <Typography fontSize={12} fontWeight={500} className="text-[#b5b7bd]">
          {moment().locale('pt-br').format('LL - HH:mm')}
        </Typography>
      </div>

      <div className="flex flex-col items-center justify-center h-full">
        <div className="flex flex-row items-center gap-2">
          {getWeatherIcon(weather?.weather[0].icon)}
          <Typography fontSize={14} fontWeight={300} className="text-[#b5b7bd]">
            {weather?.weather[0].description ? weather.weather[0].description.charAt(0).toUpperCase() + weather.weather[0].description.slice(1) : ''}
          </Typography>
        </div>

        <div className="-my-5">
          <Typography fontSize={110} className=" text-[#b5b7bd] ">
            {weather?.main?.temp !== undefined ? `${Math.round(+weather.main.temp)}°` : '--'}
          </Typography>
        </div>
        <div className="mt-2 py-2 px-4 border border-white rounded-4xl flex flex-row w-fit gap-4 bg-[#FFFFFF15]">
          <div className="flex items-center justify-center gap-1">
            <ArrowUp size={16} color="#b5b7bd" />
            <Typography fontSize={16} fontWeight={700} className="text-[#b5b7bd] uppercase inline-block ml-1">
              {weather?.main?.temp_max !== undefined ? `${Math.round(+weather.main.temp_max)}°` : '--'}
            </Typography>
          </div>
          <div className="flex items-center justify-center gap-1">
            <ArrowDown size={16} color="#b5b7bd" />
            <Typography fontSize={16} fontWeight={700} className="text-[#b5b7bd] uppercase inline-block ml-1">
              {weather?.main?.temp_min !== undefined ? `${Math.round(+weather.main.temp_min)}°` : '--'}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
