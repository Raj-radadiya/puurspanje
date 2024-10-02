import React from 'react'
import House from './buy_house'
import CalidaBanner from './calida_banner'
import PropertyLocation from './property_location'
import Deal from './property_deal'
import LivingExp from './living_experience'
import Society from './society_details'

export default function Calida() {
  return (
    <div>
      <House/>
      <CalidaBanner/>
      <PropertyLocation/>
      <Deal/>
      <LivingExp/>
      <Society/>
    </div>
  )
}
