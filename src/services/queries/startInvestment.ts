import { useMutation } from '@tanstack/react-query';
import { gql, GraphQLClient } from 'graphql-request';

import { Mutation } from '../../types/graphql';
import { UseApiMutationWithParams } from './interfaces';

type Parameters = { investmentId: string, approveFees: boolean };
type Hook = UseApiMutationWithParams<'startInvestment', Parameters>;

const startInvestmentMutation = gql`
  mutation startInvestment($investmentId: ID!, $approveFees: Boolean) {
    startInvestment(investmentId: $investmentId, approveFees: $approveFees)
  }
`;

export const useStartInvestment: Hook = (getApiClient) =>
  useMutation({
    mutationFn: async (input) => {
      const api = await getApiClient() as GraphQLClient;

      const { startInvestment } = await api.request<Mutation>(startInvestmentMutation, { ...input });

      return startInvestment;
    },
  });
