import { useQuery } from "@tanstack/react-query";
import { gql } from "graphql-request";
import { Query } from "../../types/graphql";
import { UseApiQuery } from "./interfaces";
import { AvatarFragment } from './fragments/avatar';
import { EmployerFragment } from './fragments/employer';
import { NetRangeFragment } from './fragments/netRange';

type Hook = UseApiQuery<'getIndividualAccount'>;

export const getIndividualAccountQuery = gql`
  ${AvatarFragment}
  ${EmployerFragment}
  ${NetRangeFragment}
  query getIndividualAccount {
    getIndividualAccount {
      id
      avatar {
        ...AvatarFragment
      }
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
