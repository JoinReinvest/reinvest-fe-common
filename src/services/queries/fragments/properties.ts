import { POIFragment } from './poiFragment';
import { ImpactMetricsFragment } from './impactMetrics';
import { gql } from 'graphql-request';
import { KeyMetricsFragment } from './keyMetrics';
import { LocationFragment } from './location';
import { PropertyAddressFragment } from './propertyAddress';

export const PropertiesFragment = gql`
  ${KeyMetricsFragment}
  ${ImpactMetricsFragment}
  ${PropertyAddressFragment}
  ${POIFragment}
  ${LocationFragment}

  fragment PropertiesFragment on Property {
    name
    keyMetrics {
      ...KeyMetricsFragment
    }
    impactMetrics {
      ...ImpactMetricsFragment
    }
    address {
      ...PropertyAddressFragment
    }
    image
    gallery
    POIs {
      ...POIFragment
    }
    location {
      ...LocationFragment
    }
  }
`;
