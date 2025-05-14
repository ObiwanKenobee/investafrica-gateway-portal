
import { useState, useEffect } from 'react';
import { initializePayment } from '../services/paystack';
import { calculateTax, estimateReturns, countries } from '../services/taxEngine';

interface StartupOption {
  id: string;
  name: string;
  description: string;
  minimumInvestment: number;
}

const startupOptions: StartupOption[] = [
  { id: 'st1', name: 'NairobiAgTech', description: 'Agricultural technology startup based in Nairobi', minimumInvestment: 1000 },
  { id: 'st2', name: 'LagosFintech', description: 'Financial technology company from Lagos', minimumInvestment: 2000 },
  { id: 'st3', name: 'CairoMedical', description: 'Medical technology firm in Cairo', minimumInvestment: 3000 },
  { id: 'st4', name: 'AccraEcommerce', description: 'E-commerce platform based in Accra', minimumInvestment: 1500 },
];

const InvestForm = () => {
  const [email, setEmail] = useState('');
  const [startupId, setStartupId] = useState('');
  const [amount, setAmount] = useState(0);
  const [countryCode, setCountryCode] = useState('');
  const [taxAmount, setTaxAmount] = useState(0);
  const [netReturn, setNetReturn] = useState(0);
  const [loading, setLoading] = useState(false);
  const [selectedStartup, setSelectedStartup] = useState<StartupOption | null>(null);

  // Update selected startup when startupId changes
  useEffect(() => {
    const startup = startupOptions.find(s => s.id === startupId) || null;
    setSelectedStartup(startup);
    if (startup && amount < startup.minimumInvestment) {
      setAmount(startup.minimumInvestment);
    }
  }, [startupId]);

  // Calculate tax and returns when amount or country changes
  useEffect(() => {
    if (amount > 0 && countryCode) {
      const tax = calculateTax(amount, countryCode);
      setTaxAmount(tax);
      
      const estimatedReturn = estimateReturns(amount);
      setNetReturn(estimatedReturn - tax);
    }
  }, [amount, countryCode]);

  const handleInvest = async () => {
    if (!email || !startupId || amount <= 0 || !countryCode) {
      alert('Please fill in all required fields');
      return;
    }

    setLoading(true);
    try {
      const country = countries.find(c => c.code === countryCode);
      const res = await initializePayment(email, amount, country?.currency || 'USD');
      
      // In a real app, you would store the investment details in a database
      // and redirect to the payment page
      
      // For demo, simulate redirection to Paystack
      window.open(res.data.authorization_url, '_blank');
    } catch (error) {
      console.error('Payment initialization failed', error);
      alert('Failed to initialize payment. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
      <h2 className="text-2xl font-bold text-invest-blue mb-6">Invest in African Startups</h2>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="email" className="invest-label">Email Address</label>
          <input
            id="email"
            type="email"
            className="invest-input"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        
        <div>
          <label htmlFor="startup" className="invest-label">Select Startup</label>
          <select
            id="startup"
            className="invest-select"
            value={startupId}
            onChange={(e) => setStartupId(e.target.value)}
          >
            <option value="">-- Select a Startup --</option>
            {startupOptions.map(startup => (
              <option key={startup.id} value={startup.id}>
                {startup.name} (Min: ${startup.minimumInvestment})
              </option>
            ))}
          </select>
        </div>

        {selectedStartup && (
          <div className="bg-gray-50 p-3 rounded-md text-sm">
            <p>{selectedStartup.description}</p>
            <p className="mt-1 text-gray-600">Minimum investment: ${selectedStartup.minimumInvestment}</p>
          </div>
        )}
        
        <div>
          <label htmlFor="country" className="invest-label">Investment Country</label>
          <select
            id="country"
            className="invest-select"
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
          >
            <option value="">-- Select a Country --</option>
            {countries.map(country => (
              <option key={country.code} value={country.code}>
                {country.name} (Tax Rate: {country.taxRate}%)
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="amount" className="invest-label">Investment Amount (USD)</label>
          <input
            id="amount"
            type="number"
            className="invest-input"
            min={selectedStartup?.minimumInvestment || 0}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>
        
        {amount > 0 && countryCode && (
          <div className="bg-invest-gray p-4 rounded-lg space-y-2 mt-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Tax Withholding:</span>
              <span className="font-semibold">${taxAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Estimated Return:</span>
              <span className="font-semibold text-invest-green">${netReturn.toFixed(2)}</span>
            </div>
          </div>
        )}
        
        <button
          className="invest-button w-full mt-6 py-3"
          onClick={handleInvest}
          disabled={loading}
        >
          {loading ? 'Processing...' : 'Proceed to Payment'}
        </button>
      </div>
    </div>
  );
};

export default InvestForm;
