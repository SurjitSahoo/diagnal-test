export default {
  loadMovies: () => ({ type: 'MOVIES_LOAD' }),
  updateSearchQuery: (query: string) => {
    return { type: 'SEARCH_QUERY_CHANGE', payload: query };
  },
};
