import {
  REQUEST_WORDS,
  SET_WORDS,
} from './index'

export const requestWords = () => {
  return {
    type: REQUEST_WORDS,
  }
}

export const setWords = (words) => {
  return {
    payload: [...words],
    type: SET_WORDS,
  }
}
