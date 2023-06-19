import { gql } from 'graphql-request';
import { UsdFragment } from './usd';

export const FundsWithdrawalSimulationFragment = gql`
  ${UsdFragment}
  fragment FundsWithdrawalSimulationFragment on FundsWithdrawalSimulation {
    canWithdraw
    eligibleForWithdrawal {
      ...UsdFragment
    }
    accountValue {
      ...UsdFragment
    }
    penaltiesFee {
      ...UsdFragment
    }
  }
`;
