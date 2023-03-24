import { UseApiQuery } from './interfaces.js';
import 'graphql-request';
import '@tanstack/react-query';
import '../../types/graphql.js';

type Hook = UseApiQuery<'getProfile'>;
declare const getProfileQuery: string;
declare const useGetUserProfile: Hook;

export { getProfileQuery, useGetUserProfile };
