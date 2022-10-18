import React from "react";
import PropTypes from 'prop-types';
import './LocationBanner.css';


const LocationBanner = ({ city, image }) => {
    const redirects = {
        'San Francisco': 'san-francisco',
        'New York': 'new-york',
        'Irvine': 'irvine',
    }

    return (
        <div className="location-banner" style={{backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <a href={`/locations/${redirects[city]}`}>
                <button>
                    {city}
                </button>
            </a>
        </div>
    )
};

export default LocationBanner;

LocationBanner.propTypes = {
    city: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  };
  