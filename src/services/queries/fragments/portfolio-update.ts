import { gql } from "graphql-request";

export const PortfolioUpdateFragment = gql`
  fragment PortfolioUpdateFragment on PortfolioUpdate {
    image {
      id
      url
    }
    title
    body
    createdAt
    author {
      id
      name
      avatar {
        id
        url
      }
    }
  }
`;
