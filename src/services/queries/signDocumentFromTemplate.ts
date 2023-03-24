import { useMutation } from '@tanstack/react-query';
import { gql } from 'graphql-request';
import { GenericFieldInput, Mutation, TemplateName } from '../../types/graphql';
import { UseApiMutationWithParams } from './interfaces';

type Hook = UseApiMutationWithParams<'signDocumentFromTemplate', Parameters>;
interface Parameters {
  templateId: TemplateName;
  fields: GenericFieldInput[];
  signature: string;
}

const signDocumentFromTemplateMutation = gql`
  mutation signDocumentFromTemplate($templateId: TemplateName, $fields: [GenericFieldInput], signature: String) {
    signDocumentFromTemplate(templateId: $templateId, fields: $fields, signature: $signature) {
      url
      id
    }
  }
`;

export const useSignDocumentFromTemplate: Hook = (getApiClient) =>
  useMutation({
    mutationFn: async input => {
      const api = await getApiClient();

      if (!api) {
        return null;
      }

      const { signDocumentFromTemplate } = await api.request<Mutation>(signDocumentFromTemplateMutation, { ...input });

      return signDocumentFromTemplate;
    },
  });
