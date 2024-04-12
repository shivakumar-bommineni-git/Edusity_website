import React from 'react';
import './Contact.css';
import msg_icon from  '../../assets/msg-icon.png'
import mail_icon from  '../../assets/mail-icon.png'
import phone_icon from  '../../assets/phone-icon.png'
import location_icon from  '../../assets/location-icon.png'
import white_arrow from  "../../assets/white-arrow.png"


const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7b2b9e91-c6f9-421d-9e99-6f21826c17cf");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());


    if (res.success) {
      console.log('Form submitted successfully', res);
      setResult(res.message);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(res.message);
    }
  };


  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon}alt="" /></h3>
            <p>Feel free to reach out through contact from or find our contact information below.Your feedback,questions ,and suggetions are important to us as we strive to provide exceptional services to our university community.</p>
            <ul>
                <li><img src={mail_icon} alt="" />Contact@GreatStack.dev</li>
                <li><img src={phone_icon} alt="" />+12 1234-235-2345</li>
                <li><img src={location_icon} alt="" />77 massachusetts Ave, Combridge <br/> New York City, USA</li>

            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
              <label htmlFor="">Your Name</label>
              <input type="text" name="name" id="" placeholder='Enter  your name' required/>
              <label htmlFor="">Phone Number</label>
              <input type="text" name="phone" id="" placeholder='Enter  your mobile number' required/>
              <label htmlFor="">Write your messages here</label>
              <textarea name="message"  rows="6" placeholder='Type your message...' required/>
            <button type="submit" className='btn dark-btn' >Submit <img src={white_arrow} alt="" /></button>
              
            </form>
            <span>{result}</span>
        </div>
      
    </div>
  );
}

export default Contact;
