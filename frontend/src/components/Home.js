import React from 'react';

function Home({ image }) {
  return (
    <div>
      <img src={image} alt="Home" style={{ width: '90%', height: '50%' }} />
    </div>
  );
}

export default Home;
