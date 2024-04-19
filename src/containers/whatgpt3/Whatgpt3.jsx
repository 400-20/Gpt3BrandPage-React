import React, {useEffect} from 'react';
import './whatgpt3.css';
import Aos from 'aos'
import 'aos/dist/aos.css';
import Feature from '../../components/feature/Feature';
const Whatgpt3 = () => {
  useEffect(()=>{
    Aos.init({})
  },[])
  
  return (
    <div className="gpt3__whatgpt3 section__margin" id='whpt3'>
      <div className="gpt3__whatgpt3-feature">
      <Feature title= "What is GPT-3" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."/>
      </div>
      <div className="gpt3__whatgpt3-heading gradient__text">
        <h1 >The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container" data-aos= "fade-up"data-aos-duration="600">
        <Feature title= "Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought.  "/>
        <Feature title= "Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"/>
        <Feature title= "Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"/>
      </div>
    </div>
  )
}

export default Whatgpt3