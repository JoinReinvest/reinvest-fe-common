import dayjs from 'dayjs';
import pluginIsToday from 'dayjs/plugin/isToday';
import { API_DATE_FORMAT, DATE_FORMAT, INVESTMENT_DATE_FORMAT } from '../constants/date-formats';

dayjs.extend(pluginIsToday);

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
