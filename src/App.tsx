import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Users from './containers/users/Users'
import Homepage from './components/Homepage';
import Register from './auth/Register';
import Login  from './auth/Login';




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
      <BrowserRouter basename="/">
      {/* <a href="/users">users page</a> */}
        <Navbar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
