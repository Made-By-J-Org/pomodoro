import React from 'react';

import './AddCounter.scss';

const AddCounter = () => {

  const addNewCounter = () => {
    console.log('add new counter');
  }
  return (
    <div className='addCounter' onClick={addNewCounter}>
      <span className='icon'>
      +
      </span>

    </div>
  )
}

export default AddCounter
