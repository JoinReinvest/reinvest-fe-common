declare const MIME_TYPES: {
    readonly pdf: "application/pdf";
    readonly jpg: "image/jpg";
    readonly jpeg: "image/jpeg";
    readonly png: "image/png";
};
type MimeTypeKeys = keyof typeof MIME_TYPES;
type PartialMimeTypeKeys = Partial<MimeTypeKeys>[];
declare const mapToMimeType: (keys: PartialMimeTypeKeys) => string[];

export { MIME_TYPES, MimeTypeKeys, PartialMimeTypeKeys, mapToMimeType };
