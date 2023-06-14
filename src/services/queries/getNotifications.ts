import { UseQueryOptions, useInfiniteQuery } from '@tanstack/react-query';
import { gql } from "graphql-request";
import { Query, QueryGetNotificationsArgs } from "../../types/graphql";
import { UseInfiniteApiQueryWithParams } from './interfaces';
import { NotificationFragment, NotificationStatsFragment } from './fragments/notifications';

type Parameters = QueryGetNotificationsArgs & { config?: UseQueryOptions };
type Hook = UseInfiniteApiQueryWithParams<'getNotificationStats', Parameters>;

const DEFAULT_NOTIFICATIONS_PER_PAGE = 10

export const getNotifications = gql`
  ${NotificationFragment}
  ${NotificationStatsFragment}

  query getNotificationStats($accountId: ID!, $pagination: Pagination, $filter: NotificationFilter) {
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

    const { getNotificationStats } = await api.request<Query>(getNotifications, { accountId, pagination: { page: pageParam, perPage: pagination?.perPage || DEFAULT_NOTIFICATIONS_PER_PAGE }, filter });

    return getNotificationStats;
  },
  getNextPageParam: (lastPage, allPages) => {
    let isNextPage;
    if (lastPage) {
      isNextPage = Math.ceil(lastPage.totalCount / (pagination?.perPage || DEFAULT_NOTIFICATIONS_PER_PAGE)) > allPages.length
    }
    return isNextPage ? allPages.length : undefined
  },
  ...config,
})
