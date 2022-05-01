import { useStateSelector } from 'globalState';
import { useState } from 'react';
import { IMovie } from 'types/movie';

interface Props {
  movie: IMovie;
}
export default function Movie({ movie }: Props) {
  const [imgSrc, setImgSrc] = useState(
    `${process.env.PUBLIC_URL}/images/${movie['poster-image'] ?? 'placeholder_for_missing_posters.png'}`,
  );

  const { query } = useStateSelector(state => state.search);
  const re = new RegExp(`(${query})`, 'gi');

  const onImgError = () => {
    setImgSrc(`${process.env.PUBLIC_URL}/images/placeholder_for_missing_posters.png`);
  };

  return (
    <div className='mb-3 group'>
      <img src={imgSrc} alt='movie poster' onError={onImgError} />
      <div className='group-hover:text-white transition-all duration-200 line-clamp-1'>
        {query !== ''
          ? movie.name.split(re).map((part, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <span key={part + i} className={part.toLowerCase() === query.toLowerCase() ? 'text-orange-300' : ''}>
                {part}
              </span>
            ))
          : movie.name}
      </div>
    </div>
  );
}
