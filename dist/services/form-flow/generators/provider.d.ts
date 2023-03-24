import { Context } from 'react';
import { e as ContextProviderProps, d as ContextState, b as Steps } from '../../../interfaces-1132907d.js';

interface Parameters<FormFields> {
    context: Context<ContextState<FormFields>>;
    steps: Steps<FormFields>;
}
declare function generateProvider<FormFields>({ context, steps }: Parameters<FormFields>): ({ initialStoreFields, onStoreUpdate, isResumable, children }: ContextProviderProps<FormFields>) => JSX.Element;

export { generateProvider };
