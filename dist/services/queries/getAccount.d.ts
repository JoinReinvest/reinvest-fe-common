import { UseApiQueryWithParams } from './interfaces.js';
import { QueryGetIndividualAccountArgs } from '../../types/graphql.js';
import 'graphql-request';
import '@tanstack/react-query';

type Hook = UseApiQueryWithParams<'getIndividualAccount', QueryGetIndividualAccountArgs>;
declare const useGetAccount: Hook;

export { useGetAccount };
