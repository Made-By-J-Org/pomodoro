import React from 'react'

import './Controls.scss'

const Controls = () => {
  return (
    <div className='wrapper'>
      <button>&#x2b;</button>
      <button disabled>&#x2699;</button>
      <button disabled>&#x21d3;</button>
    </div>
  )
}

export default Controls;