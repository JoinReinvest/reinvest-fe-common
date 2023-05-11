import { gql } from 'graphql-request';
import { SubscriptionAgreementParagraphFragment } from './subscriptionAgreementParagraph';

export const SubscriptionAgreementSectionFragment = gql`
  ${SubscriptionAgreementParagraphFragment}
  fragment SubscriptionAgreementSectionFragment on SubscriptionAgreementSection {
    header
    paragraphs {
      ...SubscriptionAgreementParagraphFragment
    }
  }
`;
