import { GraphQLClient } from 'graphql-request';
import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
import { Mutation, Query } from '../../types/graphql';

export interface ErrorDetail {
  field: string;
  type: string;
}
export interface ErrorExtensions {
  code: string
  details: ErrorDetail[]
}

export interface Error {
  extensions: ErrorExtensions
  path: string
  message?: string
}

export interface Errors {
  errors: Error[]
}

export interface ErrorResponse {
  response: Errors
}

export type GetApiClient = () => Promise<GraphQLClient | undefined>;

export type UseApiQueryWithParams<QueryKey extends keyof Query, QueryParameters> = (
  getClient: GetApiClient,
  parameters: QueryParameters,
) => UseQueryResult<Query[QueryKey]>;
export type UseApiQuery<QueryKey extends keyof Query> = (getClient: GetApiClient) => UseQueryResult<Query[QueryKey]>;

export type UseApiMutationWithParams<MutationKey extends keyof Mutation, MutationParameters> = (
  getClient: GetApiClient,
) => UseMutationResult<Mutation[MutationKey], ErrorResponse, MutationParameters>;
export type UseApiMutation<MutationKey extends keyof Mutation> = (getClient: GetApiClient) => UseMutationResult<Mutation[MutationKey]>;
