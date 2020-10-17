import undoable, { excludeAction } from 'redux-undo'
import {
  SET_POST_LOADING,
  GET_POST_SUCCEED,
  GET_POST_FAILED,
  REMOVE_POST,
  TOGGLE_POST_FAVORITE,
} from '../actions/actions'

const MAX_STORE_HISTORY_LENGTH = 10

const store = (state = {}, { type, payload }) => {
  switch(type) {
    case SET_POST_LOADING:
      return { ...state, loading: true }

    case GET_POST_SUCCEED: {
      const { id, title, url } = payload
      const post = { id, title, url }
      const newList = state.list?.length
        ? [...state.list, post]
        : [post]
      return { ...state, loading: false, list: newList }
    }

    case GET_POST_FAILED:
      return { ...state, loading: false }

    case REMOVE_POST: {
      console.log('REMOVE')
      const newList = state.list.filter(post => post.id !== payload)
      return { ...state, list: newList }
    }

    case TOGGLE_POST_FAVORITE: {
      const newList = [...state.list]

      const targetPostIndex = newList.findIndex(post => post.id === payload)
      const targetPost = newList[targetPostIndex]
      const newTargetPost = { ...targetPost, isFavorite: !targetPost.isFavorite }

      newList[targetPostIndex] = newTargetPost
      return { ...state, list: newList }
    }

    default: return state
  }
}

export default undoable(store, {
  filter: excludeAction(SET_POST_LOADING),
  limit: MAX_STORE_HISTORY_LENGTH,
})
