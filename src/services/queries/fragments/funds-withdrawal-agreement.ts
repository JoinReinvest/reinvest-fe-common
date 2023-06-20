import { gql } from 'graphql-request';
import { AgreementSectionFragment } from './agreement-section';

export const FundsWithdrawalAgreementFragment = gql`
  ${AgreementSectionFragment}

  fragment FundsWithdrawalAgreementFragment on FundsWithdrawalAgreement {
    id
    status
    createdAt
    signedAt
    content {
      ...AgreementSectionFragment
    }
  }
`;
