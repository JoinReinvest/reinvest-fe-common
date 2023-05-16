import { gql } from 'graphql-request';

export const GracePeriodInvestmentFragment = gql`
  fragment GracePeriodInvestmentFragment on GracePeriodInvestment {
    investmentId
    amount {
      ...UsdFragment
    }
    gracePeriodEnd
  }
`;
