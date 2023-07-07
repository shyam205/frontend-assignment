import React from 'react'
import BannerImage from '../images/banner.png'
import { Link } from 'react-router-dom'


function Banner() {
  return (
    <div className='banner'>
         <div className='banner_wrapper'>
             <div className='bannner_container_text'>
                <p className='banner_headline'>Let’s <span>Grow faster</span> with cobro</p>
                <span className='banner_desc'>Smart payment solution to accelerate your business growth</span>
                <Link to='#' className='banner_button'>Get Started</Link>
             </div>
             <div className='bannner_container_bg'>
               <img src={BannerImage} alt="banner_cobro" />
             </div>
        </div>
        
    </div>
  )
}

export default Banner