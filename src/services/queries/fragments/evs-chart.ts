import { gql } from "graphql-request";
import { EVSChartPointFragment } from "./evs-chart-point";

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
