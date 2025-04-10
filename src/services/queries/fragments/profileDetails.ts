import { gql } from 'graphql-request';

import { AddressFragment } from './address';
import { DomicileFragment } from './domicile';
import { StatementFragment } from './statement';

export const ProfileDetailsFragment = gql`
  ${AddressFragment}
  ${DomicileFragment}
  ${StatementFragment}
  fragment ProfileDetailsFragment on ProfileDetails {
    firstName
    middleName
    lastName
    dateOfBirth
    ssn
    experience
    domicile {
      ...DomicileFragment
    }
    address {
      ...AddressFragment
    }
    idScan {
      id
      fileName
    }
    statements {
      ...StatementFragment
    }
  }
`;
