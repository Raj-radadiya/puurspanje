import React from 'react'
import './specification.css'
import tick from '.././../assets/icon/icons8-tick.svg'
export default function Specification() {
    return (
        <div>
            <div className='specification_main'>
                <div className='specifition_card'>
                    <div className='tick_img'>
                        <img src={tick} alt='tick' />
                    </div>
                    <div className='specifition_text'>
                        <p>A Dutch speaking real estate agent Costa Cálida Spain</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
