import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Track from './components/Track/Track'
import List from './components/List/List'
import { getPost } from './actions/actionCreators'

const topics = ['Frontend', 'React', 'VueJS', 'Angular']

function App() {
  const dispatch = useDispatch()
  const { list, loading } = useSelector(state => state)

  const handleTopicClick = topic => dispatch(getPost(topic))

  return (
    <div className='content-container'>
      {topics.map((topic, index) =>
        <Track
          key={`track-${index}`}
          title={topic}
          index={index}
          onTopicClick={() => handleTopicClick(topic)}
        />
      )}
      <List source={list} loading={loading} />
    </div>
  )
}

export default App
