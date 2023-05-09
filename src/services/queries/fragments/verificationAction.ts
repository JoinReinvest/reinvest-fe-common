import { gql } from 'graphql-request';
import { VerificationObjectFragment } from './verificationObject';

export const VerificationActionFragment = gql`
  ${VerificationObjectFragment}
  fragment VerificationActionFragment on VerificationAction {
    action
    onObject {
      ...VerificationObjectFragment
    }
    reasons
  }
`;
