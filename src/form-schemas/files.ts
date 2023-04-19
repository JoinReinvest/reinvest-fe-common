import { DocumentFile } from '../types/document-file';
import { BYTES_IN_MEGABYTE } from '../constants/conversions';
import { mapToMimeType, PartialMimeTypeKeys } from '../constants/mime-types';
import zod from 'zod';

export const generateFileSchema = (accepts: PartialMimeTypeKeys, sizeLimitInMegaBytes: number) => {
  const sizeLimitInBytes = sizeLimitInMegaBytes * BYTES_IN_MEGABYTE;
  const unsupportedFileTypeMessage = FileValidations.acceptedTypesMessage(accepts);

  return zod
    .custom<DocumentFile>()
    .refine(FileValidations.requiredValidation, 'The field is required')
    .refine(file => FileValidations.sizeValidation(file, sizeLimitInBytes), FileValidations.sizeMessage(sizeLimitInMegaBytes))
    .refine(file => FileValidations.acceptedTypesValidation(file, accepts), unsupportedFileTypeMessage);
};

export const generateMultiFileSchema = (accepts: PartialMimeTypeKeys, sizeLimitInMegaBytes: number, minNumberOfFiles = 2, maxNumberOfFiles = 2) => {
  const sizeLimitInBytes = sizeLimitInMegaBytes * BYTES_IN_MEGABYTE;
  const unsupportedFileTypeMessage = FileValidations.acceptedTypesMessage(accepts);
  const minimumFilesMessage = `You must upload at least ${minNumberOfFiles} files`;
  const maximumFilesMessage = `You can only upload ${maxNumberOfFiles} files at a time`;

  return zod
    .custom<DocumentFile>()
    .array()
    .min(minNumberOfFiles, minimumFilesMessage)
    .max(maxNumberOfFiles, maximumFilesMessage)
    .refine(files => FileValidations.manySizeValidation(files, sizeLimitInBytes), FileValidations.sizeMessage(sizeLimitInMegaBytes))
    .refine(files => FileValidations.manyAcceptedTypesValidation(files, accepts), unsupportedFileTypeMessage);
};

class FileValidations {
  static requiredValidation = (document: DocumentFile) => {
    return !!document?.file;
  }

  static manyAcceptedTypesValidation = (files: DocumentFile[], accepts: PartialMimeTypeKeys) => {
    return files.every(file => this.acceptedTypesValidation(file, accepts));
  }

  static acceptedTypesValidation = (document: DocumentFile, accepts: PartialMimeTypeKeys) => {
    const acceptedTypes = mapToMimeType(accepts);

    return !!document?.file ? acceptedTypes.includes(document.file.type) : true;
  };

  static manySizeValidation = (files: DocumentFile[], sizeLimitInBytes: number) => {
    return files.every(file => this.sizeValidation(file, sizeLimitInBytes));
  }

  static sizeValidation = (document: DocumentFile, sizeLimitInBytes: number) => {
    return !!document?.file ? document.file.size <= sizeLimitInBytes : true;
  };

  static sizeMessage = (sizeLimitInMegaBytes: number) => `File size must be smaller than ${sizeLimitInMegaBytes}MB`;

  static acceptedTypesMessage = (accepts: string[]) => {
    const formattedAcceptedFiles = accepts.map(extension => `.${extension}`);
    const hasMoreThanOneAcceptedFile = formattedAcceptedFiles.length > 1;
    const hasMoreThanTwoAcceptedFiles = formattedAcceptedFiles.length > 2;

    if (hasMoreThanTwoAcceptedFiles) {
      const lastAcceptedFile = formattedAcceptedFiles.pop();
      const acceptedFiles = formattedAcceptedFiles.join(', ');
      return `Only ${acceptedFiles}, and ${lastAcceptedFile} formats are accepted`;
    }

    if (hasMoreThanOneAcceptedFile) {
      const acceptedFiles = formattedAcceptedFiles.join(' and ');
      return `Only ${acceptedFiles} formats are accepted`;
    }

    return `Only ${formattedAcceptedFiles[0]} format is accepted`;
  };
}
