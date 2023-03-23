import { GraphQLClient } from "graphql-request";
import { UseMutationResult, UseQueryResult } from "@tanstack/react-query";
import { Mutation, Query } from "../../types/graphql";

export type GetApiClient = () => Promise<GraphQLClient | undefined>;

export type UseApiQueryWithParams<QueryKey extends keyof Query, QueryParameters> = (getClient: GetApiClient, parameters: QueryParameters) => UseQueryResult<Query[QueryKey]>;
export type UseApiQuery<QueryKey extends keyof Query> = (getClient: GetApiClient) => UseQueryResult<Query[QueryKey]>;

export type UseApiMutationWithParams<MutationKey extends keyof Mutation, MutationParameters> = (getClient: GetApiClient, parameters: MutationParameters) => UseMutationResult<Mutation[MutationKey]>;
export type UseApiMutation<MutationKey extends keyof Mutation> = (getClient: GetApiClient) => UseMutationResult<Mutation[MutationKey]>;
