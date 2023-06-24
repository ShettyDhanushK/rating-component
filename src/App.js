import React, { useState } from 'react';
import { Rating, Thankyou } from './components';

const App = () => {
    const [rating, setRating] = useState(true);
    const [value, setValue] = useState();
  return (
    <>
    {rating ? <Rating setRating={setRating} setValue={setValue} /> : <Thankyou value={value} />}
    </>
  )
}

export default App