import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from '../types';
import {stackScreenOptions} from '../constants';
import Onboarding from '@currency/screens/OnboardingScreen/Onboarding';
import ConverterScreen from '@currency/screens/ConverterScreen/ConverterScreen';
import {useSelector} from 'react-redux';
import {RootState} from '@currency/redux';

const Stack = createStackNavigator<RootStackParamList>();

function AppStack() {
  const onBoarded = useSelector((data: RootState) => data.user.onboarded);
  return (
    <Stack.Navigator screenOptions={stackScreenOptions}>
      {onBoarded ? (
        <Stack.Screen name="Converter" component={ConverterScreen} />
      ) : (
        <Stack.Screen name="Onboarding" component={Onboarding} />
      )}
    </Stack.Navigator>
  );
}

export default AppStack;
