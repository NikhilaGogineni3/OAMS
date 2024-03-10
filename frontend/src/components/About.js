import React from 'react';
import './About.css';

const About = () => {
  const teamMembers = [
    { name: 'ANUGULA MANISHA', email: 'Mani@example.com', role: 'Lead Developer', description: 'Responsible for front-end and back-end development' },
    { name: 'GOGINENI NIKHILA', email: 'Niki@example.com', role: 'UI/UX Designer', description: 'Designs user interfaces and user experience for the application' },
    { name: 'TELUGU MOHAN', email: 'mohan@example.com', role: 'Marketing Manager', description: 'Leads the marketing efforts and user acquisition strategies' }
  ];

  return (
    <div className="about-us-section">
      <h2>About Us: Our Team</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <h3>{member.name}</h3>
            <p><strong>Role:</strong> {member.role}</p>
            <p><strong>Email:</strong> {member.email}</p>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
