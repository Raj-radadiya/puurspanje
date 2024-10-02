import React from 'react'
import './banner.css'
import star from '../../../assets/icon/star.svg'
export default function Banner() {
    return (
        <div>
            <div className='header_color'>
                <div className='container'>
                    <div className='Hero_Banner'>
                        <div className='star_sec'>
                            <img src={star} alt='star' />
                            <img src={star} alt='star' />
                            <img src={star} alt='star' />
                            <img src={star} alt='star' />
                            <img src={star} alt='star' />
                            <span>100+ 5-sterren reviews</span>
                        </div>
                        <div className='banner_heading'>
                            <h1>Huis kopen in Spanje? Vind uw droomhuis.</h1>
                            <p>Puurspanje is een 🏆award-winning makelaar aan de Costa Cálida en Costa Blanca zuid.</p>
                        </div>
                        <div className='banner_btn'>
                            <button className='black_btn'>Naar aanbod</button>
                            <button className='orange_btn'>Verken de regio</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
