import React from 'react';
import PropTypes from 'prop-types';
import './Menu.css';

const Menu = ({ flavors }) => {
  return (
    <div className="flavors">
      {flavors.map(f => (
        <div key={f.flavor} className="single-item">
          <p className="flavor-title">{f.flavor}</p>
          <p>{f.cal} cal</p>
          <p>Available until: {f.availibility}</p>
        </div>
      ))}
    </div>
  );
};

Menu.propTypes = {
  flavors: PropTypes.array.isRequired,
};

export default Menu;
