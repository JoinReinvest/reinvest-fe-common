import { b as Steps, F as FlowStep } from '../../../interfaces-1132907d.js';
import 'react';

declare class FlowStore<FormFields> {
    private head;
    private tail;
    private length;
    constructor(steps: Steps<FormFields>);
    getHead: () => FlowStep<FormFields> | null;
    getTail: () => FlowStep<FormFields> | null;
    getNextValidStep: (fromStep: FlowStep<FormFields> | null, fields: FormFields) => FlowStep<FormFields> | null;
    getPreviousValidStep: (fromStep: FlowStep<FormFields> | null, fields: FormFields) => FlowStep<FormFields> | null;
    getTotalOfValidSteps: (currentStep: FlowStep<FormFields> | null, fields: FormFields) => {
        numberOfValidSteps: number;
        currentStepIndex: number;
    };
    getLastIncompleteStep: (fields: FormFields) => FlowStep<FormFields> | null;
    getStepByIdentifier: (identifier: string) => FlowStep<FormFields> | null;
    private initializeSteps;
}

export { FlowStore };
