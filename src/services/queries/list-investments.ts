import { UseQueryOptions, useInfiniteQuery } from '@tanstack/react-query';
import { gql } from "graphql-request";

import { UseInfiniteApiQueryWithParams } from './interfaces';
import { InvestmentOverviewFragment } from './fragments/investment-overview';
import { Query, QueryListInvestmentsArgs } from "../../types/graphql";

type Parameters = QueryListInvestmentsArgs & { config?: UseQueryOptions };
type Hook = UseInfiniteApiQueryWithParams<'listInvestments', Parameters>;

const DEFAULT_INVESTMENTS_PER_PAGE = 10

const listInvestmentsQuery = gql`
  ${InvestmentOverviewFragment}

  query listInvestments($accountId: ID!, $pagination: Pagination) {
    listInvestments(accountId: $accountId, pagination: $pagination) {
      ...InvestmentOverviewFragment
    }
  }
`;

export const useListInvestments: Hook = (getApiClient, { accountId, pagination, ...config }) => useInfiniteQuery({
  ...config,

  queryKey: ["listInvestments", accountId, pagination],

  queryFn: async ({ pageParam = 0 }) => {
    const api = await getApiClient();

    if (!api) {
      return null;
    }

    const { listInvestments } = await api.request<Query>(listInvestmentsQuery, { accountId, pagination: { page: pageParam, perPage: pagination?.perPage || DEFAULT_INVESTMENTS_PER_PAGE } });

    return listInvestments;
  },

  getNextPageParam: (lastPage, allPages) => {
    let isNextPage;

    if (lastPage) {
      // TO IMPROVE: We have to do an extra query to see if the API will
      // return an empty list to know if there is a next page.
      isNextPage = lastPage.length > 0;
    }

    return isNextPage ? allPages.length : undefined
  }
})
