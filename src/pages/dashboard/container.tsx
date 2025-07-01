import { useEffect, useState } from 'react';
import { getCurrentWeather } from '../../shared/service/weather/weather';
import DashboardPresentation from './presentation';
import { IGetWeatherResponse } from '../../shared/service/weather/interface';

export default function DashboardContainer(): React.JSX.Element {
  const [position, setPosition] = useState<GeolocationPosition>();
  const [weather, setWeather] = useState<IGetWeatherResponse>();
  const [loading, setLoading] = useState<boolean>(true);

  const getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setPosition(position);
    });
  };

  const getUserLocation = async () => {
    if (!position) return;
    setLoading(true);
    try {
      const data = await getCurrentWeather({ lat: String(position?.coords.latitude), lon: String(position?.coords.longitude) });
      setWeather(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!position) return;
    getUserLocation();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position]);

  useEffect(() => {
    getCurrentPosition();
  }, []);

  return <DashboardPresentation loading={loading} weather={weather} />;
}
