import { SelectOptions } from '../types/select-option.js';

declare const STATES: readonly [{
    readonly name: "Alabama";
    readonly code: "AL";
}, {
    readonly name: "Alaska";
    readonly code: "AK";
}, {
    readonly name: "Arizona";
    readonly code: "AZ";
}, {
    readonly name: "Arkansas";
    readonly code: "AR";
}, {
    readonly name: "California";
    readonly code: "CA";
}, {
    readonly name: "Colorado";
    readonly code: "CO";
}, {
    readonly name: "Connecticut";
    readonly code: "CT";
}, {
    readonly name: "Delaware";
    readonly code: "DE";
}, {
    readonly name: "Florida";
    readonly code: "FL";
}, {
    readonly name: "Georgia";
    readonly code: "GA";
}, {
    readonly name: "Hawaii";
    readonly code: "HI";
}, {
    readonly name: "Idaho";
    readonly code: "ID";
}, {
    readonly name: "Illinois";
    readonly code: "IL";
}, {
    readonly name: "Indiana";
    readonly code: "IN";
}, {
    readonly name: "Iowa";
    readonly code: "IA";
}, {
    readonly name: "Kansas";
    readonly code: "KS";
}, {
    readonly name: "Kentucky";
    readonly code: "KY";
}, {
    readonly name: "Louisiana";
    readonly code: "LA";
}, {
    readonly name: "Maine";
    readonly code: "ME";
}, {
    readonly name: "Maryland";
    readonly code: "MD";
}, {
    readonly name: "Massachusetts";
    readonly code: "MA";
}, {
    readonly name: "Michigan";
    readonly code: "MI";
}, {
    readonly name: "Minnesota";
    readonly code: "MN";
}, {
    readonly name: "Mississippi";
    readonly code: "MS";
}, {
    readonly name: "Missouri";
    readonly code: "MO";
}, {
    readonly name: "Montana";
    readonly code: "MT";
}, {
    readonly name: "Nebraska";
    readonly code: "NE";
}, {
    readonly name: "Nevada";
    readonly code: "NV";
}, {
    readonly name: "New Hampshire";
    readonly code: "NH";
}, {
    readonly name: "New Jersey";
    readonly code: "NJ";
}, {
    readonly name: "New Mexico";
    readonly code: "NM";
}, {
    readonly name: "New York";
    readonly code: "NY";
}, {
    readonly name: "North Carolina";
    readonly code: "NC";
}, {
    readonly name: "North Dakota";
    readonly code: "ND";
}, {
    readonly name: "Ohio";
    readonly code: "OH";
}, {
    readonly name: "Oklahoma";
    readonly code: "OK";
}, {
    readonly name: "Oregon";
    readonly code: "OR";
}, {
    readonly name: "Pennsylvania";
    readonly code: "PA";
}, {
    readonly name: "Rhode Island";
    readonly code: "RI";
}, {
    readonly name: "South Carolina";
    readonly code: "SC";
}, {
    readonly name: "South Dakota";
    readonly code: "SD";
}, {
    readonly name: "Tennessee";
    readonly code: "TN";
}, {
    readonly name: "Texas";
    readonly code: "TX";
}, {
    readonly name: "Utah";
    readonly code: "UT";
}, {
    readonly name: "Vermont";
    readonly code: "VT";
}, {
    readonly name: "Virginia";
    readonly code: "VA";
}, {
    readonly name: "Washington";
    readonly code: "WA";
}, {
    readonly name: "West Virginia";
    readonly code: "WV";
}, {
    readonly name: "Wisconsin";
    readonly code: "WI";
}, {
    readonly name: "Wyoming";
    readonly code: "WY";
}];
type StateCode = (typeof STATES)[number]['code'];
declare const STATE_CODES: [StateCode, ...StateCode[]];
declare const STATES_AS_SELECT_OPTION: SelectOptions;

export { STATES, STATES_AS_SELECT_OPTION, STATE_CODES, StateCode };
