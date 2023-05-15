import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { gql, GraphQLClient } from 'graphql-request';
import { EvsChartResolution, Query } from '../../types/graphql';
import { UseApiQueryWithParams } from './interfaces';
import { EVSChartFragment } from './fragments/EvsChart';

type Hook = UseApiQueryWithParams<'getEVSChart', { accountId: string, resolution: EvsChartResolution, config?: UseQueryOptions}>;

export const getEVSChartQuery = gql`
  ${EVSChartFragment}
  query getEVSChart($accountId: String!, $resolution: EVSChartResolution!) {
    getEVSChart(accountId: $accountId, resolution: $resolution) {
      ...EVSChartFragment
    }
  }
`;

export const useGetBeneficiaryAccount: Hook = (getApiClient, { accountId, resolution, ...config }) => useQuery<Query["getEVSChart"]>({
  queryKey: ["getEVSChart", accountId, resolution],
  queryFn: async () => {
    const api = await getApiClient() as GraphQLClient;

    const { getEVSChart } = await api.request<Query>(getEVSChartQuery, { accountId, resolution });

    return getEVSChart;
  },
  ...config
});
