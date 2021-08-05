import React from 'react';
import './Preloader.css';

const Preloader = ({ isLoading }) => {
  return (
    <div
      className={`preloader preloader_active${isLoading ? 'preloader_active' : ''} smoothly`}
    >
      <div className="preloader__container">
        <span className="preloader__round"></span>
      </div>
    </div>
  );
};

export default Preloader;
