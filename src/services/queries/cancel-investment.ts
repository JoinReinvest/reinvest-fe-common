import { useMutation } from '@tanstack/react-query';
import { gql } from 'graphql-request';

import { Mutation, MutationCancelInvestmentArgs } from '../../types/graphql';
import { UseApiMutationWithParams } from './interfaces';

type Hook = UseApiMutationWithParams<'cancelInvestment', MutationCancelInvestmentArgs>;

const cancelInvestmentMutation = gql`
  mutation cancelInvestment($investmentId: ID!) {
    cancelInvestment(investmentId: $investmentId)
  }
`;

export const useCancelInvestment: Hook = (getApiClient) => useMutation({
  mutationFn: async (input) => {
    const api = await getApiClient();

    if (!api) {
      return false;
    };

    const { cancelInvestment } = await api.request<Mutation>(cancelInvestmentMutation, { ...input });

    return cancelInvestment;
  }
});
