import { UseApiMutationWithParams } from './interfaces.js';
import 'graphql-request';
import '@tanstack/react-query';
import '../../types/graphql.js';

type Parameters = {
    draftAccountId: string;
};
type Hook = UseApiMutationWithParams<'openAccount', Parameters>;
declare const useOpenAccount: Hook;

export { useOpenAccount };
