import React from 'react'
import PaymentAllInOne from '../images/payment-all-in-one.png'

function Paymentfirst() {
  return (
    <div className='payment_all_in_one'>
          <div className='payment_all_in_one_wrapper'>
                <div className='payment_all_in_one_text'>
                   <p className='payment_all_in_one_text_header'>All-in-onesmart payment suite</p>
                   <span className='payment_all_in_one_text_desc'>Accept payments from any method in seconds, card presence not required!</span>
                </div>
                <div className='payment_all_in_one_image'>
                   <img src={PaymentAllInOne} alt="PaymentAllInOne" />
                </div>
          </div>
    </div>
  )
}

export default Paymentfirst