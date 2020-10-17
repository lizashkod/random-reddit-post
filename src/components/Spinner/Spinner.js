import React from 'react'

import './Spinner.scss'

const Spinner = ({ start }) => (
  <div className={`spinner ${start ? '' : 'paused'}`}>
    <div className='bounce1' />
    <div className='bounce2' />
    <div className='bounce3' />
  </div>
)

export default Spinner
