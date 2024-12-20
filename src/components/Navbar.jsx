import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography  variant="h6" sx={{ flexGrow: 1, cursor:'pointer' }} onClick={()=>navigate('/')} >
          D mail
        </Typography>
        <Button color="inherit" onClick={() => navigate('/')}>
          Landing
        </Button>
        <Button color="inherit" onClick={() => navigate('/home')}>
          Home
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;