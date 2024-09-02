export const CountryCodes = [
  'AF',
  'AL',
  'DZ',
  'AS',
  'AD',
  'AO',
  'AI',
  'AQ',
  'AG',
  'AR',
  'AM',
  'AW',
  'AU',
  'AT',
  'AZ',
  'BS',
  'BH',
  'BD',
  'BB',
  'BY',
  'US',
  'EU',
  'GB',
  'CA',
  'NG',
  'JP',
  'CN',
  'IN',
  'ZA',
] as const;

export type CountryCode = (typeof CountryCodes)[number];

export const disclaimers = [
  'Exchange rates are for informational purposes only and are subject to change. Please verify with your financial institution before making any transactions.',
];
