import { gql } from 'graphql-request';
import { CompanyNameFragment } from './companyName';
import { AddressFragment } from './address';
import { AnnualRevenueFragment } from './annualRevenue';
import { NumberOfEmployeesFragment } from './numberOfEmployees';
import { IndustryFragment } from './industry';
import { CompanyTypeFragment } from './companyType';
import { DocumentFileLinkIdFragment } from './documentFileLinkId';
import { StakeholderFragment } from './stakeholder';

export const CorporateAccountDetailsFragment = gql`
  ${CompanyNameFragment}
  ${AddressFragment}
  ${AnnualRevenueFragment}
  ${NumberOfEmployeesFragment}
  ${IndustryFragment}
  ${CompanyTypeFragment}
  ${DocumentFileLinkIdFragment}
  ${StakeholderFragment}
  fragment CorporateAccountDetailsFragment on CorporateAccountDetails {
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
