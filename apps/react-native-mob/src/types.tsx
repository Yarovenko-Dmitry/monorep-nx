import { FilmType } from '@monorepo-nx/types';
import { Animated } from 'react-native';

export type BackdropType = {
  films: FilmType[];
  scrollX: Animated.Value;
};
