import { useMutation } from '@tanstack/react-query';
import { gql, GraphQLClient } from 'graphql-request';

import { Mutation } from '../../types/graphql';
import { UseApiMutationWithParams } from './interfaces';

type Parameters = { investmentId: string };
type Hook = UseApiMutationWithParams<'abortInvestment', Parameters>;

const abortInvestmentMutation = gql`
  mutation abortInvestment($investmentId: ID!) {
    abortInvestment(investmentId: $investmentId)
  }
`;

export const useAbortInvestment: Hook = (getApiClient) =>
  useMutation({
    mutationFn: async (input) => {
      const api = await getApiClient() as GraphQLClient;

      const { abortInvestment } = await api.request<Mutation>(abortInvestmentMutation, { ...input });

      return abortInvestment;
    },
  });
