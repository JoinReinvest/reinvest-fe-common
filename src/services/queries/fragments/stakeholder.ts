import { gql } from 'graphql-request';
import { AddressFragment } from './address';
import { DomicileFragment } from './domicile';
import { DocumentFileLinkIdFragment } from './documentFileLinkId';
import { PersonNameTypeFragment } from './personNameType';

export const StakeholderFragment = gql`
  ${AddressFragment}
  ${DomicileFragment}
  ${DocumentFileLinkIdFragment}
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
