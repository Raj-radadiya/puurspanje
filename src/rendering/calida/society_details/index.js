import React from 'react'
import './society.css'
import Specification from '../../../layout/facility'
export default function Society() {
    return (
        <div>
            <div className='society_main'>
                <div className='container'>
                    <div className='society_sub'>
                        <div className='society_heading'>
                            <h3>Villages and towns on  the Costa Cálida</h3>
                            <p>The  Costa Cálida  is rich in numerous charming, authentic villages and towns.</p>
                        </div>
                        <div className='society_spe'>
                            <div className='society_left'>
                                <Specification />
                                <Specification />
                                <Specification />
                            </div>
                            <div className='society_right'>
                                <Specification />
                                <Specification />
                                <Specification />
                            </div>
                        </div>
                    </div>
                    <div className='climate_main'>
                        <div className='climate_hading'>
                            <h3>Costa Cálida: The best climate in Spain</h3>
                        </div>
                        <div className='climate_disc'>
                            <p>The Costa Cálida is a small climate paradise. Because the mountains protect the area from the wind, the temperatures remain pleasant all year round. The sun shines more than 300 days a year and the climate has mild summer temperatures and a mild winter.</p>
                            <h3>Puurspanje, not just a Dutch real estate agent on the Costa Cálida</h3>
                            <p>Puurspanje is happy to help you with all the steps of the purchase process of a property on the Costa Cálida. We also help you set up a Spanish bank account, take out insurance or arrange an internet connection. We guide you before, during and after the purchase, so that you can start your new life in Spain without worries.</p>
                        </div>
                    </div>
                    <div className='location_main'>
                        <div className='location_head'>
                            <h3>How do I find a house on the Costa Cálida?</h3>
                        </div>
                        <div className='location_info'>
                            <p>Are you sure that your dream home is on the Costa Cálida? Then simply create a search profile and let us know your wishes. Our team will make a personal selection of the houses in the region that meet these requirements. You will receive the top 5 in your mailbox within 24 hours. Is there a match? </p>
                            <p>Then you can book a viewing trip where you will view several homes together with us. Simply create a search profile via the button below and who knows, you may soon have found your dream home in the Spanish sun.</p>
                        </div>
                    </div>
                    <div className='other_details'>
                        <p>Murcia has a coastline of about 250 kilometers long: coves and narrow beaches with rocks. Here also lies, as it seems a geographical accident, called La Manga. A narrow strip of land, intersected by a few channels and openings, which closes the Mar Menor lagoon from the Mediterranean Sea. The largest part of the Costa Cálida is very rough and therefore not yet so overrun by mass tourism as many other costas.</p>

                        <h3>Contact your Dutch speaking real estate agent</h3>

                        <p>Are you curious about our houses on the Costa Cálida or do you have questions about our working methods? Please feel free to contact us. We are happy to help you find the perfect home on the Spanish coast and relieve you of all your worries during the entire purchase process and afterwards. From a viewing trip to setting up a bank account in Spain, we ensure that everything is arranged.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
