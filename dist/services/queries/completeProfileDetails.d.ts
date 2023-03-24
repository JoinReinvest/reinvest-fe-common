import { ProfileDetailsInput } from '../../types/graphql.js';
import { UseApiMutationWithParams } from './interfaces.js';
import 'graphql-request';
import '@tanstack/react-query';

type Parameters = {
    input: ProfileDetailsInput;
};
type Hook = UseApiMutationWithParams<'completeProfileDetails', Parameters>;
declare const useCompleteProfileDetails: Hook;

export { useCompleteProfileDetails };
