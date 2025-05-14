
import { Investment } from '../types/investment';

interface InvestmentCardProps {
  data: Investment;
}

const InvestmentCard: React.FC<InvestmentCardProps> = ({ data }) => {
  const formatCurrency = (amount: number, currency: string = 'USD') => {
    return new Intl.NumberFormat('en-US', { 
      style: 'currency', 
      currency: currency,
      maximumFractionDigits: 0 
    }).format(amount);
  };

  const getStatusColor = (status: string) => {
    return status === 'CONFIRMED' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800';
  };

  return (
    <div className="invest-card p-6">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-bold text-xl text-invest-blue">{data.startupName}</h3>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(data.status)}`}>
          {data.status}
        </span>
      </div>
      
      <div className="mb-4">
        <p className="text-gray-600 text-sm">{data.country} • {new Date(data.date).toLocaleDateString()}</p>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-gray-500 text-sm">Invested</p>
          <p className="font-semibold text-lg">{formatCurrency(data.amount, data.currency)}</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Tax Withheld</p>
          <p className="font-semibold text-lg">{formatCurrency(data.taxWithheld, data.currency)}</p>
        </div>
      </div>
      
      <div className="bg-invest-gray p-3 rounded-md">
        <div className="flex justify-between items-center">
          <p className="text-gray-700">Potential Return</p>
          <p className="font-bold text-invest-green">{formatCurrency(data.netReturnEstimate, data.currency)}</p>
        </div>
      </div>
    </div>
  );
};

export default InvestmentCard;
