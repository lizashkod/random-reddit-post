import {
  SET_POST_LOADING,
  GET_POST,
  GET_POST_SUCCEED,
  GET_POST_FAILED,
  REMOVE_POST,
  TOGGLE_POST_FAVORITE,
} from './actions'

export const setPostLoading = () => ({ type: SET_POST_LOADING })

export const getPost = topic => ({ type: GET_POST, topic })

export const getPostSucceed = randomPost => ({ type: GET_POST_SUCCEED, payload: randomPost })

export const getPostFailed = () => ({ type: GET_POST_FAILED })

export const removePost = id => ({ type: REMOVE_POST, payload: id })

export const togglePostFavorites = id => ({ type: TOGGLE_POST_FAVORITE, payload: id })
