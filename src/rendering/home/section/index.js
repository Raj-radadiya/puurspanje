import React from 'react'
import './section.css'
import section from '../../../assets/image/banner2.webp'
export default function Section() {
  return (
    <div>
        <div className='section_main'>
            <div className='section_heading'>
                <h3>Ontvang de laatste informatie</h3>
                <p>97% van onze abonnees beoordeelt onze nieuwsbrief als nuttig en positief.</p>
            </div>
            <div className='banner_border'></div>
            <div className='section_img'>
                <img src={section} alt='section'/>
            </div>
        </div>
    </div>
  )
}
