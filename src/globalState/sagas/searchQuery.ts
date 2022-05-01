import { put, takeEvery } from 'redux-saga/effects';

interface Action {
  type: string;
  payload: string;
}
function* searchQueryWorker(action: Action) {
  yield put({ type: 'UPDATE_SEARCH_QUERY', payload: action.payload });
}

export default function* searchQueryWatcher() {
  yield takeEvery('SEARCH_QUERY_CHANGE', searchQueryWorker);
}
