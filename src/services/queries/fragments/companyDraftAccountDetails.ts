import { gql } from 'graphql-request';
import { CompanyNameFragment } from './companyName';
import { AddressFragment } from './address';
import { EinFragment } from './ein';
import { AnnualRevenueFragment } from './annualRevenue';
import { NumberOfEmployeesFragment } from './numberOfEmployees';
import { IndustryFragment } from './industry';
import { DocumentFileLinkIdFragment } from './documentFileLinkId';
import { StakeholderFragment } from './stakeholder';
import { CompanyTypeFragment } from './companyType';

export const CompanyDraftAccountDetailsFragment = gql`
  ${AddressFragment}
  ${DocumentFileLinkIdFragment}
  ${NumberOfEmployeesFragment}
  ${AnnualRevenueFragment}
  ${EinFragment}
  ${CompanyNameFragment}
  ${IndustryFragment}
  ${StakeholderFragment}
  ${CompanyTypeFragment}
  fragment CompanyDraftAccountDetailsFragment on CompanyDraftAccountDetails {
    companyName {
      ...CompanyNameFragment
    }
    address {
      ...AddressFragment
    }
    ein {
      ...EinFragment
    }
    annualRevenue {
      ...AnnualRevenueFragment
    }
    numberOfEmployees {
      ...NumberOfEmployeesFragment
    }
    industry {
      ...IndustryFragment
    }
    companyDocuments {
      ...DocumentFileLinkIdFragment
    }
    stakeholders {
      ...StakeholderFragment
    }
    companyType {
      ...CompanyTypeFragment
    }
  }
`;
