import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {ConverterStyles} from './styles';
import {
  BackGroundGradient,
  ConvereterIcon,
} from '@currency/components/Images/Svgs';
import Title from '@currency/components/Title/Title';
import {colors} from '@currency/utils';
import CountryAmount from './components/CountryAmount';
import useConverter from './hooks/useConverter';

export default function ConverterScreen() {
  const {
    amountCurrency,
    convertedAmountCurrency,
    initialAmount,
    initialConvertedAmount,
    handleAmountCurrency,
    handleConvertedAmountCurrency,
    handleInitialAmount,
    handleInitialConvertedAmount,
  } = useConverter();
  return (
    <View style={ConverterStyles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={ConverterStyles.gradientBackground}>
        <BackGroundGradient />
      </View>
      <Title color={colors.primary} text="Currency Converter" />
      <Text style={ConverterStyles.text}>
        Access the most current exchange rates from major currencies.
      </Text>

      <View style={ConverterStyles.converterContainer}>
        <Text>Amount</Text>
        <CountryAmount
          changeAmount={handleInitialAmount}
          changeCurrency={handleAmountCurrency}
          amount={initialAmount}
          currency={amountCurrency}
        />

        <View style={ConverterStyles.seperatorContainer}>
          <View style={ConverterStyles.line} />
          <View style={ConverterStyles.converterIcon}>
            <ConvereterIcon />
          </View>
          <View style={ConverterStyles.line} />
        </View>
        <Text>Converted amount</Text>
        <CountryAmount
          changeAmount={handleInitialConvertedAmount}
          changeCurrency={handleConvertedAmountCurrency}
          amount={initialConvertedAmount}
          currency={convertedAmountCurrency}
        />
      </View>
    </View>
  );
}
