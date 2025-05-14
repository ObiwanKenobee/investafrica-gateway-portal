
import { useState } from 'react';
import Navbar from '../components/Navbar';
import InvestmentCard from '../components/InvestmentCard';
import InvestmentSummary from '../components/InvestmentSummary';
import { Investment, InvestmentSummary as SummaryType } from '../types/investment';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  // Mock data for investments
  const [investments] = useState<Investment[]>([
    {
      id: '1',
      investorEmail: 'investor@example.com',
      startupName: 'NairobiAgTech',
      amount: 10000,
      taxWithheld: 1500,
      netReturnEstimate: 13000,
      country: 'Kenya',
      currency: 'USD',
      status: 'CONFIRMED',
      date: '2023-09-15',
    },
    {
      id: '2',
      investorEmail: 'investor@example.com',
      startupName: 'LagosFintech',
      amount: 5000,
      taxWithheld: 500,
      netReturnEstimate: 6000,
      country: 'Nigeria',
      currency: 'USD',
      status: 'CONFIRMED',
      date: '2023-10-22',
    },
    {
      id: '3',
      investorEmail: 'investor@example.com',
      startupName: 'CairoMedical',
      amount: 8000,
      taxWithheld: 1800,
      netReturnEstimate: 8500,
      country: 'Egypt',
      currency: 'USD',
      status: 'PENDING',
      date: '2023-11-05',
    },
  ]);

  // Calculate summary data
  const summary: SummaryType = {
    totalInvested: investments.reduce((sum, inv) => sum + inv.amount, 0),
    totalTaxWithheld: investments.reduce((sum, inv) => sum + inv.taxWithheld, 0),
    potentialReturns: investments.reduce((sum, inv) => sum + inv.netReturnEstimate, 0),
    activeInvestments: investments.length,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-invest-blue">Investment Dashboard</h1>
          <Link to="/invest" className="invest-button">+ New Investment</Link>
        </div>
        
        <InvestmentSummary summary={summary} />
        
        <h2 className="text-xl font-semibold text-invest-blue mb-4">Your Investments</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {investments.map((investment) => (
            <InvestmentCard key={investment.id} data={investment} />
          ))}
        </div>
        
        {investments.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">You don't have any investments yet.</p>
            <Link to="/invest" className="invest-button">Start Investing</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
