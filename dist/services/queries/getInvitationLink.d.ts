import { UseApiQuery } from './interfaces.js';
import 'graphql-request';
import '@tanstack/react-query';
import '../../types/graphql.js';

type Hook = UseApiQuery<'userInvitationLink'>;
declare const getInvitationQuery: string;
declare const useGetInvitationLink: Hook;

export { getInvitationQuery, useGetInvitationLink };
