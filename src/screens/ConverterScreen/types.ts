import {ExchangeRateResponse} from '@currency/redux/api/types';

export type ConverterAmountType = {
  amount: string;
  currency: string;
  code: string;
  changeCurrency: (val: string) => void;
  changeAmount: (val: string) => void;
  changeCounterAmount: (val: string) => void;
  isConverted?: boolean;
  initialAmont: string;
  changeCode: (val: string) => void;
};
export type UseGetLatestRateQueryResult = {
  data?: ExchangeRateResponse;
  error?: any;
  isLoading: boolean;
  refetch: () => void;
  isFetching: boolean;
};
