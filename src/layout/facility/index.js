import React from 'react'
import './specification.css'
import right from '../../assets/icon/arrow-up-right.svg'
import img from '../../assets/image/sp1.webp'
export default function Specification() {
    return (
        <div>
            <div className='facility_card'>
                <div className='facility_img'>
                    <img src={img} alt='img' />
                </div>
                <div className='spe_details'>
                    <div className='spe_title'>
                        <div className='spe_heading'>
                            <h3>The Nothings</h3>
                        </div>
                        <div className='spe_arrow'>
                            <img src={right} alt='right' />
                        </div>
                    </div>
                    <div className='spe_para'>
                        <p>Los Nietos is a charming little village situated between two protected nature reserves on the shores of the Mar Menor.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
