export type ConverterAmountType = {
  amount: number;
  currency: string;
  changeCurrency: (val: string) => void;
  changeAmount: (val: number) => void;
};
