import { UseApiQueryWithParams } from './interfaces.js';
import 'graphql-request';
import '@tanstack/react-query';
import '../../types/graphql.js';

type Hook = UseApiQueryWithParams<'getIndividualDraftAccount', {
    accountId: string;
}>;
declare const useGetIndividualDraftAccount: Hook;

export { useGetIndividualDraftAccount };
