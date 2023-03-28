import { ExtendedSelectOption } from "../../types/select-option";

export type AddressAsOption = ExtendedSelectOption<AddressProperties>;

interface AddressProperties {
  placeId?: google.maps.places.AutocompletePrediction['place_id'];
  fullAddress?: string;
};

export interface AddressServiceParameters {
  apiKey: string;
  urls: AddressServiceUrls;
};

export interface AddressServiceUrls {
    addressSuggestions: string;
    placeDetails: string;
}

export interface AddressSuggestionsResponse {
  predictions: google.maps.places.AutocompletePrediction[];
  status: google.maps.places.PlacesServiceStatus;
  error_message?: string;
  info_messages?: string[];
};

export interface PlaceDetailsResponse {
  html_attributions: string[];
  result: google.maps.places.PlaceResult;
  status: google.maps.places.PlacesServiceStatus;
  info_messages?: string[];
};
