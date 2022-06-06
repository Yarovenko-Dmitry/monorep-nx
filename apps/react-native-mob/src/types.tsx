import { FC, ReactElement } from 'react';

import { FilmType } from '@monorepo-nx/types';
import { Animated, ImageSourcePropType } from 'react-native';

export type BackdropType = {
  films: FilmType[];
  scrollX: Animated.Value;
};

export type ImgSourcesType = { [key: string]: string };

export type ScreenTabType = {
  name: string;
  component: FC;
  path: string;
};

export type CreateTabScreenType = (
  name: string,
  component: FC,
  path: ImageSourcePropType,
) => ReactElement;
