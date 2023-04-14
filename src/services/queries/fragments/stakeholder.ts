import { gql } from 'graphql-request';
import { DomicileFragment } from './domicile';
import { PersonNameTypeFragment } from './personNameType';

export const StakeholderFragment = gql`
  ${DomicileFragment}
  ${PersonNameTypeFragment}
  fragment StakeholderFragment on Stakeholder {
    id
    label
    name {
      ...PersonNameTypeFragment
    }
    dateOfBirth {
      dateOfBirth
    }
    ssn
    address {
      ...AddressFragment
    }
    domicile {
      ...DomicileFragment
    }
    idScan {
      ...DocumentFileLinkIdFragment
    }
  }
`;
