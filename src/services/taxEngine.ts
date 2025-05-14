
import { Country } from "../types/investment";

// Mock tax data for different African countries
export const countries: Country[] = [
  { code: "KE", name: "Kenya", taxRate: 15, currency: "KES" },
  { code: "NG", name: "Nigeria", taxRate: 10, currency: "NGN" },
  { code: "ZA", name: "South Africa", taxRate: 20, currency: "ZAR" },
  { code: "EG", name: "Egypt", taxRate: 22.5, currency: "EGP" },
  { code: "GH", name: "Ghana", taxRate: 25, currency: "GHS" },
  { code: "RW", name: "Rwanda", taxRate: 15, currency: "RWF" },
  { code: "ET", name: "Ethiopia", taxRate: 30, currency: "ETB" },
  { code: "UG", name: "Uganda", taxRate: 30, currency: "UGX" },
  { code: "TZ", name: "Tanzania", taxRate: 30, currency: "TZS" },
  { code: "CI", name: "Côte d'Ivoire", taxRate: 25, currency: "XOF" },
];

// Calculate tax withholding for a given investment amount and country code
export const calculateTax = (amount: number, countryCode: string): number => {
  const country = countries.find(c => c.code === countryCode);
  if (!country) return 0;
  
  return amount * (country.taxRate / 100);
};

// Estimate net returns (simplified for demo)
export const estimateReturns = (amount: number): number => {
  // Simple projection assuming 30% ROI over investment period
  return amount * 1.3;
};

// Get tax information for a specific country
export const getCountryTaxInfo = (countryCode: string) => {
  const country = countries.find(c => c.code === countryCode);
  if (!country) return null;
  
  return {
    name: country.name,
    taxRate: country.taxRate,
    description: `${country.name} has a withholding tax rate of ${country.taxRate}% on investment returns. This is automatically calculated and withheld when you invest through InvestAfrica Gateway.`,
    requirements: [
      "Valid government ID",
      "Tax Identification Number",
      "Proof of residence",
      "Bank account information"
    ],
    currency: country.currency
  };
};
