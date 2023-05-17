import { useMutation } from '@tanstack/react-query';
import { gql } from 'graphql-request';

import { Mutation } from '../../types/graphql';
import { UseApiMutationWithParams } from './interfaces';

type Parameters = { draftAccountId: string };
type Hook = UseApiMutationWithParams<'withdrawDividend', Parameters>;

const withdrawDividendsMutation = gql`
  mutation withdrawDividends($dividendIds: [String!]) {
    withdrawDividend(dividendIds: $dividendIds)
  }
`;

export const useWithdrawDividends: Hook = (getApiClient) =>
  useMutation({
    mutationFn: async (input) => {
      const api = await getApiClient();

      if (!api) {
        return false;
      }

      const { withdrawDividend } = await api.request<Mutation>(withdrawDividendsMutation, { ...input });

      return withdrawDividend;
    },
  });
