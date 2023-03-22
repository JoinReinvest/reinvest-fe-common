import { useQuery } from '@tanstack/react-query';
import { gql } from 'graphql-request';
import { UseApiQueryWithParams } from './interfaces'
import { Query, QueryGetIndividualAccountArgs } from 'types/graphql';

import { AvatarFragment } from './fragments/avatar';
import { EmployerFragment } from './fragments/employer';
import { NetRangeFragment } from './fragments/netRange';

type Hook = UseApiQueryWithParams<'getIndividualAccount', QueryGetIndividualAccountArgs>;

const getAccountQuery = gql`
  ${AvatarFragment}
  ${EmployerFragment}
  ${NetRangeFragment}
  query getIndividualAccount($accountId: String) {
    getIndividualAccount(accountId: $accountId) {
      id
      avatar {
        ...AvatarFragment
      }
      positionTotal
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
export const useGetAccount: Hook = (getApiClient, { accountId }) =>
  useQuery<Query['getIndividualAccount']>({
    queryKey: ['getAccount', accountId],
    queryFn: async () => {
      const api = await getApiClient();

      if (!api) {
        return null;
      }

      const { getIndividualAccount } = await api.request<Query>(getAccountQuery, { accountId });

      return getIndividualAccount;
    },
  });
