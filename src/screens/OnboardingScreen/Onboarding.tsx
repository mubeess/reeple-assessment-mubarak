import {
  Image,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import {OnboardingStyles} from './styles';
import Title from '@currency/components/Title/Title';
import Text from '@currency/components/Text/Text';
import {IconImage, OnboardingImage} from '@currency/components/Images';
import {ChevRonRight} from '@currency/components/Images/Svgs';

export default function Onboarding() {
  return (
    <ImageBackground
      resizeMode="cover"
      source={OnboardingImage}
      style={OnboardingStyles.constainer}>
      <StatusBar translucent backgroundColor="transparent" />
      <Image source={IconImage} style={OnboardingStyles.logo} />
      <View style={OnboardingStyles.contentView}>
        <Title color="#494747" text="Effortless Currency Conversion" />
        <Text style={OnboardingStyles.content} color="#787575">
          Welcome to Reeple Converter! Instantly convert currencies with
          real-time exchange rates.Get started now and simplify your global
          transactions!
        </Text>
        <TouchableOpacity style={OnboardingStyles.button}>
          <ChevRonRight />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
