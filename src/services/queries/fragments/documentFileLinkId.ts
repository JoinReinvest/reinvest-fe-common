import { gql } from 'graphql-request';

export const DocumentFileLinkIdFragment = gql`
  fragment DocumentFileLinkIdFragment on DocumentFileLinkId {
    id
    fileName
  }
`;
