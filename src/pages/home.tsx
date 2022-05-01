import Loading from 'components/loading';
import Movie from 'components/movie';
import { useStateSelector } from 'globalState';
import actions from 'globalState/actions';
import { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch } from 'react-redux';
import Error from './error/Error';

export default function Home() {
  const { data, isLoading, isError, nextPage } = useStateSelector(state => state.movies);
  const { query } = useStateSelector(state => state.search);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.loadMovies());
  }, [dispatch]);

  if (isLoading) return <Loading className='min-h-[80vh]' />;

  if (isError) return <Error />;

  return data ? (
    <InfiniteScroll
      dataLength={data.content.length}
      next={() => dispatch(actions.loadMovies())}
      hasMore={nextPage < 4}
      loader={<h4 className='text-center'>Loading...</h4>}
      endMessage={<h4 className='text-center'>End of content</h4>}>
      <div className='p-2 grid grid-cols-3 gap-2'>
        {data.content
          .filter(mov => mov.name.toLowerCase().includes(query))
          .map((movie, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Movie movie={movie} key={movie.name + index} />
          ))}
      </div>
    </InfiniteScroll>
  ) : null;
}
