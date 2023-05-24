import { gql } from "graphql-request";

export const NotificationObjectFragment = gql`
  fragment NotificationObjectFragment on NotificationObject {
    id
    type
  }
`;

export const NotificationFragment = gql`
  ${NotificationObjectFragment}

  fragment NotificationFragment on Notification {
    id
    notificationType
    header
    date
		body
    isRead
    isDismissible
    accountId
    onObject {
      ...NotificationObjectFragment
    }
  }
`;

export const NotificationStatsFragment = gql`
  fragment NotificationStatsFragment on NotificationsStats {
    unreadCount
    totalCount
    accountId
  }
`