import { gql } from 'graphql-request';
import { UsdFragment } from './usd';

export const FundsWithdrawalRequestFragment = gql`
   ${UsdFragment}
  fragment FundsWithdrawalRequestFragment on FundsWithdrawalRequest {
    status
    eligibleForWithdrawal {
      ...UsdFragment
    }
    accountValue {
      ...UsdFragment
    }
    penaltiesFee {
      ...UsdFragment
    }
    decisionMessage
    createdDate
    decisionDate
  }
`;
