import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { gql } from "graphql-request";
import { Query, QueryGetNotDismissedNotificationsArgs } from "../../types/graphql";
import { UseApiQueryWithParams } from './interfaces';
import { NotificationFragment } from './fragments/notifications';

type Parameters = QueryGetNotDismissedNotificationsArgs & { config?: UseQueryOptions };
type Hook = UseApiQueryWithParams<'getNotDismissedNotifications', Parameters>;

export const getNotDismissedNotificationsQuery = gql`
  ${NotificationFragment}

  query getNotDismissedNotifications($accountId: String!, $pagination: Pagination) {
    getNotDismissedNotifications(accountId: $accountId, pagination: $pagination) {
      ...NotificationFragment
    }
  }
`;

export const useGetNotDismissedNotifications: Hook = (getApiClient, { accountId, pagination, ...config }) => useQuery({
  queryKey: ["getNotDismissedNotifications", accountId, pagination],
  queryFn: async () => {
    const api = await getApiClient();

    if (!api) {
      return null;
    }

    const { getNotDismissedNotifications } = await api.request<Query>(getNotDismissedNotificationsQuery, { accountId, pagination });

    return getNotDismissedNotifications;
  },
  ...config,
})
