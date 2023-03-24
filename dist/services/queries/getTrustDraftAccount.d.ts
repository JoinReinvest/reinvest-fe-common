import { UseApiQueryWithParams } from './interfaces.js';
import 'graphql-request';
import '@tanstack/react-query';
import '../../types/graphql.js';

type Parameters = {
    accountId: string;
};
type Hook = UseApiQueryWithParams<'getTrustDraftAccount', Parameters>;
declare const useGetTrustDraftAccount: Hook;

export { useGetTrustDraftAccount };
