import React from 'react'
import './AutoSlider.css'
import Slider from "react-slick";
import AutoSlider from '../../../layout/auto_slider';
export default function  AUtoSlider() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };
  const settings2 = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    rtl: true
  };

  return (
    <div className='header_color'>
      <div className='auto_main'>
        <div className='auto_heading'>
          <h3>Wat klanten zeggen</h3>
        </div>
        <div className='slider'>
          <div className="slider_container">
            <Slider {...settings}>
              <AutoSlider />
              <AutoSlider />
              <AutoSlider />
              <AutoSlider />
            </Slider>
          </div>
          <div className='slider_container2'>
            <Slider {...settings2}>
              <AutoSlider />
              <AutoSlider />
              <AutoSlider />
              <AutoSlider />
            </Slider>
          </div>
        </div>
        <div className='auto_btn'>
          <button>Alle referenties</button>
        </div>
      </div>
    </div>
  )
}
