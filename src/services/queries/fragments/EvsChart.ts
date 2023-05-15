import { gql } from 'graphql-request';
import { EVSChartPointFragment } from './EvsChartPoint';

export const EVSChartFragment = gql`
  ${EVSChartPointFragment}
  fragment EVSChartFragment on EVSChart {
    resolution
    startAt
    endAt
    changeFactor
    dataPoints {
      ...EVSChartPointFragment
    }
  }
`;
