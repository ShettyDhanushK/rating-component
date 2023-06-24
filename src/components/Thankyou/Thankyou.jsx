import React from 'react';
import './styles.css';
import thankyou from '../../assets/illustration-thank-you.svg';

const Thankyou = ({value}) => {
  return (
    <div className='app'>
      <div className='app__card'>
      <img src={thankyou} alt="thankyou" />
      <div className='app__border'>
        <p>You selected {value} out of 5</p>
      </div>
      <h1 className='app__card-h1'>Thank you!</h1>
      <p className='app__card-p'>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
      </div>
    </div>
  )
}

export default Thankyou