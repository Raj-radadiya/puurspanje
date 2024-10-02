import React from 'react'
import Banner from './herobanner'
import Naar from './Direct naar'
import Makelaar from './makelaar'
import Slider from './slider'
import Regio from './regio'
import Ontek from './Ontdek'
import Wardom from './wardom'
import Plaatsen from './PLAATSEN'
import Links from './all_links'
import AUtoSlider from './a_slider'
import Section from './section'
export default function Home() {
  return (
    <div>
        <Banner/>
        <Naar/>
        <Makelaar/>
        <Slider/>
        <Regio/>
        <Ontek/>
        <Wardom/>
        <Plaatsen/>
        <AUtoSlider/>
        <Links/>
        <Section/>
    </div>
  )
}
