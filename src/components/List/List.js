import React from 'react'

import ListItem from './ListItem'
import './List.scss'

const List = ({ source = [1, 2, 3, 4, 5, 6, 7, 8, 9] }) => (
  <div className='list'>
    {source?.map((article, index) =>
      <ListItem article={article} index={index} key={`article-${index}`} />)}
  </div>
)

export default List
