import { UseApiMutationWithParams } from './interfaces.js';
import 'graphql-request';
import '@tanstack/react-query';
import '../../types/graphql.js';

type Parameters = {
    countryCode: string;
    phoneNumber: string;
};
type Hook = UseApiMutationWithParams<'setPhoneNumber', Parameters>;
declare const useSetPhoneNumber: Hook;

export { useSetPhoneNumber };
