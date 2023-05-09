import {useQuery, UseQueryOptions} from '@tanstack/react-query';
import { gql } from 'graphql-request';
import { Query } from '../../types/graphql';

import { UseApiQueryWithParams } from './interfaces';
import { AvatarFragment } from './fragments/avatar';

type Hook = UseApiQueryWithParams<'getIndividualDraftAccount', { accountId: string, config: UseQueryOptions}> ;

const getIndividualDraftAccountQuery = gql`
  ${AvatarFragment}
  query getIndividualDraftAccount($accountId: ID) {
    getIndividualDraftAccount(accountId: $accountId) {
    id
    state
    avatar {
      ...AvatarFragment
    }
    isCompleted
    details {
      employmentStatus {
        status
      }
      employer {
        nameOfEmployer
        title
        industry
      }
      netWorth {
        range
      }
      netIncome {
        range
      }
    }
    }
  }
`;

export const useGetIndividualDraftAccount: Hook = (getApiClient, { accountId, ...config }) =>
  useQuery<Query['getIndividualDraftAccount']>({
    queryKey: ['getIndividualDraftAccount', accountId],
    queryFn: async () => {
      const api = await getApiClient();

      if (!api) {
        return null;
      }

      const { getIndividualDraftAccount } = await api.request<Query>(getIndividualDraftAccountQuery, { accountId });

      return getIndividualDraftAccount;
    },
    ...config
  });

