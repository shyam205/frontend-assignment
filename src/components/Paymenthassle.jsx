import React from 'react'
import PaymentHassleImage from '../images/payment_hassle.png'

function Paymenthassle() {
  return (
    <div className='payment_all_in_one'>
          <div className='payment_all_in_one_wrapper'>
                <div className='payment_all_in_one_text'>
                   <p className='payment_all_in_one_text_header'>Hassle free payment reconciliation</p>
                   <span className='payment_all_in_one_text_desc'>State of the art dashboard to track all types of payments at one place, with easy reporting!</span>
                </div>
                <div className='payment_all_in_one_image'>
                   <img src={PaymentHassleImage} alt="PaymentAllInOne" />
                </div>
          </div>
    </div>
  )
}

export default Paymenthassle