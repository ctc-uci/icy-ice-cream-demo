import React from 'react';
import './Home.css';
import rightIcy from '../../images/RightIceCream.png';
import leftIcy from '../../images/LeftIceCream.png'

const Home = () => {
  return (
    <div className="home">
        <img src={rightIcy} alt="" />
        <h1>Icy Ice Cream</h1>
        <img src={leftIcy} alt="" />
    </div>
  );
};

export default Home;
