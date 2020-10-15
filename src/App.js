import React from 'react'

import Track from './components/Track/Track'
import List from './components/List/List'

const topics = ['Frontent', 'React', 'Vue.js', 'Angular']

function App() {
  return (
    <div className='content-container'>
      {topics.map((topic, i) => <Track key={`track-${i}`} title={topic} />)}
      <List />
    </div>
  );
}

export default App
