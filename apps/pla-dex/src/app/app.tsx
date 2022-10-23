import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import ResearchAppBar from '../components/ResearchAppBar';
import usePreferredTheme from './usePreferredTheme';
import ResearchList from '../components/ResearchList';
import ResearchTaskCard from '../components/ResearchTaskCard';

export function App() {
  const theme = usePreferredTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ResearchAppBar />
      <Container disableGutters sx={{ mb: 8 }}>
        <ResearchList />
      </Container>
      <ResearchTaskCard />
    </ThemeProvider>
  );
}

export default App;
