import React from "react";
import PropTypes from 'prop-types';
import './LocationBanner.css';


const LocationBanner = ({ city, image, clickable }) => {
    const redirects = {
        'San Francisco': 'san-francisco',
        'New York': 'new-york',
        'Irvine': 'irvine',
    }

    return (
        <div className="location-banner" style={{backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
            {clickable && <a href={`/locations/${redirects[city]}`}>
                <button className="banner-city">
                    {city}
                </button>
            </a>}
            {!clickable && <div className="banner-city">{city}</div>}
        </div>
    )
};

export default LocationBanner;

LocationBanner.defaultProps = {
    clickable: false,
}

LocationBanner.propTypes = {
    city: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    clickable: PropTypes.bool,
};
  