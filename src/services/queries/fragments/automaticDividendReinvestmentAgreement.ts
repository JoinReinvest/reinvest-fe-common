import { gql } from 'graphql-request';

export const AutomaticDividendReinvestmentAgreementFragment = gql`
  fragment AutomaticDividendReinvestmentAgreementFragment on AutomaticDividendReinvestmentAgreement {
    signed
    date
  }
`;
