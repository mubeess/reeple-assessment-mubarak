import {useCallback, useState} from 'react';

const useConverter = () => {
  const [initialAmount, setInitialAmount] = useState(1);
  const [initialConvertedAmount, setInitialConvertedAmount] = useState(1000);
  const [amountCurrency, setAmountCurrency] = useState('US');
  const [convertedAmountCurrency, setConvertedAmountCurrency] = useState('NG');

  const handleInitialAmount = useCallback(
    (val: number) => setInitialAmount(val),
    [],
  );
  const handleInitialConvertedAmount = useCallback(
    (val: number) => setInitialConvertedAmount(val),
    [],
  );

  const handleAmountCurrency = useCallback(
    (val: string) => setAmountCurrency(val),
    [],
  );
  const handleConvertedAmountCurrency = useCallback(
    (val: string) => setConvertedAmountCurrency(val),
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
  };
};

export default useConverter;
