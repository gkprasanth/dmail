import React from 'react';
import { Box, Typography, Button, Container, Grid, Paper } from '@mui/material';

const HomePage = () => {
  const emailFeatures = [
    'Inbox Organization',
    'Advanced Search',
    'Spam Filtering',
    'Custom Labels',
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="h6" color="textSecondary" paragraph>
        Manage your emails effortlessly with these features:
      </Typography>

      <Grid container spacing={4}>
        {emailFeatures.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper elevation={3} sx={{ padding: 3, textAlign: 'center' }}>
              <Typography variant="h6">{feature}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Box mt={4} textAlign="center">
        <Button variant="contained" color="primary" size="large">
          Compose Email
        </Button>
      </Box>
    </Container>
  );
};

export default HomePage;