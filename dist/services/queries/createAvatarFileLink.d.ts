import { UseApiMutation } from './interfaces.js';
import 'graphql-request';
import '@tanstack/react-query';
import '../../types/graphql.js';

declare const useCreateAvatarFileLink: UseApiMutation<'createAvatarFileLink'>;

export { useCreateAvatarFileLink };
