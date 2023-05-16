import { gql } from 'graphql-request';
import { SubscriptionAgreementSectionFragment } from './subscriptionAgreementSection';

export const SubscriptionAgreementFragment = gql`
  ${SubscriptionAgreementSectionFragment}
  fragment SubscriptionAgreementFragment on SubscriptionAgreement {
    id
    type
    status
    createdAt
    signedAt
    content {
      ...SubscriptionAgreementSectionFragment
    }
  }
`;
