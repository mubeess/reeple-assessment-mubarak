import {
  View,
  Text,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {ConverterStyles} from './styles';
import {
  BackGroundGradient,
  ConvereterIcon,
  ErrorSvg,
  RefreshIcon,
} from '@currency/components/Images/Svgs';
import Title from '@currency/components/Title/Title';
import {colors} from '@currency/utils';
import CountryAmount from './components/CountryAmount';
import useConverter from './hooks/useConverter';

import SkeletonLoader from '@currency/components/SkeletonLoader/SkeletonLoader';
import {disclaimers} from '@currency/utils/constants';

export default function ConverterScreen() {
  const {
    amountCurrency,
    convertedAmountCurrency,
    initialAmount,
    initialConvertedAmount,
    handleAmountCurrency,
    handleConvertedAmountCurrency,
    handleInitialConvertedAmount,
    handleCurrentAmount,
    currentAmount,
    convertedCountryCode,
    countryCode,
    handleConvertedCountryCode,
    handleCountryCode,
    isLoading,
    error,
    isFetching,
    refetch,
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

      {(isLoading || isFetching) && (
        <SkeletonLoader
          borderRadius={20}
          width={Dimensions.get('window').width - 40}
          height={200}
        />
      )}
      {!isLoading && !isFetching && !error && (
        <View style={ConverterStyles.converterContainer}>
          <Text>Amount</Text>
          <CountryAmount
            changeCode={handleCountryCode}
            code={countryCode}
            initialAmont={initialAmount}
            changeCounterAmount={handleInitialConvertedAmount}
            changeAmount={handleCurrentAmount}
            changeCurrency={handleAmountCurrency}
            amount={currentAmount}
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
            changeCode={handleConvertedCountryCode}
            code={convertedCountryCode}
            initialAmont={initialAmount}
            isConverted={true}
            changeCounterAmount={handleCurrentAmount}
            changeAmount={handleInitialConvertedAmount}
            changeCurrency={handleConvertedAmountCurrency}
            amount={initialConvertedAmount}
            currency={convertedAmountCurrency}
          />
        </View>
      )}
      {error && (
        <View style={ConverterStyles.error}>
          <ErrorSvg />
          <Title text="OOPS!" />
          <Text>
            An unexpected error has occured, kindly hit the refresh icon to
            retry!
          </Text>
          <TouchableOpacity onPress={() => refetch()}>
            <RefreshIcon />
          </TouchableOpacity>
        </View>
      )}
      <Title text="Disclaimer!" />
      {disclaimers.map((disclaimer, ind) => (
        <View style={ConverterStyles.disclaimerContainer} key={disclaimer}>
          <Text style={ConverterStyles.disclaimerText}>{disclaimer}</Text>
        </View>
      ))}
    </View>
  );
}
