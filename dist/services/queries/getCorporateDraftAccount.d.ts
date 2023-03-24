import { UseApiQueryWithParams } from './interfaces.js';
import 'graphql-request';
import '@tanstack/react-query';
import '../../types/graphql.js';

type Hook = UseApiQueryWithParams<'getCorporateDraftAccount', {
    accountId: string;
}>;
declare const useGetCorporateDraftAccount: Hook;

export { useGetCorporateDraftAccount };
