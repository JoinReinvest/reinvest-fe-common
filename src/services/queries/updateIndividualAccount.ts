import { MutationUpdateIndividualAccountArgs } from '../../types/graphql';
import { useMutation } from '@tanstack/react-query';
import { gql } from 'graphql-request';

import { Mutation } from '../../types/graphql';
import { UseApiMutationWithParams } from './interfaces';
import { AvatarFragment } from './fragments/avatar';
import { EmployerFragment } from './fragments/employer';
import { NetRangeFragment } from './fragments/netRange';

type Hook = UseApiMutationWithParams<'updateIndividualAccount', MutationUpdateIndividualAccountArgs>;

const updateIndividualAccountMutation = gql`
  ${AvatarFragment}
  ${EmployerFragment}
  ${NetRangeFragment}
  updateIndividualAccount($accountId:ID!, $input:IndividualAccountInput) {
    updateIndividualAccount(accountId:$accountId, input:$input) {
      id
      avatar {
        ...AvatarFragment
      }
      label
      details {
        employmentStatus {
          status
        }
        employer {
          ...EmployerFragment
        }
        netWorth {
          ...NetRangeFragment
        }
        netIncome {
          ...NetRangeFragment
        }
      }
    }
  }
`;

export const useUpdateIndividualAccount: Hook = getApiClient =>
  useMutation({
    mutationFn: async input => {
      const api = await getApiClient();

      if (!api) {
        return null;
      }

      const { updateIndividualAccount } = await api.request<Mutation>(updateIndividualAccountMutation, { ...input });

      return updateIndividualAccount;
    },
  });
