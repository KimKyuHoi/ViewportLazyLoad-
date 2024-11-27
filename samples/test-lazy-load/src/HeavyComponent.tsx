import React from 'react';

const HeavyComponent = () => {
  return (
    <div style={{ padding: 20, background: '#f0f0f0', height: 2000 }}>
      <h2>This is a lazy loaded component!</h2>
      <p>It only loads when you scroll down to see it.</p>
    </div>
  );
};

export default HeavyComponent;
