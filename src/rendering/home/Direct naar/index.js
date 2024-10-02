import React from 'react'
import './naar.css'
import naar1 from '../../../assets/image/NAAR1.webp'
import naar2 from '../../../assets/image/NAAR2.webp'
import naar3 from '../../../assets/image/NAAR3.webp'
import banner from '../../../assets/image/banner.webp'
export default function Naar() {
    return (
        <div>
            <div className='header_color'>
                <div className='container'>
                    <div className='naar_main'>
                        <div className='naar_head'>
                            <h2>DIRECT NAAR</h2>
                        </div>
                        <div className='naar_image'>
                            <div className='blog'>
                                <img src={naar1} alt='naar' />
                            </div>
                            <div className='blog'>
                                <img src={naar1} alt='naar' />
                            </div>
                            <div className='blog'>
                                <img src={naar1} alt='naar' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='banner'>
                    <img src={banner} alt='banner' />
                </div>
            </div>
        </div>
    )
}
