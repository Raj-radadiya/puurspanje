import React from 'react'
import './slider.css'
import slider from '../../../assets/image/slider.webp'
export default function Slider() {
  return (
    <div>
      <div className='container'>
        <div className='slider_main'>
          <div className='slider_heading'>
            <h1>Makelaar in Spanje</h1>
            <p>Puurspanje is dé Nederlandstalige makelaar in Spanje die erin slaagt om voor iedereen het juiste droomhuis te vinden. Telkens opnieuw, maar elke keer anders. We regelen alle zaken, van het koopcontract en juridische zaken tot het interieur, internet en verzekeringen. En dat doen we allemaal volledig gratis! Want twee zaken staan centraal: een persoonlijke service en tevreden klanten. Een huis kopen in Spanje was nog nooit zo eenvoudig en relaxed. Weet u al aan welke wensen uw droomhuis moet voldoen? Maak eenvoudig een zoekprofiel aan. Dan sturen we u een persoonlijke top 5.</p>
          </div>

          <div className='slider_image'>
            <img src={slider} alt='slider' />
          </div>
        </div>
      </div>
    </div>
  )
}
