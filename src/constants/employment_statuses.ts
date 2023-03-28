import { EmploymentStatus } from "types/graphql";
import { SelectCardOption } from "types/select-card-option";

export const EMPLOYMENT_STATUSES: SelectCardOption[] = [
  {
    title: 'Employed',
    value: EmploymentStatus.Employed,
  },
  {
    title: 'Unemployed',
    value: EmploymentStatus.Unemployed,
  },
  {
    title: 'Retired',
    value: EmploymentStatus.Retired,
  },
  {
    title: 'Student',
    value: EmploymentStatus.Student,
  },
];

export const EMPLOYMENT_STATUSES_VALUES = [EmploymentStatus.Employed, EmploymentStatus.Unemployed, EmploymentStatus.Retired, EmploymentStatus.Student] as const;
