import React from 'react'
import './ontdek.css'
import Card from '../../../layout/card'
export default function Ontek() {
    return (
        <div>
            <div className='ontdek_color'>
                <div className='container'>
                    <div className='ontdek_main'>
                        <h1>Ontdek het beste aanbod van woningen in Zuid-Spanje</h1>
                        <p>Wat weerhoudt u ervan om voluit voor uw droom te gaan en een huis in Spanje te kopen? Voor de prijs moet u het niet laten. U heeft al een appartement vanaf 175.000 euro en een villa vanaf 300.000 euro.</p>
                    </div>
                </div>
            </div>
            <div className='ontdek_border'></div>
            <div className='container'>
                <div className='ontdek_card_main'>
                    

                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </div>
        
    )
}
