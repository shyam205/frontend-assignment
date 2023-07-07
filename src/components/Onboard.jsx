import React from 'react'
import MapIn from '../images/mapind.png'
import { Link } from 'react-router-dom'

function Onboard() {
    const handleyourname = () => {
      let yname = document.querySelector('.yourname');
      yname.classList.add('yname')
    }
    const handleremoveyname = () => {
        let yname = document.querySelector('.yourname');
        yname.classList.remove('yname')
    }

    const handlephonenum = () => {
        let yname = document.querySelector('.phonenum');
        yname.classList.add('yname')
      }
      const handleremovephonenum = () => {
          let yname = document.querySelector('.phonenum');
          yname.classList.remove('yname')
      }

      const handlepbnum = () => {
        let yname = document.querySelector('.bhonenum');
        yname.classList.add('yname')
      }
      const handleremovebnum = () => {
          let yname = document.querySelector('.bhonenum');
          yname.classList.remove('yname')
      }

      const handleymessage = () => {
        let yname = document.querySelector('.ymessage');
        yname.classList.add('yname')
      }
      const handleremoveymessage = () => {
          let yname = document.querySelector('.ymessage');
          yname.classList.remove('yname')
      }

  return (
    <div className='onboard'>
        <div className='onboard_wrapper'>
            <div className='onboard_map'>
                <img src={MapIn} alt='mapin' />
            </div>
            <div className='onboard_form'>
                <h2 className='onboard_form_hrading'>Let us help you get onboarded</h2>
                <form>
                    <div className='onboard_form_first_input'>
                        <div>
                            <label className='yourname'>Your Name </label><br></br>
                            <input type='text' className='w_full' onFocus={ handleyourname} onBlur={ handleremoveyname } />
                        </div>
                        <div className='phone_box'>
                            <label className='phonenum'>Phone number </label><br></br>
                            <input type='text' className='w_full' onFocus={ handlephonenum} onBlur={ handleremovephonenum } />  
                        </div>
                    </div>
                    <div className='onboard_form_first_input_box2'>
                            <label className='bhonenum'>Business Name </label><br></br>
                            <input type='text' className='w_full' onFocus={ handlepbnum} onBlur={ handleremovebnum } />  
                        </div>
                        <div className='onboard_form_first_input_box3'>
                            <label className='ymessage'>Your message </label><br></br>
                            <input type='textarea' className='w_full' onFocus={ handleymessage} onBlur={ handleremoveymessage } />  
                        </div>
                        <div className='joint_network_btn'>
                        <Link href='#' className='joinnetwork'>Join the network</Link>
                        </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Onboard