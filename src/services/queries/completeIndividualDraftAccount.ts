import { useMutation } from '@tanstack/react-query';
import { gql } from 'graphql-request';
import { IndividualAccountInput, Mutation } from '../../types/graphql';
import { UseApiMutationWithParams } from './interfaces';

import { AvatarFragment } from './fragments/avatar';
import { EmployerFragment } from './fragments/employer';
import { NetRangeFragment } from './fragments/netRange';

type Parameters = { accountId: string; input: IndividualAccountInput };
type Hook = UseApiMutationWithParams<'completeIndividualDraftAccount', Parameters>;

const completeIndividualDraftAccountMutation = gql`
  ${EmployerFragment}
  ${NetRangeFragment}
  ${AvatarFragment}
  mutation completeIndividualDraftAccount($accountId: ID, $input: IndividualAccountInput) {
    completeIndividualDraftAccount(accountId: $accountId, input: $input) {
      id
      state
      avatar {
        ...AvatarFragment
      }
      isCompleted
      details {
        employer {
          ...EmployerFragment
        }
        netWorth {
          ...NetRangeFragment
        }
        netIncome {
          ...NetRangeFragment
        }
        employmentStatus {
          status
        }
      }
    }
  }
`;

export const useCompleteIndividualDraftAccount: Hook = getApiClient =>
  useMutation({
    mutationFn: async ({ accountId, input }) => {
      const api = await getApiClient();

      if (!api) {
        return null;
      }

      const { completeIndividualDraftAccount } = await api.request<Mutation>(completeIndividualDraftAccountMutation, { accountId, input });

      return completeIndividualDraftAccount;
    },
  });
