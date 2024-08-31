import AppNavigation from '@currency/navigations/AppNavigation';
import AnimatedSplashScreen from '@currency/screens/SplashScreen/AnimatedSplashScreen';
import React, {useState} from 'react';

import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default function App() {
  const [visible, setVisible] = useState(true);
  return (
    <>
      {visible ? (
        <AnimatedSplashScreen
          onAnimationEnd={() => {
            setVisible(false);
          }}
        />
      ) : (
        <GestureHandlerRootView style={{flex: 1}}>
          <AppNavigation />
        </GestureHandlerRootView>
      )}
    </>
  );
}
