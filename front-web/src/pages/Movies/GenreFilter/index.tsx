import { Genre } from 'core/types/genre';
import { makeRequest } from 'core/utils/request';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import './styles.scss';

type Props = {
  handleChangeGenre: (genre: Genre) => void;
}

const GenreFilter = ({ handleChangeGenre }: Props) => {
  const [genders, setGenders] = useState<Genre[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    makeRequest({ url: '/genres' })
    .then(response => setGenders(response.data))
    .finally(() => setIsLoading(false));
  }, [])

  return (
    <div className="card-base movies-genre-filter-container">
      <Select
        isLoading={isLoading}
        options={genders}
        getOptionValue={(options: Genre) => String(options.id)}
        getOptionLabel={(options: Genre) => options.name}
        className="genre-filter-select"
        classNamePrefix="filter-select"
        placeholder="Filtrar por Gênero"
      />
    </div>
  )
}

export default GenreFilter;