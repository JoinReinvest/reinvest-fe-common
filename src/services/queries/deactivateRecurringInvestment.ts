import { MutationDeactivateRecurringInvestmentArgs, Mutation } from './../../types/graphql';
import { useMutation } from '@tanstack/react-query';
import { gql, GraphQLClient } from 'graphql-request';

import { UseApiMutationWithParams } from './interfaces';

type Hook = UseApiMutationWithParams<'deactivateRecurringInvestment', MutationDeactivateRecurringInvestmentArgs>;

const deactivateRecurringInvestmentMutation = gql`
  mutation deactivateRecurringInvestment($accountId: ID!) {
    deactivateRecurringInvestment(accountId: $accountId)
  }
`;

export const useDeactivateRecurringInvestment: Hook = getApiClient =>
  useMutation({
    mutationFn: async input => {
      const api = (await getApiClient()) as GraphQLClient;

      const { deactivateRecurringInvestment } = await api.request<Mutation>(deactivateRecurringInvestmentMutation, { ...input });

      return deactivateRecurringInvestment;
    },
  });
