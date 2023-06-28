import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F8F8F8',
      // dark: '#E71A67',
    },
    // Add more palette options if needed
  },
  // Add other theme customization options
});

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
}
