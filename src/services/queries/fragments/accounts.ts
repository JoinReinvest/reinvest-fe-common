import { gql } from 'graphql-request';
import { AvatarFragment } from './avatar';

export const AccountsFragment = gql`
  ${AvatarFragment}
  fragment AccountsFragment on AccountOverview {
    id
    type
    label
    avatar {
      ...AvatarFragment
    }
    positionTotal
  }
`;
