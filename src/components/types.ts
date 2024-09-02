import {TextStyle} from 'react-native';

export type TitleType = {
  text: string;
  color?: string;
};
export type TextProps = {
  style?: TextStyle | TextStyle[];
  children?: string;
  numberOfLines?: number;
  color?: string;
};

export type SkeletonLoaderProps = {
  width: number | string;
  height: number;
  borderRadius: number;
};
