import { UseApiMutationWithParams } from './interfaces.js';
import 'graphql-request';
import '@tanstack/react-query';
import '../../types/graphql.js';

type Parameters = {
    countryCode: string;
    phoneNumber: string;
    authCode: string;
};
type Hook = UseApiMutationWithParams<'verifyPhoneNumber', Parameters>;
declare const useVerifyPhoneNumber: Hook;

export { useVerifyPhoneNumber };
