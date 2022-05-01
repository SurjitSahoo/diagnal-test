/* eslint-disable @typescript-eslint/default-param-last */
export interface ISearchQueryState {
  query: string;
}

const initialState: ISearchQueryState = {
  query: '',
};

interface Action {
  type: string;
  payload: string;
}

export function searchQueryReducer(state = initialState, action: Action): ISearchQueryState {
  switch (action.type) {
    case 'UPDATE_SEARCH_QUERY':
      // console.log('llll', action.payload);
      return {
        ...state,
        query: action.payload,
      };
    default:
      return state;
  }
}
