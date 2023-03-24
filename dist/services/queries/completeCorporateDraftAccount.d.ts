import { UseApiMutationWithParams } from './interfaces.js';
import 'graphql-request';
import '@tanstack/react-query';
import '../../types/graphql.js';

type Parameters = {
    accountId: string;
};
type Hook = UseApiMutationWithParams<'completeCorporateDraftAccount', Parameters>;
declare const useCompleteCorporateDraftAccount: Hook;

export { useCompleteCorporateDraftAccount };
