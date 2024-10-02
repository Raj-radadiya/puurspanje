import React from 'react'
import './slider.css'
import platsengrid from '../../assets/image/slider.webp'
import arrow from '../../assets/icon/right.svg'
export default function SLIDER() {
    return (
        <div>
            <div className='card_item'>
                <div className='card_image'>
                    <img src={platsengrid} />
                </div>
                <div className='card_desc'>
                    <h2>Cabo Roig</h2>
                    <p>Cabo Roig is een mooie plek aan de Middellandse Zee, die u zal doen genieten van haar landschappen, u laat onstpannen en waar u zich het hele jaar door zult vermaken.</p>
                    <div className='card_link'>
                        <a href='#'>Ontdekken</a>
                        <img src={arrow} />
                    </div>
                </div>
            </div>
        </div>
    )
}
