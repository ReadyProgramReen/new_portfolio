import React from 'react'
import '../About/About.css'
import theme_pattern from '../../assets/assets/theme_pattern.svg'
import profile_img  from '../../assets/assets/about_profile.png'


const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">

            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>

            <div className="about-right">
                <div className="about-para">
                    <p>With three years of experience as a Full Stack Engineer, I’ve successfully collaborated with diverse clients to deliver innovative solutions and build impactful applications, always striving for excellence and client satisfaction.</p>
                    <p>Driven by a passion for building and architecture, I transitioned into Full Stack Engineering to merge my love for design and problem-solving. </p>
                </div>

                <div className="about-skills"> 
                    <div className="about-skill">
                        <p>React JS</p>
                        <hr style={{width:'54%'}} />
                    </div>
                    <div className="about-skill">
                        <p>HTML & CSS</p>
                        <hr style={{width:'60%'}} />
                    </div>
                    <div className="about-skill">
                        <p>Javascript</p>
                        <hr style={{width:'54%'}} />
                    </div>
                    <div className="about-skill">
                        <p>Node JS</p>
                        <hr style={{width:'58%'}} />
                    </div>
                    <div className="about-skill">
                        <p>UX and UI</p>
                        <hr style={{width:'40%'}} />
                    </div>
                </div>

            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>3+</h1>
                <p>YEARS of Experience</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>20+</h1>
                <p>Projects Completed</p>
            </div>
            <hr />

            <div className="about-achievement">
                <h1>10+</h1>
                <p>Clients</p>
            </div>
        </div>
    </div>
  )
}

export default About