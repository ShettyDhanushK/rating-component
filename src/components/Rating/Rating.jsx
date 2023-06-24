import React from 'react';
import './styles.css';
import star from '../../assets/icon-star.svg';

const Rating = ({setRating, setValue}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    var checkedValue = document.querySelector('.app__card-rating-rate:checked')?.value;
    if(checkedValue !== undefined){
      setValue(checkedValue);
      setRating(false);

    } else {
      document.getElementById('error_handler').style.display = "block";
    }

  }
  const handleClick = (event) => {
    event.target.style.backgroundColor = "hsl(216, 12%, 54%)";
  }
  return (
    <div className='app'>
      <div className='app__card'>
        <div className='app__card-circle-star'>
          <img src={star} alt="star" />
        </div>
        <h2>How did we do?</h2>
        <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <form onSubmit={handleSubmit}>
        <div className='app__card-rating'>
            <input type="radio" id="1" value="1" className='app__card-rating-rate' name='rate' />
            <label for="1" id="id_1" onClick={handleClick} >1</label>
            <input type="radio" id="2" value="2" className='app__card-rating-rate' name='rate' />
            <label for="2" id="id_2" onClick={handleClick}>2</label>
            <input type="radio" id="3" value="3" className='app__card-rating-rate' name='rate' />
            <label for="3" id="id_3" onClick={handleClick}>3</label>
          <input type="radio" id="4" value="4" className='app__card-rating-rate' name='rate' />
            <label for="4" id="id_4" onClick={handleClick}>4</label>
            <input type="radio" id="5" value="5" className='app__card-rating-rate' name='rate' />
            <label for="5" id="id_5" onClick={handleClick}>5</label>
        </div>
            <h4 id="error_handler" className='app__card-error-handler'>Please select a rating!</h4>
            <input className='app__card-submit' type="submit" id="submit"/>
            </form>
      </div>
    </div>
  )
}

export default Rating