import React from 'react'
import './regio.css'
import regio from '../../../assets/video/ragio.webm'
import img1 from '../../../assets/image/img1.webp'
import img2 from '../../../assets/image/img2.webp'
export default function Regio() {
    return (
        <div>
            <div className='container'>
                <div className='regio_main'>
                    <div className='regio_heading'>
                        <h3>Beste regio Spanje</h3>
                        <p>De Costa Cálida en Costa Blanca Zuid in Spanje zijn de laatste verborgen Mediterrane schatten, amper beïnvloed door massatoerisme. De stranden en de natuur hebben hun natuurlijke schoonheid behouden. En de cultuur is authentiek gebleven. Proef van het leven in het echte Spanje</p>
                    </div>
                    <div className='ragio_grid'>
                        <div className='ragio_video'>
                            <video src={regio} autoPlay loop muted />
                        </div>
                        <div className='ragio_img'>
                            <div className='regio'>
                                <img src={img1} alt='img' />
                            </div>
                            <div className='regio'>
                                <img src={img1} alt='img' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
