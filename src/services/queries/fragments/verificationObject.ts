import { gql } from 'graphql-request';

export const VerificationObjectFragment = gql`
  fragment VerificationObjectFragment on VerificationObject {
    type
    accountId
    stakeholderId
  }
`;
