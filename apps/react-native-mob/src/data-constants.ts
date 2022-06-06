import { Dimensions, Platform } from 'react-native';

import { FilmsScreen } from './screens/FilmsScreen';
import { HomeScreen } from './screens/HomeScreen';
import { PopularNewsScreen } from './screens/PopularNewsScreen';
import { RelatedNewsScreen } from './screens/RelatedNewsScreen';

import { ImgSourcesType, ScreenTabType } from './types';

export const { height, width } = Dimensions.get('window');

export const SPACING = 10;
export const isIos = Platform.OS === 'ios';
export const ITEM_SIZE = isIos ? width * 0.718 : width * 0.7;
export const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;
export const BACKDROP_HEIGHT = height * 0.65;

export const IMG_SOURCES: ImgSourcesType = {
  currentFilms: require('./assets/films.png'),
  home: require('./assets/home.png'),
  popularNews: require('./assets/popularNews.png'),
  relatedNews: require('./assets/relatedNews.png'),
};

export const SCREEN_TABS: ScreenTabType[] = [
  { component: HomeScreen, name: 'Home', path: IMG_SOURCES.home },
  {
    component: RelatedNewsScreen,
    name: 'RelatedNews',
    path: IMG_SOURCES.relatedNews,
  },
  {
    component: PopularNewsScreen,
    name: 'PopularNews',
    path: IMG_SOURCES.popularNews,
  },
  {
    component: FilmsScreen,
    name: 'CurrentFilms',
    path: IMG_SOURCES.currentFilms,
  },
];
