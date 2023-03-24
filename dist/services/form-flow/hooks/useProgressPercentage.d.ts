import { C as CurrentFormStep } from '../../../interfaces-1132907d.js';
import { FlowStore } from '../processors/flow-store.js';
import { useFields } from './useFields.js';
import 'react';

type UseFieldsParams<FormFields> = Pick<ReturnType<typeof useFields<FormFields>>, 'getFields'>;
interface Params<FormFields> extends UseFieldsParams<FormFields> {
    currentStep: CurrentFormStep<FormFields>;
    flowStore: FlowStore<FormFields>;
}
declare const useProgressPercentage: <FormFields>({ flowStore, getFields, currentStep }: Params<FormFields>) => {
    progressPercentage: number;
};

export { useProgressPercentage };
