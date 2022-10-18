import React from 'react';
import cities from '../Locations/cities';
import LocationBanner from '../../components/LocationBanner/LocationBanner';
import Menu from '../../components/Menu/Menu';
import PropTypes from 'prop-types';
import './City.css';

const City = ({ city }) => {
  let info = {};
  if (city === 'San Francisco') {
    info = cities[0];
  } else if (city === 'New York') {
    info = cities[1];
  } else {
    info = cities[2];
  }

  return (
    <div className="city">
      <LocationBanner city={city} image={info.image} />
      <Menu flavors={info.flavors} />
    </div>
  );
};

City.propTypes = {
  city: PropTypes.string.isRequired,
};

export default City;
