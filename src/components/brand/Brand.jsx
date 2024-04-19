import React from 'react';
import './brand.css';
import { google,slack,atlassian,dropbox,shopify } from './imports';
const brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <img src= {google} alt="google"></img>
      </div>
      <div>
        <img src= {slack} alt="google"></img>
      </div>
      <div>
        <img src= {atlassian} alt="google"></img>
      </div>
      <div>
        <img src= {dropbox} alt="google"></img>
      </div>
      <div>
        <img src= {shopify} alt="google"></img>
      </div>
      

    </div>
  )
}

export default brand