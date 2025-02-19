import React from 'react'
import Header from './header'
function Services() {
  return (
    <div className='service' >
      <Header/>
     <div className='serviceHeading'>
      <h1><span className='logo'>Our </span>Service</h1>
      <p>We are locally owned and operated which makes our services causal as they
are done by friendly and helpful technicians.

</p>
     </div>
     <div className="sericeontainer">
      <div className='serviceBox'>
        
      <i className="fa-solid fa-lightbulb icon"></i>
        <h3>Electrical</h3>
        <p>Wiring, Remodels and Additions,
        Heat detectors</p>
      </div>
      <div className='serviceBox'>
      <i className="fa fa-fire-extinguisher icon"></i>
        <h3>Heatire</h3>
        <p>Wiring, Remodels and Additions,
        Heat detectors</p>
      </div>
      <div className='serviceBox'>
      <i className="fa fa-shield icon"></i>
        <h3>Quality</h3>
        <p>Wiring, Remodels and Additions,
        Heat detectors</p>
      </div>
      </div>
      <br />
      <div className='sericeontainer'>
      <div className='serviceBox'>
      <i className="fa fa-camera-retro icon"></i>
<h3>Security Systems</h3>
<p>Wiring, Remodels and Additions,
Heat detectors</p>
      </div>
      <div className='serviceBox'>
      <i className="fa fa-gears icon"></i>
        <h3>Panels Changes</h3>
        <p>Wiring, Remodels and Additions,
        Heat detectors</p>
      </div>
      <div className='serviceBox'>
      <i className="fa fa-wrench icon"></i>
        <h3>Trouble Shooting</h3>
        <p>Wiring, Remodels and Additions,
        Heat detectors</p>
      </div>
     </div>
    
    </div>
    
  )
}

export default Services
