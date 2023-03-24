import { GraphQLClient } from 'graphql-request';
import { UseQueryResult, UseMutationResult } from '@tanstack/react-query';
import { Query, Mutation } from '../../types/graphql.js';

type GetApiClient = () => Promise<GraphQLClient | undefined>;
type UseApiQueryWithParams<QueryKey extends keyof Query, QueryParameters> = (getClient: GetApiClient, parameters: QueryParameters) => UseQueryResult<Query[QueryKey]>;
type UseApiQuery<QueryKey extends keyof Query> = (getClient: GetApiClient) => UseQueryResult<Query[QueryKey]>;
type UseApiMutationWithParams<MutationKey extends keyof Mutation, MutationParameters> = (getClient: GetApiClient, parameters: MutationParameters) => UseMutationResult<Mutation[MutationKey]>;
type UseApiMutation<MutationKey extends keyof Mutation> = (getClient: GetApiClient) => UseMutationResult<Mutation[MutationKey]>;

export { GetApiClient, UseApiMutation, UseApiMutationWithParams, UseApiQuery, UseApiQueryWithParams };
