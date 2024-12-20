import React from 'react';
import { Box, Typography, Button, Container, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import {ethers} from "ethers"

const AuthPage = () => {
  const navigate = useNavigate();

  const handleConnectAccount = () => {
    console.log('Connecting account...');
    // Add authentication logic or redirect here.
    navigate('/home');
  };

  const connectWallet = async () => {

  }

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #1d3557, #457b9d)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
      }}
    >
      <Container maxWidth="sm">
        <Card
          sx={{
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(15px)',
            padding: 4,
            borderRadius: 4,
            boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)',
          }}
        >
          <CardContent>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: 'bold', textAlign: 'center', color: '#fff' }}
            >
              Connect Your Account
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: 'center', color: '#d1d9e6' }}
            >
              Securely connect your account to access personalized services and manage your emails seamlessly.
            </Typography>
            <Box mt={4} textAlign="center">
              <Button
                variant="contained"
                size="large"
                onClick={handleConnectAccount}
                sx={{
                  px: 5,
                  py: 1.8,
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  backgroundColor: '#2a9d8f',
                  color: '#fff',
                  borderRadius: '8px',
                  '&:hover': {
                    backgroundColor: '#21867a',
                  },
                  transition: 'all 0.3s ease-in-out',
                }}
              >
                Connect Account
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default AuthPage;
