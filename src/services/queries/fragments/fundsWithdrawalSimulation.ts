import { gql } from 'graphql-request';
import { UsdFragment } from './usd';
import { GracePeriodInvestmentFragment } from './gracePeriodInvestment';

export const FundsWithdrawalSimulationFragment = gql`
   ${UsdFragment}
   ${GracePeriodInvestmentFragment}
  fragment FundsWithdrawalSimulationFragment on FundsWithdrawalSimulation {
    gracePeriodInvestments {
      ...GracePeriodInvestmentFragment
    }
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
