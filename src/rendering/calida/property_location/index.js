import React from 'react'
import './location.css'
import property from '../../../assets/image/property.webp'
export default function PropertyLocation() {
  return (
    <div>
        <div className='pro_img'>
            <img src={property} alt='property'/>
        </div>
    </div>
  )
}
