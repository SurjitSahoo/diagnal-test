import { combineReducers } from 'redux';
import { IMovieState, moviesReducer } from './movies';
import { ISearchQueryState, searchQueryReducer } from './searchQuery';

export interface IGlobalState {
  movies: IMovieState;
  search: ISearchQueryState;
}

export default combineReducers({
  movies: moviesReducer,
  search: searchQueryReducer,
});
