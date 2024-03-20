import React from 'react'
import './Contact.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import GoogleIcon from '@mui/icons-material/Google';
const Contact = () => {
  return (
    <div className='contact'>
        <div className='wrapper'>
            <span>Be in contact with us</span>
            <div className='mail'>
                <input type='mail' placeholder='Enter your e-mail'/>
                <button>Join Us</button>
            </div>
            <div className='icons'>
                <FacebookIcon/>
                <InstagramIcon/>
                <XIcon/>
                <GoogleIcon/>
            </div>
        </div>
    </div>
  )
}

export default Contact