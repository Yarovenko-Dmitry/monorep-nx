import {Animated} from 'react-native';

export type NewsStateType = {
  latestNews: SingleNewsType[],
  popularNews: SingleNewsType[],
}

export type FilmsStateType = {
  films: FilmType[]
}

export type SingleNewsType = {
  created_at: string
  title: string
  url: string
  author?: string
  points?: number
  story_text?: string | null
  comment_text?: string | null
  num_comments?: number
  story_id?: string | number | null
  story_title?: string | null
  story_url?: string | null
  parent_id?: string | number | null
  created_at_i?: number
  relevancy_score?: number
  _tags?: string[]
  objectID?: string
  _highlightResult?: {
    title?: {
      value?: string,
      matchLevel?: string | null
      matchedWords?: any[]
    },
    url?: {
      value?: string
      matchLevel?: string | null
      matchedWords?: any[]
    },
    author?: {
      value?: string
      matchLevel?: string | null
      matchedWords?: any[]
    }
  }
}

export type ErrorsStateType = {
  latestNewsError: string
  popularNewsError: string
  filmsError: string
}

export type GenresListType = {
  [key: number]: string;
};

export type FilmType = {
  backdrop?: string;
  description?: string;
  genres?: string[];
  key: string;
  poster?: string;
  rating?: number;
  releaseDate?: string;
  title?: string;
};

export type GenresType = {
  genres: string[] | undefined;
};

export type RatingType = {
  rating: number | undefined;
};

export type BackdropType = {
  films: FilmType[];
  scrollX: Animated.Value;
};

export type ResultFilmType = {
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
};

export type GetPathType = (path: string) => string;

export type GetFilmsType = () => Promise<FilmType[]>;

export type ActionCreatorType = () => { type: string}
