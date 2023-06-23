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
  FileName: any;
  ISODate: any;
  ISODateTime: any;
  Money: any;
  firstName_String_NotNull_minLength_1: any;
  lastName_String_NotNull_minLength_1: any;
  numberOfLinks_Int_NotNull_min_1_max_10: any;
  ssn_String_NotNull_pattern_093092094: any;
};

export type AccountActivity = {
  __typename?: 'AccountActivity';
  activityName: Scalars['String'];
  date: Scalars['ISODate'];
};

export type AccountConfiguration = {
  __typename?: 'AccountConfiguration';
  automaticDividendReinvestmentAgreement?: Maybe<AutomaticDividendReinvestmentAgreement>;
};

export type AccountOverview = {
  __typename?: 'AccountOverview';
  avatar?: Maybe<GetAvatarLink>;
  id?: Maybe<Scalars['ID']>;
  isBanned?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  type?: Maybe<AccountType>;
};

export type AccountStats = {
  __typename?: 'AccountStats';
  EVS: Scalars['String'];
  accountValue: Scalars['String'];
  advisorFees: Scalars['String'];
  appreciation: Scalars['String'];
  costOfSharesOwned: Scalars['String'];
  currentNAVPerShare: Scalars['String'];
  dividends: Scalars['String'];
  netReturns: Scalars['String'];
  quantityOfShares: Scalars['String'];
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

export enum ActionName {
  BanAccount = 'BAN_ACCOUNT',
  BanProfile = 'BAN_PROFILE',
  RequireAdminSupport = 'REQUIRE_ADMIN_SUPPORT',
  RequireManualReview = 'REQUIRE_MANUAL_REVIEW',
  UpdateMember = 'UPDATE_MEMBER',
  UpdateMemberAgain = 'UPDATE_MEMBER_AGAIN'
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

export type AgreementParagraph = {
  __typename?: 'AgreementParagraph';
  isCheckedOption?: Maybe<Scalars['Boolean']>;
  lines: Array<Scalars['String']>;
};

export type AgreementSection = {
  __typename?: 'AgreementSection';
  header?: Maybe<Scalars['String']>;
  paragraphs: Array<AgreementParagraph>;
};

export enum AgreementStatus {
  Signed = 'SIGNED',
  WaitingForSignature = 'WAITING_FOR_SIGNATURE'
}

export type AnnualRevenue = {
  __typename?: 'AnnualRevenue';
  range?: Maybe<Scalars['String']>;
};

export type AnnualRevenueInput = {
  range: Scalars['String'];
};

export type ArchivedBeneficiaryStatus = {
  __typename?: 'ArchivedBeneficiaryStatus';
  archived: Scalars['Boolean'];
  parentAccountUpdatedValue?: Maybe<Usd>;
};

export type AutomaticDividendReinvestmentAgreement = {
  __typename?: 'AutomaticDividendReinvestmentAgreement';
  date?: Maybe<Scalars['ISODateTime']>;
  signed: Scalars['Boolean'];
};

/** Avatar link id input */
export type AvatarFileLinkInput = {
  /** This is @PutFileLink.id */
  id: Scalars['ID'];
};

export type BankAccount = {
  __typename?: 'BankAccount';
  accountNumber?: Maybe<Scalars['String']>;
  accountType?: Maybe<Scalars['String']>;
  bankAccountStatus?: Maybe<BankAccountStatus>;
  bankName?: Maybe<Scalars['String']>;
};

export type BankAccountLink = {
  __typename?: 'BankAccountLink';
  link?: Maybe<Scalars['String']>;
};

export enum BankAccountStatus {
  Active = 'ACTIVE',
  Draft = 'DRAFT',
  Inactive = 'INACTIVE'
}

export type BeneficiaryAccount = {
  __typename?: 'BeneficiaryAccount';
  avatar?: Maybe<GetAvatarLink>;
  details?: Maybe<BeneficiaryDetails>;
  id?: Maybe<Scalars['ID']>;
  label?: Maybe<Scalars['String']>;
};

export type BeneficiaryDetails = {
  __typename?: 'BeneficiaryDetails';
  name?: Maybe<BeneficiaryName>;
};

export type BeneficiaryName = {
  __typename?: 'BeneficiaryName';
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type BeneficiaryNameInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
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
  id?: Maybe<Scalars['ID']>;
  label?: Maybe<Scalars['String']>;
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

export type CreateBeneficiaryInput = {
  avatar?: InputMaybe<AvatarFileLinkInput>;
  name: BeneficiaryNameInput;
};

export type DateOfBirth = {
  __typename?: 'DateOfBirth';
  dateOfBirth: Scalars['ISODate'];
};

export type DateOfBirthInput = {
  dateOfBirth: Scalars['ISODate'];
};

export type Dividend = {
  __typename?: 'Dividend';
  amount: Usd;
  date: Scalars['ISODateTime'];
  id: Scalars['ID'];
  status: DividendState;
};

export type DividendOverview = {
  __typename?: 'DividendOverview';
  amount: Usd;
  date: Scalars['ISODateTime'];
  id: Scalars['ID'];
  status: DividendState;
};

export enum DividendState {
  PaidOut = 'PAID_OUT',
  Pending = 'PENDING',
  Reinvested = 'REINVESTED',
  Withdrawing = 'WITHDRAWING'
}

export type DividendsList = {
  __typename?: 'DividendsList';
  dividendsList: Array<Maybe<DividendOverview>>;
};

/** Link id */
export type DocumentFileLinkId = {
  __typename?: 'DocumentFileLinkId';
  fileName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
};

/** Avatar link id input */
export type DocumentFileLinkInput = {
  /** File name should be in format: .pdf, .jpeg, .jpg, .png */
  fileName: Scalars['FileName'];
  /** This 'id' comes usually from @PutFileLink.id */
  id: Scalars['ID'];
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

export type EvsChart = {
  __typename?: 'EVSChart';
  changeFactor: Scalars['String'];
  dataPoints?: Maybe<Array<Maybe<EvsChartPoint>>>;
  endAt: Scalars['ISODate'];
  resolution?: Maybe<EvsChartResolution>;
  startAt: Scalars['ISODate'];
};

export type EvsChartPoint = {
  __typename?: 'EVSChartPoint';
  date: Scalars['ISODate'];
  usd: Scalars['Float'];
};

export enum EvsChartResolution {
  Day = 'DAY',
  FiveYears = 'FIVE_YEARS',
  Max = 'MAX',
  Month = 'MONTH',
  Week = 'WEEK',
  Year = 'YEAR'
}

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

/**  Plaid response */
export type FulfillBankAccountInput = {
  /**  plaidAccountDetails.account_name */
  accountName?: InputMaybe<Scalars['String']>;
  /**  plaidAccountDetails.account_number */
  accountNumber: Scalars['String'];
  /**  plaidAccountDetails.account_type */
  accountType: Scalars['String'];
  /**  plaidAccountDetails.institutionId */
  institutionId?: InputMaybe<Scalars['String']>;
  /**  plaidAccountDetails.institution_name */
  institutionName?: InputMaybe<Scalars['String']>;
  /**  plaidAccountDetails.refNum */
  refNumber: Scalars['String'];
  /**  plaidAccountDetails.routing_number */
  routingNumber: Scalars['String'];
};

export type FundsWithdrawalAgreement = {
  __typename?: 'FundsWithdrawalAgreement';
  content: Array<AgreementSection>;
  createdAt: Scalars['ISODateTime'];
  id: Scalars['ID'];
  signedAt?: Maybe<Scalars['ISODateTime']>;
  status: AgreementStatus;
};

export type FundsWithdrawalRequest = {
  __typename?: 'FundsWithdrawalRequest';
  accountValue: Usd;
  createdDate: Scalars['ISODateTime'];
  decisionDate?: Maybe<Scalars['ISODateTime']>;
  decisionMessage?: Maybe<Scalars['String']>;
  eligibleForWithdrawal: Usd;
  investorWithdrawalReason?: Maybe<Scalars['String']>;
  penaltiesFee: Usd;
  status: FundsWithdrawalRequestStatus;
};

export enum FundsWithdrawalRequestStatus {
  Approved = 'APPROVED',
  AwaitingDecision = 'AWAITING_DECISION',
  AwaitingSigningAgreement = 'AWAITING_SIGNING_AGREEMENT',
  Draft = 'DRAFT',
  Rejected = 'REJECTED'
}

export type FundsWithdrawalSimulation = {
  __typename?: 'FundsWithdrawalSimulation';
  accountValue: Usd;
  canWithdraw: Scalars['Boolean'];
  eligibleForWithdrawal: Usd;
  penaltiesFee: Usd;
};

/** Link id + url to read the avatar */
export type GetAvatarLink = {
  __typename?: 'GetAvatarLink';
  id?: Maybe<Scalars['ID']>;
  initials?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** Link id + url to read the document */
export type GetDocumentLink = {
  __typename?: 'GetDocumentLink';
  id?: Maybe<Scalars['ID']>;
  url?: Maybe<Scalars['String']>;
};

export type GreenCardInput = {
  birthCountry: Scalars['String'];
  citizenshipCountry: Scalars['String'];
};

export type ImpactMetrics = {
  __typename?: 'ImpactMetrics';
  jobsCreated?: Maybe<Scalars['String']>;
  totalProjectSize?: Maybe<Scalars['String']>;
  units?: Maybe<Scalars['String']>;
};

export type IndividualAccount = {
  __typename?: 'IndividualAccount';
  avatar?: Maybe<GetAvatarLink>;
  details?: Maybe<IndividualAccountDetails>;
  id?: Maybe<Scalars['ID']>;
  label?: Maybe<Scalars['String']>;
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

export type InvestmentOverview = {
  __typename?: 'InvestmentOverview';
  amount: Usd;
  createdAt: Scalars['ISODateTime'];
  id: Scalars['ID'];
  tradeId: Scalars['String'];
};

export enum InvestmentStatus {
  Failed = 'FAILED',
  Finished = 'FINISHED',
  Funded = 'FUNDED',
  InProgress = 'IN_PROGRESS',
  WaitingForFeesApproval = 'WAITING_FOR_FEES_APPROVAL',
  WaitingForInvestmentStart = 'WAITING_FOR_INVESTMENT_START',
  WaitingForSubscriptionAgreement = 'WAITING_FOR_SUBSCRIPTION_AGREEMENT'
}

export type InvestmentSummary = {
  __typename?: 'InvestmentSummary';
  amount: Usd;
  bankAccount?: Maybe<BankAccount>;
  createdAt: Scalars['ISODateTime'];
  id: Scalars['ID'];
  investmentFees?: Maybe<Usd>;
  status: InvestmentStatus;
  subscriptionAgreementId?: Maybe<Scalars['ID']>;
  tradeId: Scalars['String'];
};

export type KeyMetrics = {
  __typename?: 'KeyMetrics';
  projectReturn?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['String']>;
  structure?: Maybe<Scalars['String']>;
};

export type LegalNameInput = {
  name: Scalars['String'];
};

export type Location = {
  __typename?: 'Location';
  lat?: Maybe<Scalars['String']>;
  lng?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** It aborts the funds withdrawal request if it is not yet approved or rejected */
  abortFundsWithdrawalRequest: Scalars['Boolean'];
  /** It aborts the investment that haven't been started yet (by startInvestment mutation). */
  abortInvestment: Scalars['Boolean'];
  /**
   * Approves the fees for the specific investment.
   * In case if extra fee is required for recurring investment and the investment was started automatically by the system, then
   * use this method to approve the fees (it will ask for that on verification step triggered from the notification).
   */
  approveFees: Scalars['Boolean'];
  /** [MOCK] Archive beneficiary account - it moves investments from a beneficiary to the individual account */
  archiveBeneficiaryAccount: ArchivedBeneficiaryStatus;
  /** [MOCK] It cancels the investment that is in Funding or Funded state, but the Grace period has not been passed away yet */
  cancelInvestment: Scalars['Boolean'];
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
   * It creates new link to the investor bank account. It works only if the account does not have any bank account linked yet.
   * Every time when the system create new link it cost $1.80 (on prod). Do not call it if it is not necessary.
   * The bank account will not be activated until the investor fulfills the bank account.
   */
  createBankAccount?: Maybe<BankAccountLink>;
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
  /** It creates the funds withdrawal agreement. */
  createFundsWithdrawalAgreement: FundsWithdrawalAgreement;
  /** Create funds withdrawal request. It is just a DRAFT. You need to sign the agreement and then request the withdrawal. */
  createFundsWithdrawalRequest: FundsWithdrawalRequest;
  /**
   * It creates new investment and returns its ID.
   * It requires bank account to be linked to the account.
   * In other case it throws an error.
   */
  createInvestment: Scalars['ID'];
  /**
   * It creates new investment and returns its ID.
   * It requires bank account to be linked to the account.
   * In other case it throws an error.
   */
  createRecurringInvestment: RecurringInvestment;
  /**
   * It creates new subscription agreement for the specific recurring investment
   * It returns the content of the agreement that must be rendered on the client side.
   * Client must sign the agreement and call signRecurringInvestmentSubscriptionAgreement mutation.
   */
  createRecurringSubscriptionAgreement: SubscriptionAgreement;
  /**
   * It creates new subscription agreement for the specific investment
   * It returns the content of the agreement that must be rendered on the client side.
   * Client must sign the agreement and call signSubscriptionAgreement mutation.
   */
  createSubscriptionAgreement: SubscriptionAgreement;
  /** It DEACTIVATE the recurring investment. */
  deactivateRecurringInvestment: Scalars['Boolean'];
  /**
   * Provide the response from Plaid here.
   * The bank account will not be activated until the investor fulfills the bank account.
   */
  fulfillBankAccount?: Maybe<Scalars['Boolean']>;
  /** It STARTS the recurring investment, CANCEL previous recurring investment if exists and schedule the first investment. */
  initiateRecurringInvestment: Scalars['Boolean'];
  /** Mark notification as read */
  markNotificationAsRead: Scalars['Boolean'];
  /**
   * Open REINVEST Account based on draft.
   * Currently supported: Individual Account
   */
  openAccount?: Maybe<Scalars['Boolean']>;
  /** Open beneficiary account */
  openBeneficiaryAccount?: Maybe<BeneficiaryAccount>;
  /** Reinvest dividend - you can reinvest many dividends in the same time. If one of them is not reinvestable, then all of them will be rejected. */
  reinvestDividend: Scalars['Boolean'];
  /**
   * Remove draft account
   * IMPORTANT: it removes all uploaded avatar and documents from s3 for this draft account
   */
  removeDraftAccount?: Maybe<Scalars['Boolean']>;
  /** It requests the funds withdrawal. The investor must sign the agreement first. */
  requestFundsWithdrawal: FundsWithdrawalRequest;
  /** Set automatic dividend reinvestment agreement */
  setAutomaticDividendReinvestmentAgreement: Scalars['Boolean'];
  /**
   * Add phone number. The system will send the verification code to the provided phone number via sms.
   * Token will be valid for 10 minutes and can be used only once.
   * After 3 failed attempts the token will be expired.
   * Optional field isSmsAllowed set to false will prevent sending sms with verification code (for test purposes).
   * On default isSmsAllowed is true.
   */
  setPhoneNumber?: Maybe<Scalars['Boolean']>;
  /** It signs the agreement of funds withdrawal. */
  signFundsWithdrawalAgreement: FundsWithdrawalAgreement;
  /** It signs the recurring investment subscription agreement. */
  signRecurringInvestmentSubscriptionAgreement: Scalars['Boolean'];
  /** It signs the subscription agreement. */
  signSubscriptionAgreement: Scalars['Boolean'];
  /**
   * It starts the investment.
   * It requires subscription agreement to be signed and fees to be approved.
   * The fees can be approved also by this method (if approveFees is true).
   */
  startInvestment: Scalars['Boolean'];
  /** It UNSUSPEND the recurring investment. */
  unsuspendRecurringInvestment: Scalars['Boolean'];
  /**
   * It updates the link to the investor bank account. It works only if the account has bank account linked already.
   * Every time when the system create new link it cost $1.80 (on prod). Do not call it if it is not necessary.
   * The bank account will not be activated until the investor fulfills the bank account.
   */
  updateBankAccount?: Maybe<BankAccountLink>;
  /** Update beneficiary account */
  updateBeneficiaryAccount?: Maybe<BeneficiaryAccount>;
  /** It updates company for verification. Provide only fields that were changed by the investor, but all required to meet the schema definition. */
  updateCompanyForVerification?: Maybe<Scalars['Boolean']>;
  /** Update corporate account */
  updateCorporateAccount?: Maybe<CorporateAccount>;
  /** It reads new verified email from cognito and update it in the REINVEST database */
  updateEmailAddress?: Maybe<Scalars['Boolean']>;
  /** Update individual account */
  updateIndividualAccount?: Maybe<IndividualAccount>;
  /**
   * Update profile fields
   * Important Note: Some fields can trigger KYC/AML reverification
   */
  updateProfile?: Maybe<Profile>;
  /**
   * It updates profile for verification. Provide only fields that were changed by the investor, but all required to meet the schema definition.
   * For example if investor changed only 'firstName' then provide only field 'name'.
   * The name field expects PersonName type, so it must contain all required data (so 'firstName' and 'lastName' must be provided, even that only firstName changed).
   */
  updateProfileForVerification?: Maybe<Scalars['Boolean']>;
  /** It updates stakeholder for verification. Provide only fields that were changed by the investor, but all required to meet the schema definition. */
  updateStakeholderForVerification?: Maybe<Scalars['Boolean']>;
  /** Update trust account */
  updateTrustAccount?: Maybe<TrustAccount>;
  /**
   * It returns 'VerificationDecisions':
   * * 'isAccountVerified: Boolean': it tells if all account's parties are verified or not
   * * 'canUserContinueTheInvestment: Boolean': it tells can user continue the investment or not. If not then user
   * must do extra actions to continue the investment
   * * 'requiredActions': list of actions that user must perform to continue the investement.
   * * [IMPORTANT] Some actions ban profile or accounts
   *
   * Action structure:
   * - action: type of action. Based on that application must do some specific action
   * - onObject: specifies the object that is a subject of an actions. It contains 2 fields:
   * * type: type of object. It can be one of: 'PROFILE', 'STAKEHOLDER', 'COMPANY'
   * * optional accountId (apply to 'STAKEHOLDER' and 'COMPANY')
   * * optional stakeholderId (apply to 'STAKEHOLDER')
   * - reasons: list of errors, suggestions what went wrong during verification. Potentially it can be used
   * to display to user what went wrong
   *
   * List of current actions:
   * * 'UPDATE_MEMBER' or 'UPDATE_MEMBER_AGAIN': it means that user must update details of object specified in 'onObject' field
   * * 'BAN_ACCOUNT': it means that account must be banned and investment process and all other investments
   * are blocked
   * * 'BAN_PROFILE': it means that profile must be banned and all accounts are blocked
   * * 'REQUIRE_MANUAL_REVIEW' or 'REQUIRE_ADMIN_SUPPORT': just information, no action on frontend is required ('canUserContinueTheInvestment' should be set to 'true')
   */
  verifyAccount?: Maybe<VerificationDecision>;
  /**
   * Verify phone number with received verification code on sms.
   * This action will set the phone number in the user Cognito profile and allow to use 2FA with phone number
   */
  verifyPhoneNumber?: Maybe<Scalars['Boolean']>;
  /** Withdraw dividend - you can withdraw many dividends in the same time. If one of them is not withdrawable, then all of them will be rejected. */
  withdrawDividend: Scalars['Boolean'];
};


export type MutationAbortFundsWithdrawalRequestArgs = {
  accountId: Scalars['ID'];
};


export type MutationAbortInvestmentArgs = {
  investmentId: Scalars['ID'];
};


export type MutationApproveFeesArgs = {
  investmentId: Scalars['ID'];
};


export type MutationArchiveBeneficiaryAccountArgs = {
  accountId: Scalars['ID'];
};


export type MutationCancelInvestmentArgs = {
  investmentId: Scalars['ID'];
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


export type MutationCreateBankAccountArgs = {
  accountId: Scalars['ID'];
};


export type MutationCreateDocumentsFileLinksArgs = {
  numberOfLinks: Scalars['numberOfLinks_Int_NotNull_min_1_max_10'];
};


export type MutationCreateDraftAccountArgs = {
  type?: InputMaybe<DraftAccountType>;
};


export type MutationCreateFundsWithdrawalAgreementArgs = {
  accountId: Scalars['ID'];
};


export type MutationCreateFundsWithdrawalRequestArgs = {
  accountId: Scalars['ID'];
  investorWithdrawalReason?: InputMaybe<Scalars['String']>;
};


export type MutationCreateInvestmentArgs = {
  accountId: Scalars['ID'];
  amount?: InputMaybe<UsdInput>;
};


export type MutationCreateRecurringInvestmentArgs = {
  accountId: Scalars['ID'];
  amount: UsdInput;
  schedule: RecurringInvestmentScheduleInput;
};


export type MutationCreateRecurringSubscriptionAgreementArgs = {
  accountId: Scalars['ID'];
};


export type MutationCreateSubscriptionAgreementArgs = {
  investmentId: Scalars['ID'];
};


export type MutationDeactivateRecurringInvestmentArgs = {
  accountId: Scalars['ID'];
};


export type MutationFulfillBankAccountArgs = {
  accountId: Scalars['ID'];
  input: FulfillBankAccountInput;
};


export type MutationInitiateRecurringInvestmentArgs = {
  accountId: Scalars['ID'];
};


export type MutationMarkNotificationAsReadArgs = {
  notificationId: Scalars['ID'];
};


export type MutationOpenAccountArgs = {
  draftAccountId: Scalars['ID'];
};


export type MutationOpenBeneficiaryAccountArgs = {
  individualAccountId: Scalars['ID'];
  input: CreateBeneficiaryInput;
};


export type MutationReinvestDividendArgs = {
  accountId: Scalars['ID'];
  dividendIds?: InputMaybe<Array<Scalars['ID']>>;
};


export type MutationRemoveDraftAccountArgs = {
  draftAccountId?: InputMaybe<Scalars['ID']>;
};


export type MutationRequestFundsWithdrawalArgs = {
  accountId: Scalars['ID'];
};


export type MutationSetAutomaticDividendReinvestmentAgreementArgs = {
  accountId: Scalars['ID'];
  automaticDividendReinvestmentAgreement: Scalars['Boolean'];
};


export type MutationSetPhoneNumberArgs = {
  countryCode?: InputMaybe<Scalars['String']>;
  isSmsAllowed?: InputMaybe<Scalars['Boolean']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
};


export type MutationSignFundsWithdrawalAgreementArgs = {
  accountId: Scalars['ID'];
};


export type MutationSignRecurringInvestmentSubscriptionAgreementArgs = {
  accountId: Scalars['ID'];
};


export type MutationSignSubscriptionAgreementArgs = {
  investmentId: Scalars['ID'];
};


export type MutationStartInvestmentArgs = {
  approveFees?: InputMaybe<Scalars['Boolean']>;
  investmentId: Scalars['ID'];
};


export type MutationUnsuspendRecurringInvestmentArgs = {
  accountId: Scalars['ID'];
};


export type MutationUpdateBankAccountArgs = {
  accountId: Scalars['ID'];
};


export type MutationUpdateBeneficiaryAccountArgs = {
  accountId: Scalars['ID'];
  input?: InputMaybe<UpdateBeneficiaryAccountInput>;
};


export type MutationUpdateCompanyForVerificationArgs = {
  accountId: Scalars['ID'];
  input: UpdateCompanyForVerificationInput;
};


export type MutationUpdateCorporateAccountArgs = {
  accountId: Scalars['ID'];
  input?: InputMaybe<UpdateCompanyAccountInput>;
};


export type MutationUpdateIndividualAccountArgs = {
  accountId: Scalars['ID'];
  input?: InputMaybe<IndividualAccountInput>;
};


export type MutationUpdateProfileArgs = {
  input?: InputMaybe<UpdateProfileInput>;
};


export type MutationUpdateProfileForVerificationArgs = {
  input: UpdateProfileForVerificationInput;
};


export type MutationUpdateStakeholderForVerificationArgs = {
  accountId: Scalars['ID'];
  input: UpdateStakeholderForVerificationInput;
  stakeholderId: Scalars['ID'];
};


export type MutationUpdateTrustAccountArgs = {
  accountId: Scalars['ID'];
  input?: InputMaybe<UpdateCompanyAccountInput>;
};


export type MutationVerifyAccountArgs = {
  accountId: Scalars['ID'];
};


export type MutationVerifyPhoneNumberArgs = {
  authCode?: InputMaybe<Scalars['String']>;
  countryCode?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
};


export type MutationWithdrawDividendArgs = {
  accountId: Scalars['ID'];
  dividendIds?: InputMaybe<Array<Scalars['ID']>>;
};

export type NetRange = {
  __typename?: 'NetRange';
  range?: Maybe<Scalars['String']>;
};

export type NetRangeInput = {
  range: Scalars['String'];
};

export type Notification = {
  __typename?: 'Notification';
  accountId?: Maybe<Scalars['String']>;
  body: Scalars['String'];
  date: Scalars['ISODateTime'];
  header: Scalars['String'];
  id: Scalars['ID'];
  isDismissible: Scalars['Boolean'];
  isRead: Scalars['Boolean'];
  notificationType: NotificationType;
  onObject?: Maybe<NotificationObject>;
};

export enum NotificationFilter {
  All = 'ALL',
  Unread = 'UNREAD'
}

export type NotificationObject = {
  __typename?: 'NotificationObject';
  id: Scalars['ID'];
  type?: Maybe<NotificationObjectType>;
};

export enum NotificationObjectType {
  Account = 'ACCOUNT',
  Dividend = 'DIVIDEND',
  Investment = 'INVESTMENT'
}

export enum NotificationType {
  DividendPayoutInitiated = 'DIVIDEND_PAYOUT_INITIATED',
  DividendReceived = 'DIVIDEND_RECEIVED',
  DividendReinvested = 'DIVIDEND_REINVESTED',
  DividendReinvestedAutomatically = 'DIVIDEND_REINVESTED_AUTOMATICALLY',
  FundsWithdrawalAccepted = 'FUNDS_WITHDRAWAL_ACCEPTED',
  FundsWithdrawalRejected = 'FUNDS_WITHDRAWAL_REJECTED',
  GenericNotification = 'GENERIC_NOTIFICATION',
  InvestmentFailed = 'INVESTMENT_FAILED',
  InvestmentFundsReceived = 'INVESTMENT_FUNDS_RECEIVED',
  RecurringInvestmentFailed = 'RECURRING_INVESTMENT_FAILED',
  RewardDividendReceived = 'REWARD_DIVIDEND_RECEIVED',
  VerificationFailed = 'VERIFICATION_FAILED'
}

export type NotificationsStats = {
  __typename?: 'NotificationsStats';
  accountId: Scalars['ID'];
  getNotifications: Array<Maybe<Notification>>;
  totalCount: Scalars['Int'];
  unreadCount: Scalars['Int'];
};


export type NotificationsStatsGetNotificationsArgs = {
  filter?: InputMaybe<NotificationFilter>;
  pagination?: InputMaybe<Pagination>;
};

export type NumberOfEmployees = {
  __typename?: 'NumberOfEmployees';
  range?: Maybe<Scalars['String']>;
};

export type NumberOfEmployeesInput = {
  range: Scalars['String'];
};

export type Poi = {
  __typename?: 'POI';
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** If not provided, default pagination is page: 0, perPage: 10 */
export type Pagination = {
  page?: Scalars['Int'];
  perPage?: Scalars['Int'];
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

export type PortfolioDetails = {
  __typename?: 'PortfolioDetails';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  properties?: Maybe<Array<Maybe<Property>>>;
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

export type Property = {
  __typename?: 'Property';
  POIs?: Maybe<Array<Maybe<Poi>>>;
  address?: Maybe<PropertyAddress>;
  gallery?: Maybe<Array<Maybe<Scalars['String']>>>;
  image?: Maybe<Scalars['String']>;
  impactMetrics?: Maybe<ImpactMetrics>;
  keyMetrics?: Maybe<KeyMetrics>;
  location?: Maybe<Location>;
  name?: Maybe<Scalars['String']>;
};

export type PropertyAddress = {
  __typename?: 'PropertyAddress';
  addressLine?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

/** Link id + PUT url to store resource in the storage */
export type PutFileLink = {
  __typename?: 'PutFileLink';
  id?: Maybe<Scalars['ID']>;
  url?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  /**
   * [MOCK] Get account activities
   * Activities Types:
   * - PROFILE_CREATED
   * - INDIVIDUAL/CORPORATE/TRUST/BENEFICIARY_ACCOUNT_CREATED
   * - INDIVIDUAL/CORPORATE/TRUST/BENEFICIARY_ACCOUNT_UPDATED
   * - INVESTMENT_CREATED
   * - INVESTMENT_FAILED
   * - INVESTMENT_CANCELED
   * - INVESTMENT_FINISHED
   * - FUNDS_WITHDRAWAL_CREATED
   * - FUNDS_WITHDREW
   * - BENEFICIARY_ACCOUNT_ARCHIVED
   * - SHARES_ISSUED
   * - DIVIDEND_RECEIVED
   * - REFERRAL_REWARD_RECEIVED
   * - EMAIL_UPDATED
   * - DIVIDEND_REINVESTED
   * - DIVIDEND_WITHDREW
   * - ACCOUNT_BANNED
   * - PROFILE_BANNED
   * - ACCOUNT_UNBANNED
   * - PROFILE_UNBANNED
   * - RECURRING_INVESTMENT_CREATED
   * - RECURRING_INVESTMENT_SUSPENDED
   * - RECURRING_INVESTMENT_ARCHIVED
   * - VERIFICATION_FAILED
   *
   * DB: Type, uniqueKey, contentFields, dateCreated, profileId, accountId (can be null)
   */
  getAccountActivity: Array<Maybe<AccountActivity>>;
  /** Return account configuration */
  getAccountConfiguration?: Maybe<AccountConfiguration>;
  /** Get account stats */
  getAccountStats?: Maybe<AccountStats>;
  /** Return all accounts overview */
  getAccountsOverview?: Maybe<Array<Maybe<AccountOverview>>>;
  /** It returns the current recurring investment summary. */
  getActiveRecurringInvestment?: Maybe<RecurringInvestment>;
  /** Returns beneficiary account information */
  getBeneficiaryAccount?: Maybe<BeneficiaryAccount>;
  /** Returns corporate account information */
  getCorporateAccount?: Maybe<CorporateAccount>;
  /** Get draft corporate account details */
  getCorporateDraftAccount?: Maybe<CorporateDraftAccount>;
  getDividend: Dividend;
  /** Returns document link by id */
  getDocument?: Maybe<GetDocumentLink>;
  /** It returns the created draft recurring investment summary. */
  getDraftRecurringInvestment?: Maybe<RecurringInvestment>;
  /** Get EVS chart data for an account by resolution */
  getEVSChart?: Maybe<EvsChart>;
  /** Get funds withdrawal agreement */
  getFundsWithdrawalAgreement?: Maybe<FundsWithdrawalAgreement>;
  /** Get funds withdrawal request. It returns the current status of funds withdrawal request. */
  getFundsWithdrawalRequest?: Maybe<FundsWithdrawalRequest>;
  /** Returns individual account information */
  getIndividualAccount?: Maybe<IndividualAccount>;
  /** Get details of individual draft account */
  getIndividualDraftAccount?: Maybe<IndividualDraftAccount>;
  /**
   * It returns the investment summary.
   * Use this method to get info about the investment fees.
   */
  getInvestmentSummary: InvestmentSummary;
  /**
   * Provides info about the number of unread/total notifications for the given account id
   * It allows to retrieve notifications directly in the same query
   */
  getNotificationStats: NotificationsStats;
  /**
   * Get all notifications for the given account id
   * It sort notifications by date descending. Not dismissible (pinned) notifications are always first.
   */
  getNotifications: Array<Maybe<Notification>>;
  /** [MOCK] returns all information about properties in the portfolio */
  getPortfolioDetails?: Maybe<PortfolioDetails>;
  /** Get user profile */
  getProfile?: Maybe<Profile>;
  /** Returns the simulation of the recurring investment schedule. */
  getScheduleSimulation: Array<Scalars['ISODate']>;
  /** It returns the subscription agreement. */
  getSubscriptionAgreement: SubscriptionAgreement;
  /** Returns trust account information */
  getTrustAccount?: Maybe<TrustAccount>;
  /** Get draft trust account details */
  getTrustDraftAccount?: Maybe<TrustDraftAccount>;
  /**  Just say hello  */
  hello?: Maybe<Scalars['Boolean']>;
  /** List all existing draft accounts if you need come back to onboarding */
  listAccountDrafts?: Maybe<Array<Maybe<DraftAccount>>>;
  /** Returns list of account types that user can open */
  listAccountTypesUserCanOpen?: Maybe<Array<Maybe<AccountType>>>;
  /** List all dividends */
  listDividends: DividendsList;
  /** List of all investments history */
  listInvestments: Array<Maybe<InvestmentOverview>>;
  /** Returns information if user already assigned and verified phone number */
  phoneCompleted?: Maybe<Scalars['Boolean']>;
  /** Returns basic bank account information. */
  readBankAccount?: Maybe<BankAccount>;
  /** Simulate funds withdrawal. It returns the simulation of withdrawal without any changes in the system. */
  simulateFundsWithdrawal: FundsWithdrawalSimulation;
  /** Returns invitation link with a valid referral code (incentive token) */
  userInvitationLink?: Maybe<UserInvitationLink>;
};


export type QueryGetAccountActivityArgs = {
  accountId: Scalars['ID'];
  pagination?: InputMaybe<Pagination>;
};


export type QueryGetAccountConfigurationArgs = {
  accountId: Scalars['ID'];
};


export type QueryGetAccountStatsArgs = {
  accountId: Scalars['ID'];
};


export type QueryGetActiveRecurringInvestmentArgs = {
  accountId: Scalars['ID'];
};


export type QueryGetBeneficiaryAccountArgs = {
  accountId: Scalars['ID'];
};


export type QueryGetCorporateAccountArgs = {
  accountId: Scalars['ID'];
};


export type QueryGetCorporateDraftAccountArgs = {
  accountId?: InputMaybe<Scalars['ID']>;
};


export type QueryGetDividendArgs = {
  dividendId: Scalars['ID'];
};


export type QueryGetDocumentArgs = {
  documentId: Scalars['ID'];
};


export type QueryGetDraftRecurringInvestmentArgs = {
  accountId: Scalars['ID'];
};


export type QueryGetEvsChartArgs = {
  accountId: Scalars['ID'];
  resolution: EvsChartResolution;
};


export type QueryGetFundsWithdrawalAgreementArgs = {
  accountId: Scalars['ID'];
};


export type QueryGetFundsWithdrawalRequestArgs = {
  accountId: Scalars['ID'];
};


export type QueryGetIndividualDraftAccountArgs = {
  accountId?: InputMaybe<Scalars['ID']>;
};


export type QueryGetInvestmentSummaryArgs = {
  investmentId: Scalars['ID'];
};


export type QueryGetNotificationStatsArgs = {
  accountId: Scalars['ID'];
};


export type QueryGetNotificationsArgs = {
  accountId: Scalars['ID'];
  filter?: InputMaybe<NotificationFilter>;
  pagination?: InputMaybe<Pagination>;
};


export type QueryGetScheduleSimulationArgs = {
  schedule: RecurringInvestmentScheduleInput;
};


export type QueryGetSubscriptionAgreementArgs = {
  subscriptionAgreementId: Scalars['ID'];
};


export type QueryGetTrustAccountArgs = {
  accountId: Scalars['ID'];
};


export type QueryGetTrustDraftAccountArgs = {
  accountId?: InputMaybe<Scalars['ID']>;
};


export type QueryListDividendsArgs = {
  accountId: Scalars['ID'];
};


export type QueryListInvestmentsArgs = {
  accountId: Scalars['ID'];
  pagination?: InputMaybe<Pagination>;
};


export type QueryReadBankAccountArgs = {
  accountId: Scalars['ID'];
};


export type QuerySimulateFundsWithdrawalArgs = {
  accountId: Scalars['ID'];
};

export type RecurringInvestment = {
  __typename?: 'RecurringInvestment';
  amount: Usd;
  id: Scalars['ID'];
  nextInvestmentDate: Scalars['ISODate'];
  schedule: RecurringInvestmentSchedule;
  status: RecurringInvestmentStatus;
  subscriptionAgreementId?: Maybe<Scalars['ID']>;
};

export enum RecurringInvestmentFrequency {
  BiWeekly = 'BI_WEEKLY',
  Monthly = 'MONTHLY',
  Quarterly = 'QUARTERLY',
  Weekly = 'WEEKLY'
}

export type RecurringInvestmentSchedule = {
  __typename?: 'RecurringInvestmentSchedule';
  frequency: RecurringInvestmentFrequency;
  startDate: Scalars['ISODate'];
};

export type RecurringInvestmentScheduleInput = {
  frequency: RecurringInvestmentFrequency;
  startDate: Scalars['ISODate'];
};

export enum RecurringInvestmentStatus {
  Active = 'ACTIVE',
  Draft = 'DRAFT',
  Inactive = 'INACTIVE',
  Suspended = 'SUSPENDED',
  WaitingForSigningSubscriptionAgreement = 'WAITING_FOR_SIGNING_SUBSCRIPTION_AGREEMENT'
}

export type SsnInput = {
  /** The valid SSN is 9 digits in format 'XXX-XX-XXXX' */
  ssn: Scalars['ssn_String_NotNull_pattern_093092094'];
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
  /**  IMPORTANT: id is required for update  */
  id?: InputMaybe<Scalars['ID']>;
  /** IMPORTANT: it removes previously uploaded id scan documents from s3 if the previous document ids are not listed in the request */
  idScan: Array<InputMaybe<DocumentFileLinkInput>>;
  name: PersonName;
  /**  IMPORTANT: ssn is required for create. If you want to update it, you need to provide it in the request with id  */
  ssn?: InputMaybe<SsnInput>;
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

export type SubscriptionAgreement = {
  __typename?: 'SubscriptionAgreement';
  content: Array<AgreementSection>;
  createdAt: Scalars['ISODateTime'];
  id: Scalars['ID'];
  signedAt?: Maybe<Scalars['ISODateTime']>;
  status: AgreementStatus;
  type: SubscriptionAgreementType;
};

export enum SubscriptionAgreementType {
  DirectDeposit = 'DIRECT_DEPOSIT',
  RecurringInvestment = 'RECURRING_INVESTMENT'
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
  id?: Maybe<Scalars['ID']>;
  label?: Maybe<Scalars['String']>;
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

export type Usd = {
  __typename?: 'USD';
  formatted?: Maybe<Scalars['String']>;
  value: Scalars['Money'];
};

export type UsdInput = {
  value: Scalars['Money'];
};

export type UpdateBeneficiaryAccountInput = {
  avatar?: InputMaybe<AvatarFileLinkInput>;
  name?: InputMaybe<BeneficiaryNameInput>;
};

export type UpdateCompanyAccountInput = {
  address?: InputMaybe<AddressInput>;
  annualRevenue?: InputMaybe<AnnualRevenueInput>;
  /** IMPORTANT: it removes previously uploaded avatar from s3 for this account */
  avatar?: InputMaybe<AvatarFileLinkInput>;
  companyDocuments?: InputMaybe<Array<InputMaybe<DocumentFileLinkInput>>>;
  industry?: InputMaybe<IndustryInput>;
  numberOfEmployees?: InputMaybe<NumberOfEmployeesInput>;
  /** IMPORTANT: it removes these documents from s3 */
  removeDocuments?: InputMaybe<Array<InputMaybe<DocumentFileLinkInput>>>;
  /** IMPORTANT: it removes previously uploaded id scan documents from s3 for this stakeholder */
  removeStakeholders?: InputMaybe<Array<InputMaybe<StakeholderIdInput>>>;
  stakeholders?: InputMaybe<Array<InputMaybe<StakeholderInput>>>;
};

export type UpdateCompanyForVerificationInput = {
  address?: InputMaybe<AddressInput>;
  companyDocuments?: InputMaybe<Array<InputMaybe<DocumentFileLinkInput>>>;
  companyName?: InputMaybe<CompanyNameInput>;
  /** IMPORTANT: it removes these documents from s3 */
  removeDocuments?: InputMaybe<Array<InputMaybe<DocumentFileLinkInput>>>;
  /** IMPORTANT: it removes previously uploaded id scan documents from s3 for this stakeholder */
  removeStakeholders?: InputMaybe<Array<InputMaybe<StakeholderIdInput>>>;
  stakeholders?: InputMaybe<Array<InputMaybe<StakeholderInput>>>;
};

export type UpdateProfileForVerificationInput = {
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
  /** An investor name */
  name?: InputMaybe<PersonName>;
};

export type UpdateProfileInput = {
  /** Permanent address of an investor */
  address?: InputMaybe<AddressInput>;
  /** Is the investor US. Citizen or US. Resident with Green Card or Visa */
  domicile?: InputMaybe<DomicileInput>;
  /**
   * Important Note: KYC/AML reverification will be triggered
   * ID scan can be provided in more then one document, ie. 2 scans of both sides of the ID.
   * Required "id" provided in the @FileLink type from the @createDocumentsFileLinks mutation
   * IMPORTANT: it removes previously uploaded id scan documents from s3 if the previous document ids are not listed in the request
   */
  idScan?: InputMaybe<Array<InputMaybe<DocumentFileLinkInput>>>;
  investingExperience?: InputMaybe<ExperienceInput>;
  /**
   * Important Note: KYC/AML reverification will be triggered
   * An investor name
   */
  name?: InputMaybe<PersonName>;
  /** If an investor decided to remove one of the statements during onboarding */
  removeStatements?: InputMaybe<Array<InputMaybe<StatementInput>>>;
  /**
   * FINRA, Politician, Trading company stakeholder, accredited investor, terms and conditions, privacy policy statements
   * REQUIRED statements to complete the profile:
   * - accredited investor
   * - terms and conditions
   * - privacy policy
   */
  statements?: InputMaybe<Array<InputMaybe<StatementInput>>>;
};

export type UpdateStakeholderForVerificationInput = {
  address?: InputMaybe<AddressInput>;
  dateOfBirth?: InputMaybe<DateOfBirthInput>;
  domicile?: InputMaybe<SimplifiedDomicileInput>;
  /** IMPORTANT: it removes previously uploaded id scan documents from s3 if the previous document ids are not listed in the request */
  idScan?: InputMaybe<Array<InputMaybe<DocumentFileLinkInput>>>;
  name?: InputMaybe<PersonName>;
};

/** User invitation/referral/incentive token link to share with others */
export type UserInvitationLink = {
  __typename?: 'UserInvitationLink';
  url?: Maybe<Scalars['String']>;
};

export type VerificationAction = {
  __typename?: 'VerificationAction';
  action: ActionName;
  onObject: VerificationObject;
  reasons?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type VerificationDecision = {
  __typename?: 'VerificationDecision';
  canUserContinueTheInvestment: Scalars['Boolean'];
  isAccountVerified: Scalars['Boolean'];
  requiredActions?: Maybe<Array<Maybe<VerificationAction>>>;
};

export type VerificationObject = {
  __typename?: 'VerificationObject';
  accountId?: Maybe<Scalars['ID']>;
  stakeholderId?: Maybe<Scalars['ID']>;
  type: VerificationObjectType;
};

export enum VerificationObjectType {
  Company = 'COMPANY',
  Profile = 'PROFILE',
  Stakeholder = 'STAKEHOLDER'
}

export type VisaInput = {
  birthCountry: Scalars['String'];
  citizenshipCountry: Scalars['String'];
  visaType: Scalars['String'];
};
