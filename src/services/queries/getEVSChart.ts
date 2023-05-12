import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { gql } from "graphql-request";
import { Query, EvsChartResolution } from "../../types/graphql";
import { UseApiQueryWithParams } from './interfaces';
import { EVSChartFragment } from './fragments/evs-chart';

type Parameters = { accountId: string, resolution: EvsChartResolution, config: UseQueryOptions }
type Hook = UseApiQueryWithParams<'getEVSChart', Parameters>;

export const getEVSChartQuery = gql`
  ${EVSChartFragment}

  query getEVSChart($accountId: String, $resolution: EVSChartResolution) {
    getEVSChart(accountId: $accountId, resolution: $resolution) {
      ...EVSChartFragment
    }
  }
`;

export const useGetEVSChart: Hook = (getApiClient, { accountId, resolution, ...config }) => useQuery<Query["getEVSChart"]>({
  queryKey: ["getEVSChart", accountId, resolution],
  queryFn: async () => {
    const api = await getApiClient();

    if (!api) {
      return null;
    }

    const { getEVSChart } = await api.request<Query>(getEVSChartQuery, { accountId, resolution });

    return getEVSChart;
  },
  ...config
});
