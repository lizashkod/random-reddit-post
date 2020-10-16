import React from 'react'

import Track from './components/Track/Track'
import List from './components/List/List'

const topics = ['Frontend', 'React', 'Vue.js', 'Angular']

function App() {
  return (
    <div className='content-container'>
      {topics.map((topic, index) =>
        <Track key={`track-${index}`} title={topic} index={index} />)}
      <List />
    </div>
  );
}

export default App
