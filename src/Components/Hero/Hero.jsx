import React from 'react'
import '../Hero/Hero.css'
import profile_img from '../../assets/assets/profile_img.png'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="" />
        <h1> <span> Maureen Ekeugo</span>, Full-Stack developer here 👋</h1>
        <p>Ready and passionate about crafting your vision into reality, from concept to deployment !! </p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero