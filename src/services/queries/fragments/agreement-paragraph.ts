import { gql } from 'graphql-request';

export const AgreementParagraphFragment = gql`
  fragment AgreementParagraphFragment on AgreementParagraph {
    lines
    isCheckedOption
  }
`;
