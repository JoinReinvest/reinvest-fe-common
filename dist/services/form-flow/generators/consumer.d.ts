import { Context } from 'react';
import { d as ContextState } from '../../../interfaces-1132907d.js';

interface Parameters<FormFields> {
    context: Context<ContextState<FormFields>>;
}
declare const generateConsumer: <FormFields>({ context }: Parameters<FormFields>) => () => ContextState<FormFields>;

export { generateConsumer };
