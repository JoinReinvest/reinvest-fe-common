import { CALLING_CODES } from '../constants/country-codes';

/**
 * Separates calling code from phone number and formats phone number
 * @example
 * // returns { callingCode: '+48' phoneNumber: '123-123-123', formatted: '(+48) 123-123-123'  }
 * parsePhoneNumber('+48123123123')
 * @example
 * // returns { callingCode: '+1' phoneNumber: '123-123-1234', formatted: '(+1) 123-123-1234'  }
 * parsePhoneNumber('+11231231234')
 */
export const parsePhoneNumber = (phoneNumber: string) => {
  const possibleCallingCode = phoneNumber.replace('+', '').slice(0, 3); // first three digits are probably a calling code
  const actualCallingCode = '+' + CALLING_CODES.find(code => possibleCallingCode.substring(0, code.length) === code);

  const phoneNumberWithoutCallingCode = phoneNumber.replace(actualCallingCode, '');

  const formattedPhoneNumber = phoneNumberWithoutCallingCode
    .split('')
    .map((char, index) => ((index + 1) % 3 === 0 && index < 6 ? `${char}-` : char))
    .join('');

  return {
    callingCode: actualCallingCode,
    phoneNumber: formattedPhoneNumber,
    formatted: `(${actualCallingCode}) ${formattedPhoneNumber}`,
  };
};
