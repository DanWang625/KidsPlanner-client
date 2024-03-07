import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Users from './containers/users/Users'
import Homepage from './containers/homepage/Homepage';
import Register from './auth/Register';
import Login  from './auth/Login';
import UserDetail from './containers/users/UserDetail';
import Plans from './containers/plans/Plans';
import PlanDetail from './containers/plans/PlanDetail';
import MyNotifications from './containers/notifications/MyNotifications';
import NotificationDetail from './containers/notifications/NotificationDetail';
import CreatePlan from './containers/plans/CreatePlan';

const theme = createTheme({
  palette: {
    mode: 'light',
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
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
              <Route path="/users" element={<Users />} />
              <Route path="/users/:userId" element={<UserDetail />} />
              <Route path="/users/:userId/plans" element={<Plans />} />
              <Route path="/users/:userId/plans/create" element={<CreatePlan />} />
              <Route path="/users/:userId/plans/:id" element={<PlanDetail />} />
              <Route path="/users/:userId/notifications" element={<MyNotifications />} />
              <Route path="/users/:userId/notifications/:id" element={<NotificationDetail />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
