import { UseQueryOptions, useInfiniteQuery } from '@tanstack/react-query';
import { gql } from 'graphql-request';

import { UseInfiniteApiQueryWithParams } from './interfaces';
import { Query, QueryGetAccountActivityArgs } from '../../types/graphql';

type Parameters = QueryGetAccountActivityArgs & { config?: UseQueryOptions };
type Hook = UseInfiniteApiQueryWithParams<'getAccountActivity', Parameters>;

const DEFAULT_ACCOUNT_ACTIVITY_ITEMS_PER_PAGE = 10;

const getAccountActivityQuery = gql`
  query getAccountActivity($accountId: ID!, $pagination: Pagination) {
    getAccountActivity(accountId: $accountId, pagination: $pagination) {
      activityName
      date
    }
  }
`;

export const useGetAccountActivity: Hook = (getApiClient, { accountId, pagination, ...config }) =>
  useInfiniteQuery({
    ...config,

    queryKey: ['getAccountActivity', accountId, pagination],

    queryFn: async ({ pageParam = 0 }) => {
      const api = await getApiClient();

      if (!api) {
        return null;
      }

      const { getAccountActivity } = await api.request<Query>(getAccountActivityQuery, {
        accountId,
        pagination: { page: pageParam, perPage: pagination?.perPage || DEFAULT_ACCOUNT_ACTIVITY_ITEMS_PER_PAGE },
      });

      return getAccountActivity;
    },

    getNextPageParam: (lastPage, allPages) => {
      let isNextPage;

      if (lastPage) {
        // TO IMPROVE: We have to do an extra query to see if the API will
        // return an empty list to know if there is a next page.
        isNextPage = lastPage.length > 0;
      }

      return isNextPage ? allPages.length : undefined;
    },
  });
