import { Genre } from 'core/types/genre';
import { useState } from 'react';
import GenreFilter from './GenreFilter';
import './styles.scss';

const Movies = () => {
  const [genre, setGenre] = useState<Genre>();

  const handleChangeGenre = (genre: Genre) => {
    setGenre(genre);
  }

  return (
    <div className="movies-container">
      <GenreFilter handleChangeGenre={handleChangeGenre} />
    </div>
  )
}

export default Movies;