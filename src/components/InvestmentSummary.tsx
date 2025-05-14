
import { InvestmentSummary as SummaryType } from '../types/investment';

interface InvestmentSummaryProps {
  summary: SummaryType;
}

const InvestmentSummary: React.FC<InvestmentSummaryProps> = ({ summary }) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', { 
      style: 'currency', 
      currency: 'USD',
      maximumFractionDigits: 0 
    }).format(amount);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <h3 className="text-gray-500 font-medium text-sm mb-1">Total Invested</h3>
        <p className="text-2xl font-bold text-invest-blue">{formatCurrency(summary.totalInvested)}</p>
      </div>
      
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <h3 className="text-gray-500 font-medium text-sm mb-1">Tax Withheld</h3>
        <p className="text-2xl font-bold text-invest-blue">{formatCurrency(summary.totalTaxWithheld)}</p>
      </div>
      
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <h3 className="text-gray-500 font-medium text-sm mb-1">Potential Returns</h3>
        <p className="text-2xl font-bold text-invest-green">{formatCurrency(summary.potentialReturns)}</p>
      </div>
      
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <h3 className="text-gray-500 font-medium text-sm mb-1">Active Investments</h3>
        <p className="text-2xl font-bold text-invest-blue">{summary.activeInvestments}</p>
      </div>
    </div>
  );
};

export default InvestmentSummary;
