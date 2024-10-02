import React from 'react'
import './autoslider.css'
import star from '../../assets/icon/star.svg'
export default function AutoSlider() {
    return (
        <div className='card_main'>
            <div className='text_rating'>
                <div className='text'>
                    <h3>R</h3>
                </div>
                <div className='rating'>
                    <p>Michel & Sonja</p>
                    <div className='image_star'>
                        <img src={star} alt='star' />
                        <img src={star} alt='star' />
                        <img src={star} alt='star' />
                        <img src={star} alt='star' />
                        <img src={star} alt='star' />
                    </div>
                </div>
            </div>
            <div className='disc'>
                <p>Door het aanstekelijke enthousiasme van mijn broer, zwager zijn wij in contact gekomen met Puurspanje. Telefonisch contact gezocht met Daphne voor de nodige informatie, en ook zij bracht dat aanstekelijke enthousiasme bij ons over.</p>
            </div>
        </div>
    )
}
