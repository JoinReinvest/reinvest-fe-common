import { AccountType, CompanyTypeEnum } from '../types/graphql';
import { SelectCardOption } from '../types/select-card-option';

export const ACCOUNT_TYPES_AS_OPTIONS: SelectCardOption[] = [
  {
    title: 'For Individuals',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet...',
    value: AccountType.Individual,
  },
  {
    title: 'For Corporations',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet...',
    value: AccountType.Corporate,
  },
  {
    title: 'For Trust',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet...',
    value: AccountType.Trust,
  },
];

export const ACCOUNT_TYPES_VALUES = [AccountType.Individual, AccountType.Corporate, AccountType.Trust] as const;

export const CORPORATION_TYPES_AS_OPTIONS: SelectCardOption[] = [
  { title: 'Corporation', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', value: CompanyTypeEnum.Corporation },
  { title: 'Partnership', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', value: CompanyTypeEnum.Partnership },
  { title: 'LLC', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', value: CompanyTypeEnum.Llc },
];

export const CORPORATION_TYPES_VALUES = [CompanyTypeEnum.Corporation, CompanyTypeEnum.Partnership, CompanyTypeEnum.Llc] as const;

export const TRUST_TYPES_AS_OPTIONS: SelectCardOption[] = [
  {
    title: 'Revocable',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    value: CompanyTypeEnum.Revocable,
  },
  {
    title: 'Irrevocable',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    value: CompanyTypeEnum.Irrevocable,
  },
];

export const TRUST_TYPES_VALUES = [CompanyTypeEnum.Revocable, CompanyTypeEnum.Irrevocable] as const;
