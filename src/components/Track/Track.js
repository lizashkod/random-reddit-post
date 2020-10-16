import React from 'react'

import './Track.scss'

const Track = ({ title, onClick, index }) => (
  <div className='track'>
    <button
      className='thumb'
      onClick={onClick}
      style={{ animationDuration: `${index + 3}s` }}
    >
      {title}
    </button>
  </div>
)

export default Track
