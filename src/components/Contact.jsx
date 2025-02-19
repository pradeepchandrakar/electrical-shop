import React from 'react'
import Headers from "./Header"
function Contact() {
  return (
    <>
    <Headers/>
    <div className='section'>
     
      <div className='contact'>
        <h1>CONTACT</h1>
       
        <p> Have a question or need assistance with electrical products and services? We’re here to help!<br/><br/> At <b>Chandrakar Electrical</b>, customer satisfaction is our top priority. Whether you need expert advice on electrical supplies, repairs for home appliances, or professional installation services, our team is ready to assist you.</p>
        <form action="">
          <label htmlFor="">Your Name</label>
          <input type="text" />
          <label htmlFor="">Your Phone</label>
          <input type="text" name="" id="" />
          <label htmlFor="">Your Email</label>
          <input type="text" name="" id="" />
          <label htmlFor="">Your Comment</label>
          <textarea name="" id=""></textarea>
          <button>SUBMIT CONTACT</button>
        </form>
      </div>


<div className="contactInfo">
<h1>CONTACT INFO</h1>

<p>
We'd love to hear from you - please use the form to send us your message or ideas. Or simply pop in for a cup of fresh tea and a cookie:
</p>
<p>1234 Ave Dermentum, Onsectetur Adipiscing Tortor Sagittis, CA 123456, United States</p>
<p>Email: info@gmail.com
Toll-free: (1234) 567 89XY</p>
<p>Opening Hours:
Monday to Saturday: 9am - 10pm
Sundays: 10am - 6pm</p>
</div>

    
    
    </div>
    </>
  )
}

export default Contact
