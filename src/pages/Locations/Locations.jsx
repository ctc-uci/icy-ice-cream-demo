import React from 'react';
import cities from './cities';
import LocationBanner from '../../components/LocationBanner/LocationBanner';
import './Locations.css';

const Locations = () => {
  return (
    <div className="locations">
      <h1>Locations</h1>
      {cities.map(c => (
        <LocationBanner key={c.city} city={c.city} image={c.image} clickable />
      ))}
    </div>
  );
};

export default Locations;
