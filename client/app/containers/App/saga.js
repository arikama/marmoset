import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import {
  LOAD_RANDOM_WORDS,
  loadRandomWordsError,
  loadRandomWordsSuccess,
} from './actions';

export function * getRandomWords() {
  try {
    const response = yield call(request, 'http://marmoset.arikama.co/api/words');
    const words = response.words;
    yield put(loadRandomWordsSuccess(words));
  } catch (err) {
    yield put(loadRandomWordsError());
    console.error(err)
  }
}

export default function * appSaga() {
  yield takeLatest(LOAD_RANDOM_WORDS, getRandomWords);
}
