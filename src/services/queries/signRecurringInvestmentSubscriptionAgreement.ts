import { useMutation } from '@tanstack/react-query';
import { gql, GraphQLClient } from 'graphql-request';

import { Mutation } from '../../types/graphql';
import { UseApiMutationWithParams } from './interfaces';

type Parameters = { accountId: string };
type Hook = UseApiMutationWithParams<'signRecurringInvestmentSubscriptionAgreement', Parameters>;

const signRecurringInvestmentSubscriptionAgreementMutation = gql`
  mutation signRecurringInvestmentSubscriptionAgreement($accountId: ID!) {
    signRecurringInvestmentSubscriptionAgreement(accountId: $accountId)
  }
`;

export const useSignRecurringInvestmentSubscriptionAgreement: Hook = (getApiClient) =>
  useMutation({
    mutationFn: async (input) => {
      const api = await getApiClient() as GraphQLClient;

      const { signRecurringInvestmentSubscriptionAgreement } = await api.request<Mutation>(signRecurringInvestmentSubscriptionAgreementMutation, { ...input });

      return signRecurringInvestmentSubscriptionAgreement;
    },
  });
