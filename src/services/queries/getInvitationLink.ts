import { useQuery } from '@tanstack/react-query';
import { gql } from 'graphql-request';
import { Query } from '../../types/graphql';
import { UseApiQuery } from './interfaces';

type Hook = UseApiQuery<'userInvitationLink'>;

export const getInvitationQuery = gql`
  query getInvitationLink {
    userInvitationLink {
      url
    }
  }
`;

export const useGetInvitationLink: Hook = (getApiClient) =>
  useQuery<Query['userInvitationLink'] | null>({
    queryKey: ['userInvitationLink'],
    queryFn: async () => {
      const api = await getApiClient();

      if (!api) {
        return null;
      }

      const { userInvitationLink } = await api.request<Query>(getInvitationQuery);

      return userInvitationLink;
    },
  });
