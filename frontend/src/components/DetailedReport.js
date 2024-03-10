/*import React from 'react';
import { Bar } from 'react-chartjs-2';

const DetailedReport = ({ campaignData }) => {
  // Sample campaign data containing metrics
  const data = {
    labels: ['Impressions', 'Clicks', 'Conversions'],
    datasets: [
      {
        label: 'Performance Metrics',
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
        borderWidth: 1,
        hoverBackgroundColor: ['rgba(255, 99, 132, 0.4)', 'rgba(54, 162, 235, 0.4)', 'rgba(255, 206, 86, 0.4)'],
        hoverBorderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
        data: [campaignData.impressions, campaignData.clicks, campaignData.conversions],
      },
    ],
  };

  return (
    <div>
      <h2>Campaign Performance Report</h2>
      <Bar
        data={data}
        width={100}
        height={50}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default DetailedReport;*/
