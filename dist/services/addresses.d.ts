import { ExtendedSelectOption } from '../types/select-option.js';
import { Address } from '../types/graphql.js';

type AddressAsOption = ExtendedSelectOption<Address>;
declare const formatAddressOptionLabel: ({ addressLine1, city, state, label }: AddressAsOption, inputValue?: string) => string;
declare const getAddresses: (inputValue: string) => Promise<AddressAsOption[]>;

export { AddressAsOption, formatAddressOptionLabel, getAddresses };
