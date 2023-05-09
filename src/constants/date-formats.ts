export type DateFormatKeys = keyof typeof DateFormats;

export enum DateFormats {
	DEFAULT = 'MM/DD/YYYY',
	API = 'YYYY-MM-DD',
	INVESTMENT = 'MMMM D, YYYY',
	INVESTMENT_RECURRENT = 'dddd, MMM D',
	INVESTMENT_FREQUENCY_SHORT = 'Do',
	INVESTMENT_FREQUENCY_LONG = 'dddd',
	DATE_PICKER = 'MMMM YYYY',
	CHART = 'ddd, MMM D'
}
