import {GenresListType} from "@monorepo-nx/types";

import { Dimensions, Platform } from 'react-native';

export const { height, width } = Dimensions.get('window');

export const GENRES: GenresListType = {
  12: 'Adventure',
  14: 'Fantasy',
  16: 'Animation',
  18: 'Drama',
  27: 'Horror',
  28: 'Action',
  35: 'Comedy',
  36: 'History',
  37: 'Western',
  53: 'Thriller',
  80: 'Crime',
  99: 'Documentary',
  878: 'Science Fiction',
  9648: 'Mystery',
  10402: 'Music',
  10749: 'Romance',
  10751: 'Family',
  10752: 'War',
  10770: 'TV Movie',
};

export const SPACING = 10;
export const isIos = Platform.OS === 'ios';
export const ITEM_SIZE = isIos ? width * 0.718 : width * 0.7;
export const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;
export const BACKDROP_HEIGHT = height * 0.65;

