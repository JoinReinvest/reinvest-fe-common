import { Address, CorporateCompanyType,
  DomicileType,
  DraftAccountType,
  EmploymentStatus,
  Experience,
  StatementType,
  TrustCompanyType } from '../types/graphql';
import { Industry } from './industries';
import { CorporationAnnualRevenue, CorporationNumberOfEmployees } from './corporation';

export interface OnboardingFormFields {
  address: Address | null;
  dateOfBirth: string | null;
  experience: Experience | null;
  isCompletedProfile: boolean;
  residency: DomicileType | null;
  _currentCompanyMajorStakeholder?: IndexedSchema<Applicant>;
  _currentTrustTrusteeGrantorOrProtector?: IndexedSchema<Applicant>;
  _didDocumentIdentificationValidationSucceed?: boolean;
  _hasAuthenticatedPhoneNumber?: boolean;
  _isEditingCompanyMajorStakeholderApplicant?: boolean;
  _isEditingTrustTrusteeGrantorOrProtector?: boolean;
  _isSocialSecurityNumberAlreadyAssigned?: boolean;
  _isSocialSecurityNumberBanned?: boolean;
  _willHaveMajorStakeholderApplicants?: boolean;
  _willHaveTrustTrusteesGrantorsOrProtectors?: boolean;
  accountId?: string;
  accountType?: DraftAccountType;
  authCode?: string;
  authenticationCode?: string;
  birthCountry?: string;
  businessAddress?: Address;
  citizenshipCountry?: string;
  companyMajorStakeholderApplicants?: Applicant[];
  companyTickerSymbols?: CompanyTickerSymbol[];
  compliances?: Compliances;
  corporationAnnualRevenue?: CorporationAnnualRevenue;
  corporationIndustry?: Industry;
  corporationLegalName?: string;
  corporationNumberOfEmployees?: CorporationNumberOfEmployees;
  corporationType?: CorporateCompanyType;
  documentsForCorporation?: File[];
  documentsForTrust?: File[];
  domicile?: {
    forGreenCard?: {
      birthCountry: string;
      citizenshipCountry: string;
    };
    forVisa?: {
      birthCountry: string;
      citizenshipCountry: string;
      visaType: string;
    };
  };
  ein?: string;
  employment?: {
    employerName?: string;
    industry?: string;
    occupation?: string;
  };
  employmentDetails?: EmploymentDetails;
  employmentStatus?: EmploymentStatus;
  finraInstitution?: string;
  finraInstitutionName?: string;
  identificationDocument?: IdentificationDocuments;
  isAccreditedInvestor?: boolean;
  isAuthorizedSignatoryEntity?: boolean;
  name?: {
    firstName: string;
    lastName: string;
    middleName?: string;
  };
  netIncome?: string;
  netWorth?: string;
  permanentAddress?: Address;
  phone?: {
    countryCode?: string;
    number?: string;
  };
  phoneNumberAuthenticationCode?: string;
  profilePicture?: File | null;
  seniorPoliticalFigure?: string;
  ssn?: string;
  statementTypes?: StatementType[];
  trustLegalName?: string;
  trustTrusteesGrantorsOrProtectors?: Applicant[];
  trustType?: TrustCompanyType;
  visaType?: 'F-1' | 'H-1B' | 'L-1' | 'O-1' | 'G-4';
}

export interface IdentificationDocuments {
  back: File | null;
  front: File | null;
}

export interface CompanyTickerSymbol {
  symbol: string;
}

interface Compliances {
  isAssociatedWithFinra?: boolean;
  isAssociatedWithPubliclyTradedCompany?: boolean;
  isSeniorPoliticalFigure?: boolean;
}

interface EmploymentDetails {
  employerName: string;
  industry: Industry;
  occupation: string;
}

export interface Applicant {
  dateOfBirth?: Date;
  domicile?: 'us' | 'green-card' | 'visa';
  firstName?: string;
  identificationDocument?: File;
  lastName?: string;
  middleName?: string;
  residentialAddress?: string;
  socialSecurityNumber?: string;
}

export type IndexedSchema<Schema> = Schema & {
  _index?: number;
};
