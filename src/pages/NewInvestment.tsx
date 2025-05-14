
import Navbar from '../components/Navbar';
import InvestForm from '../components/InvestForm';

const NewInvestment = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-invest-blue mb-6">Make a New Investment</h1>
          
          <div className="mb-8">
            <p className="text-gray-600">
              Investing in African startups is now easier than ever. Choose from our curated list of 
              high-potential startups across the continent. All tax implications are automatically 
              calculated and transparently displayed.
            </p>
          </div>
          
          <InvestForm />
        </div>
      </div>
    </div>
  );
};

export default NewInvestment;
