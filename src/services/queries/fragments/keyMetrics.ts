import { gql } from 'graphql-request';

export const KeyMetricsFragment = gql`
  fragment KeyMetricsFragment on KeyMetrics {
    projectReturn
    structure
    rating
  }
`;
