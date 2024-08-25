import React from 'react'
import '../Hero/Hero.css'
import profile_img from '../../assets/assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='Home' className='hero'>
        <img src={profile_img} alt="" />
        <h1> <span> Maureen Ekeugo,</span> Full-Stack developer here 👋</h1>
        <p>Ready and passionate about crafting your vision into reality, from concept to deployment !! </p>
        <div className="hero-action">
            <div className="hero-connect">
            <AnchorLink className="anchor-link" offset={50} href="#Contact" >
              Connect with me </AnchorLink>
              </div>
            <div className="hero-resume"><a href="assets/resume.pdf" target="_blank" rel="noopener noreferrer">My Resume</a></div>
        </div>
    </div>
  )
}

export default Hero