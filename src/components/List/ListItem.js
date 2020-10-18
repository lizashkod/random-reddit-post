import React from 'react'

import './ListItem.scss'
import * as Icon from '../icons'

const ListItem = ({ style, article, onAddToFavourites, onDelete, index }) => (
  <div className='list-item__wrapper' style={style}>
    <Icon.Heart isFilled={article.isFavorite} onClick={() => onAddToFavourites(index)} />
    <Icon.Trash onClick={() => onDelete(index)} />
    <a rel='noopener noreferrer' target='_blank' href={article.url}>
      {article.title}
    </a>
  </div>
)

export default ListItem
