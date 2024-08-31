import {Text} from 'react-native';
import React from 'react';
import {TitleType} from '../types';
import {TitleStyles} from '../styles';

export default function Title({text, color = '#000'}: TitleType) {
  return <Text style={[TitleStyles.text, {color}]}>{text}</Text>;
}
