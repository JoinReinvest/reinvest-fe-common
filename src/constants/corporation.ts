import { SelectOptions } from "../types/select-option";

export const CORPORATION_ANNUAL_REVENUES = ['Under $10K', '$10K-$99.9K', '$100K-$999.9M', '$1M-$9.99M', '$10M+'] as const;

export type CorporationAnnualRevenue = (typeof CORPORATION_ANNUAL_REVENUES)[number];

export const CORPORATION_ANNUAL_REVENUE_AS_OPTIONS: SelectOptions = CORPORATION_ANNUAL_REVENUES.map(value => ({
  label: value,
  value,
}));

export const CORPORATION_NUMBER_OF_EMPLOYEES = ['Under 50', '50-500', '500+'] as const;

export type CorporationNumberOfEmployees = (typeof CORPORATION_NUMBER_OF_EMPLOYEES)[number];

export const CORPORATION_NUMBER_OF_EMPLOYEES_AS_OPTIONS: SelectOptions = CORPORATION_NUMBER_OF_EMPLOYEES.map(value => ({
  label: value,
  value,
}));
