import React from 'react'

import './Track.scss'

const Track = ({ title, index, onTopicClick }) => (
  <div className='track'>
    <button
      className='thumb'
      onClick={onTopicClick}
      style={{ animationDuration: `${index + 3}s` }}
    >
      {title}
    </button>
  </div>
)

export default Track
