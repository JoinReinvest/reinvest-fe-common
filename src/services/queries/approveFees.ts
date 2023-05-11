import { useMutation } from '@tanstack/react-query';
import { gql, GraphQLClient } from 'graphql-request';

import { Mutation } from '../../types/graphql';
import { UseApiMutationWithParams } from './interfaces';

type Parameters = { investmentId: string };
type Hook = UseApiMutationWithParams<'approveFees', Parameters>;

const approveFeesMutation = gql`
  mutation approveFees($investmentId: ID!) {
    approveFees(investmentId: $investmentId)
  }
`;

export const useApproveFees: Hook = (getApiClient) =>
  useMutation({
    mutationFn: async (input) => {
      const api = await getApiClient() as GraphQLClient;

      const { approveFees } = await api.request<Mutation>(approveFeesMutation, { ...input });

      return approveFees;
    },
  });
