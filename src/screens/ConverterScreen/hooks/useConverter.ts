import {useGetLatestRateQuery} from '@currency/redux/api/priceSlice';
import {useCallback, useEffect, useState} from 'react';
import {UseGetLatestRateQueryResult} from '../types';

const useConverter = () => {
  const [initialAmount, setInitialAmount] = useState('1');
  const [initialConvertedAmount, setInitialConvertedAmount] = useState('0');
  const [currentAmount, setCurrentAmount] = useState('1');
  const [amountCurrency, setAmountCurrency] = useState('USD');
  const [convertedAmountCurrency, setConvertedAmountCurrency] = useState('NGN');
  const [countryCode, setCountryCode] = useState('US');
  const [convertedCountryCode, setConvertedCountryCode] = useState('NG');
  const {
    data,
    error,
    isLoading,
    isFetching,
    refetch,
  }: UseGetLatestRateQueryResult = useGetLatestRateQuery(amountCurrency);
  useEffect(() => {
    if (data) {
      const convertedAmount =
        Number(currentAmount) * data.conversion_rates[convertedAmountCurrency];

      setInitialConvertedAmount(`${convertedAmount.toFixed(2)}`);
      setInitialAmount(
        `${data.conversion_rates[`${convertedAmountCurrency}`]}`,
      );
    }
  }, [data, convertedAmountCurrency, amountCurrency]);

  const handleInitialAmount = (val: string) => setInitialAmount(val);
  const handleCurrentAmount = (val: string) => setCurrentAmount(val);
  const handleInitialConvertedAmount = (val: string) =>
    setInitialConvertedAmount(val);

  const handleAmountCurrency = useCallback(
    (val: string) => setAmountCurrency(val),
    [],
  );
  const handleConvertedAmountCurrency = useCallback(
    (val: string) => setConvertedAmountCurrency(val),
    [],
  );

  const handleCountryCode = useCallback(
    (val: string) => setCountryCode(val),
    [],
  );
  const handleConvertedCountryCode = useCallback(
    (val: string) => setConvertedCountryCode(val),
    [],
  );
  return {
    initialAmount,
    initialConvertedAmount,
    amountCurrency,
    convertedAmountCurrency,
    handleInitialAmount,
    handleInitialConvertedAmount,
    handleAmountCurrency,
    handleConvertedAmountCurrency,
    currentAmount,
    handleCurrentAmount,
    countryCode,
    convertedCountryCode,
    handleCountryCode,
    handleConvertedCountryCode,
    isLoading,
    error,
    isFetching,
    refetch,
  };
};

export default useConverter;
