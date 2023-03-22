export interface SelectOption {
  label: string;
  value: string;
}

export type SelectOptions = SelectOption[];

export type ExtendedSelectOption<Fields> = SelectOption & Fields;
export type ExtendedSelectOptions<Fields> = ExtendedSelectOption<Fields>[];
