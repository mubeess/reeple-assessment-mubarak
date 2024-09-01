import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';

import {CountryAmountStyles} from '../styles';
import {CountryCodes} from '@currency/utils/constants';

import {ArrowDownIcon} from '@currency/components/Images/Svgs';
import {ConverterAmountType} from '../types';

export default function CountryAmount({
  amount,
  currency,
  changeAmount,
  changeCurrency,
}: ConverterAmountType) {
  const [value, setValue] = useState(`${amount}`);

  const handleChange = (val: string) => {
    setValue(val);
    changeAmount(Number(val.replaceAll(/[ ,\-]/g, '')));
  };
  return (
    <View style={CountryAmountStyles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={CountryAmountStyles.selectContainer}>
        <CountryPicker
          withCurrencyButton
          onSelect={data => {
            changeCurrency(data.cca2);
          }}
          countryCodes={CountryCodes}
          countryCode={currency}
          withCurrency
        />

        <ArrowDownIcon />
      </TouchableOpacity>

      <View style={CountryAmountStyles.inputContainer}>
        <TextInput
          onChangeText={handleChange}
          value={value}
          keyboardType="numeric"
          style={CountryAmountStyles.input}
        />
      </View>
    </View>
  );
}
