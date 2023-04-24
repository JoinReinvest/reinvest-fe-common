import { useQuery } from "@tanstack/react-query";
import { gql } from "graphql-request";
import { Query } from "../../types/graphql";
import { UseApiQuery } from "./interfaces";
import { AvatarFragment } from './fragments/avatar';

type Hook = UseApiQuery<'getIndividualAccount'>;

export const getIndividualAccountQuery = gql`
  ${AvatarFragment}

  query getIndividualAccount {
    getIndividualAccount {
      id
      label
      avatar {
        ...AvatarFragment
      }
    }
  }
`;

export const useGetIndividualAccount: Hook = (getApiClient) => useQuery<Query["getIndividualAccount"]>({
  queryKey: ["getIndividualAccount"],
  queryFn: async () => {
    const api = await getApiClient();

    if (!api) {
      return null;
    }

    const { getIndividualAccount } = await api.request<Query>(getIndividualAccountQuery);

    return getIndividualAccount;
  }
});
