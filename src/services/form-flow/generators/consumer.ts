import { Context } from 'react';

import { ContextState } from '../interfaces';
import { createContextConsumer } from '../../../utilities/contexts';

interface Parameters<FormFields> {
  context: Context<ContextState<FormFields>>;
}

export const generateConsumer = <FormFields>({ context }: Parameters<FormFields>) => {
  return createContextConsumer(context, 'FormFlow')
};
