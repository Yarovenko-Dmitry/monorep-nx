import {GetFilmsType, GetPathType, FilmType, ResultFilmType} from "@monorepo-nx/types";
import {GENRES} from "@monorepo-nx/data-constants";

export const getLatestNews = async (searchQuery: string) => {
  const res = await fetch(`https://hn.algolia.com/api/v1/search?query=${searchQuery}&hitsPerPage=10&page=0`)
  return await res.json()
}

export const getPopularNews = async () => {
  const res = await fetch('https://hn.algolia.com/api/v1/search?query=&hitsPerPage=10&page=0')
  return await res.json()
}

const getImagePath: GetPathType = path =>
  `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;
const getBackdropPath: GetPathType = path =>
  `https://image.tmdb.org/t/p/w370_and_h556_multi_faces${path}`;
const API_KEY = 'stub'
const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`;

export const getFilms: GetFilmsType = async () => {
  const { results } = await fetch(API_URL).then(result => result.json());
  const films: FilmType[] = results.map(
    ({
       backdrop_path,
       genre_ids,
       id,
       original_title,
       overview,
       poster_path,
       release_date,
       vote_average,
     }: ResultFilmType) => ({
      backdrop: getBackdropPath(backdrop_path),
      description: overview,
      genres: genre_ids.map((genre: number) => GENRES[genre]),
      key: String(id),
      poster: getImagePath(poster_path),
      rating: vote_average,
      releaseDate: release_date,
      title: original_title,
    }),
  );

  return films;
};
