
import React,{ useEffect} from 'react';
import './cta.css';
import Aos from 'aos';
import 'aos/dist/aos';


const Cta = () => {
  useEffect(() => {
    Aos.init({}); // You can customize the duration and other options

    // Optional: You can refresh AOS whenever your component updates
    Aos.refresh();
  }, []); // Empty dependency array ensures that this effect runs once after the initial render

  return (
    <div className="gpt3__cta section__margin" >
      <h5  data-aos="fade-up" data-aos-duration="600"> Request Early Access to Get Started </h5>
      <div className="cta_content">
        <div className='gpt3__cta-contentleft'>
          <h2 data-aos="fade-up" data-aos-duration="600">Register today & start exploring the endless possibilities.</h2>
        </div>
        <div className='gpt3__cta-contentright' >
          <button data-aos="fade-up" data-aos-duration="600">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Cta