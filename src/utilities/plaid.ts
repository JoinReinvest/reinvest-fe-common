import { FulfillBankAccountInput } from '../types/graphql';

interface DataFromPlaid {
  accountId: string;
  account_name: string;
  account_number: string;
  account_type: string;
  institutionId: string;
  institution_name: string;
  refNum: string;
  routing_number: string;
}

export interface PlaidEvent {
  data: string | DataFromPlaid
}

export const mapPlaidDataForApi = (plaidData: DataFromPlaid): FulfillBankAccountInput => ({
  accountName: plaidData.account_name,
  accountNumber: plaidData.account_number,
  accountType: plaidData.account_type,
  institutionId: plaidData.institutionId,
  institutionName: plaidData.institution_name,
  refNumber: plaidData.refNum,
  routingNumber: plaidData.routing_number,
});
