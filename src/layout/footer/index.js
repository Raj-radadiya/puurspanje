import React from 'react'
import './footer.css'
import insta from '../../assets/icon/insta.png'
import fb from '../../assets/icon/facebook.svg'
import tw from '../../assets/icon/twitter-x.svg'
import Flinks from '../footer_links'
import c1 from '../../assets/logo/c1.webp'
import c2 from '../../assets/logo/c2.webp'
import c3 from '../../assets/logo/c3.webp'
import c4 from '../../assets/logo/c4.webp'
import c5 from '../../assets/logo/c5.webp'
import c6 from '../../assets/logo/c6.webp'
import c7 from '../../assets/logo/c7.webp'
import c8 from '../../assets/logo/c8.webp'
import c9 from '../../assets/logo/c9.webp'
import c10 from '../../assets/logo/c10.webp'
export default function Footer() {
    return (
        <div>
            <div className='footer_main'>
                <div className='container'>
                    <div className='logo_info'>
                        <div className='f_logo'>
                            <h3>puurspanje</h3>
                            <div className='social_icon'>
                                <img src={insta} alt='insta' />
                                <img src={fb} alt='insta' />
                                <img src={tw} alt='insta' />
                            </div>
                        </div>
                        <div className='info'>
                            <h3>Get the latest information</h3>
                            <p>97% of our subscribers rate our newsletter as useful and positive.</p>
                            <div className='email_reg'>
                                <input type='email' placeholder='E-mail' />
                                <button>To register</button>
                            </div>
                        </div>
                    </div>
                    <div className='footer_links'>
                        <Flinks />
                        <Flinks />
                        <Flinks />
                        <div className='empty_link'>

                        </div>
                    </div>
                    <div className='footer_calida_link'>
                        <div className='footer_calida_heading'>
                            <h3>The best region of Spain</h3>
                        </div>
                        <div className='calida_title'>
                            <h3>Costa Calida</h3>
                        </div>
                        <div className='calida_links'>
                            <Flinks/>
                            <Flinks/>
                            <Flinks/>
                            <Flinks/>
                        </div>
                        <div className='calida_title'>
                            <h3>Costa Blanca</h3>
                        </div>
                        <div className='blanca_links'>
                            <Flinks/>
                            <Flinks/>
                            <Flinks/>
                            <Flinks/>
                        </div>
                    </div>

                    <div className='notice_main'>
                        <div className='notice'>
                            <a href='#'>Legal notice</a>
                        </div>
                        <div className='com_logo'>
                            <img src={c1} alt='c1'/>
                            <img src={c2} alt='c2'/>
                            <img src={c3} alt='c3'/>
                            <img src={c4} alt='c4'/>
                            <img src={c5} alt='c5'/>
                            <img src={c6} alt='c6'/>
                            <img src={c7} alt='c7'/>
                            <img src={c8} alt='c8'/>
                            <img src={c9} alt='c9'/>
                            <img src={c10} alt='c10'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
