import { DraftAccountType } from '../../types/graphql.js';
import { UseApiMutationWithParams } from './interfaces.js';
import 'graphql-request';
import '@tanstack/react-query';

type Parameters = {
    type: DraftAccountType;
};
type Hook = UseApiMutationWithParams<'createDraftAccount', Parameters>;
declare const useCreateDraftAccount: Hook;

export { useCreateDraftAccount };
