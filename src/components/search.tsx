import { ChangeEvent, forwardRef, useEffect, useState } from 'react';
import actions from 'globalState/actions';
import { useDispatch } from 'react-redux';

export default forwardRef<HTMLInputElement>(function Search(_, ref) {
  const [query, setQuery] = useState('');

  const dispatch = useDispatch();

  const onQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    dispatch(actions.updateSearchQuery(query.trim()));
  }, [dispatch, query]);

  return (
    <input
      type='text'
      ref={ref}
      className='h-8 rounded-md min-w-[70vw] text-black'
      placeholder='Search'
      value={query}
      onChange={onQueryChange}
    />
  );
});
