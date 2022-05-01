import { all } from 'redux-saga/effects';
import moviesWatcher from './movies';
import searchQueryWatcher from './searchQuery';

export default function* rootSaga() {
  yield all([moviesWatcher(), searchQueryWatcher()]);
}
