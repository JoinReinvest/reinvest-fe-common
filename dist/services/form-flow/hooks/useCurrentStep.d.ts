import { C as CurrentFormStep, c as ContextStateMeta } from '../../../interfaces-1132907d.js';
import { FC } from 'react';
import { FlowStore } from '../processors/flow-store.js';
import { useFields } from './useFields.js';

type UseFieldsWithStorageParams<FormFields> = ReturnType<typeof useFields<FormFields>>;
interface Params<FormFields> extends UseFieldsWithStorageParams<FormFields> {
    flowStore: FlowStore<FormFields>;
    isFormFlowResumable: boolean;
}
declare function useCurrentStep<FormFields>({ flowStore, getFields, updateFields, isFormFlowResumable }: Params<FormFields>): {
    currentStep: CurrentFormStep<FormFields>;
    meta: ContextStateMeta;
    CurrentStepView: FC<{}>;
    moveToNextValidStep: () => void;
    moveToPreviousValidStep: () => void;
    moveToStepByIdentifier: (identifier: string) => void;
};

export { useCurrentStep };
