import React from 'react'
import './house.css'
export default function House() {
    return (
        <div>
            <div className='buy_main'>
                <div className='container'>
                    <div className='calida_property'>
                        <div className='house_calida_heading'>
                            <h3>Buy a house</h3>
                            <h2>Costa Calida</h2>
                        </div>
                        <div className='calida_disc'>
                            <p>The Costa Cálida is located in the southeast of Spain and together with the <strong>Costa Blanca</strong> it forms the region where you can enjoy the perfect climate all year round. The region stretches from Àguilas to San Pedro del Pinatar and has a wide choice of pleasant villages to live permanently.
                            With large cities nearby and authentic fishing villages, the rural environment is very diverse and attractive due to the lack of mass tourism.</p>

                            <button>View the offer</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='buy_boder'></div>
        </div>
    )
}
