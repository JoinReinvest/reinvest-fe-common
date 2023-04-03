import { ErrorResponse } from '../../queries/interfaces';
import { MessageMapper, messageMapper } from '../../../constants/messageMapper';

export const getMessage = (error: ErrorResponse) => {
  const { response } = error;
  const { errors } = response;

  const messages = errors.map(error => {
    const extension = error.extensions;

    if (!extension.details) {
      return error.message;
    }

    return extension.details.map(detail => {
      return `${detail.field} ${messageMapper[detail.type as keyof MessageMapper]}`;
    });
  });

  return messages.flat();
};
