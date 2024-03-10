/*import React, { useState, useEffect } from 'react';

const EditCampaignForm = ({ campaignId }) => {
  const [campaignData, setCampaignData] = useState({
    campaignName: '',
    targetAudience: '',
    budget: 0,
    adCreative: '',
  });

  useEffect(() => {
    // Fetch campaign data from backend API
    fetch(`/api/campaigns/${campaignId}`)
      .then(response => response.json())
      .then(data => {
        setCampaignData(data);
      })
      .catch(error => {
        console.error('Error fetching campaign data:', error);
        // Optionally, display error message to user
      });
  }, [campaignId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCampaignData({ ...campaignData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send PUT request to backend API to update campaign
    fetch(`/api/campaigns/${campaignId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(campaignData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Campaign updated:', data);
      // Optionally, display success message or redirect to dashboard
    })
    .catch(error => {
      console.error('Error updating campaign:', error);
      // Optionally, display error message to user
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="campaignName" value={campaignData.campaignName} onChange={handleChange} placeholder="Campaign Name" required />
      <input type="text" name="targetAudience" value={campaignData.targetAudience} onChange={handleChange} placeholder="Target Audience" required />
      <input type="number" name="budget" value={campaignData.budget} onChange={handleChange} placeholder="Budget" required />
      <textarea name="adCreative" value={campaignData.adCreative} onChange={handleChange} placeholder="Ad Creative" required></textarea>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditCampaignForm;*/
