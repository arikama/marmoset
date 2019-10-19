import { call, put, takeLatest } from 'redux-saga/effects'
import { REQUEST_WORDS } from './actions'
import { setWords } from './actions/words'

function * fetchWords() {
  const result = yield call(
    (url) => fetch(url)
      .then((response) => response.json())
    ,
    'http://marmoset.arikama.co/api/words'
  )
  const words = result.words
  if (words.length < 1) {
    return
  }
  yield put(setWords(words))
}

export default function * rootSaga() {
  yield takeLatest(REQUEST_WORDS, fetchWords)
}
