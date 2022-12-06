import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <h1 className="title">NPC Maker</h1>

      <div className="redirects">
        <button>Characters</button>
        <button>Tables</button>
        <button>Create a Character</button>
      </div>
    </div>
  );
};

export default Banner;
