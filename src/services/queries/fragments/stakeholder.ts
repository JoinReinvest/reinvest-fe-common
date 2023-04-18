import { gql } from 'graphql-request';
import { PersonNameTypeFragment } from './personNameType';
import { SimplifiedDomicileFragment } from './simplifiedDomicile';

export const StakeholderFragment = gql`
  ${PersonNameTypeFragment}
  ${SimplifiedDomicileFragment}
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
      ...SimplifiedDomicileFragment
    }
    idScan {
      ...DocumentFileLinkIdFragment
    }
  }
`;
