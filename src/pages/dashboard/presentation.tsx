import { IconButton, Typography } from '@mui/material';
import { IDashboardPresentation } from './interface';
import { Droplet, MapPin, Search, ThermometerSnowflake, ThermometerSun, Wind } from 'lucide-react';
import { getWeatherIcon } from '../../shared/utils/functions';
import TextField from '../../shared/components/text-field/text-field';
import moment from 'moment';
import WeatherInfo from './components/weather-info';
import Skeleton from '../../shared/components/skeleton/skeleton';

export default function DashboardPresentation(state: IDashboardPresentation) {
  const { weather, city, handleCityChange, loading } = state;

  return (
    <div className="flex flex-col h-screen max-h-screen w-full p-10 justify-center bg-gradient-to-b from-[#594cee] to-[#8dd0f5] ">
      <div className="p-10 shadow-lg self-center bg-[#5c54ed] rounded-xl md:w-md">
        <div className="flex flex-row items-center gap-2 border-b border-white pb-5">
          <TextField placeholder="Procure por cidade" value={city} onChange={handleCityChange} disabled={loading} />
          <IconButton className="*:focus:outline-none" onClick={() => state.getWeatherByCity(city)} disabled={loading}>
            <Search size={20} color="#b5b7bd" />
          </IconButton>
        </div>
        {!weather && !loading && (
          <div className="flex flex-col items-center justify-center mt-8">
            <Typography fontSize={16} color="white" fontWeight={500} className="text-center">
              Nenhum resultado encontrado
            </Typography>
          </div>
        )}
        {weather && (
          <>
            <div className="flex flex-col items-center justify-center my-4 gap-3">
              <Skeleton width={275} height={42} loading={loading}>
                <div className="flex flex-row gap-1 items-center justify-center">
                  <MapPin size={16} color="white" />
                  <Typography fontSize={24} color="white" fontWeight={500}>
                    {weather?.name}, {weather?.sys?.country}
                  </Typography>
                </div>
              </Skeleton>
              <Skeleton width={100} height={18} loading={loading}>
                <Typography fontSize={12} fontWeight={500} className="text-[#b5b7bd]">
                  {moment().locale('pt-br').format('LL - HH:mm')}
                </Typography>
              </Skeleton>
            </div>
            <div className="flex flex-col items-center justify-center my-4">
              <Skeleton width={100} height={115} loading={loading}>
                <div className="flex flex-col items-center justify-center">
                  <Typography fontSize={64} className="text-white font-bold">
                    {weather?.main?.temp !== undefined ? `${Math.round(+weather.main.temp)}°` : '--'}
                  </Typography>
                </div>
              </Skeleton>
              <Skeleton width={200} height={32} loading={loading}>
                <div className="flex flex-row items-center gap-2">
                  {getWeatherIcon(weather?.weather?.[0]?.icon)}
                  <Typography fontSize={24} className="text-white">
                    {weather?.weather?.[0]?.description ?? 'N/A'}
                  </Typography>
                </div>
              </Skeleton>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 mt-8">
              <div className="flex flex-row gap-2  w-full justify-between">
                <Skeleton width={100} height={35} loading={loading}>
                  <WeatherInfo
                    icon={<ThermometerSun size={22} color="orange" />}
                    description={weather?.main?.temp_max !== undefined ? `${Math.round(+weather.main.temp_max)}°` : '--'}
                  />
                </Skeleton>
                <span className="text-white text-xl font-bold flex items-center h-full">|</span>
                <Skeleton width={100} height={35} loading={loading}>
                  <WeatherInfo
                    icon={<ThermometerSnowflake size={22} color="#36B5F5" />}
                    description={weather?.main?.temp_min !== undefined ? `${Math.round(+weather.main.temp_min)}°` : '--'}
                  />
                </Skeleton>
              </div>
              <div className="flex flex-row gap-2 w-full justify-between">
                <Skeleton width={100} height={35} loading={loading}>
                  <WeatherInfo
                    icon={<Droplet size={22} color="#36B5F5" />}
                    description={weather?.main?.humidity !== undefined ? `${Math.round(+weather.main.humidity)}%` : '--'}
                  />
                </Skeleton>
                <span className="text-white text-xl font-bold flex items-center h-full">|</span>
                <Skeleton width={100} height={35} loading={loading}>
                  <WeatherInfo
                    icon={<Wind size={22} color="#998EED" />}
                    description={weather?.wind?.speed !== undefined ? `${Math.round(+weather.wind.speed)} km/h` : '--'}
                  />
                </Skeleton>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
