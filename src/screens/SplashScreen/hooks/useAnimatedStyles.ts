import BootSplash from 'react-native-bootsplash';
import {interpolateColor, useAnimatedStyle} from 'react-native-reanimated';
import {colors} from '@currency/utils';
import {SplashScreenType} from '../type';
import useSplashAnimation from './useSplashAnimation';

const useAnimatedStyles = ({onAnimationEnd}: SplashScreenType) => {
  const {sharedValue, startAnimation} = useSplashAnimation({
    onEnd: onAnimationEnd,
  });

  const animatedContainerStyle = useAnimatedStyle(() => {
    const interpoatedBackground = interpolateColor(
      sharedValue.value,
      [1, 5],
      [colors.white, colors.primary],
    );
    return {
      backgroundColor: interpoatedBackground,
    };
  });

  const animatedImageStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: sharedValue.value}],
    };
  });

  const {container, logo} = BootSplash.useHideAnimation({
    manifest: require('../../../../assets/bootsplash/manifest.json'),
    logo: require('../../../../assets/bootsplash/logo.png'),
    statusBarTranslucent: false,
    navigationBarTranslucent: false,
    animate: startAnimation,
  });

  return {
    animatedContainerStyle,
    animatedImageStyle,
    container,
    logo,
  };
};

export default useAnimatedStyles;
