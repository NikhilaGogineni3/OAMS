import React from 'react';
import { Container, Typography, Grid, Paper, TextField, Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const ContactPage = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Hey! We are located in Bangalore and Hyderabad.
        <br />
        Feel free to use the contact form below to reach out to us, or write us the old-fashioned way.
      </Typography>
      <Grid container spacing={2} style={{ marginTop: '20px' }}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ padding: '20px', height: '100%' }}>
            <LocationOnIcon fontSize="large" />
            <Typography variant="h5" gutterBottom>
              Snail Mail
            </Typography>
            <Typography variant="body2" gutterBottom>
            15, Convent Rd, Inside Green Theory, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560025, India
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ padding: '20px', height: '100%' }}>
            <EmailIcon fontSize="large" />
            <Typography variant="h5" gutterBottom>
              Electronic Mail
            </Typography>
            <Typography variant="body2" gutterBottom>
              fameflare12@gmail.com
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ padding: '20px', height: '100%' }}>
            <PhoneIcon fontSize="large" />
            <Typography variant="h5" gutterBottom>
              Phone Support
            </Typography>
            
            <Typography variant="body2" gutterBottom>
              +91 9392130721
              <br />
              Mon - Fri: 9am - 5pm
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginTop: '20px' }}>
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Contact Form
            </Typography>
            <form>
              <TextField
                fullWidth
                margin="normal"
                id="name"
                label="Name"
                variant="outlined"
              />
              <TextField
                fullWidth
                margin="normal"
                id="email"
                label="Email"
                variant="outlined"
              />
              <TextField
                fullWidth
                margin="normal"
                id="message"
                label="Message"
                multiline
                rows={4}
                variant="outlined"
              />
              <Button variant="contained" color="primary">
                Submit
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ContactPage;
