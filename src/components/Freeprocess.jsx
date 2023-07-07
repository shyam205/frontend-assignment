import React from 'react'
import Contact from '../images/process_phone.png'
import Assesment from '../images/assesment.png'
import Live from '../images/live.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Freeprocess() {
    const settings = {
        dots: true,
        arrow:false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay:true
        
      };
  return (
    <div className='freeprocess'>
          <div className='freeprocess_wrapper nmobile'>
              <p className='heading'>Hassle free process to get started</p>

              <div className='cards'>
              <div className='cards_single'>
                 <span className='card_box_num'>01</span>
                 <div className='cards_single_box'>
                    <div>
                        <img src={Contact} alt='Contact' />
                    </div>
                    <p>Contact us to get started</p>
                    <span className='card_desc'>Our team would connect within 24hrs to complete fomalities</span>
                 </div>
              </div>
              <div className='cards_single'>
                 <span className='card_box_num'>02</span>
                 <div className='cards_single_box'>
                    <div>
                        <img src={Assesment} alt='Assesment' />
                    </div>
                    <p>Quick onboarding assessment</p>
                    <span>Get approval within a few minutes along with welcome kit & customised dashboard.</span>
                 </div>
              </div>
              <div className='cards_single'>
                 <span className='card_box_num'>03</span>
                 <div className='cards_single_box'>
                    <div>
                        <img src={Live} alt='Live' />
                    </div>
                    <p>one click activation & go live</p>
                    <span>Start offering smart payment options to your customers just after approval</span>
                 </div>
              </div>
              </div>
          </div>
          <div className='freeprocess_wrapper_mobile'>
          <p className='heading'>Hassle free process to get started</p>
          <Slider {...settings}>
          <div className='cards_single'>
                 <span className='card_box_num'>01</span>
                 <div className='cards_single_box'>
                    <div>
                        <img src={Contact} alt='Contact' />
                    </div>
                    <p>Contact us to get started</p>
                    <span className='card_desc'>Our team would connect within 24hrs to complete fomalities</span>
                 </div>
              </div>
              <div className='cards_single'>
                 <span className='card_box_num'>02</span>
                 <div className='cards_single_box'>
                    <div>
                        <img src={Assesment} alt='Assesment' />
                    </div>
                    <p>Quick onboarding assessment</p>
                    <span>Get approval within a few minutes along with welcome kit & customised dashboard.</span>
                 </div>
              </div>
              <div className='cards_single'>
                 <span className='card_box_num'>03</span>
                 <div className='cards_single_box'>
                    <div>
                        <img src={Live} alt='Live' />
                    </div>
                    <p>one click activation & go live</p>
                    <span>Start offering smart payment options to your customers just after approval</span>
                 </div>
              </div>

          </Slider>
          </div>
    </div>
  )
}

export default Freeprocess