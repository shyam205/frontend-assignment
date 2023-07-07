import React, { useState} from 'react'
import Logo from '../images/logo.png';
import Menu from '../images/menu.png'

function Header() {
  const [mobile,setmobile] = useState(false)

  return (
    <div className='header'>
        <div className='header_wrapper'>
            <div className='logo_container'>
               <img src={Logo} alt='cobro' />
            </div>
            <div className='header_middle'>
                 <nav>
                    <ul>
                        <li>Features</li>
                        <li>Testimonials</li>
                        <li>Process</li>
                        <li>Join Us</li>
                        <li>Achievement</li>
                    </ul>
                 </nav>
            </div>
            <div className='header_toggle'>
                  <img src={Menu} alt='Menu' onClick={() => setmobile(!mobile)} />
            </div>
        </div>
        { mobile && 
          <div className='header_mobile header_toggle'>
          <nav>
             <ul>
                 <li>Features</li>
                 <li>Testimonials</li>
                 <li>Process</li>
                 <li>Join Us</li>
                 <li>Achievement</li>
             </ul>
          </nav>
     </div>
        }
    </div>
  )
}

export default Header