import { e as ContextProviderProps } from '../../../interfaces-1132907d.js';
import 'react';

type Params<FormFields> = Pick<ContextProviderProps<FormFields>, 'initialStoreFields' | 'onStoreUpdate'>;
declare const useFields: <FormFields>({ initialStoreFields, onStoreUpdate }: Params<FormFields>) => {
    getFields: () => FormFields;
    updateFields: (fieldsToUpdate: Partial<FormFields>) => Promise<void>;
};

export { useFields };
