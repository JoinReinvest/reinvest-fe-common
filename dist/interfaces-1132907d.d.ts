import { FC, PropsWithChildren } from 'react';

declare class FlowStep<FormFields> {
    index: number;
    identifier: string;
    previousStep: FlowStep<FormFields> | null;
    nextStep: FlowStep<FormFields> | null;
    Component: FC<StepComponentProps<FormFields>>;
    isAValidationView: boolean;
    doesMeetConditionFields: (fields: FormFields) => boolean;
    willBePartOfTheFlow: (fields: FormFields) => boolean;
    constructor({ isAValidationView, previousStep, nextStep, doesMeetConditionFields, Component, index, identifier, willBePartOfTheFlow, }: FlowStepParams<FormFields>);
}

interface StepComponentProps<FormFields> {
    moveToNextStep: () => void;
    moveToPreviousStep: () => void;
    moveToStepByIdentifier: (identifier: string) => void;
    storeFields: FormFields;
    updateStoreFields: (fields: Partial<FormFields>) => Promise<void>;
}
interface FlowStepParams<FormFields> {
    Component: FC<StepComponentProps<FormFields>>;
    identifier: string;
    index: number;
    nextStep: FlowStep<FormFields> | null;
    previousStep: FlowStep<FormFields> | null;
    doesMeetConditionFields?: (fields: FormFields) => boolean;
    isAValidationView?: boolean;
    willBePartOfTheFlow?: (fields: FormFields) => boolean;
}
type StepParams<FormFields> = Pick<FlowStepParams<FormFields>, 'Component' | 'isAValidationView' | 'doesMeetConditionFields' | 'willBePartOfTheFlow' | 'identifier'>;
type Steps<FormFields> = StepParams<FormFields>[];
interface ContextStateMeta {
    currentStepIdentifier: string | null;
    isFirstStep: boolean;
    isLastStep: boolean;
    nextStepIdentifier: string | null;
    previousStepIdentifier: string | null;
}
interface ContextState<FormFields> {
    CurrentStepView: FC;
    getStoreFields: () => FormFields | null;
    meta: ContextStateMeta;
    moveToNextValidStep: () => void;
    moveToPreviousValidStep: () => void;
    progressPercentage: number;
    updateStoreFields: (fields: Partial<FormFields>) => Promise<void>;
}
interface ContextProviderProps<FormFields> extends PropsWithChildren {
    initialStoreFields: FormFields;
    isResumable?: boolean;
    onStoreUpdate?: (fields: FormFields) => Promise<void>;
}
type CurrentFormStep<FormFields> = FlowStep<FormFields> | null;

export { CurrentFormStep as C, FlowStep as F, StepComponentProps as S, StepParams as a, Steps as b, ContextStateMeta as c, ContextState as d, ContextProviderProps as e, FlowStepParams as f };
