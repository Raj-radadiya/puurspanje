import React from 'react'
import './links.css'
import CalidaLink from '../../../layout/All_link'

export default function Links() {
  return (
    <div>
      <div className='container'>
        <div className='all_links_main'>
          <div className='link_head'>
            <h3>Verken de regio</h3>
          </div>
          <div className='calida'>
            <div className='calida_heading'>
              <h3>Costa Calida</h3>
              <p>De Costa Cálida is gelegen in het zuidoosten van Spanje en vormt samen met de Costa Blanca de regio waar u het hele jaar door geniet van het perfecte klimaat.</p>
            </div>
            <div className='calida_link'>
              <CalidaLink/>
              <CalidaLink/>
              <CalidaLink/>
            </div>
          </div>


          <div className='blanca'>
            <div className='blanca_heading'>
              <h3>Costa Blanca Zuid</h3>
              <p>De Costa Blanca betekent letterlijk ‘witte kust’ en is 1 van de 10 Spaanse Costa's.</p>
            </div>
            <div className='blanca_link'>
              <CalidaLink/>
              <CalidaLink/>
              <CalidaLink/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
