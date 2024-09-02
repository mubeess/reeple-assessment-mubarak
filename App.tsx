import AppNavigation from '@currency/navigations/AppNavigation';
import store, {persistor} from '@currency/redux';
import AnimatedSplashScreen from '@currency/screens/SplashScreen/AnimatedSplashScreen';
import React, {useState} from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';

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
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <GestureHandlerRootView style={{flex: 1}}>
              <AppNavigation />
            </GestureHandlerRootView>
          </PersistGate>
        </Provider>
      )}
    </>
  );
}
