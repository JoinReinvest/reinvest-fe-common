type Maybe<T> = T | null;
type InputMaybe<T> = Maybe<T>;
type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
type Scalars = {
    Boolean: boolean;
    EmailAddress: any;
    Float: number;
    ID: string;
    ISODate: any;
    Int: number;
    String: string;
    firstName_String_NotNull_minLength_1: any;
    inCents_Int_NotNull_min_0: any;
    lastName_String_NotNull_minLength_1: any;
    numberOfLinks_Int_NotNull_min_1_max_10: any;
    ssn_String_NotNull_pattern_093092094: any;
};
type AccountOverview = {
    __typename?: 'AccountOverview';
    avatar?: Maybe<GetAvatarLink>;
    id?: Maybe<Scalars['String']>;
    positionTotal?: Maybe<Scalars['String']>;
    type?: Maybe<Scalars['String']>;
};
declare enum AccountType {
    Beneficiary = "BENEFICIARY",
    Corporate = "CORPORATE",
    Individual = "INDIVIDUAL",
    Trust = "TRUST"
}
type AccreditedInvestorInput = {
    statement: AccreditedInvestorStatement;
};
declare enum AccreditedInvestorStatement {
    IAmAnAccreditedInvestor = "I_AM_AN_ACCREDITED_INVESTOR",
    IAmNotExceeding_10PercentOfMyNetWorthOrAnnualIncome = "I_AM_NOT_EXCEEDING_10_PERCENT_OF_MY_NET_WORTH_OR_ANNUAL_INCOME"
}
type Address = {
    __typename?: 'Address';
    addressLine1?: Maybe<Scalars['String']>;
    addressLine2?: Maybe<Scalars['String']>;
    city?: Maybe<Scalars['String']>;
    country?: Maybe<Scalars['String']>;
    state?: Maybe<Scalars['String']>;
    zip?: Maybe<Scalars['String']>;
};
type AddressInput = {
    addressLine1: Scalars['String'];
    city: Scalars['String'];
    country: Scalars['String'];
    state: Scalars['String'];
    zip: Scalars['String'];
    addressLine2?: InputMaybe<Scalars['String']>;
};
type AnnualRevenueInput = {
    revenue: Scalars['String'];
};
type CompanyNameInput = {
    name: Scalars['String'];
};
declare enum CorporateCompanyType {
    Corporation = "CORPORATION",
    Llc = "LLC",
    Partnership = "PARTNERSHIP"
}
type CorporateCompanyTypeInput = {
    type: CorporateCompanyType;
};
type CorporateDraftAccount = {
    __typename?: 'CorporateDraftAccount';
    address?: Maybe<Address>;
    annualRevenue?: Maybe<Scalars['String']>;
    avatar?: Maybe<GetAvatarLink>;
    companyDocuments?: Maybe<Array<Maybe<FileLinkId>>>;
    companyType?: Maybe<CorporateCompanyType>;
    ein?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['ID']>;
    industry?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    numberOfEmployees?: Maybe<Scalars['String']>;
    stakeholders?: Maybe<Array<Maybe<Stakeholder>>>;
};
type CorporateDraftAccountInput = {
    address?: InputMaybe<AddressInput>;
    annualRevenue?: InputMaybe<AnnualRevenueInput>;
    avatar?: InputMaybe<FileLinkInput>;
    companyDocuments?: InputMaybe<Array<InputMaybe<FileLinkInput>>>;
    companyType?: InputMaybe<CorporateCompanyTypeInput>;
    ein?: InputMaybe<EinInput>;
    industry?: InputMaybe<IndustryInput>;
    name?: InputMaybe<CompanyNameInput>;
    numberOfEmployees?: InputMaybe<NumberOfEmployeesInput>;
    removeDocuments?: InputMaybe<Array<InputMaybe<FileLinkInput>>>;
    removeStakeholders?: InputMaybe<Array<InputMaybe<SsnInput>>>;
    stakeholders?: InputMaybe<Array<InputMaybe<StakeholderInput>>>;
};
type Dollar = {
    __typename?: 'Dollar';
    display?: Maybe<Scalars['String']>;
    inCents?: Maybe<Scalars['Int']>;
};
type DollarInput = {
    inCents: Scalars['inCents_Int_NotNull_min_0'];
    formatted?: InputMaybe<Scalars['String']>;
};
type Domicile = {
    __typename?: 'Domicile';
    birthCountry?: Maybe<Scalars['String']>;
    citizenshipCountry?: Maybe<Scalars['String']>;
    type?: Maybe<DomicileType>;
    visaType?: Maybe<Scalars['String']>;
};
type DomicileInput = {
    type: DomicileType;
    forGreenCard?: InputMaybe<GreenCardInput>;
    forVisa?: InputMaybe<VisaInput>;
};
declare enum DomicileType {
    Citizen = "CITIZEN",
    GreenCard = "GREEN_CARD",
    Visa = "VISA"
}
type DraftAccount = {
    __typename?: 'DraftAccount';
    id?: Maybe<Scalars['ID']>;
    type?: Maybe<DraftAccountType>;
};
declare enum DraftAccountState {
    Active = "ACTIVE",
    Canceled = "CANCELED",
    Opened = "OPENED"
}
declare enum DraftAccountType {
    Corporate = "CORPORATE",
    Individual = "INDIVIDUAL",
    Trust = "TRUST"
}
type EinInput = {
    ein: Scalars['String'];
};
type EmailInput = {
    email: Scalars['EmailAddress'];
};
type Employer = {
    __typename?: 'Employer';
    industry?: Maybe<Scalars['String']>;
    nameOfEmployer?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
};
type EmployerInput = {
    industry: Scalars['String'];
    nameOfEmployer: Scalars['String'];
    title: Scalars['String'];
};
declare enum EmploymentStatus {
    Employed = "EMPLOYED",
    Retired = "RETIRED",
    Student = "STUDENT",
    Unemployed = "UNEMPLOYED"
}
type EmploymentStatusInput = {
    status: EmploymentStatus;
};
type EmploymentStatusType = {
    __typename?: 'EmploymentStatusType';
    status?: Maybe<EmploymentStatus>;
};
declare enum Experience {
    Expert = "EXPERT",
    NoExperience = "NO_EXPERIENCE",
    SomeExperience = "SOME_EXPERIENCE",
    VeryExperienced = "VERY_EXPERIENCED"
}
type ExperienceInput = {
    experience?: InputMaybe<Experience>;
};
type FinraStatementInput = {
    name: Scalars['String'];
};
type FileLinkId = {
    __typename?: 'FileLinkId';
    id?: Maybe<Scalars['String']>;
};
type FileLinkInput = {
    id: Scalars['String'];
};
type GenericFieldInput = {
    name: Scalars['String'];
    value: Scalars['String'];
};
type GetAvatarLink = {
    __typename?: 'GetAvatarLink';
    id?: Maybe<Scalars['String']>;
    initials?: Maybe<Scalars['String']>;
    url?: Maybe<Scalars['String']>;
};
type GetDocumentLink = {
    __typename?: 'GetDocumentLink';
    id?: Maybe<Scalars['String']>;
    url?: Maybe<Scalars['String']>;
};
type GreenCardInput = {
    birthCountry: Scalars['String'];
    citizenshipCountry: Scalars['String'];
};
type IndividualAccount = {
    __typename?: 'IndividualAccount';
    avatar?: Maybe<GetAvatarLink>;
    details?: Maybe<IndividualAccountDetails>;
    id?: Maybe<Scalars['String']>;
    positionTotal?: Maybe<Scalars['String']>;
};
type IndividualAccountDetails = {
    __typename?: 'IndividualAccountDetails';
    employer?: Maybe<Employer>;
    employmentStatus?: Maybe<EmploymentStatusType>;
    netIncome?: Maybe<NetRange>;
    netWorth?: Maybe<NetRange>;
};
type IndividualAccountInput = {
    avatar?: InputMaybe<FileLinkInput>;
    employer?: InputMaybe<EmployerInput>;
    employmentStatus?: InputMaybe<EmploymentStatusInput>;
    netIncome?: InputMaybe<NetRangeInput>;
    netWorth?: InputMaybe<NetRangeInput>;
    verifyAndFinish?: InputMaybe<Scalars['Boolean']>;
};
type IndividualDraftAccount = {
    __typename?: 'IndividualDraftAccount';
    avatar?: Maybe<GetAvatarLink>;
    details?: Maybe<IndividualDraftAccountDetails>;
    id?: Maybe<Scalars['ID']>;
    isCompleted?: Maybe<Scalars['Boolean']>;
    state?: Maybe<DraftAccountState>;
};
type IndividualDraftAccountDetails = {
    __typename?: 'IndividualDraftAccountDetails';
    employer?: Maybe<Employer>;
    employmentStatus?: Maybe<EmploymentStatusType>;
    netIncome?: Maybe<NetRange>;
    netWorth?: Maybe<NetRange>;
};
type IndustryInput = {
    industry: Scalars['String'];
};
type LegalNameInput = {
    name: Scalars['String'];
};
type Mutation = {
    __typename?: 'Mutation';
    completeCorporateDraftAccount?: Maybe<CorporateDraftAccount>;
    completeIndividualDraftAccount?: Maybe<IndividualDraftAccount>;
    completeProfileDetails?: Maybe<Profile>;
    completeTrustDraftAccount?: Maybe<TrustDraftAccount>;
    createAvatarFileLink?: Maybe<PutFileLink>;
    createDocumentsFileLinks?: Maybe<Array<Maybe<PutFileLink>>>;
    createDraftAccount?: Maybe<DraftAccount>;
    openAccount?: Maybe<Scalars['Boolean']>;
    removeDraftAccount?: Maybe<Scalars['Boolean']>;
    setPhoneNumber?: Maybe<Scalars['Boolean']>;
    signDocumentFromTemplate?: Maybe<SignatureId>;
    verifyPhoneNumber?: Maybe<Scalars['Boolean']>;
};
type MutationCompleteCorporateDraftAccountArgs = {
    accountId?: InputMaybe<Scalars['ID']>;
    input?: InputMaybe<CorporateDraftAccountInput>;
};
type MutationCompleteIndividualDraftAccountArgs = {
    accountId?: InputMaybe<Scalars['ID']>;
    input?: InputMaybe<IndividualAccountInput>;
};
type MutationCompleteProfileDetailsArgs = {
    input?: InputMaybe<ProfileDetailsInput>;
};
type MutationCompleteTrustDraftAccountArgs = {
    accountId?: InputMaybe<Scalars['ID']>;
    input?: InputMaybe<TrustDraftAccountInput>;
};
type MutationCreateDocumentsFileLinksArgs = {
    numberOfLinks: Scalars['numberOfLinks_Int_NotNull_min_1_max_10'];
};
type MutationCreateDraftAccountArgs = {
    type?: InputMaybe<DraftAccountType>;
};
type MutationOpenAccountArgs = {
    draftAccountId?: InputMaybe<Scalars['String']>;
};
type MutationRemoveDraftAccountArgs = {
    draftAccountId?: InputMaybe<Scalars['ID']>;
};
type MutationSetPhoneNumberArgs = {
    countryCode?: InputMaybe<Scalars['String']>;
    phoneNumber?: InputMaybe<Scalars['String']>;
};
type MutationSignDocumentFromTemplateArgs = {
    fields: Array<InputMaybe<GenericFieldInput>>;
    signature: Scalars['String'];
    templateId: TemplateName;
};
type MutationVerifyPhoneNumberArgs = {
    authCode?: InputMaybe<Scalars['String']>;
    countryCode?: InputMaybe<Scalars['String']>;
    phoneNumber?: InputMaybe<Scalars['String']>;
};
type NetRange = {
    __typename?: 'NetRange';
    range?: Maybe<Scalars['String']>;
};
type NetRangeInput = {
    range: Scalars['String'];
};
type NumberOfEmployeesInput = {
    numberOfEmployees: Scalars['String'];
};
type PersonName = {
    firstName: Scalars['firstName_String_NotNull_minLength_1'];
    lastName: Scalars['lastName_String_NotNull_minLength_1'];
    middleName?: InputMaybe<Scalars['String']>;
};
type PoliticianStatementInput = {
    description: Scalars['String'];
};
type Profile = {
    __typename?: 'Profile';
    accounts?: Maybe<Array<Maybe<AccountOverview>>>;
    details?: Maybe<ProfileDetails>;
    externalId?: Maybe<Scalars['String']>;
    isCompleted?: Maybe<Scalars['Boolean']>;
    label?: Maybe<Scalars['String']>;
};
type ProfileDetails = {
    __typename?: 'ProfileDetails';
    address?: Maybe<Address>;
    dateOfBirth?: Maybe<Scalars['String']>;
    domicile?: Maybe<Domicile>;
    experience?: Maybe<Experience>;
    firstName?: Maybe<Scalars['String']>;
    idScan?: Maybe<Array<Maybe<FileLinkId>>>;
    lastName?: Maybe<Scalars['String']>;
    middleName?: Maybe<Scalars['String']>;
    ssn?: Maybe<Scalars['String']>;
    statements?: Maybe<Array<Maybe<Statement>>>;
};
type ProfileDetailsInput = {
    address?: InputMaybe<AddressInput>;
    dateOfBirth?: InputMaybe<Scalars['ISODate']>;
    domicile?: InputMaybe<DomicileInput>;
    idScan?: InputMaybe<Array<InputMaybe<FileLinkInput>>>;
    investingExperience?: InputMaybe<ExperienceInput>;
    name?: InputMaybe<PersonName>;
    removeStatements?: InputMaybe<Array<InputMaybe<StatementInput>>>;
    ssn?: InputMaybe<SsnInput>;
    statements?: InputMaybe<Array<InputMaybe<StatementInput>>>;
    verifyAndFinish?: InputMaybe<Scalars['Boolean']>;
};
type PutFileLink = {
    __typename?: 'PutFileLink';
    id?: Maybe<Scalars['String']>;
    url?: Maybe<Scalars['String']>;
};
type Query = {
    __typename?: 'Query';
    getAccountsOverview?: Maybe<Array<Maybe<AccountOverview>>>;
    getCorporateDraftAccount?: Maybe<CorporateDraftAccount>;
    getIndividualAccount?: Maybe<IndividualAccount>;
    getIndividualDraftAccount?: Maybe<IndividualDraftAccount>;
    getProfile?: Maybe<Profile>;
    getTemplate?: Maybe<Template>;
    getTrustDraftAccount?: Maybe<TrustDraftAccount>;
    hello?: Maybe<Scalars['Boolean']>;
    listAccountDrafts?: Maybe<Array<Maybe<DraftAccount>>>;
    listAccountTypesUserCanOpen?: Maybe<Array<Maybe<AccountType>>>;
    phoneCompleted?: Maybe<Scalars['Boolean']>;
    userInvitationLink?: Maybe<UserInvitationLink>;
};
type QueryGetCorporateDraftAccountArgs = {
    accountId?: InputMaybe<Scalars['ID']>;
};
type QueryGetIndividualAccountArgs = {
    accountId?: InputMaybe<Scalars['String']>;
};
type QueryGetIndividualDraftAccountArgs = {
    accountId?: InputMaybe<Scalars['ID']>;
};
type QueryGetTemplateArgs = {
    templateName?: InputMaybe<TemplateName>;
};
type QueryGetTrustDraftAccountArgs = {
    accountId?: InputMaybe<Scalars['ID']>;
};
type SsnInput = {
    ssn: Scalars['ssn_String_NotNull_pattern_093092094'];
};
type SignatureId = {
    __typename?: 'SignatureId';
    signatureId?: Maybe<Scalars['String']>;
};
type Stakeholder = {
    __typename?: 'Stakeholder';
    address?: Maybe<Address>;
    dateOfBirth?: Maybe<Scalars['ISODate']>;
    domicile?: Maybe<Domicile>;
    email?: Maybe<Scalars['EmailAddress']>;
    idScan?: Maybe<Array<Maybe<FileLinkId>>>;
    legalName?: Maybe<Scalars['String']>;
    ssn?: Maybe<Scalars['String']>;
};
type StakeholderInput = {
    address: AddressInput;
    dateOfBirth: Scalars['ISODate'];
    domicile: DomicileInput;
    idScan: Array<InputMaybe<FileLinkInput>>;
    legalName: LegalNameInput;
    ssn: SsnInput;
    email?: InputMaybe<EmailInput>;
};
type Statement = {
    __typename?: 'Statement';
    details?: Maybe<Array<Maybe<Scalars['String']>>>;
    type?: Maybe<StatementType>;
};
type StatementInput = {
    type: StatementType;
    forAccreditedInvestor?: InputMaybe<AccreditedInvestorInput>;
    forFINRA?: InputMaybe<FinraStatementInput>;
    forPolitician?: InputMaybe<PoliticianStatementInput>;
    forStakeholder?: InputMaybe<TradingCompanyStakeholderInput>;
};
declare enum StatementType {
    AccreditedInvestor = "AccreditedInvestor",
    FinraMember = "FINRAMember",
    Politician = "Politician",
    TradingCompanyStakeholder = "TradingCompanyStakeholder"
}
type Template = {
    __typename?: 'Template';
    content?: Maybe<Scalars['String']>;
    fields?: Maybe<Array<Maybe<Scalars['String']>>>;
    templateName?: Maybe<TemplateName>;
};
declare enum TemplateName {
    AutoReinvestmentAgreement = "AUTO_REINVESTMENT_AGREEMENT",
    SubscriptionAgreement = "SUBSCRIPTION_AGREEMENT"
}
type TradingCompanyStakeholderInput = {
    tickerSymbols: Array<Scalars['String']>;
};
declare enum TrustCompanyType {
    Irrevocable = "IRREVOCABLE",
    Revocable = "REVOCABLE"
}
type TrustCompanyTypeInput = {
    type?: InputMaybe<TrustCompanyType>;
};
type TrustDraftAccount = {
    __typename?: 'TrustDraftAccount';
    address?: Maybe<Address>;
    annualRevenue?: Maybe<Scalars['String']>;
    avatar?: Maybe<GetAvatarLink>;
    companyDocuments?: Maybe<Array<Maybe<FileLinkId>>>;
    companyType?: Maybe<TrustCompanyType>;
    ein?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['ID']>;
    industry?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    numberOfEmployees?: Maybe<Scalars['String']>;
    stakeholders?: Maybe<Array<Maybe<Stakeholder>>>;
};
type TrustDraftAccountInput = {
    address?: InputMaybe<AddressInput>;
    annualRevenue?: InputMaybe<AnnualRevenueInput>;
    avatar?: InputMaybe<FileLinkInput>;
    companyDocuments?: InputMaybe<Array<InputMaybe<FileLinkInput>>>;
    companyType?: InputMaybe<TrustCompanyTypeInput>;
    ein?: InputMaybe<EinInput>;
    industry?: InputMaybe<IndustryInput>;
    name?: InputMaybe<CompanyNameInput>;
    numberOfEmployees?: InputMaybe<NumberOfEmployeesInput>;
    removeDocuments?: InputMaybe<Array<InputMaybe<FileLinkInput>>>;
    removeStakeholders?: InputMaybe<Array<InputMaybe<SsnInput>>>;
    stakeholders?: InputMaybe<Array<InputMaybe<StakeholderInput>>>;
};
type UserInvitationLink = {
    __typename?: 'UserInvitationLink';
    url?: Maybe<Scalars['String']>;
};
type VisaInput = {
    birthCountry: Scalars['String'];
    citizenshipCountry: Scalars['String'];
    visaType: Scalars['String'];
};

