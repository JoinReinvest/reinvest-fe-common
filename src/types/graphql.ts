export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  EmailAddress: any;
  ISODate: any;
  fileName_String_NotNull_pattern_pdfjpegjpgpng: any;
  firstName_String_NotNull_minLength_1: any;
  inCents_Int_NotNull_min_0: any;
  lastName_String_NotNull_minLength_1: any;
  numberOfLinks_Int_NotNull_min_1_max_10: any;
  ssn_String_NotNull_pattern_093092094: any;
};

export type AccountOverview = {
  __typename?: 'AccountOverview';
  avatar?: Maybe<GetAvatarLink>;
  id?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  positionTotal?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export enum AccountType {
  Beneficiary = 'BENEFICIARY',
  Corporate = 'CORPORATE',
  Individual = 'INDIVIDUAL',
  Trust = 'TRUST'
}

/** Only one of these statements can be valid */
export type AccreditedInvestorInput = {
  statement: AccreditedInvestorStatement;
};

export enum AccreditedInvestorStatement {
  IAmAnAccreditedInvestor = 'I_AM_AN_ACCREDITED_INVESTOR',
  IAmNotExceeding_10PercentOfMyNetWorthOrAnnualIncome = 'I_AM_NOT_EXCEEDING_10_PERCENT_OF_MY_NET_WORTH_OR_ANNUAL_INCOME'
}

export type Address = {
  __typename?: 'Address';
  addressLine1?: Maybe<Scalars['String']>;
  addressLine2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

export type AddressInput = {
  addressLine1: Scalars['String'];
  addressLine2?: InputMaybe<Scalars['String']>;
  city: Scalars['String'];
  country: Scalars['String'];
  state: Scalars['String'];
  zip: Scalars['String'];
};

export type AnnualRevenue = {
  __typename?: 'AnnualRevenue';
  range?: Maybe<Scalars['String']>;
};

export type AnnualRevenueInput = {
  range: Scalars['String'];
};

/** Avatar link id input */
export type AvatarFileLinkInput = {
  /** This is @PutFileLink.id */
  id: Scalars['String'];
};

export type CompanyDraftAccountDetails = {
  __typename?: 'CompanyDraftAccountDetails';
  address?: Maybe<Address>;
  annualRevenue?: Maybe<AnnualRevenue>;
  companyDocuments?: Maybe<Array<Maybe<DocumentFileLinkId>>>;
  companyName?: Maybe<CompanyName>;
  companyType?: Maybe<CompanyType>;
  ein?: Maybe<Ein>;
  industry?: Maybe<Industry>;
  numberOfEmployees?: Maybe<NumberOfEmployees>;
  stakeholders?: Maybe<Array<Maybe<Stakeholder>>>;
};

export type CompanyName = {
  __typename?: 'CompanyName';
  name?: Maybe<Scalars['String']>;
};

export type CompanyNameInput = {
  name: Scalars['String'];
};

export type CompanyType = {
  __typename?: 'CompanyType';
  type?: Maybe<CompanyTypeEnum>;
};

export enum CompanyTypeEnum {
  Corporation = 'CORPORATION',
  Irrevocable = 'IRREVOCABLE',
  Llc = 'LLC',
  Partnership = 'PARTNERSHIP',
  Revocable = 'REVOCABLE'
}

export type CorporateAccount = {
  __typename?: 'CorporateAccount';
  avatar?: Maybe<GetAvatarLink>;
  details?: Maybe<CorporateAccountDetails>;
  id?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  positionTotal?: Maybe<Scalars['String']>;
};

export type CorporateAccountDetails = {
  __typename?: 'CorporateAccountDetails';
  address?: Maybe<Address>;
  annualRevenue?: Maybe<AnnualRevenue>;
  companyDocuments?: Maybe<Array<Maybe<DocumentFileLinkId>>>;
  companyName?: Maybe<CompanyName>;
  companyType?: Maybe<CompanyType>;
  ein?: Maybe<Scalars['String']>;
  industry?: Maybe<Industry>;
  numberOfEmployees?: Maybe<NumberOfEmployees>;
  stakeholders?: Maybe<Array<Maybe<Stakeholder>>>;
};

export type CorporateCompanyType = {
  __typename?: 'CorporateCompanyType';
  type?: Maybe<CorporateCompanyTypeEnum>;
};

export enum CorporateCompanyTypeEnum {
  Corporation = 'CORPORATION',
  Llc = 'LLC',
  Partnership = 'PARTNERSHIP'
}

export type CorporateCompanyTypeInput = {
  type: CorporateCompanyTypeEnum;
};

export type CorporateDraftAccount = {
  __typename?: 'CorporateDraftAccount';
  avatar?: Maybe<GetAvatarLink>;
  details?: Maybe<CompanyDraftAccountDetails>;
  id?: Maybe<Scalars['ID']>;
  isCompleted?: Maybe<Scalars['Boolean']>;
  state?: Maybe<DraftAccountState>;
};

export type CorporateDraftAccountInput = {
  address?: InputMaybe<AddressInput>;
  annualRevenue?: InputMaybe<AnnualRevenueInput>;
  /** IMPORTANT: it removes previously uploaded avatar from s3 for this draft account */
  avatar?: InputMaybe<AvatarFileLinkInput>;
  companyDocuments?: InputMaybe<Array<InputMaybe<DocumentFileLinkInput>>>;
  companyName?: InputMaybe<CompanyNameInput>;
  companyType?: InputMaybe<CorporateCompanyTypeInput>;
  ein?: InputMaybe<EinInput>;
  industry?: InputMaybe<IndustryInput>;
  numberOfEmployees?: InputMaybe<NumberOfEmployeesInput>;
  /** IMPORTANT: it removes these documents from s3 */
  removeDocuments?: InputMaybe<Array<InputMaybe<DocumentFileLinkInput>>>;
  /** IMPORTANT: it removes previously uploaded id scan documents from s3 for this stakeholder */
  removeStakeholders?: InputMaybe<Array<InputMaybe<StakeholderIdInput>>>;
  stakeholders?: InputMaybe<Array<InputMaybe<StakeholderInput>>>;
};

export type DateOfBirth = {
  __typename?: 'DateOfBirth';
  dateOfBirth: Scalars['ISODate'];
};

export type DateOfBirthInput = {
  dateOfBirth: Scalars['ISODate'];
};

/** Link id */
export type DocumentFileLinkId = {
  __typename?: 'DocumentFileLinkId';
  fileName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** Avatar link id input */
export type DocumentFileLinkInput = {
  /** File name should be in format: .pdf, .jpeg, .jpg, .png */
  fileName: Scalars['fileName_String_NotNull_pattern_pdfjpegjpgpng'];
  /** This is @PutFileLink.id */
  id: Scalars['String'];
};

export type Dollar = {
  __typename?: 'Dollar';
  display?: Maybe<Scalars['String']>;
  inCents?: Maybe<Scalars['Int']>;
};

export type DollarInput = {
  formatted?: InputMaybe<Scalars['String']>;
  inCents: Scalars['inCents_Int_NotNull_min_0'];
};

export type Domicile = {
  __typename?: 'Domicile';
  birthCountry?: Maybe<Scalars['String']>;
  citizenshipCountry?: Maybe<Scalars['String']>;
  type?: Maybe<DomicileType>;
  visaType?: Maybe<Scalars['String']>;
};

/**
 * An investor statement of domicile type.
 * Choose the right one and add details depending on the chosen type
 */
export type DomicileInput = {
  forGreenCard?: InputMaybe<GreenCardInput>;
  forVisa?: InputMaybe<VisaInput>;
  type: DomicileType;
};

export enum DomicileType {
  Citizen = 'CITIZEN',
  GreenCard = 'GREEN_CARD',
  Visa = 'VISA'
}

export type DraftAccount = {
  __typename?: 'DraftAccount';
  id?: Maybe<Scalars['ID']>;
  type?: Maybe<DraftAccountType>;
};

export enum DraftAccountState {
  Active = 'ACTIVE',
  Canceled = 'CANCELED',
  Opened = 'OPENED'
}

export enum DraftAccountType {
  Corporate = 'CORPORATE',
  Individual = 'INDIVIDUAL',
  Trust = 'TRUST'
}

export type Ein = {
  __typename?: 'EIN';
  ein?: Maybe<Scalars['String']>;
};

export type EinInput = {
  ein: Scalars['String'];
};

export type EmailInput = {
  email: Scalars['EmailAddress'];
};

export type Employer = {
  __typename?: 'Employer';
  industry?: Maybe<Scalars['String']>;
  nameOfEmployer?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type EmployerInput = {
  industry: Scalars['String'];
  nameOfEmployer: Scalars['String'];
  title: Scalars['String'];
};

export enum EmploymentStatus {
  Employed = 'EMPLOYED',
  Retired = 'RETIRED',
  Student = 'STUDENT',
  Unemployed = 'UNEMPLOYED'
}

export type EmploymentStatusInput = {
  status: EmploymentStatus;
};

export type EmploymentStatusType = {
  __typename?: 'EmploymentStatusType';
  status?: Maybe<EmploymentStatus>;
};

export enum Experience {
  Expert = 'EXPERT',
  NoExperience = 'NO_EXPERIENCE',
  SomeExperience = 'SOME_EXPERIENCE',
  VeryExperienced = 'VERY_EXPERIENCED'
}

export type ExperienceInput = {
  experience?: InputMaybe<Experience>;
};

export type FinraStatementInput = {
  name: Scalars['String'];
};

export type GenericFieldInput = {
  name: Scalars['String'];
  value: Scalars['String'];
};

/** Link id + url to read the avatar */
export type GetAvatarLink = {
  __typename?: 'GetAvatarLink';
  id?: Maybe<Scalars['String']>;
  initials?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** Link id + url to read the document */
export type GetDocumentLink = {
  __typename?: 'GetDocumentLink';
  id?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type GreenCardInput = {
  birthCountry: Scalars['String'];
  citizenshipCountry: Scalars['String'];
};

export type IndividualAccount = {
  __typename?: 'IndividualAccount';
  avatar?: Maybe<GetAvatarLink>;
  details?: Maybe<IndividualAccountDetails>;
  id?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  positionTotal?: Maybe<Scalars['String']>;
};

export type IndividualAccountDetails = {
  __typename?: 'IndividualAccountDetails';
  employer?: Maybe<Employer>;
  employmentStatus?: Maybe<EmploymentStatusType>;
  netIncome?: Maybe<NetRange>;
  netWorth?: Maybe<NetRange>;
};

export type IndividualAccountInput = {
  /** IMPORTANT: it removes previously uploaded avatar from s3 for this draft account */
  avatar?: InputMaybe<AvatarFileLinkInput>;
  employer?: InputMaybe<EmployerInput>;
  employmentStatus?: InputMaybe<EmploymentStatusInput>;
  netIncome?: InputMaybe<NetRangeInput>;
  netWorth?: InputMaybe<NetRangeInput>;
};

export type IndividualDraftAccount = {
  __typename?: 'IndividualDraftAccount';
  avatar?: Maybe<GetAvatarLink>;
  details?: Maybe<IndividualDraftAccountDetails>;
  id?: Maybe<Scalars['ID']>;
  isCompleted?: Maybe<Scalars['Boolean']>;
  state?: Maybe<DraftAccountState>;
};

export type IndividualDraftAccountDetails = {
  __typename?: 'IndividualDraftAccountDetails';
  employer?: Maybe<Employer>;
  employmentStatus?: Maybe<EmploymentStatusType>;
  netIncome?: Maybe<NetRange>;
  netWorth?: Maybe<NetRange>;
};

export type Industry = {
  __typename?: 'Industry';
  value?: Maybe<Scalars['String']>;
};

export type IndustryInput = {
  value: Scalars['String'];
};

export type LegalNameInput = {
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Complete corporate draft account */
  completeCorporateDraftAccount?: Maybe<CorporateDraftAccount>;
  /** Complete individual draft account */
  completeIndividualDraftAccount?: Maybe<IndividualDraftAccount>;
  /**
   * Profile onboarding mutation.
   * Every field in the input can be requested separately.
   * In case of any failure all changes in the request are not stored in the database.
   * To finish onboarding send field 'verifyAndFinish'
   */
  completeProfileDetails?: Maybe<Profile>;
  /** Complete trust draft account */
  completeTrustDraftAccount?: Maybe<TrustDraftAccount>;
  /**
   * Create file links for avatar.
   * In the response, it returns the "id" and "url".
   * Use "url" for PUT request to upload the avatar directly to AWS S3. The url has expiration date!
   * Use "id" wherever system needs the reference to the avatar file.
   */
  createAvatarFileLink?: Maybe<PutFileLink>;
  /**
   * Create file links for documents.
   * In the response, it returns the "id" and "url".
   * Use "url" for PUT request to upload the file directly to AWS S3. The url has expiration date!
   * Use "id" wherever system needs the reference to uploaded file.
   */
  createDocumentsFileLinks?: Maybe<Array<Maybe<PutFileLink>>>;
  /**
   * Create draft of an account to fulfill with data before open it.
   * You can have only one draft account created of a specific type in the same time.
   */
  createDraftAccount?: Maybe<DraftAccount>;
  /**
   * Open REINVEST Account based on draft.
   * Currently supported: Individual Account
   */
  openAccount?: Maybe<Scalars['Boolean']>;
  /**
   * Remove draft account
   * IMPORTANT: it removes all uploaded avatar and documents from s3 for this draft account
   */
  removeDraftAccount?: Maybe<Scalars['Boolean']>;
  /**
   * Add phone number. The system will send the verification code to the provided phone number via sms.
   * Token will be valid for 10 minutes and can be used only once.
   * After 3 failed attempts the token will be expired.
   * Optional field isSmsAllowed set to false will prevent sending sms with verification code (for test purposes).
   * On default isSmsAllowed is true.
   */
  setPhoneNumber?: Maybe<Scalars['Boolean']>;
  /** [WIP] */
  signDocumentFromTemplate?: Maybe<SignatureId>;
  /**
   * Verify phone number with received verification code on sms.
   * This action will set the phone number in the user Cognito profile and allow to use 2FA with phone number
   */
  verifyPhoneNumber?: Maybe<Scalars['Boolean']>;
};


export type MutationCompleteCorporateDraftAccountArgs = {
  accountId?: InputMaybe<Scalars['ID']>;
  input?: InputMaybe<CorporateDraftAccountInput>;
};


export type MutationCompleteIndividualDraftAccountArgs = {
  accountId?: InputMaybe<Scalars['ID']>;
  input?: InputMaybe<IndividualAccountInput>;
};


export type MutationCompleteProfileDetailsArgs = {
  input?: InputMaybe<ProfileDetailsInput>;
};


export type MutationCompleteTrustDraftAccountArgs = {
  accountId?: InputMaybe<Scalars['ID']>;
  input?: InputMaybe<TrustDraftAccountInput>;
};


export type MutationCreateDocumentsFileLinksArgs = {
  numberOfLinks: Scalars['numberOfLinks_Int_NotNull_min_1_max_10'];
};


export type MutationCreateDraftAccountArgs = {
  type?: InputMaybe<DraftAccountType>;
};


export type MutationOpenAccountArgs = {
  draftAccountId?: InputMaybe<Scalars['String']>;
};


export type MutationRemoveDraftAccountArgs = {
  draftAccountId?: InputMaybe<Scalars['ID']>;
};


export type MutationSetPhoneNumberArgs = {
  countryCode?: InputMaybe<Scalars['String']>;
  isSmsAllowed?: InputMaybe<Scalars['Boolean']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
};


export type MutationSignDocumentFromTemplateArgs = {
  fields: Array<InputMaybe<GenericFieldInput>>;
  signature: Scalars['String'];
  templateId: TemplateName;
};


export type MutationVerifyPhoneNumberArgs = {
  authCode?: InputMaybe<Scalars['String']>;
  countryCode?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
};

export type NetRange = {
  __typename?: 'NetRange';
  range?: Maybe<Scalars['String']>;
};

export type NetRangeInput = {
  range: Scalars['String'];
};

export type NumberOfEmployees = {
  __typename?: 'NumberOfEmployees';
  range?: Maybe<Scalars['String']>;
};

export type NumberOfEmployeesInput = {
  range: Scalars['String'];
};

export type PersonName = {
  firstName: Scalars['firstName_String_NotNull_minLength_1'];
  lastName: Scalars['lastName_String_NotNull_minLength_1'];
  middleName?: InputMaybe<Scalars['String']>;
};

export type PersonNameType = {
  __typename?: 'PersonNameType';
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
};

export type PoliticianStatementInput = {
  description: Scalars['String'];
};

export type PrivacyPolicyInput = {
  statement: PrivacyPolicyStatement;
};

export enum PrivacyPolicyStatement {
  IHaveReadAndAgreeToTheReinvestPrivacyPolicy = 'I_HAVE_READ_AND_AGREE_TO_THE_REINVEST_PRIVACY_POLICY'
}

/**
 * An investor profile information.
 * Returns data about investor details, accounts and notifications
 */
export type Profile = {
  __typename?: 'Profile';
  accounts?: Maybe<Array<Maybe<AccountOverview>>>;
  details?: Maybe<ProfileDetails>;
  /** The external, nice-looking profile ID */
  externalId?: Maybe<Scalars['String']>;
  isCompleted?: Maybe<Scalars['Boolean']>;
  /** The name/label of the user */
  label?: Maybe<Scalars['String']>;
};

export type ProfileDetails = {
  __typename?: 'ProfileDetails';
  address?: Maybe<Address>;
  dateOfBirth?: Maybe<Scalars['String']>;
  domicile?: Maybe<Domicile>;
  experience?: Maybe<Experience>;
  firstName?: Maybe<Scalars['String']>;
  idScan?: Maybe<Array<Maybe<DocumentFileLinkId>>>;
  lastName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  ssn?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Statement>>>;
};

export type ProfileDetailsInput = {
  /** Permanent address of an investor */
  address?: InputMaybe<AddressInput>;
  /** Date of Birth in format YYYY-MM-DD */
  dateOfBirth?: InputMaybe<DateOfBirthInput>;
  /** Is the investor US. Citizen or US. Resident with Green Card or Visa */
  domicile?: InputMaybe<DomicileInput>;
  /**
   * ID scan can be provided in more then one document, ie. 2 scans of both sides of the ID.
   * Required "id" provided in the @FileLink type from the @createDocumentsFileLinks mutation
   * IMPORTANT: it removes previously uploaded id scan documents from s3 if the previous document ids are not listed in the request
   */
  idScan?: InputMaybe<Array<InputMaybe<DocumentFileLinkInput>>>;
  investingExperience?: InputMaybe<ExperienceInput>;
  /** An investor name */
  name?: InputMaybe<PersonName>;
  /** If an investor decided to remove one of the statements during onboarding */
  removeStatements?: InputMaybe<Array<InputMaybe<StatementInput>>>;
  /** A valid SSN number */
  ssn?: InputMaybe<SsnInput>;
  /**
   * FINRA, Politician, Trading company stakeholder, accredited investor, terms and conditions, privacy policy statements
   * REQUIRED statements to complete the profile:
   * - accredited investor
   * - terms and conditions
   * - privacy policy
   */
  statements?: InputMaybe<Array<InputMaybe<StatementInput>>>;
  /** Send this field if you want to finish the onboarding. In case of success verification, onboarding will be considered as completed */
  verifyAndFinish?: InputMaybe<Scalars['Boolean']>;
};

/** Link id + PUT url to store resource in the storage */
export type PutFileLink = {
  __typename?: 'PutFileLink';
  id?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  /**
   * Return all accounts overview
   * [PARTIAL_MOCK] Position total is still mocked!!
   */
  getAccountsOverview?: Maybe<Array<Maybe<AccountOverview>>>;
  /**
   * Returns corporate account information
   * [PARTIAL_MOCK] Position total is still mocked!!
   */
  getCorporateAccount?: Maybe<CorporateAccount>;
  /** Get draft corporate account details */
  getCorporateDraftAccount?: Maybe<CorporateDraftAccount>;
  /** Returns document link by id */
  getDocument?: Maybe<GetDocumentLink>;
  /**
   * Returns individual account information
   * [PARTIAL_MOCK] Position total is still mocked!!
   */
  getIndividualAccount?: Maybe<IndividualAccount>;
  /** Get details of individual draft account */
  getIndividualDraftAccount?: Maybe<IndividualDraftAccount>;
  /** Get user profile */
  getProfile?: Maybe<Profile>;
  /** [WIP] */
  getTemplate?: Maybe<Template>;
  /**
   * Returns trust account information
   * [PARTIAL_MOCK] Position total is still mocked!!
   */
  getTrustAccount?: Maybe<TrustAccount>;
  /** Get draft trust account details */
  getTrustDraftAccount?: Maybe<TrustDraftAccount>;
  /**  Just say hello  */
  hello?: Maybe<Scalars['Boolean']>;
  /** List all existing draft accounts if you need come back to onboarding */
  listAccountDrafts?: Maybe<Array<Maybe<DraftAccount>>>;
  /** Returns list of account types that user can open */
  listAccountTypesUserCanOpen?: Maybe<Array<Maybe<AccountType>>>;
  /** [MOCK] Returns information if user already assigned and verified phone number */
  phoneCompleted?: Maybe<Scalars['Boolean']>;
  /** Returns invitation link with a valid referral code (incentive token) */
  userInvitationLink?: Maybe<UserInvitationLink>;
};


export type QueryGetCorporateAccountArgs = {
  accountId?: InputMaybe<Scalars['String']>;
};


export type QueryGetCorporateDraftAccountArgs = {
  accountId?: InputMaybe<Scalars['ID']>;
};


export type QueryGetDocumentArgs = {
  documentId: Scalars['String'];
};


export type QueryGetIndividualDraftAccountArgs = {
  accountId?: InputMaybe<Scalars['ID']>;
};


export type QueryGetTemplateArgs = {
  templateName?: InputMaybe<TemplateName>;
};


export type QueryGetTrustAccountArgs = {
  accountId?: InputMaybe<Scalars['String']>;
};


export type QueryGetTrustDraftAccountArgs = {
  accountId?: InputMaybe<Scalars['ID']>;
};

export type SsnInput = {
  /** The valid SSN is 9 digits in format 'XXX-XX-XXXX' */
  ssn: Scalars['ssn_String_NotNull_pattern_093092094'];
};

export type SignatureId = {
  __typename?: 'SignatureId';
  signatureId?: Maybe<Scalars['String']>;
};

export type SimplifiedDomicile = {
  __typename?: 'SimplifiedDomicile';
  type?: Maybe<SimplifiedDomicileType>;
};

export type SimplifiedDomicileInput = {
  type: SimplifiedDomicileType;
};

export enum SimplifiedDomicileType {
  Citizen = 'CITIZEN',
  Resident = 'RESIDENT'
}

export type Stakeholder = {
  __typename?: 'Stakeholder';
  address?: Maybe<Address>;
  dateOfBirth?: Maybe<DateOfBirth>;
  domicile?: Maybe<SimplifiedDomicile>;
  id?: Maybe<Scalars['ID']>;
  idScan?: Maybe<Array<Maybe<DocumentFileLinkId>>>;
  label?: Maybe<Scalars['String']>;
  name?: Maybe<PersonNameType>;
  ssn?: Maybe<Scalars['String']>;
};

export type StakeholderIdInput = {
  id: Scalars['ID'];
};

export type StakeholderInput = {
  address: AddressInput;
  dateOfBirth: DateOfBirthInput;
  domicile: SimplifiedDomicileInput;
  /** IMPORTANT: it removes previously uploaded id scan documents from s3 if the previous document ids are not listed in the request */
  idScan: Array<InputMaybe<DocumentFileLinkInput>>;
  name: PersonName;
  ssn?: SsnInput;
};

export type Statement = {
  __typename?: 'Statement';
  details?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<StatementType>;
};

/**
 * An investor statements for:
 * - being a FINRA member
 * - politician
 * - public trading company stakeholder
 * - accredited investor
 * - terms and conditions
 * - privacy policy
 * Choose type and add details depending on the chosen type
 */
export type StatementInput = {
  forAccreditedInvestor?: InputMaybe<AccreditedInvestorInput>;
  forFINRA?: InputMaybe<FinraStatementInput>;
  forPolitician?: InputMaybe<PoliticianStatementInput>;
  forPrivacyPolicy?: InputMaybe<PrivacyPolicyInput>;
  forStakeholder?: InputMaybe<TradingCompanyStakeholderInput>;
  forTermsAndConditions?: InputMaybe<TermsAndConditionsInput>;
  type: StatementType;
};

export enum StatementType {
  AccreditedInvestor = 'AccreditedInvestor',
  FinraMember = 'FINRAMember',
  Politician = 'Politician',
  PrivacyPolicy = 'PrivacyPolicy',
  TermsAndConditions = 'TermsAndConditions',
  TradingCompanyStakeholder = 'TradingCompanyStakeholder'
}

export type Template = {
  __typename?: 'Template';
  content?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  templateName?: Maybe<TemplateName>;
};

export enum TemplateName {
  AutoReinvestmentAgreement = 'AUTO_REINVESTMENT_AGREEMENT',
  SubscriptionAgreement = 'SUBSCRIPTION_AGREEMENT'
}

export type TermsAndConditionsInput = {
  statement: TermsAndConditionsStatement;
};

export enum TermsAndConditionsStatement {
  IHaveReadAndAgreeToTheReinvestTermsAndConditions = 'I_HAVE_READ_AND_AGREE_TO_THE_REINVEST_TERMS_AND_CONDITIONS'
}

export type TradingCompanyStakeholderInput = {
  tickerSymbols: Array<Scalars['String']>;
};

export type TrustAccount = {
  __typename?: 'TrustAccount';
  avatar?: Maybe<GetAvatarLink>;
  details?: Maybe<TrustAccountDetails>;
  id?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  positionTotal?: Maybe<Scalars['String']>;
};

export type TrustAccountDetails = {
  __typename?: 'TrustAccountDetails';
  address?: Maybe<Address>;
  annualRevenue?: Maybe<AnnualRevenue>;
  companyDocuments?: Maybe<Array<Maybe<DocumentFileLinkId>>>;
  companyName?: Maybe<CompanyName>;
  companyType?: Maybe<CompanyType>;
  ein?: Maybe<Scalars['String']>;
  industry?: Maybe<Industry>;
  numberOfEmployees?: Maybe<NumberOfEmployees>;
  stakeholders?: Maybe<Array<Maybe<Stakeholder>>>;
};

export type TrustCompanyType = {
  __typename?: 'TrustCompanyType';
  type?: Maybe<TrustCompanyTypeEnum>;
};

export enum TrustCompanyTypeEnum {
  Irrevocable = 'IRREVOCABLE',
  Revocable = 'REVOCABLE'
}

export type TrustCompanyTypeInput = {
  type: TrustCompanyTypeEnum;
};

export type TrustDraftAccount = {
  __typename?: 'TrustDraftAccount';
  avatar?: Maybe<GetAvatarLink>;
  details?: Maybe<CompanyDraftAccountDetails>;
  id?: Maybe<Scalars['ID']>;
  isCompleted?: Maybe<Scalars['Boolean']>;
  state?: Maybe<DraftAccountState>;
};

export type TrustDraftAccountInput = {
  address?: InputMaybe<AddressInput>;
  annualRevenue?: InputMaybe<AnnualRevenueInput>;
  /** IMPORTANT: it removes previously uploaded avatar from s3 for this draft account */
  avatar?: InputMaybe<AvatarFileLinkInput>;
  companyDocuments?: InputMaybe<Array<InputMaybe<DocumentFileLinkInput>>>;
  companyName?: InputMaybe<CompanyNameInput>;
  companyType?: InputMaybe<TrustCompanyTypeInput>;
  ein?: InputMaybe<EinInput>;
  industry?: InputMaybe<IndustryInput>;
  numberOfEmployees?: InputMaybe<NumberOfEmployeesInput>;
  /** IMPORTANT: it removes these documents from s3 */
  removeDocuments?: InputMaybe<Array<InputMaybe<DocumentFileLinkInput>>>;
  /** IMPORTANT: it removes previously uploaded id scan documents from s3 for this stakeholder */
  removeStakeholders?: InputMaybe<Array<InputMaybe<StakeholderIdInput>>>;
  stakeholders?: InputMaybe<Array<InputMaybe<StakeholderInput>>>;
};

/** User invitation/referral/incentive token link to share with others */
export type UserInvitationLink = {
  __typename?: 'UserInvitationLink';
  url?: Maybe<Scalars['String']>;
};

export type VisaInput = {
  birthCountry: Scalars['String'];
  citizenshipCountry: Scalars['String'];
  visaType: Scalars['String'];
};
