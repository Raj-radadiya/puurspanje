import React from 'react'
import './plaatsen.css'
import Slider from "react-slick";
import SLIDER from '../../../layout/slider'
import right from '../../../assets/icon/right.svg'
import left from '../../../assets/icon/left.svg'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className='right'
        onClick={onClick}
      >
        <img src={right} alt='right'/> 
        </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className='left'
        onClick={onClick}
      >
        <img src={left} alt='left'/>
        </div>
    );
  }

export default function Plaatsen() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
    return (
        <div>
            <div className="slider-container">
      <Slider {...settings}>
        <SLIDER/>
        <SLIDER />
        <SLIDER />
        <SLIDER />
      </Slider>
    </div>
        </div>
    )
}