import { put, takeEvery, call } from 'redux-saga/effects'

import { setPostLoading, getPostSucceed, getPostFailed } from '../actions/actionCreators'
import { GET_POST } from '../actions/actions'
import getRandomPost from '../utils/getRandomPost'
import fetchPost from '../utils/API'

function* getPost({ topic }) {
  try {
    yield put(setPostLoading())

    const parsedResponse = yield call(fetchPost, topic)
    const posts = parsedResponse.data.children.map(child => child.data)

    const randomPost = getRandomPost(posts)
    yield put(getPostSucceed(randomPost))
  } catch (e) {
    put(getPostFailed())
  }
}

export default function* saga() {
  yield takeEvery(GET_POST, getPost)
}
