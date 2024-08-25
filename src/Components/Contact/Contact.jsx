import React from 'react'
import '../Contact/Contact.css'
import theme_pattern from '../../assets/assets/theme_pattern.svg'
import mail_icon from '../../assets/assets/mail_icon.svg'
import github_icon from '../../assets/assets/github_icon.png'
import linkedin_icon from '../../assets/assets/linkedin_icon.png'
const accessKey = import.meta.env.VITE_ACCESS_KEY;




const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key",accessKey);
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
          alert(res.message)
        }
      };
    

  return (
    <div id='Contact' className='contact'>
        <div className="contact-title">
            <h1>Get in Touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk !</h1>
                <p>Let's connect and explore exciting projects together ! I eagerly embrace fresh challenges, looking forward to turning your vision into reality with passion and creativity. Let's build something exceptional together!</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" />
                        <p>Maureenekeugo1@gmail.com</p>

                    </div>
                    <div className="contact-detail">
                        <a href="https://www.linkedin.com/in/maureen-ekeugo-25139321b/">
                        <img src={linkedin_icon} alt="" />
                        <p>linkedin.com/maureen-ekeugo/</p>
                        </a>

                    </div>
                    <div className="contact-detail">
                        <img src={github_icon} alt="" />
                        <p>https://github.com/ReadyProgramReen</p>

                    </div>
                </div>
            </div>

            {/* RIGHT SECTION */}
            <form onSubmit={onSubmit} className="contact-right">
                <label >Company Name</label>
                <input type="text" placeholder='Enter your name' name='name'/>
                <label htmlFor="Your Email">Your Email</label>
                <input type="email"  placeholder='Enter Your Email' name='email'/>
                <label htmlFor="Write Your Message Here">Write Your Message Here</label>
                <textarea name="message" rows={'8'}  placeholder='Enter your message' id=""></textarea>
                <button type='submit' className="contact-submit">Submit Now</button>
            </form>

        </div>
        
    </div>
  )
}

export default Contact