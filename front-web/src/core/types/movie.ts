export type MovieResponse = {
  content: Movie[];
  totalPages: number;
}

export type Movie = {
  id: string;
  title: string;
  subTitle: string;
  year: number;
  imgUrl: string;
  synopsis: string | null;
  genreId: number;
  reviews: Review[];
}

export type Review = {
  id: string;
  text: string;
  movie_id: number;
  user: User;
}

type User = {
  id: number;
  name: string;
  email: string;
}