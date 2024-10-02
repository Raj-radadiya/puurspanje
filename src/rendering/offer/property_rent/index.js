import React from 'react'
import './property.css'
import down from '../../../assets/icon/downarrow.svg'
import Card from '../../../layout/card'
import Section from '../../home/section'
export default function Property() {
    return (
        <div>
            <div className='property_main'>
                <div className='property'>
                    <div className='sale_drop'>
                        <div className='sale'>
                            <p>0 homes for sale</p>
                        </div>
                        <div className='drop'>
                            <div className='dropdown1'>
                                <div className='new'>
                                    <p>New First</p>
                                </div>
                                <div className='down'>
                                    <img src={down} alt='down'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='property_deal'>
                        <Card/>
                        <Card/>
                    </div>
                    <div className='property_deal'>
                        <Card/>
                        <Card/>
                    </div>
                    <div className='property_deal'>
                        <Card/>
                        <Card/>
                    </div>
                    

                </div>
                <div className='map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d653667.7372690076!2d-3.011623670857529!3d40.44188349144584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid%2C%20Spain!5e0!3m2!1sen!2sin!4v1727604328374!5m2!1sen!2sin" width="600" height="900" frameBorder="0" allowFullScreen></iframe>
                </div>
            </div>
            <div className='information'>
                <Section/>  
            </div>
        </div>
    )
}
