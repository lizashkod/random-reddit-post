import React from 'react'

import './Track.scss'

const Track = ({ title, onClick}) => (
  <div className='track'>
    <button className='thumb' onClick={onClick}>{title}</button>
  </div>
)

export default Track
