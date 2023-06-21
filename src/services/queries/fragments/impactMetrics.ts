import { gql } from 'graphql-request';

export const ImpactMetricsFragment = gql`
  fragment ImpactMetricsFragment on ImpactMetrics {
    units
    totalProjectSize
    jobsCreated
  }
`;
