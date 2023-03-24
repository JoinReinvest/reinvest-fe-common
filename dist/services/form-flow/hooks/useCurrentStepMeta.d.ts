import { c as ContextStateMeta, C as CurrentFormStep } from '../../../interfaces-1132907d.js';
import { FlowStore } from '../processors/flow-store.js';
import 'react';

interface Params<FormFields> {
    currentStep: CurrentFormStep<FormFields>;
    flowStore: FlowStore<FormFields>;
}
declare const useCurrentStepMeta: <FormFields>({ flowStore, currentStep }: Params<FormFields>) => ContextStateMeta;

export { useCurrentStepMeta };
