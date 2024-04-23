import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import '../globals.css'
import theme from '../theme'; // Asegúrate de que la ruta al archivo del tema es correcta


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;