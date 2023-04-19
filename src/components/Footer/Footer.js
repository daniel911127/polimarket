import React from 'react'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FaWhatsapp} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <p>POLIMARKET ®</p>
      <p>Politicas de privacidad - Politicas de cookies </p>
      <div className='social_media'>
        <AiOutlineInstagram/>
        <FaWhatsapp/>
        <FaFacebookF/>
      </div>
    </div>
  )
}

export default Footer