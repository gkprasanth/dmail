import React from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PrivacyIcon from '@mui/icons-material/PrivacyTip';
import DecentralizedIcon from '@mui/icons-material/CloudQueue';
import SecurityIcon from '@mui/icons-material/Security';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ backgroundColor: '#f9f9f9', minHeight: '100vh', fontFamily: 'Roboto, sans-serif' }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #4a00e0, #8e2de2)',
          color: '#fff',
          py: 20,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" gutterBottom sx={{ fontWeight: 700 }}>
            Welcome to Decentralized Email Service
          </Typography>
          <Typography variant="h6" color="inherit" paragraph>
            Secure, private, and efficient email communication powered by blockchain.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              px: 5,
              py: 1.8,
              fontWeight: 'bold',
              fontSize: '1.1rem',
              backgroundColor: '#fff',
              color: '#4a00e0',
              borderRadius: 8,
              '&:hover': { backgroundColor: '#e3e3e3' },
            }}
            onClick={() => navigate('/auth')}
          >
            Get Started
          </Button>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 10 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 600 }}>
            Why Choose Us?
          </Typography>
          <Typography variant="body1" align="center" color="textSecondary" paragraph>
            Unparalleled security and reliability for your email needs.
          </Typography>
          <Grid container spacing={6} mt={4}>
            {[
              {
                title: 'Complete Privacy',
                description:
                  'Your emails are encrypted and securely stored on the blockchain, ensuring no unauthorized access.',
                icon: <PrivacyIcon sx={{ fontSize: 50, color: '#4a00e0' }} />,
              },
              {
                title: 'Decentralized Technology',
                description:
                  'Say goodbye to central servers and hello to distributed storage and management.',
                icon: <DecentralizedIcon sx={{ fontSize: 50, color: '#4a00e0' }} />,
              },
              {
                title: 'Enhanced Security',
                description:
                  'Advanced cryptographic methods protect your emails and ensure only you have access to them.',
                icon: <SecurityIcon sx={{ fontSize: 50, color: '#4a00e0' }} />,
              },
            ].map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    height: '250px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s',
                    '&:hover': { transform: 'scale(1.05)' },
                  }}
                >
                  {feature.icon}
                  <CardContent>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Box sx={{ py: 10, backgroundColor: '#f4f4ff' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 600 }}>
            Benefits of Decentralized Email
          </Typography>
          <Grid container spacing={6} mt={4}>
            {[
              {
                title: 'Complete Control',
                description:
                  'Retain full control over your data with no middleman or third-party services involved.',
              },
              {
                title: 'Future-Proof',
                description:
                  'Built on cutting-edge blockchain technology, ensuring longevity and scalability.',
              },
              {
                title: 'Global Accessibility',
                description:
                  'Access your emails securely from anywhere in the world without restrictions.',
              },
              {
                title: 'Cost-Effective',
                description:
                  'No recurring fees for data storage or centralized service management.',
              },
            ].map((benefit, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <CheckCircleIcon sx={{ fontSize: 40, color: '#4a00e0' }} />
                  <Box>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                      {benefit.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {benefit.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Call to Action Section */}
      <Box
        sx={{
          py: 10,
          textAlign: 'center',
          background: 'linear-gradient(135deg, #8e2de2, #4a00e0)',
          color: '#fff',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
            Ready to Get Started?
          </Typography>
          <Typography variant="body1" paragraph>
            Join us today and revolutionize the way you manage your emails.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              px: 5,
              py: 1.8,
              fontWeight: 'bold',
              fontSize: '1.1rem',
              backgroundColor: '#fff',
              color: '#4a00e0',
              borderRadius: 8,
              '&:hover': { backgroundColor: '#e3e3e3' },
            }}
            onClick={() => navigate('/auth')}
          >
            Sign Up Now
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;
