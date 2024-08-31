import Animated from 'react-native-reanimated';

import {StatusBar} from 'react-native';

import {colors} from '@currency/utils';
import {SplashScreenType} from './type';

import {IconImage} from '@currency/components/Images';
import useAnimatedStyles from './hooks/useAnimatedStyles';

const AnimatedSplashScreen = ({onAnimationEnd}: SplashScreenType) => {
  const {animatedContainerStyle, animatedImageStyle, container, logo} =
    useAnimatedStyles({onAnimationEnd});

  return (
    <Animated.View
      testID="splash-screen"
      {...container}
      style={[container.style, animatedContainerStyle]}>
      <StatusBar animated backgroundColor={colors.white} />
      <Animated.Image
        {...logo}
        style={[animatedImageStyle, {height: 100, width: 100}]}
        source={IconImage}
      />
    </Animated.View>
  );
};

export default AnimatedSplashScreen;
