export interface SelectOption {
  title: string;
  value: string;
  description?: string;
}

export type SelectOptions = SelectOption[];

export type ExtendedSelectOption<Fields> = SelectOption & Fields;
export type ExtendedSelectOptions<Fields> = ExtendedSelectOption<Fields>[];
