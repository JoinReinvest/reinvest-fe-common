import { useQuery } from '@tanstack/react-query';
import { gql } from 'graphql-request';
import { UseApiQuery } from './interfaces';
import { Query } from '../../types/graphql';

import { AvatarFragment } from './fragments/avatar';
import { EmployerFragment } from './fragments/employer';
import { NetRangeFragment } from './fragments/netRange';

type Hook = UseApiQuery<'getIndividualAccount'>;

const getAccountQuery = gql`
  ${AvatarFragment}
  ${EmployerFragment}
  ${NetRangeFragment}
  query getIndividualAccount {
    getIndividualAccount {
      id
      avatar {
        ...AvatarFragment
      }
      positionTotal
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
export const useGetAccount: Hook = (getApiClient) =>
  useQuery<Query['getIndividualAccount']>({
    queryKey: ['getAccount'],
    queryFn: async () => {
      const api = await getApiClient();

      if (!api) {
        return null;
      }

      const { getIndividualAccount } = await api.request<Query>(getAccountQuery);

      return getIndividualAccount;
    },
  });
