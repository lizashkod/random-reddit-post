import React from 'react'
import { ActionCreators } from 'redux-undo'
import { useDispatch, useSelector } from 'react-redux'
import AutoSizer from 'react-virtualized-auto-sizer'
import { FixedSizeList } from 'react-window'

import { removePost, togglePostFavorites } from '../../actions/actionCreators'
import ListItem from './ListItem'
import Spinner from '../Spinner/Spinner'
import './List.scss'

const List = ({ source, loading }) => {
  const dispatch = useDispatch()

  const { past, future } = useSelector(state => state)

  const handlePostDelete = id => dispatch(removePost(id))

  const handleAddPostToFavourites = id => dispatch(togglePostFavorites(id))

  const handleUndoClick = () => dispatch(ActionCreators.undo())

  const handleRedoClick = () => dispatch(ActionCreators.redo())

  const Row = ({ index, style }) => (
    <ListItem
      style={style}
      article={source[index]}
      index={index}
      onDelete={handlePostDelete}
      onAddToFavourites={handleAddPostToFavourites}
    />
  )

  return (
    <div className='list__wrapper'>
      <div className='buttons__wrapper'>
        <button
          className={past.length ? '' : 'disable'}
          onClick={handleUndoClick}
        >
          Undo
        </button>
        <button
          className={future.length ? '' : 'disable'}
          onClick={handleRedoClick}
        >
          Redo
        </button>
      </div>
      <div>
        <AutoSizer>
          {({height, width}) => (
            <FixedSizeList
              height={height}
              width={width}
              className='list'
              itemSize={40}
              itemCount={source?.length}
            >
              {Row}
            </FixedSizeList>
          )}
        </AutoSizer>
      </div>
      <Spinner start={loading} />
    </div>
  )
}

export default List
