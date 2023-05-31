import { useMutation } from '@tanstack/react-query';
import { gql } from 'graphql-request';

import { Mutation, MutationReinvestDividendArgs } from '../../types/graphql';
import { UseApiMutationWithParams } from './interfaces';

type Hook = UseApiMutationWithParams<'reinvestDividend', MutationReinvestDividendArgs>;

const reinvestDividendsMutation = gql`
  mutation reinvestDividends($accountId: String!, $dividendIds: [String!]) {
    reinvestDividend(dividendIds: $dividendIds)
  }
`;

export const useReinvestDividends: Hook = getApiClient =>
  useMutation({
    mutationFn: async input => {
      const api = await getApiClient();

      if (!api) {
        return false;
      }

      const { reinvestDividend } = await api.request<Mutation>(reinvestDividendsMutation, { ...input });

      return reinvestDividend;
    },
  });
