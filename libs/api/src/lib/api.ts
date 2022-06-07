import {FilmType, GetFilmsType, GetPathType} from "@monorepo-nx/types";
import {GENRES, RawResultType} from "@monorepo-nx/data-constants";

/*
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { NX_API_KEY_MOB } from '../../../../apps/react-native-mob/envConfig';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {configWebData} from '../../../../apps/react-web/envConfig';

// const NX_API_KEY_ROOT = process.env['NX_API_KEY_ROOT']

console.log(' ************   NX_API_KEY_MOB :', NX_API_KEY_MOB)
console.log('!!!!!!!!!!!!!   configWebData :', configWebData)
// console.log(' NX_API_KEY_ROOT :', NX_API_KEY_ROOT)
*/

export const getRelatedNews = async (searchQuery: string) => {
  const res = await fetch(`https://hn.algolia.com/api/v1/search?query=${searchQuery}&hitsPerPage=10&page=0`)
  return await res.json()
}

export const getPopularNews = async () => {
  const res = await fetch('https://hn.algolia.com/api/v1/search?hitsPerPage=10&page=0')
  return await res.json()
}

const getImagePath: GetPathType = path =>
  `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;
const getBackdropPath: GetPathType = path =>
  `https://image.tmdb.org/t/p/w370_and_h556_multi_faces${path}`;

const SERV_API_URL = `http://localhost:3002/films`;

export const getFilms: GetFilmsType = async () => {
  const {results} = await fetch(SERV_API_URL).then(result => result.json());

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
     }: RawResultType) => ({
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
