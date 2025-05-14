
export interface Investment {
  id: string;
  investorEmail: string;
  startupName: string;
  amount: number;
  taxWithheld: number;
  netReturnEstimate: number;
  country: string;
  currency: string;
  status: 'PENDING' | 'CONFIRMED';
  date: string;
}

export interface Country {
  code: string;
  name: string;
  taxRate: number;
  currency: string;
}

export interface InvestmentSummary {
  totalInvested: number;
  totalTaxWithheld: number;
  potentialReturns: number;
  activeInvestments: number;
}
