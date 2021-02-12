import React from 'react';
// import './App.css';
import Slide from './Components/Slide';


const ExemploCssSlide = () => {


    const slides = [
        {
          id: 'slide1',
          text: 'Slide 1',
        },
        {
          id: 'slide2',
          text: 'Slide 2',
        },
        {
          id: 'slide3',
          text: 'Slide 3',
        },
      ];


    return (
        <div>
            <Slide slides={slides} />
        </div>
    )
}

export default ExemploCssSlide
