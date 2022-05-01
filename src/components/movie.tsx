import { useState } from 'react';
import { IMovie } from 'types/movie';

interface Props {
  movie: IMovie;
}
export default function Movie({ movie }: Props) {
  const [imgSrc, setImgSrc] = useState(
    `${process.env.PUBLIC_URL}/images/${movie['poster-image'] ?? 'placeholder_for_missing_posters.png'}`,
  );

  const onImgError = () => {
    setImgSrc(`${process.env.PUBLIC_URL}/images/placeholder_for_missing_posters.png`);
  };

  return (
    <div className='mb-3 group'>
      <img src={imgSrc} alt='movie poster' onError={onImgError} />
      <div className='group-hover:text-white transition-all duration-200 line-clamp-1'>{movie.name}</div>
    </div>
  );
}
