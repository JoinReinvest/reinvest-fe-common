import { DomicileType } from 'types/graphql';
import { SelectOptions } from 'types/select-option';

export const RESIDENCY_STATUS_OPTIONS: SelectOptions = [
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
