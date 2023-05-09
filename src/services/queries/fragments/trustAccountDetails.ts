import { gql } from 'graphql-request';
import { CompanyNameFragment } from './companyName';
import { AddressFragment } from './address';
import { AnnualRevenueFragment } from './annualRevenue';
import { NumberOfEmployeesFragment } from './numberOfEmployees';
import { IndustryFragment } from './industry';
import { CompanyTypeFragment } from './companyType';
import { DocumentFileLinkIdFragment } from './documentFileLinkId';
import { StakeholderFragment } from './stakeholder';

export const TrustAccountDetailsFragment = gql`
  ${CompanyNameFragment}
  ${AddressFragment}
  ${AnnualRevenueFragment}
  ${NumberOfEmployeesFragment}
  ${IndustryFragment}
  ${CompanyTypeFragment}
  ${DocumentFileLinkIdFragment}
  ${StakeholderFragment}
  fragment TrustAccountDetailsFragment on TrustAccountDetails {
    companyName {
      ...CompanyNameFragment
    }
    address {
      ...AddressFragment
    }
    ein
    annualRevenue {
      ...AnnualRevenueFragment
    }
    numberOfEmployees {
      ...NumberOfEmployeesFragment
    }
    industry {
      ...IndustryFragment
    }
    companyType {
      ...CompanyTypeFragment
    }
    companyDocuments {
      ...DocumentFileLinkIdFragment
    }
    stakeholders {
      ...StakeholderFragment
    }
  }
`;
