import { defaultContext, useQuery } from '@tanstack/react-query';
import { gql } from 'graphql-request';
import { UseApiQuery } from './interfaces';
import { Query } from '../../types/graphql';
import { ProfileDetailsFragment } from './fragments/profileDetails';
import { AccountsFragment } from './fragments/accounts';

type Hook = UseApiQuery<'getProfile'>;

const getProfileQuery = gql`
  ${ProfileDetailsFragment}
  ${AccountsFragment}
  query getProfile {
    getProfile {
      externalId
      label
      isCompleted
      details {
        ...ProfileDetailsFragment
      }
      accounts {
        ...AccountsFragment
      }
    }
  }
`;

export const useGetUserProfile: Hook = (getApiClient) =>
  useQuery<Query['getProfile'] | null>({
    queryKey: ['getProfile'],
    queryFn: async () => {
      const api = await getApiClient();

      if (!api) {
        return null;
      }

      const { getProfile } = await api.request<Query>(getProfileQuery);

      return getProfile;
    },
    context: defaultContext,
    enabled: false,
  });
