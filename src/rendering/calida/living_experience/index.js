import React from 'react'
import './experience.css'
import country from '../../../assets/image/country.webp'
export default function LivingExp() {
    return (
        <div>
            <div className='exp_main'>
                <div className='container'>
                    <div className='exp_grid'>
                        <div className='exp_heading'>
                            <h3>Living on the Costa Calida</h3>
                        </div>
                        <div className='exp_para'>
                            <p className='para'>The Costa Cálida has many advantages to offer. Because it is not yet a well-known tourist spot and is characterized by rough terrain, it is quieter than the other Spanish Costas. This ensures that house prices have not yet been affected and that prices in the supermarket and catering are lower than in the more well-known places in Spain.</p>
                            <p>In this region, finding a house on a budget is easy. The most affordable living in Spain is on the Costa Cálida or in the surrounding villages.</p>
                        </div>
                    </div>

                    <div className='country_details_main'>
                        <div className='country_details'>
                                <div className='country_title'>
                                    <p>Why choose this region:</p>
                                </div>
                                <div className='country_details'>
                                    <div className='other_info'>
                                        <h3>Average 25 degrees, all year round</h3>
                                        <p>The Costa Cálida enjoys an average temperature of around 25°C all year round, with warm summers and mild winters.</p>
                                    </div>
                                    <div className='other_info'>
                                        <h3>Average 25 degrees, all year round</h3>
                                        <p>The Costa Cálida enjoys an average temperature of around 25°C all year round, with warm summers and mild winters.</p>
                                    </div>
                                    <div className='other_info'>
                                        <h3>Average 25 degrees, all year round</h3>
                                        <p>The Costa Cálida enjoys an average temperature of around 25°C all year round, with warm summers and mild winters.</p>
                                    </div>
                                    <div className='other_info'>
                                        <h3>Average 25 degrees, all year round</h3>
                                        <p>The Costa Cálida enjoys an average temperature of around 25°C all year round, with warm summers and mild winters.</p>
                                    </div>
                                    <div className='other_info'>
                                        <h3>Average 25 degrees, all year round</h3>
                                        <p>The Costa Cálida enjoys an average temperature of around 25°C all year round, with warm summers and mild winters.</p>
                                    </div>
                                </div>
                        </div>
                        <div className='country_map'>
                            <img src={country}  alt='country'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border'></div>
        </div>
    )
}
