import { MutationUnsuspendRecurringInvestmentArgs, Mutation } from './../../types/graphql';
import { useMutation } from '@tanstack/react-query';
import { gql, GraphQLClient } from 'graphql-request';

import { UseApiMutationWithParams } from './interfaces';

type Hook = UseApiMutationWithParams<'unsuspendRecurringInvestment', MutationUnsuspendRecurringInvestmentArgs>;

const unsuspendRecurringInvestmentMutation = gql`
  mutation unsuspendRecurringInvestment($accountId: ID!) {
    unsuspendRecurringInvestment(accountId: $accountId)
  }
`;

export const useUnsuspendRecurringInvestment: Hook = getApiClient =>
  useMutation({
    mutationFn: async input => {
      const api = (await getApiClient()) as GraphQLClient;

      const { unsuspendRecurringInvestment } = await api.request<Mutation>(unsuspendRecurringInvestmentMutation, { ...input });

      return unsuspendRecurringInvestment;
    },
  });
