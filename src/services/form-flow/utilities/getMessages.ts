import { ErrorResponse } from '../../queries/interfaces';
import { ERROR_CODES } from '../../../constants/error-codes';

export const getMessages = (error: ErrorResponse) => {
  const { response } = error;
  const { errors } = response;

  const messages = errors.map(error => {
    const extension = error.extensions;

    if (!extension.details) {
      return 'Something went wrong, please refresh the page'
    }

    return extension.details.map(detail => {
      const { field, type} = detail;

      if(field === 'ssn' && type === ERROR_CODES.NOT_UNIQUE) {
        return 'SSN is not unique';
      }

      if(field === 'ein' && type === ERROR_CODES.NOT_UNIQUE) {
        return 'EIN is not unique';
      }

      return 'Something went wrong, please refresh the page'
    });
  });

  return [...new Set(messages.flat())];
};
