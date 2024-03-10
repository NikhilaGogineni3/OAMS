import React, { useState } from 'react';
import { Button, Container, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const CreateCampaignForm = () => {
  const [targetAudience, setTargetAudience] = useState('');
  const [budget, setBudget] = useState('');
  const [duration, setDuration] = useState('');
  const [adCreatives, setAdCreatives] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send form data to backend for processing/saving
    console.log('Form submitted:', { targetAudience, budget, duration, adCreatives });
    // Reset form fields after submission
    setTargetAudience('');
    setBudget('');
    setDuration('');
    setAdCreatives('');
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth margin="normal" variant="outlined">
          <InputLabel id="targetAudience-label">Target Audience</InputLabel>
          <Select
            labelId="targetAudience-label"
            id="targetAudience"
            value={targetAudience}
            onChange={(e) => setTargetAudience(e.target.value)}
            label="Target Audience"
          >
            <MenuItem value="Below 18 ">Below 18</MenuItem>
            <MenuItem value="18-24">18-24</MenuItem>
            <MenuItem value="25-45">25-45</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal" variant="outlined">
          <InputLabel id="budget-label">Budget</InputLabel>
          <Select
            labelId="budget-label"
            id="budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            label="Budget"
          >
            <MenuItem value="2 Lakhs">2 Lakhs</MenuItem>
            <MenuItem value="5-10 Lakhs">5-10 Lakhs</MenuItem>
            <MenuItem value="15 Lakhs">15 Lakhs</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal" variant="outlined">
          <InputLabel id="duration-label">Duration</InputLabel>
          <Select
            labelId="duration-label"
            id="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            label="Duration"
          >
            <MenuItem value="1 Week">1 Week</MenuItem>
            <MenuItem value="2 Weeks">2 Weeks</MenuItem>
            <MenuItem value="1 Month">1 Month</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal" variant="outlined">
          <InputLabel id="adCreatives-label">Ad Creatives</InputLabel>
          <Select
            labelId="adCreatives-label"
            id="adCreatives"
            value={adCreatives}
            onChange={(e) => setAdCreatives(e.target.value)}
            label="Ad Creatives"
          >
            <MenuItem value="Text Only">Text Only</MenuItem>
            <MenuItem value="Image">Image</MenuItem>
            <MenuItem value="Video">Video</MenuItem>
            <MenuItem value="Combination">Combination</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="primary">
          Create Campaign
        </Button>
      </form>
    </Container>
  );
};

export default CreateCampaignForm;
