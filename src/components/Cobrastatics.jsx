import React from 'react'
import Bannerlogo from '../images/cobro_banner.png'

function Cobrastatics() {
  return (
    <div className='cobrastatic'>
        <div className='cobrastatic_wrapper'>
            <div className='cobrastatic_text'>
                <div>
                    <p>6.2 Cr+</p>
                    <span>Pre approved Customers</span>
                </div>
                <div>
                    <p>150+</p>
                    <span>Supported Payment Methods</span>
                </div>
                <div>
                    <p>30,000+</p>
                    <span>Merchants Being Enrolled</span>
                </div>
            </div>
            <div className='cobrastatic_bg'>
                 <img src={Bannerlogo} alt='Bannerlogo' />
            </div>
        </div>
    </div>
  )
}

export default Cobrastatics