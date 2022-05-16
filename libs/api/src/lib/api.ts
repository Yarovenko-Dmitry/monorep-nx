import {GetFilmsType, GetPathType, FilmType, ResultFilmType} from "@monorepo-nx/types";
import {GENRES} from "@monorepo-nx/data-constants";
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { NX_API_KEY_MOB } from '../../../../apps/react-native-mob/envConfig';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {configWebData} from '../../../../apps/react-web/envConfig';

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

console.log(' NX_API_KEY_WEB :', configWebData.NX_API_KEY_WEB)
console.log(' NX_API_KEY_MOB :', NX_API_KEY_MOB)

const API_KEY = configWebData.NX_API_KEY_WEB || NX_API_KEY_MOB

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
