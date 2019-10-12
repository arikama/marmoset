export const LOAD_RANDOM_WORDS = 'marmoset/App/LOAD_RANDOM_WORDS';
export const LOAD_RANDOM_WORDS_ERROR = 'marmoset/App/LOAD_RANDOM_WORDS_ERROR';
export const LOAD_RANDOM_WORDS_SUCCESS = 'marmoset/App/LOAD_RANDOM_WORDS_SUCCESS';

export function loadRandomWords() {
  return {
    type: LOAD_RANDOM_WORDS,
  };
}

export function loadRandomWordsError() {
  return {
    type: LOAD_RANDOM_WORDS_ERROR,
  };
}

export function loadRandomWordsSuccess(words) {
  return {
    payload: {
      words,
    },
    type: LOAD_RANDOM_WORDS_SUCCESS,
  };
}
