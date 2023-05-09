import { gql } from 'graphql-request';
import { BeneficiaryNameFragment } from './beneficiaryName';

export const BeneficiaryDetailsFragment = gql`
  ${BeneficiaryNameFragment}
  fragment BeneficiaryDetailsFragment on BeneficiaryDetails {
    name {
      ...BeneficiaryNameFragment
    }
  }
`;
