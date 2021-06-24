export type MoviesResponse = {
  content: Movie[];
  totalPages: number;
}

export type Movie = {
  id: number;
  title: string;
  subTitle: string;
  year: number;
  imgUrl: string;
  synopsis: string | null;
  genreId: number;
  reviews: Review[];
}

export type Review = {
  id: number;
  text: string;
  movie_id: number;
  user: User;
}

type User = {
  id: number;
  name: string;
  email: string;
}