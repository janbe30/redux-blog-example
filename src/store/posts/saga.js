import { takeLatest, put, call } from "redux-saga/effects";
import { GET_POSTS, GET_POST_DETAILS } from "./actionTypes";

import {
  getPostsSucess,
  getPostsFail,
  getPostDetailsSuccess,
  getPostDetailsFail,
} from "./actions";

import { getPosts, getPostDetails } from "../../helpers/backend_helper";

function* onGetPosts() {
  try {
    const response = yield call(getPosts);
    yield put(getPostsSucess(response));
  } catch (error) {
    yield put(getPostsFail(error.response));
  }
}

function* onGetPostDetails({ payload: id }) {
  try {
    const response = yield call(getPostDetails, id);
    yield put(getPostDetailsSuccess(response));
  } catch (error) {
    yield put(getPostDetailsFail(error.response));
  }
}

function* PostSaga() {
  yield takeLatest(GET_POSTS, onGetPosts);
  yield takeLatest(GET_POST_DETAILS, onGetPostDetails);
}

export default PostSaga;
