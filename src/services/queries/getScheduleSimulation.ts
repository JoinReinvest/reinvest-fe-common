import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { gql, GraphQLClient } from 'graphql-request';
import { Query, RecurringInvestmentScheduleInput } from '../../types/graphql';
import { UseApiQueryWithParams } from './interfaces';

type Hook = UseApiQueryWithParams<'getScheduleSimulation', { schedule: RecurringInvestmentScheduleInput, config?: UseQueryOptions}>;

export const getScheduleSimulationQuery = gql`
  query getScheduleSimulation($schedule: RecurringInvestmentScheduleInput!) {
    getScheduleSimulation(schedule: $schedule)
  }
`;

export const useGetScheduleSimulation: Hook = (getApiClient, { schedule, ...config }) => useQuery<Query["getScheduleSimulation"]>({
  queryKey: ["getScheduleSimulation", schedule],
  queryFn: async () => {
    const api = await getApiClient() as GraphQLClient;

    const { getScheduleSimulation } = await api.request<Query>(getScheduleSimulationQuery, { schedule });

    return getScheduleSimulation;
  },
  ...config
});
