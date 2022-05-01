import apis from 'apis';
import { call, put, takeEvery, select } from 'redux-saga/effects';
import { IPage } from 'types/movie';

function* moviesWorker() {
  const nextPage: number = yield select(state => state.movies.nextPage);
  try {
    yield put({ type: 'MOVIES_LOADING' });
    const page: IPage = yield call(apis.getData, nextPage);
    yield put({ type: 'MOVIES_LOADED', payload: page });
  } catch (error) {
    console.error(error);
    yield put({ type: 'MOVIES_FAILURE' });
  }
}

export default function* moviesWatcher() {
  yield takeEvery('MOVIES_LOAD', moviesWorker);
}
