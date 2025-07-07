import { Typography } from '@mui/material';
import { ReactNode } from 'react';

type WeatherInfoProps = {
  readonly icon: ReactNode;
  readonly description: string;
};

export default function WeatherInfo({ icon, description }: Readonly<WeatherInfoProps>): React.JSX.Element {
  return (
    <div className="flex items-center justify-center gap-2 w-[100px] max-w-[100px]">
      {icon}
      <Typography fontSize={22} fontWeight={700} className="text-[#b5b7bd] inline-block ml-1">
        {description}
      </Typography>
    </div>
  );
}
