import React from 'react'
import './deal.css'
import Card from '../../../layout/card'
export default function Deal() {
    return (
        // <div>
        <div className='deal_main'>
            <div className='container'>
                <div className='deal_heading'>
                    <h3>Living on the Costa Calida</h3>
                </div>
                <div className='pro_deal'>
                    <Card />
                    <Card />
                    <Card />
                </div>

                <div className='pro_btn'>
                    <button>View properties</button>
                </div>
            </div>
        </div>
    )
}
