import { gql } from 'graphql-request';

export const SubscriptionAgreementParagraphFragment = gql`
  fragment SubscriptionAgreementParagraphFragment on SubscriptionAgreementParagraph {
    lines
    isCheckedOption
  }
`;