export { AccountOverview, AccountType, AccreditedInvestorInput, AccreditedInvestorStatement, Address, AddressInput, AnnualRevenueInput, CompanyNameInput, CorporateCompanyType, CorporateCompanyTypeInput, CorporateDraftAccount, CorporateDraftAccountInput, Dollar, DollarInput, Domicile, DomicileInput, DomicileType, DraftAccount, DraftAccountState, DraftAccountType, EinInput, EmailInput, Employer, EmployerInput, EmploymentStatus, EmploymentStatusInput, EmploymentStatusType, Exact, Experience, ExperienceInput, FileLinkId, FileLinkInput, FinraStatementInput, GenericFieldInput, GetAvatarLink, GetDocumentLink, GreenCardInput, IndividualAccount, IndividualAccountDetails, IndividualAccountInput, IndividualDraftAccount, IndividualDraftAccountDetails, IndustryInput, InputMaybe, LegalNameInput, MakeMaybe, MakeOptional, Maybe, Mutation, MutationCompleteCorporateDraftAccountArgs, MutationCompleteIndividualDraftAccountArgs, MutationCompleteProfileDetailsArgs, MutationCompleteTrustDraftAccountArgs, MutationCreateDocumentsFileLinksArgs, MutationCreateDraftAccountArgs, MutationOpenAccountArgs, MutationRemoveDraftAccountArgs, MutationSetPhoneNumberArgs, MutationSignDocumentFromTemplateArgs, MutationVerifyPhoneNumberArgs, NetRange, NetRangeInput, NumberOfEmployeesInput, PersonName, PoliticianStatementInput, Profile, ProfileDetails, ProfileDetailsInput, PutFileLink, Query, QueryGetCorporateDraftAccountArgs, QueryGetIndividualAccountArgs, QueryGetIndividualDraftAccountArgs, QueryGetTemplateArgs, QueryGetTrustDraftAccountArgs, Scalars, SignatureId, SsnInput, Stakeholder, StakeholderInput, Statement, StatementInput, StatementType, Template, TemplateName, TradingCompanyStakeholderInput, TrustCompanyType, TrustCompanyTypeInput, TrustDraftAccount, TrustDraftAccountInput, UserInvitationLink, VisaInput };
