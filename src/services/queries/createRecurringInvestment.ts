import { useMutation } from '@tanstack/react-query';
import { gql, GraphQLClient } from 'graphql-request';

import { Mutation, RecurringInvestmentScheduleInput, UsdInput } from '../../types/graphql';
import { UseApiMutationWithParams } from './interfaces';
import { UsdFragment } from './fragments/usd';
import { RecurringInvestmentScheduleFragment } from './fragments/recurringInvestmentSchedule';

type Parameters = { accountId: string, amount: UsdInput, schedule: RecurringInvestmentScheduleInput }
type Hook = UseApiMutationWithParams<'createRecurringInvestment', Parameters>;

const createRecurringInvestmentMutation = gql`
  ${UsdFragment}
  ${RecurringInvestmentScheduleFragment}
  mutation createRecurringInvestment($accountId: ID!, $amount: USDInput!, $schedule: RecurringInvestmentScheduleInput!) {
    createRecurringInvestment(accountId: $accountId, amount: $amount, schedule: $schedule) {
      id
      schedule {
        ...RecurringInvestmentScheduleFragment
      }
      nextInvestmentDate
      amount {
        ...UsdFragment
      }
      subscriptionAgreementId
      status
    }
  }
`;

export const useCreateRecurringInvestment: Hook = (getApiClient) =>
  useMutation({
    mutationFn: async (input) => {
      const api = await getApiClient() as GraphQLClient;

      const { createRecurringInvestment } = await api.request<Mutation>(createRecurringInvestmentMutation, { ...input });

      return createRecurringInvestment;
    },
  });
