import React from 'react'
import './Footer.css'
import {BsFacebook,BsInstagram,BsPinterest,BsTwitter} from 'react-icons/bs'
import{BiMap,BiSolidPhone} from 'react-icons/bi'
import {AiOutlineMail}   from 'react-icons/ai'
const Footer = () => {
  return (
    <div className='Footer-container'>
      <div className='Footer-left'>
        <div className='Logo'>
            UpTrend.
        </div>
        <div className='Footer-desc'>
        There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </div>
        <div className='SocialContainer'>
          <div className='SocialIcon'>
            <BsFacebook/>
          </div>
          <div className='SocialIcon'>
            <BsInstagram />
          </div>
          <div className='SocialIcon'>
            <BsTwitter />
          </div>
          <div className='SocialIcon'>
            <BsPinterest />
          </div>
        </div>

      </div>

      <div className='Footer-center'>
        <div className='center-title'>
            Useful Links
        </div>
        
            <ul className='ListItem'>
                <li>Home</li>
                <li>Cart</li>
                <li>Man Fashion</li>
                <li>Woman Fashion</li>
                <li>Accessories</li>
                <li>My Account</li>
                <li>Order Tracking</li>
                <li>Wishlist</li>
                <li>Terms</li>
            </ul>
       

      </div>
      <div className='Footer-Right'>
        <div className='Right-title'>
              Contact
        </div>
        <div className='ContactItem'>
        <BiMap style={{marginRight:"10px"}}/> 62, G T Road, Kolkata
        </div>
        <div className='ContactItem'>
        <BiSolidPhone style={{marginRight:"10px"}}/>
        +91 9876 5432 10
        </div>
        <div className='ContactItem'>
        <AiOutlineMail style={{marginRight:"10px"}}/>
        contact@UpTrend.dev
        </div>
        <div className='Payment' >
            <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt=""/>
       </div>
      </div>
    </div>
  )
}

export default Footer;
