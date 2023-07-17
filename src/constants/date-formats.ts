export type DateFormatKeys = keyof typeof DateFormats;

export enum DateFormats {
  DEFAULT = 'MM/DD/YYYY',
  API = 'YYYY-MM-DD',
  API_TZ = 'YYYY-MM-DDTHH:mm:ss',
  INVESTMENT = 'MMMM D, YYYY',
  INVESTMENT_SUMMARY = 'MMM D, YYYY',
  INVESTMENT_FEES = 'D MMM YYYY',
  INVESTMENT_RECURRENT = 'dddd, MMM D',
  INVESTMENT_FREQUENCY_SHORT = 'Do',
  INVESTMENT_FREQUENCY_LONG = 'dddd',
  DATE_PICKER = 'MMMM YYYY',
  CHART = 'ddd, MMM D',
  PROPERTY_UPDATE = 'MMM, Do, YYYY',
  ACCOUNT_ACTIVITY = 'MMM DD, YYYY | HH:mm',
}

export enum NotificationsDateFormats {
  THIS_YEAR = 'D MMM',
  PREVIOUS_YEAR = 'D MMM YYYY',
}
