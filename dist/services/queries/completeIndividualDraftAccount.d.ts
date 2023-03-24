import { IndividualAccountInput } from '../../types/graphql.js';
import { UseApiMutationWithParams } from './interfaces.js';
import 'graphql-request';
import '@tanstack/react-query';

type Parameters = {
    accountId: string;
    input: IndividualAccountInput;
};
type Hook = UseApiMutationWithParams<'completeIndividualDraftAccount', Parameters>;
declare const useCompleteIndividualDraftAccount: Hook;

export { useCompleteIndividualDraftAccount };
