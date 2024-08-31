import {useSharedValue, withTiming} from 'react-native-reanimated';
import {SplashAnimationHookProps, SplashAnimationHookReturn} from '../type';

const useSplashAnimation = ({
  onEnd,
}: SplashAnimationHookProps): SplashAnimationHookReturn => {
  const sharedValue = useSharedValue(0.3);

  const startAnimation = () => {
    sharedValue.value = withTiming(5, {duration: 2000});
    setTimeout(() => {
      onEnd();
    }, 2000);
  };

  return {
    sharedValue,
    startAnimation,
  };
};

export default useSplashAnimation;
