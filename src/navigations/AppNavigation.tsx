import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './Stacks/AppStack';

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
