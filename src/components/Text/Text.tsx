import {Text as AppText} from 'react-native';
import {TextProps} from '../types';
import {TextStyles} from '../styles';

export default function Text({
  children,
  style,
  numberOfLines = 0,
  color = '#000',
  ...props
}: TextProps) {
  return (
    <AppText
      numberOfLines={numberOfLines}
      ellipsizeMode="tail"
      {...props}
      style={[TextStyles.text, style, {color}]}>
      {children}
    </AppText>
  );
}
