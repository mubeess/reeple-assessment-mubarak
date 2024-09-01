import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from '../types';
import {stackScreenOptions} from '../constants';
import Onboarding from '@currency/screens/OnboardingScreen/Onboarding';
import ConverterScreen from '@currency/screens/ConverterScreen/ConverterScreen';

const Stack = createStackNavigator<RootStackParamList>();

function AppStack() {
  return (
    <Stack.Navigator screenOptions={stackScreenOptions}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Converter" component={ConverterScreen} />
    </Stack.Navigator>
  );
}

export default AppStack;
