import {api} from '.';
const {API_KEY} = process.env;
const injectedUserApi = api.injectEndpoints({
  endpoints: builder => ({
    getLatestRate: builder.query({
      query: (currency: string) => ({
        url: `/${API_KEY}/latest/${currency}`,
      }),
    }),
  }),
});

export const {useGetLatestRateQuery} = injectedUserApi;
