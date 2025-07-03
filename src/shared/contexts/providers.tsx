import { ThemeProvider } from '@emotion/react';
import { PropsWithChildren } from 'react';
import { theme } from '../themes/theme';
import { CssBaseline } from '@mui/material';
import moment from 'moment';

export default function Providers({ children }: Readonly<PropsWithChildren>) {
  moment.updateLocale('pt-br', {
    months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    weekdays: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
