import React from 'react'
import PaymentOfferImage from '../images/payment_offer.png'
import RightTick from '../images/righttick.png'

function Paymentoffer() {
  return (
    <div className='payment_offer'>
    <div className='payment_offer_wrapper'>
          <div className='payment_all_in_one_text'>
             <p className='payment_all_in_one_text_header'>Offer Instant Cardless EMI today</p>
             <div className='payment_offer_desc'>
                <div className='payment_offer_desc_box'>
                    <img src={RightTick} alt="right-tick" />
                    <p>6.2 Cr+ preapproved customers</p>
                </div>
                <div className='payment_offer_desc_box'>
                    <img src={RightTick} alt="right-tick" />
                    <p>One click eligibility check</p>
                </div>
                <div className='payment_offer_desc_box'>
                    <img src={RightTick} alt="right-tick" />
                    <p>Zero processing fee</p>
                </div>
                <div className='payment_offer_desc_box'>
                    <img src={RightTick} alt="right-tick" />
                    <p>No documentation</p>
                </div>
             </div>
          </div>
          <div className='payment_all_in_one_image'>
             <img src={PaymentOfferImage} alt="PaymentAllInOne" />
          </div>
    </div>
</div>
  )
}

export default Paymentoffer