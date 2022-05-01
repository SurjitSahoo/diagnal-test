/* eslint-disable @typescript-eslint/default-param-last */
import { IMovie, IPage } from 'types/movie';

interface IData {
  title: string;
  content: IMovie[];
}
export interface IMovieState {
  isLoading: boolean;
  isError: boolean;
  data?: IData;
  filtered: IMovie[];
  nextPage: number;
}

const initialState: IMovieState = {
  isLoading: false,
  isError: false,
  nextPage: 1,
  filtered: [],
};

interface Action {
  type: string;
  payload: {
    page: IPage;
  };
}

export function moviesReducer(state = initialState, action: Action): IMovieState {
  switch (action.type) {
    case 'MOVIES_LOADING':
      if (state.data) return state;
      return {
        ...state,
        isLoading: true,
      };
    case 'MOVIES_LOADED':
      if (state.data) {
        return {
          ...state,
          isLoading: false,
          isError: false,
          nextPage: state.nextPage + 1,
          data: {
            ...state.data,
            content: [...state.data.content, ...action.payload.page['content-items'].content],
          },
        };
      }
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: {
          title: action.payload.page.title,
          content: action.payload.page['content-items'].content,
        },
      };
    case 'MOVIES_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
}
