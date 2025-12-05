
// contact.jsx Christopher Esguerra 301483615 September 14, 2025
import '../pagecss/contact.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ejosgwk', 'template_w0uk10p', form.current, 'vSBbvBEdH_Xn3dvp1')
      .then((result) => {
        console.log(result.text);
        alert("Message Submitted!")
        window.location.href = "/";

      }).catch((error) => {
        console.error(error.text);
      });
  };

  return (
    <>
      <section className="contact-section">
        <h1>Contact Me</h1>
        <span className="ContactDesc"> If you would like to get in touch, please fill out the form below! </span>
        <hr />
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <label className='form-label'>Name</label>
          <input className='form-input' type="text" name="user_name" />
          <label className='form-label'>Email</label>
          <input className='form-input' type="email" name="user_email" />
          <label className='form-label'>Message</label>
          <textarea className='form-input' name="message" />
          <input className='form-btn' type="submit" value="Send" />
        </form>
      </section>


      <footer>
        <p>&copy; 2025 Christopher Esguerra. All rights reserved. (currently not mobile supported)</p>
      </footer>
    </>
  )
}