import React from 'react'
import BackgroundImage from '../assets/BackgroundImage.jpg';
import '../styles/About.css';

export const About = () => {
  return (
    <div className='about'>
      <div className='aboutTop' style={{backgroundImage : `url(${BackgroundImage}) `}}></div>
      <div className='aboutBottom'>
        <h1>About Us</h1>
        <p>
        Burger King Corporation is an American multinational chain of hamburger fast food restaurants. 
        Headquartered in Miami-Dade County, Florida, the company was founded in 1953 as Insta-Burger King, 
        a Jacksonville, Florida-based restaurant chain.
        </p>
      </div>
    </div>
  );
};
