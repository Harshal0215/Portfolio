 import React from 'react'
 import './services.css'
 import rose from '../../assets/wind-rose.png'
 import theme from '../../assets/theme_pattern.svg'
 import arrow from '../../assets/arrow_icon.svg'
 import services from '../../assets/services_data'
 
 const Services = () => {
   return (
     <div id='Services' className='services'>
        <div className="services-title">
            <h1>My Services</h1>
            <img src={theme} alt="" />
        </div>
        <div className="container">
            {services.map((service,i)=>{
                return <div key={i} className='format'>
                    <h3>{service.s_no.slice(1,2)}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    <div className="readmore">
                        {/* <p>Read More</p> */}
                        <img src={arrow} alt="" />
                    </div>
                </div>
            })}
        </div>
     </div>
   )
 }
 
 export default Services