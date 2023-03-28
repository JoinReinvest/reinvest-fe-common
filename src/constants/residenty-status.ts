import { DomicileType } from 'types/graphql';
import { SelectCardOption } from 'types/select-card-option';

export const RESIDENCY_STATUS_OPTIONS: SelectCardOption[] = [
  {
    value: DomicileType.Citizen,
    title: 'US Citizen',
  },
  {
    value: DomicileType.GreenCard,
    title: 'Green Card',
  },
  {
    value: DomicileType.Visa,
    title: 'Visa',
  },
];

export const RESIDENCY_STATUS_VALUES = [DomicileType.Citizen, DomicileType.GreenCard, DomicileType.Visa] as const;
