import React from 'react'

import * as Icon from '../icons'

import './ListItem.scss'

const ListItem = ({ style, article, index, onAddToFavourites, onDelete }) => (
  <div className='list-item__wrapper' style={style}>
    <Icon.Heart isFilled={article.isFavorite} onClick={() => onAddToFavourites(article.id)} />
    <Icon.Trash onClick={() => onDelete(article.id)} />
    <a
      rel='noopener noreferrer'
      target='_blank'
      href={article.url}
    >
      {article.title}
    </a>
  </div>
)

export default ListItem
