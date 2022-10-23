import { createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useMemo } from 'react';

export default function usePreferredTheme() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
          primary: {
            light: '#ff5131',
            main: '#d50000',
            dark: '#9b0000',
            contrastText: '#ffffff',
          },
          secondary: {
            light: '#5472d3',
            main: '#0d47a1',
            dark: '#002171',
            contrastText: '#ffffff',
          },
        },
        spacing: 4,
      }),
    [prefersDarkMode]
  );
  return theme;
}
