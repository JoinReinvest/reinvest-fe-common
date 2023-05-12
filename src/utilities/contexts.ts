import { useContext, Context } from 'react';

export function createContextConsumer<ContextState>(context: Context<ContextState>, providerName: string) {
  return () => {
    const contextState = useContext(context);

    if (!contextState) {
      throw new Error(`No ${providerName} context provider found.`);
    }

    return contextState;
  };
}
