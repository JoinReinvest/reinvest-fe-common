import { AccountType, CorporateCompanyType, TrustCompanyType } from '../types/graphql';
import { SelectCardOption } from '../types/select-card-option';

export const ACCOUNT_TYPES_AS_OPTIONS: SelectCardOption[] = [
  {
    title: 'For Individuals',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consel.',
    value: AccountType.Individual,
  },
  {
    title: 'For Corporations',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consel.',
    value: AccountType.Corporate,
  },
  {
    title: 'For Trust',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consel.',
    value: AccountType.Trust,
  },
];

export const ACCOUNT_TYPES_VALUES = [AccountType.Individual, AccountType.Corporate, AccountType.Trust] as const;

export const CORPORATION_TYPES_AS_OPTIONS: SelectCardOption[] = [
  { title: 'Corporation', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', value: CorporateCompanyType.Corporation },
  { title: 'Partnership', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', value: CorporateCompanyType.Partnership },
  { title: 'LLC', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', value: CorporateCompanyType.Llc },
];

export const CORPORATION_TYPES_VALUES = [CorporateCompanyType.Corporation, CorporateCompanyType.Partnership, CorporateCompanyType.Llc] as const;

export const TRUST_TYPES_AS_OPTIONS: SelectCardOption[] = [
  {
    title: 'Revocable',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    value: TrustCompanyType.Revocable,
  },
  {
    title: 'Irrevocable',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    value: TrustCompanyType.Irrevocable,
  },
];

export const TRUST_TYPES_VALUES = [TrustCompanyType.Revocable, TrustCompanyType.Irrevocable] as const;
