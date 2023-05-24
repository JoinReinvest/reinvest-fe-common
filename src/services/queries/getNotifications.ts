import { UseQueryOptions, useInfiniteQuery } from '@tanstack/react-query';
import { gql } from "graphql-request";
import { Query, QueryGetNotificationsArgs } from "../../types/graphql";
import { UseInfiniteApiQueryWithParams } from './interfaces';
import { NotificationFragment, NotificationStatsFragment } from './fragments/notifications';

type Parameters = QueryGetNotificationsArgs & { config?: UseQueryOptions };
type Hook = UseInfiniteApiQueryWithParams<'getNotificationStats', Parameters>;

export const getNotifications = gql`
  ${NotificationFragment}
  ${NotificationStatsFragment}

  query getNotificationStats($accountId: String!, $pagination: Pagination, $filter: NotificationFilter) {
    getNotificationStats(accountId: $accountId) {
      ...NotificationStatsFragment
      getNotifications(filter: $filter , pagination : $pagination) {
        ...NotificationFragment
      }
  }
  }
`;

export const useGetNotifications: Hook = (getApiClient, { accountId, filter, pagination, ...config }) => useInfiniteQuery({
  queryKey: ["getNotifications", accountId, pagination, filter],
  queryFn: async ({ pageParam = 0 }) => {
    const api = await getApiClient();

    if (!api) {
      return null;
    }

    const { getNotificationStats } = await api.request<Query>(getNotifications, { accountId, pagination: { page: pageParam, perPage: pagination?.perPage }, filter });

    return getNotificationStats;
  },
  ...config,
})
