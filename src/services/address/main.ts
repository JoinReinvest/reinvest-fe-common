import { Address } from '../../types/graphql';
import axios, { AxiosInstance } from 'axios';
import { AddressSuggestionsResponse, PlaceDetailsResponse, AddressAsOption, AddressServiceParameters } from './interfaces';

export class AddressService {
  private instance: AxiosInstance;
  private API_KEY: AddressServiceParameters['apiKey'];
  private URLS: AddressServiceParameters['urls'];

  constructor({ apiKey, urls }: AddressServiceParameters) {
    this.API_KEY = apiKey;
    this.URLS = urls;
    this.instance = this.getInstance();
  }

  public getSuggestions = async (query: string) => {
    const { data } = await this.instance.get<AddressSuggestionsResponse>(this.URLS.addressSuggestions, {
      params: {
        input: query,
        components: 'country:us',
        types: 'address'
      }
    });

    const predictions = data?.predictions || [];

    return this.parsePredictions(predictions);
  };

  public getAddressFromPlaceId = async (placeId: google.maps.places.AutocompletePrediction['place_id']) => {
    const { data } = await this.instance.get<PlaceDetailsResponse>(this.URLS.placeDetails, {
      params: {
        place_id: placeId,
      }
    });

    return this.parsePlaceDetails(data.result);
  };

  public getFormattedAddressLabels = (address: AddressAsOption, inputValue?: string) => {
    const hasLabel = !!address.label;
    const hasPlaceId = !!address.placeId;
    const hasFullAddress = !!address.fullAddress;

    if (hasPlaceId && hasFullAddress) {
      return address.fullAddress;
    }

    if (hasLabel) {
      return address.label;
    }

    return inputValue || '';
  }

  private getInstance = () => {
    return axios.create({
      params: {
        key: this.API_KEY,
        language: 'en_US',
      }
    });
  };

  private parsePredictions = (predictions: google.maps.places.AutocompletePrediction[]): AddressAsOption[] => {
    return predictions.map(prediction => {
      const { structured_formatting, place_id, description } = prediction;
      const { main_text } = structured_formatting;

      return {
        label: main_text,
        value: main_text,
        placeId: place_id,
        fullAddress: description
      };
    });
  };

  private parsePlaceDetails = (placeDetails: PlaceDetailsResponse['result']): Address => {
    const address: Address = {
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      zip: '',
      country: 'US',
    };

    if (placeDetails.address_components) {
      for (const component of placeDetails.address_components) {
        const componentType = component.types.at(0);

        switch (componentType) {
          case "street_number": {
            address.addressLine1 = `${component.long_name} ${address.addressLine1}`;
            break;
          }

          case "route": {
            address.addressLine1 += component.short_name;
            break;
          }

          case "postal_code": {
            address.zip = `${component.long_name}${address.zip}`;
            break;
          }

          case "postal_code_suffix": {
            address.zip = `${address.zip}-${component.long_name}`;
            break;
          }

          case "locality":
            address.city = component.long_name;
            break;

          case "administrative_area_level_1": {
            const isStateDC = component.short_name === 'DC';
            const stateCode = isStateDC ? 'WA' : component.short_name;

            address.state = stateCode;
            break;
          }

          case "country":
            address.country = component.short_name;
            break;
        }
      }
    };

    return address;
  };
};
