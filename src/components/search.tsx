import { ChangeEvent, forwardRef, useEffect, useMemo, useState } from 'react';
import actions from 'globalState/actions';
import { useDispatch } from 'react-redux';
import lodash from 'lodash';

export default forwardRef<HTMLInputElement>(function Search(_, ref) {
  const [query, setQuery] = useState('');

  const dispatch = useDispatch();

  const onQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const debouncedSearch = useMemo(() => {
    return lodash.debounce(() => dispatch(actions.updateSearchQuery(query.trim())), 500);
  }, [dispatch, query]);

  useEffect(() => {
    debouncedSearch();
  }, [debouncedSearch]);

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
