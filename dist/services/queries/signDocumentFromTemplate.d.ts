import { TemplateName, GenericFieldInput } from '../../types/graphql.js';
import { UseApiMutationWithParams } from './interfaces.js';
import 'graphql-request';
import '@tanstack/react-query';

type Hook = UseApiMutationWithParams<'signDocumentFromTemplate', Parameters>;
interface Parameters {
    templateId: TemplateName;
    fields: GenericFieldInput[];
    signature: string;
}
declare const useSignDocumentFromTemplate: Hook;

export { useSignDocumentFromTemplate };
