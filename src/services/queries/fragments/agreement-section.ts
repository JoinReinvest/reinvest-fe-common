import { gql } from 'graphql-request';
import { AgreementParagraphFragment } from './agreement-paragraph';

export const AgreementSectionFragment = gql`
  ${AgreementParagraphFragment}

  fragment AgreementSectionFragment on AgreementSection {
    header
    paragraphs {
      ...AgreementParagraphFragment
    }
  }
`;
