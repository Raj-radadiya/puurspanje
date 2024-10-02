import React from 'react'
import './card.css'
import card1 from '../../assets/image/card1.webp'
import bed from '../../assets/icon/bed.svg'
import bath from '../../assets/icon/bath.svg'
export default function Card() {
    return (
        <div>
            <div className='ontdek_card'>
                <div className='card_img'>
                    <img src={card1} alt='card' />
                </div>
                <div className='card_disc'>
                    <div className='title_price'>
                        <a>Villa op Santa Rosalia Lake & Life Resort, Costa Cálida, Spanje</a>
                        <p>€ 850.000</p>
                    </div>
                    <div className='spe_id'>
                        <div className='spe'>
                            <div className='bed'>
                                <img src={bed} alt='bed' />
                                <p>4</p>
                            </div>
                            <div className='bed'>
                                <img src={bath} alt='bath' />
                                <p>4</p>
                            </div>
                        </div>
                        <div className='id'>
                            <p>Property ID: 2245</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
