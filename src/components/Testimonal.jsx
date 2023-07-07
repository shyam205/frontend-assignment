import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Fulledwithlove from '../images/fulled_width_love.png'
import Profileimage from '../images/Ellipse.png'
import { Link } from 'react-router-dom';

function Testimonal() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow:true,
        prevArrow: <svg xmlns="http://www.w3.org/2000/svg" width="29" height="14" viewBox="0 0 29 14" fill="none">
        <g opacity="0.3">
        <path d="M28.6667 7H1.99999" stroke="#656B81" stroke-width="2"/>
        <path d="M6.00046 1C5.33379 3.66667 3.60046 5.93333 2.00046 7C3.11157 7.88889 5.46712 10.3333 6.00046 13" stroke="#656B81" stroke-width="2"/>
        </g>
        </svg>,
        nextArrow: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="14" viewBox="0 0 30 14" fill="none">
        <path d="M0.666656 7H27.3333" stroke="black" stroke-width="2"/>
        <path d="M23.3329 1C23.9995 3.66667 25.7329 5.93333 27.3329 7C26.2217 7.88889 23.8662 10.3333 23.3329 13" stroke="black" stroke-width="2"/>
        </svg>,
        // autoplay:true
      };
  return (
    <div className='testimonal'>
         <div className='testimonal_wrapper'>
         <div className='testimonal_left'>
            <p>We are fuelled with love</p>
            <span>Thousands of partner have availed our services to achieve true business growth</span>
            <div className='testimonal_banner_image'>
                <img src={Fulledwithlove} alt='Fulledwithlove' />
                <div className='quote'>
                <svg width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.5433 21.8898C20.9711 21.8898 19.1076 20.9711 17.9528 19.1339C17.4278 18.3465 17.0079 17.3753 16.6929 16.2205C16.378 15.0656 16.2205 13.8583 16.2205 12.5984C16.2205 9.86876 16.9029 7.40157 18.2677 5.19685C19.685 2.99213 21.7585 1.25985 24.4882 0L25.1969 1.41732C23.6745 2.04724 22.336 3.01837 21.1811 4.33071C20.0787 5.64305 19.4226 6.98162 19.2126 8.34645C19.0551 8.97637 18.9764 9.58006 18.9764 10.1575C18.9764 10.6824 19.0551 11.1811 19.2126 11.6535C20.3675 10.3937 21.8898 9.76378 23.7795 9.76378C25.6168 9.76378 27.1129 10.315 28.2677 11.4173C29.4226 12.4672 30 13.937 30 15.8268C30 17.6115 29.3963 19.0814 28.189 20.2362C26.9816 21.3386 25.4331 21.8898 23.5433 21.8898ZM7.32284 21.8898C4.75066 21.8898 2.88714 20.9711 1.73228 19.1339C1.20735 18.3465 0.787402 17.3753 0.472441 16.2205C0.15748 15.0656 0 13.8583 0 12.5984C0 9.86876 0.682415 7.40157 2.04724 5.19685C3.46457 2.99213 5.53806 1.25985 8.26772 0L8.97638 1.41732C7.45407 2.04724 6.11549 3.01837 4.96063 4.33071C3.85827 5.64305 3.2021 6.98162 2.99213 8.34645C2.83465 8.97637 2.75591 9.58006 2.75591 10.1575C2.75591 10.6824 2.83465 11.1811 2.99213 11.6535C4.14698 10.3937 5.66929 9.76378 7.55906 9.76378C9.39633 9.76378 10.8924 10.315 12.0472 11.4173C13.2021 12.4672 13.7795 13.937 13.7795 15.8268C13.7795 17.6115 13.1759 19.0814 11.9685 20.2362C10.7612 21.3386 9.2126 21.8898 7.32284 21.8898Z" fill="#F8FAFC"></path>
                                </svg>
                </div>
            </div>
         </div>
         <div className='testimonal_right'>
         <Slider {...settings}>
          <div className='w-full'>
              <div className='slider_testimonal_first'>
                  <div className='slider_testimonal_first_image'>
                      <img src={Profileimage} alt='Profileimage' />
                  </div>
                  <div className='slider_testimonal_first_text'>
                      <h2>Mr. Summit Khanna</h2>
                      <p>Director, Frankin Sales Ltd.</p>
                  </div>
              </div>
              <div className='slider_testimonal_first_text_desc'>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</span>
              </div>
              <div className='partner_mumbai'>
                <Link to='#'>Partner Mumbai</Link>
              </div>
              
          </div>
          <div className='w-full'>
          <div className='slider_testimonal_first'>
                  <div className='slider_testimonal_first_image'>
                      <img src={Profileimage} alt='Profileimage' />
                  </div>
                  <div className='slider_testimonal_first_text'>
                      <h2>Mr. Summit Khanna</h2>
                      <p>Director, Frankin Sales Ltd.</p>
                  </div>
              </div>
              <div className='slider_testimonal_first_text_desc'>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</span>
              </div>
              <div className='partner_mumbai'>
                <Link to='#'>Partner Mumbai</Link>
              </div>
              
          </div>
          <div className='w-full'>
          <div className='slider_testimonal_first'>
                  <div className='slider_testimonal_first_image'>
                      <img src={Profileimage} alt='Profileimage' />
                  </div>
                  <div className='slider_testimonal_first_text'>
                      <h2>Mr. Summit Khanna</h2>
                      <p>Director, Frankin Sales Ltd.</p>
                  </div>
              </div>
              <div className='slider_testimonal_first_text_desc'>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</span>
              </div>
              <div className='partner_mumbai'>
                <Link to='#'>Partner Mumbai</Link>
              </div>
              
          </div>
          <div className='w-full'>
          <div className='slider_testimonal_first'>
                  <div className='slider_testimonal_first_image'>
                      <img src={Profileimage} alt='Profileimage' />
                  </div>
                  <div className='slider_testimonal_first_text'>
                      <h2>Mr. Summit Khanna</h2>
                      <p>Director, Frankin Sales Ltd.</p>
                  </div>
              </div>
              <div className='slider_testimonal_first_text_desc'>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</span>
              </div>
              <div className='partner_mumbai'>
                <Link to='#'>Partner Mumbai</Link>
              </div>
              
          </div>
          
        </Slider>
        </div>
         </div>
    </div>
  )
}

export default Testimonal