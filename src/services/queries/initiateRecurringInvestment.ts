import { useMutation } from '@tanstack/react-query';
import { gql, GraphQLClient } from 'graphql-request';

import { Mutation } from '../../types/graphql';
import { UseApiMutationWithParams } from './interfaces';

type Parameters = { accountId: string };
type Hook = UseApiMutationWithParams<'initiateRecurringInvestment', Parameters>;

const initiateRecurringInvestmentMutation = gql`
  mutation initiateRecurringInvestment($accountId: ID!) {
    initiateRecurringInvestment(accountId: $accountId)
  }
`;

export const useInitiateRecurringInvestment: Hook = (getApiClient) =>
  useMutation({
    mutationFn: async (input) => {
      const api = await getApiClient() as GraphQLClient;

      const { initiateRecurringInvestment } = await api.request<Mutation>(initiateRecurringInvestmentMutation, { ...input });

      return initiateRecurringInvestment;
    },
  });
