import backSrc from 'assets/images/Back.png';
import searchSrc from 'assets/images/search.png';
import navBarImg from 'assets/images/nav_bar.png';
import { useEffect, useRef, useState } from 'react';
import { a11yOnClick } from 'utils';
import { useStateSelector } from 'globalState';
import { useDispatch } from 'react-redux';
import actions from 'globalState/actions';
import Search from './search';

export default function Header() {
  const { data } = useStateSelector(state => state.movies);
  const [isSearching, setIsSearching] = useState(false);

  const searchBoxRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const toggleSearch = () => {
    if (isSearching) {
      setIsSearching(false);
      dispatch(actions.updateSearchQuery(''));
    } else {
      setIsSearching(true);
    }
  };

  useEffect(() => {
    if (isSearching) {
      searchBoxRef.current?.focus();
    }
  }, [isSearching]);

  return (
    <header
      style={{ backgroundImage: `url(${navBarImg})`, backgroundSize: 'cover' }}
      className='flex justify-between items-center px-4 py-4 bg-transparent fixed top-0 left-0 right-0'>
      <img src={backSrc} alt='back' className='w-5 h-5 mr-2' />
      {isSearching ? <Search ref={searchBoxRef} /> : <div className='text-2xl'>{data?.title}</div>}
      <img src={searchSrc} alt='search' className='w-5 h-5' {...a11yOnClick({ role: 'button', fn: toggleSearch })} />
    </header>
  );
}
