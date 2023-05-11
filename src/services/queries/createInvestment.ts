import { useMutation } from '@tanstack/react-query';
import { gql, GraphQLClient } from 'graphql-request';

import { Mutation, UsdInput } from '../../types/graphql';
import { UseApiMutationWithParams } from './interfaces';

type Parameters = { accountId: string, amount: UsdInput };
type Hook = UseApiMutationWithParams<'createInvestment', Parameters>;

const createInvestmentMutation = gql`
  mutation createInvestment($accountId: ID!, $amount: USDInput) {
    createInvestment(accountId: $accountId, amount: $amount)
  }
`;

export const useCreateInvestment: Hook = (getApiClient) =>
  useMutation({
    mutationFn: async (input) => {
      const api = await getApiClient() as GraphQLClient;

      const { createInvestment } = await api.request<Mutation>(createInvestmentMutation, { ...input });

      return createInvestment;
    },
  });
