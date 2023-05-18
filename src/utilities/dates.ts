import dayjs, { Dayjs } from 'dayjs';
import pluginAdvancedFormat from 'dayjs/plugin/advancedFormat';
import pluginIsToday from 'dayjs/plugin/isToday';
import pluginWeekOfYear from 'dayjs/plugin/weekOfYear';

import { DateFormats, DateFormatKeys, NotificationsDateFormats } from '../constants/date-formats';

dayjs.extend(pluginIsToday);
dayjs.extend(pluginAdvancedFormat);
dayjs.extend(pluginWeekOfYear);

type FormatDateOptions = { currentFormat?: DateFormatKeys };
export function formatDate(date: string | Date, format: DateFormatKeys, options: Required<FormatDateOptions>): string;
export function formatDate(date: Date, format: DateFormatKeys, options?: FormatDateOptions): string;
export function formatDate(date: Date | string, format: DateFormatKeys, options?: FormatDateOptions): string {
  const expectedFormat = DateFormats[format];

  if (typeof date === 'string' && options?.currentFormat) {
    const currentFormat = DateFormats[options.currentFormat];

    return dayjs(date, currentFormat).format(expectedFormat);
  };

  return dayjs(date).format(expectedFormat);
};

export const isDateFromApi = (date: Date | string): boolean => {
  return dayjs(date, DateFormats.API, true).isValid();
};

export const isToday = (date: Date | Dayjs) => {
  return dayjs(date).isToday();
};

export function formatDateForNotification(dateFromApi: string) {
  const today = dayjs();
  const date = dayjs(dateFromApi, DateFormats.API);

  const matchesToday = isToday(date);

  if (matchesToday) {
    return 'Today';
  }

  const matchessWeek = today.isSame(date, 'week');

  if (matchessWeek) {
    const daysAgo = today.diff(date, 'day');

    return `${daysAgo}d`;
  }

  const matchesYear = today.isSame(date, 'year');

  if (matchesYear) {
    return date.format(NotificationsDateFormats.THIS_YEAR);
  }

  return date.format(NotificationsDateFormats.PREVIOUS_YEAR);
}
