import { gql } from 'graphql-request';
import { AgreementSectionFragment } from './agreement-section';

export const SubscriptionAgreementFragment = gql`
  ${AgreementSectionFragment}
  fragment SubscriptionAgreementFragment on SubscriptionAgreement {
    id
    type
    status
    createdAt
    signedAt
    content {
      ...AgreementSectionFragment
    }
  }
`;
