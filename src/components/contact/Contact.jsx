import React from 'react'
import './contact.css'
import theme from '../../assets/theme_pattern.svg'
import mail from '../../assets/mail_icon.svg'
import location from '../../assets/location_icon.svg'
import call from '../../assets/call_icon.svg'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "your api key");
    
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
          alert("Success", res.message);
        }
      };

  return (
    <div id='Contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme} alt="" />
        </div>
        <div className="contact-section">
            <div className="cleft">
                <h1>Let's talk</h1>
                <p>I am currently working on my personal projects</p>
                <div className="cdetails">
                    <div className="cdetail">
                    <img src={mail} alt="" />
                    <p>harshalmasram222@gmail.com</p>
                    </div>
                    <div className="cdetail">
                    <img src={call} alt="" />
                    <p>+99 1234567890</p>
                    </div>
                    <div className="cdetail">
                    <img src={location} alt="" />
                    <p>Nagpur, Maharashtra</p>  
                    </div>
                </div>
                </div>
            <div className="cright">
                <form onSubmit={onSubmit} action="" className="contact-right">
                    <label htmlFor="" ty>Your Name</label>
                    <input type="text" placeholder='Enter Your Name' name="name" id="1" />
                    <label htmlFor="" ty>Email</label>
                    <input type="email" placeholder='Enter Your Email' name="email" id="2" />
                    <label htmlFor="">Your message here</label>
                    <textarea  name="message" rows={'8'} placeholder='Enter your message' id="3"></textarea>
                    <button className='btn1'>Submit</button>
                </form>
            </div>
        
    </div>
    </div>
  )
}

export default Contact