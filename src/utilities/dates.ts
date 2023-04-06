import dayjs from "dayjs";
import { DATE_FORMAT, API_DATE_FORMAT } from '../constants/date-formats';

export const formatDateForApi = (date: Date | string) => {
  return dayjs(date, DATE_FORMAT).format(API_DATE_FORMAT);
};

export const formatDateFromApi = (date: Date | string) => {
  return dayjs(date, API_DATE_FORMAT).format(DATE_FORMAT);
}

export const isDateFromApi = (date: Date | string): boolean => {
  return dayjs(date, API_DATE_FORMAT, true).isValid();
}
