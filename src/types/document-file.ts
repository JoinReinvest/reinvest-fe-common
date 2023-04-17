import { DocumentFileLinkId } from './graphql';

export interface DocumentFile extends DocumentFileLinkId {
  file?: File;
};
