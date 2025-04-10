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
    if (options?.currentFormat === 'API_TZ') {
      const dateWithTimezone = addTimezoneSymbol(date);

      return dayjs(dateWithTimezone).format(expectedFormat);
    }

    const currentFormat = DateFormats[options.currentFormat];

    return dayjs(date, currentFormat).format(expectedFormat);
  };

  return dayjs(date).format(expectedFormat);
};

export const isDateFromApi = (date: Date | string): boolean => {
  return dayjs(date, [DateFormats.API, DateFormats.API_TZ], true).isValid();
};

export const isToday = (date: Date | Dayjs) => {
  return dayjs(date).isToday();
};

export function formatDateForNotification(dateFromApi: string) {
  const today = dayjs();
  const date = dayjs(addTimezoneSymbol(dateFromApi));

  const matchesToday = isToday(date);

  if (matchesToday) {
    return 'Today';
  }

  const matchesWeek = today.isSame(date, 'week');

  if (matchesWeek) {
    const isSameDayThreshold = today.get('day') === date.get('day');
    const daysAgo = today.diff(date, 'day');
    const daysDiff = !isSameDayThreshold && daysAgo === 0 ? 1 : daysAgo;

    return daysDiff !== 0 ? `${daysDiff}d` : 'Today';
  }

  const matchesYear = today.isSame(date, 'year');

  if (matchesYear) {
    return date.format(NotificationsDateFormats.THIS_YEAR);
  }

  return date.format(NotificationsDateFormats.PREVIOUS_YEAR);
}

function addTimezoneSymbol(date: string) {
  return date.endsWith('Z') ? date : [date, 'Z'].join('');
}
