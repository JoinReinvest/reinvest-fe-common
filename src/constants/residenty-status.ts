import { DomicileType, SimplifiedDomicileType } from '../types/graphql';
import { SelectOptions } from '../types/select-option';
import { SelectCardOption } from '../types/select-card-option';

export const RESIDENCY_STATUS_OPTIONS: SelectOptions = [
  {
    value: DomicileType.Citizen,
    label: 'US Citizen',
  },
  {
    value: DomicileType.GreenCard,
    label: 'Green Card',
  },
  {
    value: DomicileType.Visa,
    label: 'Visa',
  },
];

export const RESIDENCY_STATUS_VALUES = [DomicileType.Citizen, DomicileType.GreenCard, DomicileType.Visa] as const;

export const RESIDENCY_STATUS_LABELS = ['US Citizen', 'Green Card', 'Visa'] as const;

export const RESIDENCY_STATUS_AS_RADIO_GROUP_OPTIONS: SelectCardOption[] = RESIDENCY_STATUS_OPTIONS.map(({ label, value }) => ({ title: label, value }));

export const STAKEHOLDER_RESIDENCY_STATUS_OPTIONS: SelectOptions = [
  {
    value: SimplifiedDomicileType.Citizen,
    label: 'US Citizen',
  },
  {
    value: SimplifiedDomicileType.Resident,
    label: 'US Resident',
  },
];

export const STAKEHOLDER_RESIDENCY_STATUS_VALUES = [SimplifiedDomicileType.Citizen, SimplifiedDomicileType.Resident] as const;
