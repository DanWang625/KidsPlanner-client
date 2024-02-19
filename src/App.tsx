import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Navbar from './components/Navbar';
import Calendar from 'react-calendar';
import { useState } from 'react';


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

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

function App() {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <ThemeProvider theme={theme}>
        <Navbar />
        <Container>
          <h1>Welcome to Kids Planner App</h1>
          <Calendar onChange={onChange} value={value} />
        </Container>
    </ThemeProvider>
  );
}

export default App;
