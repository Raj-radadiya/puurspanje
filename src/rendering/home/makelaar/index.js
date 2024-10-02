import React from 'react'
import './makelaar.css'
import mak_video from '../../../assets/video/video.webm'
import right from '../../../assets/icon/right.svg'
export default function Makelaar() {
    return (
        <div>
            <div className='header_color'>
                <div className='container'>
                    <div className='malelaar_main'>
                        <div className='makelaar_heading'>
                            <h1>Puurspanje, meer dan een makelaar!</h1>
                        </div>
                        <div className='makelaar_para'>
                            <p>Puurspanje is een familiebedrijf. Wij zetten ons met hart en ziel in om uw dromen waar te maken. Als Nederlandstalige makelaar delen wij sinds 2005 onze liefde voor de Costa Cálida en de Costa Blanca Zuid. Zo slagen wij erin om voor elke klant het juiste droomhuis te vinden. Telkens opnieuw, maar elke keer anders. Want twee zaken staan centraal: een persoonlijke service en tevreden klanten.</p>
                        </div>
                    </div>
                    <div className='makelaar_grid'>
                        <div className='video_grid'>
                            <video src={mak_video} autoPlay loop muted />
                        </div>
                        <div className='video_over'>
                            <div className='row_all'>
                                <div className='row_grid'>
                                    <div className='h4_p'>
                                        <h4>Toezicht op kwaliteit bouw</h4>
                                        <p>Strak toezicht op het bouwproces en regelmatige inspecties om de kwaliteit van het vastgoed te waarborgen. Via uw persoonlijke pagina kijkt u zelf mee!</p>
                                    </div>
                                    <div className='link_arrow'>
                                        <div className='row_btn'>
                                            <a href='#'>Ontdekken</a>
                                        </div>
                                        <div className='arrow'>
                                            <img src={right} alt='right' />
                                        </div>
                                    </div>
                                </div>
                                <div className='row_grid'>
                                    <div className='h4_p'>
                                        <h4>Geverifieerde en vertrouwde ontwikkelaars</h4>
                                        <p>Puurspanje werkt enkel samen met de beste projectontwikkelaars in Spanje. Het kan dus zo zijn dat u een bepaald project niet kunt vinden op onze site. Dit heeft dan een reden.</p>
                                    </div>
                                    <div className='link_arrow'>
                                        <div className='row_btn'>
                                            <a href='#'>Ontdekken</a>
                                        </div>
                                        <div className='arrow'>
                                            <img src={right} alt='right' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='column_grid'>
                                <div className='h4_p'>
                                    <h4>Toezicht op kwaliteit bouw</h4>
                                    <p>Strak toezicht op het bouwproces en regelmatige inspecties om de kwaliteit van het vastgoed te waarborgen. Via uw persoonlijke pagina kijkt u zelf mee!</p>
                                </div>
                                <div className='link_arrow'>
                                    <div className='row_btn'>
                                        <a href='#'>Ontdekken</a>
                                    </div>
                                    <div className='arrow'>
                                        <img src={right} alt='right' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border'></div>
            </div>
        </div>
    )
}
