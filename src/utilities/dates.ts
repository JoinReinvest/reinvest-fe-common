import dayjs, { Dayjs } from 'dayjs';
import pluginAdvancedFormat from 'dayjs/plugin/advancedFormat';
import pluginIsToday from 'dayjs/plugin/isToday';
import pluginWeekOfYear from 'dayjs/plugin/weekOfYear';

import {
  API_DATE_FORMAT,
  DATE_FORMAT,
  INVESTMENT_DATE_FORMAT,
  INVESTMENT_DATE_FREQUENCY_LONG_FORMAT,
  INVESTMENT_DATE_FREQUENCY_SHORT_FORMAT,
  RECURRENT_INVESTMENT_DATE_FORMAT,
} from '../constants/date-formats';

dayjs.extend(pluginIsToday);
dayjs.extend(pluginAdvancedFormat);
dayjs.extend(pluginWeekOfYear);

export const formatDateForApi = (date: Date | string) => {
  return dayjs(date, DATE_FORMAT).format(API_DATE_FORMAT);
};

export const formatDateFromApi = (date: Date | string) => {
  return dayjs(date, API_DATE_FORMAT).format(DATE_FORMAT);
};

export const isDateFromApi = (date: Date | string): boolean => {
  return dayjs(date, API_DATE_FORMAT, true).isValid();
};

export const formatDateForInvestmentDisplay = (date: Date) => {
  return dayjs(date).format(INVESTMENT_DATE_FORMAT);
};

export const isToday = (date: Date) => {
  return dayjs(date).isToday();
};

export const formatDateForRecurrentInvestmentDisplay = (date: Date) => {
  return dayjs(date).format(RECURRENT_INVESTMENT_DATE_FORMAT);
};

export function formatInvestmentDateFrequency(date: Date, isShortFormat: boolean) {
  return dayjs(date).format(isShortFormat ? INVESTMENT_DATE_FREQUENCY_SHORT_FORMAT : INVESTMENT_DATE_FREQUENCY_LONG_FORMAT);
}

export function getWeekOfMonth(date: Dayjs) {
  const startOfMonth = date.startOf('month');
  const weekOfMonth = date.add(1, 'week').week() - startOfMonth.week();

  return weekOfMonth;
}

export function countWeeksInMonth(date: Dayjs) {
  const month = date.month();
  const startOfMonth = date.startOf('month');
  const endOfMonth = date.endOf('month');

  const weeksInMonth = endOfMonth.week() - startOfMonth.week() + 1;

  // If the start of the month is in the previous year, we should not count the week that overlaps with the previous year.
  if (startOfMonth.week() === 1 && startOfMonth.year() !== month) {
    return weeksInMonth - 1;
  }

  return weeksInMonth;
}
