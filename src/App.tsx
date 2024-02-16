import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Navbar from './components/Navbar';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00FFFF', // Aqua Blue
    },
    secondary: {
      main: '#FFFF00', // Sunshine Yellow
    },
    warning: {
      main: '#32CD32', // Lime Green
    },
  },
});


function App() {

  return (
    <ThemeProvider theme={theme}>
        <Navbar />
        <Container>
          <h1>Welcome to Kids Planner App</h1>
        </Container>
    </ThemeProvider>
  );
}

export default App;
