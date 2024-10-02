import React from 'react'
import './header.css'
import header from '../../assets/logo/header_logo.svg'
import dropdown from '../../assets/icon/downarrow.svg'
export default function Header() {
    return (
        <div>
            <div className='header_color'>
                <div className='container'>
                    <div className='header_main'>
                        <div className='header_left'>
                            <div className='header_logo'>
                                <img src={header} alt='logo' />
                            </div>
                            <div className='header_link'>
                                <a href='#'>Aanbod</a>
                                <div className='dropdown'>
                                    <a href='#'>Regio</a>
                                    <img src={dropdown} alt='drop'/>
                                </div>
                                <a href='#'>Aanpak</a>
                                <div className='dropdown'>
                                    <a href='#'>Meer</a>
                                </div>

                            </div>
                        </div>
                        <div className='header_right'>
                            <div className='btn_page'>
                                <a href='#'>Inloggen</a>
                                <a href='#'>Registeren</a>
                                <button>Zoekprofiel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
