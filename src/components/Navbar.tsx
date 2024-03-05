import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

export default function ButtonAppBar() {
  const navigate = useNavigate()
  const currentDate = new Date().toDateString().split(" ").slice(1).join("-");
  return (
    <Box sx={{ flexGrow: 1, display: 'flex' }}>
      <AppBar position="fixed">
        <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon/>
            </IconButton>
            <Button color="inherit" size="large" onClick={() =>  navigate('/')}>Homepage</Button>
            <Typography sx={{ flexGrow: 1, justifyContent: "right" }}>
              Plan for {currentDate}
            </Typography>
            <Button color="inherit" size="large" onClick={() =>  navigate('/register')}>SIGN UP</Button>
            <Button color="inherit" size="large" onClick={() =>  navigate('/login')}>Log in</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
