interface SelectOption {
    label: string;
    value: string;
}
type SelectOptions = SelectOption[];
type ExtendedSelectOption<Fields> = SelectOption & Fields;
type ExtendedSelectOptions<Fields> = ExtendedSelectOption<Fields>[];

export { ExtendedSelectOption, ExtendedSelectOptions, SelectOption, SelectOptions };
