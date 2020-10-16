import React from 'react'

import * as Icon from '../icons'

import './ListItem.scss'

const ListItem = ({ article, index }) => (
  <div className='list-item__wrapper'>
    <Icon.Heart />
    <Icon.Trash />
    <a
      rel='noopener noreferrer'
      target='_blank'
      href={article.url || 'https://www.google.com'}
    >
      {article.title || `Ссылка ${index + 1}`}
    </a>
  </div>
)

export default ListItem