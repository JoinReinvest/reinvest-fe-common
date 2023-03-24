import { PartialMimeTypeKeys } from './constants/mime-types.js';
import zod from 'zod';

declare const formValidationRules: {
    email: zod.ZodString;
    password: zod.ZodString;
    confirm_password: zod.ZodString;
    firstName: zod.ZodString;
    lastName: zod.ZodString;
    netWorth: zod.ZodString;
    netIncome: zod.ZodString;
    employerName: zod.ZodString;
    occupation: zod.ZodString;
    industry: zod.ZodString;
    birthCountry: zod.ZodString;
    citizenshipCountry: zod.ZodString;
    visaType: zod.ZodString;
    middleName: zod.ZodOptional<zod.ZodString>;
    referralCode: zod.ZodString;
    date: zod.ZodString;
    phoneNumber: zod.ZodString;
    authenticationCode: zod.ZodString;
    socialSecurityNumber: zod.ZodString;
    ein: zod.ZodString;
    address: zod.ZodObject<{
        addressLine1: zod.ZodString;
        addressLine2: zod.ZodNullable<zod.ZodString>;
        city: zod.ZodString;
        state: zod.ZodEnum<["AL" | "AK" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "FL" | "GA" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "OH" | "OK" | "OR" | "PA" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VA" | "WA" | "WV" | "WI" | "WY", ...("AL" | "AK" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "FL" | "GA" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "OH" | "OK" | "OR" | "PA" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VA" | "WA" | "WV" | "WI" | "WY")[]]>;
        zip: zod.ZodString;
    }, "strip", zod.ZodTypeAny, {
        addressLine1: string;
        addressLine2: string | null;
        city: string;
        state: "AL" | "AK" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "FL" | "GA" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "OH" | "OK" | "OR" | "PA" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VA" | "WA" | "WV" | "WI" | "WY";
        zip: string;
    }, {
        addressLine1: string;
        addressLine2: string | null;
        city: string;
        state: "AL" | "AK" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "FL" | "GA" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "OH" | "OK" | "OR" | "PA" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VA" | "WA" | "WV" | "WI" | "WY";
        zip: string;
    }>;
};
declare const generateFileSchema: (accepts: PartialMimeTypeKeys, sizeLimitInMegaBytes: number) => zod.ZodEffects<zod.ZodEffects<zod.ZodEffects<zod.ZodType<File, zod.ZodTypeDef, File>, File, File>, File, File>, File, File>;
declare const generateMultiFileSchema: (accepts: PartialMimeTypeKeys, sizeLimitInMegaBytes: number) => zod.ZodEffects<zod.ZodEffects<zod.ZodArray<zod.ZodType<File, zod.ZodTypeDef, File>, "many">, File[], File[]>, File[], File[]>;
declare const dateOlderThanEighteenYearsSchema: zod.ZodEffects<zod.ZodString, string, string>;

export { dateOlderThanEighteenYearsSchema, formValidationRules, generateFileSchema, generateMultiFileSchema };
