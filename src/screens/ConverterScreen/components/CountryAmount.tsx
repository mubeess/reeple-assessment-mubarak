import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';

import {CountryAmountStyles} from '../styles';
import {CountryCodes} from '@currency/utils/constants';

import {ArrowDownIcon} from '@currency/components/Images/Svgs';
import {ConverterAmountType} from '../types';

export default function CountryAmount({
  amount,
  changeAmount,
  changeCurrency,
  changeCounterAmount,
  isConverted,
  initialAmont,
  code,
  changeCode,
}: ConverterAmountType) {
  const handleChange = (val: string) => {
    const sanitizedVal = val.replaceAll(/[ ,\-]/g, '');
    const numericVal = Number(sanitizedVal);

    // If the sanitized value is not a number, skip further processing
    if (isNaN(numericVal)) {
      return;
    }

    changeAmount(sanitizedVal);

    if (isConverted) {
      const initialAmountNumber = Number(initialAmont);

      // Ensure initialAmont is a valid number
      if (isNaN(initialAmountNumber)) {
        return;
      }

      const newAmount = numericVal / initialAmountNumber;
      changeCounterAmount(`${newAmount.toFixed(2)}`);
    } else if (initialAmont) {
      const initialAmountNumber = Number(initialAmont);

      // Ensure initialAmont is a valid number
      if (isNaN(initialAmountNumber)) {
        return;
      }

      const convertedAmount = numericVal * initialAmountNumber;

      changeCounterAmount(`${convertedAmount.toFixed(2)}`);
    }
  };
  return (
    <View style={CountryAmountStyles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={CountryAmountStyles.selectContainer}>
        <CountryPicker
          withCurrencyButton
          onSelect={data => {
            changeCode(data.cca2);
            changeCurrency(data.currency[0]);
          }}
          countryCodes={CountryCodes}
          countryCode={code}
          withCurrency
        />

        <ArrowDownIcon />
      </TouchableOpacity>

      <View style={CountryAmountStyles.inputContainer}>
        <TextInput
          onChangeText={handleChange}
          value={amount}
          keyboardType="numeric"
          style={CountryAmountStyles.input}
        />
      </View>
    </View>
  );
}
