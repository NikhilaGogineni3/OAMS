import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const SubscriptionPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription form submission
    console.log('Subscription form submitted!');
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Subscribe to Our Newsletter
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Subscribe to receive updates and news directly to your inbox.
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          id="email"
          label="Email Address"
          variant="outlined"
          type="email"
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Subscribe
        </Button>
      </form>
    </Container>
  );
}

export default SubscriptionPage;
