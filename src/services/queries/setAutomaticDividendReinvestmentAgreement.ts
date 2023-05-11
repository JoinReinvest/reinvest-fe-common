import { useMutation } from '@tanstack/react-query';
import { gql, GraphQLClient } from 'graphql-request';

import { Mutation } from '../../types/graphql';
import { UseApiMutationWithParams } from './interfaces';

type Parameters = { accountId: string, automaticDividendReinvestmentAgreement: boolean };
type Hook = UseApiMutationWithParams<'setAutomaticDividendReinvestmentAgreement', Parameters>;

const setAutomaticDividendReinvestmentAgreementMutation = gql`
  mutation setAutomaticDividendReinvestmentAgreement($accountId: ID!, $automaticDividendReinvestmentAgreement: Boolean!) {
    setAutomaticDividendReinvestmentAgreement(accountId: $accountId, automaticDividendReinvestmentAgreement: $automaticDividendReinvestmentAgreement)
  }
`;

export const useSetAutomaticDividendReinvestmentAgreement: Hook = (getApiClient) =>
  useMutation({
    mutationFn: async (input) => {
      const api = await getApiClient() as GraphQLClient;

      const { setAutomaticDividendReinvestmentAgreement } = await api.request<Mutation>(setAutomaticDividendReinvestmentAgreementMutation, { ...input });

      return setAutomaticDividendReinvestmentAgreement;
    },
  });
