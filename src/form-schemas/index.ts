import { DateFormats } from '../constants/date-formats';
import { STATE_CODES } from '../constants/states';
import dayjs from 'dayjs';
import zod from 'zod';

const requiredError = 'This field is required';
const standardRequiredString = zod.string().trim().min(1, requiredError);
const passwordSchema = zod
  .string({ required_error: requiredError })
  .trim()
  .min(8, 'At least 8 characters are required')
  .regex(/[a-z]/, { message: 'At least one lowercase letter is required' })
  .regex(/[A-Z]/, { message: 'At least one uppercase letter is required' })
  .regex(/\d/, { message: 'At least one number is required' });

export const formValidationRules = {
  email: zod.string({ required_error: requiredError }).email('Please provide a valid email'),
  password: passwordSchema,
  confirm_password: passwordSchema,
  firstName: standardRequiredString,
  lastName: standardRequiredString,
  netWorth: standardRequiredString,
  netIncome: standardRequiredString,
  employerName: standardRequiredString,
  occupation: standardRequiredString,
  industry: standardRequiredString,
  birthCountry: standardRequiredString,
  citizenshipCountry: standardRequiredString,
  visaType: standardRequiredString,
  middleName: zod.string().trim().optional(),
  // The API expects the authentication code to be unformatted (ex: 251-529 -> 251529)
  referralCode: zod
    .string()
    .trim()
    .regex(/^[a-zA-Z0-9]{6}$/, { message: 'Invalid referral code' }),
  date: zod.string({ required_error: requiredError }).regex(/^(\d{2})\/(\d{2})\/(\d{4})$/),
  phoneNumber: zod.string().regex(/^[0-9]{9,10}$/, { message: 'Invalid phone number' }),
  // The API expectes the authentication code to be unformatted (ex: 123-456 -> 123456)
  authenticationCode: zod.string({ required_error: requiredError }).regex(/^[a-zA-Z0-9]{6}$/, { message: 'Invalid authentication code' }),
  socialSecurityNumber: zod
    .string()
    .trim()
    .regex(/^((?!666|000|9\d{2})\d{3}-(?!00)\d{2}-(?!0{4})\d{4})|(\*{3}-\*{2}-\*{2}(?!0{2})\d{2})$/, { message: 'Invalid Social Security Number' }),
  maskedSocialSecurityNumber: zod
    .string()
    .trim()
    .regex(/^((?!666|000|9\d{2})\d{3}-(?!00)\d{2}-(?!0{4})\d{4})|(\*{3}-\*{2}-\d{4})$/, { message: 'Invalid Social Security Number' }),
  ein: zod.string().regex(/^[0-9]{2}-[0-9]{7}/, { message: 'Invalid EIN' }),

  address: zod.object({
    addressLine1: standardRequiredString,
    addressLine2: zod.string().trim().nullable().optional(),
    city: standardRequiredString,
    state: zod.enum(STATE_CODES),
    // eslint-disable-next-line security/detect-unsafe-regex
    zip: zod
      .string()
      .trim()
      .regex(/^\d{5}(?:-\d{4})?$/, { message: 'Invalid zip code' }),
  }),
  symbolTicker: standardRequiredString.nonempty('Please enter a ticker symbol'),
  finraInstitutionName: standardRequiredString.nonempty('Please enter your institution name'),
  seniorPoliticalFigure: standardRequiredString.nonempty('Please enter a political figure'),
};

export const dateOlderThanEighteenYearsSchema = formValidationRules.date.superRefine((value, context) => {
  const dates = {
    today: dayjs(),
    dateOfBirth: dayjs(value, DateFormats.DEFAULT),
  };

  const dateAgo = dates.today.subtract(18, 'year');
  const isDateOlderThanEighteenYears = dates.dateOfBirth.isBefore(dateAgo);

  if (!isDateOlderThanEighteenYears) {
    context.addIssue({
      code: 'invalid_date',
      message: 'You must be at least 18 years old to use this service.',
    });
  }
});
