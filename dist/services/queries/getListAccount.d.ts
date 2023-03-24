import { UseApiQuery } from './interfaces.js';
import 'graphql-request';
import '@tanstack/react-query';
import '../../types/graphql.js';

type Hook = UseApiQuery<'listAccountDrafts'>;
declare const useGetListAccount: Hook;

export { useGetListAccount };
