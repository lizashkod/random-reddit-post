import { put, takeEvery, call, select, take } from 'redux-saga/effects'

import { setPostLoading, getPostSucceed, getPostFailed } from '../actions/actionCreators'
import { GET_POST, GET_POST_SUCCEED, GET_POST_FAILED } from '../actions'
import getRandomPost from '../utils/getRandomPost'
import * as API from '../api'

function* getPost({ topic }) {
  try {
    const loading = yield select(state => state.loading)
    if (loading) {
      yield take([GET_POST_SUCCEED, GET_POST_FAILED])
    }
    yield put(setPostLoading())

    const parsedResponse = yield call(API.getTopic, topic)
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
